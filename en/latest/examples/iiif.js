(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{428:function(e,i,t){"use strict";t.r(i);var o=t(3),r=t(2),n=t(5),a=t(119),s=t(1),l=t(189),f=t(19),u="version1",g="version2",p="version3",m={};m[u]={level0:{supports:[],formats:[],qualities:["native"]},level1:{supports:["regionByPx","sizeByW","sizeByH","sizeByPct"],formats:["jpg"],qualities:["native"]},level2:{supports:["regionByPx","regionByPct","sizeByW","sizeByH","sizeByPct","sizeByConfinedWh","sizeByWh"],formats:["jpg","png"],qualities:["native","color","grey","bitonal"]}},m[g]={level0:{supports:[],formats:["jpg"],qualities:["default"]},level1:{supports:["regionByPx","sizeByW","sizeByH","sizeByPct"],formats:["jpg"],qualities:["default"]},level2:{supports:["regionByPx","regionByPct","sizeByW","sizeByH","sizeByPct","sizeByConfinedWh","sizeByDistortedWh","sizeByWh"],formats:["jpg","png"],qualities:["default","bitonal"]}},m[p]={level0:{supports:[],formats:["jpg"],qualities:["default"]},level1:{supports:["regionByPx","regionSquare","sizeByW","sizeByH","sizeByWh"],formats:["jpg"],qualities:["default"]},level2:{supports:["regionByPx","regionSquare","regionByPct","sizeByW","sizeByH","sizeByPct","sizeByConfinedWh","sizeByWh"],formats:["jpg","png"],qualities:["default"]}},m.none={none:{supports:[],formats:[],qualities:[]}};var c=new RegExp("^https?://library.stanford.edu/iiif/image-api/(1.1/)?compliance.html#level[0-2]$"),d=new RegExp("^https?://iiif.io/api/image/2/level[0-2](.json)?$"),h=new RegExp("(^https?://iiif.io/api/image/3/level[0-2](.json)?$)|(^level[0-2]$)");var v={};v[u]=function(e){var i=e.getComplianceLevelSupportedFeatures();return void 0===i&&(i=m[u].level0),{url:void 0===e.imageInfo["@id"]?void 0:e.imageInfo["@id"].replace(/\/?(info.json)?$/g,""),supports:i.supports,formats:i.formats.concat([void 0===e.imageInfo.formats?[]:e.imageInfo.formats]),qualities:i.qualities.concat([void 0===e.imageInfo.qualities?[]:e.imageInfo.qualities]),resolutions:e.imageInfo.scale_factors,tileSize:void 0!==e.imageInfo.tile_width?void 0!==e.imageInfo.tile_height?[e.imageInfo.tile_width,e.imageInfo.tile_height]:[e.imageInfo.tile_width,e.imageInfo.tile_width]:null!=e.imageInfo.tile_height?[e.imageInfo.tile_height,e.imageInfo.tile_height]:void 0}},v[g]=function(e){var i=e.getComplianceLevelSupportedFeatures(),t=Array.isArray(e.imageInfo.profile)&&e.imageInfo.profile.length>1,o=t&&e.imageInfo.profile[1].supports?e.imageInfo.profile[1].supports:[],r=t&&e.imageInfo.profile[1].formats?e.imageInfo.profile[1].formats:[],n=t&&e.imageInfo.profile[1].qualities?e.imageInfo.profile[1].qualities:[];return{url:e.imageInfo["@id"].replace(/\/?(info.json)?$/g,""),sizes:void 0===e.imageInfo.sizes?void 0:e.imageInfo.sizes.map((function(e){return[e.width,e.height]})),tileSize:void 0===e.imageInfo.tiles?void 0:[e.imageInfo.tiles.map((function(e){return e.width}))[0],e.imageInfo.tiles.map((function(e){return void 0===e.height?e.width:e.height}))[0]],resolutions:void 0===e.imageInfo.tiles?void 0:e.imageInfo.tiles.map((function(e){return e.scaleFactors}))[0],supports:i.supports.concat(o),formats:i.formats.concat(r),qualities:i.qualities.concat(n)}},v[p]=function(e){var i=e.getComplianceLevelSupportedFeatures(),t=void 0===e.imageInfo.extraFormats?i.formats:i.formats.concat(e.imageInfo.extraFormats),o=void 0!==e.imageInfo.preferredFormats&&Array.isArray(e.imageInfo.preferredFormats)&&e.imageInfo.preferredFormats.length>0?e.imageInfo.preferredFormats.filter((function(e){return["jpg","png","gif"].includes(e)})).reduce((function(e,i){return void 0===e&&t.includes(i)?i:e}),void 0):void 0;return{url:e.imageInfo.id,sizes:void 0===e.imageInfo.sizes?void 0:e.imageInfo.sizes.map((function(e){return[e.width,e.height]})),tileSize:void 0===e.imageInfo.tiles?void 0:[e.imageInfo.tiles.map((function(e){return e.width}))[0],e.imageInfo.tiles.map((function(e){return e.height}))[0]],resolutions:void 0===e.imageInfo.tiles?void 0:e.imageInfo.tiles.map((function(e){return e.scaleFactors}))[0],supports:void 0===e.imageInfo.extraFeatures?i.supports:i.supports.concat(e.imageInfo.extraFeatures),formats:t,qualities:void 0===e.imageInfo.extraQualities?i.qualities:i.qualities.concat(e.imageInfo.extraQualities),preferredFormat:o}};var y=function(e){this.setImageInfo(e)};y.prototype.setImageInfo=function(e){this.imageInfo="string"==typeof e?JSON.parse(e):e},y.prototype.getImageApiVersion=function(){if(void 0!==this.imageInfo){var e=this.imageInfo["@context"]||"ol-no-context";"string"==typeof e&&(e=[e]);for(var i=0;i<e.length;i++)switch(e[i]){case"http://library.stanford.edu/iiif/image-api/1.1/context.json":case"http://iiif.io/api/image/1/context.json":return u;case"http://iiif.io/api/image/2/context.json":return g;case"http://iiif.io/api/image/3/context.json":return p;case"ol-no-context":if(this.getComplianceLevelEntryFromProfile(u)&&this.imageInfo.identifier)return u}Object(f.a)(!1,61)}},y.prototype.getComplianceLevelEntryFromProfile=function(e){if(void 0!==this.imageInfo&&void 0!==this.imageInfo.profile)switch(void 0===e&&(e=this.getImageApiVersion()),e){case u:if(c.test(this.imageInfo.profile))return this.imageInfo.profile;break;case p:if(h.test(this.imageInfo.profile))return this.imageInfo.profile;break;case g:if("string"==typeof this.imageInfo.profile&&d.test(this.imageInfo.profile))return this.imageInfo.profile;if(Array.isArray(this.imageInfo.profile)&&this.imageInfo.profile.length>0&&"string"==typeof this.imageInfo.profile[0]&&d.test(this.imageInfo.profile[0]))return this.imageInfo.profile[0]}},y.prototype.getComplianceLevelFromProfile=function(e){var i=this.getComplianceLevelEntryFromProfile(e);if(void 0!==i){var t=i.match(/level[0-2](\.json)?$/g);return Array.isArray(t)?t[0].replace(".json",""):void 0}},y.prototype.getComplianceLevelSupportedFeatures=function(){if(void 0!==this.imageInfo){var e=this.getImageApiVersion(),i=this.getComplianceLevelFromProfile(e);return void 0===i?m.none.none:m[e][i]}},y.prototype.getTileSourceOptions=function(e){var i=e||{},t=this.getImageApiVersion();if(void 0!==t){var o=void 0===t?void 0:v[t](this);if(void 0!==o)return{url:o.url,version:t,size:[this.imageInfo.width,this.imageInfo.height],sizes:o.sizes,format:void 0!==i.format&&o.formats.includes(i.format)?i.format:void 0!==o.preferredFormat?o.preferredFormat:"jpg",supports:o.supports,quality:i.quality&&o.qualities.includes(i.quality)?i.quality:o.qualities.includes("native")?"native":"default",resolutions:Array.isArray(o.resolutions)?o.resolutions.sort((function(e,i){return i-e})):void 0,tileSize:o.tileSize}}};var I=y,z=t(77),B=t(84),x=t(51);function j(e){return e.toLocaleString("en",{maximumFractionDigits:10})}var b=function(e){function i(i){var t=i||{},o=t.url||"";o+=o.lastIndexOf("/")===o.length-1||""===o?"":"/";var r=t.version||g,n=t.sizes||[],m=t.size;Object(f.a)(null!=m&&Array.isArray(m)&&2==m.length&&!isNaN(m[0])&&m[0]>0&&!isNaN(m[1])&&m[1]>0,60);var c,d,h,v=m[0],y=m[1],I=t.tileSize,B=t.tilePixelRatio||1,b=t.format||"jpg",q=t.quality||(t.version==u?"native":"default"),w=t.resolutions||[],P=t.supports||[],F=t.extent||[0,-y,v,0],A=null!=n&&Array.isArray(n)&&n.length>0,C=void 0!==I&&("number"==typeof I&&Number.isInteger(I)&&I>0||Array.isArray(I)&&I.length>0),S=null!=P&&Array.isArray(P)&&(P.includes("regionByPx")||P.includes("regionByPct"))&&(P.includes("sizeByWh")||P.includes("sizeByH")||P.includes("sizeByW")||P.includes("sizeByPct"));if(w.sort((function(e,i){return i-e})),C||S)if(null!=I&&("number"==typeof I&&Number.isInteger(I)&&I>0?(c=I,d=I):Array.isArray(I)&&I.length>0&&((1==I.length||null==I[1]&&Number.isInteger(I[0]))&&(c=I[0],d=I[0]),2==I.length&&(Number.isInteger(I[0])&&Number.isInteger(I[1])?(c=I[0],d=I[1]):null==I[0]&&Number.isInteger(I[1])&&(c=I[1],d=I[1])))),void 0!==c&&void 0!==d||(c=a.b,d=a.b),0==w.length)for(var W=h=Math.max(Math.ceil(Math.log(v/c)/Math.LN2),Math.ceil(Math.log(y/d)/Math.LN2));W>=0;W--)w.push(Math.pow(2,W));else{var M=Math.max.apply(Math,w);h=Math.round(Math.log(M)/Math.LN2)}else if(c=v,d=y,w=[],A){n.sort((function(e,i){return e[0]-i[0]})),h=-1;for(var L=[],E=0;E<n.length;E++){var N=v/n[E][0];w.length>0&&w[w.length-1]==N?L.push(E):(w.push(N),h++)}if(L.length>0)for(var _=0;_<L.length;_++)n.splice(L[_]-_,1)}else w.push(1),n.push([v,y]),h=0;var O=new z.a({tileSize:[c,d],extent:F,origin:Object(s.C)(F),resolutions:w}),H=l.a.bind(null,Object(x.d)(I||256).map((function(e){return e*B})));e.call(this,{attributions:t.attributions,attributionsCollapsible:t.attributionsCollapsible,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,projection:t.projection,reprojectionErrorThreshold:t.reprojectionErrorThreshold,state:t.state,tileClass:H,tileGrid:O,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:function(e,i,t){var a,s,l=e[0];if(!(l>h)){var f=e[1],u=e[2],g=w[l];if(!(void 0===f||void 0===u||void 0===g||f<0||Math.ceil(v/g/c)<=f||u<0||Math.ceil(y/g/d)<=u)){if(S||C){var m=f*c*g,I=u*d*g,z=c*g,B=d*g,x=c,F=d;if(m+z>v&&(z=v-m),I+B>y&&(B=y-I),m+c*g>v&&(x=Math.floor((v-m+g-1)/g)),I+d*g>y&&(F=Math.floor((y-I+g-1)/g)),0==m&&z==v&&0==I&&B==y)a="full";else if(!S||P.includes("regionByPx"))a=m+","+I+","+z+","+B;else if(P.includes("regionByPct")){a="pct:"+j(m/v*100)+","+j(I/y*100)+","+j(z/v*100)+","+j(B/y*100)}r!=p||S&&!P.includes("sizeByWh")?!S||P.includes("sizeByW")?s=x+",":P.includes("sizeByH")?s=","+F:P.includes("sizeByWh")?s=x+","+F:P.includes("sizeByPct")&&(s="pct:"+j(100/g)):s=x+","+F}else if(a="full",A){var W=n[l][0],M=n[l][1];s=r==p?W==v&&M==y?"max":W+","+M:W==v?"full":W+","}else s=r==p?"max":"full";return o+a+"/"+s+"/0/"+q+"."+b}}},transition:t.transition}),this.zDirection=t.zDirection}return e&&(i.__proto__=e),i.prototype=Object.create(e&&e.prototype),i.prototype.constructor=i,i}(B.a),q=new n.a,w=new o.a({layers:[q],target:"map"}),P=document.getElementById("iiif-notification"),F=document.getElementById("imageInfoUrl");function A(e){fetch(e).then((function(e){e.json().then((function(e){var i=new I(e).getTileSourceOptions();if(void 0!==i&&void 0!==i.version){i.zDirection=-1;var t=new b(i);q.setSource(t),w.setView(new r.a({resolutions:t.getTileGrid().getResolutions(),extent:t.getTileGrid().getExtent(),constrainOnlyCenter:!0})),w.getView().fit(t.getTileGrid().getExtent()),P.textContent=""}else P.textContent="Data seems to be no valid IIIF image information."})).catch((function(e){P.textContent="Could not read image info json. "+e}))})).catch((function(){P.textContent="Could not read data from URL."}))}document.getElementById("display").addEventListener("click",(function(){A(F.value)})),A(F.value)}},[[428,0]]]);
//# sourceMappingURL=iiif.js.map