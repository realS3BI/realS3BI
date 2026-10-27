export type Lang = 'de' | 'en';
export type Localized = Record<Lang, string>;

export const langs: Lang[] = ['de', 'en'];
export const other = (lang: Lang): Lang => (lang === 'de' ? 'en' : 'de');

export const routes = {
  home: { de: '/', en: '/en/' },
  projects: { de: '/projekte/', en: '/en/projects/' },
  legal: { de: '/impressum/', en: '/en/legal/' },
} satisfies Record<string, Localized>;

export type RouteKey = keyof typeof routes;

type Strings = {
  locale: string;
  title: string;
  description: string;
  skip: string;
  navLabel: string;
  nav: { projects: string; about: string; contact: string };
  switchLang: string;
  theme: string;
  hero: { contact: string; github: string };
  streamLabel: string;
  sections: { projects: string; allProjects: string; about: string; contact: string };
  about: { p1: string; p2: string; github: string };
  tools: { languages: string; ui: string; data: string };
  card: {
    label: string;
    title: string;
    number: string;
    role: string;
    avatarAlt: string;
    since: string;
    byDay: string;
    building: string;
  };
  contact: { line: string };
  footer: { built: string; email: string; legal: string };
  projectsPage: { title: string; metaTitle: string; description: string; intro: string };
  legalPage: {
    title: string;
    metaTitle: string;
    description: string;
    disclosure: string;
    site: string;
    privacy: string;
    privacy1: string;
    privacy2: string;
  };
};

