<script lang="ts">
	import { _ } from '$lib/i18n';
</script>

<svelte:head>
	<title>{$_('about.title')}</title>
	<meta name="description" content={$_('about.description')} />
	<meta property="og:title" content={$_('about.title')} />
	<meta property="og:description" content={$_('about.description')} />
</svelte:head>

<section class="max-w-2xl space-y-4">
	<h1 class="text-3xl font-semibold tracking-tight">{$_('about.heading')}</h1>
	<p class="text-muted-foreground">{$_('about.paragraphOne')}</p>
	<p class="text-muted-foreground">{$_('about.paragraphTwo')}</p>
</section>
