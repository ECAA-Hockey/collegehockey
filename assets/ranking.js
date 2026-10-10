// ECAA College Hockey Ranking – scoring and rendering.
// Methodology (see CLAUDE.md): 5 criteria scored 0–100 within each ranking; weights 22.5 % ×4, teams per million 10 %.
(function () {
  const R = window.ECAA_RANKING;
  if (!R) return;
  const CRIT = [
    { k: "games", label: "Games", type: "rel", w: 0.225 },
    { k: "live", label: "Live stats", type: "scale", w: 0.225 },
    { k: "avg", label: "Avg. attendance", type: "log", w: 0.225 },
    { k: "max", label: "Max. attendance", type: "log", w: 0.225 },
    { k: "tpm", label: "Teams / 1M pop.", type: "rel", w: 0.10 }
  ];
  const $ = (s) => document.querySelector(s);
  const num = (n) => (n == null || n === "" || isNaN(n) ? null : Number(n));
  const nf = new Intl.NumberFormat("en-GB");
  const nf1 = new Intl.NumberFormat("en-GB", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  const nf2 = new Intl.NumberFormat("en-GB", { maximumFractionDigits: 2 });
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m]));
  const val = (l, k) => {
    if (k === "tpm") { const t = num(l.tpmTeams ?? l.teams), p = num(l.pop); return t == null || !p ? null : t / p; }
    return num(l[k]);
  };

  function compute(cat) {
    const ls = cat === "world" ? R.leagues.slice() : R.leagues.filter((l) => l.cat === cat);
    const best = {};
    CRIT.forEach((c) => { best[c.k] = Math.max(0, ...ls.map((l) => val(l, c.k) || 0)); });
    return ls.map((l) => {
      const s = {}; let tot = 0;
      CRIT.forEach((c) => {
        const v = val(l, c.k); let p = 0;
        if (v != null) {
          if (c.type === "scale") p = Math.min(5, Math.max(0, v)) / 5 * 100;
          else if (c.type === "log") p = best[c.k] > 0 ? Math.log10(1 + v) / Math.log10(1 + best[c.k]) * 100 : 0;
          else p = best[c.k] > 0 ? v / best[c.k] * 100 : 0;
        }
        s[c.k] = p; tot += p * c.w;
      });
      return Object.assign({}, l, { s, tot: Math.round(tot * 10) / 10 });
    }).sort((a, b) => b.tot - a.tot);
  }

  function raw(l, k) {
    const v = val(l, k); if (v == null) return null;
    const isEst = (l.est || []).includes(k) || (k === "tpm" && (l.est || []).includes("teams"));
    const e = isEst ? '<span class="est" title="Estimate">≈</span>' : "";
    if (k === "live") return e + v + " / 5";
    if (k === "tpm") return e + nf2.format(v) + ` <span title="${l.tpmTeams ?? l.teams} teams, ${nf2.format(l.pop)} M population">(${l.tpmTeams ?? l.teams})</span>`;
    return e + nf.format(v);
  }

  // Leaders (home page and ranking page)
  function renderLeaders() {
    [["eu", "#leaderEu"], ["world", "#leaderWorld"]].forEach(([cat, sel]) => {
      const box = $(sel); if (!box) return;
      const rows = compute(cat);
      const top = rows[0];
      box.querySelector(".wn").textContent = top.name;
      box.querySelector(".ws").innerHTML = esc(top.country) + " · <b>" + nf1.format(top.tot) + "</b> points";
      const ol = box.querySelector("ol");
      if (ol) ol.innerHTML = rows.slice(1, 3).map((r) => `<li><b>${esc(r.name)}</b> · ${nf1.format(r.tot)}</li>`).join("");
    });
  }

  // Full table (ranking page)
  let cat = "eu";
  function renderTable() {
    const table = $("#rankTable"); if (!table) return;
    const rows = compute(cat);
    $("#rankTitle").textContent = cat === "eu" ? "Europe" : "World";
    let h = "<thead><tr><th>#</th><th>Competition</th><th>Score</th>" + CRIT.map((c) => `<th style="text-align:right">${c.label}</th>`).join("") + "</tr></thead><tbody>";
    let prev = null, rank = 0;
    rows.forEach((r, i) => {
      if (r.tot !== prev) { rank = i + 1; prev = r.tot; }
      h += `<tr><td class="rank ${rank <= 3 ? "r" + rank : ""}">${rank}</td>
      <td><div class="lg">${esc(r.name)}</div><div class="ct">${esc(r.country)}</div></td>
      <td class="total"><div class="tot-row"><span class="tot-num">${nf1.format(r.tot)}</span><span class="bar"><i style="width:${r.tot}%"></i></span></div></td>` +
        CRIT.map((c) => { const rv = raw(r, c.k); return `<td class="sub">${rv == null ? '<span class="miss">0</span>' : Math.round(r.s[c.k])}<small>${rv == null ? "not published" : rv}</small></td>`; }).join("") + "</tr>";
    });
    table.innerHTML = h + "</tbody>";
    document.querySelectorAll(".tab").forEach((t) => t.setAttribute("aria-selected", String(t.dataset.cat === cat)));
  }

  function renderSources() {
    const box = $("#srcList"); if (!box) return;
    box.innerHTML = R.leagues.map((l) => `<details class="src"><summary>${esc(l.name)} <span>${esc(l.country)}</span></summary>
      <p>${esc(l.note || "")}</p><ul>${(l.src || []).map((u) => `<li><a href="${esc(u)}" target="_blank" rel="noopener">${esc(u.replace(/^https?:\/\/(www\.)?/, "").slice(0, 70))}</a></li>`).join("")}</ul></details>`).join("");
  }

  document.querySelectorAll(".tab").forEach((t) => t.addEventListener("click", () => { cat = t.dataset.cat; renderTable(); }));
  try { if (location.hash === "#world") cat = "world"; } catch (e) {}
  renderLeaders(); renderTable(); renderSources();
  window.ECAA_compute = compute;
})();
