(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{315:function(e,t,n){"use strict";n.r(t);var o=n(3),r=n(2),a=n(102),i=n(5),p=n(21),c=n(29),l=n(11),s=new i.a({source:new c.a({attributions:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',url:"https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=get_your_own_D6rA4zTHduk6KOKTXzGB",maxZoom:20})}),u=new p.a({source:new l.a({url:"data/kml/2012-02-10.kml",format:new a.a})}),g=new o.a({layers:[s,u],target:document.getElementById("map"),view:new r.a({center:[876970.8463461736,5859807.853963373],projection:"EPSG:3857",zoom:10})}),w=function(e){var t=[];if(g.forEachFeatureAtPixel(e,(function(e){t.push(e)})),t.length>0){var n,o,r=[];for(n=0,o=t.length;n<o;++n)r.push(t[n].get("name"));document.getElementById("info").innerHTML=r.join(", ")||"(unknown)",g.getTarget().style.cursor="pointer"}else document.getElementById("info").innerHTML="&nbsp;",g.getTarget().style.cursor=""};g.on("pointermove",(function(e){if(!e.dragging){var t=g.getEventPixel(e.originalEvent);w(t)}})),g.on("click",(function(e){w(e.pixel)}))}},[[315,0]]]);
//# sourceMappingURL=kml.js.map