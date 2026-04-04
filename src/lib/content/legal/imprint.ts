import type { SupportedLocale } from '$lib/i18n';
import { marked } from 'marked';
import imprintDeMarkdown from './imprint.de.md?raw';
import imprintEnMarkdown from './imprint.en.md?raw';

function toHtml(markdown: string) {
	return marked.parse(markdown, { async: false });
}

export const imprintDocuments: Record<SupportedLocale, string> = {
	en: toHtml(imprintEnMarkdown),
	de: toHtml(imprintDeMarkdown)
};

