export type Theme = 'light' | 'dark' | 'system';

const storageKey = 'theme';
const mediaQuery = '(prefers-color-scheme: dark)';
let initialized = false;

export const themeState = $state<{ value: Theme }>({ value: 'system' });

function applyTheme(nextTheme: Theme, persist = true) {
	themeState.value = nextTheme;

	if (typeof window === 'undefined') return;

	const isDark =
		nextTheme === 'dark' ||
		(nextTheme === 'system' && window.matchMedia(mediaQuery).matches);

	document.documentElement.classList.toggle('dark', isDark);
	document.documentElement.dataset.theme = nextTheme;

	if (persist) window.localStorage.setItem(storageKey, nextTheme);
}

export function setTheme(nextTheme: Theme) {
	applyTheme(nextTheme);
}

export function initializeTheme() {
	if (initialized || typeof window === 'undefined') return;

	initialized = true;
	const storedTheme = window.localStorage.getItem(storageKey);
	const initialTheme: Theme =
		storedTheme === 'light' || storedTheme === 'dark' || storedTheme === 'system' ? storedTheme : 'system';

	applyTheme(initialTheme);
	window.matchMedia(mediaQuery).addEventListener('change', () => {
		if (themeState.value === 'system') applyTheme('system', false);
	});
}