(this["webpackJsonpreact-search"]=this["webpackJsonpreact-search"]||[]).push([[0],{23:function(e,t,n){e.exports=n(47)},28:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),o=n.n(c),u=(n(28),n(5)),i=n(2),l=n(3),s=n(19),f=n.n(s);function m(){var e=Object(i.a)(["\n    max-width: 250px;\n    max-height: 250px;\n    margin-bottom: 10px;\n"]);return m=function(){return e},e}function h(){var e=Object(i.a)(["\n    margin-bottom: 15px;\n"]);return h=function(){return e},e}function p(){var e=Object(i.a)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nflex-direction: column;\n"]);return p=function(){return e},e}var v=l.a.div(p()),b=l.a.h2(h()),d=l.a.img(m());var g=function(e){var t=e.country;return r.a.createElement(v,null,r.a.createElement(d,{src:t.flag,alt:"flag"}),r.a.createElement(b,null,t.name))};n(46);function j(){var e=Object(i.a)(["\n  margin-bottom: 10px;\n  padding: 5px 5px;\n\n"]);return j=function(){return e},e}function x(){var e=Object(i.a)(["\n   text-align: center;\n"]);return x=function(){return e},e}var O=l.a.h1(x()),E=l.a.input(j());var w=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),i=Object(u.a)(o,2),l=i[0],s=i[1],m=Object(a.useState)([]),h=Object(u.a)(m,2),p=h[0],v=h[1];return Object(a.useEffect)((function(){f.a.get("https://restcountries.eu/rest/v2/all").then((function(e){var t=e.data;c(t)}))}),[]),Object(a.useEffect)((function(){v(n.filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())})))}),[l,n]),r.a.createElement("div",{className:"App"},r.a.createElement(O,null,"React-search"),r.a.createElement(E,{onChange:function(e){s(e.target.value)},placeholder:"search",type:"text"}),p.map((function(e,t){return r.a.createElement(g,{key:t,country:e})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.f1d158b4.chunk.js.map