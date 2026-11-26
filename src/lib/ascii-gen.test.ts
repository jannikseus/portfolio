import { strict as assert } from 'node:assert';
import { describe, it } from 'node:test';
import { generate, getHourlySalt, H, HELP, LOGO, PRESETS, W, hash } from './ascii-gen';

describe('ascii terminal generator', () => {
	it('provides three presets and handles help and the logo aliases', () => {
		assert.deepStrictEqual(PRESETS, ['build backend', 'train models', 'deploy infra']);
		assert.deepStrictEqual(generate('help'), HELP);
		assert.deepStrictEqual(generate('JANNIK.EXE'), LOGO);
		assert.deepStrictEqual(generate('whoami'), LOGO);
		assert.deepStrictEqual(generate('clear'), []);
	});

	it('returns project-specific output for each preset', () => {
		assert.deepStrictEqual(generate('build backend'), [
			'FastAPI backend built successfully.',
			'FastAPI service is running.'
		]);
		assert.deepStrictEqual(generate('train models'), [
			'Anomaly detection model re-trained.',
			'Model served and ready for inference.'
		]);
		assert.deepStrictEqual(generate('deploy infra'), [
			'S3 bucket deployed successfully.',
			'Data loading with Iceberg succeeded.'
		]);
		assert.ok(PRESETS.every((command) => generate(command).every((line) => line.length <= W)));
		assert.ok(HELP.includes('  deploy infra'));
		assert.ok(HELP.includes('Any other input generates ASCII art.'));
	});

	it('creates deterministic 40-by-14 ASCII art for arbitrary commands', () => {
		for (const command of ['foo', 'constructor']) {
			const output = generate(command, 7);

			assert.deepStrictEqual(output, generate(command, 7));
			assert.equal(output.length, H);
			assert.ok(output.every((line) => line.length <= W));
		}
	});

	it('reproduces the same art for the same command across runs', () => {
		const firstOutput = generate('foo');

		generate('train models');
		assert.deepStrictEqual(generate('foo'), firstOutput);
	});

	it('varies the generated art when the salt changes', () => {
		const outputs = new Set(Array.from({ length: 100 }, (_, salt) => generate('foo', salt).join('\n')));

		assert.ok(outputs.size >= 5);
	});

	it('keeps the hourly salt stable until the next UTC hour', () => {
		const hourStart = Date.UTC(2026, 10, 25, 13);
		const salt = getHourlySalt(hourStart);

		assert.equal(getHourlySalt(hourStart + 3_599_999), salt);
		assert.equal(getHourlySalt(hourStart + 3_600_000), salt + 1);
		assert.deepStrictEqual(
			generate('foo', getHourlySalt(hourStart + 1_000)),
			generate('foo', getHourlySalt(hourStart + 3_599_000))
		);
	});

	it('hashes strings to unsigned 32-bit values', () => {
		assert.equal(hash(''), 0x811c9dc5);
		assert.ok(hash('train models') >= 0);
		assert.ok(hash('train models') <= 0xffffffff);
	});
});
