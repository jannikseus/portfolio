<script lang="ts">
	import { Button } from '#lib/components/ui/button/index';
	import { Badge } from '#lib/components/ui/badge/index';
	import * as Card from '#lib/components/ui/card/index';
	import { projects } from '#lib/data/projects';
	import { getBlogPosts } from '#lib/content/blog';
	import { _, locale, resolveLocale } from '#lib/i18n/index';

	const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);
	const recentPosts = $derived(getBlogPosts(resolveLocale($locale)).slice(0, 2));
	let easterEggActive = $state(false);

	function runTerminal() {
		easterEggActive = true;
	}

	function resetTerminal() {
		easterEggActive = false;
	}

	function handleTerminalKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			event.preventDefault();
			runTerminal();
		}
	}
</script>

<svelte:head>
	<title>{$_('home.title')}</title>
	<meta name="description" content={$_('home.description')} />
	<meta property="og:title" content={$_('home.title')} />
	<meta property="og:description" content={$_('home.description')} />
</svelte:head>

<section id="home" class="mb-10 scroll-mt-28 space-y-5">
	<h1 class="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">{$_('home.headline')}</h1>
	<div
		class="technical-label terminal-panel w-full border border-border bg-muted/20 px-4 py-3 text-sm"
		role="button"
		tabindex="0"
		aria-label={$_('home.terminalRunAria')}
		onkeydown={handleTerminalKeydown}
		onclick={runTerminal}
	>
		<div class="mb-2 flex gap-1.5" aria-hidden="true">
			<span class="size-2 rounded-full bg-red-500/70"></span>
			<span class="size-2 rounded-full bg-amber-500/70"></span>
			<span class="size-2 rounded-full bg-emerald-500/70"></span>
			<button
				type="button"
				class="ml-auto technical-label size-6 text-center text-xs leading-5 text-muted-foreground transition-colors hover:text-foreground"
				aria-label={easterEggActive ? $_('home.terminalResetAria') : $_('home.terminalRunAria')}
				onclick={(event) => {
					event.stopPropagation();
					easterEggActive ? resetTerminal() : runTerminal();
				}}
			>
				<span aria-hidden="true">{easterEggActive ? '↩' : '▶'}</span>
			</button>
		</div>
		{#if easterEggActive}
			<pre
				class="overflow-x-auto text-[11px] leading-tight text-foreground"
				aria-live="polite"
			>{[
				'   _                   _ _                   ',
				'  (_) __ _ _ __  _ __ (_) | __  _____  _____ ',
				'  | |/ _` | \'_ \\| \'_ \\| | |/ / / _ \\ \\/ / _ \\',
				'  | | (_| | | | | | | | |   < |  __/>  <  __/',
				' _/ |\\__,_|_| |_|_| |_|_|_|\\_(_)___/_/\\_\\___|',
				'|__/'
			].join('\n')}</pre>
		{:else}
			<p class="terminal-line terminal-line-1 flex items-baseline">
				<span class="text-muted-foreground">$</span>
				<span class="terminal-reveal ml-1">build <span class="text-foreground">backend</span></span>
			</p>
			<p class="terminal-line terminal-line-2 flex items-baseline">
				<span class="text-muted-foreground">$</span>
				<span class="terminal-reveal ml-1">train <span class="text-foreground">models</span></span>
			</p>
			<p class="terminal-line terminal-line-3 flex items-baseline">
				<span class="text-muted-foreground">$</span>
				<span class="terminal-reveal ml-1">deploy <span class="text-foreground">infrastructure</span></span>
				<span class="terminal-cursor ml-1 inline-block h-4 w-1.5 self-baseline bg-foreground opacity-0"></span>
			</p>
		{/if}
	</div>
</section>

<section id="focus" aria-labelledby="focus-heading" class="mt-12 scroll-mt-28 space-y-4">
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

<section id="projects" aria-labelledby="featured-projects" class="mt-12 scroll-mt-28 space-y-4">
	<h2 id="featured-projects" class="text-xl font-semibold">{$_('home.featured')}</h2>
	<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
		{#each featuredProjects as project}
			<Card.Root class="interactive-card gap-3 py-3">
				<Card.Header>
					<Card.Title>{$_(`${project.keyPrefix}.title`)}</Card.Title>
					<Card.Description>{$_(`${project.keyPrefix}.description`)}</Card.Description>
				</Card.Header>
				<Card.Content class="space-y-2">
					<div class="flex flex-wrap gap-2">
						{#each project.techStack as tech}
							<Badge variant="secondary" class="technical-label">{tech}</Badge>
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
	<div class="mt-4">
		<Button href="/projects" variant="outline">{$_('home.viewAllProjects')}</Button>
	</div>
</section>

<section id="blog" aria-labelledby="home-blog" class="mt-12 scroll-mt-28">
	<h2 id="home-blog" class="text-xl font-semibold">{$_('blog.heading')}</h2>
	{#if recentPosts.length}
		<div class="mt-4 grid gap-4 md:grid-cols-2">
			{#each recentPosts as post}
				<a href={`/blog/${post.slug}`} class="group">
					<Card.Root class="interactive-card h-full group-hover:bg-muted/50">
						<Card.Header>
							<Card.Description>{post.date}</Card.Description>
							<Card.Title>{post.title}</Card.Title>
						</Card.Header>
						<Card.Content>
							<p class="text-muted-foreground">{post.description}</p>
						</Card.Content>
					</Card.Root>
				</a>
			{/each}
		</div>
	{:else}
		<p class="mt-4 text-sm text-muted-foreground">{$_('blog.empty')}</p>
	{/if}
	<div class="mt-4">
		<Button href="/blog" variant="outline">{$_('home.viewAllPosts')}</Button>
	</div>
</section>

<section id="contact" aria-labelledby="home-contact" class="mt-12 scroll-mt-28">
	<div class="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
		<div class="space-y-1">
			<h2 id="home-contact" class="text-xl font-semibold">{$_('home.contactHeading')}</h2>
			<p class="text-sm text-muted-foreground">{$_('home.contactIntro')}</p>
		</div>
		<Button href="/contact">{$_('home.contact')}</Button>
	</div>
</section>
