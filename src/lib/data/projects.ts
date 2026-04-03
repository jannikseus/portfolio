export type Project = {
	title: string;
	description: string;
	techStack: string[];
	role: string;
	links?: {
		demo?: string;
		repo?: string;
	};
};

export const projects: Project[] = [
	{
		title: 'Portfolio Website',
		description: 'A fast, accessible personal website with focused content and lightweight interactions.',
		techStack: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'Bun'],
		role: 'Design and development',
		links: {
			demo: '/',
			repo: 'https://github.com/'
		}
	},
	{
		title: 'Developer Tooling Dashboard',
		description: 'A dashboard for tracking builds, checks, and project metrics across multiple repositories.',
		techStack: ['Svelte', 'Node.js', 'SQLite'],
		role: 'Frontend architecture and implementation'
	},
	{
		title: 'Interaction Lab Experiments',
		description: 'A sandbox route for prototyping animation and rendering ideas without affecting the main site.',
		techStack: ['SvelteKit', 'Motion One'],
		role: 'Rapid prototyping'
	}
];

