const $=(s,e=document)=>e.querySelector(s),$$=(s,e=document)=>[...e.querySelectorAll(s)],RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
const P={bolt:'<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',shield:'<path d="M12 3 4 6v6c0 5 3.500 8 8 9 4.500-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>',cloud:'<path d="M7 18a4 4 0 0 1-.5-8A6 6 0 0 1 18 9a4.500 4.500 0 0 1-.5 9z"/>',compass:'<circle cx="12" cy="12" r="9"/><path d="m15.500 8.500-2 5-5 2 2-5z"/>',pulse:'<path d="M3 12h4l3-8 4 16 3-8h4"/>',mon:'<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',team:'<circle cx="12" cy="8" r="3"/><circle cx="5" cy="10" r="2"/><circle cx="19" cy="10" r="2"/><path d="M6 20c0-4 2.500-6 6-6s6 2 6 6"/>'};
const ic=n=>`<div class="ic"><svg viewBox="0 0 24 24">${P[n]}</svg></div>`;
const F=[['bolt','Fast response','Get timely help when your team needs IT support.'],['shield','Secure systems','Keep your devices, data, and people better protected.'],['cloud','Cloud ready','Work securely and flexibly from any location.'],['compass','Expert guidance','Make confident technology decisions with clear advice.'],['pulse','Proactive monitoring','Identify potential issues before they disrupt your work.']];
$('#feats').innerHTML=F.map((f,i)=>`<div class="ft-r r${i%2?' rev':''}">${ic(f[0])}<div><h3>${f[1]}</h3><p>${f[2]}</p></div></div>`).join('');
$('#i3').innerHTML=[['Keep systems reliable','Proactive support helps your technology run smoothly every day.'],['Protect business data','Practical security measures help safeguard your systems and information.'],['Plan technology with confidence','Clear advice helps you make better decisions as your business grows.']].map((t,i)=>`<div class="card r"><div class="n">${i+1}</div><div><h3>${t[0]}</h3><p style="font-size:.95rem;margin-top:6px">${t[1]}</p></div></div>`).join('');
const S=(a)=>a.map((t,i)=>`<div><div class="o">${i+1}</div><h3>${t[0]}</h3><p>${t[1]}</p></div>`).join('');
$('#st').innerHTML=S([['Listen','We learn about your business and technology needs.'],['Improve','We recommend practical solutions that make a difference.'],['Support','We stay available to help your team move forward.']]);
const nx=S([['We review your enquiry','Our team will look at your requirements and any relevant details.'],['We get in touch','We\u2019ll contact you within 1 business day to discuss your needs.'],['We recommend next steps','We\u2019ll suggest the right solution and outline the next steps.']]);$('#st2').innerHTML=nx;
$('#st3').innerHTML=S([['We review your enquiry','Our team will review the details you have provided.'],['We get in touch','We will contact you using your preferred method.'],['Next steps','We will discuss your requirements and advise on the next steps.']]);
$('#bars').innerHTML=[[20,3],[38,5],[56,9],[46,8],[64,12],[92,16]].map((b,i)=>`<div><em>${b[1]}</em><i style="--h:${b[0]}%;--i:${i}"></i></div>`).join('');
$('#mqi').innerHTML=('<span>Managed IT</span><b>✦</b><span>Cybersecurity</span><b>✦</b><span>Cloud</span><b>✦</b><span>IT Consulting</span><b>✦</b>').repeat(6);
const SV=[['mon','Managed IT Services','Proactive support and management to keep your systems running smoothly.',['24/7 monitoring','Helpdesk support'],'Businesses seeking reliable day-to-day IT support.','Ongoing managed service with flexible plans.'],['shield','Cybersecurity','Protect your people, data and reputation.',['Threat detection','Vulnerability review'],'Organisations that need stronger security and compliance.','Tailored solutions with expert setup and monitoring.'],['cloud','Cloud Solutions','Modern, scalable cloud services to enable growth.',['Cloud migration','Infrastructure management'],'Businesses looking to improve agility and reduce costs.','Project-based or managed service, depending on your needs.'],['team','IT Consulting','Strategic advice to help you make the right technology decisions.',['IT strategy and planning','Technology assessments'],'Organisations planning growth or change.','Consultative projects with clear outcomes and recommendations.']];
$('#sl').innerHTML=SV.map((s,i)=>`<a href="#s${i}" data-t="${i}">${s[1]}<span>→</span></a>`).join('');
$('#sc').innerHTML=SV.map((s,i)=>`<article class="card sc r" id="s${i}"><header>${ic(s[0])}<div><h3>${s[1]}</h3><p style="font-size:.95rem">${s[2]}</p></div></header><div class="cols"><div><h4>What it includes</h4><ul>${s[3].map(x=>`<li>• ${x}</li>`).join('')}</ul></div><div><h4>Best for</h4><p>${s[4]}</p></div><div><h4>Delivery style</h4><p>${s[5]}</p></div></div></article>`).join('');
$$('#sl a').forEach(a=>a.onclick=e=>{e.preventDefault();$('#'+a.getAttribute('href').slice(1)).scrollIntoView({behavior:'smooth',block:'center'})});
$('#ac').innerHTML=[['10+','Years of combined IT experience'],['500+','Support requests successfully handled'],['98%','Client satisfaction focus'],['24/7','Monitoring and support availability'],['50+','Businesses supported with IT solutions']].map(a=>`<div class="card r"><strong data-n="${parseInt(a[0])}" data-s="${a[0].replace(/[\d]+/,'').replace('/','/')}" ${a[0]=='24/7'?'data-raw="24/7"':''}>${a[0]}</strong><p style="margin:10px auto 0">${a[1]}</p></div>`).join('');
const T=['Managed IT','Cybersecurity','Cloud','IT Consulting'];let sel=0;
$('#tb').innerHTML=T.map((t,i)=>`<button type="button" class="${i?'':'on'}">${t}</button>`).join('');
$$('#tb button').forEach((b,i)=>b.onclick=()=>{sel=i;$$('#tb button').forEach((x,j)=>x.classList.toggle('on',i==j));$('#ft').textContent=T[i]+' enquiry'});
$$('.pg').forEach(p=>p.append($('#ftt').content.cloneNode(true)));
$$('[data-s]').forEach(h=>{let i=0;h.innerHTML=h.textContent.split(' ').map(w=>`<span class="w"><b style="--i:${i++}">${w}</b></span>`).join(' ')});
/* count-up */
const cnt=el=>{if(el.dataset.raw||el.dataset.d)return;el.dataset.d=1;const n=+el.dataset.n,s=el.dataset.s||'',t0=performance.now();(function f(t){const k=Math.min(1,(t-t0)/1500),e=1-Math.pow(1-k,4);el.textContent=Math.round(n*e)+(k<1?'':s);k<1&&requestAnimationFrame(f)})(t0)};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');$$('[data-n]',e.target).forEach(cnt)}}),{threshold:.2});
/* router */
const R=['home','services','about','enquiry','done'];let cur,busy;
function show(h){const p=$('#'+h);$$('.pg').forEach(x=>x.classList.remove('show','on'));p.classList.add('show');scrollTo(0,0);$$('.r',p).forEach(r=>{r.classList.remove('in');io.observe(r)});$$('[data-n]',p).forEach(e=>{if(!e.dataset.raw){e.dataset.d='';e.textContent=e.closest('.card')?e.textContent:'0'}});
if(h=='home')cnt($('[data-n]',p));if(h=='about')$$('[data-n]',p).forEach(e=>{e.dataset.d='';e.textContent=e.dataset.raw||'0'});
requestAnimationFrame(()=>requestAnimationFrame(()=>p.classList.add('on')));
$$('nav a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')=='#'+(h=='done'?'enquiry':h)));ind();document.title='STACKLY IT – '+h;$('#nv').classList.remove('open')}
function ind(){const a=$('nav a.on'),i=$('.ind');if(a){i.style.left=a.offsetLeft+18+'px';i.style.width=a.offsetWidth-36+'px'}}
function go(){let h=location.hash.slice(1);if(!R.includes(h))h='home';if(h==cur)return;if(!cur||RM){cur=h;return show(h)}
if(busy)return;busy=1;const w=$('#wipe');w.style.transition='transform .55s cubic-bezier(.7,0,.2,1)';w.style.transform='translateY(0)';
setTimeout(()=>{cur=h;show(h);w.style.transition='transform .6s cubic-bezier(.7,0,.2,1)';w.style.transform='translateY(-100%)';setTimeout(()=>{w.style.transition='none';w.style.transform='translateY(100%)';busy=0},650)},560)}
addEventListener('hashchange',go);addEventListener('resize',ind);document.fonts&&document.fonts.ready.then(ind);go();
$('#mb').onclick=()=>$('#nv').classList.toggle('open');
/* form */
$('#fm').addEventListener('submit',e=>{e.preventDefault();let ok=1;const chk={a:v=>v.trim().length>1,b:v=>/^\S+@\S+\.\S+$/.test(v),c:v=>v.trim().length>0,e:v=>v.trim().length>4};
for(const k in chk){const i=$('#'+k),bad=!chk[k](i.value);i.parentNode.classList.toggle('bad',bad);if(bad)ok=0}
if(!ok)return $('.bad input,.bad textarea').focus();$('#no').textContent='NX-2026-'+String(Math.floor(Math.random()*9000)+1000);$('#fm').reset();location.hash='done'});
$('#cp').onclick=async()=>{try{await navigator.clipboard.writeText($('#no').textContent)}catch(e){}$('#cp').textContent='Copied';setTimeout(()=>$('#cp').textContent='Copy',1800)};
/* scroll progress + service scroll-spy */
addEventListener('scroll',()=>{$('#bar').style.transform=`scaleX(${scrollY/(document.body.scrollHeight-innerHeight||1)})`;if(cur=='services'){let b=0;$$('.sc').forEach((c,i)=>{if(c.getBoundingClientRect().top<innerHeight*.5)b=i});$$('#sl a').forEach((a,i)=>a.classList.toggle('on',i==b))}},{passive:true});
/* cursor, magnetic buttons, spotlight, tilt */
let mx=innerWidth/2,my=innerHeight/2,rx=mx,ry=my;
addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY;$('#cur').style.transform=`translate(${mx}px,${my}px)`;const c=e.target.closest&&e.target.closest('.card');if(c){const r=c.getBoundingClientRect();c.style.setProperty('--x',e.clientX-r.left+'px');c.style.setProperty('--y',e.clientY-r.top+'px')}});
document.addEventListener('pointerover',e=>$('#ring').classList.toggle('big',!!e.target.closest('a,button')));
(function l(){rx+=(mx-rx)*.15;ry+=(my-ry)*.15;$('#ring').style.transform=`translate(${rx}px,${ry}px)`;requestAnimationFrame(l)})();
document.addEventListener('pointermove',e=>{const m=e.target.closest('.mag');$$('.mag').forEach(b=>{if(b!==m)b.style.transform=''});if(m&&!RM){const r=m.getBoundingClientRect();m.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.25}px,${(e.clientY-r.top-r.height/2)*.35}px)`}});
const tl=$('#tilt');tl.onpointermove=e=>{if(RM)return;const r=tl.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;tl.style.transform=`perspective(900px) rotateY(${x*10}deg) rotateX(${-y*10}deg)`};tl.onpointerleave=()=>tl.style.transform='';
/* network canvas */
const cv=$('#cv'),x=cv.getContext('2d');let W,H,N=[];
function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight;N=Array.from({length:Math.min(80,W/16|0)},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4}))}rs();addEventListener('resize',rs);
(function d(){x.clearRect(0,0,W,H);for(const a of N){a.x+=a.vx;a.y+=a.vy;if(a.x<0||a.x>W)a.vx*=-1;if(a.y<0||a.y>H)a.vy*=-1;const dx=mx-a.x,dy=my-a.y,m=Math.hypot(dx,dy);if(m<160){a.x-=dx*.01;a.y-=dy*.01}
x.fillStyle='rgba(126,224,189,.6)';x.fillRect(a.x,a.y,2,2);for(const b of N){const q=Math.hypot(a.x-b.x,a.y-b.y);if(q<130){x.strokeStyle=`rgba(126,224,189,${.14*(1-q/130)})`;x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke()}}}
RM||requestAnimationFrame(d)})();

/* nav hover pill */
{const n=$('#nv'),h=$('.hv');$$('a',n).forEach(a=>{a.onmouseenter=()=>{h.style.left=a.offsetLeft+'px';h.style.width=a.offsetWidth+'px';h.style.opacity=1}});n.onmouseleave=()=>h.style.opacity=0}
