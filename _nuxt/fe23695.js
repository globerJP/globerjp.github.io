(window.webpackJsonp=window.webpackJsonp||[]).push([[61,43,47],{536:function(e,t,r){var content=r(540);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(26).default)("f3566dec",content,!0,{sourceMap:!1})},537:function(e,t,r){var content=r(542);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(26).default)("1a30734a",content,!0,{sourceMap:!1})},538:function(e,t,r){"use strict";r.r(t);var n={name:"LoadingSpinner"},o=(r(539),r(65)),component=Object(o.a)(n,(function(){this._self._c;return this._m(0)}),[function(){var e=this._self._c;return e("div",{staticClass:"text-center"},[e("div",{staticClass:"lds-ring"},[e("div"),e("div"),e("div"),e("div")])])}],!1,null,"5143ab22",null);t.default=component.exports},539:function(e,t,r){"use strict";r(536)},540:function(e,t,r){var n=r(25)(!1);n.push([e.i,".lds-ring[data-v-5143ab22]{display:inline-block;position:relative;width:80px;height:80px}.lds-ring div[data-v-5143ab22]{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:5px;border-radius:50%;-webkit-animation:lds-ring-5143ab22 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:lds-ring-5143ab22 1.2s cubic-bezier(.5,0,.5,1) infinite;border:5px solid transparent;border-top-color:#2196f3}.lds-ring div[data-v-5143ab22]:first-child{-webkit-animation-delay:-.45s;animation-delay:-.45s}.lds-ring div[data-v-5143ab22]:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.lds-ring div[data-v-5143ab22]:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}@-webkit-keyframes lds-ring-5143ab22{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes lds-ring-5143ab22{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""]),e.exports=n},541:function(e,t,r){"use strict";r(537)},542:function(e,t,r){var n=r(25)(!1);n.push([e.i,".spinner[data-v-b799d304]{display:flex;justify-content:center;margin-top:1rem;color:#add8e6}",""]),e.exports=n},543:function(e,t,r){"use strict";r.r(t);var n=r(245),o={},c=(r(541),r(65)),component=Object(c.a)(o,(function(){var e=this._self._c;return e("div",{staticClass:"spinner"},[e(n.a,{attrs:{size:"100",indeterminate:""}})],1)}),[],!1,null,"b799d304",null);t.default=component.exports},842:function(e,t,r){"use strict";r.r(t);var n=r(119),o=r(358),c=r(535),d=r(357),l=(r(91),r(18),r(16),r(17),r(7),r(22),r(15),r(23),r(21)),f=r(1),v=(r(61),r(538)),m=r(83);function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function y(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(f.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h={middleware:"auth",components:{Spinner:v.default},layout:"default",name:"profile",data:function(){return{email:"",country:"",expectedGraduationYear:"",firstName:"",lastName:"",major:"",university:"",degree:""}},computed:y({user:function(){return this.$store.state.authUser}},Object(m.e)({account:function(e){return e.account.ACCOUNT}})),created:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getInfo();case 2:case"end":return t.stop()}}),t)})))()},methods:y(y(y({},Object(m.b)({fetchAccount:"account/FETCH_ACCOUNT"})),Object(m.d)({setAccount:"account/SET_ACCOUNT"})),{},{getInfo:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchAccount();case 2:r=e.account,e.firstName=r.firstName,e.lastName=r.lastName,e.email=r.email,e.country=r.country,e.expectedGraduationYear=r.expectedGraduationYear,e.major=r.major,e.university=r.university,e.degree=r.degree;case 11:case"end":return t.stop()}}),t)})))()}})},O=r(65),component=Object(O.a)(h,(function(){var e=this,t=e._self._c;return t("div",[e.user?t(c.a,[t(d.a,[t(o.a,{attrs:{cols:"12",md:"12"}},[t("h1",[e._v("User Profile")]),e._v(" "),e.firstName||e.lastName?t("p",[e._v("Your name is "+e._s([e.firstName,e.lastName].join(" ")))]):e._e(),e._v(" "),t("p",[e._v("Your e-mail is "+e._s(e.user.email))]),e._v(" "),e.user.emailVerified?t("p",[e._v("Your e-mail is verified! ")]):e._e(),e._v(" "),e.country?t("p",[e._v("Your country is "+e._s(e.country))]):e._e(),e._v(" "),e.university?t("p",[e._v("Your university is "+e._s(e.university))]):e._e(),e._v(" "),e.expectedGraduationYear?t("p",[e._v("Your graduating year is "+e._s(e.expectedGraduationYear))]):e._e(),e._v(" "),e.major?t("p",[e._v("Your major is "+e._s(e.major))]):e._e(),e._v(" "),e.degree?t("p",[e._v("Your degree is "+e._s(e.degree))]):e._e()]),e._v(" "),t(o.a,[t(n.a,{attrs:{color:"white primary--text","nuxt-link":"",to:"profile/edit"}},[e._v("\n          Add/Edit info\n        ")])],1)],1)],1):t("Spinner",{attrs:{color:"white"}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Spinner:r(543).default})}}]);