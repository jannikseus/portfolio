<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { Button } from '#lib/components/ui/button/index';
	import { Badge } from '#lib/components/ui/badge/index';
	import * as Card from '#lib/components/ui/card/index';
	import { generate, getHourlySalt, PRESETS } from '#lib/ascii-gen';
	import { projects } from '#lib/data/projects';
	import { getBlogPosts } from '#lib/content/blog';
	import { _, locale, resolveLocale } from '#lib/i18n/index';

	const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);
	const recentPosts = $derived(getBlogPosts(resolveLocale($locale)).slice(0, 2));
	let started = $state(false);
	let running = $state(false);
	let input = $state(PRESETS[0]);
	let lines = $state<string[]>([]);
	let completed = $state(false);
	let presetIndex = 0;
	let inputFocused = false;
	let inputEdited = false;
	let runId = 0;
	let timeoutId: ReturnType<typeof setTimeout> | undefined;
	let resetTimeoutId: ReturnType<typeof setTimeout> | undefined;
	let presetIntervalId: ReturnType<typeof setInterval> | undefined;

	function nextPreset() {
		presetIndex = (presetIndex + 1) % PRESETS.length;
		return PRESETS[presetIndex];
	}

	function scheduleTerminalReset() {
		if (resetTimeoutId) clearTimeout(resetTimeoutId);
		if (inputFocused || inputEdited) return;

		const activeRunId = runId;
		resetTimeoutId = setTimeout(() => {
			if (activeRunId === runId && completed && !inputFocused && !inputEdited) resetTerminal();
		}, 5000);
	}

	function handleInputFocus(event: FocusEvent) {
		inputFocused = true;
		if (resetTimeoutId) clearTimeout(resetTimeoutId);
		resetTimeoutId = undefined;
		(event.currentTarget as HTMLInputElement).select();
	}

	function handleInputBlur() {
		inputFocused = false;
		if (completed) scheduleTerminalReset();
	}

	function handleInput() {
		inputEdited = true;
		if (resetTimeoutId) clearTimeout(resetTimeoutId);
		resetTimeoutId = undefined;
		if (completed) completed = false;
	}

	function handleTerminalInteraction() {
		if (completed) scheduleTerminalReset();
	}

	function runTerminal() {
		let command = input.trim().replace(/\s+/g, ' ');

		if (!command) {
			command = nextPreset();
		}

		if (command.toLowerCase() === 'clear') {
			resetTerminal();
			return;
		}

		if (timeoutId) clearTimeout(timeoutId);
		if (resetTimeoutId) clearTimeout(resetTimeoutId);
		resetTimeoutId = undefined;

		const activeRunId = ++runId;
		const output = generate(command, getHourlySalt());
		input = '';
		inputEdited = false;
		const prefersReducedMotion =
			typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		started = true;
		running = true;
		completed = false;
		lines = [];

		function appendLine(index: number) {
			if (activeRunId !== runId) return;

			lines = output.slice(0, index + 1);
			if (index === output.length - 1) {
				running = false;
				completed = true;
				timeoutId = undefined;
				scheduleTerminalReset();
				return;
			}

			timeoutId = setTimeout(() => appendLine(index + 1), 100);
		}

		if (prefersReducedMotion) {
			lines = output;
			running = false;
			completed = true;
			timeoutId = undefined;
			scheduleTerminalReset();
		} else {
			appendLine(0);
		}
	}

	function resetTerminal() {
		runId += 1;
		if (timeoutId) clearTimeout(timeoutId);
		if (resetTimeoutId) clearTimeout(resetTimeoutId);
		timeoutId = undefined;
		resetTimeoutId = undefined;
		started = false;
		running = false;
		completed = false;
		inputEdited = false;
		input = nextPreset();
		lines = [];
	}

	function handleTerminalSubmit(event: SubmitEvent) {
		event.preventDefault();
		runTerminal();
	}

	onMount(() => {
		presetIntervalId = setInterval(() => {
			if (!started && !running && !inputFocused && PRESETS.includes(input.trim())) {
				input = nextPreset();
			}
		}, 3000);

		return () => {
			if (presetIntervalId) clearInterval(presetIntervalId);
		};
	});

	onDestroy(resetTerminal);
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
		class="technical-label terminal-panel min-w-0 w-full border border-border bg-muted/20 px-4 py-3 text-sm"
		role="group"
		aria-label={$_('home.terminalGroupAria')}
		onpointerdown={handleTerminalInteraction}
		onwheel={handleTerminalInteraction}
	>
		<div class="mb-2 flex items-center">
			<div class="flex gap-1.5" aria-hidden="true">
				<span class="size-2 rounded-full bg-red-500/70"></span>
				<span class="size-2 rounded-full bg-amber-500/70"></span>
				<span class="size-2 rounded-full bg-emerald-500/70"></span>
			</div>
			{#if started}
				<button
					type="button"
					class="ml-auto technical-label rounded px-2 py-1 text-xs leading-5 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
					aria-label={$_('home.terminalResetAria')}
					onclick={resetTerminal}
				>
					<span aria-hidden="true">↩</span>
				</button>
			{/if}
		</div>
		<form class="mb-3 flex min-w-0 items-center gap-2 border-b border-border/70 pb-3" onsubmit={handleTerminalSubmit}>
			<label for="terminal-input" class="text-muted-foreground" aria-hidden="true">$</label>
			<input
				id="terminal-input"
				class="min-w-0 flex-1 bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground sm:text-sm"
				aria-label={$_('home.terminalInputAria')}
				placeholder={$_('home.terminalPlaceholder')}
				autocomplete="off"
				autocapitalize="off"
				spellcheck="false"
				enterkeyhint="go"
				onfocus={handleInputFocus}
				onblur={handleInputBlur}
				oninput={handleInput}
				bind:value={input}
			/>
		</form>
		{#if started}
			<pre
				class="max-h-64 max-w-full overflow-auto whitespace-pre text-[11px] leading-tight text-foreground"
				aria-live="off"
				aria-busy={running}
			>{lines.join('\n')}</pre>
		{/if}
		<p class="sr-only" role="status" aria-live="polite">{completed ? $_('home.terminalComplete') : ''}</p>
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
							<Card.Description>
								{post.date}{#if post.readingTime}<span class="mx-1" aria-hidden="true">·</span>{' '}{post.readingTime}{/if}
							</Card.Description>
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
