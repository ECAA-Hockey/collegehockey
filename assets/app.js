// ECAA University Hockey Ranking – výpočet a vykreslení
const CRIT=[
  {k:"games",label:"Zápasy",type:"rel"},
  {k:"live",label:"Live stat.",type:"scale"},
  {k:"avg",label:"Prům. návšt.",type:"log"},
  {k:"max",label:"Max. návšt.",type:"log"},
  {k:"tpm",label:"Týmy / 1 mil.",type:"rel"}
];
const WEIGHT=0.2; // každé z 5 kritérií má stejnou váhu

const SEASON=window.ECAA_RANKING;
let state={season:SEASON.season,leagues:SEASON.leagues};
let cat="eu";
try{const h=location.hash.slice(1);if(h==="svet"||h==="world")cat="world";}catch(e){}

const $=s=>document.querySelector(s);
const num=n=>n==null||n===""||isNaN(n)?null:Number(n);
const nf=new Intl.NumberFormat("cs-CZ");
const nf1=new Intl.NumberFormat("cs-CZ",{maximumFractionDigits:2});
function esc(s){return String(s??"").replace(/[&<>"]/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[m]));}
function val(l,k){if(k==="tpm"){const t=num(l.teams),p=num(l.pop);return t==null||!p?null:t/p;}return num(l[k]);}

function compute(c){
  const ls=c==="world"?state.leagues.slice():state.leagues.filter(l=>l.cat===c);
  const best={};CRIT.forEach(cr=>{best[cr.k]=Math.max(0,...ls.map(l=>val(l,cr.k)||0));});
  return ls.map(l=>{
    const s={};let tot=0;
    CRIT.forEach(cr=>{
      const v=val(l,cr.k);let p=0;
      if(v!=null)p=cr.type==="scale"?Math.min(5,Math.max(0,v))/5*100
        :cr.type==="log"?(best[cr.k]>0?Math.log10(1+v)/Math.log10(1+best[cr.k])*100:0)
        :(best[cr.k]>0?v/best[cr.k]*100:0);
      s[cr.k]=p;tot+=p*WEIGHT;
    });
    return {...l,s,tot};
  }).sort((a,b)=>b.tot-a.tot);
}
function raw(l,k){
  const v=val(l,k);if(v==null)return null;
  const e=(l.est||[]).includes(k)||(k==="tpm"&&(l.est||[]).includes("teams"))?'<span class="est">≈</span>':"";
  if(k==="live")return e+v+" / 5";
  if(k==="tpm")return e+nf1.format(v)+` <span title="${l.teams} týmů, ${nf1.format(l.pop)} mil. obyvatel">(${l.teams})</span>`;
  return e+nf.format(v);
}
function renderRank(){
  const rows=compute(cat);
  $("#rankTitle").textContent=cat==="eu"?"Evropa":"Svět";
  let h="<thead><tr><th>#</th><th>Soutěž</th><th>Skóre</th>"+CRIT.map(c=>`<th style="text-align:right">${c.label}</th>`).join("")+"</tr></thead><tbody>";
  let prev=null,rank=0;
  rows.forEach((r,i)=>{
    const t=Math.round(r.tot*10)/10;if(t!==prev){rank=i+1;prev=t;}
    h+=`<tr><td class="rank ${rank<=3?"r"+rank:""}">${rank}</td>
    <td><div class="lg">${esc(r.name)}</div><div class="ct">${esc(r.country)}</div></td>
    <td class="total"><div class="tot-row"><span class="tot-num">${t.toFixed(1)}</span><span class="bar"><i style="width:${t}%"></i></span></div></td>`+
    CRIT.map(c=>{const rv=raw(r,c.k);return `<td class="sub">${rv==null?'<span class="miss">0</span>':Math.round(r.s[c.k])}<small>${rv==null?"nezveřejněno":rv}</small></td>`}).join("")+"</tr>";
  });
  $("#rankTable").innerHTML=h+"</tbody>";
  document.querySelectorAll(".tab").forEach(t=>t.setAttribute("aria-selected",t.dataset.cat===cat));
  $("#seasonLabel").textContent=state.season;
}
function renderSrc(){
  $("#srcList").innerHTML=state.leagues.map(l=>`<details class="src"><summary>${esc(l.name)} <span>${esc(l.country)}</span></summary>
  <p>${esc(l.note||"")}</p><ul>${(l.src||[]).map(u=>`<li><a href="${esc(u)}" target="_blank" rel="noopener">${esc(u.replace(/^https?:\/\/(www\.)?/,"").slice(0,70))}</a></li>`).join("")}</ul></details>`).join("");
}
document.querySelectorAll(".tab").forEach(t=>t.addEventListener("click",()=>{cat=t.dataset.cat;renderRank();}));
function renderWinners(){const nf1d=new Intl.NumberFormat("cs-CZ",{minimumFractionDigits:1,maximumFractionDigits:1});
  const e=compute("eu")[0],w=compute("world")[0];
  $("#winEu").textContent=e.name;$("#winEuS").innerHTML=esc(e.country)+" · <b>"+nf1d.format(Math.round(e.tot*10)/10)+"</b> bodů";
  $("#winW").textContent=w.name;$("#winWS").innerHTML=esc(w.country)+" · <b>"+nf1d.format(Math.round(w.tot*10)/10)+"</b> bodů";}
renderWinners();renderRank();renderSrc();
