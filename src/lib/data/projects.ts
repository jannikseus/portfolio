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
		techStack: ['Svelte', 'TypeScript', 'Tailwind CSS', 'Bun'],
		links: {
			demo: 'https://jannikseus.tech',
			repo: 'https://github.com/jannikseus/portfolio'
		}
	},
	{
		id: 'gitops',
		keyPrefix: 'projects.items.gitOps',
		techStack: ['Kubernetes', 'Helm', 'ArgoCD'],
		links: {
			demo: '/',
			repo: 'https://github.com/jannikseus/gitops-homelab'
		}
	},
	{
		id: 'strava-llm-coach',
		keyPrefix: 'projects.items.stravaLLMCoach',
		techStack: ['Python', 'Streamlit', 'Pydantic'],
		links: {
			repo: 'https://github.com/jannikseus/pacepilot'
		}
	}
];
