"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1671],{7567:function(e,n,o){var t=o(5877),r=o(4686),a=o(2139),s=o(4354);function l(e){return["/",e,3e3]}const c=l(["band",1]),u=l(["band",2]),i=l(["band",3]),d=l(["band",4]),m={color:["array",c,u,i,1],gamma:1.1},f={color:["array",d,c,u,1],gamma:1.1},b={color:["interpolate",["linear"],["/",["-",d,c],["+",d,c]],-.2,[191,191,191],-.1,[219,219,219],0,[255,255,224],.025,[255,250,204],.05,[237,232,181],.075,[222,217,156],.1,[204,199,130],.125,[189,184,107],.15,[176,194,97],.175,[163,204,89],.2,[145,191,82],.25,[128,179,71],.3,[112,163,64],.35,[97,150,54],.4,[79,138,46],.45,[64,125,36],.5,[48,110,28],.55,[33,97,18],.6,[15,84,10],.65,[0,69,0]]},w=new a.Z({style:m,source:new t.Z({normalize:!1,sources:[{url:"https://s2downloads.eox.at/demo/EOxCloudless/2020/rgbnir/s2cloudless2020-16bits_sinlge-file_z0-4.tif"}]})}),g=(new r.Z({target:"map",layers:[w],view:new s.ZP({projection:"EPSG:4326",center:[0,0],zoom:2,maxZoom:6})}),{trueColor:m,falseColor:f,ndvi:b}),p=document.getElementById("style");p.addEventListener("change",(function(){const e=g[p.value];w.setStyle(e)}))}},function(e){var n=function(n){return e(e.s=n)};n(9877),n(7567)}]);
//# sourceMappingURL=cog-style.js.map