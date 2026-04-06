<script lang="ts">
	import './layout.css';
	import { fade, fly } from 'svelte/transition';
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
		{ href: '/contact', labelKey: 'nav.contact' }
	] as const;

	let mobileMenuOpen = $state(false);

	async function switchLanguage(nextLocale: SupportedLocale) {
		await changeLocale(nextLocale);

		if (typeof document !== 'undefined') {
			document.cookie = `locale=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
		}
	}

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta property="og:site_name" content={$_('common.siteName')} />
	<meta property="og:type" content="website" />
</svelte:head>

<svelte:window onkeydown={(event) => mobileMenuOpen && event.key === 'Escape' && closeMobileMenu()} />

<div class="mx-auto flex min-h-screen max-w-5xl flex-col px-4 py-6 sm:px-6 lg:px-8">
	<header class="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-center sm:justify-between">
		<a class="hidden text-sm font-semibold tracking-wide sm:block" href="/">jannik.dev</a>
		<div class="flex items-center gap-3 sm:hidden">
			<Button
				type="button"
				variant="outline"
				size="sm"
				class="h-9 w-9 p-0"
				onclick={toggleMobileMenu}
				aria-controls="mobile-main-navigation"
				aria-haspopup="dialog"
				aria-expanded={mobileMenuOpen}
				aria-label={mobileMenuOpen ? $_('common.closeMenu') : $_('common.openMenu')}
			>
				<span class="sr-only">{mobileMenuOpen ? $_('common.closeMenu') : $_('common.openMenu')}</span>
				{#if mobileMenuOpen}
					<span aria-hidden="true" class="text-base leading-none">X</span>
				{:else}
					<span aria-hidden="true" class="flex h-4 w-4 flex-col justify-between">
						<span class="block h-0.5 w-4 bg-current"></span>
						<span class="block h-0.5 w-4 bg-current"></span>
						<span class="block h-0.5 w-4 bg-current"></span>
					</span>
				{/if}
			</Button>
			<a class="text-sm font-semibold tracking-wide" href="/">jannik.dev</a>
		</div>
		<div class="hidden flex-wrap items-center gap-2 sm:flex">
			<nav aria-label={$_('nav.mainNavigationAria')} class="flex flex-wrap gap-2">
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

		{#if mobileMenuOpen}
			<div class="fixed inset-0 z-40 sm:hidden">
				<button
					type="button"
					class="absolute inset-0 bg-black/40"
					onclick={closeMobileMenu}
					aria-label={$_('common.closeMenu')}
					transition:fade={{ duration: 150 }}
				></button>
				<aside
					id="mobile-main-navigation"
					aria-label={$_('nav.mainNavigationAria')}
					class="absolute left-0 top-0 z-50 flex h-full w-72 max-w-[85vw] flex-col gap-4 border-r bg-background p-4 shadow-lg"
					transition:fly={{ x: -32, duration: 180 }}
				>
					<div class="flex items-center justify-between gap-2">
						<a
							href="/"
							class="text-sm font-semibold tracking-wide"
							onclick={closeMobileMenu}
						>
							jannik.dev
						</a>
						<div class="flex items-center gap-1" aria-label={$_('common.languageLabel')}>
							<Button
								type="button"
								variant={$locale === 'en' ? 'default' : 'outline'}
								size="sm"
								class="justify-start"
								onclick={async () => {
									await switchLanguage('en');
									closeMobileMenu();
								}}
							>
								{$_('common.langEnglish')}
							</Button>
							<Button
								type="button"
								variant={$locale === 'de' ? 'default' : 'outline'}
								size="sm"
								class="justify-start"
								onclick={async () => {
									await switchLanguage('de');
									closeMobileMenu();
								}}
							>
								{$_('common.langGerman')}
							</Button>
						</div>
					</div>
					<nav aria-label={$_('nav.mainNavigationAria')} class="flex flex-col gap-1 border-t pt-3">
						{#each navItems as item}
							<Button href={item.href} variant="ghost" size="sm" class="w-full justify-start" onclick={closeMobileMenu}>
								{$_(item.labelKey)}
							</Button>
						{/each}
					</nav>
					<div class="mt-auto border-t pt-3 text-xs text-muted-foreground">
						<div class="flex flex-wrap gap-3">
							<a class="underline underline-offset-4 hover:text-foreground" href="/imprint" onclick={closeMobileMenu}>
								{$_('layout.imprint')}
							</a>
							<a class="underline underline-offset-4 hover:text-foreground" href="/privacy" onclick={closeMobileMenu}>
								{$_('layout.privacy')}
							</a>
						</div>
					</div>
				</aside>
			</div>
		{/if}
	</header>

	<main class="flex-1">{@render children()}</main>

	<footer class="mt-12 border-t pt-6 text-xs text-muted-foreground">
		<p>{$_('layout.footer')}</p>
		<div class="mt-2 flex flex-wrap gap-3">
			<a class="underline underline-offset-4 hover:text-foreground" href="/imprint">{$_('layout.imprint')}</a>
			<a class="underline underline-offset-4 hover:text-foreground" href="/privacy">{$_('layout.privacy')}</a>
		</div>
	</footer>
</div>
