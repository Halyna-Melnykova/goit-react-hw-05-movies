"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{1913:function(r,t,n){n.d(t,{Hg:function(){return s},Jh:function(){return d},Ph:function(){return l},bp:function(){return p},t2:function(){return f}});var e=n(5861),a=n(7757),u=n.n(a),c=n(4569),i=n.n(c),o=i().create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"163c321dbb11d99503a707d857a1af3f"}}),s=function(){var r=(0,e.Z)(u().mark((function r(){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.get("trending/movie/day");case 2:return t=r.sent,n=t.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),f=function(){var r=(0,e.Z)(u().mark((function r(t){var n,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.get("movie/".concat(t));case 2:return n=r.sent,e=n.data,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,e.Z)(u().mark((function r(t){var n,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.get("movie/".concat(t,"/credits"));case 2:return n=r.sent,e=n.data,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),d=function(){var r=(0,e.Z)(u().mark((function r(t){var n,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.get("movie/".concat(t,"/reviews"));case 2:return n=r.sent,e=n.data,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),l=function(){var r=(0,e.Z)(u().mark((function r(t){var n,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i().get("".concat("https://api.themoviedb.org/3/","search/movie?api_key=").concat("163c321dbb11d99503a707d857a1af3f","&query=").concat(t,"&language=en-US"));case 2:return n=r.sent,e=n.data,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()},9544:function(r,t,n){n.r(t);var e=n(2982),a=n(5861),u=n(885),c=n(7757),i=n.n(c),o=n(2791),s=n(501),f=n(1913),p=n(184);t.default=function(){var r=(0,o.useState)([]),t=(0,u.Z)(r,2),n=t[0],c=t[1],d=(0,o.useState)(!1),l=(0,u.Z)(d,2),h=l[0],v=l[1],m=(0,o.useState)(null),b=(0,u.Z)(m,2),y=b[0],x=b[1];return(0,o.useEffect)((function(){function r(){return(r=(0,a.Z)(i().mark((function r(){var t;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return v(!0),r.prev=1,r.next=4,(0,f.Hg)();case 4:t=r.sent,c((0,e.Z)(t.results)),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),x(r.t0);case 11:return r.prev=11,v(!1),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[1,8,11,14]])})))).apply(this,arguments)}!function(){r.apply(this,arguments)}()}),[]),(0,p.jsxs)("main",{children:[(0,p.jsx)("h1",{children:"Trending today"}),(0,p.jsx)("ul",{children:n.map((function(r){var t=r.id,n=r.title;return(0,p.jsx)("li",{children:(0,p.jsx)(s.rU,{to:"/movies/".concat(t),children:n})},t)}))}),h&&(0,p.jsx)("p",{children:"Loading..."}),y&&(0,p.jsx)("p",{children:"Page loading error"})]})}},2982:function(r,t,n){n.d(t,{Z:function(){return u}});var e=n(907);var a=n(181);function u(r){return function(r){if(Array.isArray(r))return(0,e.Z)(r)}(r)||function(r){if("undefined"!==typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||(0,a.Z)(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=544.701389d0.chunk.js.map