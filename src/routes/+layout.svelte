<script lang="ts">
	import './layout.css';
	import { fade, fly } from 'svelte/transition';
	import { page } from '$app/state';
	import { Button } from '$lib/components/ui/button';
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
	import type { LayoutData } from './$types';
	import { _, changeLocale, initI18n, locale, type SupportedLocale } from '$lib/i18n';
	import packageJson from '../../package.json';

	let { children, data }: { children: import('svelte').Snippet; data: LayoutData } = $props();
	const localeFromData = $derived(data.locale);

	$effect(() => {
		initI18n(localeFromData);
	});

	let mobileMenuOpen = $state(false);

	const isHomePage = $derived(page.url.pathname === '/');

	const navItems = $derived([
		{ href: isHomePage ? '#home' : '/', labelKey: 'nav.home', section: 'home' },
		{ href: '/projects', labelKey: 'nav.projects', section: 'projects' },
		{ href: isHomePage ? '#blog' : '/blog', labelKey: 'nav.blog', section: 'blog' },
		{ href: isHomePage ? '#contact' : '/contact', labelKey: 'nav.contact', section: 'contact' }
	]);

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
	<meta property="og:site_name" content={$_('common.siteName')} />
	<meta property="og:type" content="website" />
</svelte:head>

<svelte:window onkeydown={(event) => mobileMenuOpen && event.key === 'Escape' && closeMobileMenu()} />

<div class="mx-auto flex min-h-screen max-w-5xl flex-col px-4 py-6 sm:px-6 lg:px-8">
	<header class="sticky top-0 z-30 mb-8 flex flex-col gap-4 border-b bg-background/95 py-3 backdrop-blur sm:mb-10 sm:flex-row sm:items-center sm:justify-between">
		<div class="hidden items-center gap-3 sm:flex">
			<a class="font-mono text-sm font-semibold tracking-wide" href="/">jannikseus.tech</a>
			<div
				class="technical-label flex items-center gap-2 text-xs font-medium text-foreground"
				aria-label={`${$_('home.statusLabel')}: ${$_('home.statusDetail')}`}
			>
				<span class="size-1.5 rounded-full bg-emerald-500" aria-hidden="true"></span>
				<span>{$_('home.statusLabel')}</span>
			</div>
		</div>
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
			<a class="font-mono text-sm font-semibold tracking-wide" href="/">jannikseus.tech</a>
		</div>
		<div class="hidden flex-wrap items-center gap-2 sm:flex">
			<nav aria-label={$_('nav.mainNavigationAria')} class="flex flex-wrap gap-2">
				{#each navItems as item}
					<Button
						href={item.href}
						variant="ghost"
						size="sm"
						class="font-mono"
					>
						{$_(item.labelKey)}
					</Button>
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
			<ThemeSwitcher />
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
							class="font-mono text-sm font-semibold tracking-wide"
							onclick={closeMobileMenu}
						>
							jannikseus.tech
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
						<ThemeSwitcher />
					</div>
					<div class="technical-label flex items-center gap-2 text-xs text-muted-foreground">
						<span class="size-2 rounded-full bg-emerald-500" aria-hidden="true"></span>
						<span class="text-foreground">{$_('home.statusLabel')}</span>
					</div>
					<nav aria-label={$_('nav.mainNavigationAria')} class="flex flex-col gap-1 border-t pt-3">
						{#each navItems as item}
							<Button
								href={item.href}
								variant="ghost"
								size="sm"
								class="w-full justify-start font-mono"
								onclick={closeMobileMenu}
							>
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
		<div class="flex flex-wrap items-center justify-between gap-3">
			<p>{$_('layout.footer')}</p>
			<div class="flex items-center gap-3">
				<a
					class="font-mono underline underline-offset-4 hover:text-foreground"
					href={`https://github.com/jannikseus/portfolio/releases/tag/v${packageJson.version}`}
					target="_blank"
					rel="noreferrer"
					aria-label={`Website version ${packageJson.version}`}
				>
					v{packageJson.version}
				</a>
				<a
					class="inline-flex size-7 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
					href="https://github.com/jannikseus/portfolio"
					target="_blank"
					rel="noreferrer"
					aria-label="GitHub repository for this website"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="size-4"
						aria-hidden="true"
					>
						<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.4 3.8 5 5 0 0 0 19.3 0S18.2-.4 15 1.5a13.4 13.4 0 0 0-7 0C4.8-.4 3.7 0 3.7 0a5 5 0 0 0-.1 3.8A5.4 5.4 0 0 0 2.2 7.5c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4" />
						<path d="M8 19c-3 .9-3-1.5-4-2" />
					</svg>
				</a>
			</div>
		</div>
		<div class="mt-2 flex flex-wrap gap-3">
			<a class="underline underline-offset-4 hover:text-foreground" href="/imprint">{$_('layout.imprint')}</a>
			<a class="underline underline-offset-4 hover:text-foreground" href="/privacy">{$_('layout.privacy')}</a>
		</div>
	</footer>
</div>
