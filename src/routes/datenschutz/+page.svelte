<script lang="ts">
	import { _ } from '$lib/i18n';
</script>

<svelte:head>
	<title>{$_('privacy.title')}</title>
	<meta name="description" content={$_('privacy.description')} />
	<meta property="og:title" content={$_('privacy.title')} />
	<meta property="og:description" content={$_('privacy.description')} />
</svelte:head>

<article class="max-w-3xl space-y-6">
	<h1 class="text-3xl font-semibold tracking-tight">{$_('privacy.heading')}</h1>

	<!-- Section 1: Privacy at a Glance -->
	<section class="space-y-4" aria-labelledby="overview">
		<h2 id="overview" class="text-xl font-semibold">{$_('privacy.intro')}</h2>

		<article class="space-y-2">
			<h3 class="font-semibold text-base">{$_('privacy.generalInfoTitle')}</h3>
			<p class="text-muted-foreground">{$_('privacy.generalInfoText')}</p>
		</article>

		<article class="space-y-3">
			<h3 class="font-semibold text-base">{$_('privacy.dataCollectionTitle')}</h3>

			<div class="space-y-2">
				<p class="font-medium">{$_('privacy.whoResponsibleLabel')}</p>
				<p class="text-muted-foreground ml-2">{$_('privacy.whoResponsibleText')}</p>
			</div>

			<div class="space-y-2">
				<p class="font-medium">{$_('privacy.howCollectedLabel')}</p>
				<p class="text-muted-foreground ml-2">{$_('privacy.howCollectedText')}</p>
			</div>

			<div class="space-y-2">
				<p class="font-medium">{$_('privacy.whyDataLabel')}</p>
				<p class="text-muted-foreground ml-2">{$_('privacy.whyDataText')}</p>
			</div>

			<div class="space-y-2">
				<p class="font-medium">{$_('privacy.yourRightsIntroLabel')}</p>
				<p class="text-muted-foreground ml-2">{$_('privacy.yourRightsIntroText')}</p>
			</div>
		</article>
	</section>

	<!-- Section 2: Hosting -->
	<section class="space-y-3" aria-labelledby="hosting">
		<h2 id="hosting" class="text-xl font-semibold">{$_('privacy.hostingTitle')}</h2>
		<p class="text-muted-foreground">{$_('privacy.hostingText')}</p>
		<div class="ml-2 space-y-1 text-sm">
			<p class="font-medium">{$_('privacy.hostingProviderName')}</p>
			<p class="text-muted-foreground">{$_('privacy.hostingProviderInfo')}</p>
			<p class="text-muted-foreground">{$_('privacy.hostingProviderContact')}</p>
		</div>

		<article class="space-y-2 mt-3">
			<p class="font-medium">{$_('privacy.externalHostingLabel')}</p>
			<p class="text-muted-foreground ml-2">{$_('privacy.externalHostingText')}</p>
		</article>

		<article class="space-y-2">
			<p class="font-medium">{$_('privacy.hostingPurposeLabel')}</p>
			<p class="text-muted-foreground ml-2">{$_('privacy.hostingPurposeText')}</p>
		</article>

		<article class="space-y-2">
			<p class="font-medium">{$_('privacy.processorAgreementLabel')}</p>
			<p class="text-muted-foreground ml-2">{$_('privacy.processorAgreementText')}</p>
		</article>
	</section>

	<!-- Section 3: Controller -->
	<section class="space-y-3" aria-labelledby="controller">
		<h2 id="controller" class="text-xl font-semibold">{$_('privacy.controllerTitle')}</h2>
		<p class="text-muted-foreground">{$_('privacy.controllerText')}</p>
		<div class="ml-2 space-y-0.5 text-sm">
			<p><strong>{$_('privacy.controllerName')}</strong></p>
			<p class="text-muted-foreground">{$_('privacy.controllerAddress')}</p>
			<p class="text-muted-foreground">Email: {$_('privacy.controllerEmail')}</p>
		</div>
	</section>

	<!-- Section 4: Data Protection -->
	<section class="space-y-3" aria-labelledby="protection">
		<h2 id="protection" class="text-xl font-semibold">{$_('privacy.dataProtectionTitle')}</h2>
		<p class="text-muted-foreground">{$_('privacy.dataProtectionText')}</p>
	</section>

	<!-- Section 5: SSL/TLS -->
	<section class="space-y-3" aria-labelledby="ssl">
		<h2 id="ssl" class="text-xl font-semibold">{$_('privacy.sslTitle')}</h2>
		<p class="text-muted-foreground">{$_('privacy.sslText')}</p>
	</section>

	<!-- Section 6: Storage Duration -->
	<section class="space-y-3" aria-labelledby="storage">
		<h2 id="storage" class="text-xl font-semibold">{$_('privacy.storageTitle')}</h2>
		<p class="text-muted-foreground">{$_('privacy.storageText')}</p>
	</section>

	<!-- Section 7: Cookies -->
	<section class="space-y-3" aria-labelledby="cookies">
		<h2 id="cookies" class="text-xl font-semibold">{$_('privacy.cookiesTitle')}</h2>
		<p class="text-muted-foreground">{$_('privacy.cookiesText')}</p>
	</section>

	<!-- Section 8: Rights -->
	<section class="space-y-3" aria-labelledby="rights">
		<h2 id="rights" class="text-xl font-semibold">{$_('privacy.rightsTitle')}</h2>
		<p class="text-muted-foreground">{$_('privacy.rightsText')}</p>
	</section>

	<!-- Section 9: Complaint -->
	<section class="space-y-3" aria-labelledby="complaint">
		<h2 id="complaint" class="text-xl font-semibold">{$_('privacy.complaintTitle')}</h2>
		<p class="text-muted-foreground">{$_('privacy.complaintText')}</p>
	</section>

	<!-- Notice -->
	<p class="rounded-none border border-border bg-muted p-3 text-xs text-muted-foreground">
		{$_('privacy.notice')}
	</p>
</article>

