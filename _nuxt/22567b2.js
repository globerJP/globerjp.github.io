(window.webpackJsonp=window.webpackJsonp||[]).push([[80,51,69],{1347:function(e,t,r){"use strict";r.r(t);var n=r(120),o=r(111),c=r(92),d=r(383),l=r(569),f=r(991),v=r(268),m=r(642),h=r(121),D=r(382),y=r(267),x=r(173),O=(r(17),r(15),r(24),r(25),r(2)),w=r(19),T=(r(62),r(8),r(14),r(16),r(83),r(56),r(130)),k=r.n(T),_=r(574),A=r(79);function C(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function z(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(t){Object(O.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var S={middleware:"auth",components:{Spinner:_.default},layout:"default",name:"admin",data:function(){return{sortBy:"updatedDate",sortDesc:!0,groupBy:"isPublished",groupDesc:!1,sortByOrganizer:"updatedDate",sortDescOrganizer:!0,groupByOrganizer:"isPending",groupDescOrganizer:!0,valid:!1,newInfoDialog:!1,newInfoDialog2:!1,eventTitle:"",eventTitleRules:[function(e){return!!e||"Event Title is required"},function(e){return!!e&&e.length>=5&&e.length<=80||"Name must be greater than 5 and less than 80 characters"}]}},asyncData:function(e){return Object(w.a)(regeneratorRuntime.mark((function t(){var r,n,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.store,n=e.$fire,e.$moment,t.next=3,n.firestore.collection("events").where("creatorId","==",r.state.authUser.uid).get().then((function(e){var t=[];return e.forEach((function(e){var data=e.data();t.push(z(z({id:e.id},data),{},{startDateTime:data.eventDateFrom+" "+data.eventTimeFrom,endDateTime:data.eventDateTo+" "+data.eventTimeTo,updatedDate:data.updatedAt?k()(parseInt(data.updatedAt)).format("YYYY-MM-D HH:mm:ss"):"",createdDate:data.createdAt?k()(parseInt(data.createdAt)).format("YYYY-MM-D HH:mm:ss"):""}))})),t}));case 3:return o=(o=t.sent).filter((function(e){return!e.isCreatorOrganizer})),t.next=7,n.firestore.collection("events").where("isCreatorOrganizer","==",!0).get().then((function(e){var t=[];return e.forEach((function(e){var data=e.data();t.push(z(z({id:e.id},data),{},{isPending:data.isRequested&&!data.isApproved,startDateTime:data.eventDateFrom+" "+data.eventTimeFrom,endDateTime:data.eventDateTo+" "+data.eventTimeTo,updatedDate:data.updatedAt?k()(parseInt(data.updatedAt)).format("YYYY-MM-D HH:mm:ss"):"",createdDate:data.createdAt?k()(parseInt(data.createdAt)).format("YYYY-MM-D HH:mm:ss"):""}))})),t}));case 7:return c=t.sent,t.abrupt("return",{eventsOrganizer:c,events:o,pageLoaded:!0});case 9:case"end":return t.stop()}}),t)})))()},computed:z(z({eventsPerPage:function(){return window.innerWidth>800?10:5},user:function(){return this.$store.state.authUser}},Object(A.e)({account:function(e){return e.account.ACCOUNT}})),Object(A.c)({isAdmin:"account/ISADMIN"})),methods:z(z(z({},Object(A.b)({fetchAccount:"account/FETCH_ACCOUNT"})),Object(A.d)({setAccount:"account/SET_ACCOUNT"})),{},{handleClick:function(e){e.isCreatorOrganizer?alert("Please edit it on the organizer page since it was created using your organizer page"):this.$router.push({path:"/admin/events/event/".concat(e.id)})},handleClickOrganizer:function(e){var t=this;return Object(w.a)(regeneratorRuntime.mark((function r(){var n,o,c,d,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=confirm("Click ok to approve and cancel to disapprove the requested event post."),o=!0,c=e.isRequested&&o,d=Date.now().toString(),n||(o=!1,c=e.isRequested&&o),r.prev=5,data={isPublished:c,publishedAt:c?d:e.publishedAt,isApproved:o,updatedAt:d,isCreatorOrganizer:!0},r.next=9,t.$fire.firestore.collection("events").doc(e.id).update(data).then((function(){e.isPublished=c,e.isApproved=o,e.publishedAt=c?d:e.publishedAt,e.updatedAt=d,e.isPending=e.isRequested&&!o,t.success="Successfully updated!!",setTimeout((function(){t.success=null}),2e3)}));case 9:r.next=15;break;case 11:r.prev=11,r.t0=r.catch(5),console.log(r.t0),t.error="Could not set user information";case 15:case"end":return r.stop()}}),r,null,[[5,11]])})))()},createNewEvent:function(){var e=this;return Object(w.a)(regeneratorRuntime.mark((function t(){var r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.eventTitle){t.next=2;break}return t.abrupt("return");case 2:return r=Date.now().toString(),data={title:e.eventTitle,isPublished:!1,creatorId:e.user.uid,createdAt:r,updatedAt:r},e.eventTitle="",t.next=7,e.$fire.firestore.collection("events").add(data).then((function(t){e.events.unshift(z(z({id:t.id},data),{},{startDateTime:"N/A",endDateTime:"N/A",updatedDate:k()(parseInt(r)).format("YYYY-MM-D HH:mm:ss"),createdDate:k()(parseInt(r)).format("YYYY-MM-D HH:mm:ss")}))})).catch((function(e){console.error("Error adding document: ",e)}));case 7:case"end":return t.stop()}}),t)})))()},validateSubmit:function(){var e=this;return Object(w.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$refs.form.validate()){t.next=10;break}return t.prev=2,t.next=5,e.createNewEvent().then((function(){e.success="Successfully updated!!",setTimeout((function(){e.success=null}),2e3)}));case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(2),e.error="Could not set user information";case 10:e.$refs.form.validate();case 11:case"end":return t.stop()}}),t,null,[[2,7]])})))()}})},P=r(54),component=Object(P.a)(S,(function(){var e=this,t=e._self._c;return t("div",[e.user?t(l.a,[e.isAdmin?t(l.a,[t(c.d,{staticClass:"pb-0"},[e._v("Your Events")]),e._v(" "),e.pageLoaded?t(l.a,{staticStyle:{position:"relative","margin-bottom":"25px !important"}},[t(f.a,{staticClass:"elevation-1",attrs:{headers:[{text:"Title",value:"title"},{text:"Start Date Time",value:"startDateTime"},{text:"End Date Time",value:"endDateTime"},{text:"Location",value:"location"},{text:"Is Published",value:"isPublished"},{text:"Created Date",value:"createdDate"},{text:"Updated Date",value:"updatedDate"}],"group-by":e.groupBy,"group-desc":e.groupDesc,"sort-by":e.sortBy,"sort-desc":e.sortDesc,items:e.events,"items-per-page":e.eventsPerPage},on:{"update:groupBy":function(t){e.groupBy=t},"update:group-by":function(t){e.groupBy=t},"update:groupDesc":function(t){e.groupDesc=t},"update:group-desc":function(t){e.groupDesc=t},"update:sortBy":function(t){e.sortBy=t},"update:sort-by":function(t){e.sortBy=t},"update:sortDesc":function(t){e.sortDesc=t},"update:sort-desc":function(t){e.sortDesc=t},"click:row":e.handleClick}}),e._v(" "),t(v.a,{staticStyle:{float:"right"},attrs:{"offset-y":"","max-width":"800px",scrollable:""},scopedSlots:e._u([{key:"activator",fn:function(r){var o=r.on;return[t(D.a,[t(d.a,{staticClass:"pb-0"},[t(n.a,e._g({staticStyle:{margin:"auto",left:"0",right:"0"},attrs:{fab:"",bottom:"",absolute:"",color:"primary",dark:""}},o),[t(h.a,[e._v("mdi-plus")])],1)],1)],1)]}}]),model:{value:e.newInfoDialog,callback:function(t){e.newInfoDialog=t},expression:"newInfoDialog"}},[e._v(" "),t(o.a,{staticStyle:{height:"fit-content"}},[t(c.d,[t("span",{staticClass:"headline"},[e._v("\n                Add New Event\n              ")])]),e._v(" "),t(c.c,[t(m.a,{ref:"form",staticClass:"pt-30",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t(l.a,{staticStyle:{"max-width":"800px"}},[t(D.a,[t(d.a,{attrs:{cols:"12",md:"12"}},[t(x.a,{attrs:{rules:e.eventTitleRules,label:"Event Title",required:""},model:{value:e.eventTitle,callback:function(t){e.eventTitle=t},expression:"eventTitle"}})],1)],1)],1)],1)],1),e._v(" "),t(c.a,[t(y.a),e._v(" "),t(n.a,{attrs:{color:"primary",text:""},on:{click:function(t){e.newInfoDialog=!1}}},[e._v("\n                Cancel")]),e._v(" "),t(n.a,{attrs:{color:"primary",disabled:!e.valid},on:{click:function(){e.validateSubmit(),e.newInfoDialog=!1}}},[e._v("\n                Save\n              ")])],1)],1)],1)],1):t("Spinner",{attrs:{color:"white"}}),e._v(" "),t(c.d,{staticClass:"pb-0"},[e._v("All Organizers' Events")]),e._v(" "),e.pageLoaded?t(l.a,{staticStyle:{position:"relative"}},[t(f.a,{staticClass:"elevation-1",attrs:{headers:[{text:"Title",value:"title"},{text:"Start Date Time",value:"startDateTime"},{text:"End Date Time",value:"endDateTime"},{text:"Is Pending",value:"isPending"},{text:"Is Approved",value:"isApproved"},{text:"Is Published",value:"isPublished"},{text:"Created Date",value:"createdDate"},{text:"Updated Date",value:"updatedDate"}],"group-by":e.groupByOrganizer,"group-desc":e.groupDescOrganizer,"sort-by":e.sortByOrganizer,"sort-desc":e.sortDescOrganizer,items:e.eventsOrganizer,"items-per-page":5},on:{"update:groupBy":function(t){e.groupByOrganizer=t},"update:group-by":function(t){e.groupByOrganizer=t},"update:groupDesc":function(t){e.groupDescOrganizer=t},"update:group-desc":function(t){e.groupDescOrganizer=t},"update:sortBy":function(t){e.sortByOrganizer=t},"update:sort-by":function(t){e.sortByOrganizer=t},"update:sortDesc":function(t){e.sortDescOrganizer=t},"update:sort-desc":function(t){e.sortDescOrganizer=t},"click:row":e.handleClickOrganizer}})],1):t("Spinner",{attrs:{color:"white"}})],1):t(D.a,[e._v("\n      You are not an admin.\n      Go to "),t("NuxtLink",{staticClass:"primary--text",attrs:{to:"/dashboard"}},[e._v("\n        your page\n      ")])],1)],1):t("Spinner",{attrs:{color:"white"}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Spinner:r(580).default})},572:function(e,t,r){var content=r(576);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(23).default)("6333d4fe",content,!0,{sourceMap:!1})},573:function(e,t,r){var content=r(579);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(23).default)("1a30734a",content,!0,{sourceMap:!1})},574:function(e,t,r){"use strict";r.r(t);var n={name:"LoadingSpinner"},o=(r(575),r(54)),component=Object(o.a)(n,(function(){this._self._c;return this._m(0)}),[function(){var e=this._self._c;return e("div",{staticClass:"text-center",staticStyle:{"margin-top":"10px"}},[e("div",{staticClass:"lds-ring"},[e("div"),e("div"),e("div"),e("div")])])}],!1,null,"6f49ae7c",null);t.default=component.exports},575:function(e,t,r){"use strict";r(572)},576:function(e,t,r){var n=r(22)(!1);n.push([e.i,".lds-ring[data-v-6f49ae7c]{display:inline-block;position:relative;width:80px;height:80px}.lds-ring div[data-v-6f49ae7c]{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:5px;border-radius:50%;-webkit-animation:lds-ring-6f49ae7c 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:lds-ring-6f49ae7c 1.2s cubic-bezier(.5,0,.5,1) infinite;border:5px solid transparent;border-top-color:#2196f3}.lds-ring div[data-v-6f49ae7c]:first-child{-webkit-animation-delay:-.45s;animation-delay:-.45s}.lds-ring div[data-v-6f49ae7c]:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.lds-ring div[data-v-6f49ae7c]:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}@-webkit-keyframes lds-ring-6f49ae7c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes lds-ring-6f49ae7c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""]),e.exports=n},578:function(e,t,r){"use strict";r(573)},579:function(e,t,r){var n=r(22)(!1);n.push([e.i,".spinner[data-v-b799d304]{display:flex;justify-content:center;margin-top:1rem;color:#add8e6}",""]),e.exports=n},580:function(e,t,r){"use strict";r.r(t);var n=r(247),o={},c=(r(578),r(54)),component=Object(c.a)(o,(function(){var e=this._self._c;return e("div",{staticClass:"spinner"},[e(n.a,{attrs:{size:"100",indeterminate:""}})],1)}),[],!1,null,"b799d304",null);t.default=component.exports}}]);