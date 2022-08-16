"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7970],{814:function(t,e,i){var r=i(4686),n=i(4354),s=i(2739),o=i(2025),a=i(8675),h=i(5265),l=i(8460),u=i(3077),d=i(1988),c=i(5469),w=i(5528),y=i(2810),g=i(6877);const _=1,f=2,b=3,m=4,p=5,P=6,k=7,C=15,E=16,M=17;class Z{constructor(t){this.view_=t,this.pos_=0,this.initialized_=!1,this.isLittleEndian_=!1,this.hasZ_=!1,this.hasM_=!1,this.srid_=null,this.layout_="XY"}readUint8(){return this.view_.getUint8(this.pos_++)}readUint32(t){return this.view_.getUint32((this.pos_+=4)-4,void 0!==t?t:this.isLittleEndian_)}readDouble(t){return this.view_.getFloat64((this.pos_+=8)-8,void 0!==t?t:this.isLittleEndian_)}readPoint(){const t=[];return t.push(this.readDouble()),t.push(this.readDouble()),this.hasZ_&&t.push(this.readDouble()),this.hasM_&&t.push(this.readDouble()),t}readLineString(){const t=this.readUint32(),e=[];for(let i=0;i<t;i++)e.push(this.readPoint());return e}readPolygon(){const t=this.readUint32(),e=[];for(let i=0;i<t;i++)e.push(this.readLineString());return e}readWkbHeader(t){const e=this.readUint8()>0,i=this.readUint32(e),r=Math.floor((268435455&i)/1e3),n=Boolean(2147483648&i)||1===r||3===r,s=Boolean(1073741824&i)||2===r||3===r,o=Boolean(536870912&i),a=(268435455&i)%1e3,h=["XY",n?"Z":"",s?"M":""].join(""),l=o?this.readUint32(e):null;if(void 0!==t&&t!==a)throw new Error("Unexpected WKB geometry type "+a);if(this.initialized_){if(this.isLittleEndian_!==e)throw new Error("Inconsistent endian");if(this.layout_!==h)throw new Error("Inconsistent geometry layout");if(l&&this.srid_!==l)throw new Error("Inconsistent coordinate system (SRID)")}else this.isLittleEndian_=e,this.hasZ_=n,this.hasM_=s,this.layout_=h,this.srid_=l,this.initialized_=!0;return a}readWkbPayload(t){switch(t){case _:return this.readPoint();case f:return this.readLineString();case b:case M:return this.readPolygon();case m:return this.readMultiPoint();case p:return this.readMultiLineString();case P:case C:case E:return this.readMultiPolygon();case k:return this.readGeometryCollection();default:throw new Error("Unsupported WKB geometry type "+t+" is found")}}readWkbBlock(t){return this.readWkbPayload(this.readWkbHeader(t))}readWkbCollection(t,e){const i=this.readUint32(),r=[];for(let n=0;n<i;n++){const i=t.call(this,e);i&&r.push(i)}return r}readMultiPoint(){return this.readWkbCollection(this.readWkbBlock,_)}readMultiLineString(){return this.readWkbCollection(this.readWkbBlock,f)}readMultiPolygon(){return this.readWkbCollection(this.readWkbBlock,b)}readGeometryCollection(){return this.readWkbCollection(this.readGeometry)}readGeometry(){const t=this.readWkbHeader(),e=this.readWkbPayload(t);switch(t){case _:return new c.Z(e,this.layout_);case f:return new h.Z(e,this.layout_);case b:case M:return new w.ZP(e,this.layout_);case m:return new u.Z(e,this.layout_);case p:return new l.Z(e,this.layout_);case P:case C:case E:return new d.Z(e,this.layout_);case k:return new a.Z(e);default:return null}}getSrid(){return this.srid_}}class L{constructor(t){t=t||{},this.layout_=t.layout,this.isLittleEndian_=!1!==t.littleEndian,this.isEWKB_=!1!==t.ewkb,this.writeQueue_=[],this.nodata_=Object.assign({X:0,Y:0,Z:0,M:0},t.nodata)}writeUint8(t){this.writeQueue_.push([1,t])}writeUint32(t){this.writeQueue_.push([4,t])}writeDouble(t){this.writeQueue_.push([8,t])}writePoint(t,e){const i=Object.assign.apply(null,e.split("").map(((e,i)=>({[e]:t[i]}))));for(const t of this.layout_)this.writeDouble(t in i?i[t]:this.nodata_[t])}writeLineString(t,e){this.writeUint32(t.length);for(let i=0;i<t.length;i++)this.writePoint(t[i],e)}writePolygon(t,e){this.writeUint32(t.length);for(let i=0;i<t.length;i++)this.writeLineString(t[i],e)}writeWkbHeader(t,e){t%=1e3,this.layout_.includes("Z")&&(t+=this.isEWKB_?2147483648:1e3),this.layout_.includes("M")&&(t+=this.isEWKB_?1073741824:2e3),this.isEWKB_&&Number.isInteger(e)&&(t|=536870912),this.writeUint8(this.isLittleEndian_?1:0),this.writeUint32(t),this.isEWKB_&&Number.isInteger(e)&&this.writeUint32(e)}writeMultiPoint(t,e){this.writeUint32(t.length);for(let i=0;i<t.length;i++)this.writeWkbHeader(1),this.writePoint(t[i],e)}writeMultiLineString(t,e){this.writeUint32(t.length);for(let i=0;i<t.length;i++)this.writeWkbHeader(2),this.writeLineString(t[i],e)}writeMultiPolygon(t,e){this.writeUint32(t.length);for(let i=0;i<t.length;i++)this.writeWkbHeader(3),this.writePolygon(t[i],e)}writeGeometryCollection(t){this.writeUint32(t.length);for(let e=0;e<t.length;e++)this.writeGeometry(t[e])}findMinimumLayout(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"XYZM";if(t instanceof g.ZP)return(i=t.getLayout())===(r=e)?i:"XYZM"===i?r:"XYZM"===r?i:"XY";var i,r;if(t instanceof a.Z){const i=t.getGeometriesArray();for(let t=0;t<i.length&&"XY"!==e;t++)e=this.findMinimumLayout(i[t],e)}return e}writeGeometry(t,e){const i={Point:_,LineString:f,Polygon:b,MultiPoint:m,MultiLineString:p,MultiPolygon:P,GeometryCollection:k},r=t.getType(),n=i[r];if(!n)throw new Error("GeometryType "+r+" is not supported");if(this.layout_||(this.layout_=this.findMinimumLayout(t)),this.writeWkbHeader(n,e),t instanceof g.ZP){({Point:this.writePoint,LineString:this.writeLineString,Polygon:this.writePolygon,MultiPoint:this.writeMultiPoint,MultiLineString:this.writeMultiLineString,MultiPolygon:this.writeMultiPolygon})[r].call(this,t.getCoordinates(),t.getLayout())}else t instanceof a.Z&&this.writeGeometryCollection(t.getGeometriesArray())}getBuffer(){const t=this.writeQueue_.reduce(((t,e)=>t+e[0]),0),e=new ArrayBuffer(t),i=new DataView(e);let r=0;return this.writeQueue_.forEach((t=>{switch(t[0]){case 1:i.setUint8(r,t[1]);break;case 4:i.setUint32(r,t[1],this.isLittleEndian_);break;case 8:i.setFloat64(r,t[1],this.isLittleEndian_)}r+=t[0]})),e}}class U extends o.ZP{constructor(t){super(),t=t||{},this.splitCollection=Boolean(t.splitCollection),this.viewCache_=null,this.hex_=!1!==t.hex,this.littleEndian_=!1!==t.littleEndian,this.ewkb_=!1!==t.ewkb,this.layout_=t.geometryLayout,this.nodataZ_=t.nodataZ||0,this.nodataM_=t.nodataM||0,this.srid_=t.srid}getType(){return this.hex_?"text":"arraybuffer"}readFeature(t,e){return new s.Z({geometry:this.readGeometry(t,e)})}readFeatures(t,e){let i=[];const r=this.readGeometry(t,e);return i=this.splitCollection&&r instanceof a.Z?r.getGeometriesArray():[r],i.map((t=>new s.Z({geometry:t})))}readGeometry(t,e){const i=W(t);if(!i)return null;const r=new Z(i).readGeometry();return this.viewCache_=i,e=this.getReadOptions(t,e),this.viewCache_=null,(0,o.fI)(r,!1,e)}readProjection(t){const e=this.viewCache_||W(t);if(!e)return;const i=new Z(e);return i.readWkbHeader(),i.getSrid()&&(0,y.U2)("EPSG:"+i.getSrid())||void 0}writeFeature(t,e){return this.writeGeometry(t.getGeometry(),e)}writeFeatures(t,e){return this.writeGeometry(new a.Z(t.map((t=>t.getGeometry()))),e)}writeGeometry(t,e){e=this.adaptOptions(e);const i=new L({layout:this.layout_,littleEndian:this.littleEndian_,ewkb:this.ewkb_,nodata:{Z:this.nodataZ_,M:this.nodataM_}});let r=Number.isInteger(this.srid_)?Number(this.srid_):null;if(!1!==this.srid_&&!Number.isInteger(this.srid_)){const t=e.dataProjection&&(0,y.U2)(e.dataProjection);if(t){const e=t.getCode();e.startsWith("EPSG:")&&(r=Number(e.substring(5)))}}i.writeGeometry((0,o.fI)(t,!0,e),r);const n=i.getBuffer();return this.hex_?function(t){const e=new Uint8Array(t);return Array.from(e.values()).map((t=>(t<16?"0":"")+Number(t).toString(16).toUpperCase())).join("")}(n):n}}function W(t){return"string"==typeof t?function(t){const e=new Uint8Array(t.length/2);for(let i=0;i<t.length/2;i++)e[i]=parseInt(t.substr(2*i,2),16);return new DataView(e.buffer)}(t):ArrayBuffer.isView(t)?t instanceof DataView?t:new DataView(t.buffer,t.byteOffset,t.byteLength):t instanceof ArrayBuffer?new DataView(t):null}var B=U,G=i(9847),S=i(5783),D=i(2010),v=i(1372);const F=new D.Z({source:new G.Z}),A=(new B).readFeature("0103000000010000000500000054E3A59BC4602540643BDF4F8D1739C05C8FC2F5284C4140EC51B81E852B34C0D578E926316843406F1283C0CAD141C01B2FDD2406012B40A4703D0AD79343C054E3A59BC4602540643BDF4F8D1739C0",{dataProjection:"EPSG:4326",featureProjection:"EPSG:3857"}),I=new v.Z({source:new S.Z({features:[A]})});new r.Z({layers:[F,I],target:"map",view:new n.ZP({center:[2952104.0199,-3277504.823],zoom:4})})}},function(t){var e=function(e){return t(t.s=e)};e(9877),e(814)}]);
//# sourceMappingURL=wkb.js.map