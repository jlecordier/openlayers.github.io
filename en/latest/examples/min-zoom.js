"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6628],{39056:function(e,n,t){var r=t(33156),a=t(19987),o=t(86395),i=t(29123),c=document.getElementById("map");function u(){var e=c.clientWidth;return Math.ceil(Math.LOG2E*Math.log(e/256))}var s=u(),w=new i.ZP({center:[0,0],minZoom:s,zoom:s});new r.Z({layers:[new o.Z({source:new a.Z})],target:"map",view:w});window.addEventListener("resize",(function(){var e=u();e!==w.getMinZoom()&&w.setMinZoom(e)}))}},function(e){var n;n=39056,e(e.s=n)}]);
//# sourceMappingURL=min-zoom.js.map