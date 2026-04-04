const de = {
	common: {
		siteName: 'Jannik Portfolio',
		languageLabel: 'Sprache',
		langEnglish: 'EN',
		langGerman: 'DE'
	},
	nav: {
		home: 'Start',
		about: 'Ueber mich',
		projects: 'Projekte',
		contact: 'Kontakt',
		lab: 'Lab'
	},
	layout: {
		footer: 'Erstellt mit SvelteKit, Bun, Tailwind und shadcn-svelte.',
		imprint: 'Impressum',
		privacy: 'Datenschutz'
	},
	imprint: {
		title: 'Impressum | Jannik Portfolio',
		description: 'Anbieterkennzeichnung und Pflichtangaben fuer diese Website.',
		heading: 'Impressum',
		providerTitle: 'Angaben gemaess Section 5 TMG',
		providerNameLabel: 'Name:',
		providerAddressLabel: 'Anschrift:',
		providerEmailLabel: 'E-Mail:',
		providerPhoneLabel: 'Telefon:',
		providerName: 'Jannik Seus',
		providerAddress: 'Feldbergstrasse 10, 55118 Mainz, Deutschland',
		providerEmail: 'jannik.seus@mailbox.org',
		providerPhone: 'Auf Anfrage erhaeltlich',
		responsibleTitle: 'Verantwortlich fuer den Inhalt nach Section 18 Abs. 2 MStV',
		responsibleName: 'Jannik Seus',
		disclaimerTitle: 'Haftung fuer Inhalte',
		disclaimerText:
			'Als Diensteanbieter sind wir fuer eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, uebermittelte oder gespeicherte fremde Informationen zu ueberwachen oder nach Umstaenden zu forschen, die auf eine rechtswidrige Taetigkeit hinweisen.',
		externalLinksTitle: 'Haftung fuer Links',
		externalLinksText:
			'Unser Angebot enthaelt Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb koennen wir fuer diese fremden Inhalte auch keine Gewaehr uebernehmen. Fuer die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.',
		ipRightsTitle: 'Urheberrecht',
		ipRightsText:
			'Die durch uns erstellten Inhalte und Werke dieser Website unterliegen dem deutschen Urheberrecht. Die Vervielfaeltigung, Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechtes beduerfen der schriftlichen Zustimmung des Autors oder Schoepfers.',
		notice:
			'Dies ist ein Impressum fuer eine persoenliche Portfolio-Website. Bitte passe alle Angaben vor der Veroeffentlichung an deine tatsaechlichen rechtlichen Anforderungen an.'
	},
	privacy: {
		title: 'Datenschutzerklarung | Jannik Portfolio',
		description: 'Informationen zur Verarbeitung personenbezogener Daten auf dieser Website.',
		heading: 'Datenschutzerklarung'
	},
	home: {
		title: 'Start | Jannik Portfolio',
		description:
			'Persoenliches Portfolio mit Fokus auf performante Frontend-Arbeit, klare UX und barrierefreie Oberflaechen.',
		roleLabel: 'Frontend-Entwickler',
		headline: 'Wartbare Interfaces mit Barrierefreiheit und Performance als Standard.',
		intro:
			'Diese Website ist bewusst einfach gehalten: klare Inhalte, fokussierte Komponenten und Raum fuer kontrollierte Experimente im Lab-Bereich.',
		viewProjects: 'Projekte ansehen',
		contact: 'Kontakt',
		featured: 'Ausgewaehlte Projekte'
	},
	about: {
		title: 'Ueber mich | Jannik Portfolio',
		description:
			'Informationen zum Entwickler hinter diesem Portfolio und zu den Prinzipien fuer produktionsreife Interfaces.',
		heading: 'Ueber mich',
		paragraphOne:
			'Ich konzentriere mich auf Frontend-Systeme, die langfristig lesbar bleiben. Meine Arbeit legt Wert auf klare Informationshierarchie, zugaengliche Interaktionen und zuverlaessige Performance.',
		paragraphTwo:
			'Dieses Portfolio trennt stabile Produktionsseiten von experimenteller Arbeit in /lab.'
	},
	projectsPage: {
		title: 'Projekte | Jannik Portfolio',
		description: 'Ausgewaehlte Projekte mit kompaktem Kontext, Tech-Stack und Beitrag.',
		heading: 'Projekte',
		intro: 'Eine kuratierte Auswahl an Arbeit. Jeder Eintrag zeigt Ergebnis, Stack und meinen Beitrag.',
		rolePrefix: 'Rolle:'
	},
	contact: {
		title: 'Kontakt | Jannik Portfolio',
		description: 'Kontaktinformationen fuer Portfolio- und Kollaborationsanfragen.',
		heading: 'Kontakt',
		intro: 'Wenn du an produktfokussierter Frontend-Arbeit zusammenarbeiten moechtest, melde dich gern.',
		email: 'E-Mail'
	},
	lab: {
		title: 'Lab | Jannik Portfolio',
		description:
			'Experimenteller Bereich fuer Interaktions- und Rendering-Ideen, isoliert von den Kernseiten.',
		heading: 'Lab',
		paragraphOne:
			'Dieser Bereich ist bewusst fuer Experimente isoliert. Die Hauptseiten priorisieren Stabilitaet und Wartbarkeit.',
		paragraphTwo: 'Die ersten Experimente folgen hier als naechstes.'
	},
	projects: {
		items: {
			portfolioWebsite: {
				title: 'Portfolio Website',
				description:
					'Eine schnelle und barrierefreie persoenliche Website mit fokussierten Inhalten und leichten Interaktionen.',
				role: 'Design und Entwicklung'
			},
			developerToolingDashboard: {
				title: 'Developer Tooling Dashboard',
				description:
					'Ein Dashboard zum Verfolgen von Builds, Checks und Projektmetriken ueber mehrere Repositories.',
				role: 'Frontend-Architektur und Implementierung'
			},
			interactionLabExperiments: {
				title: 'Interaction Lab Experiments',
				description:
					'Eine Sandbox-Route fuer Prototypen von Animationen und Rendering-Ideen ohne Einfluss auf die Hauptseite.',
				role: 'Schnelles Prototyping'
			}
		}
	}
};

export default de;

