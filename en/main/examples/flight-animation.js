(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{277:function(e,t,n){"use strict";n.r(t);var r=n(17),a=n(36),o=n(3),i=n(63),s=n(10),f=n(2),w=n(11),h=n(16),c=n(5),g=n(19),l=n(51),d=new c.a({source:new i.a({layer:"toner"})}),u=new o.a({layers:[d],target:"map",view:new f.a({center:[0,0],zoom:2})}),m=new w.c({stroke:new h.a({color:"#EAE911",width:2})}),p=new s.a({wrapX:!1,attributions:'Flight data by <a href="https://openflights.org/data.html">OpenFlights</a>,',loader:function(){fetch("data/openflights/flights.json").then((function(e){return e.json()})).then((function(e){for(var t=e.flights,n=0;n<t.length;n++){var o=t[n],i=o[0],s=o[1],f=new arc.GreatCircle({x:i[1],y:i[0]},{x:s[1],y:s[0]}).Arc(100,{offset:10});if(1===f.geometries.length){var w=new a.a(f.geometries[0].coords);w.transform("EPSG:4326","EPSG:3857"),b(new r.a({geometry:w,finished:!1}),50*n)}}d.on("postrender",v)}))}}),y=new g.a({source:p,style:function(e){return e.get("finished")?m:null}});u.addLayer(y);function v(e){var t=Object(l.b)(e),n=e.frameState;t.setStyle(m);for(var r=p.getFeatures(),o=0;o<r.length;o++){var i=r[o];if(!i.get("finished")){var s=i.getGeometry().getCoordinates(),f=.1*(n.time-i.get("start"));f>=s.length&&i.set("finished",!0);var w=Math.min(f,s.length),h=new a.a(s.slice(0,w));t.drawGeometry(h)}}u.render()}function b(e,t){window.setTimeout((function(){e.set("start",(new Date).getTime()),p.addFeature(e)}),t)}}},[[277,0]]]);
//# sourceMappingURL=flight-animation.js.map