<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { _ } from '$lib/i18n';
</script>

<svelte:head>
	<title>{$_('contact.title')}</title>
	<meta name="description" content={$_('contact.description')} />
	<meta property="og:title" content={$_('contact.title')} />
	<meta property="og:description" content={$_('contact.description')} />
</svelte:head>

<section class="max-w-2xl space-y-5">
	<h1 class="text-3xl font-semibold tracking-tight">{$_('contact.heading')}</h1>
	<p class="text-muted-foreground">{$_('contact.intro')}</p>
	<div class="flex flex-wrap gap-3">
		<Button href="mailto:hello@example.com">{$_('contact.email')}</Button>
		<Button href="https://github.com" variant="outline" target="_blank" rel="noreferrer">
			GitHub
		</Button>
		<Button href="https://www.linkedin.com" variant="outline" target="_blank" rel="noreferrer">
			LinkedIn
		</Button>
	</div>
</section>
