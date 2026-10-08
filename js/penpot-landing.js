// Fundamentos do Penpot landing — scroll animations estilo Lando Norris, sem libs.
(function(){
  const bar = document.querySelector('.progress i');
  const head = document.querySelector('.site-head');
  const cta = document.querySelector('.sticky-cta');
  const final = document.querySelector('.final-cta');
  let finalVisible = false;
  if(final && 'IntersectionObserver' in window){
    new IntersectionObserver((es)=>{
      es.forEach(e=>{ finalVisible = e.isIntersecting; onScroll(); });
    },{threshold:.12}).observe(final);
  }
  const onScroll = () => {
    const h = document.documentElement;
    const p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
    if(bar) bar.style.width = (p*100).toFixed(2)+'%';
    if(head) head.classList.toggle('scrolled', h.scrollTop>24);
    if(cta) cta.classList.toggle('show', h.scrollTop > 700 && !finalVisible);
  };
  addEventListener('scroll', onScroll, {passive:true}); onScroll();

  // Reveal on scroll com stagger via --d
  const io = new IntersectionObserver((es)=>{
    es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
  },{threshold:.15});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  // Spotlight nos diferenciais quando entram
  const io2 = new IntersectionObserver((es)=>{
    es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('on'); setTimeout(()=>e.target.classList.remove('on'),1600);} });
  },{threshold:.5});
  document.querySelectorAll('.spotlight').forEach(el=>io2.observe(el));

  // Contadores
  const counters = document.querySelectorAll('[data-count]');
  const io3 = new IntersectionObserver((es)=>{
    es.forEach(e=>{
      if(!e.isIntersecting) return;
      const el=e.target, end=parseFloat(el.dataset.count), dec=el.dataset.dec?1:0;
      const t0=performance.now(), dur=1200;
      const tick=(t)=>{
        const p=Math.min(1,(t-t0)/dur), v=end*(1-Math.pow(1-p,3));
        el.textContent = dec? v.toFixed(1).replace('.',',') : Math.round(v).toString();
        if(p<1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick); io3.unobserve(el);
    });
  },{threshold:.6});
  counters.forEach(el=>io3.observe(el));

  // FAQ filter — busca com normalização de acentos
  const faqInput = document.getElementById('faq-filter');
  const faqList = document.getElementById('faq-list');
  const faqEmpty = document.getElementById('faq-empty');
  const faqCount = document.getElementById('faq-count');
  const norm = (s)=>s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  const updateCount = ()=>{
    if(!faqList) return;
    const items=[...faqList.querySelectorAll('details.faq')];
    const vis=items.filter(d=>!d.hidden).length;
    if(faqCount) faqCount.textContent = faqInput && faqInput.value ? `${vis}/${items.length}` : `${items.length} perguntas`;
  };
  if(faqInput && faqList){
    const items=[...faqList.querySelectorAll('details.faq')];
    const baseline=new Set(items.filter(d=>d.open)); // estado pré-busca (manual)
    let filtering=false, syncing=false;
    // Guarda abrir/fechar manuais — ignora o que a busca abre/fecha (capture: toggle não borbulha)
    faqList.addEventListener('toggle',(e)=>{
      if(syncing||filtering) return;
      const d=e.target;
      if(!(d instanceof HTMLDetailsElement)) return;
      d.open?baseline.add(d):baseline.delete(d);
    },true);
    faqInput.addEventListener('input', ()=>{
      const q=norm(faqInput.value.trim());
      let vis=0;
      syncing=true;
      items.forEach(d=>{
        const hit=!q || norm(d.textContent).includes(q);
        d.hidden=!hit;
        if(hit){vis++; if(q) d.open=true;}
      });
      if(!q) items.forEach(d=>{ d.open=baseline.has(d); }); // limpa busca -> volta ao anterior
      syncing=false;
      filtering=!!q;
      if(faqEmpty) faqEmpty.style.display = vis===0 ? 'block':'none';
      updateCount();
    });
    updateCount();
  }

  // Carrossel depoimentos — duplica trilha p/ loop infinito perfeito
  const track = document.getElementById('t-track');
  if(track && !matchMedia('(prefers-reduced-motion: reduce)').matches){
    track.innerHTML += track.innerHTML;
    const kids=[...track.children].slice(track.children.length/2);
    kids.forEach(el=>el.setAttribute('aria-hidden','true'));
  }

  // Parallax leve no hero
  const shapes = document.querySelector('.shapes');
  const visual = document.querySelector('.hero-visual');
  if(shapes && visual && !matchMedia('(prefers-reduced-motion: reduce)').matches){
    addEventListener('scroll', ()=>{
      const y = Math.min(60, scrollY*.06);
      shapes.style.transform = `translateY(${-y}px)`;
      visual.style.transform = `translateY(${y*.3}px)`;
    },{passive:true});
  }
})();
