const menu=document.querySelector('.menu');const nav=document.querySelector('#nav-links');if(menu){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open?'true':'false')});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}))}const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}})},{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));document.querySelector('#year').textContent=new Date().getFullYear();
(()=>{const bar=document.querySelector('.progress'),hdr=document.querySelector('.nav');
const onScroll=()=>{const h=document.documentElement,max=h.scrollHeight-h.clientHeight;bar.style.transform='scaleX('+(max>0?h.scrollTop/max:0)+')';hdr.classList.toggle('scrolled',h.scrollTop>10)};
addEventListener('scroll',onScroll,{passive:true});onScroll();
const links=[...document.querySelectorAll('#nav-links a')];
const spy=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+e.target.id))}}),{rootMargin:'-45% 0px -50% 0px'});
links.forEach(l=>{const t=document.querySelector(l.getAttribute('href'));t&&spy.observe(t)});
document.querySelectorAll('.work-card,.cp-card,.credential').forEach(c=>c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect();c.style.setProperty('--mx',e.clientX-r.left+'px');c.style.setProperty('--my',e.clientY-r.top+'px')}));
addEventListener('keydown',e=>{if(e.key==='Escape'&&menu){nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}});
})();

(()=>{const rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
const g=document.querySelector('.glow');addEventListener('pointermove',e=>{g.style.setProperty('--gx',e.clientX+'px');g.style.setProperty('--gy',e.clientY+'px')});
const el=document.querySelector('#typed'),words=['backend systems.','REST APIs with FastAPI.','ML pipelines.','AI research.'];let w=0,c=0,del=false;
(function tick(){const t=words[w];if(rm){el.textContent=t;return}el.textContent=t.slice(0,c);if(!del&&c===t.length){del=true;return setTimeout(tick,1500)}if(del&&c===0){del=false;w=(w+1)%words.length}c+=del?-1:1;setTimeout(tick,del?35:70)})();
document.querySelectorAll('.skill-row span').forEach(s=>{const items=s.textContent.split('·').map(x=>x.trim());s.className='chips';s.innerHTML=items.map(x=>'<i>'+x+'</i>').join('')});
const co=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;co.unobserve(e.target);const n=+e.target.dataset.count,t0=performance.now();(function f(t){const p=Math.min((t-t0)/1400,1);e.target.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})(t0)}));
document.querySelectorAll('[data-count]').forEach(b=>co.observe(b));
})();
