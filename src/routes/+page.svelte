<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import * as Card from '$lib/components/ui/card';
	import { projects } from '$lib/data/projects';
	import { getBlogPosts } from '$lib/content/blog';
	import { _, locale, resolveLocale } from '$lib/i18n';

	const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);
	const recentPosts = $derived(getBlogPosts(resolveLocale($locale)).slice(0, 2));
</script>

<svelte:head>
	<title>{$_('home.title')}</title>
	<meta name="description" content={$_('home.description')} />
	<meta property="og:title" content={$_('home.title')} />
	<meta property="og:description" content={$_('home.description')} />
</svelte:head>

<section id="home" class="mb-10 scroll-mt-8 space-y-5">
	<p class="text-muted-foreground">{$_('home.roleLabel')}</p>
	<h1 class="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">{$_('home.headline')}</h1>
	<p class="max-w-2xl text-muted-foreground">{$_('home.intro')}</p>
	<div class="flex gap-3">
		<Button href="/projects">{$_('home.viewProjects')}</Button>
		<Button href="/contact" variant="outline">{$_('home.contact')}</Button>
	</div>
</section>

<section id="about" aria-labelledby="home-about" class="mb-12 scroll-mt-8 border-t pt-8">
	<div class="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
		<div class="max-w-2xl space-y-2">
			<h2 id="home-about" class="text-xl font-semibold">{$_('home.aboutHeading')}</h2>
			<p class="text-muted-foreground">{$_('home.aboutText')}</p>
		</div>
		<Button href="/about" variant="outline">{$_('home.aboutMore')}</Button>
	</div>
</section>

<section id="projects" aria-labelledby="featured-projects" class="scroll-mt-8 space-y-4">
	<h2 id="featured-projects" class="text-xl font-semibold">{$_('home.featured')}</h2>
	<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
		{#each featuredProjects as project}
			<Card.Root>
				<Card.Header>
					<Card.Title>{$_(`${project.keyPrefix}.title`)}</Card.Title>
					<Card.Description>{$_(`${project.keyPrefix}.description`)}</Card.Description>
				</Card.Header>
				<Card.Content class="space-y-3">
					<div class="flex flex-wrap gap-2">
						{#each project.techStack as tech}
							<Badge variant="secondary">{tech}</Badge>
						{/each}
					</div>
					{#if project.links?.demo || project.links?.repo}
						<div class="flex flex-wrap gap-2">
							{#if project.links?.demo}
								<Button href={project.links.demo} variant="outline" size="sm" target="_blank" rel="noreferrer">
									Demo
								</Button>
							{/if}
							{#if project.links?.repo}
								<Button href={project.links.repo} variant="outline" size="sm" target="_blank" rel="noreferrer">
									Repository
								</Button>
							{/if}
						</div>
					{/if}
				</Card.Content>
			</Card.Root>
		{/each}
	</div>
	<div class="pt-1">
		<Button href="/projects" variant="outline">{$_('home.viewAllProjects')}</Button>
	</div>
</section>

<section id="focus" aria-labelledby="focus-heading" class="mt-12 scroll-mt-8 space-y-4">
	<h2 id="focus-heading" class="text-xl font-semibold">{$_('home.focusHeading')}</h2>
	<p class="max-w-2xl text-muted-foreground">{$_('home.focusIntro')}</p>
	<div class="grid gap-3 sm:grid-cols-3">
		<div class="border-l pl-4">
			<h3 class="font-medium">{$_('home.focusBackendHeading')}</h3>
			<p class="mt-1 text-sm text-muted-foreground">{$_('home.focusBackendText')}</p>
		</div>
		<div class="border-l pl-4">
			<h3 class="font-medium">{$_('home.focusMlHeading')}</h3>
			<p class="mt-1 text-sm text-muted-foreground">{$_('home.focusMlText')}</p>
		</div>
		<div class="border-l pl-4">
			<h3 class="font-medium">{$_('home.focusInfrastructureHeading')}</h3>
			<p class="mt-1 text-sm text-muted-foreground">{$_('home.focusInfrastructureText')}</p>
		</div>
	</div>
</section>

<section id="blog" aria-labelledby="home-blog" class="mt-12 scroll-mt-8 border-t pt-8">
	<div class="flex items-end justify-between gap-4">
		<h2 id="home-blog" class="text-xl font-semibold">{$_('blog.heading')}</h2>
		<Button href="/blog" variant="outline" size="sm">{$_('home.viewAllPosts')}</Button>
	</div>
	{#if recentPosts.length}
		<div class="mt-4 grid gap-4 md:grid-cols-2">
			{#each recentPosts as post}
				<a class="rounded-lg border p-4 hover:bg-muted/50" href={`/blog/${post.slug}`}>
					<p class="text-xs text-muted-foreground">{post.date}</p>
					<h3 class="mt-2 font-semibold">{post.title}</h3>
					<p class="mt-2 text-sm text-muted-foreground">{post.description}</p>
				</a>
			{/each}
		</div>
	{:else}
		<p class="mt-4 text-sm text-muted-foreground">{$_('blog.empty')}</p>
	{/if}
</section>

<section id="contact" aria-labelledby="home-contact" class="mt-12 scroll-mt-8 border-t pt-8">
	<div class="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
		<div class="space-y-1">
			<h2 id="home-contact" class="text-xl font-semibold">{$_('home.contactHeading')}</h2>
			<p class="text-sm text-muted-foreground">{$_('home.contactIntro')}</p>
		</div>
		<Button href="/contact">{$_('home.contact')}</Button>
	</div>
</section>
