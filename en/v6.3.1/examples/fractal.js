(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{279:function(n,t,e){"use strict";e.r(t);var o=e(24),a=e(3),r=e(2),i=e(34),c=e(21),u=e(11),s=Math.cos(Math.PI/6),w=1e7*Math.sin(Math.PI/6),p=1e7*s,h=new i.a([[0,1e7],[p,-w],[-p,-w],[0,1e7]]),x=new o.a(h),f=new c.a({source:new u.a({features:[x]})});new a.a({layers:[f],target:"map",view:new r.a({center:[0,0],zoom:1})});function d(n){var t=n.next,e=n.point,o=n.next.point,a=o[0]-e[0],r=o[1]-e[1],i={point:[e[0]+a/3,e[1]+r/3]},c=Math.sqrt(a*a+r*r)/(2*s),u=Math.atan2(r,a)+Math.PI/6,w={point:[e[0]+c*Math.cos(u),e[1]+c*Math.sin(u)]},p={point:[o[0]-a/3,o[1]-r/3]};n.next=i,i.next=w,w.next=p,p.next=t}var v,m=document.getElementById("depth");function M(){!function(n){for(var t=h.clone(),e=function(n){for(var t={point:n[0]},e=n.length,o=0,a=t;o<e-1;++o)a.next={point:n[o+1]},a=a.next;return t}(t.getCoordinates()),o=0;o<n;++o)for(var a=e;a.next;){var r=a.next;d(a),a=r}var i=function(n){for(var t=[n.point],e=n,o=1;e.next;e=e.next,++o)t[o]=e.next.point;return t}(e);document.getElementById("count").innerHTML=i.length,t.setCoordinates(i),x.setGeometry(t)}(Number(m.value))}m.onchange=function(){window.clearTimeout(v),v=window.setTimeout(M,200)},M()}},[[279,0]]]);
//# sourceMappingURL=fractal.js.map