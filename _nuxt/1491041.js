(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{573:function(e,t,r){var n=r(32);e.exports=function(e){return n(Set.prototype.values,e)}},591:function(e,t,r){r(653)},592:function(e,t,r){"use strict";r(6)({target:"Set",proto:!0,real:!0,forced:!0},{addAll:r(654)})},593:function(e,t,r){"use strict";r(6)({target:"Set",proto:!0,real:!0,forced:!0},{deleteAll:r(279)})},594:function(e,t,r){"use strict";var n=r(6),o=r(53),c=r(32),l=r(57),d=r(24),f=r(123),h=r(56);n({target:"Set",proto:!0,real:!0,forced:!0},{difference:function(e){var t=d(this),r=new(f(t,o("Set")))(t),n=l(r.delete);return h(e,(function(e){c(n,r,e)})),r}})},595:function(e,t,r){"use strict";var n=r(6),o=r(24),c=r(63),l=r(573),d=r(56);n({target:"Set",proto:!0,real:!0,forced:!0},{every:function(e){var t=o(this),r=l(t),n=c(e,arguments.length>1?arguments[1]:void 0);return!d(r,(function(e,r){if(!n(e,e,t))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},596:function(e,t,r){"use strict";var n=r(6),o=r(53),c=r(32),l=r(57),d=r(24),f=r(63),h=r(123),m=r(573),v=r(56);n({target:"Set",proto:!0,real:!0,forced:!0},{filter:function(e){var t=d(this),r=m(t),n=f(e,arguments.length>1?arguments[1]:void 0),x=new(h(t,o("Set"))),w=l(x.add);return v(r,(function(e){n(e,e,t)&&c(w,x,e)}),{IS_ITERATOR:!0}),x}})},597:function(e,t,r){"use strict";var n=r(6),o=r(24),c=r(63),l=r(573),d=r(56);n({target:"Set",proto:!0,real:!0,forced:!0},{find:function(e){var t=o(this),r=l(t),n=c(e,arguments.length>1?arguments[1]:void 0);return d(r,(function(e,r){if(n(e,e,t))return r(e)}),{IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},598:function(e,t,r){"use strict";var n=r(6),o=r(53),c=r(32),l=r(57),d=r(24),f=r(123),h=r(56);n({target:"Set",proto:!0,real:!0,forced:!0},{intersection:function(e){var t=d(this),r=new(f(t,o("Set"))),n=l(t.has),m=l(r.add);return h(e,(function(e){c(n,t,e)&&c(m,r,e)})),r}})},599:function(e,t,r){"use strict";var n=r(6),o=r(32),c=r(57),l=r(24),d=r(56);n({target:"Set",proto:!0,real:!0,forced:!0},{isDisjointFrom:function(e){var t=l(this),r=c(t.has);return!d(e,(function(e,n){if(!0===o(r,t,e))return n()}),{INTERRUPTED:!0}).stopped}})},600:function(e,t,r){"use strict";var n=r(6),o=r(53),c=r(32),l=r(57),d=r(33),f=r(24),h=r(215),m=r(56);n({target:"Set",proto:!0,real:!0,forced:!0},{isSubsetOf:function(e){var t=h(this),r=f(e),n=r.has;return d(n)||(r=new(o("Set"))(e),n=l(r.has)),!m(t,(function(e,t){if(!1===c(n,r,e))return t()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},601:function(e,t,r){"use strict";var n=r(6),o=r(32),c=r(57),l=r(24),d=r(56);n({target:"Set",proto:!0,real:!0,forced:!0},{isSupersetOf:function(e){var t=l(this),r=c(t.has);return!d(e,(function(e,n){if(!1===o(r,t,e))return n()}),{INTERRUPTED:!0}).stopped}})},602:function(e,t,r){"use strict";var n=r(6),o=r(21),c=r(24),l=r(48),d=r(573),f=r(56),h=o([].join),m=[].push;n({target:"Set",proto:!0,real:!0,forced:!0},{join:function(e){var t=c(this),r=d(t),n=void 0===e?",":l(e),o=[];return f(r,m,{that:o,IS_ITERATOR:!0}),h(o,n)}})},603:function(e,t,r){"use strict";var n=r(6),o=r(53),c=r(63),l=r(32),d=r(57),f=r(24),h=r(123),m=r(573),v=r(56);n({target:"Set",proto:!0,real:!0,forced:!0},{map:function(e){var t=f(this),r=m(t),n=c(e,arguments.length>1?arguments[1]:void 0),x=new(h(t,o("Set"))),w=d(x.add);return v(r,(function(e){l(w,x,n(e,e,t))}),{IS_ITERATOR:!0}),x}})},604:function(e,t,r){"use strict";var n=r(6),o=r(57),c=r(24),l=r(573),d=r(56),f=TypeError;n({target:"Set",proto:!0,real:!0,forced:!0},{reduce:function(e){var t=c(this),r=l(t),n=arguments.length<2,h=n?void 0:arguments[1];if(o(e),d(r,(function(r){n?(n=!1,h=r):h=e(h,r,r,t)}),{IS_ITERATOR:!0}),n)throw f("Reduce of empty set with no initial value");return h}})},605:function(e,t,r){"use strict";var n=r(6),o=r(24),c=r(63),l=r(573),d=r(56);n({target:"Set",proto:!0,real:!0,forced:!0},{some:function(e){var t=o(this),r=l(t),n=c(e,arguments.length>1?arguments[1]:void 0);return d(r,(function(e,r){if(n(e,e,t))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},606:function(e,t,r){"use strict";var n=r(6),o=r(53),c=r(32),l=r(57),d=r(24),f=r(123),h=r(56);n({target:"Set",proto:!0,real:!0,forced:!0},{symmetricDifference:function(e){var t=d(this),r=new(f(t,o("Set")))(t),n=l(r.delete),m=l(r.add);return h(e,(function(e){c(n,r,e)||c(m,r,e)})),r}})},607:function(e,t,r){"use strict";var n=r(6),o=r(53),c=r(57),l=r(24),d=r(123),f=r(56);n({target:"Set",proto:!0,real:!0,forced:!0},{union:function(e){var t=l(this),r=new(d(t,o("Set")))(t);return f(e,c(r.add),{that:r}),r}})},653:function(e,t,r){"use strict";r(278)("Set",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),r(384))},654:function(e,t,r){"use strict";var n=r(32),o=r(57),c=r(24);e.exports=function(){for(var e=c(this),t=o(e.add),r=0,l=arguments.length;r<l;r++)n(t,e,arguments[r]);return e}},723:function(e,t,r){"use strict";r(271);var n=r(272);t.a=Object(n.a)("flex")},770:function(e,t,r){"use strict";r(271);var n=r(272);t.a=Object(n.a)("layout")},836:function(e,t,r){"use strict";r.r(t);var n=r(614),o=r(120),c=r(111),l=r(92),d=r(377),f=r(556),h=r(1202),m=r(266),v=r(723),x=r(616),w=r(121),I=r(770),S=r(376),y=r(645),O=r(265),T=r(172),_=r(1001),R=r(2),k=r(20);r(61),r(54),r(211),r(8),r(591),r(44),r(592),r(593),r(594),r(595),r(596),r(597),r(598),r(599),r(600),r(601),r(602),r(603),r(604),r(605),r(606),r(607),r(46),r(76),r(89),r(17),r(15),r(16),r(22),r(14),r(23);function D(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function C(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?D(Object(source),!0).forEach((function(t){Object(R.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):D(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var E={data:function(){return{pollTypes:[{text:"Multi choice",value:"multi-choice"},{text:"Date",value:"date"},{text:"Single choice",value:"single-choice"}],success:null,error:null,modal:!1,modal2:!1,dialog:!1,valid:!0,isValid:!0,poll:{type:null,question:null,hint:null,options:{}},expireDate:"",expireTime:"",rules:{required:[function(e){return!!e||"Required Field"}]},contentRules:[function(e){return!!e||"Content is required"},function(e){return!!e&&e.length>=15&&e.length<=180||"Name must be greater than 15 and less than 180 characters"}]}},props:{value:{type:Boolean,default:!1}},watch:{poll:{handler:function(e){this.isChoice&&!e.options.choices&&(this.addChoice(),this.addChoice())},deep:!0},value:function(e){this.dialog=e},dialog:function(e){this.$emit("input",e)}},computed:{isChoice:function(){return"multi-choice"===this.poll.type||"single-choice"===this.poll.type},user:function(){return this.$store.state.authUser}},methods:{cancelHandler:function(){this.poll={type:null,question:null,options:{}},this.expireTime="",this.expireDate="",this.dialog=!1},clearChoice:function(e){var t=this;if(this.poll.options.choices.length<=2)return this.error="Must have atleast 2 choices",void setTimeout((function(){t.error=null}),2e3);this.poll.options.choices.splice(e,1),this.$forceUpdate()},addChoice:function(){this.poll.options&&this.poll.options.choices?this.poll.options.choices.push({value:"",count:0}):this.poll.options?this.poll.options.choices=[{value:"",count:0}]:this.poll&&(this.poll.options={choices:[{value:"",count:0}]}),this.$forceUpdate()},validateSubmit:function(){var e=this;return Object(k.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.$refs.form.validate(),!e.isChoice||e.poll.options.choices&&!(e.poll.options.choices.length<2)){t.next=5;break}return e.error="There must be atleast 2 choices.",setTimeout((function(){e.error=null}),2e3),t.abrupt("return");case 5:if(new Set(e.poll.options.choices.map((function(e){return e.value}))).size===e.poll.options.choices.length){t.next=10;break}return e.error="Duplicate choice found. Choices must be unique.",setTimeout((function(){e.error=null}),2e3),t.abrupt("return");case 10:if(!r){t.next=19;break}return t.prev=11,t.next=14,e.createPoll().then((function(){}));case 14:t.next=19;break;case 16:t.prev=16,t.t0=t.catch(11),e.error="Could not set user information";case 19:e.$refs.form.validate();case 20:case"end":return t.stop()}}),t,null,[[11,16]])})))()},createPoll:function(){var e=this;return Object(k.a)(regeneratorRuntime.mark((function t(){var r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=Date.now().toString(),data=C(C({},e.poll),{},{expireAt:Date.parse(e.expireDate+"T"+e.expireTime).toString(),creatorId:e.user.uid,createdAt:r,updatedAt:r}),t.next=4,e.$fire.firestore.collection("polls").add(data).then((function(t){var r=t.id;e.$emit("poll",C({id:r},data)),e.cancelHandler()})).catch((function(e){console.error("Error adding poll: ",e)}));case 4:case"end":return t.stop()}}),t)})))()},deletePoll:function(){var e=this;return Object(k.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$fire.firestore.collection("polls").doc(e.newsItem.id).delete().catch((function(e){console.error("Error deleting polls: ",e)}));case 2:r=e.news.map((function(e){return e.id})).indexOf(e.newsOriginalItem.id);try{e.news.splice(r,1)}catch(e){console.log("index not found.")}e.newsOriginalItem={};case 5:case"end":return t.stop()}}),t)})))()},editPoll:function(){var e=this;return Object(k.a)(regeneratorRuntime.mark((function t(){var r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.newsItem.content){t.next=2;break}return t.abrupt("return");case 2:return r=Date.now().toString(),data={content:e.newsItem.content,isPublished:e.newsItem.isPublished,creatorId:e.user.uid,createdAt:e.newsItem.createdAt,updatedAt:r},t.next=6,e.$fire.firestore.collection("polls").doc(e.newsItem.id).update(data).catch((function(e){console.error("Error editing news: ",e)}));case 6:e.newsOriginalItem.content=e.newsItem.content,e.newsOriginalItem.extractedContent=e.extractContent(e.newsItem.content),e.newsOriginalItem.isPublished=e.newsItem.isPublished,e.newsOriginalItem.creatorId=e.newsItem.creatorId,e.newsOriginalItem.createdAt=e.newsItem.createdAt,e.newsOriginalItem.updatedAt=e.newsItem.updatedAt,e.newsOriginalItem.createdDate=moment(parseInt(e.newsItem.createdAt)).format("YYYY-MM-D HH:mm:ss"),e.newsOriginalItem.updatedDate=moment(parseInt(e.newsItem.updatedAt)).format("YYYY-MM-D HH:mm:ss"),e.newsOriginalItem={},e.newsItem={};case 15:case"end":return t.stop()}}),t)})))()}}},j=r(65),component=Object(j.a)(E,(function(){var e=this,t=e._self._c;return t("div",[t(m.a,{staticStyle:{float:"right",position:"relative"},attrs:{persistent:"","offset-y":"","content-class":"mx-3","max-width":"800px",scrollable:""},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(n.a,{staticStyle:{position:"absolute",left:"50%","z-index":"100",bottom:"50px","max-width":"min(calc(100% - 40px), 400px)",transform:"translate(-50%, -50%)",margin:"0 0 auto"},attrs:{type:"success",value:!!e.success}},[e._v(e._s(e.success))]),e._v(" "),t(n.a,{staticStyle:{position:"absolute",left:"50%","z-index":"100",bottom:"50px","max-width":"min(calc(100% - 40px), 400px)",transform:"translate(-50%, -50%)",margin:"0 0 auto"},attrs:{type:"error",value:!!e.error}},[e._v(e._s(e.error))]),e._v(" "),t(c.a,{staticStyle:{height:"fit-content"}},[t(l.d,[t("span",{staticClass:"headline"},[e._v("\n          Add Poll\n        ")])]),e._v(" "),t(l.c,[t(x.a,{ref:"form",staticClass:"pt-30",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t(f.a,{staticStyle:{"max-width":"800px"}},[t(S.a,[t(d.a,{attrs:{cols:"12",md:"12"}},[t(I.a,{attrs:{row:"",wrap:""}},[t(v.a,{attrs:{xs11:"",sm5:""}},[t(m.a,{attrs:{width:"290px"},scopedSlots:e._u([{key:"activator",fn:function(r){var n=r.on;return[t(T.a,e._g({attrs:{label:"Select expiration date","prepend-icon":"event",readonly:"",rules:e.rules.required},model:{value:e.expireDate,callback:function(t){e.expireDate=t},expression:"expireDate"}},n))]}}]),model:{value:e.modal,callback:function(t){e.modal=t},expression:"modal"}},[e._v(" "),t(h.a,{attrs:{scrollable:"",actions:""},on:{input:function(t){e.modal=!1}},model:{value:e.expireDate,callback:function(t){e.expireDate=t},expression:"expireDate"}})],1)],1),e._v(" "),t(O.a),e._v(" "),t(v.a,{attrs:{xs11:"",sm5:""}},[t(m.a,{attrs:{fullwidth:"",width:"290px"},scopedSlots:e._u([{key:"activator",fn:function(r){var n=r.on;return[t(T.a,e._g({attrs:{label:"Select expiration time","prepend-icon":"access_time",readonly:"",rules:e.rules.required},model:{value:e.expireTime,callback:function(t){e.expireTime=t},expression:"expireTime"}},n))]}}]),model:{value:e.modal2,callback:function(t){e.modal2=t},expression:"modal2"}},[e._v(" "),t(_.a,{attrs:{persistent:!1,actions:""},model:{value:e.expireTime,callback:function(t){e.expireTime=t},expression:"expireTime"}})],1)],1)],1)],1),e._v(" "),t(d.a,[t(y.a,{attrs:{items:e.pollTypes,label:"Type of poll"},model:{value:e.poll.type,callback:function(t){e.$set(e.poll,"type",t)},expression:"poll.type"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",md:"12"}},[t(T.a,{staticClass:"input-group--focused",attrs:{name:"question",label:"Question",id:"question",placeholder:"Which of these is your best pet?",type:"text","multi-line":"",rows:"3",rules:e.rules.required},model:{value:e.poll.question,callback:function(t){e.$set(e.poll,"question",t)},expression:"poll.question"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",md:"12"}},[t(T.a,{staticClass:"input-group--focused",attrs:{name:"hint",label:"Hint",id:"hint",placeholder:"pssh here is some hint",type:"text","multi-line":"",rows:"3"},model:{value:e.poll.hint,callback:function(t){e.$set(e.poll,"hint",t)},expression:"poll.hint"}})],1),e._v(" "),e.isChoice&&e.poll.options.choices?t(d.a,{staticClass:"pa-0",attrs:{cols:"12"}},[e._l(e.poll.options.choices,(function(r,i){return t(S.a,{key:i,staticClass:"justify-center"},[t(d.a,{attrs:{cols:"8"}},[t(T.a,{attrs:{name:"choice",label:"Choice",id:"choice1",placeholder:"Choice",type:"text","multi-line":"",rows:"1",rules:e.rules.required},model:{value:r.value,callback:function(t){e.$set(r,"value",t)},expression:"choice.value"}})],1),e._v(" "),t(d.a,{attrs:{cols:"1"}},[t(o.a,{attrs:{text:"",icon:"",color:"red"},on:{click:function(t){return e.clearChoice(i)}}},[t(w.a,[e._v("clear")])],1)],1)],1)})),e._v(" "),t(S.a,[t(d.a,{staticClass:"d-flex justify-center"},[t(o.a,{staticClass:"ma-2",attrs:{fab:"",small:""},on:{click:e.addChoice}},[t(w.a,[e._v("add")])],1)],1)],1)],2):e._e()],1)],1)],1)],1),e._v(" "),t(l.a,[t(O.a),e._v(" "),t(o.a,{attrs:{color:"primary",disabled:!e.valid},on:{click:function(t){e.validateSubmit()}}},[e._v("\n          Save\n        ")]),e._v(" "),t(o.a,{attrs:{color:"primary",text:""},on:{click:e.cancelHandler}},[e._v("\n          Cancel")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);