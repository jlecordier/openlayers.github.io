"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2969],{8810:function(e,t,n){var o=n(2739),a=n(1376),r=n(492),s=n(5469),i=n(6166),c=n(5783),l=n(4354),u=n(9039),m=n(4598),p=n(729),g=n(2010),h=n(1372),v=n(2810),w=n(8164),d=new g.Z({source:new i.Z({url:"https://a.tiles.mapbox.com/v3/aj.1x1-degrees.json?secure=1",crossOrigin:""})}),Z=new o.Z({geometry:new s.Z((0,v.mi)([0,-10])),name:"Fish.1"}),f=new o.Z({geometry:new s.Z((0,v.mi)([0,-10])),name:"Fish.1 Island"}),I=new o.Z({geometry:new s.Z((0,v.mi)([-30,10])),name:"Fish.2 Island"}),x=new u.ZP({image:new m.Z({anchor:[.5,.9],src:"data/fish.png",crossOrigin:"",scale:[0,0],rotation:Math.PI/4}),text:new p.Z({text:"FISH\nTEXT",scale:[0,0],rotation:Math.PI/4,textAlign:"center",textBaseline:"top"})}),P=0,M=45;Z.setStyle((function(){var e=3*Math.sin(P*Math.PI/180),t=4*Math.sin(M*Math.PI/180);return x.getImage().setScale([e,t]),x.getText().setScale([e,t]),x})),d.on("postrender",(function(e){var t=(0,w.u3)(e),n=3*Math.cos(P*Math.PI/180),o=4*Math.cos(M*Math.PI/180);x.getImage().setScale([n,o]),x.getText().setScale([n,o]),t.drawFeature(I,x)}));var y=new c.Z({features:[Z,f,I]}),E=new h.Z({source:y}),F=new a.Z({layers:[d,E],target:document.getElementById("map"),view:new l.ZP({center:(0,v.mi)([-15,0]),zoom:3})});setInterval((function(){P=(P+4)%360,M=(M+5)%360,y.changed()}),1e3);var S=document.getElementById("popup"),k=new r.Z({element:S,positioning:"bottom-center",stopEvent:!1});F.addOverlay(k),F.on("click",(function(e){var t=F.forEachFeatureAtPixel(e.pixel,(function(e){return e}));$(S).popover("dispose"),t&&(k.setPosition(e.coordinate),$(S).popover({placement:"top",html:!0,animation:!1,content:t.get("name")}),$(S).popover("show"))})),F.on("pointermove",(function(e){var t=F.getEventPixel(e.originalEvent),n=F.hasFeatureAtPixel(t);F.getTarget().style.cursor=n?"pointer":""})),F.on("movestart",(function(){$(S).popover("dispose")}))}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(8810)}]);
//# sourceMappingURL=icon-scale.js.map