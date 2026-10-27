# schlossers.at

Persönliche Website von Sebastian Schlosser: Intro, Projekte, Über mich, Kontakt. Liegt in diesem Repo neben dem GitHub-Profil-README, weil beide dieselben Projekte zeigen.

Gebaut mit [Astro](https://astro.build), ohne Cookies, ohne Tracking, ohne Inhalte von Drittanbietern. Die Schriften [Instrument Sans](https://github.com/Instrument/instrument-sans) (über fontsource) und [Fraunces](https://github.com/undercasetype/Fraunces) kommen vom eigenen Server. Im Browser läuft nur das JavaScript für den Hell/Dunkel-Umschalter und das Einblenden beim Scrollen; die Wahl des Designs bleibt in `localStorage`.

## Aufbau

| Pfad | Inhalt |
| --- | --- |
| `README.md` | GitHub-Profil, nicht Teil der Website |
| `assets/` | Banner fürs GitHub-Profil, hell und dunkel |
| `site/` | Das Astro-Projekt |
| `site/src/pages/` | Startseite, `projekte`, `impressum`, `404` |
| `site/src/data/projects.ts` | Alle Projekte mit Text, Link, Technik und Screenshot. Die ersten drei stehen auf der Startseite, `stream` steuert die vorbeiziehenden Screenshots im Intro |
| `site/src/components/` | Header, Footer, Projektkarte, Projektstrom, Mitgliedsausweis, Umschalter, gezeichnete Cover für vaultship und dns-manager |
| `site/src/styles/global.css` | Farben, Schriften, Abstände als CSS-Variablen, darunter alle Stile |
| `site/src/assets/projekte/` | Screenshots, Astro rechnet sie beim Build in WebP um |
| `site/public/marken/` | Logos der Projekte für die Links im Intro |
| `site/public/avatar.svg` | Der gezeichnete Avatar im Header und am Ausweis |
| `design/card.html` | Vorlage für das Vorschaubild `site/public/og.png` und das Banner im GitHub-Profil |
| `.github/workflows/pages.yml` | Baut `site/` bei jedem Push auf `main` und veröffentlicht `site/dist` über GitHub Pages |

## Lokal ansehen

```sh
cd site
pnpm install
pnpm dev
```

Dann [localhost:4321](http://localhost:4321) öffnen. `pnpm build` erzeugt `site/dist`, `pnpm preview` zeigt das Ergebnis.

## Ein Projekt hinzufügen

1. Screenshot als PNG nach `site/src/assets/projekte/` legen, 1600 Pixel breit reicht.
2. In `site/src/data/projects.ts` importieren und einen Eintrag in `projects` ergänzen. Ohne Screenshot stattdessen `cover: 'terminal'` oder `cover: 'dns'` setzen oder ein neues Cover in `components/` bauen.
3. Soll der Screenshot auch im Intro vorbeiziehen, einen Eintrag in `stream` ergänzen.
4. Die Projektliste im Profil-`README.md` gleich mitziehen.

Playbook verlinkt bewusst nur auf GitHub, nicht auf die laufende Instanz.
