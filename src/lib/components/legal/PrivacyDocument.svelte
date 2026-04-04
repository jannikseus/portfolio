<script lang="ts">
	import { _, locale, resolveLocale } from '$lib/i18n';
	import { privacyDocuments } from '$lib/content/legal/privacy';

	const resolvedLocale = $derived(resolveLocale($locale));
	const documentHtml = $derived(privacyDocuments[resolvedLocale]);
</script>

<svelte:head>
	<title>{$_('privacy.title')}</title>
	<meta name="description" content={$_('privacy.description')} />
	<meta property="og:title" content={$_('privacy.title')} />
	<meta property="og:description" content={$_('privacy.description')} />
</svelte:head>

<article class="max-w-3xl space-y-6">
	<h1 class="text-3xl font-semibold tracking-tight">{$_('privacy.heading')}</h1>
	<div class="legal-markdown text-muted-foreground">{@html documentHtml}</div>
</article>

<style>
	:global(.legal-markdown) {
		display: grid;
		gap: 1.25rem;
		font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
		font-size: 1rem;
		line-height: 1.7;
	}

	:global(.legal-markdown h1),
	:global(.legal-markdown h2),
	:global(.legal-markdown h3) {
		color: var(--foreground);
		font-weight: 600;
		line-height: 1.35;
	}

	:global(.legal-markdown h2) {
		font-size: 1.25rem;
	}

	:global(.legal-markdown h3) {
		font-size: 1.05rem;
	}

	:global(.legal-markdown ul),
	:global(.legal-markdown ol) {
		padding-left: 1.25rem;
	}

	:global(.legal-markdown ul) {
		list-style: disc;
	}

	:global(.legal-markdown ol) {
		list-style: decimal;
	}

	:global(.legal-markdown blockquote) {
		border-left: 2px solid var(--border);
		padding-left: 0.75rem;
	}
</style>

