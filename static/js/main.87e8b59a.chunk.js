(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{248:function(e,t,r){e.exports=r(389)},254:function(e,t,r){},267:function(e,t,r){},274:function(e,t,r){},311:function(e,t,r){},318:function(e,t,r){},348:function(e,t,r){},351:function(e,t,r){},366:function(e,t,r){},368:function(e,t,r){},383:function(e,t,r){},389:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(173),i=r.n(o),c=(r(254),r(26)),l=r(10),u=r(15),s=r(130),f=r(94),h=r(272),m=r(176),p=r(343),v=r(339),d=r(70),y=(r(267),r(175));var g=function(){return a.a.createElement(y.a,{animation:"border"})};function E(){E=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var o=t&&t.prototype instanceof y?t:y,i=Object.create(o.prototype),c=new G(n||[]);return a(i,"_invoke",{value:N(e,r,c)}),i}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=s;var h="suspendedStart",m="suspendedYield",p="executing",v="completed",d={};function y(){}function g(){}function w(){}var b={};u(b,i,function(){return this});var L=Object.getPrototypeOf,x=L&&L(L(P([])));x&&x!==r&&n.call(x,i)&&(b=x);var k=w.prototype=y.prototype=Object.create(b);function O(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function j(e,t){function r(a,o,i,c){var l=f(e[a],e,o);if("throw"!==l.type){var u=l.arg,s=u.value;return s&&"object"==typeof s&&n.call(s,"__await")?t.resolve(s.__await).then(function(e){r("next",e,i,c)},function(e){r("throw",e,i,c)}):t.resolve(s).then(function(e){u.value=e,i(u)},function(e){return r("throw",e,i,c)})}c(l.arg)}var o;a(this,"_invoke",{value:function(e,n){function a(){return new t(function(t,a){r(e,n,t,a)})}return o=o?o.then(a,a):a()}})}function N(t,r,n){var a=h;return function(o,i){if(a===p)throw new Error("Generator is already running");if(a===v){if("throw"===o)throw i;return{value:e,done:!0}}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var l=_(c,n);if(l){if(l===d)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===h)throw a=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=p;var u=f(t,r,n);if("normal"===u.type){if(a=n.done?v:m,u.arg===d)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(a=v,n.method="throw",n.arg=u.arg)}}}function _(t,r){var n=r.method,a=t.iterator[n];if(a===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,_(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var o=f(a,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function G(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function P(t){if(t||""===t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return g.prototype=w,a(k,"constructor",{value:w,configurable:!0}),a(w,"constructor",{value:g,configurable:!0}),g.displayName=u(w,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,u(e,l,"GeneratorFunction")),e.prototype=Object.create(k),e},t.awrap=function(e){return{__await:e}},O(j.prototype),u(j.prototype,c,function(){return this}),t.AsyncIterator=j,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new j(s(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},O(k),u(k,l,"Generator"),u(k,i,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=P,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return c.type="throw",c.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),T(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;T(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}var w=function(){var e=Object(d.c)(),t=e.oktaAuth,r=e.authState;if(!r)return a.a.createElement(g,null);var n=Object(u.Q)(),o=function(){var e=Object(c.a)(E().mark(function e(){return E().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.signOut(),n("/");case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return a.a.createElement(v.a,{bg:"dark","data-bs-theme":"dark",expand:"lg",className:"Navbar"},a.a.createElement(m.a,{fluid:!0},a.a.createElement(v.a.Brand,{href:"/home",style:{color:"gold"}},a.a.createElement(s.a,{icon:f.c}),"Cine Critique"),a.a.createElement(v.a.Toggle,{"aria-controls":"navbarScroll"}),a.a.createElement(v.a.Collapse,{id:"navbarScroll"},a.a.createElement("div",null,r.isAuthenticated&&a.a.createElement(p.a,{className:"me-auto my-2 my-lg-0",style:{maxHeight:"100px"},navbarScroll:!0},a.a.createElement(p.a.Link,{href:"/home"},"Home"),a.a.createElement(p.a.Link,{href:"/watchlist"},"Watchlist"))),a.a.createElement("div",null,r.isAuthenticated?a.a.createElement(h.a,{variant:"dark",onClick:o},"Log out"):a.a.createElement(h.a,{variant:"dark",onClick:function(){n("/login")}},"Login"),a.a.createElement(h.a,{variant:"dark",onClick:function(){n("/About-Us")}},a.a.createElement("span",null,"About Us"))))))},b=r(52),L=r(273),x=(r(348),function(){return a.a.createElement("div",{className:"footer-container"},a.a.createElement("div",{className:"safdar-ahmed"},a.a.createElement("span",null,"Safdar Ahmed"),a.a.createElement("a",{className:"linkedin-icon",target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/safdarahmed/"},a.a.createElement(s.a,{className:"linkedin-icon-link",icon:L.b})),a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/007-safdar"},a.a.createElement(s.a,{className:"github-icon",icon:L.a}))),a.a.createElement("div",{className:"footer-right-container"},a.a.createElement("div",{className:"footer-copyright"},a.a.createElement(s.a,{className:"footer-copyright-icon",icon:f.a}),a.a.createElement("p",null," Copyright 2023")),a.a.createElement(b.Link,{className:"footer-link-contact-us"},"Contact Us")))}),k=(r(274),function(){return a.a.createElement("div",{className:"landing-page"},a.a.createElement("div",{className:"video-container"},a.a.createElement("div",{className:"video-foreground"},a.a.createElement("iframe",{src:"https://www.youtube.com/embed/W0LHTWG-UmQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=W0LHTWG-UmQ&mute=1"}),a.a.createElement("h1",{className:"foreground-text"},"Welcome to ",a.a.createElement("span",{style:{color:"gold","padding-left":"0.5rem"}},"Cine Critique")),a.a.createElement("p",{className:"foreground-text-subtitle"},"Platform to view and review movies",a.a.createElement("span",{className:"foreground-text-subtitle-2"},"A full Stack React + Spring Boot Project")))))});var O=function(){var e=Object(d.c)().authState;if(!e)return a.a.createElement(g,null);var t=Object(u.N)();return a.a.createElement(a.a.Fragment,null,a.a.createElement(w,null),a.a.createElement("div",null,e.isAuthenticated||"/login"===t.pathname?a.a.createElement("div",null,a.a.createElement(u.f,null),a.a.createElement(x,null)):a.a.createElement("div",null,a.a.createElement(k,null),a.a.createElement(x,null))))},j=(r(351),r(347)),N=r.n(j),_=r(290);var S=function(e){var t=e.Movies,r=Object(u.Q)();return a.a.createElement("div",{className:"movie-carousel-container"},a.a.createElement(N.a,{swipe:!0,animation:"slide",duration:700,navButtonsProps:{style:{backgroundColor:"black"}}},Object.values(t).map(function(e){return a.a.createElement(_.a,null,a.a.createElement("div",{className:"movie-card-container"},a.a.createElement("div",{className:"movie-card",style:{"--img":"url(".concat(e.backdrops[0],")")}},a.a.createElement("div",{className:"movie-detail"},a.a.createElement("div",{className:"movie-poster"},a.a.createElement("img",{src:e.poster,alt:e.title})),a.a.createElement("div",{className:"movie-title-card"},e.title," "),a.a.createElement("div",{className:"trailer-button"},a.a.createElement(b.Link,{to:"/Trailer/".concat(e.trailerLink.substring(e.trailerLink.length-11))},a.a.createElement(s.a,{className:"play-button-icon",icon:f.b,beat:!0}))),a.a.createElement("div",{className:"review-container"},a.a.createElement(h.a,{className:"review-button",variant:"outline-light",onClick:function(){r("/Reviews/".concat(e.imdbId))}},"Write a Review"))))))})))};var T=function(e){var t=e.movies;return a.a.createElement(a.a.Fragment,null,a.a.createElement(S,{Movies:t}))},G=(r(311),r(416).a.create({baseURL:"http://localhost:8080"})),P=r(301),A=r.n(P);r(318);var I=function(){var e=Object(u.V)().ytTrailerId;return a.a.createElement("div",{className:"react-player-container"},null!=e?a.a.createElement(A.a,{controls:"true",playing:!0,url:"https://www.youtube.com/watch?v=".concat(e),width:"100%",height:"100%"}):null)},F=r(20),C=r(417);var R=function(e){var t=e.reviewSubmitHandler,r=e.refText,n=e.defaultValue;return a.a.createElement(C.a,null,a.a.createElement(C.a.Group,{className:"mb-3"},a.a.createElement(C.a.Label,null,"Write a Review ?"),a.a.createElement(C.a.Control,{ref:r,as:"textarea",placeholder:n})),a.a.createElement(h.a,{onClick:t,variant:"dark"},"Submit"))},U=r(418),H=r(338),Q=r(415);r(366);function Y(){Y=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var o=t&&t.prototype instanceof y?t:y,i=Object.create(o.prototype),c=new T(n||[]);return a(i,"_invoke",{value:j(e,r,c)}),i}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=s;var h="suspendedStart",m="suspendedYield",p="executing",v="completed",d={};function y(){}function g(){}function E(){}var w={};u(w,i,function(){return this});var b=Object.getPrototypeOf,L=b&&b(b(G([])));L&&L!==r&&n.call(L,i)&&(w=L);var x=E.prototype=y.prototype=Object.create(w);function k(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function O(e,t){function r(a,o,i,c){var l=f(e[a],e,o);if("throw"!==l.type){var u=l.arg,s=u.value;return s&&"object"==typeof s&&n.call(s,"__await")?t.resolve(s.__await).then(function(e){r("next",e,i,c)},function(e){r("throw",e,i,c)}):t.resolve(s).then(function(e){u.value=e,i(u)},function(e){return r("throw",e,i,c)})}c(l.arg)}var o;a(this,"_invoke",{value:function(e,n){function a(){return new t(function(t,a){r(e,n,t,a)})}return o=o?o.then(a,a):a()}})}function j(t,r,n){var a=h;return function(o,i){if(a===p)throw new Error("Generator is already running");if(a===v){if("throw"===o)throw i;return{value:e,done:!0}}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var l=N(c,n);if(l){if(l===d)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===h)throw a=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=p;var u=f(t,r,n);if("normal"===u.type){if(a=n.done?v:m,u.arg===d)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(a=v,n.method="throw",n.arg=u.arg)}}}function N(t,r){var n=r.method,a=t.iterator[n];if(a===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,N(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var o=f(a,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function G(t){if(t||""===t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return g.prototype=E,a(x,"constructor",{value:E,configurable:!0}),a(E,"constructor",{value:g,configurable:!0}),g.displayName=u(E,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,E):(e.__proto__=E,u(e,l,"GeneratorFunction")),e.prototype=Object.create(x),e},t.awrap=function(e){return{__await:e}},k(O.prototype),u(O.prototype,c,function(){return this}),t.AsyncIterator=O,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new O(s(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},k(x),u(x,l,"Generator"),u(x,i,function(){return this}),u(x,"toString",function(){return"[object Generator]"}),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=G,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return c.type="throw",c.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;S(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:G(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}var W=function(e){var t=e.getMovieData,r=e.movie,o=e.setReviews,i=e.reviews,l=Object(n.useRef)(),s=Object(u.V)().imdbId;Object(n.useEffect)(function(){t(s)},[]);var f=function(){var e=Object(c.a)(Y().mark(function e(){var t,r;return Y().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G.post("/api/v1/reviews",{reviewBody:l.current.value,imdbId:s});case 3:t=e.sent,console.log(t),r=[].concat(Object(F.a)(i),[{body:l.current.value}]),o(r),l.current.value="",e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}},e,null,[[0,10]])}));return function(){return e.apply(this,arguments)}}();return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"review-page-container"},a.a.createElement("div",{className:"review-rows-container"},a.a.createElement(U.a,{className:"reviews-carousel-container"},r.backdrops&&Object.values(r.backdrops).map(function(e){return a.a.createElement(U.a.Item,{className:"reviews-carousel-card"},a.a.createElement("img",{className:"review-card-image",src:e,alt:r.title}),a.a.createElement(U.a.Caption,null,a.a.createElement("h2",null,r.title),a.a.createElement("h3",null,"Out on Your Nearest theatres from ",r.releaseDate)))}))),a.a.createElement("div",{className:"review-info-container"},a.a.createElement("div",{className:"review-input"},a.a.createElement(R,{reviewSubmitHandler:f,refText:l,defaultValue:"Hey, feel free to submit a review "}),a.a.createElement("div",{className:"reviews-shown"},a.a.createElement(H.a,null,a.a.createElement("hr",null)),a.a.createElement("div",{className:"review-submitted"},i?i.map(function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(H.a,null,e.body),a.a.createElement(Q.a,null,a.a.createElement(H.a,null,a.a.createElement("hr",null))))}):a.a.createElement(H.a,null)))))))},B={clientId:"0oacvxsruvU5ZobzQ5d7",issuer:"https://dev-29879020.okta.com/oauth2/default",redirectUri:"http://localhost:3000/login/callback",scopes:["openid","profile","email"],pkce:!0,disableHttpsCheck:!0},D=r(41),M=(r(368),r(365)),V=(r(381),function(e){var t=e.onSuccess,r=e.onError,o=Object(n.useRef)();return Object(n.useEffect)(function(){if(!o.current)return!1;var e=new M.a(B);return e.showSignInToGetTokens({el:o.current}).then(t).catch(r),function(){return e.remove()}},[t,r]),a.a.createElement("div",{className:"container"},a.a.createElement("div",{ref:o}))}),q=function(e){var t=e.config,r=Object(u.Q)(),n=Object(d.c)(),o=n.oktaAuth,i=n.authState;return console.log(i),i?i.isAuthenticated?r("/home"):a.a.createElement(V,{config:t,onSuccess:function(e){o.handleLoginRedirect(e)},onError:function(e){console.log("Error in authorization",e)}}):a.a.createElement(g,null)},z=(r(383),function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"aboutUsPage"}),a.a.createElement(w,null),a.a.createElement("title",null," An About Us Page | CoderGirl "),a.a.createElement("link",{rel:"stylesheet",href:"style.css"}),a.a.createElement("body",null,a.a.createElement("section",{class:"about-us"},a.a.createElement("div",{class:"about"},a.a.createElement("img",{src:"https://media.istockphoto.com/id/526947869/vector/man-silhouette-profile-picture.jpg?s=1024x1024&w=is&k=20&c=-_9Bhlpm_k7Ehpm3mbJLMcYNbDQuLQsizLDOY5hbpcs=",class:"pic",alt:"test"}),a.a.createElement("div",{class:"text"},a.a.createElement("h2",null,"About Me"),a.a.createElement("h5",null,"Hey, I'm Safdar I'm a ",a.a.createElement("span",null,"Developer")),a.a.createElement("p",null,"Details to reach out to me are attached in the footer below, please feel free to reach out !"),a.a.createElement("p",null," Thanks for visiting :)"),a.a.createElement("div",{class:"data"}))),a.a.createElement(x,null))),a.a.createElement("div",null))});var J=function(){return a.a.createElement("div",{className:"landing-page"},a.a.createElement("h1",null,"The API's for this page are still under construction"),a.a.createElement("p",null,"This is a placeholder page"))};function Z(){Z=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var o=t&&t.prototype instanceof y?t:y,i=Object.create(o.prototype),c=new T(n||[]);return a(i,"_invoke",{value:j(e,r,c)}),i}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=s;var h="suspendedStart",m="suspendedYield",p="executing",v="completed",d={};function y(){}function g(){}function E(){}var w={};u(w,i,function(){return this});var b=Object.getPrototypeOf,L=b&&b(b(G([])));L&&L!==r&&n.call(L,i)&&(w=L);var x=E.prototype=y.prototype=Object.create(w);function k(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function O(e,t){function r(a,o,i,c){var l=f(e[a],e,o);if("throw"!==l.type){var u=l.arg,s=u.value;return s&&"object"==typeof s&&n.call(s,"__await")?t.resolve(s.__await).then(function(e){r("next",e,i,c)},function(e){r("throw",e,i,c)}):t.resolve(s).then(function(e){u.value=e,i(u)},function(e){return r("throw",e,i,c)})}c(l.arg)}var o;a(this,"_invoke",{value:function(e,n){function a(){return new t(function(t,a){r(e,n,t,a)})}return o=o?o.then(a,a):a()}})}function j(t,r,n){var a=h;return function(o,i){if(a===p)throw new Error("Generator is already running");if(a===v){if("throw"===o)throw i;return{value:e,done:!0}}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var l=N(c,n);if(l){if(l===d)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===h)throw a=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=p;var u=f(t,r,n);if("normal"===u.type){if(a=n.done?v:m,u.arg===d)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(a=v,n.method="throw",n.arg=u.arg)}}}function N(t,r){var n=r.method,a=t.iterator[n];if(a===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,N(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var o=f(a,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function G(t){if(t||""===t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return g.prototype=E,a(x,"constructor",{value:E,configurable:!0}),a(E,"constructor",{value:g,configurable:!0}),g.displayName=u(E,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,E):(e.__proto__=E,u(e,l,"GeneratorFunction")),e.prototype=Object.create(x),e},t.awrap=function(e){return{__await:e}},k(O.prototype),u(O.prototype,c,function(){return this}),t.AsyncIterator=O,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new O(s(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},k(x),u(x,l,"Generator"),u(x,i,function(){return this}),u(x,"toString",function(){return"[object Generator]"}),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=G,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return c.type="throw",c.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;S(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:G(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}var K=new D.OktaAuth(B);var X=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),r=t[0],o=t[1],i=Object(n.useState)(""),s=Object(l.a)(i,2),f=s[0],h=s[1],m=Object(n.useState)(""),p=Object(l.a)(m,2),v=p[0],y=p[1],g=function(){var e=Object(c.a)(Z().mark(function e(){var t;return Z().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G.get("/api/v1/movies");case 3:t=e.sent,o(t.data),console.log(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(c.a)(Z().mark(function e(t){var r,n,a;return Z().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G.get("/api/v1/movies/".concat(t));case 3:r=e.sent,n=r.data,h(n),a=n.reviewIds,y(a),console.log(a),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)(function(){g()},[]);var w=Object(u.Q)(),b=function(){var e=Object(c.a)(Z().mark(function e(t,r){return Z().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:w(Object(D.toRelativeUrl)(r||"/home",window.location.origin));case 1:case"end":return e.stop()}},e)}));return function(t,r){return e.apply(this,arguments)}}();return a.a.createElement(d.b,{oktaAuth:K,restoreOriginalUri:b,onAuthRequired:function(){w("/login")}},a.a.createElement("div",{className:"App"},a.a.createElement(u.j,null,a.a.createElement(u.g,{path:"/",element:a.a.createElement(O,null)},a.a.createElement(u.g,{path:"/login",element:a.a.createElement(q,{config:B})}),a.a.createElement(u.g,{path:"login/callback",element:a.a.createElement(d.a,null)}),a.a.createElement(u.g,{path:"/home",element:a.a.createElement(T,{movies:r})}),a.a.createElement(u.g,{path:"/Trailer/:ytTrailerId",element:a.a.createElement(I,null)}),",",a.a.createElement(u.g,{path:"/Reviews/:imdbId",element:a.a.createElement(W,{getMovieData:E,movie:f,reviews:v,setReviews:y})}),a.a.createElement(u.g,{path:"/watchlist",element:a.a.createElement(J,null)})),a.a.createElement(u.g,{path:"/About-Us",element:a.a.createElement(z,null)}))))};r(386);i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(b.BrowserRouter,null,a.a.createElement(X,null))))}},[[248,2,1]]]);
//# sourceMappingURL=main.87e8b59a.chunk.js.map