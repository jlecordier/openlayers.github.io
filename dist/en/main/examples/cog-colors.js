"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2859],{248:function(e,t,n){var a=n(6781),l=n(1055),o=n(463);const u=document.getElementById("min-color");u.value="#0300AD";const s=document.getElementById("max-color");s.value="#00ff00";const r=document.getElementById("min-value-output"),c=document.getElementById("min-value-input");c.value=(-.5).toString();const i=document.getElementById("max-value-output"),d=document.getElementById("max-value-input");function v(){const e={},t=u.value,n=s.value,a=chroma.scale([t,n]).mode("lab"),l=parseFloat(c.value),o=(parseFloat(d.value)-l)/10;for(let t=0;t<=10;++t){const n=a(t/10).rgb(),u=l+t*o;e[`value${t}`]=u,e[`red${t}`]=n[0],e[`green${t}`]=n[1],e[`blue${t}`]=n[2]}return e}d.value=.7.toString();const m=new a.Z({sources:[{url:"https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/2020/S2A_36QWD_20200701_0_L2A/B04.tif",max:1e4},{url:"https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/2020/S2A_36QWD_20200701_0_L2A/B08.tif",max:1e4}]}),p=new o.Z({style:{variables:v(),color:["interpolate",["linear"],["/",["-",["band",2],["band",1]],["+",["band",2],["band",1]]],...function(){const e=[];for(let t=0;t<=10;++t){e[2*t]=["var",`value${t}`];const n=["var",`red${t}`],a=["var",`green${t}`],l=["var",`blue${t}`];e[2*t+1]=["color",n,a,l]}return e}()]},source:m});function g(){p.updateStyleVariables(v()),r.innerText=parseFloat(c.value).toFixed(1),i.innerText=parseFloat(d.value).toFixed(1)}u.addEventListener("input",g),s.addEventListener("input",g),c.addEventListener("input",g),d.addEventListener("input",g),g();new l.Z({target:"map",layers:[p],view:m.getView()})}},function(e){var t;t=248,e(e.s=t)}]);
//# sourceMappingURL=cog-colors.js.map