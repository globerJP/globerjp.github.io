(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{551:function(t,e,r){var content=r(552);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("5db1c400",content,!0,{sourceMap:!1})},552:function(t,e,r){var n=r(25)(!1);n.push([t.i,'.theme--light.v-alert .v-alert--prominent .v-alert__icon:after{background:rgba(0,0,0,.12)}.theme--dark.v-alert .v-alert--prominent .v-alert__icon:after{background:hsla(0,0%,100%,.12)}.v-sheet.v-alert{border-radius:4px}.v-sheet.v-alert:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-alert.v-sheet--shaped{border-radius:24px 4px}.v-alert{display:block;font-size:16px;margin-bottom:16px;padding:16px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-alert:not(.v-sheet--tile){border-radius:4px}.v-application--is-ltr .v-alert>.v-alert__content,.v-application--is-ltr .v-alert>.v-icon{margin-right:16px}.v-application--is-rtl .v-alert>.v-alert__content,.v-application--is-rtl .v-alert>.v-icon{margin-left:16px}.v-application--is-ltr .v-alert>.v-icon+.v-alert__content{margin-right:0}.v-application--is-rtl .v-alert>.v-icon+.v-alert__content{margin-left:0}.v-application--is-ltr .v-alert>.v-alert__content+.v-icon{margin-right:0}.v-application--is-rtl .v-alert>.v-alert__content+.v-icon{margin-left:0}.v-alert__border{border-style:solid;border-width:4px;content:"";position:absolute}.v-alert__border:not(.v-alert__border--has-color){opacity:.26}.v-alert__border--left,.v-alert__border--right{bottom:0;top:0}.v-alert__border--bottom,.v-alert__border--top{left:0;right:0}.v-alert__border--bottom{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;bottom:0}.v-application--is-ltr .v-alert__border--left{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-application--is-ltr .v-alert__border--right,.v-application--is-rtl .v-alert__border--left{border-top-right-radius:inherit;border-bottom-right-radius:inherit;right:0}.v-application--is-rtl .v-alert__border--right{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-alert__border--top{border-top-left-radius:inherit;border-top-right-radius:inherit;top:0}.v-alert__content{flex:1 1 auto}.v-application--is-ltr .v-alert__dismissible{margin:-16px -8px -16px 8px}.v-application--is-rtl .v-alert__dismissible{margin:-16px 8px -16px -8px}.v-alert__icon{align-self:flex-start;border-radius:50%;height:24px;min-width:24px;position:relative}.v-application--is-ltr .v-alert__icon{margin-right:16px}.v-application--is-rtl .v-alert__icon{margin-left:16px}.v-alert__icon.v-icon{font-size:24px}.v-alert__wrapper{align-items:center;border-radius:inherit;display:flex}.v-application--is-ltr .v-alert--border.v-alert--prominent .v-alert__icon{margin-left:8px}.v-application--is-rtl .v-alert--border.v-alert--prominent .v-alert__icon{margin-right:8px}.v-alert--dense{padding-top:8px;padding-bottom:8px}.v-alert--dense .v-alert__border{border-width:medium}.v-alert--outlined{background:transparent!important;border:thin solid!important}.v-alert--outlined .v-alert__icon{color:inherit!important}.v-alert--prominent .v-alert__icon{align-self:center;height:48px;min-width:48px}.v-alert--prominent .v-alert__icon.v-icon{font-size:32px}.v-alert--prominent .v-alert__icon.v-icon:after{background:currentColor!important;border-radius:50%;bottom:0;content:"";left:0;opacity:.16;position:absolute;right:0;top:0}.v-alert--prominent.v-alert--dense .v-alert__icon.v-icon:after{transform:scale(1)}.v-alert--text{background:transparent!important}.v-alert--text:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;position:absolute;pointer-events:none;right:0;top:0}',""]),t.exports=n},573:function(t,e,r){"use strict";r(18),r(15),r(17),r(7),r(22),r(16),r(23);var n=r(1),o=(r(40),r(551),r(123)),l=r(122),c=r(80),d=r(100),h=r(27),v=r(2).a.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),f=r(9),m=r(12);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(f.a)(o.a,d.a,v).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"==typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var data={staticClass:"v-alert__border",class:Object(n.a)({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&((data=this.setBackgroundColor(this.computedColor,data)).class["v-alert__border--has-color"]=!0),this.$createElement("div",data)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(l.a,{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(c.a,{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(c.a,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=x(x({},o.a.options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"==typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||h.a.options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(m.a)("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible];return this.$createElement("div",{staticClass:"v-alert__wrapper"},t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var data={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};this.coloredBorder||(data=(this.hasText?this.setTextColor:this.setBackgroundColor)(this.computedColor,data));return this.$createElement("div",data,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},614:function(t,e,r){"use strict";var n=r(1),o=(r(40),r(62),r(264),r(17),r(7),r(16),r(54),r(112),r(18),r(15),r(22),r(23),r(9)),l=r(127),c=r(171);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:h({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},917:function(t,e,r){"use strict";r.r(e);var n=r(573),o=r(120),l=r(111),c=r(91),d=r(361),h=r(360),v=r(538),f=r(614),m=r(121),_=r(359),x=r(259),y=r(173),w=r(20),O=(r(61),r(34),r(76),r(92),{layout:"loginLayout",data:function(){return{passwordValue:!0,email:"",password:"",persist:!1,token:null,user_id:null,error:null,success:null}},mounted:function(){this.$store.getters.isLoggedIn&&this.$router.push({path:"/dashboard"})},methods:{userLogin:function(){var t=this;return Object(w.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="session",t.persist&&(r="local"),e.prev=2,e.next=5,t.$fire.auth.setPersistence(r).then(Object(w.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$fire.auth.signInWithEmailAndPassword(t.email,t.password).then(function(){var e=Object(w.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.user.emailVerified){e.next=5;break}return e.next=3,t.$fire.auth.currentUser.sendEmailVerification().then((function(){t.error="Email is not verified. Verification email resent. Please verify your email to login."})).catch((function(e){var r=e.message.split(/[(:]+/);"Firebase"===r[0]&&(t.success=null,r.shift(),r.pop(),t.error=r.join("("))}));case 3:return e.next=5,t.$fire.auth.signOut();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)}))));case 5:e.next=13;break;case 7:return e.prev=7,e.t0=e.catch(2),e.next=11,t.$fire.auth.signOut();case 11:"Firebase"===(n=e.t0.message.split(/[(:]+/))[0]&&(t.success=null,n.shift(),n.pop(),t.error=n.join("("));case 13:case"end":return e.stop()}}),e,null,[[2,7]])})))()}}}),j=O,C=r(65),component=Object(C.a)(j,(function(){var t=this,e=t._self._c;return e(v.a,{staticClass:"fill-height"},[e(_.a,[e(h.a,[e(l.a,{staticClass:"mx-auto",attrs:{else:"","max-width":"450",outlined:""}},[e(n.a,{attrs:{type:"error",value:!!t.error}},[t._v(t._s(t.error))]),t._v(" "),e(n.a,{attrs:{type:"success",value:!!t.success}},[t._v(t._s(t.success))]),t._v(" "),e(v.a,[e(_.a,{staticClass:"d-flex justify-start"},[e(h.a,[e("nuxt-link",{attrs:{to:"/"}},[e(m.a,{staticClass:"primary--text"},[t._v("mdi-arrow-left-circle")])],1)],1)],1)],1),t._v(" "),e(c.d,{staticClass:"justify-center pt-0 pb-6 font-weight-bold"},[t._v("\n          Log In\n        ")]),t._v(" "),e(f.a,{on:{submit:function(e){return e.preventDefault(),t.userLogin.apply(null,arguments)}}},[e(c.c,[e(y.a,{attrs:{label:"Email Address",outlined:"","prepend-icon":"mdi-email-outline"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),e(y.a,{attrs:{label:"Password",outlined:"","append-icon":t.passwordValue?"mdi-eye-off":"mdi-eye",type:t.passwordValue?"password":"text","prepend-icon":"mdi-lock"},on:{"click:append":function(){return t.passwordValue=!t.passwordValue}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),e(d.a,{attrs:{label:"Keep me logged in"},model:{value:t.persist,callback:function(e){t.persist=e},expression:"persist"}}),t._v(" "),e(c.a,[e(x.a),t._v(" "),e(o.a,{attrs:{color:"primary",xs:"6",type:"submit"}},[t._v("User Login")])],1),t._v(" "),e(_.a,[e(h.a,{attrs:{cols:"6"}},[e(c.c,{staticClass:"d-flex justify-start align-left"},[e(_.a,[e(h.a,{staticClass:"text-left"},[t._v("\n                New user?  "),e("nuxt-link",{staticClass:"primary--text",attrs:{to:"/signup"}},[t._v("\n                  Signup\n                ")])],1)],1)],1)],1),t._v(" "),e(h.a,{attrs:{cols:"6"}},[e(c.c,{staticClass:"d-flex justify-start align-left"},[e(_.a,[e(h.a,{staticClass:"text-right"},[t._v("\n                Forgot password? "),e("nuxt-link",{staticClass:"primary--text",attrs:{to:"/password-reset"}},[t._v("\n                  here\n                ")])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);