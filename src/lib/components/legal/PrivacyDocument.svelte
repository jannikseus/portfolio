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
	<div class="space-y-6 text-muted-foreground">{@html documentHtml}</div>
</article>

