"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5198],{47423:function(n,e,o){var r,t=o(13990),i=o(33156),f=o(57356),l=o(96802),c=o(29123),w=o(12008),s=o(19665),a=o(96306),u=o(96090),m=new w.ZP({fill:new s.Z({color:"rgba(255, 255, 255, 0.6)"}),stroke:new a.Z({color:"#319FD3",width:1}),text:new u.Z({font:"12px Calibri,sans-serif",fill:new s.Z({color:"#000"}),stroke:new a.Z({color:"#fff",width:3})})}),d=new f.Z({source:new l.Z({url:"data/geojson/countries.geojson",format:new t.Z}),style:function(n){return m.getText().setText(n.get("name")),m}}),v=new i.Z({layers:[d],target:"map",view:new c.ZP({center:[0,0],zoom:1})}),p=new w.ZP({stroke:new a.Z({color:"#f00",width:1}),fill:new s.Z({color:"rgba(255,0,0,0.1)"}),text:new u.Z({font:"12px Calibri,sans-serif",fill:new s.Z({color:"#000"}),stroke:new a.Z({color:"#f00",width:3})})}),b=new f.Z({source:new l.Z,map:v,style:function(n){return p.getText().setText(n.get("name")),p}}),g=function(n){d.getFeatures(n).then((function(n){var e=n.length?n[0]:void 0,o=document.getElementById("info");n.length?o.innerHTML=e.getId()+": "+e.get("name"):o.innerHTML="&nbsp;",e!==r&&(r&&b.getSource().removeFeature(r),e&&b.getSource().addFeature(e),r=e)}))};v.on("pointermove",(function(n){if(!n.dragging){var e=v.getEventPixel(n.originalEvent);g(e)}})),v.on("click",(function(n){g(n.pixel)}))}},function(n){var e;e=47423,n(n.s=e)}]);
//# sourceMappingURL=hitdetect-vector.js.map