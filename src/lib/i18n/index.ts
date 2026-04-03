import { addMessages, init, locale, waitLocale, _ } from 'svelte-i18n';
import en from './messages/en';
import de from './messages/de';

export const supportedLocales = ['en', 'de'] as const;
export type SupportedLocale = (typeof supportedLocales)[number];

export const defaultLocale: SupportedLocale = 'en';

let isInitialized = false;

addMessages('en', en);
addMessages('de', de);

function ensureInitialized(initialLocale: SupportedLocale = defaultLocale) {
	if (!isInitialized) {
		init({
			fallbackLocale: defaultLocale,
			initialLocale
		});
		isInitialized = true;
	}
}

// Ensure formatting is always safe during the first SSR render.
ensureInitialized(defaultLocale);

export function resolveLocale(input?: string | null): SupportedLocale {
	return input === 'de' ? 'de' : 'en';
}

export function initI18n(initialLocale?: string | null) {
	const resolved = resolveLocale(initialLocale);

	ensureInitialized(resolved);
	locale.set(resolved);

	return resolved;
}

export async function changeLocale(nextLocale: SupportedLocale) {
	locale.set(nextLocale);
	await waitLocale();
}

export { locale, _ };
