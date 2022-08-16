"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[910],{1770:function(e,t,n){var o=n(1118),l=n(4686),s=n(4354),i=n(729),m=n(7975),d=n(720),u=n(9039),g=n(7138),c=n(5783),a=n(9847),r=n(1372),y=n(2010);let f=!1;const p={points:{text:document.getElementById("points-text"),align:document.getElementById("points-align"),baseline:document.getElementById("points-baseline"),rotation:document.getElementById("points-rotation"),font:document.getElementById("points-font"),weight:document.getElementById("points-weight"),size:document.getElementById("points-size"),height:document.getElementById("points-height"),offsetX:document.getElementById("points-offset-x"),offsetY:document.getElementById("points-offset-y"),color:document.getElementById("points-color"),outline:document.getElementById("points-outline"),outlineWidth:document.getElementById("points-outline-width"),maxreso:document.getElementById("points-maxreso")},lines:{text:document.getElementById("lines-text"),align:document.getElementById("lines-align"),baseline:document.getElementById("lines-baseline"),rotation:document.getElementById("lines-rotation"),font:document.getElementById("lines-font"),weight:document.getElementById("lines-weight"),placement:document.getElementById("lines-placement"),maxangle:document.getElementById("lines-maxangle"),overflow:document.getElementById("lines-overflow"),size:document.getElementById("lines-size"),height:document.getElementById("lines-height"),offsetX:document.getElementById("lines-offset-x"),offsetY:document.getElementById("lines-offset-y"),color:document.getElementById("lines-color"),outline:document.getElementById("lines-outline"),outlineWidth:document.getElementById("lines-outline-width"),maxreso:document.getElementById("lines-maxreso")},polygons:{text:document.getElementById("polygons-text"),align:document.getElementById("polygons-align"),baseline:document.getElementById("polygons-baseline"),rotation:document.getElementById("polygons-rotation"),font:document.getElementById("polygons-font"),weight:document.getElementById("polygons-weight"),placement:document.getElementById("polygons-placement"),maxangle:document.getElementById("polygons-maxangle"),overflow:document.getElementById("polygons-overflow"),size:document.getElementById("polygons-size"),height:document.getElementById("polygons-height"),offsetX:document.getElementById("polygons-offset-x"),offsetY:document.getElementById("polygons-offset-y"),color:document.getElementById("polygons-color"),outline:document.getElementById("polygons-outline"),outlineWidth:document.getElementById("polygons-outline-width"),maxreso:document.getElementById("polygons-maxreso")}},E=function(e,t,n){const o=n.text.value,l=n.maxreso.value;let s=e.get("name");return t>l||"hide"==o?s="":"shorten"==o?s=s.trunc(12):"wrap"!=o||n.placement&&"line"==n.placement.value||(s=b(s,16,"\n")),s},I=function(e,t,n){const o=n.align.value,l=n.baseline.value,s=n.size.value,u=n.height.value,g=parseInt(n.offsetX.value,10),c=parseInt(n.offsetY.value,10),a=n.weight.value,r=n.placement?n.placement.value:void 0,y=n.maxangle?parseFloat(n.maxangle.value):void 0,p=n.overflow?"true"==n.overflow.value:void 0,I=parseFloat(n.rotation.value);if("'Open Sans'"==n.font.value&&!f){const e=document.createElement("link");e.href="https://fonts.googleapis.com/css?family=Open+Sans",e.rel="stylesheet",document.head.appendChild(e),f=!0}const B=a+" "+s+"/"+u+" "+n.font.value,h=n.color.value,w=n.outline.value,v=parseInt(n.outlineWidth.value,10);return new i.Z({textAlign:""==o?void 0:o,textBaseline:l,font:B,text:E(e,t,n),fill:new m.Z({color:h}),stroke:new d.Z({color:w,width:v}),offsetX:g,offsetY:c,placement:r,maxAngle:y,overflow:p,rotation:I})};function B(e,t){return new u.ZP({stroke:new d.Z({color:"blue",width:1}),fill:new m.Z({color:"rgba(0, 0, 255, 0.1)"}),text:I(e,t,p.polygons)})}const h=new r.Z({source:new c.Z({url:"data/geojson/polygon-samples.geojson",format:new o.Z}),style:B});function w(e,t){return new u.ZP({stroke:new d.Z({color:"green",width:2}),text:I(e,t,p.lines)})}const v=new r.Z({source:new c.Z({url:"data/geojson/line-samples.geojson",format:new o.Z}),style:w});function x(e,t){return new u.ZP({image:new g.Z({radius:10,fill:new m.Z({color:"rgba(255, 0, 0, 0.1)"}),stroke:new d.Z({color:"red",width:1})}),text:I(e,t,p.points)})}const Z=new r.Z({source:new c.Z({url:"data/geojson/point-samples.geojson",format:new o.Z}),style:x});new l.Z({layers:[new y.Z({source:new a.Z}),h,v,Z],target:"map",view:new s.ZP({center:[-8161939,6095025],zoom:8})});function b(e,t,n){if(e.length>t){let o=t;for(;o>0&&" "!=e[o]&&"-"!=e[o];)o--;if(o>0){let l;l="-"==e.substring(o,o+1)?e.substring(0,o+1):e.substring(0,o);return l+n+b(e.substring(o+1),t,n)}}return e}document.getElementById("refresh-points").addEventListener("click",(function(){Z.setStyle(x)})),document.getElementById("refresh-lines").addEventListener("click",(function(){v.setStyle(w)})),document.getElementById("refresh-polygons").addEventListener("click",(function(){h.setStyle(B)})),String.prototype.trunc=String.prototype.trunc||function(e){return this.length>e?this.substr(0,e-1)+"...":this.substr(0)}}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(1770)}]);
//# sourceMappingURL=vector-labels.js.map