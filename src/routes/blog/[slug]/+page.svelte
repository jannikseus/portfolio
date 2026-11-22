<script lang="ts">
	import { _, locale, resolveLocale } from '$lib/i18n';
	import { getBlogPost } from '$lib/content/blog';

	let { data }: { data: { slug: string } } = $props();
	const post = $derived(getBlogPost(data.slug, resolveLocale($locale)));
</script>

<svelte:head>
<title>{post ? `${post.title} | Jannik Seus` : $_('blog.notFoundTitle')}</title>
<meta name="description" content={post?.description ?? $_('blog.description')} />
<meta property="og:title" content={post?.title ?? $_('blog.notFoundTitle')} />
<meta property="og:description" content={post?.description ?? $_('blog.description')} />
</svelte:head>

{#if post}
	<article class="max-w-3xl space-y-6">
		<header class="space-y-3">
			<p class="text-sm text-muted-foreground">{post.date}</p>
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
		gap: 1.25rem;
		font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
		font-size: 1rem;
		line-height: 1.7;
	}
	:global(.blog-markdown h2),
	:global(.blog-markdown h3) { color: var(--foreground); font-weight: 600; line-height: 1.35; }
	:global(.blog-markdown h2) { font-size: 1.35rem; }
	:global(.blog-markdown h3) { font-size: 1.1rem; }
	:global(.blog-markdown ul),
	:global(.blog-markdown ol) { padding-left: 1.25rem; }
	:global(.blog-markdown ul) { list-style: disc; }
	:global(.blog-markdown ol) { list-style: decimal; }
	:global(.blog-markdown a) { text-decoration: underline; text-underline-offset: 0.2em; }
</style>
