(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1042:function(e,t,r){"use strict";r.r(t);r(17),r(14),r(16),r(8),r(22),r(15),r(23);var n=r(1),o=r(21);r(61);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={name:"BlogEditPage",middleware:"auth",layout:"default",components:{BlogForm:r(695).default},data:function(){return{blog:{},id:"",isLoaded:!1}},validate:function(e){return void 0!==e.params.id},mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$fire.firestore,t.prev=1,t.next=4,r.collection("blogs").doc(e.$route.params.id).get();case 4:if((n=t.sent).exists){t.next=8;break}return e.$nuxt.error({statusCode:404,message:"Blog not found"}),t.abrupt("return");case 8:e.blog=l({id:n.id},n.data()),e.isLoaded=!0,t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),e.$nuxt.error({statusCode:404,message:"Blog not found"});case 15:case"end":return t.stop()}}),t,null,[[1,12]])})))()}},f=r(65),component=Object(f.a)(d,(function(){var e=this,t=e._self._c;return e.isLoaded?t("blog-form",{model:{value:e.blog,callback:function(t){e.blog=t},expression:"blog"}}):e._e()}),[],!1,null,"1fb22cda",null);t.default=component.exports;installComponents(component,{BlogForm:r(695).default})}}]);