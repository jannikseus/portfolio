<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import * as Card from '$lib/components/ui/card';
	import { projects } from '$lib/data/projects';
	import { _ } from '$lib/i18n';

	const featuredProjects = projects.slice(0, 2);
</script>

<svelte:head>
	<title>{$_('home.title')}</title>
	<meta name="description" content={$_('home.description')} />
	<meta property="og:title" content={$_('home.title')} />
	<meta property="og:description" content={$_('home.description')} />
</svelte:head>

<section class="mb-10 space-y-5">
	<p class="text-muted-foreground">{$_('home.roleLabel')}</p>
	<h1 class="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">{$_('home.headline')}</h1>
	<p class="max-w-2xl text-muted-foreground">{$_('home.intro')}</p>
	<div class="flex gap-3">
		<Button href="/projects">{$_('home.viewProjects')}</Button>
		<Button href="/contact" variant="outline">{$_('home.contact')}</Button>
	</div>
</section>

<section aria-labelledby="featured-projects" class="space-y-4">
	<h2 id="featured-projects" class="text-xl font-semibold">{$_('home.featured')}</h2>
	<div class="grid gap-4 md:grid-cols-2">
		{#each featuredProjects as project}
			<Card.Root>
				<Card.Header>
					<Card.Title>{$_(`${project.keyPrefix}.title`)}</Card.Title>
					<Card.Description>{$_(`${project.keyPrefix}.description`)}</Card.Description>
				</Card.Header>
				<Card.Content class="flex flex-wrap gap-2">
					{#each project.techStack as tech}
						<Badge variant="secondary">{tech}</Badge>
					{/each}
				</Card.Content>
			</Card.Root>
		{/each}
	</div>
</section>
