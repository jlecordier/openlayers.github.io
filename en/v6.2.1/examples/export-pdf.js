(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{281:function(e,t,a){"use strict";a.r(t);var o=a(3),r=a(2),n=a(213),s=a(5),d=a(21),i=a(9),c=a(11),l=new s.a({source:new i.b}),u=(new n.a).readFeature("POLYGON((10.689697265625 -25.0927734375, 34.595947265625 -20.1708984375, 38.814697265625 -35.6396484375, 13.502197265625 -39.1552734375, 10.689697265625 -25.0927734375))");u.getGeometry().transform("EPSG:4326","EPSG:3857");var m=new d.a({source:new c.a({features:[u]}),opacity:.5}),p=new o.a({layers:[l,m],target:"map",view:new r.a({center:[0,0],zoom:2})}),w={a0:[1189,841],a1:[841,594],a2:[594,420],a3:[420,297],a4:[297,210],a5:[210,148]},g=document.getElementById("export-pdf");g.addEventListener("click",(function(){g.disabled=!0,document.body.style.cursor="progress";var e=document.getElementById("format").value,t=document.getElementById("resolution").value,a=w[e],o=Math.round(a[0]*t/25.4),r=Math.round(a[1]*t/25.4),n=p.getSize(),s=p.getView().getResolution();p.once("rendercomplete",(function(){var t=document.createElement("canvas");t.width=o,t.height=r;var d=t.getContext("2d");Array.prototype.forEach.call(document.querySelectorAll(".ol-layer canvas"),(function(e){if(e.width>0){var t=e.parentNode.style.opacity;d.globalAlpha=""===t?1:Number(t);var a=e.style.transform.match(/^matrix\(([^\(]*)\)$/)[1].split(",").map(Number);CanvasRenderingContext2D.prototype.setTransform.apply(d,a),d.drawImage(e,0,0)}}));var i=new jsPDF("landscape",void 0,e);i.addImage(t.toDataURL("image/jpeg"),"JPEG",0,0,a[0],a[1]),i.save("map.pdf"),p.setSize(n),p.getView().setResolution(s),g.disabled=!1,document.body.style.cursor="auto"}));var d=[o,r];p.setSize(d);var i=Math.min(o/n[0],r/n[1]);p.getView().setResolution(s/i)}),!1)}},[[281,0]]]);
//# sourceMappingURL=export-pdf.js.map