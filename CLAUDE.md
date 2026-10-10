# ECAA University Hockey Ranking

Statický web (HTML, CSS, vanilla JS, bez buildu a bez závislostí) s ročním žebříčkem univerzitních hokejových soutěží mužů, který vydává ECAA. Jazyk webu je čeština.

## Struktura

- `index.html` – stránka (hlavička, vítězové, žebříček, metodika, zdroje)
- `assets/styles.css` – vzhled, barvy jsou tokeny v `:root` (světlý i tmavý režim)
- `assets/app.js` – výpočet bodů a vykreslení
- `data/2025-26.js` – data sezóny, nastavuje `window.ECAA_RANKING`

Stránka funguje i otevřená lokálně ze souboru (data jsou v `.js`, ne v `.json`, aby nebyl potřeba server).

## Metodika (neměnit bez souhlasu ECAA)

Pět kritérií, každé 20 %:

| Klíč | Kritérium | Výpočet bodů 0–100 |
|---|---|---|
| `games` | zápasy na tým v základní části | hodnota ÷ nejlepší × 100 |
| `live` | kvalita live statistik, škála 0–5 | hodnota ÷ 5 × 100 |
| `avg` | průměrná návštěvnost ligy | log10(1+hodnota) ÷ log10(1+nejlepší) × 100 |
| `max` | max. návštěvnost na 1 utkání | log10(1+hodnota) ÷ log10(1+nejlepší) × 100 |
| `tpm` | týmy na 1 mil. obyvatel (`teams` ÷ `pop`) | hodnota ÷ nejlepší × 100 |

- „Nejlepší“ = nejlepší liga v daném žebříčku. Evropa = ligy s `cat: "eu"`, Svět = všechny ligy včetně evropských.
- `null` = liga údaj nezveřejňuje → 0 bodů v kritériu.
- `est` = seznam klíčů, které jsou odhad; na webu se označí ≈.
- `pop` = obyvatelé země v milionech; u provinčních lig (ACAC – Alberta, BCIHL – Britská Kolumbie) obyvatelé provincie; u EUHL součet zúčastněných zemí.
- Jen mužské soutěže. Varsity zápasy mimo ligu (např. Sheffield Varsity u BUIHA) se nezapočítávají.

Live statistiky: 0 nic, 1 jen výsledky, 2 střelci a asistence, 3 kompletní box score, 4 sezónní hráčské a týmové statistiky, 5 live play-by-play během zápasu.

## Nová sezóna

1. Zkopírovat `data/2025-26.js` na `data/2026-27.js` a aktualizovat hodnoty, `season`, `published`, `dataAsOf`, poznámky (`note`) a zdroje (`src`).
2. V `index.html` přepnout `<script src="data/…">` na nový soubor a upravit `<title>`, meta popis a rok v nadpisu (nadpis se jinak bere z `season`).
3. Starý ročník ponechat jako archiv (případně `archiv/2025-26/`).

## Nasazení

Web běží na GitHub Pages (repozitář ECAA-Hockey/collegehockey, větev `main`, kořen repozitáře) na doméně collegehockey.eu (soubor `CNAME`). Každý push do `main` se do pár minut zveřejní. Až bude mít ECAA vlastní úvodní stránku, přesunout žebříček do `ranking/` a odkazy upravit (cesty jsou relativní).
