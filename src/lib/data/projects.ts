export type Project = {
	id: string;
	keyPrefix: `projects.items.${string}`;
	techStack: string[];
	sections: ('overview' | 'technicalApproach' | 'architecture' | 'results')[];
	featured: boolean;
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
		sections: ['overview', 'technicalApproach', 'architecture'],
		featured: false,
		links: {
			demo: 'https://jannikseus.tech',
			repo: 'https://github.com/jannikseus/portfolio'
		}
	},
	{
		id: 'gitops',
		keyPrefix: 'projects.items.gitOps',
		techStack: ['Kubernetes', 'Helm', 'ArgoCD'],
		sections: ['overview', 'technicalApproach', 'architecture'],
		featured: true,
		links: {
			demo: '/',
			repo: 'https://github.com/jannikseus/gitops-homelab'
		}
	},
	{
		id: 'strava-llm-coach',
		keyPrefix: 'projects.items.stravaLLMCoach',
		techStack: ['Python', 'Streamlit', 'LangChain', 'LangGraph', 'OpenAI'],
		sections: ['overview', 'technicalApproach'],
		featured: true,
		links: {
			repo: 'https://github.com/jannikseus/pacepilot'
		}
	},
	{
		id: 'industrial-data-drift-detection',
		keyPrefix: 'projects.items.industrialDataDrift',
		techStack: ['Python', 'Machine Learning', 'Computer Vision'],
		sections: ['overview', 'technicalApproach', 'architecture'],
		featured: true
	}
];
