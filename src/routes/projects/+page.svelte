<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import * as Card from '$lib/components/ui/card';
	import { projects } from '$lib/data/projects';
</script>

<svelte:head>
	<title>Projects | Jannik Portfolio</title>
	<meta
		name="description"
		content="Selected projects with concise context, tech stack, and contribution details."
	/>
	<meta property="og:title" content="Projects | Jannik Portfolio" />
	<meta
		property="og:description"
		content="Selected projects with concise context, tech stack, and contribution details."
	/>
</svelte:head>

<section class="space-y-5">
	<h1 class="text-3xl font-semibold tracking-tight">Projects</h1>
	<p class="max-w-2xl text-muted-foreground">
		A curated selection of work. Each item highlights the outcome, stack, and my role.
	</p>

	<div class="grid gap-4">
		{#each projects as project}
			<Card.Root>
				<Card.Header>
					<Card.Title>{project.title}</Card.Title>
					<Card.Description>{project.description}</Card.Description>
				</Card.Header>
				<Card.Content class="space-y-3">
					<p><span class="font-medium">Role:</span> {project.role}</p>
					<div class="flex flex-wrap gap-2">
						{#each project.techStack as tech}
							<Badge variant="secondary">{tech}</Badge>
						{/each}
					</div>
				</Card.Content>
			</Card.Root>
		{/each}
	</div>
</section>

