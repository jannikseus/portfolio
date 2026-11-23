<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { _, locale, resolveLocale } from '#lib/i18n/index';
	import { getBlogPost } from '#lib/content/blog';

	let { data }: { data: { slug: string } } = $props();
	const post = $derived(getBlogPost(data.slug, resolveLocale($locale)));
	let mermaidReady = $state(false);
	let mermaidRun: ((nodes: HTMLElement[]) => Promise<void>) | undefined;
	let mermaidObserver: MutationObserver | undefined;

	onMount(() => {
		void (async () => {
			const module = await import('mermaid');
			module.default.initialize({
				startOnLoad: false,
				securityLevel: 'strict',
				theme: document.documentElement.classList.contains('dark') ? 'dark' : 'default'
			});
			mermaidRun = async (nodes) => {
				await module.default.run({ nodes });
			};
			mermaidReady = true;

			mermaidObserver = new MutationObserver(() => {
				void renderMermaidBlocks();
			});
			mermaidObserver.observe(document.querySelector('.blog-markdown') ?? document.body, {
				childList: true,
				subtree: true
			});
		})();

		return () => mermaidObserver?.disconnect();
	});

	async function renderMermaidBlocks() {
		if (!mermaidReady || !mermaidRun) return;
		await tick();

		const mermaidBlocks = Array.from(
			document.querySelectorAll<HTMLElement>('.blog-markdown pre code.language-mermaid')
		);
		if (mermaidBlocks.length === 0) return;

		const containers: HTMLElement[] = [];
		for (const code of mermaidBlocks) {
			const pre = code.closest('pre');
			if (!pre) continue;
			const container = document.createElement('div');
			container.className = 'mermaid';
			container.textContent = code.textContent ?? '';
			pre.replaceWith(container);
			containers.push(container);
		}

		await mermaidRun?.(containers);
	}

	$effect(() => {
		post;
		if (!mermaidReady || !mermaidRun) return;
		void renderMermaidBlocks();
	});
</script>

<svelte:head>
<title>{post ? `${post.title} | Jannik Seus` : $_('blog.notFoundTitle')}</title>
<meta name="description" content={post?.description ?? $_('blog.description')} />
<meta property="og:title" content={post?.title ?? $_('blog.notFoundTitle')} />
<meta property="og:description" content={post?.description ?? $_('blog.description')} />
</svelte:head>

{#if post}
	<article class="w-full space-y-6">
		<header class="max-w-[68ch] space-y-3">
			<p class="text-sm text-muted-foreground">
				{post.date}{#if post.readingTime}<span class="mx-1" aria-hidden="true">·</span>{' '}{post.readingTime}{/if}
			</p>
			<h1 class="text-3xl font-semibold tracking-tight sm:text-4xl">{post.title}</h1>
			<p class="text-muted-foreground">{post.description}</p>
			<div class="flex flex-wrap gap-2 text-xs text-muted-foreground">
				{#each post.tags as tag}
					<span class="rounded-full border px-2 py-1">{tag}</span>
				{/each}
			</div>
		</header>
		<div class="blog-markdown">{@html post.html}</div>
	</article>
{:else}
	<section class="space-y-4">
		<h1 class="text-3xl font-semibold tracking-tight">{$_('blog.notFoundTitle')}</h1>
		<a class="underline underline-offset-4" href="/blog">{$_('blog.backToBlog')}</a>
	</section>
{/if}

<style>
	:global(.blog-markdown) {
		display: grid;
		gap: 1.35rem;
		max-width: 100ch;
		font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
		font-size: 1rem;
		line-height: 1.7;
	}
	:global(.blog-markdown p) {
		max-width: 100ch;
		text-wrap: pretty;
	}
	:global(.blog-markdown h2),
	:global(.blog-markdown h3) {
		color: var(--foreground);
		font-weight: 600;
		line-height: 1.35;
		margin-top: 0.75rem;
	}
	:global(.blog-markdown h2) { font-size: 1.35rem; }
	:global(.blog-markdown h3) { font-size: 1.1rem; }
	:global(.blog-markdown ul),
	:global(.blog-markdown ol) { padding-left: 1.25rem; }
	:global(.blog-markdown ul) { list-style: disc; }
	:global(.blog-markdown ol) { list-style: decimal; }
	:global(.blog-markdown a) { text-decoration: underline; text-underline-offset: 0.2em; }
	:global(.blog-markdown .mermaid) {
		max-width: 100%;
		overflow-x: auto;
	}
	:global(.blog-markdown .mermaid svg) {
		max-width: 100%;
		height: auto;
	}
</style>
