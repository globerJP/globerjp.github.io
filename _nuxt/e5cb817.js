(window.webpackJsonp=window.webpackJsonp||[]).push([[86,51,69],{1286:function(t,e,n){"use strict";n.r(e);var r=n(120),o=n(565),d=n(20),c=(n(61),n(1065)),l=n(570),f={components:{Chat:c.default,Spinner:l.default},data:function(){return{isMounted:!1,currentUserId:"",isDevice:!1}},computed:{user:function(){return this.$store.state.authUser}},mounted:function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.isMounted=!0,t.user&&(t.isDevice=window.innerWidth<500,window.addEventListener("resize",(function(e){e.isTrusted&&(t.isDevice=window.innerWidth<500)})),t.currentUserId=t.user.uid);case 2:case"end":return e.stop()}}),e)})))()},methods:{handleJoin:function(){localStorage.setItem("BEFORE_LOGIN_PATH",this.$route.path),this.$router.push({path:"/login"})}}},v=n(65),component=Object(v.a)(f,(function(){var t=this,e=t._self._c;return e("div",[t.isMounted?t._e():e("Spinner",{attrs:{color:"blue"}}),t._v(" "),e("client-only",[t.user?e(o.a,[e("Chat",{attrs:{isDevice:t.isDevice,currentUserId:t.currentUserId}})],1):e(o.a,[e("h1",[t._v("\n        You must be logged in to view this page.\n      ")]),t._v(" "),e(r.a,{staticClass:"pa-0",staticStyle:{"text-transform":"unset !important","font-size":"16px !important"},attrs:{color:"#2196F3",text:""},on:{click:function(e){return t.handleJoin()}}},[t._v("Click here to Join")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Spinner:n(576).default,Chat:n(1065).default})},568:function(t,e,n){var content=n(572);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("6333d4fe",content,!0,{sourceMap:!1})},569:function(t,e,n){var content=n(575);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("1a30734a",content,!0,{sourceMap:!1})},570:function(t,e,n){"use strict";n.r(e);var r={name:"LoadingSpinner"},o=(n(571),n(65)),component=Object(o.a)(r,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{"margin-top":"10px"}},[t("div",{staticClass:"lds-ring"},[t("div"),t("div"),t("div"),t("div")])])}],!1,null,"6f49ae7c",null);e.default=component.exports},571:function(t,e,n){"use strict";n(568)},572:function(t,e,n){var r=n(24)(!1);r.push([t.i,".lds-ring[data-v-6f49ae7c]{display:inline-block;position:relative;width:80px;height:80px}.lds-ring div[data-v-6f49ae7c]{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:5px;border-radius:50%;-webkit-animation:lds-ring-6f49ae7c 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:lds-ring-6f49ae7c 1.2s cubic-bezier(.5,0,.5,1) infinite;border:5px solid transparent;border-top-color:#2196f3}.lds-ring div[data-v-6f49ae7c]:first-child{-webkit-animation-delay:-.45s;animation-delay:-.45s}.lds-ring div[data-v-6f49ae7c]:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.lds-ring div[data-v-6f49ae7c]:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}@-webkit-keyframes lds-ring-6f49ae7c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes lds-ring-6f49ae7c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""]),t.exports=r},574:function(t,e,n){"use strict";n(569)},575:function(t,e,n){var r=n(24)(!1);r.push([t.i,".spinner[data-v-b799d304]{display:flex;justify-content:center;margin-top:1rem;color:#add8e6}",""]),t.exports=r},576:function(t,e,n){"use strict";n.r(e);var r=n(247),o={},d=(n(574),n(65)),component=Object(d.a)(o,(function(){var t=this._self._c;return t("div",{staticClass:"spinner"},[t(r.a,{attrs:{size:"100",indeterminate:""}})],1)}),[],!1,null,"b799d304",null);e.default=component.exports}}]);