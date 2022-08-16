"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2910],{1831:function(t,e,i){var s=i(4686),n=i(492),o=i(6166),r=i(2010),a=i(6566),h=i(1001),l=i(3248),d=i(542),c=i(6923),u=i(776),_=i(5059),p=i(9352),g=i(5162),m=i(2810),f=i(2016),E=i(574);class v extends h.Z{constructor(t,e,i,s,n,o){super(t,e),this.src_=i,this.extent_=s,this.preemptive_=n,this.grid_=null,this.keys_=null,this.data_=null,this.jsonp_=o}getImage(){return null}getData(t){if(!this.grid_||!this.keys_)return null;const e=(t[0]-this.extent_[0])/(this.extent_[2]-this.extent_[0]),i=(t[1]-this.extent_[1])/(this.extent_[3]-this.extent_[1]),s=this.grid_[Math.floor((1-i)*this.grid_.length)];if("string"!=typeof s)return null;let n=s.charCodeAt(Math.floor(e*s.length));n>=93&&n--,n>=35&&n--,n-=32;let o=null;if(n in this.keys_){const t=this.keys_[n];o=this.data_&&t in this.data_?this.data_[t]:t}return o}forDataAtCoordinate(t,e,i){this.state==d.Z.EMPTY&&!0===i?(this.state=d.Z.IDLE,(0,f.Vx)(this,a.Z.CHANGE,(function(i){e(this.getData(t))}),this),this.loadInternal_()):!0===i?setTimeout(function(){e(this.getData(t))}.bind(this),0):e(this.getData(t))}getKey(){return this.src_}handleError_(){this.state=d.Z.ERROR,this.changed()}handleLoad_(t){this.grid_=t.grid,this.keys_=t.keys,this.data_=t.data,this.state=d.Z.LOADED,this.changed()}loadInternal_(){if(this.state==d.Z.IDLE)if(this.state=d.Z.LOADING,this.jsonp_)(0,E.R6)(this.src_,this.handleLoad_.bind(this),this.handleError_.bind(this));else{const t=new XMLHttpRequest;t.addEventListener("load",this.onXHRLoad_.bind(this)),t.addEventListener("error",this.onXHRError_.bind(this)),t.open("GET",this.src_),t.send()}}onXHRLoad_(t){const e=t.target;if(!e.status||e.status>=200&&e.status<300){let t;try{t=JSON.parse(e.responseText)}catch(t){return void this.handleError_()}this.handleLoad_(t)}else this.handleError_()}onXHRError_(t){this.handleError_()}load(){this.preemptive_?this.loadInternal_():this.setState(d.Z.EMPTY)}}class T extends l.Z{constructor(t){if(super({projection:(0,m.U2)("EPSG:3857"),state:"loading",zDirection:t.zDirection}),this.preemptive_=void 0===t.preemptive||t.preemptive,this.tileUrlFunction_=_.vU,this.template_=void 0,this.jsonp_=t.jsonp||!1,t.url)if(this.jsonp_)(0,E.R6)(t.url,this.handleTileJSONResponse.bind(this),this.handleTileJSONError.bind(this));else{const e=new XMLHttpRequest;e.addEventListener("load",this.onXHRLoad_.bind(this)),e.addEventListener("error",this.onXHRError_.bind(this)),e.open("GET",t.url),e.send()}else t.tileJSON?this.handleTileJSONResponse(t.tileJSON):(0,u.h)(!1,51)}onXHRLoad_(t){const e=t.target;if(!e.status||e.status>=200&&e.status<300){let t;try{t=JSON.parse(e.responseText)}catch(t){return void this.handleTileJSONError()}this.handleTileJSONResponse(t)}else this.handleTileJSONError()}onXHRError_(t){this.handleTileJSONError()}getTemplate(){return this.template_}forDataAtCoordinateAndResolution(t,e,i,s){if(this.tileGrid){const n=this.tileGrid.getZForResolution(e,this.zDirection),o=this.tileGrid.getTileCoordForCoordAndZ(t,n);this.getTile(o[0],o[1],o[2],1,this.getProjection()).forDataAtCoordinate(t,i,s)}else!0===s?setTimeout((function(){i(null)}),0):i(null)}handleTileJSONError(){this.setState("error")}handleTileJSONResponse(t){const e=(0,m.U2)("EPSG:4326"),i=this.getProjection();let s;if(void 0!==t.bounds){const n=(0,m.WO)(e,i);s=(0,c.Ne)(t.bounds,n)}const n=(0,p.Tl)(i),o=t.minzoom||0,r=t.maxzoom||22,a=(0,p.dl)({extent:n,maxZoom:r,minZoom:o});this.tileGrid=a,this.template_=t.template;const h=t.grids;if(h){if(this.tileUrlFunction_=(0,_.uR)(h,a),void 0!==t.attribution){const e=void 0!==s?s:n;this.setAttributions((function(i){return(0,c.kK)(e,i.extent)?[t.attribution]:null}))}this.setState("ready")}else this.setState("error")}getTile(t,e,i,s,n){const o=(0,g.lg)(t,e,i);if(this.tileCache.containsKey(o))return this.tileCache.get(o);{const r=[t,e,i],a=this.getTileCoordForTileUrlFunction(r,n),h=this.tileUrlFunction_(a,s,n),l=new v(r,void 0!==h?d.Z.IDLE:d.Z.EMPTY,void 0!==h?h:"",this.tileGrid.getTileCoordExtent(r),this.preemptive_,this.jsonp_);return this.tileCache.set(o,l),l}}useTile(t,e,i){const s=(0,g.lg)(t,e,i);this.tileCache.containsKey(s)&&this.tileCache.get(s)}}var y=T,b=i(4354);const R="pk.eyJ1IjoiYWhvY2V2YXIiLCJhIjoiY2t0cGdwMHVnMGdlbzMxbDhwazBic2xrNSJ9.WbcTL9uj8JPAsnT9mgb7oQ",x=new r.Z({source:new o.Z({url:"https://api.tiles.mapbox.com/v4/mapbox.geography-class.json?secure&access_token="+R})}),Z=new y({url:"https://api.tiles.mapbox.com/v4/mapbox.geography-class.json?secure&access_token="+R}),L=new r.Z({source:Z}),S=new b.ZP({center:[0,0],zoom:1}),C=document.getElementById("map"),D=new s.Z({layers:[x,L],target:C,view:S}),O=document.getElementById("country-info"),J=document.getElementById("country-flag"),N=document.getElementById("country-name"),k=new n.Z({element:O,offset:[15,15],stopEvent:!1});D.addOverlay(k);const w=function(t){const e=S.getResolution();Z.forDataAtCoordinateAndResolution(t,e,(function(e){C.style.cursor=e?"pointer":"",e&&(J.src="data:image/png;base64,"+e.flag_png,N.innerHTML=e.admin),k.setPosition(e?t:void 0)}))};D.on("pointermove",(function(t){if(t.dragging)return;const e=D.getEventCoordinate(t.originalEvent);w(e)})),D.on("click",(function(t){w(t.coordinate)}))}},function(t){var e=function(e){return t(t.s=e)};e(9877),e(1831)}]);
//# sourceMappingURL=utfgrid.js.map