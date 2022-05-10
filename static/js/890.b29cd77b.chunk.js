"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[890],{9890:function(e,n,t){t.r(n),t.d(n,{default:function(){return E}});var r,a,i,s,c,o,u,p,f,d,l=t(5861),x=t(885),v=t(7757),h=t.n(v),m=t(2791),g=t(6871),b=t(409),j=t(168),w=t(9958),Z=w.Z.div(r||(r=(0,j.Z)(["\n  display: flex;\n  margin-bottom: 10px;\n"]))),_=w.Z.div(a||(a=(0,j.Z)(["\n  display: block;\n  margin-left: 20px;\n"]))),k=w.Z.h2(i||(i=(0,j.Z)(["\n  margin-top: 20px;\n  margin-bottom: 20px;\n"]))),y=w.Z.p(s||(s=(0,j.Z)(["\n  font-size: 18px;\n  font-weight: 700;\n  margin-top: 20px;\n  margin-bottom: 20px;\n"]))),U=(w.Z.p(c||(c=(0,j.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n  margin-top: 20px;\n  margin-bottom: 20px;\n"]))),t(184)),z=function(e){var n=e.movie;return(0,U.jsxs)(Z,{children:[(0,U.jsx)("img",{src:"https://image.tmdb.org/t/p/w185".concat(n.poster_path),alt:n.title}),(0,U.jsxs)(_,{children:[(0,U.jsxs)(k,{children:[n.title," (",n.release_date.slice(0,4),")"]}),(0,U.jsxs)("p",{children:["User score: ",n.vote_average,"%"]}),(0,U.jsx)(y,{children:"Overview"}),(0,U.jsx)("p",{children:n.overview}),(0,U.jsx)(y,{children:"Genres"}),(0,U.jsx)("p",{children:n.genres.map((function(e){var n=e.id,t=e.name;return(0,U.jsxs)("span",{children:[" ",t]},n)}))})]})]})},T=t(501),C=t(9128),q=w.Z.div(o||(o=(0,j.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px 8px;\n"]))),G=function(e){var n=e.href,t=e.label;return(0,U.jsxs)(q,{children:[(0,U.jsx)(C.siY,{size:"20"}),(0,U.jsx)(T.rU,{to:n,children:t})]})},H=w.Z.div(u||(u=(0,j.Z)(["\n  display: block;\n  padding: 15px;\n  margin-bottom: 20px;\n  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,\n    rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;\n"]))),O=w.Z.p(p||(p=(0,j.Z)(["\n  margin-bottom: 20px;\n"]))),P=w.Z.ul(f||(f=(0,j.Z)(["\n  margin-left: 20px;\n"]))),R=(0,w.Z)(T.rU)(d||(d=(0,j.Z)(["\n  color: #0000ff;\n"]))),A=function(){var e=(0,g.TH)();return(0,U.jsxs)(H,{children:[(0,U.jsx)(O,{children:"Additional information"}),(0,U.jsxs)(P,{children:[(0,U.jsx)("li",{children:(0,U.jsx)(R,{to:"cast",state:e.state,children:"Cast"})}),(0,U.jsx)("li",{children:(0,U.jsx)(R,{to:"reviews",state:e.state,children:"Reviews"})})]})]})};function E(){var e,n,t=(0,g.UO)().movieId,r=(0,g.TH)(),a=(0,m.useState)(null),i=(0,x.Z)(a,2),s=i[0],c=i[1];return(0,m.useEffect)((function(){function e(){return(e=(0,l.Z)(h().mark((function e(){var n,r,a,i,s,o,u;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.TP(t);case 3:n=e.sent,r=n.title,a=n.poster_path,i=n.release_date,s=n.vote_average,o=n.overview,u=n.genres,c({title:r,poster_path:a,release_date:i,vote_average:s,overview:o,genres:u}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(G,{href:null!==(e=null===r||void 0===r||null===(n=r.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/",label:"Go back"}),s&&(0,U.jsx)(z,{movie:s}),s&&(0,U.jsx)(A,{}),(0,U.jsx)(g.j3,{})]})}},409:function(e,n,t){t.d(n,{TP:function(){return p},a2:function(){return f},q5:function(){return d},rj:function(){return o},z1:function(){return u}});var r=t(5861),a=t(7757),i=t.n(a),s=t(4569),c=t.n(s);c().defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var e=(0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/trending/movie/day?api_key=be62f5641064cac309cf00d464856dbe");case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/search/movie?api_key=be62f5641064cac309cf00d464856dbe&query=".concat(n));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/movie/".concat(n,"?api_key=be62f5641064cac309cf00d464856dbe"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/movie/".concat(n,"/credits?api_key=be62f5641064cac309cf00d464856dbe"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/movie/".concat(n,"/reviews?api_key=be62f5641064cac309cf00d464856dbe"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=890.b29cd77b.chunk.js.map