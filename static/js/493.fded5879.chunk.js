"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[493],{3493:function(t,e,r){r.r(e),r.d(e,{default:function(){return p}});var n=r(5861),a=r(885),c=r(7757),u=r.n(c),i=r(2791),s=r(6871),o=r(409),f=r(184);function p(){var t=(0,s.UO)().movieId,e=(0,i.useState)(null),r=(0,a.Z)(e,2),c=r[0],p=r[1];(0,i.useEffect)((function(){function e(){return(e=(0,n.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a2(t);case 3:r=e.sent,d(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]);var d=function(t){var e=t.cast.map((function(t){return{id:t.id,profile_path:t.profile_path,name:t.name,character:t.character}}));p(e)};return(0,f.jsx)(f.Fragment,{children:c&&(0,f.jsx)("ul",{children:c.map((function(t){return(0,f.jsxs)("li",{children:[(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w92".concat(t.profile_path),alt:t.name}),(0,f.jsx)("br",{}),t.name,(0,f.jsxs)("p",{children:["Character: ",t.character]})]},t.id)}))})})}},409:function(t,e,r){r.d(e,{TP:function(){return f},a2:function(){return p},q5:function(){return d},rj:function(){return s},z1:function(){return o}});var n=r(5861),a=r(7757),c=r.n(a),u=r(4569),i=r.n(u);i().defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var t=(0,n.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/trending/movie/day?api_key=be62f5641064cac309cf00d464856dbe");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/search/movie?api_key=be62f5641064cac309cf00d464856dbe&query=".concat(e));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(e,"?api_key=be62f5641064cac309cf00d464856dbe"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(e,"/credits?api_key=be62f5641064cac309cf00d464856dbe"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(e,"/reviews?api_key=be62f5641064cac309cf00d464856dbe"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=493.fded5879.chunk.js.map