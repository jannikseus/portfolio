<script lang="ts">
	import { onMount } from 'svelte';
	import { _ } from '#lib/i18n/index';
	import { Button } from '#lib/components/ui/button/index';
	import { Monitor, Moon, Sun } from '@lucide/svelte';
	import { initializeTheme, setTheme, themeState, type Theme } from '#lib/theme.svelte';

	const options: { value: Theme; labelKey: string }[] = [
		{ value: 'light', labelKey: 'theme.light' },
		{ value: 'dark', labelKey: 'theme.dark' },
		{ value: 'system', labelKey: 'theme.system' }
	];

	const currentOption = $derived(options.find((option) => option.value === themeState.value) ?? options[0]);
	const nextOption = $derived(options[(options.indexOf(currentOption) + 1) % options.length]);
	const accessibleLabel = $derived(
		`${$_('theme.label')}: ${$_(currentOption.labelKey)}. ${$_('theme.next')}: ${$_(nextOption.labelKey)}`
	);

	onMount(initializeTheme);

	function toggleTheme() {
		setTheme(nextOption.value);
	}
</script>

<Button
	type="button"
	variant="outline"
	size="icon-sm"
	class="size-7 transition-none"
	aria-label={accessibleLabel}
	title={accessibleLabel}
	onclick={toggleTheme}
>
	{#if themeState.value === 'light'}
		<Sun aria-hidden="true" />
	{:else if themeState.value === 'dark'}
		<Moon aria-hidden="true" />
	{:else}
		<Monitor aria-hidden="true" />
	{/if}
</Button>
