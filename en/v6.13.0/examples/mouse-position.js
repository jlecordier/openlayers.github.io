"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7424],{7679:function(e,t,n){var o=n(1376),r=n(7145),c=n(9847),a=n(2010),s=n(4354),i=n(2932),u=n(5830),m=new r.Z({coordinateFormat:(0,i.Fj)(4),projection:"EPSG:4326",className:"custom-mouse-position",target:document.getElementById("mouse-position")});new o.Z({controls:(0,u.ce)().extend([m]),layers:[new a.Z({source:new c.Z})],target:"map",view:new s.ZP({center:[0,0],zoom:2})});document.getElementById("projection").addEventListener("change",(function(e){m.setProjection(e.target.value)})),document.getElementById("precision").addEventListener("change",(function(e){var t=(0,i.Fj)(e.target.valueAsNumber);m.setCoordinateFormat(t)}))}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(7679)}]);
//# sourceMappingURL=mouse-position.js.map