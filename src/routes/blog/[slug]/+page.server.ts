import { error } from '@sveltejs/kit';
import { getBlogPost } from '$lib/content/blog';

export async function load({ params, parent }) {
	const { locale } = await parent();
	if (!getBlogPost(params.slug, locale)) {
		error(404, 'Blog post not found');
	}

	return { slug: params.slug };
}
