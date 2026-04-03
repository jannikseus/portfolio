import type { LayoutServerLoad } from './$types';
import { resolveLocale } from '$lib/i18n';

export const load: LayoutServerLoad = async ({ cookies }) => {
	const locale = resolveLocale(cookies.get('locale'));

	return {
		locale
	};
};

