(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{255:function(e,n,a){"use strict";a.r(n);for(var t=a(24),r=a(3),o=a(2),w=a(26),s=a(21),c=a(5),i=a(11),u=a(244),f=a(9),l=a(10),d=a(48),p=a(16),v=a(20),m=a(69),g=document.getElementById("distance"),h=new Array(2e4),y=45e5,b=0;b<2e4;++b){var k=[9e6*Math.random()-y,9e6*Math.random()-y];h[b]=new t.a(new w.a(k))}var I=new i.a({features:h}),x=new u.a({distance:parseInt(g.value,10),source:I}),C={},E=new s.a({source:x,style:function(e){var n=e.get("features").length,a=C[n];return a||(a=new l.c({image:new d.a({radius:10,stroke:new p.a({color:"#fff"}),fill:new v.a({color:"#3399CC"})}),text:new m.a({text:n.toString(),fill:new v.a({color:"#fff"})})}),C[n]=a),a}}),J=new c.a({source:new f.b});new r.a({layers:[J,E],target:"map",view:new o.a({center:[0,0],zoom:2})});g.addEventListener("input",(function(){x.setDistance(parseInt(g.value,10))}))}},[[255,0]]]);
//# sourceMappingURL=cluster.js.map