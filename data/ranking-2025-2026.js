// ECAA College Hockey Ranking – season 2025/2026 data.
// est  = keys whose value is an estimate (marked ≈ on the site).
// null = the league does not publish the figure (0 points for that criterion).
// tpmTeams = teams counted for teams-per-million when it differs from the league's own teams (USA: all 566 US college teams in NCAA D1, D3 and ACHA D1–D3; U SPORTS: all 47 Canadian college teams).
// pop  = population in millions (country; ACAC and BCIHL use their province; EUHL the average of its participating countries).
window.ECAA_RANKING = {
  season: "2025/2026",
  published: "2026-10-10",
  dataAsOf: "2026-10-10",
  leagues: [
    {
      id: "ullh", name: "ULLH", country: "Czech Republic", cat: "eu",
      teams: 12, pop: 10.9, games: 26, live: 5, avg: 607, max: 9319, est: ["live"],
      note: "Average = 102,000 spectators over 168 games, including play-in, Final Four and showcase derbies; a regular game draws about 200. Maximum: Battle of Prague, Sportovní hala Fortuna, Prague, October 2025 (9,319). The final UK Kings v ČVUT Engineers on 16 March 2026 drew 9,018.",
      src: ["https://www.eliteprospects.com/league/ullh/2025-2026", "https://cc.cz/z-punkoveho-napadu-dvou-studentu-je-stale-vetsi-fenomen-univerzitni-hokej-vyrostl-na-70-milionu/", "https://www.ruik.cz/cisla-ktera-berou-dech-navstevnost-univerzitniho-hokeje-drti-historicke-tabulky/", "https://www.univerzitnihokej.cz/statistiky"]
    },
    {
      id: "svk", name: "Univerzitná liga", country: "Slovakia", cat: "eu",
      teams: 5, pop: 5.4, games: 12, live: 4, avg: 150, max: 1232, est: [],
      note: "First season, run by the Slovak Ice Hockey Federation. Average of 150 and season record of 1,232 spectators as reported by the league. Play-by-play exists on match pages; not confirmed to update live.",
      src: ["https://www.hockeyslovakia.sk/sk/stats/results/1174/univerzitna-liga"]
    },
    {
      id: "euhl", name: "EUHL", country: "Hungary, Poland, Romania", cat: "eu",
      teams: 5, pop: 21.7, games: 8, live: 4, avg: 157, max: 299, est: ["avg", "max"],
      note: "Five teams: UNI Győr ETO, DEAC II, Sapientia U23, UHT Sabres Oświęcim, Opole United; no Czech or Slovak team in 2025/2026. Population = average of the three participating countries (Poland, Romania, Hungary: 65.2 M ÷ 3 = 21.7 M). Attendance based on the only three box scores that list it.",
      src: ["https://euhl.eu/stranka/schedule", "https://www.eliteprospects.com/league/euhl/2025-2026", "https://euhl.eu/zapas/babf2337-db17-442f-858d-f6fe4d6ea7dc"]
    },
    {
      id: "fcaa", name: "FCAA", country: "Finland", cat: "eu",
      teams: 25, pop: 5.6, games: 7, live: 5, avg: 577, max: 2031, est: [],
      note: "25 teams in the main (open) series; the separate women's series is not counted. 7 regular-season games per team before the final playoff tournament; live statistics 5/5; average attendance 577 (all as reported by ECAA, 10 October 2026). Season record: 2,031 spectators at the Parru Fights Cancer games, Kisapuisto ice hall, Lappeenranta, autumn 2025 (two games on one bill, as reported by Jatkoaika). Final: HC Lumikot v Parru HT Red, Vantaa, April 2026.",
      src: ["https://www.gameresultsonline.com/fcaa/fcaa-2024-2025/pages/what-is-fcaa?lang=en_US", "https://www.jatkoaika.com/Artikkeli/FCAAn-kolmas-kausi-alkoi-%E2%88%92-yleis%C3%B6enn%C3%A4tys-rikki-Lappeenrannassa/266898", "https://www.jatkoaika.com/Artikkeli/FCAA-finaalissa-oli-sekavat-tuplajuhlat-%E2%80%93-mestaruusjuhlat-alkoivat-ensi-kerran-jo-toisen-er%C3%A4n-j%C3%A4lkeen/269038"]
    },
    {
      id: "suhl", name: "SUHL", country: "Sweden", cat: "eu",
      teams: 8, pop: 10.6, games: 7, live: 5, avg: 262, max: 642, est: [],
      note: "Official federation game reports on stats.swehockey.se list attendance for every game. Live streams on SvenskHockey.tv. Season record of 642 spectators as reported by the league.",
      src: ["https://stats.swehockey.se/ScheduleAndResults/Overview/19313", "https://studenthockey.se/suhl-slutspel-2026/"]
    },
    {
      id: "buiha", name: "BUIHA", country: "United Kingdom", cat: "eu",
      teams: 23, pop: 69.3, games: 9, live: 4, avg: null, max: null, est: ["teams"],
      note: "Games = Checking Division 1 (North 10, South 8). Teams = the association's 23 clubs. Attendance is not published: BUIHA's own game centre records box scores, shots, events and MVPs but no crowd figures, and its news posts give none. Varsity matches (Sheffield, Nottingham) are not part of BUIHA and are not counted.",
      src: ["https://www.eliteprospects.com/league/buiha/2025-2026"]
    },
    {
      id: "ncaa", name: "NCAA Division I", country: "USA", cat: "world",
      teams: 63, pop: 340.1, tpmTeams: 566, games: 34, live: 5, avg: 3571, max: 74575, est: ["teams"],
      note: "Maximum: Penn State v Michigan State, outdoors at Beaver Stadium, 31 January 2026 (74,575). Average: 3,571 (3,889,143 spectators over 1,089 home games of 63 teams, USCHO attendance table 2025/2026).",
      src: ["https://en.wikipedia.org/wiki/2025%E2%80%9326_NCAA_Division_I_men%27s_ice_hockey_season", "https://gopsusports.com/news/2026/01/31/no-5-mens-hockey-falls-to-no-2-michigan-state-5-4-in-ot-thriller-at-beaver-stadium", "https://www.uscho.com/stats/attendance/division-i-men/2025-2026"]
    },
    {
      id: "ncaa3", name: "NCAA Division III", country: "USA", cat: "world",
      teams: 91, pop: 340.1, tpmTeams: 566, games: 25, live: 5, avg: 395, max: 3837, est: ["teams"],
      note: "Average: 395 (457,451 spectators over 1,159 home games of 91 teams, USCHO attendance table 2025/2026; Utica leads with 3,016 per game). Maximum: national final Hamilton v Hobart, Utica, 29 March 2026.",
      src: ["https://en.wikipedia.org/wiki/2025%E2%80%9326_NCAA_Division_III_men%27s_ice_hockey_season", "https://en.wikipedia.org/wiki/2026_NCAA_Division_III_men%27s_ice_hockey_tournament", "https://www.uscho.com/stats/attendance/division-iii-men/2025-2026"]
    },
    {
      id: "usports", name: "U SPORTS", country: "Canada", cat: "world",
      teams: 35, pop: 41.5, tpmTeams: 47, games: 28, live: 4, avg: 550, max: 7386, est: ["avg"],
      note: "Average estimated from 19 box scores, weighted by conference. Maximum: University Cup final UQTR v Saint Mary's, Halifax, 22 March 2026. The Crowchild Classic (13,324) was a women's and men's doubleheader.",
      src: ["https://english.usports.ca/sports/mice/2025-26c/releases/GOLD", "https://www.mtroyal.ca/AboutMountRoyal/MediaRoom/Stories/2026/02/crowchild-classic-mount-royal-university-attendance-record.htm"]
    },
    {
      id: "acac", name: "ACAC", country: "Canada (Alberta)", cat: "world",
      teams: 7, pop: 5.0, games: 24, live: 3, avg: 230, max: 375, est: ["avg", "max"],
      note: "Most game logs record attendance as 0 (not tracked). Average from the 11 games with a figure; the maximum is the highest recorded, not a confirmed record.",
      src: ["https://acac.ab.ca/general/2025-26/releases/20260319MHKYtopscore", "https://acac.ab.ca/sports/mice/2025-26/teams/briercrestcollege"]
    },
    {
      id: "bcihl", name: "BCIHL", country: "Canada (British Columbia)", cat: "world",
      teams: 5, pop: 5.7, games: 20, live: 4, avg: 160, max: 407, est: ["live", "avg", "max"],
      note: "Average per the Logan Lake coach (about 160 at home, 2024/2025). Maximum: 407 spectators, SFU v UVic (5–1), Queen's Park Arena, New Westminster, 8 November 2025, the only published figure of the season (highest documented, not a confirmed record). The final, VIU v UVic at Queen's Park Arena in March 2026, has no published attendance.",
      src: ["https://www.eliteprospects.com/league/bcihl/2025-2026", "https://cfjctoday.com/2025/01/22/beleaguered-logan-lake-miners-digging-out-of-bcihl-pit/", "https://sfuhockey.com/news/red-leafs-win-x2-postgame-report---sfu-tops-uaf-ncaa-d1-bcihl-team-tops-undefeated-uvic-at-queens-park-arena"]
    },
    {
      id: "acha1", name: "ACHA Division 1", country: "USA", cat: "world",
      teams: 72, pop: 340.1, tpmTeams: 566, games: 31, live: 4, avg: 453, max: 6302, est: ["teams", "avg"],
      note: "Average = mean of the 423 MD1-v-MD1 games with attendance entered in the official ACHA/HockeyTech data (median 300); most games leave it blank. Maximum: 6,302, NC State 7–0 North Carolina (Governor's Cup), Lenovo Center, Raleigh, 23 November 2025, per the official game report. Other big crowds: more than 4,000 at Liberty v Minot State (press figure), 2,227 at NC State v Alabama outdoors at Truist Field, Charlotte.",
      src: ["https://www.eliteprospects.com/league/acha/2025-2026", "https://lscluster.hockeytech.com/game_reports/official-game-report.php?client_code=acha&game_id=30963&lang_id=1"]
    },
    {
      id: "acha2", name: "ACHA Division 2", country: "USA", cat: "world",
      teams: 200, pop: 340.1, tpmTeams: 566, games: 25, live: 4, avg: 335, max: 6588, est: ["teams", "games", "avg"],
      note: "Average = mean of the 528 MD2-v-MD2 games with attendance entered in the official ACHA/HockeyTech data (median 174); most games leave it blank. Maximum: 6,588, Michigan State v Michigan Tech (both MD2), Munn Ice Arena, East Lansing, 26 September 2025, per the official game report (the figure is close to the arena's capacity). Other big crowds per game reports: 6,285 Michigan State v Indiana Tech (Munn), 2,200 Utah State v Weber State (Eccles Ice Center), 1,700 Montana v Montana State.",
      src: ["https://www.eliteprospects.com/league/acha-ii/2025-2026", "https://lscluster.hockeytech.com/game_reports/official-game-report.php?client_code=acha&game_id=27977&lang_id=1", "https://lscluster.hockeytech.com/game_reports/official-game-report.php?client_code=acha&game_id=29515&lang_id=1"]
    },
    {
      id: "acha3", name: "ACHA Division 3", country: "USA", cat: "world",
      teams: 140, pop: 340.1, tpmTeams: 566, games: 22, live: 4, avg: 225, max: 1308, est: ["teams", "games", "avg"],
      note: "Average = mean of the 325 MD3-v-MD3 games with attendance entered in the official ACHA/HockeyTech data (median 150); most games leave it blank. Maximum: 1,308, Colorado Mesa v UCCS, River City Sportsplex, Grand Junction, 17 October 2025, per the official game report.",
      src: ["https://www.eliteprospects.com/league/acha-iii/2025-2026", "https://lscluster.hockeytech.com/game_reports/official-game-report.php?client_code=acha&game_id=27633&lang_id=1"]
    },
    {
      id: "jp", name: "JP-UNIV", country: "Japan", cat: "world",
      teams: 8, pop: 123.4, games: 15, live: 4, avg: null, max: null, est: ["live"],
      note: "Kanto University League, Division I-A (8 teams; 7 + 5 + 3 games). Score sheets have an attendance field but leave it blank (checked for 2025/2026, including the final-league games); no crowd figure is published elsewhere. Goal-by-goal results service; not confirmed to update live.",
      src: ["https://www.eliteprospects.com/league/jp-univ/2025-2026", "https://tihf.jp/?ctg=19&cnt=175550485287180600", "https://tihf.jp/doc?did=176026069686238900"]
    },
    {
      id: "kor", name: "Korea-Univ", country: "South Korea", cat: "world",
      teams: 4, pop: 51.7, games: 6, live: 4, avg: null, max: null, est: ["live"],
      note: "KUSF U-League: Yonsei, Korea University, Kwangwoon, Kyung Hee. Attendance is not published, including the final Yonsei v Korea University (4–2), Mokdong Ice Rink, 14 November 2025. The Korea–Yonsei rivalry game (19 September 2025) is not a league game.",
      src: ["https://www.eliteprospects.com/league/korea-college/2025-2026", "https://kusf.or.kr/league/league_ranking.html?e_code=33"]
    }
  ]
};
