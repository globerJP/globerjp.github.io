(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{788:function(e,t,r){"use strict";r.r(t);var n=r(520),o=(r(54),r(45),r(68),r(16),r(76),r(79),r(18),r(19),r(23),r(24),r(1)),c=r(22),l=(r(41),r(46),r(34),r(167),r(74),r(63),r(7),r(17),r(62),r(647));function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function m(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}var v={components:{Spinner:r(522).default,Post:l.default},data:function(){return{posts:[],eof:!1,isLoading:!1,lastDoc:null,batchSize:5,eventIds:{},userIds:{}}},computed:{user:function(){return this.$store.state.authUser}},mounted:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.user){t.next=4;break}return t.next=3,e.loadBlogs();case 3:window.addEventListener("scroll",e.loadMore);case 4:case"end":return t.stop()}}),t)})))()},destroyed:function(){window.removeEventListener("scroll",this.loadMore)},methods:{loadBlogs:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var r,n,o,c,l,f,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isLoading&&!e.eof){t.next=2;break}return t.abrupt("return");case 2:return e.isLoading=!0,r=e.$fire.firestore,n=r.collection("eventImages").orderBy("createdAt","desc").limit(e.batchSize),e.lastDoc&&(n=n.startAfter(e.lastDoc)),t.next=8,n.get();case 8:if(o=t.sent,e.eof=o.empty,!(o.size>0)){t.next=29;break}e.lastDoc=o.docs[o.docs.length-1],c=[],l=m(o.docs),t.prev=14,h=regeneratorRuntime.mark((function t(){var r,n,data,o,l,m,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=f.value,n=r.id,data=r.data(),o="",data.comment&&(l=data.comment.match(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi),o=data.comment,l&&l.map((function(e){o=o.replace(e,"<a style='color:blue !important' href=\""+e+'" target="_BLANK">'+e+"</a>")}))),e.eventIds[data.eventId]||(m=e.$fire.firestore.collection("events").doc(data.eventId).get(),c.push(m)),e.userIds[data.userId]||(h=e.$fire.firestore.collection("users").doc(data.userId).get(),c.push(h)),t.next=9,Promise.all(c).then((function(t){t.forEach((function(t){var r=t.id,data=t.data();r&&data&&(data.title&&(e.eventIds[r]=data),data.email&&(e.userIds[r]=data))}))}));case 9:e.posts.push(d(d(d(d({id:n},e.eventIds[data.eventId]),e.userIds[data.userId]),data),{},{alteredComment:o}));case 10:case"end":return t.stop()}}),t)})),l.s();case 17:if((f=l.n()).done){t.next=21;break}return t.delegateYield(h(),"t0",19);case 19:t.next=17;break;case 21:t.next=26;break;case 23:t.prev=23,t.t1=t.catch(14),l.e(t.t1);case 26:return t.prev=26,l.f(),t.finish(26);case 29:e.isLoading=!1;case 30:case"end":return t.stop()}}),t,null,[[14,23,26,29]])})))()},loadMore:function(){!(this.$el.getBoundingClientRect().bottom<=(window.innerHeight||document.documentElement.clientHeight)+100)||this.isLoading||this.eof||this.loadBlogs()}}},y=r(73),component=Object(y.a)(v,(function(){var e=this,t=e._self._c;return e.user?t(n.a,{staticStyle:{}},[t("h1",{staticClass:"d-flex justify-center align-center mt-7 mb-3 mt-md-9 blue--text text-decoration-underline",staticStyle:{"text-align":"center",width:"100%"}},[e._v(" Welcome ")]),e._v(" "),e._l(e.posts,(function(e){return t("Post",{key:e.createdAt,staticClass:"mb-0 pa-0",attrs:{post:e}})})),e._v(" "),e.isLoading?t("Spinner"):e._e()],2):t(n.a,[t("h1",[e._v("\n    You must be logged in to view this page.\n  ")]),e._v("\n  Go to "),t("NuxtLink",{staticClass:"primary--text",attrs:{color:"blue",to:"/"}},[e._v("\n      Home page\n  ")])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Post:r(647).default,Spinner:r(522).default})}}]);