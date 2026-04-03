<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { Button } from '$lib/components/ui/button';

	let { children } = $props();

	const navItems = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/projects', label: 'Projects' },
		{ href: '/contact', label: 'Contact' },
		{ href: '/lab', label: 'Lab' }
	];
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta property="og:site_name" content="Jannik Portfolio" />
	<meta property="og:type" content="website" />
</svelte:head>

<div class="mx-auto flex min-h-screen max-w-5xl flex-col px-4 py-6 sm:px-6 lg:px-8">
	<header class="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-center sm:justify-between">
		<a class="text-sm font-semibold tracking-wide" href="/">jannik.dev</a>
		<nav aria-label="Main navigation" class="flex flex-wrap gap-2">
			{#each navItems as item}
				<Button href={item.href} variant="ghost" size="sm">{item.label}</Button>
			{/each}
		</nav>
	</header>

	<main class="flex-1">{@render children()}</main>

	<footer class="mt-12 border-t pt-6 text-xs text-muted-foreground">
		<p>Built with SvelteKit, Bun, Tailwind, and shadcn-svelte.</p>
	</footer>
</div>
