"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8511],{5691:function(e,t,n){var a=n(9619),o=n(1055),r=n(7051),i=n(6692),s=n(5277),c=n(4711),g=n(824),u=n(677),h=n(1652),w=n(2893),l=n(1733);function d(e,t){return new u.ZP({image:new h.Z({anchor:[.5,.96],crossOrigin:"anonymous",src:e,img:t,imgSize:t?[t.width,t.height]:void 0})})}const m=new a.Z(new r.Z([0,0]));m.set("style",d("data/icon.png",void 0));const f=new o.Z({layers:[new w.Z({source:new s.Z({layer:"watercolor"})}),new l.Z({style:function(e){return e.get("style")},source:new c.Z({features:[m]})})],target:document.getElementById("map"),view:new g.ZP({center:[0,0],zoom:3})}),Z={},y=new i.Z({style:function(e){const t=e.get("style").getImage().getImage();if(!Z[t.src]){const e=document.createElement("canvas"),n=e.getContext("2d");e.width=t.width,e.height=t.height,n.drawImage(t,0,0,t.width,t.height);const a=n.getImageData(0,0,e.width,e.height),o=a.data;for(let e=0,t=o.length;e<t;e+=e%4==2?2:1)o[e]=255-o[e];n.putImageData(a,0,0),Z[t.src]=d(void 0,e)}return Z[t.src]}});f.addInteraction(y),f.on("pointermove",(function(e){f.getTargetElement().style.cursor=f.hasFeatureAtPixel(e.pixel)?"pointer":""}))}},function(e){var t;t=5691,e(e.s=t)}]);
//# sourceMappingURL=icon-negative.js.map