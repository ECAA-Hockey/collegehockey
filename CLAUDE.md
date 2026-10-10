# ECAA – collegehockey.eu

Statický web ECAA (HTML, CSS, vanilla JS, bez buildu a bez závislostí). Jazyk webu je **angličtina**. Obsahuje roční žebříček univerzitních hokejových soutěží mužů, rekordy návštěvnosti a feed novinek z lig.

## Struktura

- `index.html` – úvod: hlavní je žebříček (lídři, tabulka Europe/World, rekordy návštěvnosti); vlevo sloupec s novinkami chronologicky (25 nejnovějších), nahoře v něm zvýrazněný článek (`pinned: true` v `data/news.js`). Na mobilu je žebříček první a novinky pod ním.
- `ranking/2025-2026/index.html` – žebříček sezóny 2025/2026 (tabulky Europe/World, metodika, zdroje)
- `ranking/index.html` – přesměrování na nejnovější ročník
- `news/index.html` – všechny novinky po měsících s filtrem podle ligy
- `news/2026-10-10-ecaa-college-hockey-ranking-2025-2026.html` – článek ECAA o zveřejnění žebříčku
- `assets/styles.css` – vzhled (barvy jako tokeny v `:root`; web je vždy bílý, bez tmavého režimu)
- `assets/ranking.js` – výpočet bodů a vykreslení žebříčku a lídrů
- `assets/news.js` – vykreslení feedu novinek
- `data/ranking-2025-2026.js` – data sezóny (`window.ECAA_RANKING`)
- `data/news.js` – ligy (`window.ECAA_LEAGUES`) a novinky (`window.ECAA_NEWS`)

Cesty jsou relativní (`../`, `../../`), takže web funguje i otevřený lokálně ze souboru.

## Metodika žebříčku (neměnit bez souhlasu ECAA)

Pět kritérií; váhy: `games`, `live`, `avg`, `max` po 22,5 %, `tpm` 10 % (váhy jsou v `assets/ranking.js`, pole `w`):

| Klíč | Kritérium | Body 0–100 |
|---|---|---|
| `games` | zápasy na tým v základní části | hodnota ÷ nejlepší × 100 |
| `live` | kvalita live statistik, škála 0–5 | hodnota ÷ 5 × 100 |
| `avg` | průměrná návštěvnost ligy | log10(1+hodnota) ÷ log10(1+nejlepší) × 100 |
| `max` | max. návštěvnost na 1 utkání ligy | log10(1+hodnota) ÷ log10(1+nejlepší) × 100 |
| `tpm` | týmy na 1 mil. obyvatel (`teams` ÷ `pop`) | hodnota ÷ nejlepší × 100 |

- „Nejlepší“ = nejlepší liga v daném žebříčku. Europe = ligy s `cat: "eu"`, World = všechny ligy včetně evropských.
- `null` = liga údaj nezveřejňuje → 0 bodů. `est` = klíče, které jsou odhad (na webu ≈).
- `tpmTeams` = počet týmů pro kritérium týmy/obyv., pokud se liší od `teams`: všech 5 amerických soutěží má celostátní součet 566 týmů (NCAA D1+D3, ACHA D1–3), U SPORTS celokanadský součet 47 (U SPORTS + ACAC + BCIHL). ACAC a BCIHL počítají vlastní týmy na provincii.
- `pop` = obyvatelé země v milionech; ACAC = Alberta, BCIHL = Britská Kolumbie, EUHL = průměr zúčastněných zemí (součet obyvatel ÷ počet zemí).
- Jen mužské soutěže. Zápasy mimo ligu (např. Varsity u BUIHA) se nezapočítávají.
- Live statistiky: 0 nic, 1 výsledky, 2 střelci a asistence, 3 box score, 4 sezónní statistiky, 5 live play-by-play.
- Název žebříčku je **College Hockey Ranking**. V textech webu se používá „Leader“, ne „Winner“. Sezóna se píše `2025/2026`.

## Novinky (data/news.js)

- **Pravidlo: jeden článek za každou ligu za každý měsíc**, aby byl feed rovnoměrný. Když liga v daném měsíci nic nevydala (letní pauza), měsíc se vynechá.
- Položka: `date` (YYYY-MM-DD), `league` (klíč z `ECAA_LEAGUES`), `title` (anglický titulek), `original` (titulek v originále, nebo `null`), `source`, `url` (skutečná URL článku, nikdy nevymýšlet), `summary` (jedna anglická věta).
- Pole je seřazené od nejnovějšího. Zvýrazněný článek nahoře v levém sloupci má `pinned: true` (vždy jen jeden; nový ročník žebříčku = přesunout `pinned` na nový článek). Články ECAA mají `league: "ecaa"` a `url` relativní ke kořeni webu (`news/…html`).
- Liga ACHA je ve feedu jedna (`acha`) pro všechny tři divize.
- **Z EUHL se žádné zprávy nedávají** (EUHL není v `ECAA_LEAGUES`; v žebříčku zůstává).

## Rekordy návštěvnosti (index.html)

- World: 104 173, Michigan v Michigan State, Michigan Stadium, Ann Arbor, 11. 12. 2010.
- Europe: 10 000, VŠB-TUO v OSU (1:3), ULLH, Mustang Aréna, Ostrava, 8. 10. 2026 (předchozí 9 319, Bitva o Prahu, říjen 2025).

## Nový ročník žebříčku (jednou ročně po sezóně)

1. Zkopírovat `data/ranking-2025-2026.js` → `data/ranking-2026-2027.js`, aktualizovat hodnoty, `season`, `published`, `dataAsOf`, `note`, `src`.
2. Zkopírovat `ranking/2025-2026/` → `ranking/2026-2027/`, upravit cestu k datům, titulky a datum zveřejnění. Starý ročník zůstává jako archiv.
3. `ranking/index.html` přesměrovat na nový ročník, na `index.html` přepnout data a odkazy a v navigaci odkaz „Ranking“.
4. Napsat článek ECAA o zveřejnění (`news/YYYY-MM-DD-ecaa-college-hockey-ranking-RRRR-RRRR.html` podle vzoru) a přidat ho do `data/news.js`.

## Nasazení

GitHub Pages: repozitář ECAA-Hockey/collegehockey, větev `main`, kořen repozitáře, doména collegehockey.eu (soubor `CNAME`). Každý push do `main` se do pár minut zveřejní.

- Po každé změně CSS/JS/dat zvýšit `?v=…` v odkazech v HTML (cache prohlížečů).
