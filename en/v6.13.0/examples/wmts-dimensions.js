"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4194],{614:function(e,t,n){for(var a=n(1376),r=n(9847),s=n(2010),o=n(4354),i=n(5975),l=n(4016),c=n(2810),d=n(6923),u=(0,c.U2)("EPSG:3857"),m=(0,d.dz)(u.getExtent())/256,h=[],g=[],p=0;p<=14;p++)h[p]=p,g[p]=m/Math.pow(2,p);var f=new l.Z({origin:(0,d.rL)(u.getExtent()),resolutions:g,matrixIds:h}),w=new i.Z({url:"https://ts2.scalgo.com/olpatch/wmts?token=CC5BF28A7D96B320C7DFBFD1236B5BEB",layer:"SRTM_4_1:SRTM_4_1_flooded_sealevels",format:"image/png",matrixSet:"EPSG:3857",attributions:['<a href="https://scalgo.com" target="_blank">SCALGO</a>','<a href="https://cgiarcsi.community/data/srtm-90m-digital-elevation-database-v4-1" target="_blank">CGIAR-CSI SRTM</a>'],tileGrid:f,style:"default",dimensions:{threshold:100}}),v=(new a.Z({target:"map",view:new o.ZP({projection:u,center:[-9871995,3566245],zoom:6}),layers:[new s.Z({source:new r.Z}),new s.Z({opacity:.5,source:w})]}),document.getElementById("slider")),E=function(){w.updateDimensions({threshold:v.value}),document.getElementById("theinfo").innerHTML=v.value+" meters"};v.addEventListener("input",E),v.addEventListener("change",E),E()}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(614)}]);
//# sourceMappingURL=wmts-dimensions.js.map