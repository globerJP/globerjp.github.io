(window.webpackJsonp=window.webpackJsonp||[]).push([[18,9],{257:function(t,e,n){"use strict";var r=n(372);e.a=r.a},385:function(t,e,n){var content=n(389);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("c86bcc6a",content,!0,{sourceMap:!1})},386:function(t,e,n){"use strict";n.r(e);var r={},o=(n(388),n(51)),c=n(55),l=n.n(c),v=n(174),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"spinner"},[e("v-progress-circular",{attrs:{size:"100",indeterminate:""}})],1)}),[],!1,null,"b799d304",null);e.default=component.exports;l()(component,{VProgressCircular:v.a})},388:function(t,e,n){"use strict";n(385)},389:function(t,e,n){var r=n(24)(!1);r.push([t.i,".spinner[data-v-b799d304]{display:flex;justify-content:center;margin-top:1rem;color:#add8e6}",""]),t.exports=r},400:function(t,e,n){"use strict";n(16),n(15),n(30),n(18),n(31);var r=n(12),o=n(1),c=(n(7),n(19),n(405),n(34)),l=n(408),v=n(257),h=n(70),d=n(188),f=n(50),m=n(120),x=n(152),_=n(123),k=n(11);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(c.a)(h.a,_.a,x.a,f.a,Object(d.a)("chipGroup"),Object(m.b)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return w(w(w(w({"v-chip":!0},x.a.options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(x.a.options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this;[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]].forEach((function(e){var n=Object(r.a)(e,2),o=n[0],c=n[1];t.$attrs.hasOwnProperty(o)&&Object(k.a)(o,c,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(v.a,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(l.b,t)},genClose:function(){var t=this;return this.$createElement(v.a,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],n=this.generateRouteLink(),r=n.tag,data=n.data;data.attrs=w(w({},data.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:data.attrs.tabindex}),data.directives.push({name:"show",value:this.active}),data=this.setBackgroundColor(this.color,data);var o=this.textColor||this.outlined&&this.color;return t(r,this.setTextColor(o,data),e)}})},405:function(t,e,n){var content=n(406);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("197fcea4",content,!0,{sourceMap:!1})},406:function(t,e,n){var r=n(24)(!1);r.push([t.i,'.v-chip:not(.v-chip--outlined).accent,.v-chip:not(.v-chip--outlined).error,.v-chip:not(.v-chip--outlined).info,.v-chip:not(.v-chip--outlined).primary,.v-chip:not(.v-chip--outlined).secondary,.v-chip:not(.v-chip--outlined).success,.v-chip:not(.v-chip--outlined).warning{color:#fff}.theme--light.v-chip{border-color:rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--light.v-chip:not(.v-chip--active){background:#e0e0e0}.theme--light.v-chip:hover:before{opacity:.04}.theme--light.v-chip--active:before,.theme--light.v-chip--active:hover:before,.theme--light.v-chip:focus:before{opacity:.12}.theme--light.v-chip--active:focus:before{opacity:.16}.theme--dark.v-chip{border-color:hsla(0,0%,100%,.12);color:#fff}.theme--dark.v-chip:not(.v-chip--active){background:#555}.theme--dark.v-chip:hover:before{opacity:.08}.theme--dark.v-chip--active:before,.theme--dark.v-chip--active:hover:before,.theme--dark.v-chip:focus:before{opacity:.24}.theme--dark.v-chip--active:focus:before{opacity:.32}.v-chip{align-items:center;cursor:default;display:inline-flex;line-height:20px;max-width:100%;outline:none;overflow:hidden;padding:0 12px;position:relative;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);vertical-align:middle;white-space:nowrap}.v-chip:before{background-color:currentColor;bottom:0;border-radius:inherit;content:"";left:0;opacity:0;position:absolute;pointer-events:none;right:0;top:0}.v-chip .v-avatar{height:24px!important;min-width:24px!important;width:24px!important}.v-chip .v-icon{font-size:24px}.v-application--is-ltr .v-chip .v-avatar--left,.v-application--is-ltr .v-chip .v-icon--left{margin-left:-6px;margin-right:6px}.v-application--is-ltr .v-chip .v-avatar--right,.v-application--is-ltr .v-chip .v-icon--right,.v-application--is-rtl .v-chip .v-avatar--left,.v-application--is-rtl .v-chip .v-icon--left{margin-left:6px;margin-right:-6px}.v-application--is-rtl .v-chip .v-avatar--right,.v-application--is-rtl .v-chip .v-icon--right{margin-left:-6px;margin-right:6px}.v-chip:not(.v-chip--no-color) .v-icon{color:inherit}.v-chip .v-chip__close.v-icon{font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-ltr .v-chip .v-chip__close.v-icon.v-icon--right{margin-right:-4px}.v-application--is-rtl .v-chip .v-chip__close.v-icon.v-icon--right{margin-left:-4px}.v-chip .v-chip__close.v-icon:active,.v-chip .v-chip__close.v-icon:focus,.v-chip .v-chip__close.v-icon:hover{opacity:.72}.v-chip .v-chip__content{align-items:center;display:inline-flex;height:100%;max-width:100%}.v-chip--active .v-icon{color:inherit}.v-chip--link:before{transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-chip--link:focus:before{opacity:.32}.v-chip--clickable{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip--clickable:active{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip__filter{max-width:24px}.v-chip__filter.v-icon{color:inherit}.v-chip__filter.expand-x-transition-enter,.v-chip__filter.expand-x-transition-leave-active{margin:0}.v-chip--pill .v-chip__filter{margin-right:0 16px 0 0}.v-chip--pill .v-avatar{height:32px!important;width:32px!important}.v-application--is-ltr .v-chip--pill .v-avatar--left{margin-left:-12px}.v-application--is-ltr .v-chip--pill .v-avatar--right,.v-application--is-rtl .v-chip--pill .v-avatar--left{margin-right:-12px}.v-application--is-rtl .v-chip--pill .v-avatar--right{margin-left:-12px}.v-chip--label{border-radius:4px!important}.v-chip.v-chip--outlined{border-width:thin;border-style:solid}.v-chip.v-chip--outlined.v-chip--active:before{opacity:.08}.v-chip.v-chip--outlined .v-icon{color:inherit}.v-chip.v-chip--outlined.v-chip.v-chip{background-color:transparent!important}.v-chip.v-chip--selected{background:transparent}.v-chip.v-chip--selected:after{opacity:.28}.v-chip.v-size--x-small{border-radius:8px;font-size:10px;height:16px}.v-chip.v-size--small{border-radius:12px;font-size:12px;height:24px}.v-chip.v-size--default{border-radius:16px;font-size:14px;height:32px}.v-chip.v-size--large{border-radius:27px;font-size:16px;height:54px}.v-chip.v-size--x-large{border-radius:33px;font-size:18px;height:66px}',""]),t.exports=r},492:function(t,e,n){var content=n(553);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("281a9a94",content,!0,{sourceMap:!1})},552:function(t,e,n){"use strict";n(492)},553:function(t,e,n){var r=n(24)(!1);r.push([t.i,".tag[data-v-34802965]{text-align:center;margin-right:1rem;margin-top:.5rem;margin-bottom:1rem}.tag p[data-v-34802965]{margin-bottom:0}#tags[data-v-34802965]{display:flex;justify-content:flex-start}",""]),t.exports=r},554:function(t,e,n){var content=n(555);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("63c9496b",content,!0,{sourceMap:!1})},555:function(t,e,n){var r=n(24)(!1);r.push([t.i,'.theme--light.v-snack__wrapper{color:rgba(0,0,0,.87)}.theme--dark.v-snack__wrapper{color:#fff}.v-sheet.v-snack__wrapper{border-radius:4px}.v-sheet.v-snack__wrapper:not(.v-sheet--outlined){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-sheet.v-snack__wrapper.v-sheet--shaped{border-radius:24px 4px}.v-snack{bottom:0;display:flex;font-size:.875rem;justify-content:center;left:0;pointer-events:none;right:0;top:0;width:100%}.v-snack:not(.v-snack--absolute){height:100vh;position:fixed;z-index:1000}.v-snack:not(.v-snack--centered):not(.v-snack--top){align-items:flex-end}.v-snack__wrapper{align-items:center;border-color:currentColor!important;display:flex;margin:8px;max-width:672px;min-height:48px;min-width:344px;padding:0;pointer-events:auto;position:relative;transition-duration:.15s;transition-property:opacity,transform;transition-timing-function:cubic-bezier(0,0,.2,1);z-index:1}.v-snack__wrapper.theme--dark{background-color:#333;color:hsla(0,0%,100%,.87)}.v-snack__content{flex-grow:1;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1.25rem;margin-right:auto;padding:14px 16px;text-align:left;text-align:initial}.v-snack__action{align-items:center;align-self:center;display:flex}.v-snack__action .v-ripple__container{display:none}.v-application--is-ltr .v-snack__action{margin-right:8px}.v-application--is-rtl .v-snack__action{margin-left:8px}.v-snack__action>.v-snack__btn.v-btn{padding:0 8px}.v-snack__btn{margin:0;min-width:auto}.v-snack--absolute{height:100%;position:absolute;z-index:1}.v-snack--centered{align-items:center}.v-snack--left{justify-content:flex-start;right:auto}.v-snack--multi-line .v-snack__wrapper{min-height:68px}.v-snack--right{justify-content:flex-end;left:auto}.v-snack:not(.v-snack--has-background) .v-snack__wrapper{box-shadow:none}.v-snack--bottom{top:auto}.v-snack--text .v-snack__wrapper:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:0;z-index:-1}.v-snack--top{align-items:flex-start;bottom:auto}.v-snack--vertical .v-snack__wrapper{flex-direction:column}.v-snack--vertical .v-snack__wrapper .v-snack__action{align-self:flex-end;margin-bottom:8px}.v-snack-transition-enter.v-snack__wrapper{transform:scale(.8)}.v-snack-transition-enter.v-snack__wrapper,.v-snack-transition-leave-to.v-snack__wrapper{opacity:0}',""]),t.exports=r},584:function(t,e,n){"use strict";n.r(e);n(52),n(40),n(60),n(71),n(16),n(19),n(30),n(31);var r=n(1),o=n(10);n(7),n(37),n(258),n(185),n(15),n(63),n(26),n(153),n(59),n(58),n(18),n(36),n(68),n(45);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function v(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var d={components:{Spinner:n(386).default},data:function(){return{isRegistered:!1,isRegistering:!1,isUnRegistered:!1,isUnRegistering:!1,entryId:"",userAlreadyRegistered:!1}},created:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.isUserAlreadyRegistered();case 2:case"end":return e.stop()}}),e)})))()},methods:{isUserAlreadyRegistered:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=v(t.entries);try{for(n.s();!(r=n.n()).done;)o=r.value,t.user&&o&&o.userId==t.user.uid&&(t.entryId=o.id)}catch(t){n.e(t)}finally{n.f()}t.userAlreadyRegistered=!!t.entryId;case 3:case"end":return e.stop()}}),e)})))()},handleRegistration:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.isRegistering=!0,n.next=3,e.$fire.firestore.collection("entries").add({eventId:t,userId:e.user.uid}).then((function(t){e.entryId=t.id})).catch((function(t){console.error("Error adding document: ",t)}));case 3:e.attendees.push(l(l({},e.$store.state.account.ACCOUNT),{},{id:e.user.uid})),e.userAlreadyRegistered=!0,e.isRegistered=!0,e.isRegistering=!1;case 7:case"end":return n.stop()}}),n)})))()},handleUnRegistration:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isUnRegistering=!0,e.next=3,t.$fire.firestore.collection("entries").doc(t.entryId).delete().then((function(){var e=t.attendees.findIndex((function(e){return e.id==t.user.id}));t.attendees.splice(e,1)})).catch((function(t){console.error("Error removing document: ",t)}));case 3:t.userAlreadyRegistered=!1,t.isUnRegistered=!0,t.isUnRegistering=!1;case 6:case"end":return e.stop()}}),e)})))()}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,h,d,f,data,m,x,_,k,y,w,O;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.store,n=t.$fire,t.$moment,r=t.route,o=t.error,r.params.id){e.next=4;break}return o({statusCode:404,message:"Page not found"}),e.abrupt("return");case 4:return e.next=6,n.firestore.collection("events").doc(r.params.id).get();case 6:if(c=e.sent,h=!1,d={id:"ID",title:"",description:"",location:"",isOnline:!1,creatorId:"ID",eventDateFrom:"",eventDateTo:"",eventTimeFrom:"",eventTimeTo:"",images:[]},f="",!c.exists){e.next=17;break}(data=c.data()).description&&(m=data.description.match(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi),f=data.description,m&&m.map((function(t){f=f.replace(t,"<a style='color:blue !important' href=\""+t+'" target="_BLANK">'+t+"</a>")}))),(d=l(l(l({},d),data),{},{id:c.id,alteredDescription:f})).isPublished&&(h=!0),e.next=19;break;case 17:return o({statusCode:404,message:"Page not found"}),e.abrupt("return");case 19:return e.next=21,n.firestore.collection("entries").where("eventId","==",r.params.id).get().then((function(t){var e=[];return t.forEach((function(t){var data=t.data();e.push(l({id:t.id},data))})),e}));case 21:x=e.sent,_=[],k=v(x);try{for(k.s();!(y=k.n()).done;)w=y.value,_.push(n.firestore.collection("users").doc(w.userId).get())}catch(t){k.e(t)}finally{k.f()}return e.next=27,Promise.all(_).then((function(t){var e=[];return t.forEach((function(t){var n=t.id,data=t.data();t&&n&&data&&e.push(l({id:n},data))})),e}));case 27:return O=e.sent,e.abrupt("return",{event:d,pageLoaded:h,attendees:O,entries:x});case 29:case"end":return e.stop()}}),e)})))()},computed:{startingTime:function(){return new Date(this.event.eventDateFrom+"T"+this.event.eventTimeFrom).toLocaleString()},endingTime:function(){return new Date(this.event.eventDateTo+"T"+this.event.eventTimeTo).toLocaleString()},duration:function(){var t=Math.abs(new Date(this.event.eventDateFrom+"T"+this.event.eventTimeFrom)-new Date(this.event.eventDateTo+"T"+this.event.eventTimeTo)),e=Math.floor(t/1e3/60),n=Math.floor(e/60),r=e%60;return(n?"".concat(n," hours"):"")+" "+(r?"".concat(r," minutes"):"")},user:function(){return this.$store.state.authUser}},watch:{isRegistered:function(){var t=this;this.isRegistered&&setTimeout((function(){return t.isRegistered=!1}),3e3)},isUnRegistered:function(){var t=this;this.isUnRegistered&&setTimeout((function(){return t.isUnRegistered=!1}),3e3)}}},f=(n(552),n(51)),m=n(55),x=n.n(m),_=n(373),k=n(487),y=n(384),w=n(400),O=n(382),R=n(372),C=n(256),j=n(491),T=n(472),A=n(395),S=n(498),$=(n(44),n(57),n(554),n(99)),z=n(70),B=n(50),D=n(120),I=n(122),P=n(34),U=n(4),E=n(11),L=Object(P.a)($.a,z.a,D.a,Object(I.b)(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"==typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:B.a.options.computed.isDark.call(this)},styles:function(){if(this.absolute||!this.app)return{};var t=this.$vuetify.application,e=t.bar,n=t.bottom,footer=t.footer,r=t.insetFooter,o=t.left,c=t.right,l=t.top;return{paddingBottom:Object(U.h)(n+footer+r),paddingLeft:Object(U.h)(o),paddingRight:Object(U.h)(c),paddingTop:Object(U.h)(e+l)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(E.e)("auto-height",this),0==this.timeout&&Object(E.d)('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(U.t)(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(r.a)({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(U.t)(this)])},genWrapper:function(){var t=this,data=(this.hasBackground?this.setBackgroundColor:this.setTextColor)(this.color,{staticClass:"v-snack__wrapper",class:$.a.options.computed.classes.call(this),style:$.a.options.computed.styles.call(this),directives:[{name:"show",value:this.isActive}],on:{pointerenter:function(){return window.clearTimeout(t.activeTimeout)},pointerleave:this.setTimeout}});return this.$createElement("div",data,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}}),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[t.pageLoaded?n("v-card",{attrs:{"min-width":"100%"}},[n("v-img",{attrs:{src:t.event.images&&t.event.images.length&&t.event.images[0].imageUrl||"https://www.iapco.org/app/plugins/events-calendar-pro/src/resources/images/tribe-related-events-placeholder.png","min-height":"400px","max-height":"400px"}}),t._v(" "),n("v-card-title",[t._v(" "+t._s(t.event.title)+" ")]),t._v(" "),n("v-card-subtitle",{staticStyle:{"padding-top":"10px","white-space":"pre-wrap","word-break":"break-word"},domProps:{innerHTML:t._s(t.event.alteredDescription)}}),t._v(" "),n("v-card-text",[t.event.isOnline?n("p",{staticClass:"text-sm-body-2"},[t._v("Online Event")]):n("p",{staticClass:"text-sm-body-2"},[t._v("Location: "+t._s(t.event.location))]),t._v(" "),n("p",{staticClass:"text-sm-body-2"},[t._v("Starting time: "+t._s(t.startingTime))]),t._v(" "),n("p",{staticClass:"text-sm-body-2"},[t._v("Ending time: "+t._s(t.endingTime))]),t._v(" "),n("p",{staticClass:"text-sm-body-2"},[t._v("Duration: "+t._s(t.duration))]),t._v(" "),t._l(t.event.tags,(function(e){return n("v-chip",{key:e,staticClass:"tag"},[t._v("\n        "+t._s(e)+"\n      ")])})),t._v(" "),n("v-card-actions",{staticClass:"px-0 pb-5"},[t.user&&!t.userAlreadyRegistered?n("v-btn",{staticClass:"blue white--text",attrs:{disabled:!t.user},on:{click:function(e){return t.handleRegistration(t.event.id)}}},[t._v(t._s(t.user?t.userAlreadyRegistered?"Registered":"Register":"Please Login to Register this event"))]):n("v-btn",{staticClass:"blue white--text",attrs:{disabled:!t.user},on:{click:function(e){return t.handleUnRegistration(t.event.id)}}},[t._v(t._s(t.user?t.userAlreadyRegistered?"Unregister":"Register":"Please Login to Register this event"))])],1),t._v(" "),n("h2",[t._v(t._s("Attendees ("+t.attendees.length+")"))]),t._v(" "),t.attendees.length?n("v-list",t._l(t.attendees,(function(e){return n("v-list-item",{key:e.id,staticClass:"black--text",attrs:{"nuxt-link":"",to:"/profile/"+e.id}},[n("v-list-item-avatar",[n("v-icon",[t._v("mdi-account")])],1),e.firstName||e.lastName?n("v-list-item-title",[t._v(t._s(e.firstName+" "+e.lastName))]):n("v-list-item-title",[t._v(t._s("anonymous"))]),t._v(" "),t.user&&e.id===t.user.uid?n("v-list-item-action-text",[t._v("YOURSELF")]):t._e()],1)})),1):n("p",[t._v("Be the first one to register!")])],2)],1):n("Spinner"),t._v(" "),n("v-snackbar",{attrs:{app:""},model:{value:t.isRegistering,callback:function(e){t.isRegistering=e},expression:"isRegistering"}},[t._v("Registering")]),t._v(" "),n("v-snackbar",{attrs:{app:""},model:{value:t.isUnRegistering,callback:function(e){t.isUnRegistering=e},expression:"isUnRegistering"}},[t._v("Unregistering")]),t._v(" "),n("v-snackbar",{attrs:{app:""},model:{value:t.isRegistered,callback:function(e){t.isRegistered=e},expression:"isRegistered"}},[t._v("Event Registered")]),t._v(" "),n("v-snackbar",{attrs:{app:""},model:{value:t.isUnRegistered,callback:function(e){t.isUnRegistered=e},expression:"isUnRegistered"}},[t._v("Event Unregistered")])],1)}),[],!1,null,"34802965",null);e.default=component.exports;x()(component,{Spinner:n(386).default}),x()(component,{VBtn:_.a,VCard:k.a,VCardActions:y.a,VCardSubtitle:y.b,VCardText:y.c,VCardTitle:y.d,VChip:w.a,VContainer:O.a,VIcon:R.a,VImg:C.a,VList:j.a,VListItem:T.a,VListItemActionText:A.a,VListItemAvatar:S.a,VListItemTitle:A.c,VSnackbar:L})}}]);