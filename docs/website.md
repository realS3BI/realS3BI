# schlossers.at

Persönliche Website von Sebastian Schlosser: Intro, Projekte, Über mich, Kontakt. Liegt in diesem Repo neben dem GitHub-Profil-README, weil beide dieselben Projekte zeigen.

Gebaut mit [Astro](https://astro.build), ohne Cookies, ohne Tracking, ohne Inhalte von Drittanbietern. Die Schriften [Instrument Sans](https://github.com/Instrument/instrument-sans) (über fontsource) und [Fraunces](https://github.com/undercasetype/Fraunces) kommen vom eigenen Server. Im Browser läuft nur das JavaScript für Sprache, Hell/Dunkel-Umschalter und das Einblenden beim Scrollen. Beide Entscheidungen bleiben in `localStorage`.

## Sprachen

Deutsch liegt unter `/`, Englisch unter `/en/`. Beim ersten Besuch entscheidet `navigator.languages`: Steht Deutsch irgendwo in der Liste, bleibt es bei Deutsch, sonst leitet die Seite vor dem ersten Rendern auf die englische Fassung um. Der Umschalter oben rechts (`EN` oder `DE`) speichert die Wahl, danach zählt nur noch die.

| Deutsch | Englisch |
| --- | --- |
| `/` | `/en/` |
| `/projekte/` | `/en/projects/` |
| `/impressum/` | `/en/legal/` |

Alle Texte der Oberfläche stehen in `site/src/i18n/ui.ts`, die Projekttexte in `site/src/data/projects.ts` jeweils als `{ de, en }`. Das Intro ist in `site/src/views/Home.astro` pro Sprache ausgeschrieben, weil die Logos im Satz stehen. Jede Seite in `site/src/pages/` ruft nur die passende Ansicht aus `site/src/views/` mit `lang` auf.

## Aufbau

| Pfad | Inhalt |
| --- | --- |
| `README.md` | GitHub-Profil, nicht Teil der Website |
| `assets/` | Banner fürs GitHub-Profil, hell und dunkel |
| `site/` | Das Astro-Projekt |
| `site/src/pages/` | Startseite, `projekte`, `impressum`, `404` und dasselbe unter `en/` |
| `site/src/views/` | Die eigentlichen Seiten, einmal pro Ansicht, mit `lang` als Prop |
| `site/src/i18n/ui.ts` | Routen und alle Texte der Oberfläche in beiden Sprachen |
| `site/src/data/projects.ts` | Alle Projekte mit Text, Link, Technik und Screenshot. Die ersten drei stehen auf der Startseite, `stream` steuert die vorbeiziehenden Screenshots im Intro |
| `site/src/components/` | Header, Footer, Projektkarte, Projektstrom, Mitgliedsausweis, Umschalter, gezeichnete Cover für vaultship und dns-manager |
| `site/src/styles/global.css` | Farben, Schriften, Abstände als CSS-Variablen, darunter alle Stile |
| `site/src/assets/projekte/` | Screenshots, Astro rechnet sie beim Build in WebP um |
| `site/public/marken/` | Logos der Projekte für die Links im Intro |
| `site/public/avatar.png` | Der gezeichnete Avatar im Header und am Ausweis, 256 Pixel. Das 1024-Pixel-Original liegt in `design/avatar-doodle.png` |
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
2. In `site/src/data/projects.ts` importieren und einen Eintrag in `projects` ergänzen, Texte auf Deutsch und Englisch. Ohne Screenshot stattdessen `cover: 'terminal'` oder `cover: 'dns'` setzen oder ein neues Cover in `components/` bauen.
3. Soll der Screenshot auch im Intro vorbeiziehen, einen Eintrag in `stream` ergänzen.
4. Die Projektliste im Profil-`README.md` gleich mitziehen.

Playbook verlinkt bewusst nur auf GitHub, nicht auf die laufende Instanz.

## Vorschaubild und Banner neu rendern

`design/card.html` nimmt `?kind=og` oder `?kind=banner` und `&theme=dark`. Headless Chrome braucht `--allow-file-access-from-files`, damit die Schriften aus dem Repo laden:

```sh
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CHROME" --headless=new --allow-file-access-from-files --hide-scrollbars --window-size=1200,630 --screenshot=site/public/og.png "file://$PWD/design/card.html?kind=og&theme=dark"
"$CHROME" --headless=new --allow-file-access-from-files --hide-scrollbars --force-device-scale-factor=2 --window-size=1280,360 --screenshot=assets/banner-light.png "file://$PWD/design/card.html?kind=banner"
"$CHROME" --headless=new --allow-file-access-from-files --hide-scrollbars --force-device-scale-factor=2 --window-size=1280,360 --screenshot=assets/banner-dark.png "file://$PWD/design/card.html?kind=banner&theme=dark"
```
