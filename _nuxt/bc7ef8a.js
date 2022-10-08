(window.webpackJsonp=window.webpackJsonp||[]).push([[81,45,64],{1282:function(t,e,r){"use strict";r.r(e);var n=r(615),o=r(120),l=r(377),c=r(556),d=r(625),v=r(376),f=r(631),m=r(172),h=r(20),_=(r(61),r(70),r(44),r(34),r(17),r(382),r(54),r(614)),x={middleware:"auth",components:{Spinner:r(561).default},layout:"default",name:"profile",data:function(){return{success:null,error:null,valid:!1,firstName:"",lastName:"",email:"",university:"",country:"",degree:"",major:"",expectedGraduationYear:"",expectedGraduationYears:(t=(new Date).getFullYear(),Array.from({length:12},(function(e,i){return i+t}))),majorRules:[],emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t)||"E-mail must be valid"}],nameRules:[function(t){return!!t||"Name is required"},function(t){return!!t&&t.length<=20||"Name must be less than 20 characters"}],countries:_.countries,degrees:_.degrees,universities:_.universities,majors:_.majors};var t},asyncData:function(t){var e=this;return Object(h.a)(regeneratorRuntime.mark((function r(){var n,o,l,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.store,o=t.$fire,r.next=3,o.firestore.collection("users").doc(n.state.authUser.uid).get();case 3:if(l=r.sent,c={},!l.exists){r.next=9;break}c=l.data(),r.next=18;break;case 9:return r.prev=9,c={email:n.state.authUser.email,country:"",expectedGraduationYear:"",firstName:"",lastName:"",major:"",university:"",degree:""},r.next=13,o.firestore.collection("users").doc(n.state.authUser.uid).set(c);case 13:r.next=18;break;case 15:r.prev=15,r.t0=r.catch(9),e.error="Could not set user information";case 18:if(!c||0!==Object.keys(c).length||Object.getPrototypeOf(c)!==Object.prototype){r.next=20;break}return r.abrupt("return",{email:"",country:"",expectedGraduationYear:"",firstName:"",lastName:"",major:"",university:"",degree:""});case 20:return r.abrupt("return",{email:c.email,country:c.country,expectedGraduationYear:c.expectedGraduationYear,firstName:c.firstName,lastName:c.lastName,major:c.major,university:c.university,degree:c.degree});case 21:case"end":return r.stop()}}),r,null,[[9,15]])})))()},methods:{validateSubmit:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$refs.form.validate()){e.next=11;break}return e.prev=2,data={email:t.email,country:t.country,expectedGraduationYear:t.expectedGraduationYear,firstName:t.firstName,lastName:t.lastName,major:t.major,university:t.university,degree:t.degree},e.next=6,t.$fire.firestore.collection("users").doc(t.user.uid).update(data).then((function(){t.success="Successfully updated!!",setTimeout((function(){t.success=null}),2e3)}));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),t.error="Could not set user information";case 11:t.$refs.form.validate();case 12:case"end":return e.stop()}}),e,null,[[2,8]])})))()},reset:function(){this.$refs.form.reset()},resetValidation:function(){this.$refs.form.resetValidation()}},computed:{user:function(){return this.$store.state.authUser}}},y=r(65),component=Object(y.a)(x,(function(){var t=this,e=t._self._c;return e("div",[t.user?e(c.a,[e(n.a,{staticStyle:{position:"fixed",left:"50%","z-index":"100",bottom:"50px",transform:"translate(-50%, -50%)",margin:"0 auto"},attrs:{type:"success",value:!!t.success}},[t._v(t._s(t.success))]),t._v(" "),e(d.a,{ref:"form",staticClass:"pt-30",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e(c.a,{staticStyle:{"max-width":"800px"}},[e(v.a,[e(l.a,{attrs:{cols:"12",md:"6",sm:"12"}},[e(m.a,{attrs:{rules:t.nameRules,label:"First Name",required:""},model:{value:t.firstName,callback:function(e){t.firstName=e},expression:"firstName"}})],1),t._v(" "),e(l.a,{attrs:{cols:"12",md:"6",sm:"12"}},[e(m.a,{attrs:{rules:t.nameRules,label:"Last Name",required:""},model:{value:t.lastName,callback:function(e){t.lastName=e},expression:"lastName"}})],1),t._v(" "),e(l.a,{attrs:{cols:"12",md:"6",sm:"12"}},[e(m.a,{attrs:{disabled:"",label:"E-mail",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),e(l.a,{attrs:{cols:"12",md:"6",sm:"12"}},[e(f.a,{attrs:{items:t.countries,label:"Country"},model:{value:t.country,callback:function(e){t.country=e},expression:"country"}})],1),t._v(" "),e(l.a,{attrs:{cols:"12",md:"6",sm:"12"}},[e(m.a,{attrs:{label:"University"},model:{value:t.university,callback:function(e){t.university=e},expression:"university"}})],1),t._v(" "),e(l.a,{attrs:{cols:"12",md:"6",sm:"12"}},[e(f.a,{attrs:{items:t.degrees,label:"Pursuing Degree"},model:{value:t.degree,callback:function(e){t.degree=e},expression:"degree"}})],1),t._v(" "),e(l.a,{attrs:{cols:"12",md:"6",sm:"12"}},[e(f.a,{attrs:{items:t.expectedGraduationYears,label:"Expected Year of Graduation"},model:{value:t.expectedGraduationYear,callback:function(e){t.expectedGraduationYear=e},expression:"expectedGraduationYear"}})],1),t._v(" "),e(l.a,{attrs:{cols:"12",md:"6",sm:"12"}},[e(f.a,{attrs:{items:t.majors,label:"Major"},model:{value:t.major,callback:function(e){t.major=e},expression:"major"}})],1),t._v(" "),e(l.a,{attrs:{cols:"12",md:"6",sm:"6"}},[e(o.a,{staticClass:"mr-4",attrs:{disabled:!t.valid,color:"blue accent--text"},on:{click:t.validateSubmit}},[t._v("\n                Save\n              ")])],1),t._v(" "),e(l.a,{staticClass:"d-flex justify-md-end justify-sm-end",attrs:{cols:"12",md:"6",sm:"6"}},[e(o.a,{attrs:{color:"white primary--text","nuxt-link":"",to:"/dashboard"}},[t._v("\n                Go back\n              ")])],1)],1)],1)],1)],1):e("Spinner",{attrs:{color:"white"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Spinner:r(567).default})},559:function(t,e,r){var content=r(563);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("6333d4fe",content,!0,{sourceMap:!1})},560:function(t,e,r){var content=r(566);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("1a30734a",content,!0,{sourceMap:!1})},561:function(t,e,r){"use strict";r.r(e);var n={name:"LoadingSpinner"},o=(r(562),r(65)),component=Object(o.a)(n,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{"margin-top":"10px"}},[t("div",{staticClass:"lds-ring"},[t("div"),t("div"),t("div"),t("div")])])}],!1,null,"6f49ae7c",null);e.default=component.exports},562:function(t,e,r){"use strict";r(559)},563:function(t,e,r){var n=r(25)(!1);n.push([t.i,".lds-ring[data-v-6f49ae7c]{display:inline-block;position:relative;width:80px;height:80px}.lds-ring div[data-v-6f49ae7c]{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:5px;border-radius:50%;-webkit-animation:lds-ring-6f49ae7c 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:lds-ring-6f49ae7c 1.2s cubic-bezier(.5,0,.5,1) infinite;border:5px solid transparent;border-top-color:#2196f3}.lds-ring div[data-v-6f49ae7c]:first-child{-webkit-animation-delay:-.45s;animation-delay:-.45s}.lds-ring div[data-v-6f49ae7c]:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.lds-ring div[data-v-6f49ae7c]:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}@-webkit-keyframes lds-ring-6f49ae7c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes lds-ring-6f49ae7c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""]),t.exports=n},565:function(t,e,r){"use strict";r(560)},566:function(t,e,r){var n=r(25)(!1);n.push([t.i,".spinner[data-v-b799d304]{display:flex;justify-content:center;margin-top:1rem;color:#add8e6}",""]),t.exports=n},567:function(t,e,r){"use strict";r.r(e);var n=r(247),o={},l=(r(565),r(65)),component=Object(l.a)(o,(function(){var t=this._self._c;return t("div",{staticClass:"spinner"},[t(n.a,{attrs:{size:"100",indeterminate:""}})],1)}),[],!1,null,"b799d304",null);e.default=component.exports},575:function(t,e,r){var content=r(576);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("5db1c400",content,!0,{sourceMap:!1})},576:function(t,e,r){var n=r(25)(!1);n.push([t.i,'.theme--light.v-alert .v-alert--prominent .v-alert__icon:after{background:rgba(0,0,0,.12)}.theme--dark.v-alert .v-alert--prominent .v-alert__icon:after{background:hsla(0,0%,100%,.12)}.v-sheet.v-alert{border-radius:4px}.v-sheet.v-alert:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-alert.v-sheet--shaped{border-radius:24px 4px}.v-alert{display:block;font-size:16px;margin-bottom:16px;padding:16px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-alert:not(.v-sheet--tile){border-radius:4px}.v-application--is-ltr .v-alert>.v-alert__content,.v-application--is-ltr .v-alert>.v-icon{margin-right:16px}.v-application--is-rtl .v-alert>.v-alert__content,.v-application--is-rtl .v-alert>.v-icon{margin-left:16px}.v-application--is-ltr .v-alert>.v-icon+.v-alert__content{margin-right:0}.v-application--is-rtl .v-alert>.v-icon+.v-alert__content{margin-left:0}.v-application--is-ltr .v-alert>.v-alert__content+.v-icon{margin-right:0}.v-application--is-rtl .v-alert>.v-alert__content+.v-icon{margin-left:0}.v-alert__border{border-style:solid;border-width:4px;content:"";position:absolute}.v-alert__border:not(.v-alert__border--has-color){opacity:.26}.v-alert__border--left,.v-alert__border--right{bottom:0;top:0}.v-alert__border--bottom,.v-alert__border--top{left:0;right:0}.v-alert__border--bottom{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;bottom:0}.v-application--is-ltr .v-alert__border--left{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-application--is-ltr .v-alert__border--right,.v-application--is-rtl .v-alert__border--left{border-top-right-radius:inherit;border-bottom-right-radius:inherit;right:0}.v-application--is-rtl .v-alert__border--right{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-alert__border--top{border-top-left-radius:inherit;border-top-right-radius:inherit;top:0}.v-alert__content{flex:1 1 auto}.v-application--is-ltr .v-alert__dismissible{margin:-16px -8px -16px 8px}.v-application--is-rtl .v-alert__dismissible{margin:-16px 8px -16px -8px}.v-alert__icon{align-self:flex-start;border-radius:50%;height:24px;min-width:24px;position:relative}.v-application--is-ltr .v-alert__icon{margin-right:16px}.v-application--is-rtl .v-alert__icon{margin-left:16px}.v-alert__icon.v-icon{font-size:24px}.v-alert__wrapper{align-items:center;border-radius:inherit;display:flex}.v-application--is-ltr .v-alert--border.v-alert--prominent .v-alert__icon{margin-left:8px}.v-application--is-rtl .v-alert--border.v-alert--prominent .v-alert__icon{margin-right:8px}.v-alert--dense{padding-top:8px;padding-bottom:8px}.v-alert--dense .v-alert__border{border-width:medium}.v-alert--outlined{background:transparent!important;border:thin solid!important}.v-alert--outlined .v-alert__icon{color:inherit!important}.v-alert--prominent .v-alert__icon{align-self:center;height:48px;min-width:48px}.v-alert--prominent .v-alert__icon.v-icon{font-size:32px}.v-alert--prominent .v-alert__icon.v-icon:after{background:currentColor!important;border-radius:50%;bottom:0;content:"";left:0;opacity:.16;position:absolute;right:0;top:0}.v-alert--prominent.v-alert--dense .v-alert__icon.v-icon:after{transform:scale(1)}.v-alert--text{background:transparent!important}.v-alert--text:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;position:absolute;pointer-events:none;right:0;top:0}',""]),t.exports=n},615:function(t,e,r){"use strict";r(17),r(15),r(16),r(8),r(22),r(14),r(23);var n=r(2),o=(r(40),r(575),r(124)),l=r(122),c=r(82),d=r(100),v=r(27),f=r(1).default.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),m=r(9),h=r(12);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(m.a)(o.a,d.a,f).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"==typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var data={staticClass:"v-alert__border",class:Object(n.a)({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&((data=this.setBackgroundColor(this.computedColor,data)).class["v-alert__border--has-color"]=!0),this.$createElement("div",data)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(l.a,{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(c.a,{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(c.a,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=x(x({},o.a.options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"==typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||v.a.options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(h.a)("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible];return this.$createElement("div",{staticClass:"v-alert__wrapper"},t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var data={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};this.coloredBorder||(data=(this.hasText?this.setTextColor:this.setBackgroundColor)(this.computedColor,data));return this.$createElement("div",data,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},625:function(t,e,r){"use strict";var n=r(2),o=(r(40),r(63),r(270),r(16),r(8),r(14),r(54),r(112),r(17),r(15),r(22),r(23),r(9)),l=r(126),c=r(171);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:v({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})}}]);