<script lang="ts">
	import { Button } from '#lib/components/ui/button/index';
	import { _, changeLocale, locale, type SupportedLocale } from '#lib/i18n/index';

	const currentLanguage = $derived($locale === 'de' ? $_('common.langGerman') : $_('common.langEnglish'));
	const nextLanguageAction = $derived($locale === 'de' ? $_('common.switchToEnglish') : $_('common.switchToGerman'));
	const accessibleLabel = $derived(
		`${$_('common.languageLabel')}: ${currentLanguage}. ${nextLanguageAction}`
	);

	function toggleLanguage() {
		const nextLocale: SupportedLocale = $locale === 'de' ? 'en' : 'de';

		if (typeof document !== 'undefined') {
			document.documentElement.lang = nextLocale;
			document.cookie = `locale=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
		}

		void changeLocale(nextLocale);
	}
</script>

<Button
	type="button"
	variant="outline"
	size="sm"
	class="h-7 min-w-10 px-2 font-mono transition-none"
	aria-label={accessibleLabel}
	title={accessibleLabel}
	onclick={toggleLanguage}
>
	{currentLanguage}
</Button>