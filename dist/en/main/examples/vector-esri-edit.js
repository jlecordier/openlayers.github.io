"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5621],{6869:function(e,t,s){var r=s(890),n=s(4686),o=s(5783),c=s(4354),i=s(1998),a=s(1038),u=s(2110),l=s(4498),d=s(6211),p=s(1372),f=s(2010),g=s(9352),m=s(2810),v=s(2383);const w="https://sampleserver6.arcgisonline.com/arcgis/rest/services/Wildfire/FeatureServer/",y=new r.Z,R=new o.Z({loader:function(e,t,s){const r=w+"2/query/?f=json&returnGeometry=true&spatialRel=esriSpatialRelIntersects&geometry="+encodeURIComponent('{"xmin":'+e[0]+',"ymin":'+e[1]+',"xmax":'+e[2]+',"ymax":'+e[3]+',"spatialReference":{"wkid":102100}}')+"&geometryType=esriGeometryEnvelope&inSR=102100&outFields=*&outSR=102100";$.ajax({url:r,dataType:"jsonp",success:function(e){if(e.error)alert(e.error.message+"\n"+e.error.details.join("\n"));else{const t=y.readFeatures(e,{featureProjection:s});t.length>0&&R.addFeatures(t)}}})},strategy:(0,v.Gg)((0,g.dl)({tileSize:512}))}),j=new p.Z({source:R}),h=new f.Z({source:new i.Z({attributions:'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer">ArcGIS</a>',url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"})}),S=new a.ZP({source:R,type:"Polygon"}),F=new u.Z;F.setActive(!1);const I=F.getFeatures(),Z=new l.Z({features:I});Z.setActive(!1);const A=new n.Z({interactions:(0,d.c)().extend([S,F,Z]),layers:[h,j],target:document.getElementById("map"),view:new c.ZP({center:(0,m.mi)([-110.875,37.345]),zoom:5})}),P=document.getElementById("type");P.onchange=function(){S.setActive("DRAW"===P.value),F.setActive("MODIFY"===P.value),Z.setActive("MODIFY"===P.value)};const b={};I.on("add",(function(e){e.element.on("change",(function(e){b[e.target.get("objectid")]=!0}))})),I.on("remove",(function(e){const t=e.element,s=t.get("objectid");if(!0===b[s]){const e="["+y.writeFeature(t,{featureProjection:A.getView().getProjection()})+"]",r=w+"2/updateFeatures";$.post(r,{f:"json",features:e}).done((function(e){const t="string"==typeof e?JSON.parse(e):e;if(t.updateResults&&t.updateResults.length>0)if(!0!==t.updateResults[0].success){const e=t.updateResults[0].error;alert(e.description+" ("+e.code+")")}else delete b[s]}))}})),S.on("drawend",(function(e){const t=e.feature,s="["+y.writeFeature(t,{featureProjection:A.getView().getProjection()})+"]";$.post("https://sampleserver6.arcgisonline.com/arcgis/rest/services/Wildfire/FeatureServer/2/addFeatures",{f:"json",features:s}).done((function(e){const s="string"==typeof e?JSON.parse(e):e;if(s.addResults&&s.addResults.length>0)if(!0===s.addResults[0].success)t.set("objectid",s.addResults[0].objectId);else{const e=s.addResults[0].error;alert(e.description+" ("+e.code+")")}}))}))}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(6869)}]);
//# sourceMappingURL=vector-esri-edit.js.map