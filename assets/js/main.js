/* Aurora Cybersecurity — starfield, aurora curtain, small UI helpers */
(function(){
  document.getElementById('yr').textContent=new Date().getFullYear();

  // Aurora curtain — echoes the vertical-bar motif from the logo
  var c=document.getElementById('curtain');
  var n=window.innerWidth<640?22:44;
  for(var k=0;k<n;k++){
    var t=k/(n-1);
    var h=28+44*Math.pow(Math.sin(Math.PI*t*1.15+.2),2)*(0.6+0.4*Math.sin(t*9.3))+ (t>.55?14*Math.sin((t-.55)*14):0);
    h=Math.max(16,Math.min(82,h));
    var o=.25+.55*Math.abs(Math.sin(t*7.1+1));
    var el=document.createElement('i');
    el.style.height=h+'%';el.style.opacity=o.toFixed(2);
    el.style.setProperty('--a',(0.82+Math.random()*.12).toFixed(2));
    el.style.setProperty('--b',(1+Math.random()*.12).toFixed(2));
    el.style.animationDelay=(-Math.random()*7).toFixed(2)+'s';
    el.style.animationDuration=(5+Math.random()*4).toFixed(2)+'s';
    c.appendChild(el);
  }

  // Starfield
  var cv=document.getElementById('sky'),ctx=cv.getContext('2d'),stars=[];
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function size(){
    var r=window.devicePixelRatio||1,w=cv.clientWidth,h=cv.clientHeight;
    cv.width=w*r;cv.height=h*r;ctx.setTransform(r,0,0,r,0,0);
    stars=[];var count=Math.round(w*h/2600);
    for(var i=0;i<count;i++){var big=Math.random()<.06;stars.push({x:Math.random()*w,y:Math.random()*h,r:big?1.3:(Math.random()<.3?1:.7),o:.3+Math.random()*.6,p:Math.random()*6.28,s:.4+Math.random()*1.2,big:big});}
    draw(0);
  }
  function draw(time){
    ctx.clearRect(0,0,cv.width,cv.height);
    for(var i=0;i<stars.length;i++){var s=stars[i];
      var a=reduce?s.o:s.o*(.7+.3*Math.sin(s.p+time*.001*s.s));
      if(s.big){ctx.fillStyle='rgba(245,249,250,'+(a*.25)+')';ctx.beginPath();ctx.arc(s.x,s.y,s.r*3,0,6.28);ctx.fill();}
      ctx.fillStyle='rgba(245,249,250,'+a+')';ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,6.28);ctx.fill();}
  }
  function loop(t){draw(t);requestAnimationFrame(loop);}
  size();window.addEventListener('resize',size);
  if(!reduce)requestAnimationFrame(loop);

  // Card glyphs (mini aurora bars)
  document.querySelectorAll('.glyph').forEach(function(g){
    g.dataset.h.split(',').forEach(function(v){var b=document.createElement('b');b.style.height=v+'px';g.appendChild(b);});
  });

  // Copy email
  document.querySelectorAll('.copy').forEach(function(btn){
    btn.addEventListener('click',function(){
      var el=document.getElementById(btn.dataset.target),txt=el.textContent;
      function done(){btn.textContent='Copied';setTimeout(function(){btn.textContent='Copy';},1600);}
      function fallback(){var r=document.createRange();r.selectNodeContents(el);var s=window.getSelection();s.removeAllRanges();s.addRange(r);btn.textContent='Selected';setTimeout(function(){btn.textContent='Copy';},1600);}
      try{navigator.clipboard.writeText(txt).then(done,fallback);}catch(e){fallback();}
    });
  });
})();
