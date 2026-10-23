// Shared sections sidebar. To add a section: add one line to SECTIONS.
(function(){
const SECTIONS=[
  {dir:'section-1',num:'Section 1',title:'Section 1',icon:'📘'},
  {dir:'section-2',num:'Section 2',title:'Random Variables',icon:'🎲'}
];
// Useful links, shown above the sections. To add a link: add one line here.
const LINKS=[
  {url:'https://probabilitycoders.stanford.edu/spr26',icon:'📖',title:'CS109 course reader',note:'Stanford CS109. Not PAI-specific: more in-depth, covers more material.'},
  {url:'https://www.youtube.com/playlist?list=PLoROMvodv4rOpr_A7B9SriE_iZmkanvUg',icon:'🎥',title:'CS109 videos on YouTube',note:'Stanford CS109 lectures (2022).'},
  {url:'https://www.youtube.com/watch?v=sQqniayndb4&list=PLMrJAkhIeNNR3sNYvfgiKgcStwuPSts9V',icon:'🚀',title:'Probability by Steve Brunton',note:'Advanced: YouTube playlist.'}
];
const root=new URL('../',document.currentScript.src);
const here=location.pathname.split('/').filter(Boolean);

const css=`
#sbBtn{position:fixed;top:14px;left:14px;z-index:1001;font:600 14px "Segoe UI",system-ui,sans-serif;color:#fff;border:1px solid #3b3f7a;border-radius:22px;padding:8px 14px;cursor:pointer;box-shadow:0 4px 14px rgba(11,16,48,.3);background:linear-gradient(160deg,#0b1030,#1b1f4b 55%,#2a1846);margin:0}
#sbBtn:hover{filter:brightness(1.2)}
#sbShade{position:fixed;inset:0;background:rgba(11,16,48,.35);z-index:1002;opacity:0;pointer-events:none;transition:opacity .25s}
#sbPanel{position:fixed;top:0;left:0;bottom:0;width:min(290px,85vw);z-index:1003;background:#fff;box-shadow:4px 0 24px rgba(11,16,48,.25);transform:translateX(-105%);transition:transform .3s ease;display:flex;flex-direction:column;font-family:"Segoe UI",system-ui,sans-serif}
body.sb-open #sbShade{opacity:1;pointer-events:auto}
body.sb-open #sbPanel{transform:none}
#sbHead{position:relative;color:#fff;padding:22px 18px 18px;font-weight:800;font-size:18px;text-shadow:0 0 8px rgba(255,255,255,.5);
  background:radial-gradient(1.5px 1.5px at 12% 30%,#fff,transparent),radial-gradient(1px 1px at 30% 75%,#fff,transparent),radial-gradient(2px 2px at 55% 25%,#ffeaa7,transparent),radial-gradient(1px 1px at 72% 70%,#cfd8ff,transparent),radial-gradient(1.5px 1.5px at 88% 35%,#fff,transparent),radial-gradient(ellipse at 80% 130%,rgba(142,68,173,.6),transparent 60%),linear-gradient(160deg,#0b1030,#1b1f4b 55%,#2a1846)}
#sbHead small{display:block;font-weight:400;font-size:12.5px;opacity:.8;text-shadow:none;margin-top:2px}
#sbClose{position:absolute;top:10px;right:10px;background:none;border:0;color:#fff;font-size:20px;cursor:pointer;padding:4px 8px;margin:0}
#sbList{padding:12px;overflow-y:auto}
#sbList a{display:flex;gap:10px;align-items:center;text-decoration:none;color:#22313f;border:2px solid transparent;border-radius:12px;padding:10px 12px;margin-bottom:6px;transition:background .15s}
#sbList a:hover{background:#eef3fa}
#sbList h4{margin:8px 4px 6px;font-size:11.5px;font-weight:700;letter-spacing:.6px;text-transform:uppercase;color:#778}
#sbList a.lnk{align-items:flex-start;background:#f5f8fc;border-color:#e1e9f3}
#sbList a.lnk:hover{background:#eaf1fa}
#sbList .sbS{display:block;font-size:12px;color:#667;line-height:1.4;margin-top:2px}
#sbList hr{border:0;border-top:1px solid #e1e9f3;margin:10px 4px}
#sbList a.cur{border-color:#b8860b;background:#fbf5e6}
#sbList .sbI{font-size:22px}
#sbList .sbN{display:block;font-size:11.5px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:#8a6d1f}
#sbList .sbT{display:block;font-weight:600;font-size:14.5px}
@media (max-width:700px){body{padding-top:44px}}
`;
const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);

const btn=document.createElement('button');btn.id='sbBtn';btn.type='button';btn.textContent='☰ Sections';
const shade=document.createElement('div');shade.id='sbShade';
const panel=document.createElement('nav');panel.id='sbPanel';panel.setAttribute('aria-label','Sections');
panel.innerHTML='<div id="sbHead">✨ Probability for AI ✨<small>Pick a section</small><button id="sbClose" type="button" aria-label="Close">✕</button></div><div id="sbList"><h4>🔗 Useful links</h4>'+
  LINKS.map(l=>'<a class="lnk" href="'+l.url+'" target="_blank" rel="noopener"><span class="sbI">'+l.icon+'</span><span><span class="sbT">'+l.title+' ↗</span><span class="sbS">'+l.note+'</span></span></a>').join('')+
  '<hr><h4>📚 Sections</h4>'+
  SECTIONS.map(s=>'<a href="'+new URL(s.dir+'/index.html',root).href+'"'+(here.includes(s.dir)?' class="cur"':'')+'><span class="sbI">'+s.icon+'</span><span><span class="sbN">'+s.num+'</span><span class="sbT">'+s.title+'</span></span></a>').join('')+'</div>';
document.body.append(btn,shade,panel);

const toggle=v=>document.body.classList.toggle('sb-open',v);
btn.onclick=()=>toggle(true);
shade.onclick=()=>toggle(false);
panel.querySelector('#sbClose').onclick=()=>toggle(false);
document.addEventListener('keydown',e=>{if(e.key==='Escape')toggle(false);});
})();
