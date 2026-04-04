const de = {
    common: {
        siteName: 'Jannik Seus',
        languageLabel: 'Sprache',
        langEnglish: 'EN',
        langGerman: 'DE'
    },
    nav: {
        home: 'Start',
        about: 'über mich',
        projects: 'Projekte',
		contact: 'Kontakt'
    },
    layout: {
        footer: 'Erstellt mit Svelte, Bun, Tailwind und shadcn-svelte.',
        imprint: 'Impressum',
        privacy: 'Datenschutz'
    },
    imprint: {
        title: 'Impressum | Jannik Seus',
        description: 'Anbieterkennzeichnung und Pflichtangaben für diese Website.',
        heading: 'Impressum'
    },
    privacy: {
        title: 'Datenschutzerklärung | Jannik Seus',
        description: 'Informationen zur Verarbeitung personenbezogener Daten auf dieser Website.',
        heading: 'Datenschutzerklärung'
    },
    home: {
        title: 'Start | Jannik Seus',
        description:
            'Fullstack-Entwickler mit Schwerpunkt auf Python, Java und TypeScript sowie skalierbaren, ML-gestützten Systemen.',
        roleLabel: 'Student | Fullstack | Masterand@SCHOTT',
        headline: 'Hi, Jannik hier!',
        intro:
            'Ich baue gerne skalierbare, modulare, ML-gestützte Lösungen. Ich arbeite mit klarer Architektur, pragmatischer Umsetzung und wartbaren Systemen inkl. Orchestrierung, wo es Mehrwert bringt.',
        viewProjects: 'Projekte ansehen',
        contact: 'Kontakt',
        featured: 'Ausgewählte Arbeit'
    },
    about: {
        title: 'über mich | Jannik Seus',
        description:
            'Informationen zu der Person hinter diesem Portfolio und der Arbeit die ich so mache.',
        heading: 'über mich',
        paragraphOne:
            'Ich baue gern Systeme, die langfristig lesbar bleiben, egal ob in Python-Services, TypeScript-Interfaces, ML-Systemen, Java-Backends oder in der Infrastruktur rund um Docker und Kubernetes.',
        paragraphTwo:
			'Dieses Portfolio bleibt bewusst kompakt und produktionsnah, damit die Hauptseite langfristig wartbar ist.'
    },
    projectsPage: {
        title: 'Projekte | Jannik Seus',
        description: 'Ausgewählte Arbeit mit kompaktem Kontext, Stack und Rolle aus Software-, Plattform- und ML-Projekten.',
        heading: 'Projekte',
        intro: 'Eine kompakte Auswahl an Software- und Produktarbeit. Jeder Eintrag zeigt Ergebnis, Stack und meinen Anteil.',
        rolePrefix: 'Rolle:'
    },
    contact: {
        title: 'Kontakt | Jannik Seus',
        description: 'Kontaktinformationen für Portfolio-, Produkt- und Kollaborationsanfragen.',
        heading: 'Kontakt',
        intro:
            'Wenn du über Software-, Infrastruktur- oder Machine Learning sprechen möchtest, melde dich gern per E-Mail oder finde mich auf GitHub und LinkedIn: https://github.com/jannikseus und https://www.linkedin.com/in/jannik-seus.',
        email: 'E-Mail'
    },
    projects: {
        items: {
            portfolioWebsite: {
                title: 'Portfolio Website',
                description:
                    'Ein schnelles, barrierefreies Portfolio mit Svelte und SvelteKit, das Backend- und ML-Projekte präsentiert.',
                role: 'Full-Stack Design und Entwicklung'
            },
            gitOps: {
                title: 'GitOps für selbst gehostete Anwendungen',
                description:
                    'Ein GitOps-Repository, das mehrere Container über ArgoCD, Helm und Kubernetes auf meinem VPS orchestriert (z.B. diese Website).',
                role: 'Zentrale Infrastruktur und Orchestrierung'
            },
            stravaLLMCoach: {
                title: 'Strava LLM Lauftrainer',
                description:
                    'Eine mit Strava integrierte Streamlit App. Ein Lauftrainer steht als Chatbot zur Verfügung, analysiert Nutzerdaten und hilft beim Erstellen eines Trainingsplans.',
                role: 'KI und Software-Entwicklung'
            }
        }
    }
};

export default de;

