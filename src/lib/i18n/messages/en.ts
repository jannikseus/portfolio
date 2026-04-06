const en = {
    common: {
        siteName: 'Jannik Seus',
        languageLabel: 'Language',
        langEnglish: 'EN',
		langGerman: 'DE',
		openMenu: 'Menu',
		closeMenu: 'Close'
    },
    nav: {
        home: 'Home',
        about: 'About',
        projects: 'Projects',
		contact: 'Contact',
		mainNavigationAria: 'Main navigation'
    },
    layout: {
        footer: 'Built with Svelte, Bun, Tailwind, and shadcn-svelte.',
        imprint: 'Imprint',
        privacy: 'Privacy'
    },
    imprint: {
        title: 'Imprint | Jannik Seus',
        description: 'Legal notice and mandatory operator information for this website.',
        heading: 'Imprint'
    },
    privacy: {
        title: 'Privacy Policy | Jannik Portfolio',
        description: 'Information about the processing of personal data on this website.',
        heading: 'Privacy Policy'
    },
    home: {
        title: 'Home | Jannik Portfolio',
        description:
            'Fullstack developer skilled in Python, Java, and TypeScript, focused on scalable and ML-enhanced systems.',
        roleLabel: 'Student | Fullstack | Master@SCHOTT',
        headline: 'Hi, this is Jannik!',
        intro:
            'I love to build scalable, modular, ML-enhanced solutions. I focus on clean architecture, pragmatic delivery, and maintainable systems, with orchestration where it adds real value.',
        viewProjects: 'View projects',
        contact: 'Contact',
        featured: 'Featured work'
    },
    about: {
        title: 'About | Jannik Seus',
        description:
            'About the engineer behind this portfolio and work they care about.',
        heading: 'About',
        paragraphOne:
            'I like building systems that stay readable over time, whether they live in Python services, TypeScript interfaces, ML Systems, Java backends, or infrastructure around Docker and Kubernetes.',
        paragraphTwo:
			'This portfolio keeps the content concise and production-focused so the main site stays easy to maintain.'
    },
    projectsPage: {
        title: 'Projects | Jannik Seus',
        description: 'Selected work with concise context, stack, and role across software, platform, and ML projects.',
        heading: 'Projects',
        intro: 'A compact selection of software and product work. Each item highlights the result, stack, and my part.',
        rolePrefix: 'Role:'
    },
    contact: {
        title: 'Contact | Jannik Seus',
        description: 'Contact details for portfolio, product, and collaboration inquiries.',
        heading: 'Contact',
        intro:
            'If you want to talk about software, infrastructure, or Machine Learning, feel free to reach out via email or find me on GitHub and LinkedIn.',
        email: 'Email'
    },
    projects: {
        items: {
            portfolioWebsite: {
                title: 'Portfolio Website',
                description:
                    'A fast, accessible portfolio built with Svelte and SvelteKit, showcasing backend and ML projects.',
                role: 'Full-stack design and development'
            },
            gitOps: {
                title: 'GitOps for several self-hosted applications',
                description:
                    'A GitOps repository that is used to orchestrate multiple containers through argoCD, helm and kubernetes on my VPS (e.g. this website).',
                role: 'Central application infrastructure and orchestration'
            },
            stravaLLMCoach: {
                title: 'Strava LLM Running Coach',
                description:
                    'A Streamlit application integrated with Strava. A running coach as a chatbot that analyzes user data and helps creating a training plan.',
                role: 'AI and Development'
            }
        }
    }
};

export default en;
