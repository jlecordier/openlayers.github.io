(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{408:function(e,t,r){"use strict";r.r(t);var o=r(23),a=r(3),n=r(2),i=r(22),u=r(38),c=r(167),w=r(18),g=r(32),s=r(75);function A(e,t,r,o,a,n){var i,u;void 0!==a?(i=a,u=void 0!==n?n:0):(i=[],u=0);for(var c=t;c<r;){var w=e[c++];i[u++]=e[c++],i[u++]=w;for(var g=2;g<o;++g)i[u++]=e[c++]}return i.length=u,i}var y=r(84),m=r(5);function B(e){for(var t,r="";e>=32;)t=63+(32|31&e),r+=String.fromCharCode(t),e>>=5;return t=e+63,r+=String.fromCharCode(t)}var k,_,d=function(e){function t(t){e.call(this);var r=t||{};this.dataProjection=Object(m.g)("EPSG:4326"),this.factor_=r.factor?r.factor:1e5,this.geometryLayout_=r.geometryLayout?r.geometryLayout:w.a.XY}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.readFeatureFromText=function(e,t){var r=this.readGeometryFromText(e,t);return new o.a(r)},t.prototype.readFeaturesFromText=function(e,t){return[this.readFeatureFromText(e,t)]},t.prototype.readGeometryFromText=function(e,t){var r=Object(s.b)(this.geometryLayout_),o=function(e,t,r){var o,a=r||1e5,n=new Array(t);for(o=0;o<t;++o)n[o]=0;for(var i=function(e,t){for(var r=t||1e5,o=function(e){for(var t=function(e){for(var t=[],r=0,o=0,a=0,n=e.length;a<n;++a){var i=e.charCodeAt(a)-63;r|=(31&i)<<o,i<32?(t.push(r),r=0,o=0):o+=5}return t}(e),r=0,o=t.length;r<o;++r){var a=t[r];t[r]=1&a?~(a>>1):a>>1}return t}(e),a=0,n=o.length;a<n;++a)o[a]/=r;return o}(e,a),u=0,c=i.length;u<c;)for(o=0;o<t;++o,++u)n[o]+=i[u],i[u]=n[o];return i}(e,r,this.factor_);A(o,0,o.length,r,o);var a=Object(y.a)(o,0,o.length,r),n=new g.a(a,this.geometryLayout_);return Object(u.c)(n,!1,this.adaptOptions(t))},t.prototype.writeFeatureText=function(e,t){var r=e.getGeometry();return r?this.writeGeometryText(r,t):(Object(i.a)(!1,40),"")},t.prototype.writeFeaturesText=function(e,t){return this.writeFeatureText(e[0],t)},t.prototype.writeGeometryText=function(e,t){var r=(e=Object(u.c)(e,!0,this.adaptOptions(t))).getFlatCoordinates(),o=e.getStride();return A(r,0,r.length,o,r),function(e,t,r){var o,a=r||1e5,n=new Array(t);for(o=0;o<t;++o)n[o]=0;for(var i=0,u=e.length;i<u;)for(o=0;o<t;++o,++i){var c=e[i],w=c-n[o];n[o]=c,e[i]=w}return function(e,t){for(var r=t||1e5,o=0,a=e.length;o<a;++o)e[o]=Math.round(e[o]*r);return function(e){for(var t=0,r=e.length;t<r;++t){var o=e[t];e[t]=o<0?~(o<<1):o<<1}return function(e){for(var t="",r=0,o=e.length;r<o;++r)t+=B(e[r]);return t}(e)}(e)}(e,a)}(r,o,this.factor_)},t}(c.a),f=r(26),C=r(21),h=r(6),l=r(41),q=r(13),p=r(14),v=r(19),D=r(95),b=r(48),F=r(25),E=r(64),G=["hldhx@lnau`BCG_EaC??cFjAwDjF??uBlKMd@}@z@??aC^yk@z_@se@b[wFdE??wFfE}N","fIoGxB_I\\gG}@eHoCyTmPqGaBaHOoD\\??yVrGotA|N??o[N_STiwAtEmHGeHcAkiA}^","aMyBiHOkFNoI`CcVvM??gG^gF_@iJwC??eCcA]OoL}DwFyCaCgCcCwDcGwHsSoX??wI_E","kUFmq@hBiOqBgTwS??iYse@gYq\\cp@ce@{vA}s@csJqaE}{@iRaqE{lBeRoIwd@_T{]_","Ngn@{PmhEwaA{SeF_u@kQuyAw]wQeEgtAsZ}LiCarAkVwI}D??_}RcjEinPspDwSqCgs@","sPua@_OkXaMeT_Nwk@ob@gV}TiYs[uTwXoNmT{Uyb@wNg]{Nqa@oDgNeJu_@_G}YsFw]k","DuZyDmm@i_@uyIJe~@jCg|@nGiv@zUi_BfNqaAvIow@dEed@dCcf@r@qz@Egs@{Acu@mC","um@yIey@gGig@cK_m@aSku@qRil@we@{mAeTej@}Tkz@cLgr@aHko@qOmcEaJw~C{w@ka","i@qBchBq@kmBS{kDnBscBnFu_Dbc@_~QHeU`IuyDrC_}@bByp@fCyoA?qMbD}{AIkeAgB","k_A_A{UsDke@gFej@qH{o@qGgb@qH{`@mMgm@uQus@kL{_@yOmd@ymBgwE}x@ouBwtA__","DuhEgaKuWct@gp@cnBii@mlBa_@}|Asj@qrCg^eaC}L{dAaJ_aAiOyjByH{nAuYu`GsAw","Xyn@ywMyOyqD{_@cfIcDe}@y@aeBJmwA`CkiAbFkhBlTgdDdPyiB`W}xDnSa}DbJyhCrX","itAhT}x@bE}Z_@qW_Kwv@qKaaAiBgXvIm}A~JovAxCqW~WanB`XewBbK{_A`K}fBvAmi@","xBycBeCauBoF}}@qJioAww@gjHaPopA_NurAyJku@uGmi@cDs[eRaiBkQstAsQkcByNma","CsK_uBcJgbEw@gkB_@ypEqDoqSm@eZcDwjBoGw`BoMegBaU_`Ce_@_uBqb@ytBwkFqiT_","fAqfEwe@mfCka@_eC_UmlB}MmaBeWkkDeHwqAoX}~DcBsZmLcxBqOwqE_DkyAuJmrJ\\o","~CfIewG|YibQxBssB?es@qGciA}RorAoVajA_nAodD{[y`AgPqp@mKwr@ms@umEaW{dAm","b@umAw|@ojBwzDaaJsmBwbEgdCsrFqhAihDquAi`Fux@}_Dui@_eB_u@guCuyAuiHukA_","lKszAu|OmaA{wKm}@clHs_A_rEahCssKo\\sgBsSglAqk@yvDcS_wAyTwpBmPc|BwZknF","oFscB_GsaDiZmyMyLgtHgQonHqT{hKaPg}Dqq@m~Hym@c`EuiBudIabB{hF{pWifx@snA","w`GkFyVqf@y~BkoAi}Lel@wtc@}`@oaXi_C}pZsi@eqGsSuqJ|Lqeb@e]kgPcaAu}SkDw","zGhn@gjYh\\qlNZovJieBqja@ed@siO{[ol\\kCmjMe\\isHorCmec@uLebB}EqiBaCg}","@m@qwHrT_vFps@kkI`uAszIrpHuzYxx@e{Crw@kpDhN{wBtQarDy@knFgP_yCu\\wyCwy","A{kHo~@omEoYmoDaEcPiuAosDagD}rO{{AsyEihCayFilLaiUqm@_bAumFo}DgqA_uByi","@swC~AkzDlhA}xEvcBa}Cxk@ql@`rAo|@~bBq{@``Bye@djDww@z_C_cAtn@ye@nfC_eC","|gGahH~s@w}@``Fi~FpnAooC|u@wlEaEedRlYkrPvKerBfYs}Arg@m}AtrCkzElw@gjBb","h@woBhR{gCwGkgCc[wtCuOapAcFoh@uBy[yBgr@c@iq@o@wvEv@sp@`FajBfCaq@fIipA","dy@ewJlUc`ExGuaBdEmbBpBssArAuqBBg}@s@g{AkB{bBif@_bYmC}r@kDgm@sPq_BuJ_","s@{X_{AsK_d@eM{d@wVgx@oWcu@??aDmOkNia@wFoSmDyMyCkPiBePwAob@XcQ|@oNdCo","SfFwXhEmOnLi\\lbAulB`X_d@|k@au@bc@oc@bqC}{BhwDgcD`l@ed@??bL{G|a@eTje@","oS~]cLr~Bgh@|b@}Jv}EieAlv@sPluD{z@nzA_]`|KchCtd@sPvb@wSb{@ko@f`RooQ~e","[upZbuIolI|gFafFzu@iq@nMmJ|OeJn^{Qjh@yQhc@uJ~j@iGdd@kAp~BkBxO{@|QsAfY","gEtYiGd]}Jpd@wRhVoNzNeK`j@ce@vgK}cJnSoSzQkVvUm^rSgc@`Uql@xIq\\vIgg@~k","Dyq[nIir@jNoq@xNwc@fYik@tk@su@neB}uBhqEesFjoGeyHtCoD|D}Ed|@ctAbIuOzqB","_}D~NgY`\\um@v[gm@v{Cw`G`w@o{AdjAwzBh{C}`Gpp@ypAxn@}mAfz@{bBbNia@??jI","ab@`CuOlC}YnAcV`@_^m@aeB}@yk@YuTuBg^uCkZiGk\\yGeY}Lu_@oOsZiTe[uWi[sl@","mo@soAauAsrBgzBqgAglAyd@ig@asAcyAklA}qAwHkGi{@s~@goAmsAyDeEirB_{B}IsJ","uEeFymAssAkdAmhAyTcVkFeEoKiH}l@kp@wg@sj@ku@ey@uh@kj@}EsFmG}Jk^_r@_f@m","~@ym@yjA??a@cFd@kBrCgDbAUnAcBhAyAdk@et@??kF}D??OL"].join(""),j=new d({factor:1e6}).readGeometry(G,{dataProjection:"EPSG:4326",featureProjection:"EPSG:3857"}),O=j.getCoordinates(),x=O.length,S=new o.a({type:"route",geometry:j}),T=new o.a({type:"geoMarker",geometry:new f.a(O[0])}),I=new o.a({type:"icon",geometry:new f.a(O[0])}),J=new o.a({type:"icon",geometry:new f.a(O[x-1])}),H={route:new p.c({stroke:new v.a({width:6,color:[237,212,0,.8]})}),icon:new p.c({image:new D.a({anchor:[.5,1],src:"data/icon.png"})}),geoMarker:new p.c({image:new b.a({radius:7,fill:new F.a({color:"black"}),stroke:new v.a({color:"white",width:2})})})},L=!1,P=document.getElementById("speed"),z=document.getElementById("start-animation"),N=new C.a({source:new q.a({features:[S,T,I,J]}),style:function(e){return L&&"geoMarker"===e.get("type")?null:H[e.get("type")]}}),M=[-5639523.95,-3501274.52],K=new a.a({target:document.getElementById("map"),view:new n.a({center:M,zoom:10,minZoom:2,maxZoom:19}),layers:[new h.a({source:new l.a({imagerySet:"AerialWithLabelsOnDemand",key:"As1HiMj1PvLPlqc_gtM7AqZfBL8ZL3VrjaS3zIb22Uvb9WKhuJObROC-qUpa81U5"})}),N]}),Y=function(e){var t=Object(E.b)(e),r=e.frameState;if(L){var a=r.time-_,n=Math.round(k*a/1e3);if(n>=x)return void Z(!0);var i=new f.a(O[n]),u=new o.a(i);t.drawFeature(u,H.geoMarker)}K.render()};function Z(e){L=!1,z.textContent="Start Animation";var t=e?O[x-1]:O[0];T.getGeometry().setCoordinates(t),N.un("postrender",Y)}z.addEventListener("click",function(){L?Z(!1):(L=!0,_=(new Date).getTime(),k=P.value,z.textContent="Cancel Animation",T.setStyle(null),K.getView().setCenter(M),N.on("postrender",Y),K.render())},!1)}},[[408,0]]]);
//# sourceMappingURL=feature-move-animation.js.map