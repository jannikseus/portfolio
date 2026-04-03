<script lang="ts">
	import { _ } from '$lib/i18n';
</script>

<svelte:head>
	<title>{$_('lab.title')}</title>
	<meta name="description" content={$_('lab.description')} />
	<meta property="og:title" content={$_('lab.title')} />
	<meta property="og:description" content={$_('lab.description')} />
</svelte:head>

<section class="max-w-2xl space-y-4">
	<h1 class="text-3xl font-semibold tracking-tight">{$_('lab.heading')}</h1>
	<p class="text-muted-foreground">{$_('lab.paragraphOne')}</p>
	<p class="text-muted-foreground">{$_('lab.paragraphTwo')}</p>
</section>
