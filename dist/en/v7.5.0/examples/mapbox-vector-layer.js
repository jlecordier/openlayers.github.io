"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6423],{9006:function(e,s,t){var r=t(1055),n=t(6747),o=t(2486),a=t(4050),i=t(4613),c=t(2065),l=t(7821);class d extends n.ZP{constructor(e){super(o.Z.ERROR),this.error=e}}class u extends i.Z{constructor(e){const s=!("declutter"in e)||e.declutter,t=new c.Z({state:"loading",format:new a.Z});super({source:t,background:e.background,declutter:s,className:e.className,opacity:e.opacity,visible:e.visible,zIndex:e.zIndex,minResolution:e.minResolution,maxResolution:e.maxResolution,minZoom:e.minZoom,maxZoom:e.maxZoom,renderOrder:e.renderOrder,renderBuffer:e.renderBuffer,renderMode:e.renderMode,map:e.map,updateWhileAnimating:e.updateWhileAnimating,updateWhileInteracting:e.updateWhileInteracting,preload:e.preload,useInterimTilesOnError:e.useInterimTilesOnError,properties:e.properties}),e.accessToken&&(this.accessToken=e.accessToken);const r=e.styleUrl;(0,l.bg)(this,r,e.layers||e.source,{accessToken:this.accessToken}).then((()=>{t.setState("ready")})).catch((e=>{this.dispatchEvent(new d(e));this.getSource().setState("error")})),void 0===this.getBackground()&&(0,l.h0)(this,e.styleUrl,{accessToken:this.accessToken})}}var m=u,h=t(824);new r.Z({target:"map",layers:[new m({styleUrl:"mapbox://styles/mapbox/bright-v9",accessToken:"pk.eyJ1IjoiYWhvY2V2YXIiLCJhIjoiY2t0cGdwMHVnMGdlbzMxbDhwazBic2xrNSJ9.WbcTL9uj8JPAsnT9mgb7oQ"})],view:new h.ZP({center:[0,0],zoom:2})})}},function(e){var s;s=9006,e(e.s=s)}]);
//# sourceMappingURL=mapbox-vector-layer.js.map