/*! For license information please see 54.ol.js.LICENSE.txt */
(self.webpackChunkol=self.webpackChunkol||[]).push([[54],{943:function(e,r){var a,n,t,i,f,o,s,l,u,c,w,h,d;n={defaultNoDataValue:-34027999387901484e22,decode:function(e,r){var a=(r=r||{}).encodedMaskData||null===r.encodedMaskData,s=o(e,r.inputOffset||0,a),l=null!==r.noDataValue?r.noDataValue:n.defaultNoDataValue,u=t(s,r.pixelType||Float32Array,r.encodedMaskData,l,r.returnMask),c={width:s.width,height:s.height,pixelData:u.resultPixels,minValue:u.minValue,maxValue:s.pixels.maxValue,noDataValue:l};return u.resultMask&&(c.maskData=u.resultMask),r.returnEncodedMask&&s.mask&&(c.encodedMaskData=s.mask.bitset?s.mask.bitset:null),r.returnFileInfo&&(c.fileInfo=i(s),r.computeUsedBitDepths&&(c.fileInfo.bitDepths=f(s))),c}},t=function(e,r,a,n,t){var i,f,o,l=0,u=e.pixels.numBlocksX,c=e.pixels.numBlocksY,w=Math.floor(e.width/u),h=Math.floor(e.height/c),d=2*e.maxZError,v=Number.MAX_VALUE;a=a||(e.mask?e.mask.bitset:null),f=new r(e.width*e.height),t&&a&&(o=new Uint8Array(e.width*e.height));for(var y,k,A=new Float32Array(w*h),m=0;m<=c;m++){var U=m!==c?h:e.height%c;if(0!==U)for(var b=0;b<=u;b++){var p=b!==u?w:e.width%u;if(0!==p){var M,V,x,g,D=m*e.width*h+b*w,B=e.width-p,I=e.pixels.blocks[l];if(I.encoding<2?(0===I.encoding?M=I.rawData:(s(I.stuffedData,I.bitsPerPixel,I.numValidPixels,I.offset,d,A,e.pixels.maxValue),M=A),V=0):x=2===I.encoding?0:I.offset,a)for(k=0;k<U;k++){for(7&D&&(g=a[D>>3],g<<=7&D),y=0;y<p;y++)7&D||(g=a[D>>3]),128&g?(o&&(o[D]=1),v=v>(i=I.encoding<2?M[V++]:x)?i:v,f[D++]=i):(o&&(o[D]=0),f[D++]=n),g<<=1;D+=B}else if(I.encoding<2)for(k=0;k<U;k++){for(y=0;y<p;y++)v=v>(i=M[V++])?i:v,f[D++]=i;D+=B}else for(v=v>x?x:v,k=0;k<U;k++){for(y=0;y<p;y++)f[D++]=x;D+=B}if(1===I.encoding&&V!==I.numValidPixels)throw"Block and Mask do not match";l++}}}return{resultPixels:f,resultMask:o,minValue:v}},i=function(e){return{fileIdentifierString:e.fileIdentifierString,fileVersion:e.fileVersion,imageType:e.imageType,height:e.height,width:e.width,maxZError:e.maxZError,eofOffset:e.eofOffset,mask:e.mask?{numBlocksX:e.mask.numBlocksX,numBlocksY:e.mask.numBlocksY,numBytes:e.mask.numBytes,maxValue:e.mask.maxValue}:null,pixels:{numBlocksX:e.pixels.numBlocksX,numBlocksY:e.pixels.numBlocksY,numBytes:e.pixels.numBytes,maxValue:e.pixels.maxValue,noDataValue:e.noDataValue}}},f=function(e){for(var r=e.pixels.numBlocksX*e.pixels.numBlocksY,a={},n=0;n<r;n++){var t=e.pixels.blocks[n];0===t.encoding?a.float32=!0:1===t.encoding?a[t.bitsPerPixel]=!0:a[0]=!0}return Object.keys(a)},o=function(e,r,a){var n={},t=new Uint8Array(e,r,10);if(n.fileIdentifierString=String.fromCharCode.apply(null,t),"CntZImage"!==n.fileIdentifierString.trim())throw"Unexpected file identifier string: "+n.fileIdentifierString;r+=10;var i=new DataView(e,r,24);if(n.fileVersion=i.getInt32(0,!0),n.imageType=i.getInt32(4,!0),n.height=i.getUint32(8,!0),n.width=i.getUint32(12,!0),n.maxZError=i.getFloat64(16,!0),r+=24,!a)if(i=new DataView(e,r,16),n.mask={},n.mask.numBlocksY=i.getUint32(0,!0),n.mask.numBlocksX=i.getUint32(4,!0),n.mask.numBytes=i.getUint32(8,!0),n.mask.maxValue=i.getFloat32(12,!0),r+=16,n.mask.numBytes>0){var f=new Uint8Array(Math.ceil(n.width*n.height/8)),o=(i=new DataView(e,r,n.mask.numBytes)).getInt16(0,!0),s=2,l=0;do{if(o>0)for(;o--;)f[l++]=i.getUint8(s++);else{var u=i.getUint8(s++);for(o=-o;o--;)f[l++]=u}o=i.getInt16(s,!0),s+=2}while(s<n.mask.numBytes);if(-32768!==o||l<f.length)throw"Unexpected end of mask RLE encoding";n.mask.bitset=f,r+=n.mask.numBytes}else 0==(n.mask.numBytes|n.mask.numBlocksY|n.mask.maxValue)&&(n.mask.bitset=new Uint8Array(Math.ceil(n.width*n.height/8)));i=new DataView(e,r,16),n.pixels={},n.pixels.numBlocksY=i.getUint32(0,!0),n.pixels.numBlocksX=i.getUint32(4,!0),n.pixels.numBytes=i.getUint32(8,!0),n.pixels.maxValue=i.getFloat32(12,!0),r+=16;var c=n.pixels.numBlocksX,w=n.pixels.numBlocksY,h=c+(n.width%c>0?1:0),d=w+(n.height%w>0?1:0);n.pixels.blocks=new Array(h*d);for(var v=0,y=0;y<d;y++)for(var k=0;k<h;k++){var A=0,m=e.byteLength-r;i=new DataView(e,r,Math.min(10,m));var U={};n.pixels.blocks[v++]=U;var b=i.getUint8(0);if(A++,U.encoding=63&b,U.encoding>3)throw"Invalid block encoding ("+U.encoding+")";if(2!==U.encoding){if(0!==b&&2!==b){if(b>>=6,U.offsetType=b,2===b)U.offset=i.getInt8(1),A++;else if(1===b)U.offset=i.getInt16(1,!0),A+=2;else{if(0!==b)throw"Invalid block offset type";U.offset=i.getFloat32(1,!0),A+=4}if(1===U.encoding)if(b=i.getUint8(A),A++,U.bitsPerPixel=63&b,b>>=6,U.numValidPixelsType=b,2===b)U.numValidPixels=i.getUint8(A),A++;else if(1===b)U.numValidPixels=i.getUint16(A,!0),A+=2;else{if(0!==b)throw"Invalid valid pixel count type";U.numValidPixels=i.getUint32(A,!0),A+=4}}var p;if(r+=A,3!==U.encoding)if(0===U.encoding){var M=(n.pixels.numBytes-1)/4;if(M!==Math.floor(M))throw"uncompressed block has invalid length";p=new ArrayBuffer(4*M),new Uint8Array(p).set(new Uint8Array(e,r,4*M));var V=new Float32Array(p);U.rawData=V,r+=4*M}else if(1===U.encoding){var x=Math.ceil(U.numValidPixels*U.bitsPerPixel/8),g=Math.ceil(x/4);p=new ArrayBuffer(4*g),new Uint8Array(p).set(new Uint8Array(e,r,x)),U.stuffedData=new Uint32Array(p),r+=x}}else r++}return n.eofOffset=r,n},s=function(e,r,a,n,t,i,f){var o,s,l,u=(1<<r)-1,c=0,w=0,h=Math.ceil((f-n)/t),d=4*e.length-Math.ceil(r*a/8);for(e[e.length-1]<<=8*d,o=0;o<a;o++){if(0===w&&(l=e[c++],w=32),w>=r)s=l>>>w-r&u,w-=r;else{var v=r-w;s=(l&u)<<v&u,s+=(l=e[c++])>>>(w=32-v)}i[o]=s<h?n+s*t:f}return i},c=n,w=function(){"use strict";var e=function(e,r,a,n,t,i,f,o){var s,l,u,c,w,h=(1<<a)-1,d=0,v=0,y=4*e.length-Math.ceil(a*n/8);if(e[e.length-1]<<=8*y,t)for(s=0;s<n;s++)0===v&&(u=e[d++],v=32),v>=a?(l=u>>>v-a&h,v-=a):(l=(u&h)<<(c=a-v)&h,l+=(u=e[d++])>>>(v=32-c)),r[s]=t[l];else for(w=Math.ceil((o-i)/f),s=0;s<n;s++)0===v&&(u=e[d++],v=32),v>=a?(l=u>>>v-a&h,v-=a):(l=(u&h)<<(c=a-v)&h,l+=(u=e[d++])>>>(v=32-c)),r[s]=l<w?i+l*f:o},r=function(e,r,a,n,t,i){var f,o=(1<<r)-1,s=0,l=0,u=0,c=0,w=0,h=[],d=4*e.length-Math.ceil(r*a/8);e[e.length-1]<<=8*d;var v=Math.ceil((i-n)/t);for(l=0;l<a;l++)0===c&&(f=e[s++],c=32),c>=r?(w=f>>>c-r&o,c-=r):(w=(f&o)<<(u=r-c)&o,w+=(f=e[s++])>>>(c=32-u)),h[l]=w<v?n+w*t:i;return h.unshift(n),h},a=function(e,r,a,n,t,i,f,o){var s,l,u,c,w=(1<<a)-1,h=0,d=0,v=0;if(t)for(s=0;s<n;s++)0===d&&(u=e[h++],d=32,v=0),d>=a?(l=u>>>v&w,d-=a,v+=a):(l=u>>>v&w,d=32-(c=a-d),l|=((u=e[h++])&(1<<c)-1)<<a-c,v=c),r[s]=t[l];else{var y=Math.ceil((o-i)/f);for(s=0;s<n;s++)0===d&&(u=e[h++],d=32,v=0),d>=a?(l=u>>>v&w,d-=a,v+=a):(l=u>>>v&w,d=32-(c=a-d),l|=((u=e[h++])&(1<<c)-1)<<a-c,v=c),r[s]=l<y?i+l*f:o}return r},n=function(e,r,a,n,t,i){var f,o=(1<<r)-1,s=0,l=0,u=0,c=0,w=0,h=0,d=[],v=Math.ceil((i-n)/t);for(l=0;l<a;l++)0===c&&(f=e[s++],c=32,h=0),c>=r?(w=f>>>h&o,c-=r,h+=r):(w=f>>>h&o,c=32-(u=r-c),w|=((f=e[s++])&(1<<u)-1)<<r-u,h=u),d[l]=w<v?n+w*t:i;return d.unshift(n),d},t=function(e,r,a,n){var t,i,f,o,s=(1<<a)-1,l=0,u=0,c=4*e.length-Math.ceil(a*n/8);for(e[e.length-1]<<=8*c,t=0;t<n;t++)0===u&&(f=e[l++],u=32),u>=a?(i=f>>>u-a&s,u-=a):(i=(f&s)<<(o=a-u)&s,i+=(f=e[l++])>>>(u=32-o)),r[t]=i;return r},i=function(e,r,a,n){var t,i,f,o,s=(1<<a)-1,l=0,u=0,c=0;for(t=0;t<n;t++)0===u&&(f=e[l++],u=32,c=0),u>=a?(i=f>>>c&s,u-=a,c+=a):(i=f>>>c&s,u=32-(o=a-u),i|=((f=e[l++])&(1<<o)-1)<<a-o,c=o),r[t]=i;return r},f={HUFFMAN_LUT_BITS_MAX:12,computeChecksumFletcher32:function(e){for(var r=65535,a=65535,n=e.length,t=Math.floor(n/2),i=0;t;){var f=t>=359?359:t;t-=f;do{r+=e[i++]<<8,a+=r+=e[i++]}while(--f);r=(65535&r)+(r>>>16),a=(65535&a)+(a>>>16)}return 1&n&&(a+=r+=e[i]<<8),((a=(65535&a)+(a>>>16))<<16|(r=(65535&r)+(r>>>16)))>>>0},readHeaderInfo:function(e,r){var a=r.ptr,n=new Uint8Array(e,a,6),t={};if(t.fileIdentifierString=String.fromCharCode.apply(null,n),0!==t.fileIdentifierString.lastIndexOf("Lerc2",0))throw"Unexpected file identifier string (expect Lerc2 ): "+t.fileIdentifierString;a+=6;var i,f=new DataView(e,a,8),o=f.getInt32(0,!0);if(t.fileVersion=o,a+=4,o>=3&&(t.checksum=f.getUint32(4,!0),a+=4),f=new DataView(e,a,12),t.height=f.getUint32(0,!0),t.width=f.getUint32(4,!0),a+=8,o>=4?(t.numDims=f.getUint32(8,!0),a+=4):t.numDims=1,f=new DataView(e,a,40),t.numValidPixel=f.getUint32(0,!0),t.microBlockSize=f.getInt32(4,!0),t.blobSize=f.getInt32(8,!0),t.imageType=f.getInt32(12,!0),t.maxZError=f.getFloat64(16,!0),t.zMin=f.getFloat64(24,!0),t.zMax=f.getFloat64(32,!0),a+=40,r.headerInfo=t,r.ptr=a,o>=3&&(i=o>=4?52:48,this.computeChecksumFletcher32(new Uint8Array(e,a-i,t.blobSize-14))!==t.checksum))throw"Checksum failed.";return!0},checkMinMaxRanges:function(e,r){var a=r.headerInfo,n=this.getDataTypeArray(a.imageType),t=a.numDims*this.getDataTypeSize(a.imageType),i=this.readSubArray(e,r.ptr,n,t),f=this.readSubArray(e,r.ptr+t,n,t);r.ptr+=2*t;var o,s=!0;for(o=0;o<a.numDims;o++)if(i[o]!==f[o]){s=!1;break}return a.minValues=i,a.maxValues=f,s},readSubArray:function(e,r,a,n){var t;if(a===Uint8Array)t=new Uint8Array(e,r,n);else{var i=new ArrayBuffer(n);new Uint8Array(i).set(new Uint8Array(e,r,n)),t=new a(i)}return t},readMask:function(e,r){var a,n,t=r.ptr,i=r.headerInfo,f=i.width*i.height,o=i.numValidPixel,s=new DataView(e,t,4),l={};if(l.numBytes=s.getUint32(0,!0),t+=4,(0===o||f===o)&&0!==l.numBytes)throw"invalid mask";if(0===o)a=new Uint8Array(Math.ceil(f/8)),l.bitset=a,n=new Uint8Array(f),r.pixels.resultMask=n,t+=l.numBytes;else if(l.numBytes>0){a=new Uint8Array(Math.ceil(f/8));var u=(s=new DataView(e,t,l.numBytes)).getInt16(0,!0),c=2,w=0,h=0;do{if(u>0)for(;u--;)a[w++]=s.getUint8(c++);else for(h=s.getUint8(c++),u=-u;u--;)a[w++]=h;u=s.getInt16(c,!0),c+=2}while(c<l.numBytes);if(-32768!==u||w<a.length)throw"Unexpected end of mask RLE encoding";n=new Uint8Array(f);var d=0,v=0;for(v=0;v<f;v++)7&v?(d=a[v>>3],d<<=7&v):d=a[v>>3],128&d&&(n[v]=1);r.pixels.resultMask=n,l.bitset=a,t+=l.numBytes}return r.ptr=t,r.mask=l,!0},readDataOneSweep:function(e,r,a,n){var t,i=r.ptr,o=r.headerInfo,s=o.numDims,l=o.width*o.height,u=o.imageType,c=o.numValidPixel*f.getDataTypeSize(u)*s,w=r.pixels.resultMask;if(a===Uint8Array)t=new Uint8Array(e,i,c);else{var h=new ArrayBuffer(c);new Uint8Array(h).set(new Uint8Array(e,i,c)),t=new a(h)}if(t.length===l*s)r.pixels.resultPixels=n?f.swapDimensionOrder(t,l,s,a,!0):t;else{r.pixels.resultPixels=new a(l*s);var d=0,v=0,y=0,k=0;if(s>1){if(n){for(v=0;v<l;v++)if(w[v])for(k=v,y=0;y<s;y++,k+=l)r.pixels.resultPixels[k]=t[d++]}else for(v=0;v<l;v++)if(w[v])for(k=v*s,y=0;y<s;y++)r.pixels.resultPixels[k+y]=t[d++]}else for(v=0;v<l;v++)w[v]&&(r.pixels.resultPixels[v]=t[d++])}return i+=c,r.ptr=i,!0},readHuffmanTree:function(e,r){var a=this.HUFFMAN_LUT_BITS_MAX,n=new DataView(e,r.ptr,16);if(r.ptr+=16,n.getInt32(0,!0)<2)throw"unsupported Huffman version";var t=n.getInt32(4,!0),i=n.getInt32(8,!0),s=n.getInt32(12,!0);if(i>=s)return!1;var l=new Uint32Array(s-i);f.decodeBits(e,r,l);var u,c,w,h,d=[];for(u=i;u<s;u++)d[c=u-(u<t?0:t)]={first:l[u-i],second:null};var v=e.byteLength-r.ptr,y=Math.ceil(v/4),k=new ArrayBuffer(4*y);new Uint8Array(k).set(new Uint8Array(e,r.ptr,v));var A,m=new Uint32Array(k),U=0,b=0;for(A=m[0],u=i;u<s;u++)(h=d[c=u-(u<t?0:t)].first)>0&&(d[c].second=A<<U>>>32-h,32-U>=h?32===(U+=h)&&(U=0,A=m[++b]):(U+=h-32,A=m[++b],d[c].second|=A>>>32-U));var p=0,M=0,V=new o;for(u=0;u<d.length;u++)void 0!==d[u]&&(p=Math.max(p,d[u].first));M=p>=a?a:p;var x,g,D,B,I,S=[];for(u=i;u<s;u++)if((h=d[c=u-(u<t?0:t)].first)>0)if(x=[h,c],h<=M)for(g=d[c].second<<M-h,D=1<<M-h,w=0;w<D;w++)S[g|w]=x;else for(g=d[c].second,I=V,B=h-1;B>=0;B--)g>>>B&1?(I.right||(I.right=new o),I=I.right):(I.left||(I.left=new o),I=I.left),0!==B||I.val||(I.val=x[1]);return{decodeLut:S,numBitsLUTQick:M,numBitsLUT:p,tree:V,stuffedData:m,srcPtr:b,bitPos:U}},readHuffman:function(e,r,a,n){var t,i,o,s,l,u,c,w,h,d=r.headerInfo.numDims,v=r.headerInfo.height,y=r.headerInfo.width,k=y*v,A=this.readHuffmanTree(e,r),m=A.decodeLut,U=A.tree,b=A.stuffedData,p=A.srcPtr,M=A.bitPos,V=A.numBitsLUTQick,x=A.numBitsLUT,g=0===r.headerInfo.imageType?128:0,D=r.pixels.resultMask,B=0;M>0&&(p++,M=0);var I,S=b[p],T=1===r.encodeMode,F=new a(k*d),L=F;if(d<2||T){for(I=0;I<d;I++)if(d>1&&(L=new a(F.buffer,k*I,k),B=0),r.headerInfo.numValidPixel===y*v)for(w=0,u=0;u<v;u++)for(c=0;c<y;c++,w++){if(i=0,l=s=S<<M>>>32-V,32-M<V&&(l=s|=b[p+1]>>>64-M-V),m[l])i=m[l][1],M+=m[l][0];else for(l=s=S<<M>>>32-x,32-M<x&&(l=s|=b[p+1]>>>64-M-x),t=U,h=0;h<x;h++)if(!(t=s>>>x-h-1&1?t.right:t.left).left&&!t.right){i=t.val,M=M+h+1;break}M>=32&&(M-=32,S=b[++p]),o=i-g,T?(o+=c>0?B:u>0?L[w-y]:B,o&=255,L[w]=o,B=o):L[w]=o}else for(w=0,u=0;u<v;u++)for(c=0;c<y;c++,w++)if(D[w]){if(i=0,l=s=S<<M>>>32-V,32-M<V&&(l=s|=b[p+1]>>>64-M-V),m[l])i=m[l][1],M+=m[l][0];else for(l=s=S<<M>>>32-x,32-M<x&&(l=s|=b[p+1]>>>64-M-x),t=U,h=0;h<x;h++)if(!(t=s>>>x-h-1&1?t.right:t.left).left&&!t.right){i=t.val,M=M+h+1;break}M>=32&&(M-=32,S=b[++p]),o=i-g,T?(c>0&&D[w-1]?o+=B:u>0&&D[w-y]?o+=L[w-y]:o+=B,o&=255,L[w]=o,B=o):L[w]=o}}else for(w=0,u=0;u<v;u++)for(c=0;c<y;c++)if(w=u*y+c,!D||D[w])for(I=0;I<d;I++,w+=k){if(i=0,l=s=S<<M>>>32-V,32-M<V&&(l=s|=b[p+1]>>>64-M-V),m[l])i=m[l][1],M+=m[l][0];else for(l=s=S<<M>>>32-x,32-M<x&&(l=s|=b[p+1]>>>64-M-x),t=U,h=0;h<x;h++)if(!(t=s>>>x-h-1&1?t.right:t.left).left&&!t.right){i=t.val,M=M+h+1;break}M>=32&&(M-=32,S=b[++p]),o=i-g,L[w]=o}r.ptr=r.ptr+4*(p+1)+(M>0?4:0),r.pixels.resultPixels=F,d>1&&!n&&(r.pixels.resultPixels=f.swapDimensionOrder(F,k,d,a))},decodeBits:function(f,o,s,l,u){var c=o.headerInfo,w=c.fileVersion,h=0,d=f.byteLength-o.ptr>=5?5:f.byteLength-o.ptr,v=new DataView(f,o.ptr,d),y=v.getUint8(0);h++;var k=y>>6,A=0===k?4:3-k,m=(32&y)>0,U=31&y,b=0;if(1===A)b=v.getUint8(h),h++;else if(2===A)b=v.getUint16(h,!0),h+=2;else{if(4!==A)throw"Invalid valid pixel count type";b=v.getUint32(h,!0),h+=4}var p,M,V,x,g,D,B,I,S,T=2*c.maxZError,F=c.numDims>1?c.maxValues[u]:c.zMax;if(m){for(o.counter.lut++,I=v.getUint8(h),h++,x=Math.ceil((I-1)*U/8),g=Math.ceil(x/4),M=new ArrayBuffer(4*g),V=new Uint8Array(M),o.ptr+=h,V.set(new Uint8Array(f,o.ptr,x)),B=new Uint32Array(M),o.ptr+=x,S=0;I-1>>>S;)S++;x=Math.ceil(b*S/8),g=Math.ceil(x/4),M=new ArrayBuffer(4*g),(V=new Uint8Array(M)).set(new Uint8Array(f,o.ptr,x)),p=new Uint32Array(M),o.ptr+=x,D=w>=3?n(B,U,I-1,l,T,F):r(B,U,I-1,l,T,F),w>=3?a(p,s,S,b,D):e(p,s,S,b,D)}else o.counter.bitstuffer++,S=U,o.ptr+=h,S>0&&(x=Math.ceil(b*S/8),g=Math.ceil(x/4),M=new ArrayBuffer(4*g),(V=new Uint8Array(M)).set(new Uint8Array(f,o.ptr,x)),p=new Uint32Array(M),o.ptr+=x,w>=3?null==l?i(p,s,S,b):a(p,s,S,b,!1,l,T,F):null==l?t(p,s,S,b):e(p,s,S,b,!1,l,T,F))},readTiles:function(e,r,a,n){var t=r.headerInfo,i=t.width,o=t.height,s=i*o,l=t.microBlockSize,u=t.imageType,c=f.getDataTypeSize(u),w=Math.ceil(i/l),h=Math.ceil(o/l);r.pixels.numBlocksY=h,r.pixels.numBlocksX=w,r.pixels.ptr=0;var d,v,y,k,A,m,U,b,p,M,V=0,x=0,g=0,D=0,B=0,I=0,S=0,T=0,F=0,L=0,P=0,C=0,E=0,O=0,H=0,R=new a(l*l),X=o%l||l,Z=i%l||l,z=t.numDims,N=r.pixels.resultMask,Y=r.pixels.resultPixels,_=t.fileVersion>=5?14:15,j=t.zMax;for(g=0;g<h;g++)for(B=g!==h-1?l:X,D=0;D<w;D++)for(L=g*i*l+D*l,P=i-(I=D!==w-1?l:Z),b=0;b<z;b++){if(z>1?(M=Y,L=g*i*l+D*l,Y=new a(r.pixels.resultPixels.buffer,s*b*c,s),j=t.maxValues[b]):M=null,S=e.byteLength-r.ptr,v={},H=0,T=(d=new DataView(e,r.ptr,Math.min(10,S))).getUint8(0),H++,p=t.fileVersion>=5?4&T:0,F=T>>6&255,(T>>2&_)!=(D*l>>3&_))throw"integrity issue";if(p&&0===b)throw"integrity issue";if((A=3&T)>3)throw r.ptr+=H,"Invalid block encoding ("+A+")";if(2!==A)if(0===A){if(p)throw"integrity issue";if(r.counter.uncompressed++,r.ptr+=H,C=(C=B*I*c)<(E=e.byteLength-r.ptr)?C:E,y=new ArrayBuffer(C%c==0?C:C+c-C%c),new Uint8Array(y).set(new Uint8Array(e,r.ptr,C)),k=new a(y),O=0,N)for(V=0;V<B;V++){for(x=0;x<I;x++)N[L]&&(Y[L]=k[O++]),L++;L+=P}else for(V=0;V<B;V++){for(x=0;x<I;x++)Y[L++]=k[O++];L+=P}r.ptr+=O*c}else if(m=f.getDataTypeUsed(p&&u<6?4:u,F),U=f.getOnePixel(v,H,m,d),H+=f.getDataTypeSize(m),3===A)if(r.ptr+=H,r.counter.constantoffset++,N)for(V=0;V<B;V++){for(x=0;x<I;x++)N[L]&&(Y[L]=p?Math.min(j,M[L]+U):U),L++;L+=P}else for(V=0;V<B;V++){for(x=0;x<I;x++)Y[L]=p?Math.min(j,M[L]+U):U,L++;L+=P}else if(r.ptr+=H,f.decodeBits(e,r,R,U,b),H=0,p)if(N)for(V=0;V<B;V++){for(x=0;x<I;x++)N[L]&&(Y[L]=R[H++]+M[L]),L++;L+=P}else for(V=0;V<B;V++){for(x=0;x<I;x++)Y[L]=R[H++]+M[L],L++;L+=P}else if(N)for(V=0;V<B;V++){for(x=0;x<I;x++)N[L]&&(Y[L]=R[H++]),L++;L+=P}else for(V=0;V<B;V++){for(x=0;x<I;x++)Y[L++]=R[H++];L+=P}else{if(p)if(N)for(V=0;V<B;V++)for(x=0;x<I;x++)N[L]&&(Y[L]=M[L]),L++;else for(V=0;V<B;V++)for(x=0;x<I;x++)Y[L]=M[L],L++;r.counter.constant++,r.ptr+=H}}z>1&&!n&&(r.pixels.resultPixels=f.swapDimensionOrder(r.pixels.resultPixels,s,z,a))},formatFileInfo:function(e){return{fileIdentifierString:e.headerInfo.fileIdentifierString,fileVersion:e.headerInfo.fileVersion,imageType:e.headerInfo.imageType,height:e.headerInfo.height,width:e.headerInfo.width,numValidPixel:e.headerInfo.numValidPixel,microBlockSize:e.headerInfo.microBlockSize,blobSize:e.headerInfo.blobSize,maxZError:e.headerInfo.maxZError,pixelType:f.getPixelType(e.headerInfo.imageType),eofOffset:e.eofOffset,mask:e.mask?{numBytes:e.mask.numBytes}:null,pixels:{numBlocksX:e.pixels.numBlocksX,numBlocksY:e.pixels.numBlocksY,maxValue:e.headerInfo.zMax,minValue:e.headerInfo.zMin,noDataValue:e.noDataValue}}},constructConstantSurface:function(e,r){var a=e.headerInfo.zMax,n=e.headerInfo.zMin,t=e.headerInfo.maxValues,i=e.headerInfo.numDims,f=e.headerInfo.height*e.headerInfo.width,o=0,s=0,l=0,u=e.pixels.resultMask,c=e.pixels.resultPixels;if(u)if(i>1){if(r)for(o=0;o<i;o++)for(l=o*f,a=t[o],s=0;s<f;s++)u[s]&&(c[l+s]=a);else for(s=0;s<f;s++)if(u[s])for(l=s*i,o=0;o<i;o++)c[l+i]=t[o]}else for(s=0;s<f;s++)u[s]&&(c[s]=a);else if(i>1&&n!==a)if(r)for(o=0;o<i;o++)for(l=o*f,a=t[o],s=0;s<f;s++)c[l+s]=a;else for(s=0;s<f;s++)for(l=s*i,o=0;o<i;o++)c[l+o]=t[o];else for(s=0;s<f*i;s++)c[s]=a},getDataTypeArray:function(e){var r;switch(e){case 0:r=Int8Array;break;case 1:r=Uint8Array;break;case 2:r=Int16Array;break;case 3:r=Uint16Array;break;case 4:r=Int32Array;break;case 5:r=Uint32Array;break;case 6:default:r=Float32Array;break;case 7:r=Float64Array}return r},getPixelType:function(e){var r;switch(e){case 0:r="S8";break;case 1:r="U8";break;case 2:r="S16";break;case 3:r="U16";break;case 4:r="S32";break;case 5:r="U32";break;case 6:default:r="F32";break;case 7:r="F64"}return r},isValidPixelValue:function(e,r){if(null==r)return!1;var a;switch(e){case 0:a=r>=-128&&r<=127;break;case 1:a=r>=0&&r<=255;break;case 2:a=r>=-32768&&r<=32767;break;case 3:a=r>=0&&r<=65536;break;case 4:a=r>=-2147483648&&r<=2147483647;break;case 5:a=r>=0&&r<=4294967296;break;case 6:a=r>=-34027999387901484e22&&r<=34027999387901484e22;break;case 7:a=r>=-17976931348623157e292&&r<=17976931348623157e292;break;default:a=!1}return a},getDataTypeSize:function(e){var r=0;switch(e){case 0:case 1:r=1;break;case 2:case 3:r=2;break;case 4:case 5:case 6:r=4;break;case 7:r=8;break;default:r=e}return r},getDataTypeUsed:function(e,r){var a=e;switch(e){case 2:case 4:a=e-r;break;case 3:case 5:a=e-2*r;break;case 6:a=0===r?e:1===r?2:1;break;case 7:a=0===r?e:e-2*r+1;break;default:a=e}return a},getOnePixel:function(e,r,a,n){var t=0;switch(a){case 0:t=n.getInt8(r);break;case 1:t=n.getUint8(r);break;case 2:t=n.getInt16(r,!0);break;case 3:t=n.getUint16(r,!0);break;case 4:t=n.getInt32(r,!0);break;case 5:t=n.getUInt32(r,!0);break;case 6:t=n.getFloat32(r,!0);break;case 7:t=n.getFloat64(r,!0);break;default:throw"the decoder does not understand this pixel type"}return t},swapDimensionOrder:function(e,r,a,n,t){var i=0,f=0,o=0,s=0,l=e;if(a>1)if(l=new n(r*a),t)for(i=0;i<r;i++)for(s=i,o=0;o<a;o++,s+=r)l[s]=e[f++];else for(i=0;i<r;i++)for(s=i,o=0;o<a;o++,s+=r)l[f++]=e[s];return l}},o=function(e,r,a){this.val=e,this.left=r,this.right=a};return{decode:function(e,r){var a=(r=r||{}).noDataValue,n=0,t={};if(t.ptr=r.inputOffset||0,t.pixels={},f.readHeaderInfo(e,t)){var i=t.headerInfo,o=i.fileVersion,s=f.getDataTypeArray(i.imageType);if(o>5)throw"unsupported lerc version 2."+o;f.readMask(e,t),i.numValidPixel===i.width*i.height||t.pixels.resultMask||(t.pixels.resultMask=r.maskData);var l=i.width*i.height;t.pixels.resultPixels=new s(l*i.numDims),t.counter={onesweep:0,uncompressed:0,lut:0,bitstuffer:0,constant:0,constantoffset:0};var u,c=!r.returnPixelInterleavedDims;if(0!==i.numValidPixel)if(i.zMax===i.zMin)f.constructConstantSurface(t,c);else if(o>=4&&f.checkMinMaxRanges(e,t))f.constructConstantSurface(t,c);else{var w=new DataView(e,t.ptr,2),h=w.getUint8(0);if(t.ptr++,h)f.readDataOneSweep(e,t,s,c);else if(o>1&&i.imageType<=1&&Math.abs(i.maxZError-.5)<1e-5){var d=w.getUint8(1);if(t.ptr++,t.encodeMode=d,d>2||o<4&&d>1)throw"Invalid Huffman flag "+d;d?f.readHuffman(e,t,s,c):f.readTiles(e,t,s,c)}else f.readTiles(e,t,s,c)}t.eofOffset=t.ptr,r.inputOffset?(u=t.headerInfo.blobSize+r.inputOffset-t.ptr,Math.abs(u)>=1&&(t.eofOffset=r.inputOffset+t.headerInfo.blobSize)):(u=t.headerInfo.blobSize-t.ptr,Math.abs(u)>=1&&(t.eofOffset=t.headerInfo.blobSize));var v={width:i.width,height:i.height,pixelData:t.pixels.resultPixels,minValue:i.zMin,maxValue:i.zMax,validPixelCount:i.numValidPixel,dimCount:i.numDims,dimStats:{minValues:i.minValues,maxValues:i.maxValues},maskData:t.pixels.resultMask};if(t.pixels.resultMask&&f.isValidPixelValue(i.imageType,a)){var y=t.pixels.resultMask;for(n=0;n<l;n++)y[n]||(v.pixelData[n]=a);v.noDataValue=a}return t.noDataValue=a,r.returnFileInfo&&(v.fileInfo=f.formatFileInfo(t)),v}},getBandCount:function(e){for(var r=0,a=0,n={ptr:0,pixels:{}};a<e.byteLength-58;)f.readHeaderInfo(e,n),a+=n.headerInfo.blobSize,r++,n.ptr=a;return r}}}(),l=new ArrayBuffer(4),u=new Uint8Array(l),new Uint32Array(l)[0]=1,h=1===u[0],d={decode:function(e,r){if(!h)throw"Big endian system is not supported.";var a,n,t=(r=r||{}).inputOffset||0,i=new Uint8Array(e,t,10),f=String.fromCharCode.apply(null,i);if("CntZImage"===f.trim())a=c,n=1;else{if("Lerc2"!==f.substring(0,5))throw"Unexpected file identifier string: "+f;a=w,n=2}for(var o,s,l,u,d,v,y=0,k=e.byteLength-10,A=[],m={width:0,height:0,pixels:[],pixelType:r.pixelType,mask:null,statistics:[]},U=0;t<k;){var b=a.decode(e,{inputOffset:t,encodedMaskData:o,maskData:l,returnMask:0===y,returnEncodedMask:0===y,returnFileInfo:!0,returnPixelInterleavedDims:r.returnPixelInterleavedDims,pixelType:r.pixelType||null,noDataValue:r.noDataValue||null});t=b.fileInfo.eofOffset,l=b.maskData,0===y&&(o=b.encodedMaskData,m.width=b.width,m.height=b.height,m.dimCount=b.dimCount||1,m.pixelType=b.pixelType||b.fileInfo.pixelType,m.mask=l),n>1&&(l&&A.push(l),b.fileInfo.mask&&b.fileInfo.mask.numBytes>0&&U++),y++,m.pixels.push(b.pixelData),m.statistics.push({minValue:b.minValue,maxValue:b.maxValue,noDataValue:b.noDataValue,dimStats:b.dimStats})}if(n>1&&U>1){for(v=m.width*m.height,m.bandMasks=A,(l=new Uint8Array(v)).set(A[0]),u=1;u<A.length;u++)for(s=A[u],d=0;d<v;d++)l[d]=l[d]&s[d];m.maskData=l}return m}},void 0===(a=function(){return d}.apply(r,[]))||(e.exports=a)},54:function(e,r,a){"use strict";a.r(r),a.d(r,{default:function(){return o}});var n=a(535),t=a(943),i=a(165),f=a(150);class o extends i.Z{constructor(e){super(),this.planarConfiguration=void 0!==e.PlanarConfiguration?e.PlanarConfiguration:1,this.samplesPerPixel=void 0!==e.SamplesPerPixel?e.SamplesPerPixel:1,this.addCompression=e.LercParameters[f.L5.AddCompression]}decodeBlock(e){switch(this.addCompression){case f.Qb.None:break;case f.Qb.Deflate:e=(0,n.rr)(new Uint8Array(e)).buffer;break;default:throw new Error(`Unsupported LERC additional compression method identifier: ${this.addCompression}`)}return t.decode(e,{returnPixelInterleavedDims:1===this.planarConfiguration}).pixels[0].buffer}}}}]);
//# sourceMappingURL=54.ol.js.map