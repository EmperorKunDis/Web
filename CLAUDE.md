# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **Pozor:** Globální `CLAUDE.md` v domovském adresáři popisuje Django/Angular projekt "PostHub" — ten se na tento repozitář **nevztahuje**. Tohle je statický marketingový web firmy Praut s.r.o. (praut.cz) postavený v Astru. Ignoruj zdejší Django/PostgreSQL/Celery konvence.

## Co to je

Marketingový web Praut s.r.o. — statická prezentace AI/automatizačních služeb. Veškerý obsah je v češtině (`lang="cs"`).

- **Astro 5** v režimu `output: "static"` (čistě statický build, žádný SSR)
- **Tailwind CSS 4** přes `@tailwindcss/vite` (CSS-first konfigurace, žádný `tailwind.config.js`)
- Kontaktní formulář volá externí API `https://app.praut.cz/api/v1/web-message`

## Struktura repozitáře

- `web/source/` — **Astro projekt** (package `praut-fe`). Veškerý vývoj probíhá tady.
- `web/` — nasazený produkční výstup webu (předbuildované HTML, `_astro/` assety, `work/` a `reviews/` obrázky, `error/` HTML stránky, `stats/` AWStats, `robots.txt`). Build z `web/source` (`./dist/`) se sem kopíruje při nasazení.
- `log/` — produkční access/error logy serveru.

## Příkazy

Všechny příkazy se spouští z `web/source/`:

```bash
npm install
npm run dev      # dev server na localhost:4321 (proxy /api → https://app.praut.cz)
npm run build    # produkční build do ./dist/
npm run preview  # náhled buildu
npm run astro -- check   # typová/diagnostická kontrola Astro
```

Žádné testy ani lint skripty nejsou nastaveny.

## Architektura

### Obsah jako data (`src/data/*.ts`)
Texty stránek nejsou natvrdo v komponentách — jsou to **typované TS exporty** v `src/data/`. Úpravy obsahu (služby, technologie, reference, položky menu) se dělají editací těchto polí, ne šablon:
- `prautProducts.ts`, `prautTechnology.ts`, `prautTechnologyTypes.ts` — nabídka služeb/technologií
- `prautWork.ts`, `reviews.ts`, `whyPraut.ts`, `aiHelpsCards.ts` — sekce homepage
- `links.ts` — navigace (top menu + footer); zakomentované bloky = dočasně skryté položky
- `contactReasons.ts` — možnosti selectu v kontaktním formuláři
- `changingTitle.ts` — rotující texty v hero
- `recaptchaConfig.ts` — reCAPTCHA v3 site key

### Stránky a routy (`src/pages/`)
České názvy souborů = české routy: `index.astro` (/), `kontakt.astro`, `o-nas.astro`, `technologie.astro`. Každá stránka importuje `../praut.css` a obaluje obsah do layoutu s `title`/`description`/`keywords` (SEO meta).

### Layouty (`src/layouts/`)
- `Layout.astro` — výchozí (Header + slot + Footer, Google Fonts)
- `FormLayout.astro` — jako Layout, navíc načítá reCAPTCHA skript; používá ho `kontakt.astro`
- `Maintanance.astro` — režim údržby (přepíná se v `index.astro` zakomentováním `<Welcome/>`)

### Komponenty (`src/components/`)
Top-level sekce (`Header`, `Footer`, `Contact`, `ContactForm`, `AboutUs`, `Technology`…) + podsložka `welcome/` se sekcemi homepage (`Hero`, `Products`, `AIHelps`, `Work`, `ContactBanner`, `Reviews`). Homepage se skládá v `Welcome.astro` — zakomentování řádku tam vypne sekci (např. `Reviews` je aktuálně skrytá).

### Styling (`src/praut.css`)
Tailwind 4 CSS-first. V bloku `@theme` jsou brand tokeny — primárně `--color-primary: #283487` a `--color-secondary: #55178C`; značkové gradienty a fonty (Montserrat + Source Sans 3) jsou vlastní `@utility` třídy (`bg-main-gradient`, `text-main-gradient`, `font-montserrat`, `input-main-gradient-border`…). Při stylování používej tyto utility a tokeny, ne natvrdo zadané hodnoty.

### Kontaktní formulář
`ContactForm.astro` obsahuje inline `<script>`, který: (1) na submit spustí reCAPTCHA v3, (2) pošle JSON POST na `https://app.praut.cz/api/v1/web-message`, (3) zobrazí alert podle `result.data`. Vlastní stylovaný `<select>` je nahrazen ručně psaným vanilla-JS dropdownem (`custom-select`) — nativní `<select>` je skrytý přes CSS.

## Konvence

- Komentáře a identifikátory v kódu anglicky, veškerý uživatelský obsah česky (vč. diakritiky).
- Indentace v `.astro` souborech jsou 4 mezery; atributy v jednoduchých uvozovkách.
- Nové obrázky referencí patří do `web/source/public/work/` (slug podle názvu reference, varianty `.png` i `.webp`).
