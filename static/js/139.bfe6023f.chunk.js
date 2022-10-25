"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[139],{355:function(t,r,e){e.d(r,{M8:function(){return v},TP:function(){return d},V0:function(){return p},_L:function(){return l},jP:function(){return f}});var n=e(861),a=e(757),c=e.n(a),o=e(44),i=e(562),s=e.n(i),u="6b9a3fed645205c8f486b0eeae6f2de6",l=function(){var t=(0,n.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.ZP.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(u));case 3:return r=t.sent,console.log(r.data),t.abrupt("return",r.data);case 8:throw t.prev=8,t.t0=t.catch(0),s().Notify.failure("Sorry, try again ".concat(t.t0," ")),new Error("Sorry, try again ".concat(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(r){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.ZP.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(u,"&language=en-US&query=").concat(r,"&page=1&include_adult=false"));case 3:return e=t.sent,console.log(e.data),t.abrupt("return",e.data);case 8:throw t.prev=8,t.t0=t.catch(0),s().Notify.failure("Sorry, try again ".concat(t.t0," ")),new Error("Sorry, try again ".concat(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(r){return t.apply(this,arguments)}}(),d=function(){var t=(0,n.Z)(c().mark((function t(r){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.ZP.get("https://api.themoviedb.org/3/movie/".concat(r,"?api_key=").concat(u,"&language=en-US"));case 3:return e=t.sent,console.log(e.data),t.abrupt("return",e.data);case 8:throw t.prev=8,t.t0=t.catch(0),s().Notify.failure("Sorry, try again ".concat(t.t0," ")),new Error("Sorry, try again ".concat(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(r){return t.apply(this,arguments)}}(),v=function(){var t=(0,n.Z)(c().mark((function t(r){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.ZP.get("https://api.themoviedb.org/3/movie/".concat(r,"/credits?api_key=").concat(u,"&language=en-US"));case 3:return e=t.sent,console.log(e.data),t.abrupt("return",e.data);case 8:throw t.prev=8,t.t0=t.catch(0),s().Notify.failure("Sorry, try again ".concat(t.t0," ")),new Error("Sorry, try again ".concat(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(r){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.ZP.get("https://api.themoviedb.org/3/movie/".concat(r,"/reviews?api_key=").concat(u,"&language=en-US"));case 3:return e=t.sent,console.log(e.data),t.abrupt("return",e.data);case 8:throw t.prev=8,t.t0=t.catch(0),s().Notify.failure("Sorry, try again ".concat(t.t0," ")),new Error("Sorry, try again ".concat(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(r){return t.apply(this,arguments)}}()},139:function(t,r,e){e.r(r),e.d(r,{default:function(){return g}});var n,a=e(861),c=e(885),o=e(757),i=e.n(o),s=e(355),u=e(731),l=e(470),p=e(168),d=e(444).ZP.div(n||(n=(0,p.Z)(["\n  padding: 20px 50px;\n  width: 600px;\n"]))),v=e(184),f=function(t){var r,e,n,a,c=t.data,o=(0,l.TH)(),i=(0,l.UO)().movieId,s=c.genres,p=c.poster_path,f=c.title,h=c.vote_average,g=c.overview,y=s.map((function(t){return t.name})).join(" "),x="https://image.tmdb.org/t/p/w200".concat(p),w=10*h.toFixed(1);return(0,v.jsxs)(d,{children:[(0,v.jsx)("img",{src:x,alt:f}),(0,v.jsxs)("div",{children:[(0,v.jsx)("h2",{children:f}),(0,v.jsxs)("p",{children:["User Score: ",w,"%"]}),(0,v.jsx)("h3",{children:"Overview"}),(0,v.jsx)("p",{children:g}),(0,v.jsx)("h3",{children:"Genres"}),(0,v.jsx)("p",{children:y})]}),(0,v.jsxs)("div",{children:["Additional information",(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:(0,v.jsx)(u.rU,{to:"/movies/".concat(i,"/cast"),state:{from:null!==(r=null===(e=o.state)||void 0===e?void 0:e.from)&&void 0!==r?r:"/"},children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(u.rU,{to:"/movies/".concat(i,"/reviews"),state:{from:null!==(n=null===(a=o.state)||void 0===a?void 0:a.from)&&void 0!==n?n:"/"},children:"Reviews"})})]})]})]})},h=e(791),g=function(){var t,r,e=(0,h.useState)(null),n=(0,c.Z)(e,2),o=n[0],p=n[1],d=(0,h.useState)(!1),g=(0,c.Z)(d,2),y=g[0],x=g[1],w=(0,l.UO)().movieId,m=(0,l.TH)();return(0,h.useEffect)((function(){function t(){return(t=(0,a.Z)(i().mark((function t(){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,x(!0),t.next=4,(0,s.TP)(w);case 4:r=t.sent,p(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),alert("Something went wrong. Try again");case 11:return t.prev=11,x(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[w]),(0,v.jsxs)("div",{children:[(0,v.jsx)(u.rU,{to:null!==(t=null===(r=m.state)||void 0===r?void 0:r.from)&&void 0!==t?t:"/",children:"Go back"}),y&&(0,v.jsx)("div",{children:"Loading..."}),o&&(0,v.jsx)(f,{data:o}),(0,v.jsx)(h.Suspense,{fallback:(0,v.jsx)("div",{children:"Loading..."}),children:(0,v.jsx)(l.j3,{})})]})}}}]);
//# sourceMappingURL=139.bfe6023f.chunk.js.map