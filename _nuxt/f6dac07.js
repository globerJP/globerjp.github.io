(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{382:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return d})),r.d(e,"c",(function(){return v}));var n=r(383),o=r(2),c=Object(o.e)("v-card__actions"),l=Object(o.e)("v-card__subtitle"),d=Object(o.e)("v-card__text"),v=Object(o.e)("v-card__title");n.a},383:function(t,e,r){"use strict";r(15),r(16),r(18),r(6),r(31),r(17),r(32);var n=r(4),o=(r(44),r(258),r(259),r(388),r(183)),c=r(393),l=r(151),d=r(33);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return h(h({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=h({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},388:function(t,e,r){var content=r(389);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("e23b7040",content,!0,{sourceMap:!1})},389:function(t,e,r){var n=r(23)(!1);n.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=n},487:function(t,e,r){"use strict";r.r(e);var n=r(9),o=(r(51),r(28),r(68),r(80),{layout:"loginLayout",data:function(){return{email:"",password:"",token:null,user_id:null,error:null,success:null}},mounted:function(){this.$store.getters.isLoggedIn&&this.$router.push({path:"/profile"})},methods:{userLogin:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$fire.auth.signInWithEmailAndPassword(t.email,t.password).then(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.user.emailVerified){e.next=5;break}return e.next=3,t.$fire.auth.currentUser.sendEmailVerification().then((function(){t.error="Email is not verified. Verification email resent. Please verify your email to login."})).catch((function(e){var r=e.message.split(/[(:]+/);"Firebase"===r[0]&&(t.success=null,r.shift(),r.pop(),t.error=r.join("("))}));case 3:return e.next=5,t.$fire.auth.signOut();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:e.next=11;break;case 5:return e.prev=5,e.t0=e.catch(0),e.next=9,t.$fire.auth.signOut();case 9:"Firebase"===(r=e.t0.message.split(/[(:]+/))[0]&&(t.success=null,r.shift(),r.pop(),t.error=r.join("("));case 11:case"end":return e.stop()}}),e,null,[[0,5]])})))()}}}),c=o,l=r(50),d=r(55),v=r.n(d),h=r(497),f=r(370),_=r(383),x=r(382),m=r(481),w=r(380),y=r(482),k=r(371),O=r(483),j=r(378),C=r(477),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"fill-height"},[r("v-row",[r("v-col",[r("v-card",{staticClass:"mx-auto",attrs:{else:"","max-width":"450",outlined:""}},[r("v-alert",{attrs:{type:"error",value:!!t.error}},[t._v(t._s(t.error))]),t._v(" "),r("v-alert",{attrs:{type:"success",value:!!t.success}},[t._v(t._s(t.success))]),t._v(" "),r("v-container",[r("v-row",{staticClass:"d-flex justify-start"},[r("v-col",[r("nuxt-link",{attrs:{to:"/"}},[r("v-icon",[t._v("mdi-arrow-left-circle")])],1)],1)],1)],1),t._v(" "),r("v-card-title",{staticClass:"justify-center pt-0 pb-6 font-weight-bold"},[t._v("\n          Log In\n        ")]),t._v(" "),r("v-form",{on:{submit:function(e){return e.preventDefault(),t.userLogin.apply(null,arguments)}}},[r("v-card-text",[r("v-text-field",{attrs:{label:"Email Address",outlined:"","prepend-icon":"mdi-email-outline"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),r("v-text-field",{attrs:{label:"Password",type:"password",outlined:"","prepend-icon":"mdi-lock"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"primary",type:"submit"}},[t._v("User Login")])],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6"}},[r("v-card-text",{staticClass:"d-flex justify-start align-left"},[r("v-row",[r("v-col",{staticClass:"text-left"},[t._v("\n                New User? Sign up "),r("nuxt-link",{staticClass:"primary--text",attrs:{to:"/signup"}},[t._v("\n                  here\n                ")])],1)],1)],1)],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"6"}},[r("v-card-text",{staticClass:"d-flex justify-start align-left"},[r("v-row",[r("v-col",{staticClass:"text-right"},[t._v("\n                Forgot Password? "),r("nuxt-link",{staticClass:"primary--text",attrs:{to:"/password-reset"}},[t._v("\n                  here\n                ")])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VAlert:h.a,VBtn:f.a,VCard:_.a,VCardActions:x.a,VCardText:x.b,VCardTitle:x.c,VCol:m.a,VContainer:w.a,VForm:y.a,VIcon:k.a,VRow:O.a,VSpacer:j.a,VTextField:C.a})}}]);