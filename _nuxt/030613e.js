(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{384:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return c})),r.d(e,"c",(function(){return d})),r.d(e,"d",(function(){return v}));var o=r(390),n=r(4),l=Object(n.j)("v-card__actions"),c=Object(n.j)("v-card__subtitle"),d=Object(n.j)("v-card__text"),v=Object(n.j)("v-card__title");o.a},392:function(t,e,r){var content=r(393);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(25).default)("5db1c400",content,!0,{sourceMap:!1})},393:function(t,e,r){var o=r(24)(!1);o.push([t.i,'.theme--light.v-alert .v-alert--prominent .v-alert__icon:after{background:rgba(0,0,0,.12)}.theme--dark.v-alert .v-alert--prominent .v-alert__icon:after{background:hsla(0,0%,100%,.12)}.v-sheet.v-alert{border-radius:4px}.v-sheet.v-alert:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-alert.v-sheet--shaped{border-radius:24px 4px}.v-alert{display:block;font-size:16px;margin-bottom:16px;padding:16px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-alert:not(.v-sheet--tile){border-radius:4px}.v-application--is-ltr .v-alert>.v-alert__content,.v-application--is-ltr .v-alert>.v-icon{margin-right:16px}.v-application--is-rtl .v-alert>.v-alert__content,.v-application--is-rtl .v-alert>.v-icon{margin-left:16px}.v-application--is-ltr .v-alert>.v-icon+.v-alert__content{margin-right:0}.v-application--is-rtl .v-alert>.v-icon+.v-alert__content{margin-left:0}.v-application--is-ltr .v-alert>.v-alert__content+.v-icon{margin-right:0}.v-application--is-rtl .v-alert>.v-alert__content+.v-icon{margin-left:0}.v-alert__border{border-style:solid;border-width:4px;content:"";position:absolute}.v-alert__border:not(.v-alert__border--has-color){opacity:.26}.v-alert__border--left,.v-alert__border--right{bottom:0;top:0}.v-alert__border--bottom,.v-alert__border--top{left:0;right:0}.v-alert__border--bottom{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;bottom:0}.v-application--is-ltr .v-alert__border--left{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-application--is-ltr .v-alert__border--right,.v-application--is-rtl .v-alert__border--left{border-top-right-radius:inherit;border-bottom-right-radius:inherit;right:0}.v-application--is-rtl .v-alert__border--right{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-alert__border--top{border-top-left-radius:inherit;border-top-right-radius:inherit;top:0}.v-alert__content{flex:1 1 auto}.v-application--is-ltr .v-alert__dismissible{margin:-16px -8px -16px 8px}.v-application--is-rtl .v-alert__dismissible{margin:-16px 8px -16px -8px}.v-alert__icon{align-self:flex-start;border-radius:50%;height:24px;min-width:24px;position:relative}.v-application--is-ltr .v-alert__icon{margin-right:16px}.v-application--is-rtl .v-alert__icon{margin-left:16px}.v-alert__icon.v-icon{font-size:24px}.v-alert__wrapper{align-items:center;border-radius:inherit;display:flex}.v-application--is-ltr .v-alert--border.v-alert--prominent .v-alert__icon{margin-left:8px}.v-application--is-rtl .v-alert--border.v-alert--prominent .v-alert__icon{margin-right:8px}.v-alert--dense{padding-top:8px;padding-bottom:8px}.v-alert--dense .v-alert__border{border-width:medium}.v-alert--outlined{background:transparent!important;border:thin solid!important}.v-alert--outlined .v-alert__icon{color:inherit!important}.v-alert--prominent .v-alert__icon{align-self:center;height:48px;min-width:48px}.v-alert--prominent .v-alert__icon.v-icon{font-size:32px}.v-alert--prominent .v-alert__icon.v-icon:after{background:currentColor!important;border-radius:50%;bottom:0;content:"";left:0;opacity:.16;position:absolute;right:0;top:0}.v-alert--prominent.v-alert--dense .v-alert__icon.v-icon:after{transform:scale(1)}.v-alert--text{background:transparent!important}.v-alert--text:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;position:absolute;pointer-events:none;right:0;top:0}',""]),t.exports=o},426:function(t,e,r){"use strict";r(16),r(15),r(19),r(7),r(30),r(18),r(31);var o=r(1),n=(r(57),r(392),r(187)),l=r(182),c=r(257),d=r(120),v=r(50),h=r(0).a.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),_=r(34),f=r(11);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(_.a)(n.a,d.a,h).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"==typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var data={staticClass:"v-alert__border",class:Object(o.a)({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&((data=this.setBackgroundColor(this.computedColor,data)).class["v-alert__border--has-color"]=!0),this.$createElement("div",data)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(l.a,{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(c.a,{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(c.a,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=x(x({},n.a.options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"==typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||v.a.options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(f.a)("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible];return this.$createElement("div",{staticClass:"v-alert__wrapper"},t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var data={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};this.coloredBorder||(data=(this.hasText?this.setTextColor:this.setBackgroundColor)(this.computedColor,data));return this.$createElement("div",data,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},604:function(t,e,r){"use strict";r.r(e);var o=r(10),n=(r(45),r(26),r(61),r(81),{layout:"loginLayout",data:function(){return{email:"",password:"",token:null,user_id:null,error:null,success:null}},created:function(){this.$store.getters.isLoggedIn&&this.$router.push({path:"/dashboard"})},methods:{userSignup:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$fire.auth.createUserWithEmailAndPassword(t.email,t.password).then(Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$fire.auth.currentUser.sendEmailVerification().then((function(){t.success="Verification email sent!"})).catch((function(e){var r=e.message.split(/[(:]+/);"Firebase"===r[0]&&(t.success=null,r.shift(),r.pop(),t.error=r.join("("))}));case 2:return e.next=4,t.$fire.auth.signOut();case 4:case"end":return e.stop()}}),e)}))));case 3:e.next=11;break;case 5:return e.prev=5,e.t0=e.catch(0),e.next=9,t.$fire.auth.signOut();case 9:"Firebase"===(r=e.t0.message.split(/[(:]+/))[0]&&(t.success=null,r.shift(),r.pop(),t.error=r.join("("));case 11:case"end":return e.stop()}}),e,null,[[0,5]])})))()}}}),l=r(51),c=r(55),d=r.n(c),v=r(426),h=r(372),_=r(390),f=r(384),m=r(591),x=r(382),y=r(593),w=r(373),C=r(592),O=r(380),j=r(425),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"fill-height"},[r("v-row",[r("v-col",[r("v-card",{staticClass:"mx-auto",attrs:{else:"","max-width":"450",outlined:""}},[r("v-alert",{attrs:{type:"error",value:!!t.error}},[t._v(t._s(t.error))]),t._v(" "),r("v-alert",{attrs:{type:"success",value:!!t.success}},[t._v(t._s(t.success))]),t._v(" "),r("v-container",[r("v-row",{staticClass:"d-flex justify-start"},[r("v-col",[r("nuxt-link",{attrs:{to:"/"}},[r("v-icon",{staticClass:"primary--text"},[t._v("mdi-arrow-left-circle")])],1)],1)],1)],1),t._v(" "),r("v-card-title",{staticClass:"justify-center pt-0 pb-6 font-weight-bold"},[t._v("\n          Sign Up\n        ")]),t._v(" "),r("v-form",{on:{submit:function(e){return e.preventDefault(),t.userSignup.apply(null,arguments)}}},[r("v-card-text",[r("v-text-field",{staticClass:"primary--text",attrs:{label:"Email Address",outlined:"","prepend-icon":"mdi-email-outline"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),r("v-text-field",{staticClass:"primary--text",attrs:{label:"Password",type:"password",outlined:"","prepend-icon":"mdi-lock"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"primary",type:"submit"}},[t._v("Signup")])],1),t._v(" "),r("v-card-text",[t._v("\n              Already a user?  "),r("nuxt-link",{staticClass:"primary--text",attrs:{to:"/login"}},[t._v("\n                Login\n              ")])],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VAlert:v.a,VBtn:h.a,VCard:_.a,VCardActions:f.a,VCardText:f.c,VCardTitle:f.d,VCol:m.a,VContainer:x.a,VForm:y.a,VIcon:w.a,VRow:C.a,VSpacer:O.a,VTextField:j.a})}}]);