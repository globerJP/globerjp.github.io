(window.webpackJsonp=window.webpackJsonp||[]).push([[72,41,56],{1205:function(e,t,r){"use strict";r.r(t);var n=r(120),o=r(372),d=r(553),l=r(371),c=(r(93),r(20)),f=(r(61),r(17),r(376),{middleware:"auth",components:{Spinner:r(556).default},layout:"default",name:"profile",asyncData:function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function r(){var n,o,d,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.store,o=e.$fire,r.next=3,o.firestore.collection("users").doc(n.state.authUser.uid).get();case 3:if(d=r.sent,l={},!d.exists){r.next=9;break}l=d.data(),r.next=18;break;case 9:return r.prev=9,l={email:n.state.authUser.email,country:"",expectedGraduationYear:"",firstName:"",lastName:"",major:"",university:"",degree:""},r.next=13,o.firestore.collection("users").doc(n.state.authUser.uid).set(l);case 13:r.next=18;break;case 15:r.prev=15,r.t0=r.catch(9),t.error="Could not set user information";case 18:if(!l||0!==Object.keys(l).length||Object.getPrototypeOf(l)!==Object.prototype){r.next=20;break}return r.abrupt("return",{email:"",country:"",expectedGraduationYear:"",firstName:"",lastName:"",major:"",university:"",degree:""});case 20:return r.abrupt("return",{email:l.email,country:l.country,expectedGraduationYear:l.expectedGraduationYear,firstName:l.firstName,lastName:l.lastName,major:l.major,university:l.university,degree:l.degree});case 21:case"end":return r.stop()}}),r,null,[[9,15]])})))()},computed:{user:function(){return this.$store.state.authUser}}}),m=r(65),component=Object(m.a)(f,(function(){var e=this,t=e._self._c;return t("div",[e.user?t(d.a,[t(l.a,[t(o.a,{attrs:{cols:"12",md:"12"}},[t("h1",[e._v("User Profile")]),e._v(" "),e.firstName||e.lastName?t("p",[e._v("Your name is "+e._s([e.firstName,e.lastName].join(" ")))]):e._e(),e._v(" "),t("p",[e._v("Your e-mail is "+e._s(e.user.email))]),e._v(" "),e.user.emailVerified?t("p",[e._v("Your e-mail is verified! ")]):e._e(),e._v(" "),e.country?t("p",[e._v("Your country is "+e._s(e.country))]):e._e(),e._v(" "),e.university?t("p",[e._v("Your university is "+e._s(e.university))]):e._e(),e._v(" "),e.expectedGraduationYear?t("p",[e._v("Your graduating year is "+e._s(e.expectedGraduationYear))]):e._e(),e._v(" "),e.major?t("p",[e._v("Your major is "+e._s(e.major))]):e._e(),e._v(" "),e.degree?t("p",[e._v("Your degree is "+e._s(e.degree))]):e._e()]),e._v(" "),t(o.a,[t(n.a,{attrs:{color:"white primary--text","nuxt-link":"",to:"profile/edit"}},[e._v("\n          Add/Edit info\n        ")])],1)],1)],1):t("Spinner",{attrs:{color:"white"}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Spinner:r(562).default})},554:function(e,t,r){var content=r(558);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(26).default)("6333d4fe",content,!0,{sourceMap:!1})},555:function(e,t,r){var content=r(561);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(26).default)("1a30734a",content,!0,{sourceMap:!1})},556:function(e,t,r){"use strict";r.r(t);var n={name:"LoadingSpinner"},o=(r(557),r(65)),component=Object(o.a)(n,(function(){this._self._c;return this._m(0)}),[function(){var e=this._self._c;return e("div",{staticClass:"text-center",staticStyle:{"margin-top":"10px"}},[e("div",{staticClass:"lds-ring"},[e("div"),e("div"),e("div"),e("div")])])}],!1,null,"6f49ae7c",null);t.default=component.exports},557:function(e,t,r){"use strict";r(554)},558:function(e,t,r){var n=r(25)(!1);n.push([e.i,".lds-ring[data-v-6f49ae7c]{display:inline-block;position:relative;width:80px;height:80px}.lds-ring div[data-v-6f49ae7c]{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:5px;border-radius:50%;-webkit-animation:lds-ring-6f49ae7c 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:lds-ring-6f49ae7c 1.2s cubic-bezier(.5,0,.5,1) infinite;border:5px solid transparent;border-top-color:#2196f3}.lds-ring div[data-v-6f49ae7c]:first-child{-webkit-animation-delay:-.45s;animation-delay:-.45s}.lds-ring div[data-v-6f49ae7c]:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.lds-ring div[data-v-6f49ae7c]:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}@-webkit-keyframes lds-ring-6f49ae7c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes lds-ring-6f49ae7c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""]),e.exports=n},560:function(e,t,r){"use strict";r(555)},561:function(e,t,r){var n=r(25)(!1);n.push([e.i,".spinner[data-v-b799d304]{display:flex;justify-content:center;margin-top:1rem;color:#add8e6}",""]),e.exports=n},562:function(e,t,r){"use strict";r.r(t);var n=r(247),o={},d=(r(560),r(65)),component=Object(d.a)(o,(function(){var e=this._self._c;return e("div",{staticClass:"spinner"},[e(n.a,{attrs:{size:"100",indeterminate:""}})],1)}),[],!1,null,"b799d304",null);t.default=component.exports}}]);