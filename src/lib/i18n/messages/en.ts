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
            'I build backend systems, ML applications, and infrastructure that stays readable and maintainable.',
        viewProjects: 'View projects',
        viewAllProjects: 'View all projects',
        contact: 'Contact',
        featured: 'Featured work',
        aboutHeading: 'About',
        aboutText: 'Backend-oriented engineer working across machine learning, computer vision, backend systems, and infrastructure.',
        aboutMore: 'More about me',
        viewAllPosts: 'More posts',
        focusHeading: 'Technical focus',
        focusIntro: 'I work across these three areas.',
        focusBackendHeading: 'Backend engineering',
        focusBackendText: 'Maintainable services, clear interfaces, and pragmatic architecture.',
        focusMlHeading: 'Machine learning',
        focusMlText: 'ML applications and computer vision, from experiments to useful systems.',
        focusInfrastructureHeading: 'Infrastructure',
        focusInfrastructureText: 'Containers, Kubernetes, GitOps, and deployment workflows.',
        contactHeading: 'Let us talk',
        contactIntro: 'About software, infrastructure, or machine learning.'
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
                    'ArgoCD, Helm, and Kubernetes deployment for self-hosted applications on a VPS.',
                role: 'Infrastructure and orchestration',
                overview: 'A GitOps setup for reproducibly operating self-hosted containers.',
                technicalApproach: 'Application manifests are described with Helm and Kubernetes and reconciled from Git with ArgoCD.',
                architecture: 'Git defines the desired state; ArgoCD detects changes and synchronizes them into the cluster.'
            },
            stravaLLMCoach: {
                title: 'Strava LLM Running Coach',
                description:
                    'Strava activity data combined with an LLM-based running coach in Streamlit.',
                role: 'AI and software development',
                overview: 'A conversational running coach that uses training history and structured coaching knowledge.',
                technicalApproach: 'Strava data is loaded through OAuth and exposed to LangChain/LangGraph workflows backed by OpenAI. The Streamlit interface presents plans and chat responses.',
                architecture: 'Strava API data flows into the coaching logic, where user context and Markdown-based knowledge inform LangChain tool calls and generated recommendations.'
            },
            industrialDataDrift: {
                title: 'Data Drift Detection in Industrial Image Processing Systems',
                description: 'An evaluation framework for data-drift detectors in industrial computer vision.',
                role: 'Research evaluation and framework development',
                overview: 'Statistical and ML-based drift detectors are compared for industrial computer-vision systems.',
                technicalApproach: 'Reproducible experiments use reference data, synthetic image corruptions, and unknown live data.',
                architecture: 'The framework organizes datasets, detectors, and evaluation while avoiding confidential production data.'
            }
        }
    }
};

export default en;