export const ui: Record<Lang, Strings> = {
  de: {
    locale: 'de_AT',
    title: 'Sebastian Schlosser · Softwareentwicklung',
    description:
      'Sebastian Schlosser, Softwareentwickler in Wien. Werkzeuge für Teams, Vereine und für mich selbst: Clunema, Playbook, VNC Beach.',
    skip: 'Zum Inhalt',
    navLabel: 'Hauptnavigation',
    nav: { projects: 'projekte', about: 'über mich', contact: 'kontakt' },
    switchLang: 'Switch to English',
    theme: 'Zwischen hell und dunkel wechseln',
    hero: { contact: 'Schreib mir', github: 'GitHub' },
    streamLabel: 'Screenshots aus den Projekten',
    sections: {
      projects: 'Ausgewählte Projekte',
      allProjects: 'alle Projekte',
      about: 'Über mich',
      contact: 'Kontakt',
    },
    about: {
      p1: 'Ich schreibe Software meistens dann, wenn mir oder Leuten um mich herum ein Werkzeug fehlt. So ist ein Trainingsserver für das CS2-Team entstanden, eine Kasse für den Verein und ein VNC-Client in Rust.',
      p2: 'Am liebsten arbeite ich mit TypeScript, React und Convex. Wenn es schnell und nah am System sein muss, mit Rust. Auf GitHub seit 2020, als',
      github: 'realS3BI',
    },
    tools: { languages: 'Sprachen', ui: 'Oberflächen', data: 'Daten und Betrieb' },
    card: {
      label: 'Mitgliedsausweis von Sebastian Schlosser',
      title: 'Mitgliedsausweis',
      number: 'Nr. 62571444',
      role: 'Softwareentwickler · Wien',
      avatarAlt: 'Porträt von Sebastian Schlosser',
      since: 'Mitglied seit',
      byDay: 'Tagsüber',
      building: 'Baut gerade',
    },
    contact: { line: 'Eine Idee, ein Projekt oder eine Frage?' },
    footer: { built: 'Gebaut mit Astro, ohne Tracking.', email: 'E-Mail', legal: 'Impressum' },
    projectsPage: {
      title: 'Projekte',
      metaTitle: 'Projekte · Sebastian Schlosser',
      description:
        'Alle Projekte von Sebastian Schlosser: Clunema, Playbook, VNC Beach, vaultship, dns-manager und der Music & AI Hackathon.',
      intro:
        'Jedes dieser Werkzeuge ist aus einem konkreten Mangel heraus entstanden. Der Code liegt auf GitHub, zwei davon laufen auch als fertige Produkte.',
    },
    legalPage: {
      title: 'Impressum',
      metaTitle: 'Impressum · Sebastian Schlosser',
      description: 'Impressum und Datenschutz von schlossers.at.',
      disclosure: 'Offenlegung gemäß § 25 MedienG',
      site: 'Persönliche Website mit Informationen über Projekte von Sebastian Schlosser.',
      privacy: 'Datenschutz',
      privacy1:
        'Diese Website setzt keine Cookies, bindet keine Inhalte von Drittanbietern ein und verwendet kein Tracking. Schriften werden von diesem Server geladen. Die Wahl zwischen hellem und dunklem Design und die Sprache bleiben nur in deinem Browser gespeichert.',
      privacy2:
        'Beim Aufruf verarbeitet der Hosting-Anbieter technisch notwendige Daten wie IP-Adresse und Zeitpunkt des Zugriffs, um die Seite auszuliefern. Wenn du mir eine E-Mail schreibst, verwende ich deine Angaben nur, um dir zu antworten.',
    },
  },
  en: {
    locale: 'en_GB',
    title: 'Sebastian Schlosser · Software development',
    description:
      'Sebastian Schlosser, software developer in Vienna. Tools for teams, clubs and myself: Clunema, Playbook, VNC Beach.',
    skip: 'Skip to content',
    navLabel: 'Main navigation',
    nav: { projects: 'projects', about: 'about', contact: 'contact' },
    switchLang: 'Zu Deutsch wechseln',
    theme: 'Switch between light and dark',
    hero: { contact: 'Say hello', github: 'GitHub' },
    streamLabel: 'Screenshots from the projects',
    sections: {
      projects: 'Selected projects',
      allProjects: 'all projects',
      about: 'About me',
      contact: 'Contact',
    },
    about: {
      p1: 'I mostly write software when I or the people around me are missing a tool. That is how a training server for the CS2 team came about, a cash register for the club and a VNC client in Rust.',
      p2: 'I like working with TypeScript, React and Convex best. When it has to be fast and close to the system, Rust. On GitHub since 2020 as',
      github: 'realS3BI',
    },
    tools: { languages: 'Languages', ui: 'Interfaces', data: 'Data and operations' },
    card: {
      label: 'Membership card of Sebastian Schlosser',
      title: 'Membership card',
      number: 'No. 62571444',
      role: 'Software developer · Vienna',
      avatarAlt: 'Portrait of Sebastian Schlosser',
      since: 'Member since',
      byDay: 'By day',
      building: 'Building',
    },
    contact: { line: 'An idea, a project or a question?' },
    footer: { built: 'Built with Astro, no tracking.', email: 'Email', legal: 'Legal notice' },
    projectsPage: {
      title: 'Projects',
      metaTitle: 'Projects · Sebastian Schlosser',
      description:
        'All projects by Sebastian Schlosser: Clunema, Playbook, VNC Beach, vaultship, dns-manager and the Music & AI Hackathon.',
      intro:
        'Each of these tools came out of a concrete gap. The code is on GitHub, and two of them also run as finished products.',
    },
    legalPage: {
      title: 'Legal notice',
      metaTitle: 'Legal notice · Sebastian Schlosser',
      description: 'Legal notice and privacy information for schlossers.at.',
      disclosure: 'Disclosure under § 25 of the Austrian Media Act',
      site: 'Personal website with information about projects by Sebastian Schlosser.',
      privacy: 'Privacy',
      privacy1:
        'This website sets no cookies, embeds no third-party content and uses no tracking. Fonts are served from this server. Your choice of light or dark design and of language is stored only in your browser.',
      privacy2:
        'When you visit, the hosting provider processes technically necessary data such as your IP address and the time of access to deliver the page. If you email me, I use your details only to reply.',
    },
  },
};
