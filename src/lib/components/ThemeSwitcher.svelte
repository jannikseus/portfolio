<script lang="ts">
	import { onMount } from 'svelte';
	import { _ } from '$lib/i18n';
	import { Button } from '$lib/components/ui/button';
	import { Monitor, Moon, Sun } from '@lucide/svelte';

	type Theme = 'light' | 'dark' | 'system';
	const storageKey = 'theme';
	let theme = $state<Theme>('system');
	let menuOpen = $state(false);
	let menuElement: HTMLDivElement;

	function applyTheme(nextTheme: Theme) {
		theme = nextTheme;
		const isDark =
			nextTheme === 'dark' ||
			(nextTheme === 'system' &&
				typeof window !== 'undefined' &&
				window.matchMedia('(prefers-color-scheme: dark)').matches);

		document.documentElement.classList.toggle('dark', isDark);
		document.documentElement.dataset.theme = nextTheme;
		localStorage.setItem(storageKey, nextTheme);
	}

	onMount(() => {
		const storedTheme = localStorage.getItem(storageKey);
		const initialTheme: Theme =
			storedTheme === 'light' || storedTheme === 'dark' || storedTheme === 'system' ? storedTheme : 'system';
		applyTheme(initialTheme);

		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const handleSystemChange = () => theme === 'system' && applyTheme('system');
		mediaQuery.addEventListener('change', handleSystemChange);

		return () => mediaQuery.removeEventListener('change', handleSystemChange);
	});

	const options: { value: Theme; labelKey: string }[] = [
		{ value: 'light', labelKey: 'theme.light' },
		{ value: 'dark', labelKey: 'theme.dark' },
		{ value: 'system', labelKey: 'theme.system' }
	];

	function selectTheme(nextTheme: Theme) {
		applyTheme(nextTheme);
		menuOpen = false;
	}

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	function closeOnEscape(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			menuOpen = false;
		}
	}

	function closeOnOutsideClick(event: MouseEvent) {
		if (menuElement && !menuElement.contains(event.target as Node)) {
			menuOpen = false;
		}
	}
</script>

<svelte:window
	onclick={closeOnOutsideClick}
	onkeydown={closeOnEscape}
/>

<div bind:this={menuElement} class="relative">
	<Button
		type="button"
		variant="outline"
		size="icon"
		aria-label={$_('theme.label')}
		aria-haspopup="menu"
		aria-expanded={menuOpen}
		title={$_(`theme.${theme}`)}
		onclick={toggleMenu}
	>
		{#if theme === 'light'}
			<Sun aria-hidden="true" />
		{:else if theme === 'dark'}
			<Moon aria-hidden="true" />
		{:else}
			<Monitor aria-hidden="true" />
		{/if}
	</Button>

	{#if menuOpen}
		<div
			class="absolute right-0 top-full z-50 mt-2 min-w-32 rounded-md border bg-background p-1 shadow-md"
			role="menu"
			aria-label={$_('theme.label')}
		>
			{#each options as option}
				<Button
					type="button"
					variant={theme === option.value ? 'secondary' : 'ghost'}
					size="sm"
					class="w-full justify-start"
					role="menuitemradio"
					aria-checked={theme === option.value}
					onclick={() => selectTheme(option.value)}
				>
					{#if option.value === 'light'}
						<Sun aria-hidden="true" />
					{:else if option.value === 'dark'}
						<Moon aria-hidden="true" />
					{:else}
						<Monitor aria-hidden="true" />
					{/if}
					{$_(option.labelKey)}
				</Button>
			{/each}
		</div>
	{/if}
</div>
