(window.webpackJsonp=window.webpackJsonp||[]).push([[91,46,50],{536:function(e,t,r){var content=r(540);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(26).default)("6333d4fe",content,!0,{sourceMap:!1})},537:function(e,t,r){var content=r(543);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(26).default)("1a30734a",content,!0,{sourceMap:!1})},538:function(e,t,r){"use strict";r.r(t);var n={name:"LoadingSpinner"},o=(r(539),r(65)),component=Object(o.a)(n,(function(){this._self._c;return this._m(0)}),[function(){var e=this._self._c;return e("div",{staticClass:"text-center",staticStyle:{"margin-top":"10px"}},[e("div",{staticClass:"lds-ring"},[e("div"),e("div"),e("div"),e("div")])])}],!1,null,"6f49ae7c",null);t.default=component.exports},539:function(e,t,r){"use strict";r(536)},540:function(e,t,r){var n=r(25)(!1);n.push([e.i,".lds-ring[data-v-6f49ae7c]{display:inline-block;position:relative;width:80px;height:80px}.lds-ring div[data-v-6f49ae7c]{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:5px;border-radius:50%;-webkit-animation:lds-ring-6f49ae7c 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:lds-ring-6f49ae7c 1.2s cubic-bezier(.5,0,.5,1) infinite;border:5px solid transparent;border-top-color:#2196f3}.lds-ring div[data-v-6f49ae7c]:first-child{-webkit-animation-delay:-.45s;animation-delay:-.45s}.lds-ring div[data-v-6f49ae7c]:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.lds-ring div[data-v-6f49ae7c]:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}@-webkit-keyframes lds-ring-6f49ae7c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes lds-ring-6f49ae7c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""]),e.exports=n},542:function(e,t,r){"use strict";r(537)},543:function(e,t,r){var n=r(25)(!1);n.push([e.i,".spinner[data-v-b799d304]{display:flex;justify-content:center;margin-top:1rem;color:#add8e6}",""]),e.exports=n},544:function(e,t,r){"use strict";r.r(t);var n=r(245),o={},c=(r(542),r(65)),component=Object(c.a)(o,(function(){var e=this._self._c;return e("div",{staticClass:"spinner"},[e(n.a,{attrs:{size:"100",indeterminate:""}})],1)}),[],!1,null,"b799d304",null);t.default=component.exports},893:function(e,t,r){"use strict";r.r(t);var n=r(119),o=r(110),c=r(90),l=r(358),d=r(535),f=r(857),v=r(258),m=r(603),h=r(120),y=r(357),w=r(257),x=r(172),D=(r(18),r(15),r(17),r(22),r(23),r(20)),O=r(1),T=(r(61),r(7),r(16),r(87),r(54),r(128)),k=r.n(T),_=r(538),j=r(83);function C(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function S(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(t){Object(O.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var A=S(S(S({middleware:"auth",components:{Spinner:_.default},layout:"adminLayout",name:"organizer",data:function(){return{sortBy:"updatedDate",sortDesc:!0,groupBy:"isPublished",groupDesc:!1,valid:!1,newInfoDialog:!1,eventTitle:"",eventTitleRules:[function(e){return!!e||"Event Title is required"},function(e){return!!e&&e.length>=5&&e.length<=80||"Name must be greater than 5 and less than 80 characters"}]}}},Object(j.b)({fetchAccount:"account/FETCH_ACCOUNT"})),Object(j.d)({setAccount:"account/SET_ACCOUNT"})),{},{asyncData:function(e){return Object(D.a)(regeneratorRuntime.mark((function t(){var r,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.store,n=e.$fire,e.$moment,t.next=3,n.firestore.collection("events").where("creatorId","==",r.state.authUser.uid).where("isCreatorOrganizer","==",!0).get().then((function(e){var t=[];return e.forEach((function(e){var data=e.data();t.push(S(S({id:e.id},data),{},{startDateTime:data.eventDateFrom+" "+data.eventTimeFrom,endDateTime:data.eventDateTo+" "+data.eventTimeTo,updatedDate:data.updatedAt?k()(parseInt(data.updatedAt)).format("YYYY-MM-D HH:mm:ss"):"",createdDate:data.createdAt?k()(parseInt(data.createdAt)).format("YYYY-MM-D HH:mm:ss"):""}))})),t}));case 3:return o=t.sent,t.abrupt("return",{events:o,pageLoaded:!0});case 5:case"end":return t.stop()}}),t)})))()},computed:S(S({eventsPerPage:function(){return window.innerWidth>800?10:5},user:function(){return this.$store.state.authUser}},Object(j.e)({account:function(e){return e.account.ACCOUNT}})),Object(j.c)({isOrganizer:"account/ISORGANIZER"})),methods:{handleClick:function(e){this.$router.push({path:"/organizer/events/event/".concat(e.id)})},createNewEvent:function(){var e=this;return Object(D.a)(regeneratorRuntime.mark((function t(){var r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.eventTitle){t.next=2;break}return t.abrupt("return");case 2:return r=Date.now().toString(),data={title:e.eventTitle,isPublished:!1,publishedAt:null,creatorId:e.user.uid,isCreatorOrganizer:!0,createdAt:r,updatedAt:r,isApproved:!1,isRequested:!1},e.eventTitle="",t.next=7,e.$fire.firestore.collection("events").add(data).then((function(t){e.events.unshift(S(S({id:t.id},data),{},{startDateTime:"N/A",endDateTime:"N/A",updatedDate:k()(parseInt(r)).format("YYYY-MM-D HH:mm:ss"),createdDate:k()(parseInt(r)).format("YYYY-MM-D HH:mm:ss")}))})).catch((function(e){console.error("Error adding document: ",e)}));case 7:case"end":return t.stop()}}),t)})))()},validateSubmit:function(){var e=this;return Object(D.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$refs.form.validate()){t.next=10;break}return t.prev=2,t.next=5,e.createNewEvent().then((function(){e.success="Successfully updated!!",setTimeout((function(){e.success=null}),2e3)}));case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(2),e.error="Could not set user information";case 10:e.$refs.form.validate();case 11:case"end":return t.stop()}}),t,null,[[2,7]])})))()}}}),Y=r(65),component=Object(Y.a)(A,(function(){var e=this,t=e._self._c;return t("div",[e.user?t(d.a,[e.isOrganizer?t(d.a,[e.pageLoaded?t(d.a,{staticStyle:{position:"relative"}},[t(f.a,{staticClass:"elevation-1",attrs:{headers:[{text:"Title",value:"title"},{text:"Start Date Time",value:"startDateTime"},{text:"End Date Time",value:"endDateTime"},{text:"Location",value:"location"},{text:"Is Approved",value:"isApproved"},{text:"Is Published",value:"isPublished"},{text:"Created Date",value:"createdDate"},{text:"Updated Date",value:"updatedDate"}],"group-by":e.groupBy,"group-desc":e.groupDesc,"sort-by":e.sortBy,"sort-desc":e.sortDesc,items:e.events,"items-per-page":e.eventsPerPage},on:{"update:groupBy":function(t){e.groupBy=t},"update:group-by":function(t){e.groupBy=t},"update:groupDesc":function(t){e.groupDesc=t},"update:group-desc":function(t){e.groupDesc=t},"update:sortBy":function(t){e.sortBy=t},"update:sort-by":function(t){e.sortBy=t},"update:sortDesc":function(t){e.sortDesc=t},"update:sort-desc":function(t){e.sortDesc=t},"click:row":e.handleClick}}),e._v(" "),t(v.a,{staticStyle:{float:"right"},attrs:{"offset-y":"","max-width":"800px",scrollable:""},scopedSlots:e._u([{key:"activator",fn:function(r){var o=r.on;return[t(y.a,[t(l.a,{staticClass:"pb-0"},[t(n.a,e._g({staticStyle:{margin:"auto",left:"0",right:"0"},attrs:{fab:"",bottom:"",absolute:"",color:"primary",dark:""}},o),[t(h.a,[e._v("mdi-plus")])],1)],1)],1)]}}]),model:{value:e.newInfoDialog,callback:function(t){e.newInfoDialog=t},expression:"newInfoDialog"}},[e._v(" "),t(o.a,{staticStyle:{height:"fit-content"}},[t(c.d,[t("span",{staticClass:"headline"},[e._v("\n                    Add New Event\n                  ")])]),e._v(" "),t(c.c,[t(m.a,{ref:"form",staticClass:"pt-30",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t(d.a,{staticStyle:{"max-width":"800px"}},[t(y.a,[t(l.a,{attrs:{cols:"12",md:"12"}},[t(x.a,{attrs:{rules:e.eventTitleRules,label:"Event Title",required:""},model:{value:e.eventTitle,callback:function(t){e.eventTitle=t},expression:"eventTitle"}})],1)],1)],1)],1)],1),e._v(" "),t(c.a,[t(w.a),e._v(" "),t(n.a,{attrs:{color:"primary",text:""},on:{click:function(t){e.newInfoDialog=!1}}},[e._v("\n                    Cancel")]),e._v(" "),t(n.a,{attrs:{color:"primary",disabled:!e.valid},on:{click:function(){e.validateSubmit(),e.newInfoDialog=!1}}},[e._v("\n                    Save\n                  ")])],1)],1)],1)],1):t("Spinner",{attrs:{color:"white"}})],1):t(y.a,[e._v("\n      You are not an organizer.\n      Go to "),t("NuxtLink",{staticClass:"primary--text",attrs:{to:"/dashboard"}},[e._v("\n        your page\n      ")])],1)],1):t("Spinner",{attrs:{color:"white"}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Spinner:r(544).default})}}]);