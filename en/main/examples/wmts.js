(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{415:function(e,r,t){"use strict";t.r(r);for(var a=t(3),i=t(9),s=t(5),n=t(2),o=t(84),c=t(149),p=t(4),w=t(1),l=Object(p.j)("EPSG:3857"),g=l.getExtent(),u=Object(w.F)(g)/256,m=new Array(14),y=new Array(14),S=0;S<14;++S)m[S]=u/Math.pow(2,S),y[S]=S;new a.a({layers:[new s.a({source:new i.b,opacity:.7}),new s.a({opacity:.7,source:new o.a({attributions:'Tiles © <a href="https://services.arcgisonline.com/arcgis/rest/services/Demographics/USA_Population_Density/MapServer/">ArcGIS</a>',url:"https://services.arcgisonline.com/arcgis/rest/services/Demographics/USA_Population_Density/MapServer/WMTS/",layer:"0",matrixSet:"EPSG:3857",format:"image/png",projection:l,tileGrid:new c.b({origin:Object(w.D)(g),resolutions:m,matrixIds:y}),style:"default",wrapX:!0})})],target:"map",view:new n.a({center:[-11158582,4813697],zoom:4})})}},[[415,0]]]);
//# sourceMappingURL=wmts.js.map