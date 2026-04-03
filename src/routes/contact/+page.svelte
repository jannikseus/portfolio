<script lang="ts">
	import { Button } from '$lib/components/ui/button';
</script>

<svelte:head>
	<title>Contact | Jannik Portfolio</title>
	<meta
		name="description"
		content="Contact details for portfolio and collaboration inquiries."
	/>
	<meta property="og:title" content="Contact | Jannik Portfolio" />
	<meta property="og:description" content="Contact details for portfolio and collaboration inquiries." />
</svelte:head>

<section class="max-w-2xl space-y-5">
	<h1 class="text-3xl font-semibold tracking-tight">Contact</h1>
	<p class="text-muted-foreground">
		If you want to collaborate on product-focused frontend work, feel free to reach out.
	</p>
	<div class="flex flex-wrap gap-3">
		<Button href="mailto:hello@example.com">Email</Button>
		<Button href="https://github.com" variant="outline" target="_blank" rel="noreferrer">
			GitHub
		</Button>
		<Button href="https://www.linkedin.com" variant="outline" target="_blank" rel="noreferrer">
			LinkedIn
		</Button>
	</div>
</section>

