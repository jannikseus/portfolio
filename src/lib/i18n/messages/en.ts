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
		footer: 'Built with SvelteKit, Bun, Tailwind, and shadcn-svelte.',
		imprint: 'Imprint',
		privacy: 'Privacy'
	},
	imprint: {
		title: 'Imprint | Jannik Portfolio',
		description: 'Legal notice and mandatory operator information for this website.',
		heading: 'Imprint',
		providerTitle: 'Information according to Section 5 TMG',
		providerNameLabel: 'Name:',
		providerAddressLabel: 'Address:',
		providerEmailLabel: 'Email:',
		providerPhoneLabel: 'Phone:',
		providerName: 'Jannik Seus',
		providerAddress: 'Feldbergstrasse 10, 55118 Mainz, Germany',
		providerEmail: 'jannik.seus@mailbox.org',
		providerPhone: 'Available upon request',
		responsibleTitle: 'Responsible for content according to Section 18 para. 2 MStV',
		responsibleName: 'Jannik Seus',
		disclaimerTitle: 'Liability for content',
		disclaimerText:
			'As a service provider, we are responsible for our own content on these pages under general law. However, we are not obligated to monitor transmitted or stored third-party information or investigate circumstances indicating unlawful activity.',
		externalLinksTitle: 'Liability for links',
		externalLinksText:
			'Our website contains links to external websites of third parties over whose content we have no control. Therefore, we cannot assume any liability for this external content. The respective provider or operator of the linked page is always responsible for its content.',
		ipRightsTitle: 'Copyright',
		ipRightsText:
			'The content and works on this website are subject to German copyright law. Reproduction, editing, distribution, and any form of exploitation outside the scope of copyright law require written permission from the author or creator.',
		notice:
			'This is an imprint for a personal portfolio website. Please adapt all information to your actual legal requirements before publication.'
	},
	privacy: {
		title: 'Privacy Policy | Jannik Portfolio',
		description: 'Information about the processing of personal data on this website.',
		heading: 'Privacy Policy'
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

