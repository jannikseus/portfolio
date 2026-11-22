const de = {
    common: {
        siteName: 'Jannik Seus',
        languageLabel: 'Sprache',
        langEnglish: 'EN',
		langGerman: 'DE',
		openMenu: 'Menü',
		closeMenu: 'Schliessen'
    },
    theme: {
        label: 'Farbschema',
        light: 'Hell',
        dark: 'Dunkel',
        system: 'System'
    },
    nav: {
        home: 'Start',
        about: 'über mich',
        projects: 'Projekte',
		blog: 'Blog',
		contact: 'Kontakt',
		mainNavigationAria: 'Hauptnavigation'
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
            'Backend Software Engineer mit Erfahrung in Machine Learning, Computer Vision und Infrastructure Engineering.',
        roleLabel: 'Backend Software Engineer | Machine Learning | Infrastructure',
        headline: 'Hi, Jannik hier!',
        intro:
            'Ich entwickle skalierbare, modulare Systeme mit klarer Architektur, pragmatischer Umsetzung und wartbarer Infrastruktur.',
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
        rolePrefix: 'Rolle:',
        overview: 'Überblick',
        technicalApproach: 'Technischer Ansatz',
        architecture: 'Architektur',
        results: 'Ergebnisse'
    },
    blog: {
        title: 'Blog | Jannik Seus',
        description: 'Blogposts über Softwareentwicklung, Infrastruktur und Machine Learning.',
        heading: 'Blog',
        intro: 'Hier erscheinen künftig Beiträge über Softwareentwicklung, Infrastruktur und Machine Learning.',
        empty: 'Noch keine Beiträge veröffentlicht.',
        notFoundTitle: 'Beitrag nicht gefunden',
        backToBlog: 'Zurück zum Blog'
    },
    contact: {
        title: 'Kontakt | Jannik Seus',
        description: 'Kontaktinformationen für Portfolio-, Produkt- und Kollaborationsanfragen.',
        heading: 'Kontakt',
        intro:
            'Wenn du über Software-, Infrastruktur- oder Machine Learning sprechen möchtest, melde dich gern per E-Mail oder finde mich auf GitHub und LinkedIn.',
        email: 'E-Mail'
    },
    projects: {
        items: {
            portfolioWebsite: {
                title: 'Portfolio Website',
                description:
                    'Ein schnelles, barrierefreies Portfolio mit Svelte und SvelteKit, das Backend- und ML-Projekte präsentiert.',
                role: 'Design und Entwicklung',
                overview: 'Dieses Portfolio präsentiert ausgewählte Software-, ML- und Infrastrukturarbeit.',
                technicalApproach: 'SvelteKit, TypeScript, Tailwind CSS und Bun bilden eine schlanke, serverseitig gerenderte Website.',
                architecture: 'Lokalisierte Routen, wiederverwendbare UI-Komponenten und dateibasierte Inhalte trennen Darstellung und Content.'
            },
            gitOps: {
                title: 'GitOps für selbst gehostete Anwendungen',
                description:
                    'Ein GitOps-Repository, das mehrere Container über ArgoCD, Helm und Kubernetes auf meinem VPS orchestriert (z.B. diese Website).',
                role: 'Infrastruktur und Orchestrierung',
                overview: 'GitOps für selbst gehostete Anwendungen mit deklarativer Bereitstellung.',
                technicalApproach: 'Container werden mit Helm und Kubernetes beschrieben und über ArgoCD aus Git synchronisiert.',
                architecture: 'Das Git-Repository dient als Konfigurationsquelle; ArgoCD übernimmt die Synchronisierung in den Cluster.'
            },
            stravaLLMCoach: {
                title: 'Strava LLM Lauftrainer',
                description:
                    'Eine mit Strava integrierte Streamlit App. Ein Lauftrainer steht als Chatbot zur Verfügung, analysiert Nutzerdaten und hilft beim Erstellen eines Trainingsplans.',
                role: 'KI- und Softwareentwicklung',
                overview: 'Eine mit Strava integrierte Anwendung für einen laufbezogenen Chatbot.',
                technicalApproach: 'Die Streamlit-Anwendung verarbeitet Nutzerdaten und verwendet Pydantic für typisierte Datenmodelle.',
                architecture: 'Strava-Daten, Anwendungslogik und Chat-Interface sind in einer kompakten Python-Anwendung verbunden.'
            },
            industrialDataDrift: {
                title: 'Data Drift Detection in Industrial Image Processing Systems',
                description: 'Ein Evaluationsframework zur Untersuchung von Data-Drift-Detektoren für industrielle Bildverarbeitung.',
                role: 'Wissenschaftliche Evaluation und Framework-Entwicklung',
                overview: 'Verglichen werden statistische und ML-basierte Drift-Detektoren für industrielle Computer-Vision-Systeme.',
                technicalApproach: 'Reproduzierbare Experimente nutzen Referenzdaten, synthetische Bildkorruptionen und unbekannte Live-Daten.',
                architecture: 'Das Framework organisiert Datensätze, Detektoren und Auswertung, ohne vertrauliche Produktionsdaten zu veröffentlichen.'
            }
        }
    }
};

export default de;
