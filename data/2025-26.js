// ECAA University Hockey Ranking – data sezóny 2025/26
// est = hodnoty, které jsou odhad (nízká jistota). null = liga údaj nezveřejňuje (0 bodů).
// pop = počet obyvatel v milionech (země; u ACAC a BCIHL provincie; u EUHL součet zúčastněných zemí).
window.ECAA_RANKING = {
  "season": "2025/26",
  "published": "2026-10-08",
  "dataAsOf": "2026-10-08",
  "leagues": [
    {
      "id": "ullh",
      "name": "ULLH",
      "country": "Česko",
      "cat": "eu",
      "teams": 12,
      "pop": 10.9,
      "games": 26,
      "live": 5,
      "avg": 607,
      "max": 9319,
      "est": [
        "live"
      ],
      "note": "Průměr = 102 000 diváků / 168 zápasů včetně play-in, Final Four a velkých derby; běžné utkání ~200. Maximum: Bitva o Prahu, Sportovní hala Fortuna, říjen 2025 (9 319), rekord ULLH i českého univerzitního sportu. Finále UK Kings – ČVUT Engineers 16. 3. 2026 mělo 9 018.",
      "src": [
        "https://www.eliteprospects.com/league/ullh/2025-2026",
        "https://cc.cz/z-punkoveho-napadu-dvou-studentu-je-stale-vetsi-fenomen-univerzitni-hokej-vyrostl-na-70-milionu/",
        "https://www.ruik.cz/cisla-ktera-berou-dech-navstevnost-univerzitniho-hokeje-drti-historicke-tabulky/",
        "https://www.univerzitnihokej.cz/statistiky"
      ]
    },
    {
      "id": "svk",
      "name": "Univerzitná liga",
      "country": "Slovensko",
      "cat": "eu",
      "teams": 5,
      "pop": 5.4,
      "games": 12,
      "live": 4,
      "avg": 128,
      "max": 451,
      "est": [],
      "note": "První ročník pod SZĽH. Průměr spočten ze zápisů na hockeyslovakia.sk (38 z 39 zápasů vč. play-off). Maximum: UMB Banská Bystrica – Trenčín 10. 2. 2026. Play-by-play existuje, nepotvrzeno, že běží živě.",
      "src": [
        "https://www.hockeyslovakia.sk/sk/stats/results/1174/univerzitna-liga",
        "https://www.hockeyslovakia.sk/sk/stats/matches/1174/univerzitna-liga/match/157028"
      ]
    },
    {
      "id": "euhl",
      "name": "EUHL",
      "country": "Maďarsko, Polsko, Rumunsko",
      "cat": "eu",
      "teams": 5,
      "pop": 65.2,
      "games": 8,
      "live": 4,
      "avg": 157,
      "max": 299,
      "est": [
        "avg",
        "max"
      ],
      "note": "5 týmů: UNI Győr ETO, DEAC II, Sapientia U23, UHT Sabres Oświęcim, Opole United; žádný český ani slovenský tým. Návštěvnost jen ze 3 zápisů, kde je uvedena.",
      "src": [
        "https://euhl.eu/stranka/schedule",
        "https://www.eliteprospects.com/league/euhl/2025-2026",
        "https://euhl.eu/zapas/babf2337-db17-442f-858d-f6fe4d6ea7dc"
      ]
    },
    {
      "id": "fcaa",
      "name": "FCAA",
      "country": "Finsko",
      "cat": "eu",
      "teams": 25,
      "pop": 5.6,
      "games": 4,
      "live": 4,
      "avg": null,
      "max": null,
      "est": [
        "games",
        "live"
      ],
      "note": "25 týmů, 4 zápasy základní části (švýcarský systém) + finálový turnaj. Formát a statistiky ověřeny za 2024/25, data 2025/26 nedostupná. Návštěvnost se nezveřejňuje. Finále HC Lumikot – Parru HT Red, Vantaa, duben 2026.",
      "src": [
        "https://www.gameresultsonline.com/fcaa/fcaa-2024-2025/pages/what-is-fcaa?lang=en_US",
        "https://www.jatkoaika.com/Artikkeli/FCAA-finaalissa-oli-sekavat-tuplajuhlat-%E2%80%93-mestaruusjuhlat-alkoivat-ensi-kerran-jo-toisen-er%C3%A4n-j%C3%A4lkeen/269038"
      ]
    },
    {
      "id": "suhl",
      "name": "SUHL",
      "country": "Švédsko",
      "cat": "eu",
      "teams": 8,
      "pop": 10.6,
      "games": 7,
      "live": 5,
      "avg": 262,
      "max": 620,
      "est": [],
      "note": "Oficiální zápisy svazu na stats.swehockey.se se všemi diváky (8 369 / 32 zápasů). Live stream na SvenskHockey.tv. Maximum: LTH Griparna – Uppsala 7. 2. 2026.",
      "src": [
        "https://stats.swehockey.se/ScheduleAndResults/Overview/19313",
        "https://studenthockey.se/suhl-slutspel-2026/"
      ]
    },
    {
      "id": "buiha",
      "name": "BUIHA",
      "country": "Velká Británie",
      "cat": "eu",
      "teams": 23,
      "pop": 69.3,
      "games": 9,
      "live": 4,
      "avg": null,
      "max": null,
      "est": [
        "teams"
      ],
      "note": "Zápasy = Checking Division 1 (sever 10, jih 8). Počet týmů = 23 klubů asociace. Návštěvnost se nezveřejňuje. Varsity zápasy (Sheffield, Nottingham) nejsou součástí BUIHA, proto se nezapočítávají.",
      "src": [
        "https://www.eliteprospects.com/league/buiha/2025-2026",
        "https://sheffield.ac.uk/news/university-sheffield-chases-historic-win-citys-biggest-student-sporting-event"
      ]
    },
    {
      "id": "ncaa",
      "name": "NCAA Division I",
      "country": "USA",
      "cat": "world",
      "teams": 63,
      "pop": 340.1,
      "games": 34,
      "live": 5,
      "avg": 3200,
      "max": 74575,
      "est": [
        "avg"
      ],
      "note": "Maximum: Penn State – Michigan State pod širým nebem na Beaver Stadium 31. 1. 2026 (74 575). Průměr odhadnut, tabulka USCHO za 2025/26 nebyla dostupná.",
      "src": [
        "https://en.wikipedia.org/wiki/2025%E2%80%9326_NCAA_Division_I_men%27s_ice_hockey_season",
        "https://gopsusports.com/news/2026/01/31/no-5-mens-hockey-falls-to-no-2-michigan-state-5-4-in-ot-thriller-at-beaver-stadium",
        "https://msumavericks.com/news/2026/6/29/general-maverick-attendances-thrive-during-2025-26-athletic-season.aspx"
      ]
    },
    {
      "id": "ncaa3",
      "name": "NCAA Division III",
      "country": "USA",
      "cat": "world",
      "teams": 91,
      "pop": 340.1,
      "games": 25,
      "live": 5,
      "avg": 400,
      "max": 3837,
      "est": [
        "avg"
      ],
      "note": "Průměr podle tabulky USCHO za 2024/25 (409); za 2025/26 nedostupná. Maximum: finále Hamilton – Hobart, Utica 29. 3. 2026.",
      "src": [
        "https://en.wikipedia.org/wiki/2025%E2%80%9326_NCAA_Division_III_men%27s_ice_hockey_season",
        "https://en.wikipedia.org/wiki/2026_NCAA_Division_III_men%27s_ice_hockey_tournament",
        "https://pivotstats.uscho.com/stats/attendance/division-iii-men"
      ]
    },
    {
      "id": "usports",
      "name": "U SPORTS",
      "country": "Kanada",
      "cat": "world",
      "teams": 35,
      "pop": 41.5,
      "games": 28,
      "live": 4,
      "avg": 550,
      "max": 7386,
      "est": [
        "avg"
      ],
      "note": "Průměr odhadnut z 19 box score, váženo podle konferencí. Maximum: finále University Cup UQTR – Saint Mary's, Halifax 22. 3. 2026. Crowchild Classic (13 324) byl dvojzápas žen a mužů.",
      "src": [
        "https://english.usports.ca/sports/mice/2025-26c/releases/GOLD",
        "https://www.mtroyal.ca/AboutMountRoyal/MediaRoom/Stories/2026/02/crowchild-classic-mount-royal-university-attendance-record.htm"
      ]
    },
    {
      "id": "acac",
      "name": "ACAC",
      "country": "Kanada (Alberta)",
      "cat": "world",
      "teams": 7,
      "pop": 5,
      "games": 24,
      "live": 3,
      "avg": 230,
      "max": 375,
      "est": [
        "avg",
        "max"
      ],
      "note": "Většina zápisů uvádí diváky jako 0 (nesleduje se). Průměr z 11 zápasů s údajem, maximum je nejvyšší zaznamenané, ne potvrzený rekord.",
      "src": [
        "https://acac.ab.ca/general/2025-26/releases/20260319MHKYtopscore",
        "https://acac.ab.ca/sports/mice/2025-26/teams/briercrestcollege"
      ]
    },
    {
      "id": "bcihl",
      "name": "BCIHL",
      "country": "Kanada (Brit. Kolumbie)",
      "cat": "world",
      "teams": 5,
      "pop": 5.7,
      "games": 20,
      "live": 4,
      "avg": 160,
      "max": null,
      "est": [
        "live",
        "avg"
      ],
      "note": "Průměr podle trenéra Logan Lake (~160 doma, 2024/25). Maximum nezveřejněno; finále VIU – UVic 6. 3. 2026.",
      "src": [
        "https://www.eliteprospects.com/league/bcihl/2025-2026",
        "https://cfjctoday.com/2025/01/22/beleaguered-logan-lake-miners-digging-out-of-bcihl-pit/"
      ]
    },
    {
      "id": "acha1",
      "name": "ACHA Division 1",
      "country": "USA",
      "cat": "world",
      "teams": 72,
      "pop": 340.1,
      "games": 31,
      "live": 4,
      "avg": 300,
      "max": 1547,
      "est": [
        "teams",
        "avg",
        "max"
      ],
      "note": "ACHA návštěvnost nezveřejňuje; průměr a maximum ze vzorku oficiálních zápisů HockeyTech, kde je údaj vyplněn. Maximum: Northern Illinois – Iowa State, Allstate Arena 6. 12. 2025.",
      "src": [
        "https://www.eliteprospects.com/league/acha/2025-2026",
        "https://lscluster.hockeytech.com/game_reports/official-game-report.php?client_code=acha&game_id=26000&lang_id=1"
      ]
    },
    {
      "id": "acha2",
      "name": "ACHA Division 2",
      "country": "USA",
      "cat": "world",
      "teams": 200,
      "pop": 340.1,
      "games": 25,
      "live": 4,
      "avg": 200,
      "max": 875,
      "est": [
        "teams",
        "games",
        "avg",
        "max"
      ],
      "note": "Odhady ze vzorku zápisů. Skutečné maximum bude nejspíš vyšší (domácí zápasy Georgie, Savannah Hockey Classic), číslo nenalezeno.",
      "src": [
        "https://www.eliteprospects.com/league/acha-ii/2025-2026",
        "https://lscluster.hockeytech.com/game_reports/official-game-report.php?client_code=acha&game_id=28800&lang_id=1"
      ]
    },
    {
      "id": "acha3",
      "name": "ACHA Division 3",
      "country": "USA",
      "cat": "world",
      "teams": 140,
      "pop": 340.1,
      "games": 22,
      "live": 4,
      "avg": 150,
      "max": 873,
      "est": [
        "teams",
        "games",
        "avg",
        "max"
      ],
      "note": "Odhady ze vzorku zápisů. Maximum: Dordt – Creighton 23. 1. 2026, nejvyšší nalezené.",
      "src": [
        "https://www.eliteprospects.com/league/acha-iii/2025-2026",
        "https://lscluster.hockeytech.com/game_reports/official-game-report.php?client_code=acha&game_id=26500&lang_id=1"
      ]
    },
    {
      "id": "jp",
      "name": "JP-UNIV",
      "country": "Japonsko",
      "cat": "world",
      "teams": 8,
      "pop": 123.4,
      "games": 15,
      "live": 4,
      "avg": null,
      "max": null,
      "est": [
        "live"
      ],
      "note": "Kanto University League, Division I-A (8 týmů, 7 + 5 + 3 zápasy). Zápisy mají kolonku diváků, ale prázdnou. Goal-by-goal výsledkový servis, nepotvrzeno, že běží živě.",
      "src": [
        "https://www.eliteprospects.com/league/jp-univ/2025-2026",
        "https://tihf.jp/?ctg=19&cnt=175550485287180600",
        "https://tihf.jp/doc?did=176026069686238900"
      ]
    },
    {
      "id": "kor",
      "name": "Korea-Univ",
      "country": "Jižní Korea",
      "cat": "world",
      "teams": 4,
      "pop": 51.7,
      "games": 6,
      "live": 4,
      "avg": null,
      "max": null,
      "est": [
        "live"
      ],
      "note": "KUSF U-League: Yonsei, Korea University, Kwangwoon, Kyung Hee. Návštěvnost se nezveřejňuje. Derby Korea – Yonsei (19. 9. 2025) není ligový zápas.",
      "src": [
        "https://www.eliteprospects.com/league/korea-college/2025-2026",
        "https://kusf.or.kr/league/league_ranking.html?e_code=33"
      ]
    }
  ]
};
