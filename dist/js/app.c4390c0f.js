(function(t){function e(e){for(var n,c,i=e[0],s=e[1],u=e[2],p=0,f=[];p<i.length;p++)c=i[p],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,i=1;i<r.length;i++){var s=r[i];0!==a[s]&&(n=!1)}n&&(o.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},a={app:0},o=[];function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=s;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},3403:function(t,e,r){"use strict";r("6704")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Header",{attrs:{text:t.headerString}}),t._l(t.shows,(function(t){return r("Card",{key:t.id,attrs:{obj:t}})})),r("Leftbar")],2)},o=[],c=(r("fb6a"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{},[r("h1",{staticClass:"text-dark"},[t._v(t._s(t.text))])])}),i=[],s={name:"Header",props:{text:String}},u=s,l=(r("9382"),r("2877")),p=Object(l["a"])(u,c,i,!1,null,"070901c8",null),f=p.exports,d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card",staticStyle:{width:"18rem"},attrs:{id:"card"}},[r("img",{staticClass:"card-img-top",attrs:{src:t.imgsrc,alt:t.obj.name}}),r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[r("b",[t._v(t._s(t.obj.name))])]),r("p",{staticClass:"card-text"},[t._v(t._s(t.obj.overview))])])])},b=[],h={name:"Card",props:{obj:Object},data:function(){return{imgsrc:"https://image.tmdb.org/t/p/w154/"+this.obj.poster_path}}},v=h,m=(r("3403"),Object(l["a"])(v,d,b,!1,null,"05678c1d",null)),g=m.exports,y=r("bc3a"),_=r.n(y),j={name:"App",components:{Card:g,Header:f},data:function(){return{headerString:"Popular Tv Shows!",shows:"",limit:4}},mounted:function(){var t=this;_.a.get("https://api.themoviedb.org/3/tv/popular?api_key=4512e0cae0fc17c86d57be7d9a8cd524&language=en-US&page=1").then((function(e){var r=e.data.results.slice(0,t.limit);t.shows=r}))}},w=j,O=(r("034f"),Object(l["a"])(w,a,o,!1,null,null,null)),x=O.exports;r("4989"),r("ab8b");new n["a"]({render:function(t){return t(x)}}).$mount("#app")},6704:function(t,e,r){},"85ec":function(t,e,r){},9382:function(t,e,r){"use strict";r("bfd2")},bfd2:function(t,e,r){}});
//# sourceMappingURL=app.c4390c0f.js.map