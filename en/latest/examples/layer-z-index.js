"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1950],{96618:function(e,n,r){var a=r(39352),t=r(33156),i=r(92535),o=r(57356),s=r(96802),l=r(29123),w=r(96306),u=r(12008),c=r(87300),f=r(19665),g=new w.Z({color:"black",width:1}),d={square:new u.ZP({image:new c.Z({fill:new f.Z({color:"blue"}),stroke:g,points:4,radius:80,angle:Math.PI/4})}),triangle:new u.ZP({image:new c.Z({fill:new f.Z({color:"red"}),stroke:g,points:3,radius:80,rotation:Math.PI/4,angle:0})}),star:new u.ZP({image:new c.Z({fill:new f.Z({color:"green"}),stroke:g,points:5,radius:80,radius2:4,angle:0})})};function v(e,n,r){var t=new a.Z(new i.Z(e));t.setStyle(n);var l=new s.Z({features:[t]}),w=new o.Z({source:l});return w.setZIndex(r),w}var m=v([40,40],d.star),p=v([0,0],d.square,1),h=v([0,40],d.triangle,0),k=[];k.push(p),k.push(h);var b=new t.Z({layers:k,target:"map",view:new l.ZP({center:[0,0],zoom:18})});function M(e,n){var r=document.getElementById("idx"+e);r.onchange=function(){n.setZIndex(parseInt(this.value,10)||0)},r.value=String(n.getZIndex())}m.setMap(b),M(1,p),M(2,h)}},function(e){var n;n=96618,e(e.s=n)}]);
//# sourceMappingURL=layer-z-index.js.map