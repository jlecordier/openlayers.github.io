"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6856],{3703:function(e,r,n){var t=n(890),o=n(4686),s=n(5783),i=n(4354),l=n(1998),c=n(9039),a=n(7975),u=n(720),g=n(1372),p=n(2010),f=n(9352),w=n(2810),d=n(2383);const m=new t.Z,Z={ABANDONED:new c.ZP({fill:new a.Z({color:"rgba(225, 225, 225, 255)"}),stroke:new u.Z({color:"rgba(0, 0, 0, 255)",width:.4})}),GAS:new c.ZP({fill:new a.Z({color:"rgba(255, 0, 0, 255)"}),stroke:new u.Z({color:"rgba(110, 110, 110, 255)",width:.4})}),OIL:new c.ZP({fill:new a.Z({color:"rgba(56, 168, 0, 255)"}),stroke:new u.Z({color:"rgba(110, 110, 110, 255)",width:0})}),OILGAS:new c.ZP({fill:new a.Z({color:"rgba(168, 112, 0, 255)"}),stroke:new u.Z({color:"rgba(110, 110, 110, 255)",width:.4})})},y=new s.Z({loader:function(e,r,n,t,o){const s="https://sampleserver3.arcgisonline.com/ArcGIS/rest/services/Petroleum/KSFields/FeatureServer/0/query/?f=json&returnGeometry=true&spatialRel=esriSpatialRelIntersects&geometry="+encodeURIComponent('{"xmin":'+e[0]+',"ymin":'+e[1]+',"xmax":'+e[2]+',"ymax":'+e[3]+',"spatialReference":{"wkid":102100}}')+"&geometryType=esriGeometryEnvelope&inSR=102100&outFields=*&outSR=102100";$.ajax({url:s,dataType:"jsonp",success:function(e){if(e.error)alert(e.error.message+"\n"+e.error.details.join("\n")),o();else{const r=m.readFeatures(e,{featureProjection:n});r.length>0&&y.addFeatures(r),t(r)}},error:o})},strategy:(0,d.Gg)((0,f.dl)({tileSize:512}))}),h=new g.Z({source:y,style:function(e){const r=e.get("activeprod");return Z[r]}}),v=new p.Z({source:new l.Z({attributions:'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer">ArcGIS</a>',url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"})}),S=new o.Z({layers:[v,h],target:document.getElementById("map"),view:new i.ZP({center:(0,w.mi)([-97.6114,38.8403]),zoom:7})}),b=function(e){const r=[];if(S.forEachFeatureAtPixel(e,(function(e){r.push(e)})),r.length>0){const e=[];let n,t;for(n=0,t=r.length;n<t;++n)e.push(r[n].get("field_name"));document.getElementById("info").innerHTML=e.join(", ")||"(unknown)",S.getTarget().style.cursor="pointer"}else document.getElementById("info").innerHTML="&nbsp;",S.getTarget().style.cursor=""};S.on("pointermove",(function(e){if(e.dragging)return;const r=S.getEventPixel(e.originalEvent);b(r)})),S.on("click",(function(e){b(e.pixel)}))}},function(e){var r=function(r){return e(e.s=r)};r(9877),r(3703)}]);
//# sourceMappingURL=vector-esri.js.map