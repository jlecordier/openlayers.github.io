(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{377:function(e,t,o){"use strict";o.r(t);var n=o(3),r=o(2),a=o(1),w=o(36),c=o(21),i=o(13),l=o(14),s=o(73),f=o(25),g=o(19),u=new n.a({target:"map",view:new r.a({center:[0,0],zoom:1})}),d=new l.c({geometry:function(e){var t=e.getGeometry();if("MultiPolygon"==t.getType())for(var o=t.getPolygons(),n=0,r=0,w=o.length;r<w;++r){var c=o[r],i=Object(a.E)(c.getExtent());i>n&&(n=i,t=c)}return t},text:new s.a({font:"12px Calibri,sans-serif",overflow:!0,fill:new f.a({color:"#000"}),stroke:new g.a({color:"#fff",width:3})})}),p=[new l.c({fill:new f.a({color:"rgba(255, 255, 255, 0.6)"}),stroke:new g.a({color:"#319FD3",width:1})}),d],y=new c.a({source:new i.a({url:"data/geojson/countries.geojson",format:new w.a}),style:function(e){return d.getText().setText(e.get("name")),p},declutter:!0});u.addLayer(y)}},[[377,0]]]);
//# sourceMappingURL=vector-label-decluttering.js.map