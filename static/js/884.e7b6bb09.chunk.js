"use strict";(self.webpackChunkreact_hw_05_movies=self.webpackChunkreact_hw_05_movies||[]).push([[884],{884:function(e,n,t){t.r(n);var r=t(439),c=t(791),i=t(689),o=t(87),a=t(79),s=t(184);n.default=function(){var e,n=(0,c.useState)(null),t=(0,r.Z)(n,2),u=t[0],l=t[1],d=(0,i.TH)(),h=(0,i.UO)().movieId,f=(0,c.useRef)((null===(e=d.state)||void 0===e?void 0:e.from)||"/movies");if((0,c.useEffect)((function(){(0,a.Y5)(h).then((function(e){l(e)})).catch((function(e){console.log(e)}))}),[h]),!u)return null;var v=u.poster_path,j=u.vote_average,x=u.overview,m=u.genres,p=u.title,_=u.release_date,w=new Date(_);return(0,s.jsxs)("div",{children:[(0,s.jsx)(o.rU,{to:f.current,children:"   Go back"}),(0,s.jsx)("div",{children:(0,s.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w300/").concat(v),alt:p})}),(0,s.jsxs)("h1",{children:[p," (",w.getFullYear(),")"]}),(0,s.jsxs)("p",{children:["User Score: ",j]}),(0,s.jsx)("h2",{children:"Overview"}),(0,s.jsx)("p",{children:x}),(0,s.jsx)("h3",{children:"Genres"}),(0,s.jsx)("ul",{children:m.map((function(e){return(0,s.jsx)("li",{children:e.name},e.id)}))}),(0,s.jsx)("p",{children:"Additional information"}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(o.rU,{to:"cast",state:{from:f},children:"Cast"})}),(0,s.jsx)("li",{children:(0,s.jsx)(o.rU,{to:"reviews",state:{from:f},children:"Reviews"})})]}),(0,s.jsx)(i.j3,{})]})}},79:function(e,n,t){t.d(n,{Hx:function(){return l},Pt:function(){return a},Y5:function(){return s},wr:function(){return o},xc:function(){return u}});var r="dfe97c9693096be016a960b4c69a6096",c="https://api.themoviedb.org/3",i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return fetch(e).then((function(e){return e.ok?e.json():Promise.reject(new Error("not found "))}))},o=function(){return i("".concat(c,"/trending/all/day?api_key=").concat(r))},a=function(e){return i("".concat(c,"/search/movie?api_key=").concat(r,"&query=").concat(e))},s=function(e){return i("".concat(c,"/movie/").concat(e,"?api_key=").concat(r))},u=function(e){return i("".concat(c,"/movie/").concat(e,"/credits?api_key=").concat(r))},l=function(e){return i("".concat(c,"/movie/").concat(e,"/reviews?api_key=").concat(r))}}}]);
//# sourceMappingURL=884.e7b6bb09.chunk.js.map