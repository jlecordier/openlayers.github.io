"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1693],{7512:function(e,t,n){var a=n(4686),o=n(9847),r=n(2139),i=n(4354),c=n(1998);const s=new r.Z({className:"ol-layer-imagery",source:new c.Z({attributions:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> ',url:"https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=get_your_own_D6rA4zTHduk6KOKTXzGB",maxZoom:20,crossOrigin:""})}),u=new r.Z({source:new o.Z}),p=(new a.Z({layers:[s,u],target:"map",view:new i.ZP({center:[0,0],zoom:2})}),document.getElementById("opacity-input")),l=document.getElementById("opacity-output");function m(){const e=parseFloat(p.value);u.setOpacity(e),l.innerText=e.toFixed(2)}p.addEventListener("input",m),m()}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(7512)}]);
//# sourceMappingURL=layer-opacity.js.map