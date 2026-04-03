export type Project = {
	id: string;
	keyPrefix: `projects.items.${string}`;
	techStack: string[];
	links?: {
		demo?: string;
		repo?: string;
	};
};

export const projects: Project[] = [
	{
		id: 'portfolio-website',
		keyPrefix: 'projects.items.portfolioWebsite',
		techStack: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'Bun'],
		links: {
			demo: '/',
			repo: 'https://github.com/'
		}
	},
	{
		id: 'developer-tooling-dashboard',
		keyPrefix: 'projects.items.developerToolingDashboard',
		techStack: ['Svelte', 'Node.js', 'SQLite']
	},
	{
		id: 'interaction-lab-experiments',
		keyPrefix: 'projects.items.interactionLabExperiments',
		techStack: ['SvelteKit', 'Motion One']
	}
];
