import type { ImageMetadata } from 'astro';
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
  tag: string;
  blurb: string;
  href: string;
  tech: string[];
  image?: ImageMetadata;
  imageAlt?: string;
  cover?: 'terminal' | 'dns';
};

export const projects: Project[] = [
  {
    slug: 'vnc-beach',
    name: 'VNC Beach',
    tag: 'Rust · macOS & Windows',
    blurb:
      'VNC-Server und -Viewer, gratis und Open Source. Spricht Standard-VNC, überträgt nur geänderte Bildschirmkacheln und teilt mehrere Monitore als einen Desktop.',
    href: 'https://reals3bi.github.io/vnc-beach/',
    tech: ['Rust', 'Swift', 'RFB 3.8'],
    image: vncBeach,
    imageAlt: 'Startseite von VNC Beach mit der Favoritenliste des Viewers',
  },
  {
    slug: 'clunema',
    name: 'Clunema',
    tag: 'Vereinssoftware',
    blurb:
      'Termine, Beiträge, Umfragen und Nachrichten für Mitglieder, Abteilungen und Teams. Dazu eine Kassa, die auch ohne Internet bucht.',
    href: 'https://clunema.com',
    tech: ['TypeScript', 'Postgres', 'Kotlin', 'Swift'],
    image: clunema,
    imageAlt: 'Startseite von clunema.com mit der Mitgliederverwaltung eines Vereins',
  },
  {
    slug: 'playbook',
    name: 'Playbook',
    tag: 'Counter-Strike 2',
    blurb:
      'Lineup-Bibliothek, Granatentraining im Spiel, Teams und Strats, Demoanalyse und Serververwaltung. Mit eigenem CounterStrikeSharp-Plugin, Ingame-HUD und Windows-App.',
    href: 'https://github.com/realS3BI/playbook',
    tech: ['TypeScript', 'C#', 'MongoDB', 'Docker'],
    image: playbookRadar,
    imageAlt: 'Radar der Map Mirage in Playbook mit markierten Smoke-Lineups',
  },
  {
    slug: 'hackathon',
    name: 'Music & AI Hackathon',
    tag: 'Hackathon 2026',
    blurb:
      'Musik-Wissensbasis mit einem Creator, der Instrumentalstücke im Browser erzeugt. Beitrag zur Challenge „Accessibility & Music“ auf der Rudolfshütte.',
    href: 'https://github.com/realS3BI/hackathon-steckbrief',
    tech: ['Next.js', 'React', 'Web Audio'],
    image: hackathon,
    imageAlt: 'Startseite von summit sounds mit dem Einstieg in Lernen und Erstellen',
  },
  {
    slug: 'vaultship',
    name: 'vaultship',
    tag: 'CLI · npm',
    blurb:
      'Releases in einem Befehl: Version, Changelog, Pull Request, Docker-Image und Deploy. Synchronisiert außerdem verschlüsselte .env-Dateien zwischen Rechnern.',
    href: 'https://github.com/realS3BI/vaultship',
    tech: ['TypeScript', 'npm', 'SQLite'],
    cover: 'terminal',
  },
  {
    slug: 'dns-manager',
    name: 'dns-manager',
    tag: 'DNS · Hetzner',
    blurb:
      'DNS-Zonen verwalten, ohne sich bei jedem Anbieter einzeln anzumelden. Anbindung an Hetzner, Login über GitHub oder Google.',
    href: 'https://github.com/realS3BI/dns-uploader',
    tech: ['React', 'Convex', 'Turborepo'],
    cover: 'dns',
  },
];

export const featured = projects.slice(0, 3);

export type Shot = { image: ImageMetadata; alt: string; href: string };

const byslug = (slug: string) => projects.find((p) => p.slug === slug)!.href;

export const stream: Shot[] = [
  { image: playbookRadar, alt: 'Playbook: Radar von Mirage mit Smoke-Lineups', href: byslug('playbook') },
  { image: clunema, alt: 'Clunema: Startseite mit Mitgliederverwaltung', href: byslug('clunema') },
  { image: vncBeach, alt: 'VNC Beach: Startseite mit Viewer', href: byslug('vnc-beach') },
  { image: playbookLineup, alt: 'Playbook: Abwurfsicht eines Smoke-Lineups mit Fadenkreuz', href: byslug('playbook') },
  { image: hackathon, alt: 'summit sounds: Startseite des Hackathon-Beitrags', href: byslug('hackathon') },
  { image: playbookMaps, alt: 'Playbook: Übersicht aller Maps', href: byslug('playbook') },
  { image: playbookVideo, alt: 'Playbook: Lineup mit Video und Wurfanleitung', href: byslug('playbook') },
];
