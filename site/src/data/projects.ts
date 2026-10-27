import type { ImageMetadata } from 'astro';
import type { Localized } from '../i18n/ui';
import clunema from '../assets/projekte/clunema.png';
import hackathon from '../assets/projekte/hackathon.png';
import playbookLineup from '../assets/projekte/playbook-lineup.png';
import playbookMaps from '../assets/projekte/playbook-maps.png';
import playbookRadar from '../assets/projekte/playbook-radar.png';
import playbookVideo from '../assets/projekte/playbook-video.png';
import vncBeach from '../assets/projekte/vnc-beach.png';

export type Project = {
  slug: string;
  name: string;
  tag: Localized;
  blurb: Localized;
  href: string;
  tech: string[];
  image?: ImageMetadata;
  imageAlt?: Localized;
  cover?: 'terminal' | 'dns';
};

export const projects: Project[] = [
  {
    slug: 'vnc-beach',
    name: 'VNC Beach',
    tag: { de: 'Rust · macOS & Windows', en: 'Rust · macOS & Windows' },
    blurb: {
      de: 'VNC-Server und -Viewer, gratis und Open Source. Spricht Standard-VNC, überträgt nur geänderte Bildschirmkacheln und teilt mehrere Monitore als einen Desktop.',
      en: 'VNC server and viewer, free and open source. Speaks standard VNC, transfers only changed screen tiles and shares several monitors as one desktop.',
    },
    href: 'https://reals3bi.github.io/vnc-beach/',
    tech: ['Rust', 'Swift', 'RFB 3.8'],
    image: vncBeach,
    imageAlt: {
      de: 'Startseite von VNC Beach mit der Favoritenliste des Viewers',
      en: 'VNC Beach start page with the favourites list of the viewer',
    },
  },
  {
    slug: 'clunema',
    name: 'Clunema',
    tag: { de: 'Vereinssoftware', en: 'Club software' },
    blurb: {
      de: 'Termine, Beiträge, Umfragen und Nachrichten für Mitglieder, Abteilungen und Teams. Dazu eine Kassa, die auch ohne Internet bucht.',
      en: 'Events, fees, polls and messages for members, departments and teams. Plus a cash register that also books without internet.',
    },
    href: 'https://clunema.com',
    tech: ['TypeScript', 'Postgres', 'Kotlin', 'Swift'],
    image: clunema,
    imageAlt: {
      de: 'Startseite von clunema.com mit der Mitgliederverwaltung eines Vereins',
      en: 'clunema.com start page with the member management of a club',
    },
  },
  {
    slug: 'playbook',
    name: 'Playbook',
    tag: { de: 'Counter-Strike 2', en: 'Counter-Strike 2' },
    blurb: {
      de: 'Lineup-Bibliothek, Granatentraining im Spiel, Teams und Strats, Demoanalyse und Serververwaltung. Mit eigenem CounterStrikeSharp-Plugin, Ingame-HUD und Windows-App.',
      en: 'Lineup library, in-game grenade training, teams and strats, demo analysis and server management. With its own CounterStrikeSharp plugin, in-game HUD and Windows app.',
    },
    href: 'https://github.com/realS3BI/playbook',
    tech: ['TypeScript', 'C#', 'MongoDB', 'Docker'],
    image: playbookRadar,
    imageAlt: {
      de: 'Radar der Map Mirage in Playbook mit markierten Smoke-Lineups',
      en: 'Mirage radar in Playbook with marked smoke lineups',
    },
  },
  {
    slug: 'hackathon',
    name: 'Music & AI Hackathon',
    tag: { de: 'Hackathon 2026', en: 'Hackathon 2026' },
    blurb: {
      de: 'Musik-Wissensbasis mit einem Creator, der Instrumentalstücke im Browser erzeugt. Beitrag zur Challenge „Accessibility & Music“ auf der Rudolfshütte.',
      en: 'Music knowledge base with a creator that generates instrumental pieces in the browser. Entry for the “Accessibility & Music” challenge at the Rudolfshütte.',
    },
    href: 'https://github.com/realS3BI/hackathon-steckbrief',
    tech: ['Next.js', 'React', 'Web Audio'],
    image: hackathon,
    imageAlt: {
      de: 'Startseite von summit sounds mit dem Einstieg in Lernen und Erstellen',
      en: 'summit sounds start page with the entry into learning and creating',
    },
  },
  {
    slug: 'vaultship',
    name: 'vaultship',
    tag: { de: 'CLI · npm', en: 'CLI · npm' },
    blurb: {
      de: 'Releases in einem Befehl: Version, Changelog, Pull Request, Docker-Image und Deploy. Synchronisiert außerdem verschlüsselte .env-Dateien zwischen Rechnern.',
      en: 'Releases in one command: version, changelog, pull request, Docker image and deploy. Also syncs encrypted .env files between machines.',
    },
    href: 'https://github.com/realS3BI/vaultship',
    tech: ['TypeScript', 'npm', 'SQLite'],
    cover: 'terminal',
  },
  {
    slug: 'dns-manager',
    name: 'dns-manager',
    tag: { de: 'DNS · Hetzner', en: 'DNS · Hetzner' },
    blurb: {
      de: 'DNS-Zonen verwalten, ohne sich bei jedem Anbieter einzeln anzumelden. Anbindung an Hetzner, Login über GitHub oder Google.',
      en: 'Manage DNS zones without logging in to every provider separately. Hetzner integration, login via GitHub or Google.',
    },
    href: 'https://github.com/realS3BI/dns-uploader',
    tech: ['React', 'Convex', 'Turborepo'],
    cover: 'dns',
  },
];

export const featured = projects.slice(0, 3);

export type Shot = { image: ImageMetadata; alt: Localized; href: string };

const byslug = (slug: string) => projects.find((p) => p.slug === slug)!.href;

export const stream: Shot[] = [
  {
    image: playbookRadar,
    alt: { de: 'Playbook: Radar von Mirage mit Smoke-Lineups', en: 'Playbook: Mirage radar with smoke lineups' },
    href: byslug('playbook'),
  },
  {
    image: clunema,
    alt: { de: 'Clunema: Startseite mit Mitgliederverwaltung', en: 'Clunema: start page with member management' },
    href: byslug('clunema'),
  },
  {
    image: vncBeach,
    alt: { de: 'VNC Beach: Startseite mit Viewer', en: 'VNC Beach: start page with the viewer' },
    href: byslug('vnc-beach'),
  },
  {
    image: playbookLineup,
    alt: {
      de: 'Playbook: Abwurfsicht eines Smoke-Lineups mit Fadenkreuz',
      en: 'Playbook: throw view of a smoke lineup with crosshair',
    },
    href: byslug('playbook'),
  },
  {
    image: hackathon,
    alt: { de: 'summit sounds: Startseite des Hackathon-Beitrags', en: 'summit sounds: start page of the hackathon entry' },
    href: byslug('hackathon'),
  },
  {
    image: playbookMaps,
    alt: { de: 'Playbook: Übersicht aller Maps', en: 'Playbook: overview of all maps' },
    href: byslug('playbook'),
  },
  {
    image: playbookVideo,
    alt: { de: 'Playbook: Lineup mit Video und Wurfanleitung', en: 'Playbook: lineup with video and throw instructions' },
    href: byslug('playbook'),
  },
];
