(window.webpackJsonp=window.webpackJsonp||[]).push([[15,11],{385:function(t,e,r){var content=r(389);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(25).default)("c86bcc6a",content,!0,{sourceMap:!1})},386:function(t,e,r){"use strict";r.r(e);var n={},o=(r(388),r(51)),c=r(55),l=r.n(c),f=r(174),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"spinner"},[e("v-progress-circular",{attrs:{size:"100",indeterminate:""}})],1)}),[],!1,null,"b799d304",null);e.default=component.exports;l()(component,{VProgressCircular:f.a})},388:function(t,e,r){"use strict";r(385)},389:function(t,e,r){var n=r(24)(!1);n.push([t.i,".spinner[data-v-b799d304]{display:flex;justify-content:center;margin-top:1rem;color:#add8e6}",""]),t.exports=n},595:function(t,e,r){"use strict";r.r(e);r(16),r(15),r(19),r(7),r(30),r(18),r(31);var n=r(1),o=r(386),c=r(83);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=f(f(f({middleware:"auth",components:{Spinner:o.default},layout:"default",name:"admin"},Object(c.b)({fetchAccount:"account/FETCH_ACCOUNT"})),Object(c.d)({setAccount:"account/SET_ACCOUNT"})),{},{computed:f(f({user:function(){return this.$store.state.authUser}},Object(c.e)({account:function(t){return t.account.ACCOUNT}})),Object(c.c)({isAdmin:"account/ISADMIN"}))}),v=r(51),O=r(55),m=r.n(O),j=r(372),y=r(587),h=r(382),w=r(588),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.user?r("v-container",[t.isAdmin?r("v-row",[r("v-col",{attrs:{cols:"12",md:"12"}},[r("h1",[t._v("User Profile")]),t._v(" "),r("p",[t._v("You are the admin")])]),t._v(" "),r("v-col",[r("v-btn",{attrs:{color:"white primary--text","nuxt-link":"",to:"/admin/events"}},[t._v("\n          Go to your events page\n        ")])],1)],1):r("v-row",[t._v("\n      You are not an admin.\n      Go to "),r("NuxtLink",{staticClass:"primary--text",attrs:{to:"/dashboard"}},[t._v("\n        your page\n      ")])],1)],1):r("Spinner",{attrs:{color:"white"}})],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{Spinner:r(386).default}),m()(component,{VBtn:j.a,VCol:y.a,VContainer:h.a,VRow:w.a})}}]);