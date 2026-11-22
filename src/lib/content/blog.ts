import { marked } from 'marked';
import type { SupportedLocale } from '$lib/i18n';

type Frontmatter = {
	title: string;
	description: string;
	date: string;
	tags: string[];
};

export type BlogPost = Frontmatter & {
	slug: string;
	locale: SupportedLocale;
	html: string;
};

const sources = import.meta.glob('./blog/*.md', { eager: true, query: '?raw', import: 'default' }) as Record<
	string,
	string
>;

function parseFrontmatter(source: string): { metadata: Frontmatter; markdown: string } {
	const match = source.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
	if (!match) {
		throw new Error('Blog post is missing frontmatter.');
	}

	const values = Object.fromEntries(
		match[1]
			.split('\n')
			.map((line) => line.match(/^([a-z]+):\s*(.*)$/))
			.filter((line): line is RegExpMatchArray => line !== null)
			.map(([, key, value]) => [key, value.replace(/^["']|["']$/g, '')])
	);

	if (!values.title || !values.description || !values.date) {
		throw new Error('Blog post frontmatter requires title, description, and date.');
	}

	return {
		metadata: {
			title: values.title,
			description: values.description,
			date: values.date,
			tags: values.tags
				?.replace(/^\[|\]$/g, '')
				.split(',')
				.map((tag) => tag.trim())
				.filter(Boolean) ?? []
		},
		markdown: match[2]
	};
}

function parsePost(path: string, source: string): BlogPost {
	const filename = path.split('/').pop()?.replace(/\.md$/, '') ?? '';
	const match = filename.match(/^(.+)\.(en|de)$/);
	if (!match) {
		throw new Error(`Blog post filename must use the format slug.locale.md: ${path}`);
	}

	const { metadata, markdown } = parseFrontmatter(source);
	return {
		...metadata,
		slug: match[1],
		locale: match[2] as SupportedLocale,
		html: marked.parse(markdown, { async: false })
	};
}

export const blogPosts = Object.entries(sources)
	.map(([path, source]) => parsePost(path, source))
	.sort((a, b) => b.date.localeCompare(a.date));

export function getBlogPosts(locale: SupportedLocale) {
	return blogPosts.filter((post) => post.locale === locale);
}

export function getBlogPost(slug: string, locale: SupportedLocale) {
	return blogPosts.find((post) => post.slug === slug && post.locale === locale);
}
