"use strict";(self.webpackChunkreact_hw_05_movies=self.webpackChunkreact_hw_05_movies||[]).push([[415],{415:function(n,t,c){c.r(t);var e=c(439),r=c(172),o=c(791),i=c(689),u=c(87),a=c(299),f=c(184);t.default=function(){var n=(0,o.useState)([]),t=(0,e.Z)(n,2),c=t[0],s=t[1],d=(0,o.useState)(!1),h=(0,e.Z)(d,2),l=h[0],v=h[1],m=(0,i.TH)();return(0,o.useEffect)((function(){v(!0),(0,a.wr)().then((function(n){s(n.results)})).catch((function(n){console.log(n)})).finally((function(){v(!1)}))}),[]),(0,f.jsxs)("div",{children:[(0,f.jsx)("h1",{children:"Trending today"}),(0,f.jsx)("ul",{children:c.map((function(n){return(0,f.jsx)("li",{children:(0,f.jsx)(u.rU,{to:"/movies/".concat(n.id),state:{from:m},children:n.title})},n.id)}))}),l&&(0,f.jsx)(r.a,{})]})}},299:function(n,t,c){c.d(t,{Hx:function(){return s},Pt:function(){return u},Y5:function(){return a},wr:function(){return i},xc:function(){return f}});var e="dfe97c9693096be016a960b4c69a6096",r="https://api.themoviedb.org/3",o=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return fetch(n).then((function(n){return n.ok?n.json():Promise.reject(new Error("not found "))}))},i=function(){return o("".concat(r,"/trending/all/day?api_key=").concat(e))},u=function(n){return o("".concat(r,"/search/movie?api_key=").concat(e,"&query=").concat(n))},a=function(n){return o("".concat(r,"/movie/").concat(n,"?api_key=").concat(e))},f=function(n){return o("".concat(r,"/movie/").concat(n,"/credits?api_key=").concat(e))},s=function(n){return o("".concat(r,"/movie/").concat(n,"/reviews?api_key=").concat(e))}}}]);
//# sourceMappingURL=415.03a4a160.chunk.js.map