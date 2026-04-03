const en = {
	common: {
		siteName: 'Jannik Portfolio',
		languageLabel: 'Language',
		langEnglish: 'EN',
		langGerman: 'DE'
	},
	nav: {
		home: 'Home',
		about: 'About',
		projects: 'Projects',
		contact: 'Contact',
		lab: 'Lab'
	},
	layout: {
		footer: 'Built with SvelteKit, Bun, Tailwind, and shadcn-svelte.'
	},
	home: {
		title: 'Home | Jannik Portfolio',
		description:
			'Personal portfolio focused on performant frontend work, clean UX, and accessible interfaces.',
		roleLabel: 'Frontend developer',
		headline: 'Building maintainable interfaces with accessibility and performance as defaults.',
		intro:
			'This site is intentionally simple: clear content, focused components, and room for controlled experiments in the lab section.',
		viewProjects: 'View projects',
		contact: 'Contact',
		featured: 'Featured projects'
	},
	about: {
		title: 'About | Jannik Portfolio',
		description:
			'About the developer behind this portfolio and the principles used to build production-ready interfaces.',
		heading: 'About',
		paragraphOne:
			'I focus on frontend systems that stay readable over time. My work emphasizes clear information hierarchy, accessible interactions, and reliable performance.',
		paragraphTwo:
			'This portfolio is structured to separate stable production pages from experimental work in /lab.'
	},
	projectsPage: {
		title: 'Projects | Jannik Portfolio',
		description: 'Selected projects with concise context, tech stack, and contribution details.',
		heading: 'Projects',
		intro: 'A curated selection of work. Each item highlights the outcome, stack, and my role.',
		rolePrefix: 'Role:'
	},
	contact: {
		title: 'Contact | Jannik Portfolio',
		description: 'Contact details for portfolio and collaboration inquiries.',
		heading: 'Contact',
		intro: 'If you want to collaborate on product-focused frontend work, feel free to reach out.',
		email: 'Email'
	},
	lab: {
		title: 'Lab | Jannik Portfolio',
		description:
			'Experimental playground for interaction and rendering ideas, isolated from core portfolio pages.',
		heading: 'Lab',
		paragraphOne:
			'This section is intentionally isolated for experiments. Main site pages prioritize stability and maintainability.',
		paragraphTwo: 'First experiments will be added here next.'
	},
	projects: {
		items: {
			portfolioWebsite: {
				title: 'Portfolio Website',
				description:
					'A fast, accessible personal website with focused content and lightweight interactions.',
				role: 'Design and development'
			},
			developerToolingDashboard: {
				title: 'Developer Tooling Dashboard',
				description:
					'A dashboard for tracking builds, checks, and project metrics across multiple repositories.',
				role: 'Frontend architecture and implementation'
			},
			interactionLabExperiments: {
				title: 'Interaction Lab Experiments',
				description:
					'A sandbox route for prototyping animation and rendering ideas without affecting the main site.',
				role: 'Rapid prototyping'
			}
		}
	}
};

export default en;

