"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[983],{8306:function(n,t,r){r.d(t,{W:function(){return c}});var e,a=r(168),c=r(9958).Z.div(e||(e=(0,a.Z)(["\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 10px;\n"])))},4672:function(n,t,r){r.d(t,{O:function(){return d}});var e,a,c=r(6871),u=r(168),i=r(9958),o=r(501),s=i.Z.ul(e||(e=(0,u.Z)(["\n  margin-top: 10px;\n  margin-left: 20px;\n"]))),f=(0,i.Z)(o.rU)(a||(a=(0,u.Z)(["\n  color: #0000ff;\n"]))),p=r(184),d=function(n){var t=n.movies,r=(0,c.TH)();return(0,p.jsx)(s,{children:t.map((function(n){var t=n.id,e=n.title;return(0,p.jsx)("li",{children:(0,p.jsx)(f,{to:"/movies/".concat(t),state:{from:r},children:e})},t)}))})}},3983:function(n,t,r){r.r(t),r.d(t,{default:function(){return d}});var e=r(5861),a=r(885),c=r(7757),u=r.n(c),i=r(2791),o=r(409),s=r(8306),f=r(4672),p=r(184);function d(){var n=(0,i.useState)(null),t=(0,a.Z)(n,2),r=t[0],c=t[1];(0,i.useEffect)((function(){function n(){return(n=(0,e.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.rj();case 3:t=n.sent,d(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]);var d=function(n){var t=n.results.map((function(n){return{id:n.id,title:n.title}}));c(t)};return(0,p.jsxs)(s.W,{children:[(0,p.jsx)("h1",{children:"Trending today"}),r&&(0,p.jsx)(f.O,{movies:r})]})}},409:function(n,t,r){r.d(t,{TP:function(){return f},a2:function(){return p},q5:function(){return d},rj:function(){return o},z1:function(){return s}});var e=r(5861),a=r(7757),c=r.n(a),u=r(4569),i=r.n(u);i().defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var n=(0,e.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/trending/movie/day?api_key=be62f5641064cac309cf00d464856dbe");case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/search/movie?api_key=be62f5641064cac309cf00d464856dbe&query=".concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(t,"?api_key=be62f5641064cac309cf00d464856dbe"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(t,"/credits?api_key=be62f5641064cac309cf00d464856dbe"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(t,"/reviews?api_key=be62f5641064cac309cf00d464856dbe"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=983.d0838ea8.chunk.js.map