(this.webpackJsonpcor=this.webpackJsonpcor||[]).push([[0],{170:function(e,a,t){e.exports=t(361)},175:function(e,a,t){},182:function(e,a,t){},183:function(e,a,t){},184:function(e,a,t){},361:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(56),c=t.n(l),o=(t(175),t(83)),i=t.n(o),s=t(138),m=t(24),u=(t(152),t(10),t(177),t(13)),d=t(15),E=t.n(d),h=(t(182),t(153)),v=t(154),p=(t(183),t(184),t(11));var f=function(e){var a,t=Object(n.useState)(!0),l=Object(m.a)(t,2),c=l[0],o=l[1],i=Object(n.useState)(30),s=Object(m.a)(i,2),d=s[0],E=s[1],h=Object(n.useState)("Line"),f=Object(m.a)(h,2),g=f[0],b=f[1],y=Object(n.useState)([]),j=Object(m.a)(y,2),w=j[0],O=j[1];function N(e){var a="Line"===g?p.h:"Bar"===g?p.c:"Area"===g?p.a:void 0;return console.log("here"),r.a.createElement(a,{dataKey:e,stroke:k(e),fill:k(e),dot:!1})}Object(n.useEffect)((function(){fetch("https://disease.sh/v2/historical/np?lastdays=".concat(d)).then((function(e){return e.json()})).then((function(e){O(e),o(!1)}))}),[d]);var k=function(e){return"confirmed"===e?"blue":"deaths"===e?"red":"recovered"===e?"green":void 0};function S(e){E(e.target.value)}return c?r.a.createElement("div",{className:"spinners"}," ",r.a.createElement(u.a,{animation:"grow",variant:"primary"}),r.a.createElement(u.a,{animation:"grow",variant:"secondary"}),r.a.createElement(u.a,{animation:"grow",variant:"success"}),r.a.createElement(u.a,{animation:"grow",variant:"danger"}),r.a.createElement(u.a,{animation:"grow",variant:"warning"}),r.a.createElement(u.a,{animation:"grow",variant:"info"})):r.a.createElement("div",{className:"chartsNew"},r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},r.a.createElement("input",{type:"number",min:"0",max:"200",placeholder:"30 days",style:{width:72},onChange:S})," ",function(){var e=r.a.createElement(r.a.Fragment,null,r.a.createElement("select",{onChange:function(e){b(e.target.value)}},r.a.createElement("option",{value:"Line",checked:!0}," Graph type"),r.a.createElement("option",{value:"Line"}," Line"),r.a.createElement("option",{value:"Bar"}," Bar"),r.a.createElement("option",{value:"Area"}," Area")),r.a.createElement("br",null));return r.a.createElement(r.a.Fragment,null,e," ")}())),function(){var e="Line"===g?p.i:"Bar"===g?p.d:"Area"===g?p.b:"Pie"===g?p.j:"AreaLineComposed"===g?p.f:void 0,t=function(e){var t=[],n="true";console.log(w);for(var r=Object(v.a)({},w.timeline),l=Object.keys(r.cases),c=Object.values(r.cases),o=Object.values(r.deaths),i=Object.values(r.recovered),s=0;s<l.length;s++)t.length<c.length&&t.push({});for(s=0;s<l.length;s++){if(n){var m=l[s].lastIndexOf("/");t[s].date=l[s].substring(0,m),a=l[s]}t[s].confirmed=c[s],t[s].deaths=o[s],t[s].recovered=i[s]}return n=!1,console.log(t),t}();return r.a.createElement("div",{className:"graphs"},r.a.createElement(p.k,{width:void 0,height:400},r.a.createElement(e,{data:t},r.a.createElement(p.e,{strokeDasharray:"3 3"}),r.a.createElement(p.m,{dataKey:"date"}),r.a.createElement(p.n,null),r.a.createElement(p.l,null),r.a.createElement(p.g,null),N("confirmed"),N("deaths"),N("recovered"))),r.a.createElement("div",{className:"graphMessage"},r.a.createElement("h4",null,"Nepal")),r.a.createElement("div",null,r.a.createElement("div",{className:"graphMessage"},"Graph last updated on : ",a),r.a.createElement("div",{className:"graphMessage"},"Full information can be obtained from ",r.a.createElement("a",{href:"https://coronatrackersankraman.netlify.app/"},"here"))))}())};var g=function(e){var a=Object(n.useState)([]),t=Object(m.a)(a,2),l=t[0],c=t[1],o=Object(n.useState)([]),d=Object(m.a)(o,2),v=d[0],p=d[1],g=Object(n.useState)(!0),b=Object(m.a)(g,2),y=b[0],j=b[1];return Object(n.useEffect)(Object(s.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=["https://disease.sh/v2/all?yesterday=false","https://disease.sh/v2/countries/nepal?yesterday=false&strict=true"],Promise.all([fetch(a[0]).then((function(e){return e.json()})),fetch(a[1]).then((function(e){return e.json()}))]).then((function(e){c(e[0]),p(e[1]),j(!1),console.log(e)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)}))),[]),y?r.a.createElement("div",{className:"spinners"}," ",r.a.createElement(u.a,{animation:"grow",variant:"primary"}),r.a.createElement(u.a,{animation:"grow",variant:"secondary"}),r.a.createElement(u.a,{animation:"grow",variant:"success"}),r.a.createElement(u.a,{animation:"grow",variant:"danger"}),r.a.createElement(u.a,{animation:"grow",variant:"warning"})):r.a.createElement("div",null,"  ",function(){var e=v.countryInfo.flag,a=new Date(parseInt(l.updated)).toString();return r.a.createElement("div",{className:"all"},r.a.createElement("div",{className:"title"},"Covid-19 updates"),r.a.createElement(h.a,{striped:!0,bordered:!0,hover:!0,variant:"dark"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"mini",colSpan:"3"},"Nepal ",r.a.createElement("img",{src:e,width:"12",alt:"flag of nepal"}))),r.a.createElement("tr",null,r.a.createElement("td",{style:{color:"lightBlue"}},"Confirmed"),r.a.createElement("td",{style:{color:"red"}},"Deaths"),r.a.createElement("td",{style:{color:"green"}},"Recovered")),r.a.createElement("tr",null,r.a.createElement("td",null,"  ",r.a.createElement(E.a,{end:v.cases,duration:1.5,separator:","})),r.a.createElement("td",null,"  ",r.a.createElement(E.a,{end:v.deaths,duration:1.5,separator:","})),r.a.createElement("td",null,"  ",r.a.createElement(E.a,{end:v.recovered,duration:1.5,separator:","}))),r.a.createElement("tr",null,r.a.createElement("th",{className:"mini",colSpan:"3"},"World ",r.a.createElement("img",{src:"https://www.globe.gov/globe-gov-home-portlet/images/learn-earth-system/learn-earth-system-clean.png",width:"12",alt:"globe"}))),r.a.createElement("tr",null,r.a.createElement("td",{style:{color:"lightBlue"}},"Confirmed"),r.a.createElement("td",{style:{color:"red"}},"Deaths"),r.a.createElement("td",{style:{color:"green"}},"Recovered")),r.a.createElement("tr",null,r.a.createElement("td",null,"  ",r.a.createElement(E.a,{end:l.cases,duration:1.5,separator:","})),r.a.createElement("td",null,"  ",r.a.createElement(E.a,{end:l.deaths,duration:1.5,separator:","})),r.a.createElement("td",null,"  ",r.a.createElement(E.a,{end:l.recovered,duration:1.5,separator:","}))),r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"3"},"Last updated: ",a)),r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"3"},"Full information can be obtained from ",r.a.createElement("a",{href:"https://coronatrackersankraman.netlify.app/"},"here"))))),r.a.createElement(f,{name:"Nepal"}))}())};var b=function(e){return r.a.createElement("div",null,r.a.createElement(g,{name:"https://corona.lmao.ninja/v2/countries"}))};c.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[170,1,2]]]);
//# sourceMappingURL=main.212e079a.chunk.js.map