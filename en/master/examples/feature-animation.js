(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{279:function(e,a,n){"use strict";n.r(a);var t=n(23),r=n(3),w=n(109),o=n(2),c=n(57),d=n(26),i=n(6),b=n(21),s=n(5),u=n(11),m=n(13),p=n(14),f=n(48),v=n(19),g=n(64),j=new i.a({source:new u.b({wrapX:!1})}),l=new r.a({layers:[j],target:"map",view:new o.a({center:[0,0],zoom:1})}),y=new m.a({wrapX:!1}),O=new b.a({source:y});l.addLayer(O);var h=3e3;y.on("addfeature",function(e){var a,n,t;a=e.feature,n=(new Date).getTime(),t=j.on("postrender",function(e){var r=Object(g.b)(e),o=e.frameState,d=a.getGeometry().clone(),i=o.time-n,b=i/h,s=25*Object(c.b)(b)+5,u=Object(c.b)(1-b),m=new p.c({image:new f.a({radius:s,stroke:new v.a({color:"rgba(255, 0, 0, "+u+")",width:.25+u})})});r.setStyle(m),r.drawGeometry(d),i>h?Object(w.b)(t):l.render()})}),window.setInterval(function(){var e=360*Math.random()-180,a=180*Math.random()-90,n=new d.a(Object(s.f)([e,a])),r=new t.a(n);y.addFeature(r)},1e3)}},[[279,0]]]);
//# sourceMappingURL=feature-animation.js.map