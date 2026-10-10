// ECAA news feed rendering. Container: <div id="feed" data-limit="9" data-base="" data-group="month"></div>
(function () {
  const NEWS = window.ECAA_NEWS || [], LG = window.ECAA_LEAGUES || {};
  const box = document.getElementById("feed"); if (!box) return;
  const limit = Number(box.dataset.limit || 0);
  const base = box.dataset.base || "";
  const group = box.dataset.group === "month";
  const chipsBox = document.getElementById("chips");
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m]));
  const dfmt = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
  const mfmt = new Intl.DateTimeFormat("en-GB", { month: "long", year: "numeric", timeZone: "UTC" });
  const d = (s) => new Date(s + "T00:00:00Z");
  let filter = "all";

  function card(n) {
    const internal = n.league === "ecaa";
    const href = internal ? base + n.url : n.url;
    const ext = internal ? "" : ' target="_blank" rel="noopener"';
    const lg = LG[n.league] || { name: n.league, country: "" };
    return `<article class="item${internal ? " ecaa" : ""}">
      <div class="meta"><span class="tag">${esc(lg.name)}</span><time datetime="${n.date}">${dfmt.format(d(n.date))}</time></div>
      <h3><a href="${esc(href)}"${ext}>${esc(n.title)}</a></h3>
      ${n.original ? `<p class="orig">${esc(n.original)}</p>` : ""}
      <p>${esc(n.summary)}</p>
      <div class="srcname">${internal ? "ECAA" : esc(n.source) + " ↗"}</div>
    </article>`;
  }

  function render() {
    let items = NEWS.filter((n) => filter === "all" || n.league === filter);
    if (limit) items = items.slice(0, limit);
    if (!items.length) { box.innerHTML = '<p class="empty">No articles for this league yet.</p>'; return; }
    if (!group) { box.className = "feed"; box.innerHTML = items.map(card).join(""); return; }
    box.className = "";
    const byMonth = {};
    items.forEach((n) => { const k = n.date.slice(0, 7); (byMonth[k] = byMonth[k] || []).push(n); });
    box.innerHTML = Object.keys(byMonth).sort().reverse().map((k) =>
      `<h3 class="month">${mfmt.format(d(k + "-01"))}</h3><div class="feed">${byMonth[k].map(card).join("")}</div>`).join("");
  }

  if (chipsBox) {
    const ids = ["all"].concat(Object.keys(LG).filter((id) => NEWS.some((n) => n.league === id)));
    chipsBox.innerHTML = ids.map((id) => `<button class="chip" type="button" data-id="${id}" aria-pressed="${id === "all"}">${id === "all" ? "All" : esc(LG[id].name)}</button>`).join("");
    chipsBox.addEventListener("click", (e) => {
      const b = e.target.closest(".chip"); if (!b) return;
      filter = b.dataset.id;
      chipsBox.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", String(c === b)));
      render();
    });
  }
  render();
})();
