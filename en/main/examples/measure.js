(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{328:function(e,n,t){"use strict";t.r(n);var o,a,i,r,c,s=t(66),l=t(3),d=t(83),u=t(2),w=t(11),f=t(21),g=t(16),m=t(48),p=t(32),v=t(36),h=t(9),b=t(10),y=t(5),k=t(19),C=t(150),L=t(115),M=new y.a({source:new h.b}),O=new b.a,E=new k.a({source:O,style:new w.c({fill:new f.a({color:"rgba(255, 255, 255, 0.2)"}),stroke:new g.a({color:"#ffcc33",width:2}),image:new m.a({radius:7,fill:new f.a({color:"#ffcc33"})})})}),N=new l.a({layers:[M,E],target:"map",view:new u.a({center:[-11e6,46e5],zoom:15})});N.on("pointermove",(function(e){if(!e.dragging){var n="Click to start drawing";if(o){var t=o.getGeometry();t instanceof p.b?n="Click to continue drawing the polygon":t instanceof v.a&&(n="Click to continue drawing the line")}a.innerHTML=n,i.setPosition(e.coordinate),a.classList.remove("hidden")}})),N.getViewport().addEventListener("mouseout",(function(){a.classList.add("hidden")}));var I,P=document.getElementById("type");function j(){var e,n="area"==P.value?"Polygon":"LineString";I=new s.c({source:O,type:n,style:new w.c({fill:new f.a({color:"rgba(255, 255, 255, 0.2)"}),stroke:new g.a({color:"rgba(0, 0, 0, 0.5)",lineDash:[10,10],width:2}),image:new m.a({radius:5,stroke:new g.a({color:"rgba(0, 0, 0, 0.7)"}),fill:new f.a({color:"rgba(255, 255, 255, 0.2)"})})})}),N.addInteraction(I),G(),function(){a&&a.parentNode.removeChild(a);(a=document.createElement("div")).className="ol-tooltip hidden",i=new d.a({element:a,offset:[15,0],positioning:"center-left"}),N.addOverlay(i)}(),I.on("drawstart",(function(n){o=n.feature;var t=n.coordinate;e=o.getGeometry().on("change",(function(e){var n,o,a,i,s,l=e.target;l instanceof p.b?(i=l,n=(s=Object(C.a)(i))>1e4?Math.round(s/1e6*100)/100+" km<sup>2</sup>":Math.round(100*s)/100+" m<sup>2</sup>",t=l.getInteriorPoint().getCoordinates()):l instanceof v.a&&(o=l,n=(a=Object(C.c)(o))>100?Math.round(a/1e3*100)/100+" km":Math.round(100*a)/100+" m",t=l.getLastCoordinate()),r.innerHTML=n,c.setPosition(t)}))})),I.on("drawend",(function(){r.className="ol-tooltip ol-tooltip-static",c.setOffset([0,-7]),o=null,r=null,G(),Object(L.b)(e)}))}function G(){r&&r.parentNode.removeChild(r),(r=document.createElement("div")).className="ol-tooltip ol-tooltip-measure",c=new d.a({element:r,offset:[0,-15],positioning:"bottom-center",stopEvent:!1,insertFirst:!1}),N.addOverlay(c)}P.onchange=function(){N.removeInteraction(I),j()},j()}},[[328,0]]]);
//# sourceMappingURL=measure.js.map