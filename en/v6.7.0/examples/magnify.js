"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3633],{48373:function(t,e,a){var r=a(33156),o=a(86395),n=a(29123),i=a(93613),u=a(62896),c=a(633),s=new o.Z({source:new i.Z({attributions:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',url:"https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=get_your_own_D6rA4zTHduk6KOKTXzGB",maxZoom:20,crossOrigin:""})}),p=document.getElementById("map"),h=new r.Z({layers:[s],target:p,view:new n.ZP({center:(0,u.mi)([-109,46.5]),zoom:6})}),l=75;document.addEventListener("keydown",(function(t){38===t.which?(l=Math.min(l+5,150),h.render(),t.preventDefault()):40===t.which&&(l=Math.max(l-5,25),h.render(),t.preventDefault())}));var m=null;p.addEventListener("mousemove",(function(t){m=h.getEventPixel(t),h.render()})),p.addEventListener("mouseout",(function(){m=null,h.render()})),s.on("postrender",(function(t){if(m){for(var e=(0,c.CR)(t,m),a=(0,c.CR)(t,[m[0]+l,m[1]]),r=Math.sqrt(Math.pow(a[0]-e[0],2)+Math.pow(a[1]-e[1],2)),o=t.context,n=e[0],i=e[1],u=n-r,s=i-r,p=Math.round(2*r+1),h=o.getImageData(u,s,p,p).data,f=o.createImageData(p,p),w=f.data,M=0;M<p;++M)for(var g=0;g<p;++g){var v=g-r,y=M-r,b=g,d=M;Math.sqrt(v*v+y*y)<r&&(b=Math.round(r+v/2),d=Math.round(r+y/2));var k=4*(M*p+g),_=4*(d*p+b);w[k]=h[_],w[k+1]=h[_+1],w[k+2]=h[_+2],w[k+3]=h[_+3]}o.beginPath(),o.arc(n,i,r,0,2*Math.PI),o.lineWidth=3*r/l,o.strokeStyle="rgba(255,255,255,0.5)",o.putImageData(f,u,s),o.stroke(),o.restore()}}))}},function(t){var e;e=48373,t(t.s=e)}]);
//# sourceMappingURL=magnify.js.map