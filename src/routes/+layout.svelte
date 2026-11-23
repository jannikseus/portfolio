<script lang="ts">
	import './layout.css';
	import { fade, fly } from 'svelte/transition';
	import { page } from '$app/state';
	import { Button } from '#lib/components/ui/button/index';
	import LanguageSwitcher from '#lib/components/LanguageSwitcher.svelte';
	import ThemeSwitcher from '#lib/components/ThemeSwitcher.svelte';
	import type { LayoutData } from './$types';
	import { _, initI18n } from '#lib/i18n/index';
	import packageJson from '../../package.json';

	let { children, data }: { children: import('svelte').Snippet; data: LayoutData } = $props();
	const localeFromData = $derived(data.locale);

	$effect(() => {
		initI18n(localeFromData);
		if (typeof document !== 'undefined') document.documentElement.lang = localeFromData;
	});

	let mobileMenuOpen = $state(false);
	let mobileMenuTrigger = $state<HTMLElement | null>(null);
	let mobileMenuCloseButton = $state<HTMLElement | null>(null);
	let mobileMenuDialog = $state<HTMLDivElement | null>(null);
	let desktopNavigation = $state<HTMLElement | null>(null);
	let previouslyFocusedElement: HTMLElement | null = null;

	$effect(() => {
		if (mobileMenuOpen) {
			mobileMenuCloseButton?.focus();
			return;
		}

		if (previouslyFocusedElement?.isConnected) previouslyFocusedElement.focus();
		previouslyFocusedElement = null;
	});

	const isHomePage = $derived(page.url.pathname === '/');

	const navItems = $derived([
		{ href: isHomePage ? '#home' : '/', labelKey: 'nav.home', section: 'home' },
		{ href: '/projects', labelKey: 'nav.projects', section: 'projects' },
		{ href: '/blog', labelKey: 'nav.blog', section: 'blog' },
		{ href: '/contact', labelKey: 'nav.contact', section: 'contact' }
	]);

	function toggleMobileMenu() {
		if (!mobileMenuOpen && mobileMenuTrigger) previouslyFocusedElement = mobileMenuTrigger;
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}

	function handleMobileDialogKeydown(event: KeyboardEvent) {
		if (event.key !== 'Tab' || !mobileMenuDialog) return;

		const focusableElements = Array.from(
			mobileMenuDialog.querySelectorAll<HTMLElement>(
				'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
			)
		);
		const firstFocusableElement = focusableElements[0];
		const lastFocusableElement = focusableElements[focusableElements.length - 1];

		if (!firstFocusableElement || !lastFocusableElement) {
			event.preventDefault();
			mobileMenuDialog.focus();
		} else if (
			event.shiftKey &&
			(document.activeElement === firstFocusableElement || !mobileMenuDialog.contains(document.activeElement))
		) {
			event.preventDefault();
			lastFocusableElement.focus();
		} else if (
			!event.shiftKey &&
			(document.activeElement === lastFocusableElement || !mobileMenuDialog.contains(document.activeElement))
		) {
			event.preventDefault();
			firstFocusableElement.focus();
		}
	}

	function closeMobileMenuOnDesktop() {
		if (!window.matchMedia('(min-width: 40rem)').matches || !mobileMenuOpen) return;

		previouslyFocusedElement = null;
		mobileMenuOpen = false;
		desktopNavigation?.querySelector<HTMLElement>('a[href], button:not([disabled])')?.focus();
	}
</script>

<svelte:head>
	<meta property="og:site_name" content={$_('common.siteName')} />
	<meta property="og:type" content="website" />
</svelte:head>

<svelte:window
	onkeydown={(event) => mobileMenuOpen && event.key === 'Escape' && closeMobileMenu()}
	onresize={closeMobileMenuOnDesktop}
/>

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
				class="h-11 w-11 p-0"
				bind:ref={mobileMenuTrigger}
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
					<span aria-hidden="true" class="flex h-5 w-5 flex-col justify-between">
						<span class="block h-0.5 w-5 bg-current"></span>
						<span class="block h-0.5 w-5 bg-current"></span>
						<span class="block h-0.5 w-5 bg-current"></span>
					</span>
				{/if}
			</Button>
			<a class="font-mono text-sm font-semibold tracking-wide" href="/">jannikseus.tech</a>
		</div>
		<div class="hidden flex-wrap items-center gap-2 sm:flex">
			<nav bind:this={desktopNavigation} aria-label={$_('nav.mainNavigationAria')} class="flex flex-wrap gap-2">
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
			<LanguageSwitcher />
			<ThemeSwitcher />
		</div>

	</header>

	{#if mobileMenuOpen}
		<div class="fixed inset-0 z-[100] sm:hidden">
			<button
				type="button"
				class="absolute inset-0 bg-black/40"
				onclick={closeMobileMenu}
				aria-label={$_('common.closeMenu')}
				transition:fade={{ duration: 150 }}
			></button>
			<div
				bind:this={mobileMenuDialog}
				id="mobile-main-navigation"
				aria-label={$_('nav.mainNavigationAria')}
				class="absolute left-0 top-0 z-[101] flex h-dvh w-72 max-w-[85vw] flex-col gap-4 overflow-y-auto border-r border-border bg-white p-4 shadow-xl dark:bg-[#1f1f1f]"
				role="dialog"
				aria-modal="true"
				tabindex="-1"
				onkeydown={handleMobileDialogKeydown}
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
					<Button
						type="button"
						variant="ghost"
						size="icon-sm"
						class="size-11 text-base"
						bind:ref={mobileMenuCloseButton}
						onclick={closeMobileMenu}
						aria-label={$_('common.closeMenu')}
					>
						X
					</Button>
				</div>
				<div class="flex items-center gap-2 [&>button]:min-h-11 [&>button]:min-w-11 [&>button]:text-sm [&_svg]:size-5">
					<LanguageSwitcher />
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
							class="h-11 w-full justify-start font-mono text-sm"
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
			</div>
		</div>
	{/if}

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
