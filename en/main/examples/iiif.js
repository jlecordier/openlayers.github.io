(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{425:function(e,i,t){"use strict";t.r(i);var o=t(82),r=t(89),n=t(196),a=t(124),s=t(22),l=t(13),f="version1",u="version2",g="version3",p={};p[f]={level0:{supports:[],formats:[],qualities:["native"]},level1:{supports:["regionByPx","sizeByW","sizeByH","sizeByPct"],formats:["jpg"],qualities:["native"]},level2:{supports:["regionByPx","regionByPct","sizeByW","sizeByH","sizeByPct","sizeByConfinedWh","sizeByWh"],formats:["jpg","png"],qualities:["native","color","grey","bitonal"]}},p[u]={level0:{supports:[],formats:["jpg"],qualities:["default"]},level1:{supports:["regionByPx","sizeByW","sizeByH","sizeByPct"],formats:["jpg"],qualities:["default"]},level2:{supports:["regionByPx","regionByPct","sizeByW","sizeByH","sizeByPct","sizeByConfinedWh","sizeByDistortedWh","sizeByWh"],formats:["jpg","png"],qualities:["default","bitonal"]}},p[g]={level0:{supports:[],formats:["jpg"],qualities:["default"]},level1:{supports:["regionByPx","regionSquare","sizeByW","sizeByH","sizeByWh"],formats:["jpg"],qualities:["default"]},level2:{supports:["regionByPx","regionSquare","regionByPct","sizeByW","sizeByH","sizeByPct","sizeByConfinedWh","sizeByWh"],formats:["jpg","png"],qualities:["default"]}},p.none={none:{supports:[],formats:[],qualities:[]}};var m=/^https?:\/\/library\.stanford\.edu\/iiif\/image-api\/(?:1\.1\/)?compliance\.html#level[0-2]$/,c=/^https?:\/\/iiif\.io\/api\/image\/2\/level[0-2](?:\.json)?$/,h=/(^https?:\/\/iiif\.io\/api\/image\/3\/level[0-2](?:\.json)?$)|(^level[0-2]$)/;var v={};v[f]=function(e){var i=e.getComplianceLevelSupportedFeatures();return void 0===i&&(i=p[f].level0),{url:void 0===e.imageInfo["@id"]?void 0:e.imageInfo["@id"].replace(/\/?(?:info\.json)?$/g,""),supports:i.supports,formats:i.formats.concat([void 0===e.imageInfo.formats?[]:e.imageInfo.formats]),qualities:i.qualities.concat([void 0===e.imageInfo.qualities?[]:e.imageInfo.qualities]),resolutions:e.imageInfo.scale_factors,tileSize:void 0!==e.imageInfo.tile_width?void 0!==e.imageInfo.tile_height?[e.imageInfo.tile_width,e.imageInfo.tile_height]:[e.imageInfo.tile_width,e.imageInfo.tile_width]:null!=e.imageInfo.tile_height?[e.imageInfo.tile_height,e.imageInfo.tile_height]:void 0}},v[u]=function(e){var i=e.getComplianceLevelSupportedFeatures(),t=Array.isArray(e.imageInfo.profile)&&e.imageInfo.profile.length>1,o=t&&e.imageInfo.profile[1].supports?e.imageInfo.profile[1].supports:[],r=t&&e.imageInfo.profile[1].formats?e.imageInfo.profile[1].formats:[],n=t&&e.imageInfo.profile[1].qualities?e.imageInfo.profile[1].qualities:[];return{url:e.imageInfo["@id"].replace(/\/?(?:info\.json)?$/g,""),sizes:void 0===e.imageInfo.sizes?void 0:e.imageInfo.sizes.map((function(e){return[e.width,e.height]})),tileSize:void 0===e.imageInfo.tiles?void 0:[e.imageInfo.tiles.map((function(e){return e.width}))[0],e.imageInfo.tiles.map((function(e){return void 0===e.height?e.width:e.height}))[0]],resolutions:void 0===e.imageInfo.tiles?void 0:e.imageInfo.tiles.map((function(e){return e.scaleFactors}))[0],supports:i.supports.concat(o),formats:i.formats.concat(r),qualities:i.qualities.concat(n)}},v[g]=function(e){var i=e.getComplianceLevelSupportedFeatures(),t=void 0===e.imageInfo.extraFormats?i.formats:i.formats.concat(e.imageInfo.extraFormats),o=void 0!==e.imageInfo.preferredFormats&&Array.isArray(e.imageInfo.preferredFormats)&&e.imageInfo.preferredFormats.length>0?e.imageInfo.preferredFormats.filter((function(e){return Object(l.f)(["jpg","png","gif"],e)})).reduce((function(e,i){return void 0===e&&Object(l.f)(t,i)?i:e}),void 0):void 0;return{url:e.imageInfo.id,sizes:void 0===e.imageInfo.sizes?void 0:e.imageInfo.sizes.map((function(e){return[e.width,e.height]})),tileSize:void 0===e.imageInfo.tiles?void 0:[e.imageInfo.tiles.map((function(e){return e.width}))[0],e.imageInfo.tiles.map((function(e){return e.height}))[0]],resolutions:void 0===e.imageInfo.tiles?void 0:e.imageInfo.tiles.map((function(e){return e.scaleFactors}))[0],supports:void 0===e.imageInfo.extraFeatures?i.supports:i.supports.concat(e.imageInfo.extraFeatures),formats:t,qualities:void 0===e.imageInfo.extraQualities?i.qualities:i.qualities.concat(e.imageInfo.extraQualities),preferredFormat:o}};var d=function(e){this.setImageInfo(e)};d.prototype.setImageInfo=function(e){this.imageInfo="string"==typeof e?JSON.parse(e):e},d.prototype.getImageApiVersion=function(){if(void 0!==this.imageInfo){var e=this.imageInfo["@context"]||"ol-no-context";"string"==typeof e&&(e=[e]);for(var i=0;i<e.length;i++)switch(e[i]){case"http://library.stanford.edu/iiif/image-api/1.1/context.json":case"http://iiif.io/api/image/1/context.json":return f;case"http://iiif.io/api/image/2/context.json":return u;case"http://iiif.io/api/image/3/context.json":return g;case"ol-no-context":if(this.getComplianceLevelEntryFromProfile(f)&&this.imageInfo.identifier)return f}Object(s.a)(!1,61)}},d.prototype.getComplianceLevelEntryFromProfile=function(e){if(void 0!==this.imageInfo&&void 0!==this.imageInfo.profile)switch(void 0===e&&(e=this.getImageApiVersion()),e){case f:if(m.test(this.imageInfo.profile))return this.imageInfo.profile;break;case g:if(h.test(this.imageInfo.profile))return this.imageInfo.profile;break;case u:if("string"==typeof this.imageInfo.profile&&c.test(this.imageInfo.profile))return this.imageInfo.profile;if(Array.isArray(this.imageInfo.profile)&&this.imageInfo.profile.length>0&&"string"==typeof this.imageInfo.profile[0]&&c.test(this.imageInfo.profile[0]))return this.imageInfo.profile[0]}},d.prototype.getComplianceLevelFromProfile=function(e){var i=this.getComplianceLevelEntryFromProfile(e);if(void 0!==i){var t=i.match(/level[0-2](?:\.json)?$/g);return Array.isArray(t)?t[0].replace(".json",""):void 0}},d.prototype.getComplianceLevelSupportedFeatures=function(){if(void 0!==this.imageInfo){var e=this.getImageApiVersion(),i=this.getComplianceLevelFromProfile(e);return void 0===i?p.none.none:p[e][i]}},d.prototype.getTileSourceOptions=function(e){var i=e||{},t=this.getImageApiVersion();if(void 0!==t){var o=void 0===t?void 0:v[t](this);if(void 0!==o)return{url:o.url,version:t,size:[this.imageInfo.width,this.imageInfo.height],sizes:o.sizes,format:void 0!==i.format&&Object(l.f)(o.formats,i.format)?i.format:void 0!==o.preferredFormat?o.preferredFormat:"jpg",supports:o.supports,quality:i.quality&&Object(l.f)(o.qualities,i.quality)?i.quality:Object(l.f)(o.qualities,"native")?"native":"default",resolutions:Array.isArray(o.resolutions)?o.resolutions.sort((function(e,i){return i-e})):void 0,tileSize:o.tileSize}}};var y=d,I=t(1),z=t(47);function j(e){return e.toLocaleString("en",{maximumFractionDigits:10})}var B=function(e){function i(i){var t=i||{},r=t.url||"";r+=r.lastIndexOf("/")===r.length-1||""===r?"":"/";var p=t.version||u,m=t.sizes||[],c=t.size;Object(s.a)(null!=c&&Array.isArray(c)&&2==c.length&&!isNaN(c[0])&&c[0]>0&&!isNaN(c[1])&&c[1]>0,60);var h,v,d,y=c[0],B=c[1],b=t.tileSize,x=t.tilePixelRatio||1,q=t.format||"jpg",O=t.quality||(t.version==f?"native":"default"),P=t.resolutions||[],w=t.supports||[],F=t.extent||[0,-B,y,0],A=null!=m&&Array.isArray(m)&&m.length>0,C=void 0!==b&&("number"==typeof b&&Number.isInteger(b)&&b>0||Array.isArray(b)&&b.length>0),S=null!=w&&Array.isArray(w)&&(Object(l.f)(w,"regionByPx")||Object(l.f)(w,"regionByPct"))&&(Object(l.f)(w,"sizeByWh")||Object(l.f)(w,"sizeByH")||Object(l.f)(w,"sizeByW")||Object(l.f)(w,"sizeByPct"));if(P.sort((function(e,i){return i-e})),C||S)if(null!=b&&("number"==typeof b&&Number.isInteger(b)&&b>0?(h=b,v=b):Array.isArray(b)&&b.length>0&&((1==b.length||null==b[1]&&Number.isInteger(b[0]))&&(h=b[0],v=b[0]),2==b.length&&(Number.isInteger(b[0])&&Number.isInteger(b[1])?(h=b[0],v=b[1]):null==b[0]&&Number.isInteger(b[1])&&(h=b[1],v=b[1])))),void 0!==h&&void 0!==v||(h=a.b,v=a.b),0==P.length)for(var W=d=Math.max(Math.ceil(Math.log(y/h)/Math.LN2),Math.ceil(Math.log(B/v)/Math.LN2));W>=0;W--)P.push(Math.pow(2,W));else{var M=Math.max.apply(Math,P);d=Math.round(Math.log(M)/Math.LN2)}else if(h=y,v=B,P=[],A){m.sort((function(e,i){return e[0]-i[0]})),d=-1;for(var L=[],N=0;N<m.length;N++){var _=y/m[N][0];P.length>0&&P[P.length-1]==_?L.push(N):(P.push(_),d++)}if(L.length>0)for(var E=0;E<L.length;E++)m.splice(L[E]-E,1)}else P.push(1),m.push([y,B]),d=0;var H=new o.a({tileSize:[h,v],extent:F,origin:Object(I.D)(F),resolutions:P}),D=n.a.bind(null,Object(z.d)(b||256).map((function(e){return e*x})));e.call(this,{attributions:t.attributions,attributionsCollapsible:t.attributionsCollapsible,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,imageSmoothing:t.imageSmoothing,projection:t.projection,reprojectionErrorThreshold:t.reprojectionErrorThreshold,state:t.state,tileClass:D,tileGrid:H,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:function(e,i,t){var o,n,a=e[0];if(!(a>d)){var s=e[1],f=e[2],u=P[a];if(!(void 0===s||void 0===f||void 0===u||s<0||Math.ceil(y/u/h)<=s||f<0||Math.ceil(B/u/v)<=f)){if(S||C){var c=s*h*u,I=f*v*u,z=h*u,b=v*u,x=h,F=v;if(c+z>y&&(z=y-c),I+b>B&&(b=B-I),c+h*u>y&&(x=Math.floor((y-c+u-1)/u)),I+v*u>B&&(F=Math.floor((B-I+u-1)/u)),0==c&&z==y&&0==I&&b==B)o="full";else if(!S||Object(l.f)(w,"regionByPx"))o=c+","+I+","+z+","+b;else if(Object(l.f)(w,"regionByPct")){o="pct:"+j(c/y*100)+","+j(I/B*100)+","+j(z/y*100)+","+j(b/B*100)}p!=g||S&&!Object(l.f)(w,"sizeByWh")?!S||Object(l.f)(w,"sizeByW")?n=x+",":Object(l.f)(w,"sizeByH")?n=","+F:Object(l.f)(w,"sizeByWh")?n=x+","+F:Object(l.f)(w,"sizeByPct")&&(n="pct:"+j(100/u)):n=x+","+F}else if(o="full",A){var W=m[a][0],M=m[a][1];n=p==g?W==y&&M==B?"max":W+","+M:W==y?"full":W+","}else n=p==g?"max":"full";return r+o+"/"+n+"/0/"+O+"."+q}}},transition:t.transition}),this.zDirection=t.zDirection}return e&&(i.__proto__=e),i.prototype=Object.create(e&&e.prototype),i.prototype.constructor=i,i}(r.a),b=t(3),x=t(5),q=t(2),O=new x.a,P=new b.a({layers:[O],target:"map"}),w=document.getElementById("iiif-notification"),F=document.getElementById("imageInfoUrl");function A(e){fetch(e).then((function(e){e.json().then((function(e){var i=new y(e).getTileSourceOptions();if(void 0!==i&&void 0!==i.version){i.zDirection=-1;var t=new B(i);O.setSource(t),P.setView(new q.a({resolutions:t.getTileGrid().getResolutions(),extent:t.getTileGrid().getExtent(),constrainOnlyCenter:!0})),P.getView().fit(t.getTileGrid().getExtent()),w.textContent=""}else w.textContent="Data seems to be no valid IIIF image information."})).catch((function(e){w.textContent="Could not read image info json. "+e}))})).catch((function(){w.textContent="Could not read data from URL."}))}document.getElementById("display").addEventListener("click",(function(){A(F.value)})),A(F.value)}},[[425,0]]]);
//# sourceMappingURL=iiif.js.map