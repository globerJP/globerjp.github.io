(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{107:function(t,e,r){"use strict";var n=r(532),o=r(535),c={layout:"loginLayout",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},l=(r(424),r(65)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e(n.a,{attrs:{dark:""}},[e(o.a,[404===t.error.statusCode?e("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):e("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v("\n  Go to "),e("NuxtLink",{staticClass:"primary--text",attrs:{color:"blue",to:"/"}},[t._v("\n    Home page\n  ")])],1)],1)}),[],!1,null,"cd78adc2",null);e.a=component.exports},141:function(t,e,r){"use strict";r.r(e);var n=r(119),o=r(120),c=r(257),l=r(165),f=(r(18),r(16),r(17),r(7),r(22),r(15),r(23),r(21)),d=r(1),h=(r(61),r(83));function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var v={data:function(){return{clipped:!1,drawer:!1,fixed:!1,miniVariant:!1,right:!0,rightDrawer:!1,error:null,success:null}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(d.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({user:function(){return this.$store.state.authUser}},Object(h.c)({isAdmin:"account/ISADMIN"})),methods:{linkTo:function(address){this.$router.push({path:"/".concat(address)})},login:function(){this.$store.getters.isLoggedIn?this.$router.push("/dashboard"):this.$router.push({path:"/login"})},logout:function(){var t=this;return Object(f.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$fire.auth.signOut();case 2:t.$router.push({path:"/"});case 3:case"end":return e.stop()}}),e)})))()}}},O=v,C=(r(456),r(65)),component=Object(C.a)(O,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"toolbar-header d-flex justify-center align-center px-5"},[e(l.a,{staticClass:"headline text-uppercase d-flex justify-center align-center",staticStyle:{height:"100%"}},[e("nuxt-link",{staticClass:"container-logo font-weight-bold black--text d-flex justify-center align-center",staticStyle:{height:"100%"},attrs:{to:"/"}},[e("div",{staticClass:"primary--text text-lowercase"},[t._v("glober")]),t._v(" "),e("h1",{staticStyle:{display:"none"}},[t._v("\n          glober - Event Sharing Site for Students\n        ")])])],1),t._v(" "),e(c.a),t._v(" "),e(n.a,{directives:[{name:"show",rawName:"v-show",value:t.user&&t.isAdmin,expression:"user && isAdmin"}],staticStyle:{height:"100%"},attrs:{to:"/admin",nuxt:"",icon:"",color:"blue"}},[e(o.a,[t._v("mdi-account")])],1),t._v(" "),e(c.a),t._v(" "),e("div",{staticClass:"d-flex justify-center align-center",staticStyle:{height:"100%"}},[e(n.a,{directives:[{name:"show",rawName:"v-show",value:t.user,expression:"user"}],staticClass:"primary--text text-capitalize",attrs:{exact:""},on:{click:function(e){return e.stopPropagation(),t.logout()}}},[t._v("logout")]),t._v(" "),e(n.a,{directives:[{name:"show",rawName:"v-show",value:!t.user,expression:"!user"}],staticClass:"primary--text text-capitalize",attrs:{exact:""},on:{click:function(e){return e.stopPropagation(),t.login()}}},[t._v("login")])],1)],1)])}),[],!1,null,"511910e1",null);e.default=component.exports},251:function(t,e,r){"use strict";var n=r(2),o=r(355);n.a.use(o.a)},252:function(t,e,r){"use strict";var n=r(2),o=r(265);r(519);e.a=function(t){var e=t.app;n.a.use(o.u,{vuetify:e.vuetify,iconsGroup:"mdi"})}},256:function(t,e,r){"use strict";r(17),r(7);var n=r(2),o=(r(91),r(34),r(76),r(137)),c=r.n(o),l=function(t){return t?c()(t).format("YYYY MMM D HH:mm:ss"):""},f=function(t){return t?c()(t).format("YYYY MMM D"):""},d=function(t){if(!t)return"";var e=new Date(t),r=e.getDay(),n=e.toLocaleString("en-CA",{year:"numeric",month:"numeric",day:"numeric"}),o=e.toLocaleString("en-CA",{hour:"numeric",minute:"2-digit"});return n+", "+["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][r]+", "+o},h=function(t){if(!t)return"";var e=new Date(t),r=e.getDay(),n=e.toLocaleString("en-CA",{year:"numeric",month:"numeric",day:"numeric"}),o=e.toLocaleString("en-CA",{hour:"numeric",minute:"2-digit"});return n+", "+["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][r]+", "+o},m=function(t){if(!t)return"";var e=new Date(t),r=e.getDay(),n=e.toLocaleString("en-CA",{year:"numeric",month:"numeric",day:"numeric"}).split("-").join("."),o=e.toLocaleString("en-CA",{hour:"numeric",minute:"2-digit"});return n+", "+["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][r]+", "+o};n.a.filter("toDate",(function(t){return l(t)})),n.a.filter("toOnlyDate",(function(t){return f(t)})),n.a.mixin({methods:{toWeekDate:function(t){return d(t)},toWeekDateMin:function(t){return h(t)},toWeekDay:function(t){return m(t)}}})},329:function(t,e,r){var content=r(425);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("814c85aa",content,!0,{sourceMap:!1})},335:function(t,e,r){var content=r(457);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("14d9ad40",content,!0,{sourceMap:!1})},336:function(t,e,r){var content=r(459);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("1b736be0",content,!0,{sourceMap:!1})},337:function(t,e,r){var content=r(461);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("45cd01d5",content,!0,{sourceMap:!1})},338:function(t,e,r){var content=r(463);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("c4facdbe",content,!0,{sourceMap:!1})},339:function(t,e,r){var content=r(465);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("330a0275",content,!0,{sourceMap:!1})},349:function(t,e,r){"use strict";r(38);var n=r(205);e.a={plugins:[n.a],locale:"en",rules:{foobar:function(t){var e=t.value;return["foo","bar"].includes(e)}}}},352:function(t,e,r){"use strict";var n=r(532),o=r(534),c=r(119),l=r(120),f=r(533),d=(r(18),r(16),r(17),r(7),r(22),r(15),r(23),r(21)),h=r(1),m=(r(61),r(141)),v=r(83);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var C={components:{Navigation:m.default},data:function(){return{clipped:!1,drawer:!1,fixed:!1,miniVariant:!1,right:!0,rightDrawer:!1,error:null,success:null}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(h.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({user:function(){return this.$store.state.authUser}},Object(v.c)({isAdmin:"account/ISADMIN"})),methods:{linkTo:function(address){this.$router.push({path:"/".concat(address)})},login:function(){this.$store.getters.isLoggedIn?this.$router.push("/dashboard"):this.$router.push({path:"/login"})},logout:function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$fire.auth.signOut();case 2:t.$router.push({path:"/"});case 3:case"end":return e.stop()}}),e)})))()}}},x=C,A=(r(458),r(65)),component=Object(A.a)(x,(function(){var t=this,e=t._self._c;return e(n.a,[e("Navigation",{staticStyle:{"z-index":"10"}}),t._v(" "),e(f.a,{staticStyle:{"padding-left":"0 !important"}},[e("Nuxt")],1),t._v(" "),e(o.a,{staticClass:"navigation-bottom",staticStyle:{"z-index":"4",display:"flex","align-items":"center","justify-content":"center"},attrs:{app:""}},[e(c.a,{staticClass:"white primary--text",staticStyle:{height:"100%"},attrs:{to:"/",nuxt:""}},[t._v("Home\n      "),e(l.a,[t._v("mdi-home")])],1),t._v(" "),e(c.a,{staticClass:"white primary--text",staticStyle:{height:"100%"},attrs:{to:"/feed",nuxt:""}},[t._v("Feed\n      "),e(l.a,[t._v("mdi-rss")])],1),t._v(" "),e(c.a,{staticClass:"white primary--text",staticStyle:{height:"100%"},attrs:{to:"/dashboard",nuxt:""}},[t._v("My Page\n      "),e(l.a,[t._v("mdi-account")])],1),t._v(" "),e(c.a,{directives:[{name:"show",rawName:"v-show",value:t.user&&t.isAdmin,expression:"user && isAdmin"}],staticClass:"white primary--text",staticStyle:{height:"100%"},attrs:{to:"/faq",nuxt:""}},[t._v("FAQ\n      "),e(l.a,[t._v("mdi-frequently-asked-questions")])],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Navigation:r(141).default})},353:function(t,e,r){"use strict";var n=r(532),o=r(534),c=r(119),l=r(120),f=r(533),d=(r(18),r(16),r(17),r(7),r(22),r(15),r(23),r(21)),h=r(1),m=(r(61),r(141)),v=r(83);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var C={components:{Navigation:m.default},data:function(){return{clipped:!1,drawer:!1,fixed:!1,miniVariant:!1,right:!0,rightDrawer:!1,error:null,success:null}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(h.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({user:function(){return this.$store.state.authUser}},Object(v.c)({isAdmin:"account/ISADMIN"})),methods:{linkTo:function(address){this.$router.push({path:"/".concat(address)})},login:function(){this.$store.getters.isLoggedIn?this.$router.push("/dashboard"):this.$router.push({path:"/login"})},logout:function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$fire.auth.signOut();case 2:t.$router.push({path:"/"});case 3:case"end":return e.stop()}}),e)})))()}}},x=C,A=(r(460),r(65)),component=Object(A.a)(x,(function(){var t=this,e=t._self._c;return e(n.a,[e("Navigation",{staticStyle:{"z-index":"10"}}),t._v(" "),e(f.a,{staticStyle:{"padding-left":"0 !important"}},[e("Nuxt",{attrs:{"keep-alive":""}})],1),t._v(" "),e(o.a,{staticClass:"navigation-bottom",staticStyle:{"z-index":"4",display:"flex","align-items":"center","justify-content":"center"},attrs:{"keep-alive":"",app:""}},[e(c.a,{staticClass:"white primary--text",staticStyle:{height:"100%"},attrs:{to:"/",nuxt:""}},[t._v("Home\n      "),e(l.a,[t._v("mdi-home")])],1),t._v(" "),e(c.a,{staticClass:"white primary--text",staticStyle:{height:"100%"},attrs:{to:"/feed",nuxt:""}},[t._v("Feed\n      "),e(l.a,[t._v("mdi-rss")])],1),t._v(" "),e(c.a,{staticClass:"white primary--text",staticStyle:{height:"100%"},attrs:{to:"/dashboard",nuxt:""}},[t._v("My Page\n      "),e(l.a,[t._v("mdi-account")])],1),t._v(" "),e(c.a,{directives:[{name:"show",rawName:"v-show",value:t.user&&t.isAdmin,expression:"user && isAdmin"}],staticClass:"white primary--text",staticStyle:{height:"100%"},attrs:{to:"/faq",nuxt:""}},[t._v("FAQ\n      "),e(l.a,[t._v("mdi-frequently-asked-questions")])],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Navigation:r(141).default})},354:function(t,e,r){"use strict";var n=r(532),o=r(119),c=r(533),l=r(257),f=r(204),d=r(165),h={methods:{login:function(){this.$store.getters.isLoggedIn?this.$router.push("/dashboard"):this.$router.push({path:"/login"})}}},m=(r(462),r(65)),component=Object(m.a)(h,(function(){var t=this,e=t._self._c;return e(n.a,[e("div",[e(f.a,{staticClass:"dp-sp-none"},[e(d.a,{staticClass:"headline text-uppercase md-5"},[e("nuxt-link",{staticClass:"container-logo font-weight-bold black--text",attrs:{to:"/"}},[e("div",{staticClass:"primary--text text-capitalize"},[t._v("glober")]),t._v(" "),e("h1",{staticStyle:{display:"none"}},[t._v("\n            glober - Services for International Students in Japan\n          ")])])],1),t._v(" "),e(l.a),t._v(" "),e(o.a,{staticClass:"primary--text text-capitalize mr-3",attrs:{exact:""},on:{click:function(e){return e.stopPropagation(),t.login()}}},[t._v("login")])],1)],1),t._v(" "),e(c.a,[e("Nuxt")],1)],1)}),[],!1,null,null,null);e.a=component.exports},356:function(t,e,r){"use strict";var n=r(532),o=r(533),c=(r(464),r(65)),component=Object(c.a)({},(function(){var t=this._self._c;return t(n.a,[t(o.a,[t("Nuxt")],1)],1)}),[],!1,null,"7fbb99a2",null);e.a=component.exports},369:function(t,e,r){r(370),t.exports=r(371)},405:function(t,e,r){"use strict";r.r(e),e.default=function(t){var e=t.store,r=t.redirect;if(!e.getters.isLoggedIn)return r("/login")}},424:function(t,e,r){"use strict";r(329)},425:function(t,e,r){var n=r(25)(!1);n.push([t.i,"h1[data-v-cd78adc2]{font-size:20px}",""]),t.exports=n},456:function(t,e,r){"use strict";r(335)},457:function(t,e,r){var n=r(25)(!1);n.push([t.i,".toolbar-header[data-v-511910e1]{min-height:56px;background-color:#fff;contain:layout;display:block;flex:1 1 auto;max-width:100%;transition:transform .2s cubic-bezier(.4,0,.2,1),background-color .2s cubic-bezier(.4,0,.2,1),left .2s cubic-bezier(.4,0,.2,1),right .2s cubic-bezier(.4,0,.2,1),box-shadow .28s cubic-bezier(.4,0,.2,1),max-width .25s cubic-bezier(.4,0,.2,1),width .25s cubic-bezier(.4,0,.2,1);position:relative;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-sheet[data-v-511910e1]{border-radius:0}.v-toolbar[data-v-511910e1]{max-width:100%;transition:transform .2s cubic-bezier(.4,0,.2,1),background-color .2s cubic-bezier(.4,0,.2,1),left .2s cubic-bezier(.4,0,.2,1),right .2s cubic-bezier(.4,0,.2,1),box-shadow .28s cubic-bezier(.4,0,.2,1),max-width .25s cubic-bezier(.4,0,.2,1),width .25s cubic-bezier(.4,0,.2,1);position:relative;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}@media screen and (min-width:960px){.v-toolbar[data-v-511910e1]{min-height:64px}}",""]),t.exports=n},458:function(t,e,r){"use strict";r(336)},459:function(t,e,r){var n=r(25)(!1);n.push([t.i,"a{text-decoration:none}",""]),t.exports=n},460:function(t,e,r){"use strict";r(337)},461:function(t,e,r){var n=r(25)(!1);n.push([t.i,"a{text-decoration:none}",""]),t.exports=n},462:function(t,e,r){"use strict";r(338)},463:function(t,e,r){var n=r(25)(!1);n.push([t.i,"a{text-decoration:none}",""]),t.exports=n},464:function(t,e,r){"use strict";r(339)},465:function(t,e,r){var n=r(25)(!1);n.push([t.i,"a[data-v-7fbb99a2]{text-decoration:none;color:#00f!important}",""]),t.exports=n},466:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return l})),r.d(e,"getters",(function(){return f})),r.d(e,"actions",(function(){return d})),r.d(e,"mutations",(function(){return h}));var n=r(85),o=r(21),c=(r(38),r(62),r(61),["allClaims"]),l=function(){return{authUser:null,loggedIn:!1}},f={isLoggedIn:function(t){return!!t.authUser&&t.loggedIn}},d={nuxtServerInit:function(t,e){var r=this;return Object(o.a)(regeneratorRuntime.mark((function o(){var l,f,d;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(l=t.dispatch,null!==r.$fire.auth){o.next=3;break}throw"nuxtServerInit Example not working - this.$fire.auth cannot be accessed.";case 3:if(null!==e.$fire.auth){o.next=5;break}throw"nuxtServerInit Example not working - ctx.$fire.auth cannot be accessed.";case 5:if(null!==e.app.$fire.auth){o.next=7;break}throw"nuxtServerInit Example not working - ctx.$fire.auth cannot be accessed.";case 7:if(!(e.res&&e.res.locals&&e.res.locals.user)){o.next=11;break}return f=e.res.locals.user,f.allClaims,d=Object(n.a)(f,c),o.next=11,l("onAuthStateChanged",d);case 11:case"end":return o.stop()}}),o)})))()},onAuthStateChanged:function(t,e){var r=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,c,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o=t.commit,c=t.dispatch,l=e.authUser,e.claims,!window.location.pathname.includes("/signup")){n.next=4;break}return n.abrupt("return");case 4:if(l){n.next=11;break}return n.next=7,r.$router.push("/");case 7:return n.next=9,c("account/RESET_ACCOUNT");case 9:return o("RESET_STORE"),n.abrupt("return");case 11:if(l.emailVerified){n.next=13;break}return n.abrupt("return");case 13:if(!l){n.next=24;break}return n.prev=14,n.next=17,c("account/FETCH_ACCOUNT");case 17:return n.next=19,r.$router.push("/dashboard");case 19:n.next=24;break;case 21:n.prev=21,n.t0=n.catch(14),console.error(n.t0);case 24:o("SET_USER",l);case 25:case"end":return n.stop()}}),n,null,[[14,21]])})))()}},h={RESET_STORE:function(t){t.authUser=null,t.loggedIn=!1},SET_USER:function(t,e){t.authUser={uid:e.uid,email:e.email,emailVerified:e.emailVerified,displayName:e.displayName,idToken:e.idToken},t.loggedIn=!0}}},467:function(t,e,r){"use strict";r.r(e),r.d(e,"mutations",(function(){return h})),r.d(e,"state",(function(){return m})),r.d(e,"actions",(function(){return v})),r.d(e,"getters",(function(){return O}));var n,o,c,l=r(21),f=r(1),d=(r(61),r(8)),h=(n={},Object(f.a)(n,d.SET_ACCOUNT,(function(t,e){t[d.ACCOUNT]=e})),Object(f.a)(n,d.SET_ACCOUNT_IMAGES,(function(t,e){t[d.ACCOUNT].backgroundImage.imageUrl=e.backgroundImage.imageUrl,t[d.ACCOUNT].backgroundImage.teaserImageUrl=e.backgroundImage.teaserImageUrl,t[d.ACCOUNT].avatarImage.imageUrl=e.avatarImage.imageUrl,t[d.ACCOUNT].avatarImage.teaserImageUrl=e.avatarImage.teaserImageUrl})),n),m=function(){return Object(f.a)({},d.ACCOUNT,null)},v=(o={},Object(f.a)(o,d.RESET_ACCOUNT,(function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.commit,m[d.ACCOUNT]){e.next=3;break}return e.abrupt("return");case 3:r(d.SET_ACCOUNT,null);case 4:case"end":return e.stop()}}),e)})))()})),Object(f.a)(o,d.FETCH_ACCOUNT,(function(t){var e=this;return Object(l.a)(regeneratorRuntime.mark((function r(){var n,o,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=t.commit,!m[d.ACCOUNT]){r.next=3;break}return r.abrupt("return",m[d.ACCOUNT]);case 3:return r.next=5,e.$fire.firestore.collection("users").doc(e.$fire.auth.currentUser.uid).get();case 5:if(o=r.sent,data={},!o.exists){r.next=11;break}data=o.data(),r.next=20;break;case 11:return r.prev=11,data={email:e.$fire.auth.currentUser.email,country:"",expectedGraduationYear:"",firstName:"",lastName:"",major:"",interests:[],university:"",dateOfEntry:"",degree:"",backgroundImage:{imageUrl:"",teaserImageUrl:""},avatarImage:{imageUrl:"",teaserImageUrl:""}},r.next=15,e.$fire.firestore.collection("users").doc(e.$fire.auth.currentUser.uid).set(data);case 15:r.next=20;break;case 17:r.prev=17,r.t0=r.catch(11),console.log("this error",r.t0);case 20:return n(d.SET_ACCOUNT,data),r.abrupt("return",data);case 22:case"end":return r.stop()}}),r,null,[[11,17]])})))()})),Object(f.a)(o,d.ENSURE_ACCOUNT_EXISTS,(function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var r,n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.dispatch,!(n=t.state)[d.ACCOUNT]){e.next=3;break}return e.abrupt("return",n[d.ACCOUNT]);case 3:return e.next=5,r(d.FETCH_ACCOUNT);case 5:return data=e.sent,e.abrupt("return",data);case 7:case"end":return e.stop()}}),e)})))()})),o),O=(c={},Object(f.a)(c,d.ISADMIN,(function(t){return!(!t[d.ACCOUNT]||!t[d.ACCOUNT].isAdmin)&&t[d.ACCOUNT].isAdmin})),Object(f.a)(c,d.EMAIL,(function(t){return t[d.ACCOUNT]?t[d.ACCOUNT].email:""})),Object(f.a)(c,d.EMAIL,(function(t){return t[d.ACCOUNT]?t[d.ACCOUNT].email:""})),Object(f.a)(c,d.COUNTRY,(function(t){return t[d.ACCOUNT]?t[d.ACCOUNT].country:""})),Object(f.a)(c,d.EXPECTEDGRADUATIONYEAR,(function(t){return t[d.ACCOUNT]?t[d.ACCOUNT].expectedGraduationYear:""})),Object(f.a)(c,d.FIRSTNAME,(function(t){return t[d.ACCOUNT]?t[d.ACCOUNT].firstName:""})),Object(f.a)(c,d.LASTNAME,(function(t){return t[d.ACCOUNT]?t[d.ACCOUNT].lastName:""})),Object(f.a)(c,d.MAJOR,(function(t){return t[d.ACCOUNT]?t[d.ACCOUNT].major:""})),Object(f.a)(c,d.INTERESTS,(function(t){return t[d.ACCOUNT]?t[d.ACCOUNT].interests:[]})),Object(f.a)(c,d.UNIVERSITY,(function(t){return t[d.ACCOUNT]?t[d.ACCOUNT].university:""})),Object(f.a)(c,d.DEGREE,(function(t){return t[d.ACCOUNT]?t[d.ACCOUNT].degree:""})),Object(f.a)(c,d.DATEOFENTRY,(function(t){return t[d.ACCOUNT]?t[d.ACCOUNT].dateOfEntry:""})),Object(f.a)(c,d.AVATARIMAGE,(function(t){return t[d.ACCOUNT]?t[d.ACCOUNT].avatarImage:{imageUrl:"",teaserImageUrl:""}})),Object(f.a)(c,d.BACKGROUNDIMAGE,(function(t){return t[d.ACCOUNT]?t[d.ACCOUNT].backgroundImage:{imageUrl:"",teaserImageUrl:""}})),c)},468:function(t,e){function r(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}r.keys=function(){return[]},r.resolve=r,t.exports=r,r.id=468},8:function(t,e,r){"use strict";r.r(e),r.d(e,"ACCOUNT",(function(){return n})),r.d(e,"SET_ACCOUNT",(function(){return o})),r.d(e,"SET_ACCOUNT_IMAGES",(function(){return c})),r.d(e,"RESET_ACCOUNT",(function(){return l})),r.d(e,"FETCH_ACCOUNT",(function(){return f})),r.d(e,"ENSURE_ACCOUNT_EXISTS",(function(){return d})),r.d(e,"EMAIL",(function(){return h})),r.d(e,"COUNTRY",(function(){return m})),r.d(e,"EXPECTEDGRADUATIONYEAR",(function(){return v})),r.d(e,"FIRSTNAME",(function(){return O})),r.d(e,"LASTNAME",(function(){return C})),r.d(e,"MAJOR",(function(){return x})),r.d(e,"INTERESTS",(function(){return A})),r.d(e,"UNIVERSITY",(function(){return T})),r.d(e,"DEGREE",(function(){return y})),r.d(e,"ISADMIN",(function(){return N})),r.d(e,"DATEOFENTRY",(function(){return E})),r.d(e,"AVATARIMAGE",(function(){return U})),r.d(e,"BACKGROUNDIMAGE",(function(){return _}));var n="ACCOUNT",o="SET_ACCOUNT",c="SET_ACCOUNT_IMAGES",l="RESET_ACCOUNT",f="FETCH_ACCOUNT",d="ENSURE_ACCOUNT_EXISTS",h="EMAIL",m="COUNTRY",v="EXPECTEDGRADUATIONYEAR",O="FIRSTNAME",C="LASTNAME",x="MAJOR",A="INTERESTS",T="UNIVERSITY",y="DEGREE",N="ISADMIN",E="DATEOFENTRY",U="AVATARIMAGE",_="BACKGROUNDIMAGE"}},[[369,89,14,90]]]);