(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{288:function(e,t,n){"use strict";n.r(t);var a,o=n(22),r=n(35),c=n(3),i=n(2),l=n(9),s=n(12),w=n(10),u=n(17),g=n(5),h=n(20),d=new g.a({source:new l.b}),p=new w.c({stroke:new u.a({color:"black",width:1})}),f=new o.a(new r.a([[-4e6,0],[4e6,0]])),k=new h.a({source:new s.a({features:[f]}),style:p}),b=new c.a({layers:[d,k],target:"map",view:new i.a({center:[0,0],zoom:2})}),m=document.getElementById("status");b.on("singleclick",(function(e){var t=!1;b.forEachFeatureAtPixel(e.pixel,(function(){t=!0}),{hitTolerance:a}),t?(p.getStroke().setColor("green"),m.innerHTML="&nbsp;A feature got hit!"):(p.getStroke().setColor("black"),m.innerHTML="&nbsp;No feature got hit."),f.changed()}));var v=document.getElementById("hitTolerance"),y=document.getElementById("circle"),I=function(){var e=2*(a=parseInt(v.value,10))+2;y.width=e,y.height=e;var t=y.getContext("2d");t.clearRect(0,0,e,e),t.beginPath(),t.arc(a+1,a+1,a+.5,0,2*Math.PI),t.fill(),t.stroke()};v.onchange=I,I()}},[[288,0]]]);
//# sourceMappingURL=hit-tolerance.js.map