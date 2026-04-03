<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import * as Card from '$lib/components/ui/card';
	import { projects } from '$lib/data/projects';
	import { _ } from '$lib/i18n';
</script>

<svelte:head>
	<title>{$_('projectsPage.title')}</title>
	<meta name="description" content={$_('projectsPage.description')} />
	<meta property="og:title" content={$_('projectsPage.title')} />
	<meta property="og:description" content={$_('projectsPage.description')} />
</svelte:head>

<section class="space-y-5">
	<h1 class="text-3xl font-semibold tracking-tight">{$_('projectsPage.heading')}</h1>
	<p class="max-w-2xl text-muted-foreground">{$_('projectsPage.intro')}</p>

	<div class="grid gap-4">
		{#each projects as project}
			<Card.Root>
				<Card.Header>
					<Card.Title>{$_(`${project.keyPrefix}.title`)}</Card.Title>
					<Card.Description>{$_(`${project.keyPrefix}.description`)}</Card.Description>
				</Card.Header>
				<Card.Content class="space-y-3">
					<p><span class="font-medium">{$_('projectsPage.rolePrefix')}</span> {$_(`${project.keyPrefix}.role`)}</p>
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
