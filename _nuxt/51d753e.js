(window.webpackJsonp=window.webpackJsonp||[]).push([[93,58],{1013:function(e,t,n){"use strict";n.r(t);var r=n(91),o=n(541),c=(n(55),n(70),n(14),n(77),n(82),n(17),n(16),n(22),n(23),n(1)),l=n(21),d=(n(39),n(44),n(46),n(34),n(170),n(75),n(66),n(8),n(15),n(61),n(814));function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function h(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var y={components:{Spinner:n(544).default,Post:d.default},data:function(){return{latestUpdatedAt:null,posts:[],eof:!1,isLoading:!1,lastDoc:null,batchSize:5,minSize:5,eventIds:{},userIds:{}}},computed:{user:function(){return this.$store.state.authUser}},mounted:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.user){t.next=4;break}return t.next=3,e.loadUntilSome();case 3:window.addEventListener("scroll",e.loadMore);case 4:case"end":return t.stop()}}),t)})))()},destroyed:function(){window.removeEventListener("scroll",this.loadMore)},watch:{$route:function(e,t){"feed"===e.name&&this.checkNewBlogsAndLoad()}},methods:{checkNewBlogsAndLoad:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$fire.firestore,r=n.collection("eventImages").orderBy("updatedAt","desc").limit(1),t.next=4,r.get();case 4:if(!((o=t.sent).size>0)){t.next=14;break}if(o.docs[0].data().updatedAt!=e.latestUpdatedAt){t.next=9;break}return t.abrupt("return");case 9:return e.lastDoc=null,e.eof=!1,e.posts=[],t.next=14,e.loadUntilSome();case 14:case"end":return t.stop()}}),t)})))()},loadBlogs:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var n,r,o,c,l,d,f,v,y;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.$fire.firestore,r=n.collection("eventImages").orderBy("createdAt","desc").limit(e.batchSize),e.posts.length){t.next=7;break}return t.next=5,n.collection("eventImages").orderBy("updatedAt","desc").limit(1).get();case 5:(o=t.sent).size>0&&(c=o.docs[0].data(),e.latestUpdatedAt=c.updatedAt);case 7:return e.lastDoc&&(r=r.startAfter(e.lastDoc)),t.next=10,r.get();case 10:if(l=t.sent,e.eof=l.empty,e.countMiss=0,!(l.size>0)){t.next=35;break}e.lastDoc=l.docs[l.docs.length-1],d=[],f=h(l.docs),t.prev=17,y=regeneratorRuntime.mark((function t(){var n,r,data,o,c,l,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=v.value,r=n.id,(data=n.data()).images.length||!e.posts.length){t.next=7;break}if(e.countMiss+=1,!e.posts.length){t.next=7;break}return t.abrupt("return","continue");case 7:return o="",data.comment&&(c=data.comment.match(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi),o=data.comment,c&&c.map((function(e){o=o.replace(e,"<a style='color:blue !important' href=\""+e+'" target="_BLANK">'+e+"</a>")}))),e.eventIds[data.eventId]||(l=e.$fire.firestore.collection("events").doc(data.eventId).get(),d.push(l)),e.userIds[data.userId]||(f=e.$fire.firestore.collection("users").doc(data.userId).get(),d.push(f)),t.next=13,Promise.all(d).then((function(t){t.forEach((function(t){var n=t.id,data=t.data();n&&data&&(data.title&&(e.eventIds[n]=data),data.email&&(e.userIds[n]=data))}))}));case 13:e.posts.push(m(m(m(m({id:r},e.eventIds[data.eventId]),e.userIds[data.userId]),data),{},{alteredComment:o}));case 14:case"end":return t.stop()}}),t)})),f.s();case 20:if((v=f.n()).done){t.next=27;break}return t.delegateYield(y(),"t0",22);case 22:if("continue"!==t.t0){t.next=25;break}return t.abrupt("continue",25);case 25:t.next=20;break;case 27:t.next=32;break;case 29:t.prev=29,t.t1=t.catch(17),f.e(t.t1);case 32:return t.prev=32,f.f(),t.finish(32);case 35:case"end":return t.stop()}}),t,null,[[17,29,32,35]])})))()},loadUntilSome:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isLoading&&!e.eof){t.next=2;break}return t.abrupt("return");case 2:e.isLoading=!0,e.countMiss=e.batchSize;case 4:if(!(e.countMiss>=e.batchSize-1)||e.eof){t.next=9;break}return t.next=7,e.loadBlogs();case 7:t.next=4;break;case 9:e.isLoading=!1;case 10:case"end":return t.stop()}}),t)})))()},loadMore:function(){!(this.$el.getBoundingClientRect().bottom<=(window.innerHeight||document.documentElement.clientHeight)+100)||this.isLoading||this.eof||this.loadUntilSome()}}},x=n(65),component=Object(x.a)(y,(function(){var e=this,t=e._self._c;return e.user?t(o.a,{staticClass:"d-flex flex-column justify-center align-center"},[t("h1",{staticClass:"d-flex justify-center align-center mt-7 mb-3 mt-md-9 blue--text text-decoration-underline",staticStyle:{"text-align":"center",width:"100%"}},[e._v(" Welcome ")]),e._v(" "),e._l(e.posts,(function(e){return t("Post",{key:e.createdAt,staticClass:"mb-0 pa-0",attrs:{post:e}})})),e._v(" "),e.isLoading?t("Spinner",{staticStyle:{"min-height":"90px"}}):e._e(),e._v(" "),e.eof?t(r.d,{staticStyle:{"min-height":"90px"}},[e._v("No more posts.")]):e._e()],2):t(o.a,[t("h1",[e._v("\n    You must be logged in to view this page.\n  ")]),e._v("\n  Go to "),t("NuxtLink",{staticClass:"primary--text",attrs:{color:"blue",to:"/"}},[e._v("\n      Home page\n  ")])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Post:n(814).default,Spinner:n(549).default})},543:function(e,t,n){var content=n(548);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("1a30734a",content,!0,{sourceMap:!1})},547:function(e,t,n){"use strict";n(543)},548:function(e,t,n){var r=n(25)(!1);r.push([e.i,".spinner[data-v-b799d304]{display:flex;justify-content:center;margin-top:1rem;color:#add8e6}",""]),e.exports=r},549:function(e,t,n){"use strict";n.r(t);var r=n(246),o={},c=(n(547),n(65)),component=Object(c.a)(o,(function(){var e=this._self._c;return e("div",{staticClass:"spinner"},[e(r.a,{attrs:{size:"100",indeterminate:""}})],1)}),[],!1,null,"b799d304",null);t.default=component.exports}}]);