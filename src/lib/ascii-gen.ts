type Rng = () => number;

export const W = 40;
export const H = 14;

/** FNV-1a: string -> 32-bit hash */
export function hash(str: string): number {
	let h = 0x811c9dc5;
	for (let i = 0; i < str.length; i++) {
		h ^= str.charCodeAt(i);
		h = Math.imul(h, 0x01000193);
	}
	return h >>> 0;
}

/** mulberry32: 32-bit seed -> deterministic PRNG in [0, 1) */
export function mulberry32(seed: number): Rng {
	return () => {
		seed = (seed + 0x6d2b79f5) | 0;
		let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
		t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
		return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
	};
}

const pick = <T>(r: Rng, xs: readonly T[]): T => xs[Math.floor(r() * xs.length)];

/* 1) Symmetrische Muster (Identicon / Rorschach) */
function mirror(r: Rng): string[] {
	const qw = W / 4;
	const qh = H / 2;
	const fill = pick(r, ['██', '▓▓', '▒▒', '░░', '##', '@@']);
	const q = Array.from({ length: qh }, () => Array.from({ length: qw }, () => r() < 0.5));
	const s = q.map((row, y) =>
		row.map((v, x) => {
			let n = 0;
			for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
				if (q[y + dy]?.[x + dx]) n++;
			}
			return n >= 3 ? true : n <= 1 ? false : v;
		})
	);
	const rows = s.map((row) => [...row, ...[...row].reverse()].map((cell) => (cell ? fill : '  ')).join(''));
	return [...rows, ...[...rows].reverse()];
}

/* 2) Zellulare Automaten (Rule 30/90/110 ...) */
function automaton(r: Rng): string[] {
	const rule = pick(r, [30, 90, 110, 54, 62, 150, 182]);
	const on = pick(r, ['█', '▓', '#', '@']);
	let row = Array.from({ length: W }, () => 0);
	if (r() < 0.5) row[W >> 1] = 1;
	else row = row.map(() => (r() < 0.15 ? 1 : 0));
	const out: string[] = [];
	for (let y = 0; y < H; y++) {
		out.push(row.map((cell) => (cell ? on : ' ')).join(''));
		const prev = row;
		row = prev.map((cell, i) => {
			const left = prev[(i - 1 + W) % W];
			const right = prev[(i + 1) % W];
			return (rule >> (left * 4 + cell * 2 + right)) & 1;
		});
	}
	return out;
}

/* 3) Julia-Menge mit Parametern aus dem Hash */
function julia(r: Rng): string[] {
	const ramp = pick(r, [' .:-=+*#%@', ' ░▒▓█']);
	const cs = [[-0.8, 0.156], [0.285, 0.01], [-0.4, 0.6], [-0.70176, -0.3842], [0.355, 0.355], [-0.835, -0.2321]];
	const [c0, c1] = pick(r, cs);
	const cr = c0 + (r() - 0.5) * 0.04;
	const ci = c1 + (r() - 0.5) * 0.04;
	const max = 30;
	const out: string[] = [];
	for (let y = 0; y < H; y++) {
		let line = '';
		for (let x = 0; x < W; x++) {
			let zr = -1.6 + (3.2 * x) / (W - 1);
			let zi = -1.12 + (2.24 * y) / (H - 1);
			let i = 0;
			while (i < max && zr * zr + zi * zi <= 4) {
				const t = zr * zr - zi * zi + cr;
				zi = 2 * zr * zi + ci;
				zr = t;
				i++;
			}
			line += ramp[Math.floor((i / max) * (ramp.length - 1))];
		}
		out.push(line);
	}
	return out;
}

/* 4) Plasma: Überlagerung von Sinuswellen */
function plasma(r: Rng): string[] {
	const ramp = pick(r, [' .:-=+*#%@', ' ░▒▓█', ' ·•●']);
	const f = [0, 0, 0, 0].map(() => 0.15 + r() * 0.35);
	const p = [0, 0, 0, 0].map(() => r() * Math.PI * 2);
	const cx = W * (0.3 + r() * 0.4);
	const cy = H * (0.3 + r() * 0.4);
	const out: string[] = [];
	for (let y = 0; y < H; y++) {
		let line = '';
		for (let x = 0; x < W; x++) {
			const v =
				Math.sin(x * f[0] + p[0]) +
				Math.sin(y * f[1] * 2 + p[1]) +
				Math.sin((x + y * 2) * f[2] * 0.7 + p[2]) +
				Math.sin(Math.hypot(x - cx, (y - cy) * 2) * f[3] + p[3]);
			line += ramp[Math.min(ramp.length - 1, Math.floor(((v + 4) / 8) * ramp.length))];
		}
		out.push(line);
	}
	return out;
}

/* 5) Truchet-Kacheln */
function truchet(r: Rng): string[] {
	const [a, b] = pick(r, [['╱', '╲'], ['╭', '╯'], ['┘', '┌'], ['/', '\\']]);
	const bias = 0.35 + r() * 0.3;
	return Array.from({ length: H }, () =>
		Array.from({ length: W }, () => (r() < bias ? a : b)).join('')
	);
}

const STYLES = [mirror, automaton, julia, plasma, truchet];

export const PRESETS = ['build backend', 'train models', 'deploy infra'];

const PRESET_OUTPUTS: Record<string, string[]> = {
	'build backend': ['FastAPI backend built successfully.', 'FastAPI service is running.'],
	'train models': ['Anomaly detection model re-trained.', 'Model served and ready for inference.'],
	'deploy infra': ['S3 bucket deployed successfully.', 'Data loading with Iceberg succeeded.']
};

export const HELP = [
	'Commands:',
	'  build backend',
	'  train models',
	'  deploy infra',
	'  help',
	'  jannik.exe',
	'  clear',
	'Any other input generates ASCII art.'
];

export const LOGO = [
	'   _                   _ _                   ',
	'  (_) __ _ _ __  _ __ (_) | __  _____  _____ ',
	"  | |/ _` | '_ \x5c| '_ \x5c| | |/ / / _ \x5c \x5c/ / _ \x5c",
	'  | | (_| | | | | | | | |   < |  __/>  <  __/',
	' _/ |\\__,_|_| |_|_| |_|_|_|_\\(_)___/_/\\_\\___|',
	'|__/'
];

/** Gleicher Input + gleicher Salt => dieselbe Art. Ein höherer Salt erzeugt eine neue Variante. */
export function generate(input: string, salt = 0): string[] {
	const cmd = input.trim();
	const normalized = cmd.toLowerCase();
	if (/^(jannik(\.exe)?|whoami)$/i.test(cmd)) return LOGO;
	if (normalized === 'help') return HELP;
	if (normalized === 'clear') return [];
	if (Object.prototype.hasOwnProperty.call(PRESET_OUTPUTS, normalized)) return PRESET_OUTPUTS[normalized];

	const seed = hash(`${normalized}:${salt}`);
	return STYLES[seed % STYLES.length](mulberry32(seed));
}

/** Returns the same salt throughout a UTC hour. */
export function getHourlySalt(timestamp = Date.now()): number {
	return Math.floor(timestamp / 3_600_000);
}
