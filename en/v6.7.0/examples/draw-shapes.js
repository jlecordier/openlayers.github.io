"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4008],{2147:function(e,n,t){var r,c=t(41225),o=t(33156),a=t(60392),u=t(29123),i=t(19987),w=t(96802),f=t(86395),s=t(57356),l=new f.Z({source:new i.Z}),v=new w.Z({wrapX:!1}),h=new s.Z({source:v}),m=new o.Z({layers:[l,h],target:"map",view:new u.ZP({center:[-11e6,46e5],zoom:4})}),M=document.getElementById("type");function p(){var e,n=M.value;"None"!==n&&("Square"===n?(n="Circle",e=(0,c.t)(4)):"Box"===n?(n="Circle",e=(0,c.dO)()):"Star"===n&&(n="Circle",e=function(e,n){for(var t=e[0],r=e[e.length-1],c=t[0]-r[0],o=t[1]-r[1],u=Math.sqrt(c*c+o*o),i=Math.atan2(o,c),w=[],f=0;f<12;++f){var s=i+2*f*Math.PI/12,l=f%2==0?1:.5,v=u*l*Math.cos(s),h=u*l*Math.sin(s);w.push([t[0]+v,t[1]+h])}return w.push(w[0].slice()),n?n.setCoordinates([w]):n=new a.ZP([w]),n}),r=new c.ZP({source:v,type:n,geometryFunction:e}),m.addInteraction(r))}M.onchange=function(){m.removeInteraction(r),p()},document.getElementById("undo").addEventListener("click",(function(){r.removeLastPoint()})),p()}},function(e){var n;n=2147,e(e.s=n)}]);
//# sourceMappingURL=draw-shapes.js.map