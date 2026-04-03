<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import * as Card from '$lib/components/ui/card';
	import { projects } from '$lib/data/projects';

	const featuredProjects = projects.slice(0, 2);
</script>

<svelte:head>
	<title>Home | Jannik Portfolio</title>
	<meta
		name="description"
		content="Personal portfolio focused on performant frontend work, clean UX, and accessible interfaces."
	/>
	<meta property="og:title" content="Home | Jannik Portfolio" />
	<meta
		property="og:description"
		content="Personal portfolio focused on performant frontend work, clean UX, and accessible interfaces."
	/>
</svelte:head>

<section class="mb-10 space-y-5">
	<p class="text-muted-foreground">Frontend developer</p>
	<h1 class="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
		Building maintainable interfaces with accessibility and performance as defaults.
	</h1>
	<p class="max-w-2xl text-muted-foreground">
		This site is intentionally simple: clear content, focused components, and room for controlled
		experiments in the lab section.
	</p>
	<div class="flex gap-3">
		<Button href="/projects">View projects</Button>
		<Button href="/contact" variant="outline">Contact</Button>
	</div>
</section>

<section aria-labelledby="featured-projects" class="space-y-4">
	<h2 id="featured-projects" class="text-xl font-semibold">Featured projects</h2>
	<div class="grid gap-4 md:grid-cols-2">
		{#each featuredProjects as project}
			<Card.Root>
				<Card.Header>
					<Card.Title>{project.title}</Card.Title>
					<Card.Description>{project.description}</Card.Description>
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
