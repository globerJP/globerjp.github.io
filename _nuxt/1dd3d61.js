(window.webpackJsonp=window.webpackJsonp||[]).push([[24,15],{385:function(e,t,r){var content=r(388);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(25).default)("c86bcc6a",content,!0,{sourceMap:!1})},386:function(e,t,r){"use strict";r.r(t);var n={},o=(r(387),r(51)),c=r(55),l=r.n(c),f=r(174),component=Object(o.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"spinner"},[t("v-progress-circular",{attrs:{size:"100",indeterminate:""}})],1)}),[],!1,null,"b799d304",null);t.default=component.exports;l()(component,{VProgressCircular:f.a})},387:function(e,t,r){"use strict";r(385)},388:function(e,t,r){var n=r(24)(!1);n.push([e.i,".spinner[data-v-b799d304]{display:flex;justify-content:center;margin-top:1rem;color:#add8e6}",""]),e.exports=n},633:function(e,t,r){"use strict";r.r(t);r(16),r(15),r(19),r(7),r(30),r(18),r(31);var n=r(10),o=r(1),c=(r(45),r(386)),l=r(83);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={middleware:"auth",components:{Spinner:c.default},layout:"default",name:"profile",data:function(){return{email:"",country:"",expectedGraduationYear:"",firstName:"",lastName:"",major:"",university:"",degree:""}},computed:d({user:function(){return this.$store.state.authUser}},Object(l.e)({account:function(e){return e.account.ACCOUNT}})),created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getInfo();case 2:case"end":return t.stop()}}),t)})))()},methods:d(d(d({},Object(l.b)({fetchAccount:"account/FETCH_ACCOUNT"})),Object(l.d)({setAccount:"account/SET_ACCOUNT"})),{},{getInfo:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchAccount();case 2:r=e.account,e.firstName=r.firstName,e.lastName=r.lastName,e.email=r.email,e.country=r.country,e.expectedGraduationYear=r.expectedGraduationYear,e.major=r.major,e.university=r.university,e.degree=r.degree;case 11:case"end":return t.stop()}}),t)})))()}})},m=r(51),_=r(55),y=r.n(_),O=r(373),j=r(615),h=r(382),w=r(616),component=Object(m.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.user?r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12",md:"12"}},[r("h1",[e._v("User Profile")]),e._v(" "),e.firstName||e.lastName?r("p",[e._v("Your name is "+e._s([e.firstName,e.lastName].join(" ")))]):e._e(),e._v(" "),r("p",[e._v("Your e-mail is "+e._s(e.user.email))]),e._v(" "),e.user.emailVerified?r("p",[e._v("Your e-mail is verified! ")]):e._e(),e._v(" "),e.country?r("p",[e._v("Your country is "+e._s(e.country))]):e._e(),e._v(" "),e.university?r("p",[e._v("Your university is "+e._s(e.university))]):e._e(),e._v(" "),e.expectedGraduationYear?r("p",[e._v("Your graduating year is "+e._s(e.expectedGraduationYear))]):e._e(),e._v(" "),e.major?r("p",[e._v("Your major is "+e._s(e.major))]):e._e(),e._v(" "),e.degree?r("p",[e._v("Your degree is "+e._s(e.degree))]):e._e()]),e._v(" "),r("v-col",[r("v-btn",{attrs:{color:"white primary--text","nuxt-link":"",to:"profile/edit"}},[e._v("\n          Add/Edit info\n        ")])],1)],1)],1):r("Spinner",{attrs:{color:"white"}})],1)}),[],!1,null,null,null);t.default=component.exports;y()(component,{Spinner:r(386).default}),y()(component,{VBtn:O.a,VCol:j.a,VContainer:h.a,VRow:w.a})}}]);