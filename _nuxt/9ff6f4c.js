(window.webpackJsonp=window.webpackJsonp||[]).push([[53,43,47],{536:function(t,e,r){var content=r(540);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("f3566dec",content,!0,{sourceMap:!1})},537:function(t,e,r){var content=r(542);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("1a30734a",content,!0,{sourceMap:!1})},538:function(t,e,r){"use strict";r.r(e);var n={name:"LoadingSpinner"},o=(r(539),r(65)),component=Object(o.a)(n,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"text-center"},[t("div",{staticClass:"lds-ring"},[t("div"),t("div"),t("div"),t("div")])])}],!1,null,"5143ab22",null);e.default=component.exports},539:function(t,e,r){"use strict";r(536)},540:function(t,e,r){var n=r(25)(!1);n.push([t.i,".lds-ring[data-v-5143ab22]{display:inline-block;position:relative;width:80px;height:80px}.lds-ring div[data-v-5143ab22]{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:5px;border-radius:50%;-webkit-animation:lds-ring-5143ab22 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:lds-ring-5143ab22 1.2s cubic-bezier(.5,0,.5,1) infinite;border:5px solid transparent;border-top-color:#2196f3}.lds-ring div[data-v-5143ab22]:first-child{-webkit-animation-delay:-.45s;animation-delay:-.45s}.lds-ring div[data-v-5143ab22]:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.lds-ring div[data-v-5143ab22]:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}@-webkit-keyframes lds-ring-5143ab22{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes lds-ring-5143ab22{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""]),t.exports=n},541:function(t,e,r){"use strict";r(537)},542:function(t,e,r){var n=r(25)(!1);n.push([t.i,".spinner[data-v-b799d304]{display:flex;justify-content:center;margin-top:1rem;color:#add8e6}",""]),t.exports=n},543:function(t,e,r){"use strict";r.r(e);var n=r(245),o={},c=(r(541),r(65)),component=Object(c.a)(o,(function(){var t=this._self._c;return t("div",{staticClass:"spinner"},[t(n.a,{attrs:{size:"100",indeterminate:""}})],1)}),[],!1,null,"b799d304",null);e.default=component.exports},578:function(t,e,r){"use strict";var n=r(1),o=(r(38),r(62),r(262),r(17),r(7),r(15),r(54),r(111),r(18),r(16),r(22),r(23),r(9)),c=r(122),l=r(170);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},839:function(t,e,r){"use strict";r.r(e);var n=r(119),o=r(110),c=r(90),l=r(358),d=r(535),f=r(810),v=r(258),h=r(578),m=r(120),y=r(357),w=r(257),O=r(171),D=(r(18),r(16),r(17),r(22),r(23),r(21)),x=r(1),_=(r(61),r(7),r(15),r(87),r(54),r(137)),j=r.n(_),T=r(538),k=r(83);function B(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function S(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?B(Object(source),!0).forEach((function(e){Object(x.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):B(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var C=S(S(S({middleware:"auth",components:{Spinner:T.default},layout:"adminLayout",name:"admin",data:function(){return{sortBy:"updatedDate",sortDesc:!0,groupBy:"isPublished",groupDesc:!1,valid:!1,newInfoDialog:!1,eventTitle:"",eventTitleRules:[function(t){return!!t||"Event Title is required"},function(t){return!!t&&t.length>=5&&t.length<=80||"Name must be greater than 5 and less than 80 characters"}]}}},Object(k.b)({fetchAccount:"account/FETCH_ACCOUNT"})),Object(k.d)({setAccount:"account/SET_ACCOUNT"})),{},{asyncData:function(t){return Object(D.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,n=t.$fire,t.$moment,e.next=3,n.firestore.collection("events").where("creatorId","==",r.state.authUser.uid).get().then((function(t){var e=[];return t.forEach((function(t){var data=t.data();e.push(S(S({id:t.id},data),{},{startDateTime:data.eventDateFrom+" "+data.eventTimeFrom,endDateTime:data.eventDateTo+" "+data.eventTimeTo,updatedDate:data.updatedAt?j()(parseInt(data.updatedAt)).format("YYYY-MM-D HH:mm:ss"):"",createdDate:data.createdAt?j()(parseInt(data.createdAt)).format("YYYY-MM-D HH:mm:ss"):""}))})),e}));case 3:return o=e.sent,e.abrupt("return",{events:o,pageLoaded:!0});case 5:case"end":return e.stop()}}),e)})))()},computed:S(S({user:function(){return this.$store.state.authUser}},Object(k.e)({account:function(t){return t.account.ACCOUNT}})),Object(k.c)({isAdmin:"account/ISADMIN"})),methods:{handleClick:function(t){this.$router.push({path:"/admin/events/event/".concat(t.id)})},createNewEvent:function(){var t=this;return Object(D.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.eventTitle){e.next=2;break}return e.abrupt("return");case 2:return r=Date.now().toString(),data={title:t.eventTitle,isPublished:!1,creatorId:t.user.uid,createdAt:r,updatedAt:r},t.eventTitle="",e.next=7,t.$fire.firestore.collection("events").add(data).then((function(e){t.events.unshift(S(S({id:e.id},data),{},{startDateTime:"N/A",endDateTime:"N/A",updatedDate:j()(parseInt(r)).format("YYYY-MM-D HH:mm:ss"),createdDate:j()(parseInt(r)).format("YYYY-MM-D HH:mm:ss")}))})).catch((function(t){console.error("Error adding document: ",t)}));case 7:case"end":return e.stop()}}),e)})))()},validateSubmit:function(){var t=this;return Object(D.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$refs.form.validate()){e.next=10;break}return e.prev=2,e.next=5,t.createNewEvent().then((function(){t.success="Successfully updated!!",setTimeout((function(){t.success=null}),2e3)}));case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),t.error="Could not set user information";case 10:t.$refs.form.validate();case 11:case"end":return e.stop()}}),e,null,[[2,7]])})))()}}}),P=r(65),component=Object(P.a)(C,(function(){var t=this,e=t._self._c;return e("div",[t.user?e(d.a,[t.isAdmin?e(d.a,[t.pageLoaded?e(d.a,{staticStyle:{position:"relative"}},[e(f.a,{staticClass:"elevation-1",attrs:{headers:[{text:"Title",value:"title"},{text:"Start Date Time",value:"startDateTime"},{text:"End Date Time",value:"endDateTime"},{text:"Location",value:"location"},{text:"Is Published",value:"isPublished"},{text:"Created Date",value:"createdDate"},{text:"Updated Date",value:"updatedDate"}],"group-by":t.groupBy,"group-desc":t.groupDesc,"sort-by":t.sortBy,"sort-desc":t.sortDesc,items:t.events,"items-per-page":15},on:{"update:groupBy":function(e){t.groupBy=e},"update:group-by":function(e){t.groupBy=e},"update:groupDesc":function(e){t.groupDesc=e},"update:group-desc":function(e){t.groupDesc=e},"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},"click:row":t.handleClick}}),t._v(" "),e(v.a,{staticStyle:{float:"right"},attrs:{"offset-y":"","max-width":"800px",scrollable:""},scopedSlots:t._u([{key:"activator",fn:function(r){var o=r.on;return[e(y.a,[e(l.a,{staticClass:"pb-0"},[e(n.a,t._g({staticStyle:{margin:"auto",left:"0",right:"0"},attrs:{fab:"",bottom:"",absolute:"",color:"primary",dark:""}},o),[e(m.a,[t._v("mdi-plus")])],1)],1)],1)]}}]),model:{value:t.newInfoDialog,callback:function(e){t.newInfoDialog=e},expression:"newInfoDialog"}},[t._v(" "),e(o.a,{staticStyle:{height:"fit-content"}},[e(c.d,[e("span",{staticClass:"headline"},[t._v("\n                    Add New Event\n                  ")])]),t._v(" "),e(c.c,[e(h.a,{ref:"form",staticClass:"pt-30",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e(d.a,{staticStyle:{"max-width":"800px"}},[e(y.a,[e(l.a,{attrs:{cols:"12",md:"12"}},[e(O.a,{attrs:{rules:t.eventTitleRules,label:"Event Title",required:""},model:{value:t.eventTitle,callback:function(e){t.eventTitle=e},expression:"eventTitle"}})],1)],1)],1)],1)],1),t._v(" "),e(c.a,[e(w.a),t._v(" "),e(n.a,{attrs:{color:"primary",text:""},on:{click:function(e){t.newInfoDialog=!1}}},[t._v("\n                    Cancel")]),t._v(" "),e(n.a,{attrs:{color:"primary",disabled:!t.valid},on:{click:function(){t.validateSubmit(),t.newInfoDialog=!1}}},[t._v("\n                    Save\n                  ")])],1)],1)],1)],1):e("Spinner",{attrs:{color:"white"}})],1):e(y.a,[t._v("\n      You are not an admin.\n      Go to "),e("NuxtLink",{staticClass:"primary--text",attrs:{to:"/dashboard"}},[t._v("\n        your page\n      ")])],1)],1):e("Spinner",{attrs:{color:"white"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Spinner:r(543).default})}}]);