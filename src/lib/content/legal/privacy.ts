import type { SupportedLocale } from '$lib/i18n';
import { marked } from 'marked';
import privacyDeMarkdown from './privacy.de.md?raw';
import privacyEnMarkdown from './privacy.en.md?raw';

function toHtml(markdown: string) {
	return marked.parse(markdown, { async: false });
}

export const privacyDocuments: Record<SupportedLocale, string> = {
	en: toHtml(privacyEnMarkdown),
	de: toHtml(privacyDeMarkdown)
};

