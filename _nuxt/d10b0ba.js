(window.webpackJsonp=window.webpackJsonp||[]).push([[86,51,69],{1077:function(t,e,n){"use strict";n(984)},1078:function(t,e,n){var r=n(24)(!1);r.push([t.i,"",""]),t.exports=r},1292:function(t,e,n){"use strict";n.r(e);var r=n(120),o=n(565),c=(n(17),n(15),n(16),n(8),n(22),n(14),n(23),n(20)),d=n(2),l=(n(61),n(79)),f=n(1067),h=n(570);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var m={components:{Chat:f.default,Spinner:h.default},data:function(){return{isMounted:!1,currentUserId:"",isDevice:!1,screenHeight:"",currentState:!0}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(d.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({user:function(){return this.$store.state.authUser}},Object(l.c)({isAdmin:"account/ISADMIN",isOrganizer:"account/ISORGANIZER"})),mounted:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.isMounted=!0,t.user&&(t.isMounted=!0,t.isDevice=window.innerWidth<500,t.screenHeight=t.isDevice?t.currentState?"calc(".concat(window.innerHeight-120,"px)"):"calc(".concat(window.innerHeight,"%)"):"calc(100vh - 120px)",window.addEventListener("resize",t.setHeight),window.addEventListener("scroll",t.setHeight),t.currentUserId=t.user.uid);case 2:case"end":return e.stop()}}),e)})))()},destroyed:function(){window.removeEventListener("resize",this.setHeight),this.isMounted=!1},methods:{setHeight:function(){var t=this;this.$nextTick((function(){t.isDevice=window.innerWidth<500,t.screenHeight=t.isDevice?t.currentState?"calc(".concat(window.innerHeight-120,"px)"):"calc(".concat(window.innerHeight,"px)"):"calc(100vh - 120px)"}))},showHandler:function(t){this.isDevice&&(this.currentState=t,$nuxt.$emit("topEmit",t),this.setHeight())},getHeight:function(){var t=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(t,"px"))},handleJoin:function(){localStorage.setItem("BEFORE_LOGIN_PATH",this.$route.path),this.$router.push({path:"/login"})}}},w=m,y=(n(1077),n(65)),component=Object(y.a)(w,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"chat-container-outer"},[t.isMounted?t._e():e("Spinner",{attrs:{color:"blue"}}),t._v(" "),e("client-only",[t.user?e(o.a,{staticClass:"chat-container py-0"},[e("Chat",{attrs:{isDevice:t.isDevice,currentUserId:t.currentUserId,isAdmin:t.isAdmin,screenHeight:t.screenHeight},on:{"show-demo-options":t.showHandler}})],1):e(o.a,[e("h1",[t._v("\n        You must be logged in to view this page.\n      ")]),t._v(" "),e(r.a,{staticClass:"pa-0",staticStyle:{"text-transform":"unset !important","font-size":"16px !important"},attrs:{color:"#2196F3",text:""},on:{click:function(e){return t.handleJoin()}}},[t._v("Click here to Join")])],1)],1)],1)}),[],!1,null,"a8b1c0ee",null);e.default=component.exports;installComponents(component,{Spinner:n(576).default,Chat:n(1067).default})},568:function(t,e,n){var content=n(572);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("6333d4fe",content,!0,{sourceMap:!1})},569:function(t,e,n){var content=n(575);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("1a30734a",content,!0,{sourceMap:!1})},570:function(t,e,n){"use strict";n.r(e);var r={name:"LoadingSpinner"},o=(n(571),n(65)),component=Object(o.a)(r,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{"margin-top":"10px"}},[t("div",{staticClass:"lds-ring"},[t("div"),t("div"),t("div"),t("div")])])}],!1,null,"6f49ae7c",null);e.default=component.exports},571:function(t,e,n){"use strict";n(568)},572:function(t,e,n){var r=n(24)(!1);r.push([t.i,".lds-ring[data-v-6f49ae7c]{display:inline-block;position:relative;width:80px;height:80px}.lds-ring div[data-v-6f49ae7c]{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:5px;border-radius:50%;-webkit-animation:lds-ring-6f49ae7c 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:lds-ring-6f49ae7c 1.2s cubic-bezier(.5,0,.5,1) infinite;border:5px solid transparent;border-top-color:#2196f3}.lds-ring div[data-v-6f49ae7c]:first-child{-webkit-animation-delay:-.45s;animation-delay:-.45s}.lds-ring div[data-v-6f49ae7c]:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.lds-ring div[data-v-6f49ae7c]:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}@-webkit-keyframes lds-ring-6f49ae7c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes lds-ring-6f49ae7c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""]),t.exports=r},574:function(t,e,n){"use strict";n(569)},575:function(t,e,n){var r=n(24)(!1);r.push([t.i,".spinner[data-v-b799d304]{display:flex;justify-content:center;margin-top:1rem;color:#add8e6}",""]),t.exports=r},576:function(t,e,n){"use strict";n.r(e);var r=n(247),o={},c=(n(574),n(65)),component=Object(c.a)(o,(function(){var t=this._self._c;return t("div",{staticClass:"spinner"},[t(r.a,{attrs:{size:"100",indeterminate:""}})],1)}),[],!1,null,"b799d304",null);e.default=component.exports},984:function(t,e,n){var content=n(1078);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("44680300",content,!0,{sourceMap:!1})}}]);