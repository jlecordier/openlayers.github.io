"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8818],{9015:function(e,t,r){var i=r(4686),s=r(2010),n=r(4354),o=r(9847),a=r(2954),c=r(2514),p=r(6923),l=r(2990),h=r(7877),u=r(5162);class g extends a.Z{constructor(e){super({attributions:(e=e||{}).attributions,cacheSize:e.cacheSize,crossOrigin:e.crossOrigin,interpolate:e.interpolate,projection:e.projection,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileGrid:e.tileGrid,tileLoadFunction:e.tileLoadFunction,url:e.url,urls:e.urls,wrapX:void 0===e.wrapX||e.wrapX,transition:e.transition,zDirection:e.zDirection}),this.params_=e.params||{},this.hidpi_=void 0===e.hidpi||e.hidpi,this.tmpExtent_=(0,p.lJ)(),this.setKey(this.getKeyForParams_())}getKeyForParams_(){let e=0;const t=[];for(const r in this.params_)t[e++]=r+"-"+this.params_[r];return t.join("/")}getParams(){return this.params_}getRequestUrl_(e,t,r,i,s,n){const o=this.urls;if(!o)return;const a=s.getCode().split(/:(?=\d+$)/).pop();let p;if(n.SIZE=t[0]+","+t[1],n.BBOX=r.join(","),n.BBOXSR=a,n.IMAGESR=a,n.DPI=Math.round(n.DPI?n.DPI*i:90*i),1==o.length)p=o[0];else{p=o[(0,l.$W)((0,u.vp)(e),o.length)]}const h=p.replace(/MapServer\/?$/,"MapServer/export").replace(/ImageServer\/?$/,"ImageServer/exportImage");return(0,c.B)(h,n)}getTilePixelRatio(e){return this.hidpi_?e:1}updateParams(e){Object.assign(this.params_,e),this.setKey(this.getKeyForParams_())}tileUrlFunction(e,t,r){let i=this.getTileGrid();if(i||(i=this.getTileGridForProjection(r)),i.getResolutions().length<=e[0])return;1==t||this.hidpi_||(t=1);const s=i.getTileCoordExtent(e,this.tmpExtent_);let n=(0,h.Pq)(i.getTileSize(e[0]),this.tmpSize);1!=t&&(n=(0,h.bA)(n,t,this.tmpSize));const o={F:"image",FORMAT:"PNG32",TRANSPARENT:!0};return Object.assign(o,this.params_),this.getRequestUrl_(e,n,s,t,r,o)}}var m=g;const d=[new s.Z({source:new o.Z}),new s.Z({extent:[-13884991,2870341,-7455066,6338219],source:new m({url:"https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Specialty/ESRI_StateCityHighway_USA/MapServer"})})];new i.Z({layers:d,target:"map",view:new n.ZP({center:[-10997148,4569099],zoom:4})})}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(9015)}]);
//# sourceMappingURL=arcgis-tiled.js.map