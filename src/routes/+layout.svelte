<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { Button } from '$lib/components/ui/button';
	import type { LayoutData } from './$types';
	import { _, changeLocale, initI18n, locale, type SupportedLocale } from '$lib/i18n';

	let { children, data }: { children: import('svelte').Snippet; data: LayoutData } = $props();
	const localeFromData = $derived(data.locale);

	$effect(() => {
		initI18n(localeFromData);
	});

	const navItems = [
		{ href: '/', labelKey: 'nav.home' },
		{ href: '/about', labelKey: 'nav.about' },
		{ href: '/projects', labelKey: 'nav.projects' },
		{ href: '/contact', labelKey: 'nav.contact' },
		{ href: '/lab', labelKey: 'nav.lab' }
	] as const;

	async function switchLanguage(nextLocale: SupportedLocale) {
		await changeLocale(nextLocale);

		if (typeof document !== 'undefined') {
			document.cookie = `locale=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
		}
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta property="og:site_name" content={$_('common.siteName')} />
	<meta property="og:type" content="website" />
</svelte:head>

<div class="mx-auto flex min-h-screen max-w-5xl flex-col px-4 py-6 sm:px-6 lg:px-8">
	<header class="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-center sm:justify-between">
		<a class="text-sm font-semibold tracking-wide" href="/">jannik.dev</a>
		<div class="flex flex-wrap items-center gap-2">
			<nav aria-label="Main navigation" class="flex flex-wrap gap-2">
				{#each navItems as item}
					<Button href={item.href} variant="ghost" size="sm">{$_(item.labelKey)}</Button>
				{/each}
			</nav>
			<div class="ml-1 flex items-center gap-1" aria-label={$_('common.languageLabel')}>
				<Button
					type="button"
					variant={$locale === 'en' ? 'default' : 'outline'}
					size="sm"
					onclick={() => switchLanguage('en')}
				>
					{$_('common.langEnglish')}
				</Button>
				<Button
					type="button"
					variant={$locale === 'de' ? 'default' : 'outline'}
					size="sm"
					onclick={() => switchLanguage('de')}
				>
					{$_('common.langGerman')}
				</Button>
			</div>
		</div>
	</header>

	<main class="flex-1">{@render children()}</main>

	<footer class="mt-12 border-t pt-6 text-xs text-muted-foreground">
		<p>{$_('layout.footer')}</p>
	</footer>
</div>
