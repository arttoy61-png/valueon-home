const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');
if(menuBtn&&nav){
  const setMenu=(open)=>{nav.classList.toggle('open',open);menuBtn.textContent=open?'CLOSE':'MENU';menuBtn.setAttribute('aria-expanded',String(open));menuBtn.setAttribute('aria-label',open?'메뉴 닫기':'메뉴 열기');};
  setMenu(false);
  menuBtn.addEventListener('click',()=>setMenu(!nav.classList.contains('open')));
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){setMenu(false);menuBtn.focus();}});
  document.addEventListener('click',e=>{if(nav.classList.contains('open')&&!e.target.closest('.site-header'))setMenu(false);});
  const media=window.matchMedia('(min-width:981px)');
  const syncMenu=()=>{if(media.matches)setMenu(false);};
  media.addEventListener?.('change',syncMenu);
}
const slides=[...document.querySelectorAll('.slide')];
const prev=document.querySelector('.prev');
const next=document.querySelector('.next');
const pauseBtn=document.querySelector('.pause');
let current=0;let timer=null;let paused=false;
function showSlide(i){if(!slides.length)return;current=(i+slides.length)%slides.length;slides.forEach((s,n)=>{s.classList.toggle('active',n===current);s.setAttribute('aria-hidden',String(n!==current));});}
function startAuto(){clearInterval(timer);if(paused||slides.length<2)return;timer=setInterval(()=>showSlide(current+1),5200);}
if(slides.length){
  showSlide(0);
  prev?.addEventListener('click',()=>{showSlide(current-1);startAuto();});
  next?.addEventListener('click',()=>{showSlide(current+1);startAuto();});
  pauseBtn?.addEventListener('click',()=>{paused=!paused;pauseBtn.textContent=paused?'▶':'Ⅱ';pauseBtn.setAttribute('aria-label',paused?'재생':'일시정지');startAuto();});
  document.addEventListener('visibilitychange',()=>{if(document.hidden)clearInterval(timer);else startAuto();});
  startAuto();
}
