const en = {
    common: {
        siteName: 'Jannik Seus',
        languageLabel: 'Language',
        langEnglish: 'EN',
		langGerman: 'DE',
		openMenu: 'Menu',
		closeMenu: 'Close'
    },
    theme: {
        label: 'Color scheme',
        light: 'Light',
        dark: 'Dark',
        system: 'System'
    },
    nav: {
        home: 'Home',
        about: 'About',
        projects: 'Projects',
		blog: 'Blog',
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
            'Backend software engineer with experience in machine learning, computer vision, and infrastructure engineering.',
        roleLabel: 'Backend Software Engineer | Machine Learning | Infrastructure',
        headline: 'Hi, this is Jannik!',
        intro:
            'I build scalable, modular systems with clear architecture, pragmatic delivery, and maintainable infrastructure.',
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
        rolePrefix: 'Role:',
        overview: 'Overview',
        technicalApproach: 'Technical approach',
        architecture: 'Architecture',
        results: 'Results'
    },
    blog: {
        title: 'Blog | Jannik Seus',
        description: 'Blog posts about software development, infrastructure, and machine learning.',
        heading: 'Blog',
        intro: 'Future posts will cover software development, infrastructure, and machine learning.',
        empty: 'No posts published yet.',
        notFoundTitle: 'Post not found',
        backToBlog: 'Back to blog'
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
                role: 'Design and development',
                overview: 'This portfolio presents selected software, ML, and infrastructure work.',
                technicalApproach: 'SvelteKit, TypeScript, Tailwind CSS, and Bun provide a lean server-rendered website.',
                architecture: 'Localized routes, reusable UI components, and file-based content keep presentation and content separate.'
            },
            gitOps: {
                title: 'GitOps for several self-hosted applications',
                description:
                    'A GitOps repository that is used to orchestrate multiple containers through argoCD, helm and kubernetes on my VPS (e.g. this website).',
                role: 'Infrastructure and orchestration',
                overview: 'GitOps for self-hosted applications with declarative delivery.',
                technicalApproach: 'Containers are described with Helm and Kubernetes and synchronized from Git through ArgoCD.',
                architecture: 'The Git repository is the configuration source while ArgoCD synchronizes the desired state into the cluster.'
            },
            stravaLLMCoach: {
                title: 'Strava LLM Running Coach',
                description:
                    'A Streamlit application integrated with Strava. A running coach as a chatbot that analyzes user data and helps creating a training plan.',
                role: 'AI and software development',
                overview: 'A Strava-integrated application offering a running-focused chatbot.',
                technicalApproach: 'The Streamlit application processes user data and uses Pydantic for typed data models.',
                architecture: 'Strava data, application logic, and the chat interface are connected in a compact Python application.'
            },
            industrialDataDrift: {
                title: 'Data Drift Detection in Industrial Image Processing Systems',
                description: 'An evaluation framework for investigating data-drift detectors in industrial image processing.',
                role: 'Research evaluation and framework development',
                overview: 'Statistical and ML-based drift detectors are compared for industrial computer-vision systems.',
                technicalApproach: 'Reproducible experiments use reference data, synthetic image corruptions, and unknown live data.',
                architecture: 'The framework organizes datasets, detectors, and evaluation while avoiding confidential production data.'
            }
        }
    }
};

export default en;
