"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8818],{9015:function(e,t,r){var n=r(1376),o=r(2010),i=r(4354),a=r(2954),u=r(2514),c=r(2275),s=r(6923),l=r(2990),p=r(7877),f=r(5162);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=g(e);if(t){var o=g(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return d(this,r)}}function d(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(i,e);var t,r,n,o=m(i);function i(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);var r=e||{},n=void 0===r.imageSmoothing||r.imageSmoothing;return void 0!==r.interpolate&&(n=r.interpolate),(t=o.call(this,{attributions:r.attributions,cacheSize:r.cacheSize,crossOrigin:r.crossOrigin,interpolate:n,projection:r.projection,reprojectionErrorThreshold:r.reprojectionErrorThreshold,tileGrid:r.tileGrid,tileLoadFunction:r.tileLoadFunction,url:r.url,urls:r.urls,wrapX:void 0===r.wrapX||r.wrapX,transition:r.transition,zDirection:r.zDirection})).params_=r.params||{},t.hidpi_=void 0===r.hidpi||r.hidpi,t.tmpExtent_=(0,s.lJ)(),t.setKey(t.getKeyForParams_()),t}return t=i,(r=[{key:"getKeyForParams_",value:function(){var e=0,t=[];for(var r in this.params_)t[e++]=r+"-"+this.params_[r];return t.join("/")}},{key:"getParams",value:function(){return this.params_}},{key:"getRequestUrl_",value:function(e,t,r,n,o,i){var a=this.urls;if(a){var c=o.getCode().split(/:(?=\d+$)/).pop();i.SIZE=t[0]+","+t[1],i.BBOX=r.join(","),i.BBOXSR=c,i.IMAGESR=c,i.DPI=Math.round(i.DPI?i.DPI*n:90*n);var s=(1==a.length?a[0]:a[(0,l.$W)((0,f.vp)(e),a.length)]).replace(/MapServer\/?$/,"MapServer/export").replace(/ImageServer\/?$/,"ImageServer/exportImage");return(0,u.B)(s,i)}}},{key:"getTilePixelRatio",value:function(e){return this.hidpi_?e:1}},{key:"updateParams",value:function(e){(0,c.f0)(this.params_,e),this.setKey(this.getKeyForParams_())}},{key:"tileUrlFunction",value:function(e,t,r){var n=this.getTileGrid();if(n||(n=this.getTileGridForProjection(r)),!(n.getResolutions().length<=e[0])){1==t||this.hidpi_||(t=1);var o=n.getTileCoordExtent(e,this.tmpExtent_),i=(0,p.Pq)(n.getTileSize(e[0]),this.tmpSize);1!=t&&(i=(0,p.bA)(i,t,this.tmpSize));var a={F:"image",FORMAT:"PNG32",TRANSPARENT:!0};return(0,c.f0)(a,this.params_),this.getRequestUrl_(e,i,o,t,r,a)}}}])&&y(t.prototype,r),n&&y(t,n),Object.defineProperty(t,"prototype",{writable:!1}),i}(a.Z),S=r(9847),_=[new o.Z({source:new S.Z}),new o.Z({extent:[-13884991,2870341,-7455066,6338219],source:new b({url:"https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Specialty/ESRI_StateCityHighway_USA/MapServer"})})];new n.Z({layers:_,target:"map",view:new i.ZP({center:[-10997148,4569099],zoom:4})})}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(9015)}]);
//# sourceMappingURL=arcgis-tiled.js.map