(window.webpackJsonp=window.webpackJsonp||[]).push([[89,37,48],{1061:function(t,e,r){"use strict";r.r(e);var n=r(578),o=r(120),l=r(111),c=r(92),d=r(370),h=r(369),v=r(548),f=r(662),m=r(617),x=r(121),_=r(368),y=r(262),w=r(172),O=r(21),C=(r(61),r(34),r(77),r(93),r(8),r(89),{layout:"loginLayout",components:{Spinner:r(551).default},data:function(){return{isLoading:!0,passwordValue:!0,email:"",password:"",persist:!1,token:null,user_id:null,error:null,success:null}},mounted:function(){var t=this;this.$store.getters.isLoggedIn&&this.$router.push({path:"/dashboard"}),this.$fire.auth.getRedirectResult().then((function(e){e.user||t.$fire.auth.currentUser||(t.isLoading=!1)}))},methods:{userLogin:function(){var t=this;return Object(O.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,r="session",t.persist&&(r="local"),e.prev=3,e.next=6,t.$fire.auth.setPersistence(r).then(Object(O.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$fire.auth.signInWithEmailAndPassword(t.email,t.password).then(function(){var e=Object(O.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.user.emailVerified){e.next=5;break}return e.next=3,t.$fire.auth.currentUser.sendEmailVerification().then((function(){t.error="Email is not verified. Verification email resent. Please verify your email to login."})).catch((function(e){t.isLoading=!1;var r=e.message.split(/[(:]+/);"Firebase"===r[0]&&(t.success=null,r.shift(),r.pop(),t.error=r.join("("))}));case 3:return e.next=5,t.$fire.auth.signOut();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)}))));case 6:e.next=15;break;case 8:return e.prev=8,e.t0=e.catch(3),t.isLoading=!1,e.next=13,t.$fire.auth.signOut();case 13:"Firebase"===(n=e.t0.message.split(/[(:]+/))[0]&&(t.success=null,n.shift(),n.pop(),t.error=n.join("("));case 15:case"end":return e.stop()}}),e,null,[[3,8]])})))()},googleLogin:function(){var t=this;return Object(O.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,r="session",n=new t.$fireModule.default.auth.GoogleAuthProvider,t.persist&&(r="local"),e.prev=4,e.next=7,t.$fire.auth.setPersistence(r).then(Object(O.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$fire.auth.signInWithRedirect(n).then(function(){var e=Object(O.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nuxt.$router.push("/dashboard");case 2:r.user.getIdToken(!0).then((function(t){localStorage.setItem("access_token",t.toString()),localStorage.setItem("refresh_token",r.user.refreshToken.toString())}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)}))));case 7:e.next=16;break;case 9:return e.prev=9,e.t0=e.catch(4),t.isLoading=!1,e.next=14,t.$fire.auth.signOut();case 14:"Firebase"===(o=e.t0.message.split(/[(:]+/))[0]&&(t.success=null,o.shift(),o.pop(),t.error=o.join("("));case 16:case"end":return e.stop()}}),e,null,[[4,9]])})))()}}}),j=C,k=(r(936),r(65)),component=Object(k.a)(j,(function(){var t=this,e=t._self._c;return e(v.a,{staticClass:"fill-height d-flex flex-column justify-center align-center"},[t.isLoading?e("Spinner"):e(_.a,{staticClass:"d-flex justify-center align-center"},[e(h.a,[e(l.a,{staticClass:"mx-auto",staticStyle:{"max-width":"100%",width:"450px"},attrs:{else:"",outlined:""}},[e(n.a,{attrs:{type:"error",value:!!t.error}},[t._v(t._s(t.error))]),t._v(" "),e(n.a,{attrs:{type:"success",value:!!t.success}},[t._v(t._s(t.success))]),t._v(" "),e("div",[e(_.a,{staticClass:"d-flex justify-start"},[e(h.a,[e("nuxt-link",{attrs:{to:"/"}},[e(x.a,{staticClass:"primary--text pt-3 pl-3",staticStyle:{"font-size":"24px"}},[t._v("mdi-arrow-left-circle")])],1)],1)],1)],1),t._v(" "),e(c.d,{staticClass:"justify-center pt-0 pb-4 font-weight-bold"},[t._v("\n          Log In\n        ")]),t._v(" "),e(m.a,{on:{submit:function(e){return e.preventDefault(),t.userLogin.apply(null,arguments)}}},[e(c.c,[e(w.a,{attrs:{label:"Email Address",outlined:"","prepend-icon":"mdi-email-outline"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),e(w.a,{attrs:{label:"Password",outlined:"","append-icon":t.passwordValue?"mdi-eye-off":"mdi-eye",type:t.passwordValue?"password":"text","prepend-icon":"mdi-lock"},on:{"click:append":function(){return t.passwordValue=!t.passwordValue}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),e(d.a,{staticClass:"pt-0 mt-0",attrs:{label:"Keep me logged in"},model:{value:t.persist,callback:function(e){t.persist=e},expression:"persist"}}),t._v(" "),e(c.a,{staticClass:"pt-0 mt-0"},[e(y.a),t._v(" "),e(o.a,{attrs:{color:"primary",xs:"6",type:"submit"}},[t._v("User Login")])],1),t._v(" "),e(_.a,{staticClass:"pt-4"},[e(h.a,{staticClass:"text-left",attrs:{cols:"6"}},[t._v("\n                New user?  "),e("nuxt-link",{staticClass:"primary--text",attrs:{to:"/signup"}},[t._v("\n                  Signup\n                ")])],1),t._v(" "),e(h.a,{staticClass:"text-right",attrs:{cols:"6"}},[t._v("\n                Forgot password? "),e("nuxt-link",{staticClass:"primary--text",attrs:{to:"/password-reset"}},[t._v("\n                  here\n                ")])],1)],1),t._v(" "),e(_.a,{staticClass:"d-flex justify-center align-center"},[e(h.a,{attrs:{cols:"5.5"}},[e(f.a,{staticClass:"text-center"})],1),t._v(" "),e(h.a,{staticClass:"text-center pa-0",attrs:{cols:"1"}},[e("span",[t._v("OR")])]),t._v(" "),e(h.a,{attrs:{cols:"5.5"}},[e(f.a,{staticClass:"text-center"})],1)],1),t._v(" "),e(_.a,{staticClass:"mt-1"},[e(h.a,{attrs:{cols:"12"}},[e(o.a,{staticClass:"login-btn pa-2",staticStyle:{width:"100%"},attrs:{large:""},on:{click:t.googleLogin}},[e("svg",{attrs:{viewBox:"0 0 24 24",width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{attrs:{transform:"matrix(1, 0, 0, 1, 27.009001, -39.238998)"}},[e("path",{attrs:{fill:"#4285F4",d:"M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"}}),t._v(" "),e("path",{attrs:{fill:"#34A853",d:"M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"}}),t._v(" "),e("path",{attrs:{fill:"#FBBC05",d:"M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"}}),t._v(" "),e("path",{attrs:{fill:"#EA4335",d:"M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"}})])]),t._v("\n                  Login with Google\n                ")])],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,"50a8bd45",null);e.default=component.exports;installComponents(component,{Spinner:r(557).default})},549:function(t,e,r){var content=r(553);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("6333d4fe",content,!0,{sourceMap:!1})},550:function(t,e,r){var content=r(555);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("1a30734a",content,!0,{sourceMap:!1})},551:function(t,e,r){"use strict";r.r(e);var n={name:"LoadingSpinner"},o=(r(552),r(65)),component=Object(o.a)(n,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{"margin-top":"10px"}},[t("div",{staticClass:"lds-ring"},[t("div"),t("div"),t("div"),t("div")])])}],!1,null,"6f49ae7c",null);e.default=component.exports},552:function(t,e,r){"use strict";r(549)},553:function(t,e,r){var n=r(25)(!1);n.push([t.i,".lds-ring[data-v-6f49ae7c]{display:inline-block;position:relative;width:80px;height:80px}.lds-ring div[data-v-6f49ae7c]{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:5px;border-radius:50%;-webkit-animation:lds-ring-6f49ae7c 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:lds-ring-6f49ae7c 1.2s cubic-bezier(.5,0,.5,1) infinite;border:5px solid transparent;border-top-color:#2196f3}.lds-ring div[data-v-6f49ae7c]:first-child{-webkit-animation-delay:-.45s;animation-delay:-.45s}.lds-ring div[data-v-6f49ae7c]:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.lds-ring div[data-v-6f49ae7c]:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}@-webkit-keyframes lds-ring-6f49ae7c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes lds-ring-6f49ae7c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""]),t.exports=n},554:function(t,e,r){"use strict";r(550)},555:function(t,e,r){var n=r(25)(!1);n.push([t.i,".spinner[data-v-b799d304]{display:flex;justify-content:center;margin-top:1rem;color:#add8e6}",""]),t.exports=n},557:function(t,e,r){"use strict";r.r(e);var n=r(246),o={},l=(r(554),r(65)),component=Object(l.a)(o,(function(){var t=this._self._c;return t("div",{staticClass:"spinner"},[t(n.a,{attrs:{size:"100",indeterminate:""}})],1)}),[],!1,null,"b799d304",null);e.default=component.exports},564:function(t,e,r){var content=r(565);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("5db1c400",content,!0,{sourceMap:!1})},565:function(t,e,r){var n=r(25)(!1);n.push([t.i,'.disable-tap-zoom,body{touch-action:manipulation}.xxx-enter-active{transition:opacity .3s ease-in-out}.xxx-leave-active{transition:none}.xxx-enter,.xxx-leave,.xxx-leave-to{opacity:0}.xxx-enter-to{opacity:1}.theme--light.v-alert .v-alert--prominent .v-alert__icon:after{background:rgba(0,0,0,.12)}.theme--dark.v-alert .v-alert--prominent .v-alert__icon:after{background:hsla(0,0%,100%,.12)}.v-sheet.v-alert{border-radius:4px}.v-sheet.v-alert:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-alert.v-sheet--shaped{border-radius:24px 4px}.v-alert{display:block;font-size:16px;margin-bottom:16px;padding:16px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-alert:not(.v-sheet--tile){border-radius:4px}.v-application--is-ltr .v-alert>.v-alert__content,.v-application--is-ltr .v-alert>.v-icon{margin-right:16px}.v-application--is-rtl .v-alert>.v-alert__content,.v-application--is-rtl .v-alert>.v-icon{margin-left:16px}.v-application--is-ltr .v-alert>.v-icon+.v-alert__content{margin-right:0}.v-application--is-rtl .v-alert>.v-icon+.v-alert__content{margin-left:0}.v-application--is-ltr .v-alert>.v-alert__content+.v-icon{margin-right:0}.v-application--is-rtl .v-alert>.v-alert__content+.v-icon{margin-left:0}.v-alert__border{border-style:solid;border-width:4px;content:"";position:absolute}.v-alert__border:not(.v-alert__border--has-color){opacity:.26}.v-alert__border--left,.v-alert__border--right{bottom:0;top:0}.v-alert__border--bottom,.v-alert__border--top{left:0;right:0}.v-alert__border--bottom{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;bottom:0}.v-application--is-ltr .v-alert__border--left{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-application--is-ltr .v-alert__border--right,.v-application--is-rtl .v-alert__border--left{border-top-right-radius:inherit;border-bottom-right-radius:inherit;right:0}.v-application--is-rtl .v-alert__border--right{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-alert__border--top{border-top-left-radius:inherit;border-top-right-radius:inherit;top:0}.v-alert__content{flex:1 1 auto}.v-application--is-ltr .v-alert__dismissible{margin:-16px -8px -16px 8px}.v-application--is-rtl .v-alert__dismissible{margin:-16px 8px -16px -8px}.v-alert__icon{align-self:flex-start;border-radius:50%;height:24px;min-width:24px;position:relative}.v-application--is-ltr .v-alert__icon{margin-right:16px}.v-application--is-rtl .v-alert__icon{margin-left:16px}.v-alert__icon.v-icon{font-size:24px}.v-alert__wrapper{align-items:center;border-radius:inherit;display:flex}.v-application--is-ltr .v-alert--border.v-alert--prominent .v-alert__icon{margin-left:8px}.v-application--is-rtl .v-alert--border.v-alert--prominent .v-alert__icon{margin-right:8px}.v-alert--dense{padding-top:8px;padding-bottom:8px}.v-alert--dense .v-alert__border{border-width:medium}.v-alert--outlined{background:transparent!important;border:thin solid!important}.v-alert--outlined .v-alert__icon{color:inherit!important}.v-alert--prominent .v-alert__icon{align-self:center;height:48px;min-width:48px}.v-alert--prominent .v-alert__icon.v-icon{font-size:32px}.v-alert--prominent .v-alert__icon.v-icon:after{background:currentColor!important;border-radius:50%;bottom:0;content:"";left:0;opacity:.16;position:absolute;right:0;top:0}.v-alert--prominent.v-alert--dense .v-alert__icon.v-icon:after{transform:scale(1)}.v-alert--text{background:transparent!important}.v-alert--text:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;position:absolute;pointer-events:none;right:0;top:0}',""]),t.exports=n},578:function(t,e,r){"use strict";r(17),r(15),r(16),r(8),r(22),r(14),r(23);var n=r(2),o=(r(40),r(564),r(123)),l=r(122),c=r(82),d=r(100),h=r(27),v=r(1).default.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),f=r(9),m=r(12);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(f.a)(o.a,d.a,v).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"==typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var data={staticClass:"v-alert__border",class:Object(n.a)({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&((data=this.setBackgroundColor(this.computedColor,data)).class["v-alert__border--has-color"]=!0),this.$createElement("div",data)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(l.a,{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(c.a,{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(c.a,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=_(_({},o.a.options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"==typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||h.a.options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(m.a)("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible];return this.$createElement("div",{staticClass:"v-alert__wrapper"},t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var data={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};this.coloredBorder||(data=(this.hasText?this.setTextColor:this.setBackgroundColor)(this.computedColor,data));return this.$createElement("div",data,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},594:function(t,e,r){var content=r(595);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("7132a15d",content,!0,{sourceMap:!1})},595:function(t,e,r){var n=r(25)(!1);n.push([t.i,".disable-tap-zoom,body{touch-action:manipulation}.xxx-enter-active{transition:opacity .3s ease-in-out}.xxx-leave-active{transition:none}.xxx-enter,.xxx-leave,.xxx-leave-to{opacity:0}.xxx-enter-to{opacity:1}.theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),t.exports=n},617:function(t,e,r){"use strict";var n=r(2),o=(r(40),r(62),r(268),r(16),r(8),r(14),r(55),r(112),r(17),r(15),r(22),r(23),r(9)),l=r(129),c=r(171);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:h({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},662:function(t,e,r){"use strict";r(17),r(15),r(16),r(8),r(22),r(14),r(23);var n=r(2),o=(r(594),r(27));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:c({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:c({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},828:function(t,e,r){var content=r(937);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("6a5822c7",content,!0,{sourceMap:!1})},936:function(t,e,r){"use strict";r(828)},937:function(t,e,r){var n=r(25)(!1);n.push([t.i,"a[data-v-50a8bd45]{text-decoration:none}",""]),t.exports=n}}]);