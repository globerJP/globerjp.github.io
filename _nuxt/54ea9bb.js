(window.webpackJsonp=window.webpackJsonp||[]).push([[86,51,69],{1004:function(t,e,n){var content=n(1099);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("6e80b4ff",content,!0,{sourceMap:!1})},1098:function(t,e,n){"use strict";n(1004)},1099:function(t,e,n){var r=n(22)(!1);r.push([t.i,"@media screen and (max-width:500px){.chat-container-not-state[data-v-b3460f6a],.chat-container-outer-not-state[data-v-b3460f6a],.chat-container-outer-state[data-v-b3460f6a],.chat-container-state[data-v-b3460f6a]{height:100%;width:100%;max-height:100vh!important;max-height:calc(var(--vh, 1vh)*100)!important}}@media screen and (max-width:500px){.pos-bot[data-v-b3460f6a]{position:fixed;bottom:0}}",""]),t.exports=r},1317:function(t,e,n){"use strict";n.r(e);var r=n(120),o=n(569),c=(n(17),n(15),n(16),n(8),n(24),n(14),n(25),n(19)),d=n(2),l=(n(37),n(62),n(79)),f=n(1086),h=n(574);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var m={name:"chat",components:{Chat:f.default,Spinner:h.default},data:function(){return{isMounted:!1,currentUserId:"",isDevice:!1,screenHeight:"",currentState:!0}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(d.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({user:function(){return this.$store.state.authUser}},Object(l.c)({isAdmin:"account/ISADMIN",isOrganizer:"account/ISORGANIZER"})),mounted:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.isMounted=!0,t.user&&(t.isMounted=!0,t.setHeight(),window.addEventListener("resize",t.setHeight),t.currentUserId=t.user.uid);case 2:case"end":return e.stop()}}),e)})))()},watch:{$route:function(t,e){var n=this;return Object(c.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:"chat"===t.name&&(n.setHeight(),window.removeEventListener("resize",n.setHeight),window.addEventListener("resize",n.setHeight)),"chat"===e.name&&window.removeEventListener("resize",n.setHeight);case 2:case"end":return r.stop()}}),r)})))()}},destroyed:function(){window.removeEventListener("resize",this.setHeight),this.isMounted=!1},methods:{setHeight:function(){var t=this;this.$nextTick((function(){t.getHeight(),t.isDevice=window.innerWidth<500,t.screenHeight=t.isDevice?(t.currentState,"calc(".concat(window.innerHeight,"px)")):"calc(".concat(window.innerHeight,"px - 120px)")}))},showHandler:function(t){(this.isDevice||t)&&(this.currentState=t,$nuxt.$emit("topEmit",t),this.setHeight())},getHeight:function(){var t=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(t,"px"))},handleJoin:function(){localStorage.setItem("BEFORE_LOGIN_PATH",this.$route.path),this.$router.push({path:"/login"})}}},w=m,x=(n(1098),n(54)),component=Object(x.a)(w,(function(){var t=this,e=t._self._c;return e("div",{class:[t.currentState?"chat-container-outer-state":"pos-bot chat-container-outer-not-state"]},[t.isMounted?t._e():e("Spinner",{attrs:{color:"blue"}}),t._v(" "),e("client-only",[t.user?e(o.a,{staticClass:"pa-0",class:[t.currentState?"chat-container-state":"chat-container-not-state"],staticStyle:{position:"sticky",bottom:"0"}},[e("client-only",[e("Chat",{attrs:{isDevice:t.isDevice,currentUserId:t.currentUserId,isAdmin:t.isAdmin,screenHeight:t.screenHeight},on:{"show-demo-options":t.showHandler}})],1)],1):e(o.a,[e("h1",[t._v("\n        You must be logged in to view this page.\n      ")]),t._v(" "),e(r.a,{staticClass:"pa-0",staticStyle:{"text-transform":"unset !important","font-size":"16px !important"},attrs:{color:"#2196F3",text:""},on:{click:function(e){return t.handleJoin()}}},[t._v("Click here to Join")])],1)],1)],1)}),[],!1,null,"b3460f6a",null);e.default=component.exports;installComponents(component,{Spinner:n(580).default,Chat:n(1086).default})},572:function(t,e,n){var content=n(576);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("6333d4fe",content,!0,{sourceMap:!1})},573:function(t,e,n){var content=n(579);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("1a30734a",content,!0,{sourceMap:!1})},574:function(t,e,n){"use strict";n.r(e);var r={name:"LoadingSpinner"},o=(n(575),n(54)),component=Object(o.a)(r,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{"margin-top":"10px"}},[t("div",{staticClass:"lds-ring"},[t("div"),t("div"),t("div"),t("div")])])}],!1,null,"6f49ae7c",null);e.default=component.exports},575:function(t,e,n){"use strict";n(572)},576:function(t,e,n){var r=n(22)(!1);r.push([t.i,".lds-ring[data-v-6f49ae7c]{display:inline-block;position:relative;width:80px;height:80px}.lds-ring div[data-v-6f49ae7c]{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:5px;border-radius:50%;-webkit-animation:lds-ring-6f49ae7c 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:lds-ring-6f49ae7c 1.2s cubic-bezier(.5,0,.5,1) infinite;border:5px solid transparent;border-top-color:#2196f3}.lds-ring div[data-v-6f49ae7c]:first-child{-webkit-animation-delay:-.45s;animation-delay:-.45s}.lds-ring div[data-v-6f49ae7c]:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.lds-ring div[data-v-6f49ae7c]:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}@-webkit-keyframes lds-ring-6f49ae7c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes lds-ring-6f49ae7c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""]),t.exports=r},578:function(t,e,n){"use strict";n(573)},579:function(t,e,n){var r=n(22)(!1);r.push([t.i,".spinner[data-v-b799d304]{display:flex;justify-content:center;margin-top:1rem;color:#add8e6}",""]),t.exports=r},580:function(t,e,n){"use strict";n.r(e);var r=n(247),o={},c=(n(578),n(54)),component=Object(c.a)(o,(function(){var t=this._self._c;return t("div",{staticClass:"spinner"},[t(r.a,{attrs:{size:"100",indeterminate:""}})],1)}),[],!1,null,"b799d304",null);e.default=component.exports}}]);