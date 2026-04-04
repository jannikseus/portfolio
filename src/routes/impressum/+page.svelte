<script lang="ts">
	import { _ } from '$lib/i18n';
</script>

<svelte:head>
	<title>{$_('imprint.title')}</title>
	<meta name="description" content={$_('imprint.description')} />
	<meta property="og:title" content={$_('imprint.title')} />
	<meta property="og:description" content={$_('imprint.description')} />
</svelte:head>

<article class="max-w-3xl space-y-6">
	<h1 class="text-3xl font-semibold tracking-tight">{$_('imprint.heading')}</h1>

	<!-- Provider Information -->
	<section class="space-y-3" aria-labelledby="provider">
		<h2 id="provider" class="text-xl font-semibold">{$_('imprint.providerTitle')}</h2>
		<div class="space-y-2 ml-2">
			<p>
				<span class="font-medium">{$_('imprint.providerNameLabel')}</span>
				<span class="text-muted-foreground">{$_('imprint.providerName')}</span>
			</p>
			<p>
				<span class="font-medium">{$_('imprint.providerAddressLabel')}</span>
				<span class="text-muted-foreground">{$_('imprint.providerAddress')}</span>
			</p>
			<p>
				<span class="font-medium">{$_('imprint.providerEmailLabel')}</span>
				<a href="mailto:{$_('imprint.providerEmail')}" class="text-muted-foreground hover:underline">
					{$_('imprint.providerEmail')}
				</a>
			</p>
			<p>
				<span class="font-medium">{$_('imprint.providerPhoneLabel')}</span>
				<span class="text-muted-foreground">{$_('imprint.providerPhone')}</span>
			</p>
		</div>
	</section>

	<!-- Responsible for Content -->
	<section class="space-y-3" aria-labelledby="responsible">
		<h2 id="responsible" class="text-xl font-semibold">{$_('imprint.responsibleTitle')}</h2>
		<p class="text-muted-foreground ml-2">{$_('imprint.responsibleName')}</p>
	</section>

	<!-- Liability for Content -->
	<section class="space-y-3" aria-labelledby="disclaimer">
		<h2 id="disclaimer" class="text-xl font-semibold">{$_('imprint.disclaimerTitle')}</h2>
		<p class="text-muted-foreground">{$_('imprint.disclaimerText')}</p>
	</section>

	<!-- External Links -->
	<section class="space-y-3" aria-labelledby="links">
		<h2 id="links" class="text-xl font-semibold">{$_('imprint.externalLinksTitle')}</h2>
		<p class="text-muted-foreground">{$_('imprint.externalLinksText')}</p>
	</section>

	<!-- Copyright -->
	<section class="space-y-3" aria-labelledby="copyright">
		<h2 id="copyright" class="text-xl font-semibold">{$_('imprint.ipRightsTitle')}</h2>
		<p class="text-muted-foreground">{$_('imprint.ipRightsText')}</p>
	</section>

	<!-- Notice -->
	<p class="rounded-none border border-border bg-muted p-3 text-xs text-muted-foreground">
		{$_('imprint.notice')}
	</p>
</article>

