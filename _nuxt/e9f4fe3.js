(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{813:function(e,t,r){"use strict";r.r(t);r(18),r(16),r(19),r(7),r(23),r(17),r(24);var o=r(1),n=r(22);r(62);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={name:"BlogEditPage",middleware:"auth",layout:"default",components:{BlogForm:r(594).default},data:function(){return{blog:{},id:"",isLoaded:!1}},validate:function(e){return void 0!==e.params.id},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$fire.firestore,t.prev=1,t.next=4,r.collection("blogs").doc(e.$route.params.id).get();case 4:if((o=t.sent).exists){t.next=8;break}return e.$nuxt.error({statusCode:404,message:"Blog not found"}),t.abrupt("return");case 8:e.blog=l({id:o.id},o.data()),console.log(e.blog),e.isLoaded=!0,t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),e.$nuxt.error({statusCode:404,message:"Blog not found"});case 16:case"end":return t.stop()}}),t,null,[[1,13]])})))()}},f=r(73),component=Object(f.a)(d,(function(){var e=this,t=e._self._c;return e.isLoaded?t("blog-form",{model:{value:e.blog,callback:function(t){e.blog=t},expression:"blog"}}):e._e()}),[],!1,null,"14d2cb2a",null);t.default=component.exports;installComponents(component,{BlogForm:r(594).default})}}]);