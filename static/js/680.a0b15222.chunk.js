(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[680],{856:function(e,t,r){"use strict";r.d(t,{e:function(){return v}});var n="MovieList_movieList__uFrOZ",a=r(689),s=r(87),u=r(7),c=r.n(u),i="MovieListItem_movieListItem__diVgK",o="MovieListItem_link__1-1ln",p=r(184),f=function(e){var t=e.id,r=e.title,n=(0,a.TH)();return(0,p.jsx)("li",{className:i,children:(0,p.jsx)(s.rU,{className:o,to:"/movies/".concat(t),state:{from:n},children:r})})};f.proTypes={id:c().number.isRequired,title:c().string.isRequired};var v=function(e){var t=e.movies;return(0,p.jsx)("ul",{className:n,children:t.map((function(e){var t=e.id,r=e.title;return(0,p.jsx)(f,{id:t,title:r},t)}))})}},680:function(e,t,r){"use strict";r.r(t);var n=r(861),a=r(439),s=r(757),u=r.n(s),c=r(791),i=r(856),o=r(969),p=r(222),f=r(184);t.default=function(){var e=(0,c.useState)([]),t=(0,a.Z)(e,2),r=t[0],s=t[1];return(0,c.useEffect)((function(){(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.wr)();case 3:t=e.sent,s(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[]),(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"Trending Movies"}),0===r.length?(0,f.jsx)(p.a,{}):(0,f.jsx)(i.e,{movies:r})]})}},969:function(e,t,r){"use strict";r.d(t,{Hx:function(){return f},Y5:function(){return o},mv:function(){return i},uV:function(){return p},wr:function(){return c}});var n=r(861),a=r(757),s=r.n(a),u=r(340);u.Z.defaults.baseURL="https://api.themoviedb.org/3/",u.Z.defaults.params={api_key:"7e3beca21578245d33161aa546b97c5e"};var c=function(){var e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("trending/movie/day");case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("search/movie?query=".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/credits?"));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/reviews?"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},888:function(e,t,r){"use strict";var n=r(47);function a(){}function s(){}s.resetWarningCache=a,e.exports=function(){function e(e,t,r,a,s,u){if(u!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:a};return r.PropTypes=r,r}},7:function(e,t,r){e.exports=r(888)()},47:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=680.a0b15222.chunk.js.map