<script lang="ts">
	import { getBlogPosts } from '#lib/content/blog';
	import { locale, resolveLocale } from '#lib/i18n/index';
	import { _ } from '#lib/i18n/index';

	const posts = $derived(getBlogPosts(resolveLocale($locale)));
</script>

<svelte:head>
	<title>{$_('blog.title')}</title>
	<meta name="description" content={$_('blog.description')} />
	<meta property="og:title" content={$_('blog.title')} />
	<meta property="og:description" content={$_('blog.description')} />
</svelte:head>

<section class="w-full space-y-5">
	<h1 class="text-3xl font-semibold tracking-tight">{$_('blog.heading')}</h1>
	<p class="text-muted-foreground">{$_('blog.intro')}</p>
	{#if posts.length}
		<div class="grid gap-4">
			{#each posts as post}
				<a class="block rounded-lg border p-5 transition-colors hover:bg-muted/50" href={`/blog/${post.slug}`}>
					<p class="text-sm text-muted-foreground">{post.date}</p>
					<h2 class="mt-2 text-xl font-semibold">{post.title}</h2>
					<p class="mt-2 text-sm text-muted-foreground">{post.description}</p>
					<div class="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
						{#each post.tags as tag}<span class="rounded-full border px-2 py-1">{tag}</span>{/each}
					</div>
				</a>
			{/each}
		</div>
	{:else}
		<p class="rounded-lg border border-dashed p-6 text-sm text-muted-foreground">{$_('blog.empty')}</p>
	{/if}
</section>
