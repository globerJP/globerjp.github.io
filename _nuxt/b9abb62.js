(window.webpackJsonp=window.webpackJsonp||[]).push([[3,23,40,55],{1010:function(e,n,t){"use strict";t(17),t(14),t(16),t(8),t(22),t(15),t(23);var o=t(2),r=(t(213),t(214),t(814),t(81)),l=t(12);function c(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}function A(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(n){Object(o.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}n.a=r.a.extend({name:"v-expansion-panels",provide:function(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes:function(){return A(A({},r.a.options.computed.classes.call(this)),{},{"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile})}},created:function(){this.$attrs.hasOwnProperty("expand")&&Object(l.a)("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"==typeof this.value[0]&&Object(l.a)(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem:function(e,n){var t=this.getValue(e,n),o=this.getValue(e,n+1);e.isActive=this.toggleMethod(t),e.nextIsActive=this.toggleMethod(o)}}})},1011:function(e,n,t){"use strict";t(17),t(14),t(16),t(8),t(22),t(15),t(23);var o=t(2),r=t(127),l=t(171),c=t(4),A=t(9);function d(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}n.a=Object(A.a)(Object(r.a)("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(l.b)("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:function(){return{content:null,header:null,nextIsActive:!1}},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(n){Object(o.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}({"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled},this.groupClasses)},isDisabled:function(){return this.expansionPanels.disabled||this.disabled},isReadonly:function(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent:function(e){this.content=e},unregisterContent:function(){this.content=null},registerHeader:function(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader:function(){this.header=null},onClick:function(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle:function(){var e=this;this.$nextTick((function(){return e.$emit("change")}))}},render:function(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(c.t)(this))}})},1012:function(e,n,t){"use strict";t(17),t(14),t(16),t(8),t(22),t(15),t(23);var o=t(2),r=t(147),l=t(82),c=t(37),A=t(171),d=t(126),h=t(4),f=t(9);function x(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(n){Object(o.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}var m=Object(f.a)(c.a,Object(A.a)("expansionPanel","v-expansion-panel-header","v-expansion-panel"));n.a=m.extend().extend({name:"v-expansion-panel-header",directives:{ripple:d.a},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{hasMousedown:!1}},computed:{classes:function(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive:function(){return this.expansionPanel.isActive},isDisabled:function(){return this.expansionPanel.isDisabled},isReadonly:function(){return this.expansionPanel.isReadonly}},created:function(){this.expansionPanel.registerHeader(this)},beforeDestroy:function(){this.expansionPanel.unregisterHeader()},methods:{onClick:function(e){this.$emit("click",e)},genIcon:function(){var e=Object(h.t)(this,"actions")||[this.$createElement(l.a,this.expandIcon)];return this.$createElement(r.c,[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render:function(e){var n=this;return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:v(v({},this.$listeners),{},{click:this.onClick,mousedown:function(){return n.hasMousedown=!0},mouseup:function(){return n.hasMousedown=!1}})}),[Object(h.t)(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}})},1013:function(e,n,t){"use strict";var o=t(147),r=t(184),l=t(37),c=t(171),A=t(4),d=t(9),h=Object(d.a)(r.a,l.a,Object(c.a)("expansionPanel","v-expansion-panel-content","v-expansion-panel"));n.a=h.extend().extend({name:"v-expansion-panel-content",data:function(){return{isActive:!1}},computed:{parentIsActive:function(){return this.expansionPanel.isActive}},watch:{parentIsActive:{immediate:!0,handler:function(e,n){var t=this;e&&(this.isBooted=!0),null==n?this.isActive=e:this.$nextTick((function(){return t.isActive=e}))}}},created:function(){this.expansionPanel.registerContent(this)},beforeDestroy:function(){this.expansionPanel.unregisterContent()},render:function(e){var n=this;return e(o.a,this.showLazyContent((function(){return[e("div",n.setBackgroundColor(n.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:n.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},Object(A.t)(n))])]})))}})},1014:function(e){e.exports=JSON.parse('{"faqs":[]}')},1015:function(e,n,t){"use strict";t(898)},1016:function(e,n,t){var o=t(25)(!1);o.push([e.i,".container[data-v-2126c68b]{padding:1rem 20px;max-width:100%;height:100%}.container[data-v-2126c68b],.container-inner[data-v-2126c68b]{display:flex;align-items:center;justify-content:center}.container-inner[data-v-2126c68b]{max-width:800px;margin-top:50px;width:100%;flex-direction:column}.container-title[data-v-2126c68b]{font-size:40px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.38;letter-spacing:normal;text-align:center;color:grey;padding-bottom:25px}@media screen and (max-width:800px){.container-title[data-v-2126c68b]{font-size:30px}}.icon[data-v-2126c68b]{font-size:30px;margin-right:22px;color:grey}.faq-title[data-v-2126c68b]{display:flex;align-items:flex-start;justify-content:flex-start}.faq-title span[data-v-2126c68b]{font-size:20px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.35;letter-spacing:normal;text-align:left;color:#1d90fc}@media screen and (max-width:800px){.faq-title span[data-v-2126c68b]{font-size:18px}}.v-expansion-panel[data-v-2126c68b]:before{box-shadow:none!important}.v-expansion-panel[data-v-2126c68b]{background-color:transparent!important}.expansion-text .expansion-text-inner span[data-v-2126c68b]{font-size:18px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.33;letter-spacing:normal;text-align:left;color:grey}@media screen and (max-width:800px){.expansion-text .expansion-text-inner span[data-v-2126c68b]{font-size:16px;padding:0}}",""]),e.exports=o},553:function(e,n,t){var content=t(557);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(26).default)("dedf7bda",content,!0,{sourceMap:!1})},554:function(e,n,t){var content=t(560);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(26).default)("1a30734a",content,!0,{sourceMap:!1})},555:function(e,n,t){"use strict";t.r(n);var o={name:"LoadingSpinner"},r=(t(556),t(65)),component=Object(r.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var e=this._self._c;return e("div",{staticClass:"text-center",staticStyle:{"margin-top":"10px"}},[e("div",{staticClass:"glober-gif"},[e("img",{attrs:{contain:"",src:"/img/glober_loading.gif"}})])])}],!1,null,"31406e9c",null);n.default=component.exports},556:function(e,n,t){"use strict";t(553)},557:function(e,n,t){var o=t(25)(!1);o.push([e.i,".glober-gif[data-v-31406e9c]{display:inline-block;position:relative;width:80px;height:80px}.glober-gif img[data-v-31406e9c]{width:100%;height:100%}.lds-ring[data-v-31406e9c]{display:inline-block;position:relative;width:80px;height:80px}.lds-ring div[data-v-31406e9c]{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:5px;border-radius:50%;-webkit-animation:lds-ring-31406e9c 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:lds-ring-31406e9c 1.2s cubic-bezier(.5,0,.5,1) infinite;border:5px solid transparent;border-top-color:#2196f3}.lds-ring div[data-v-31406e9c]:first-child{-webkit-animation-delay:-.45s;animation-delay:-.45s}.lds-ring div[data-v-31406e9c]:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.lds-ring div[data-v-31406e9c]:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}@-webkit-keyframes lds-ring-31406e9c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes lds-ring-31406e9c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""]),e.exports=o},559:function(e,n,t){"use strict";t(554)},560:function(e,n,t){var o=t(25)(!1);o.push([e.i,".spinner[data-v-b799d304]{display:flex;justify-content:center;margin-top:1rem;color:#add8e6}",""]),e.exports=o},561:function(e,n,t){"use strict";t.r(n);var o=t(247),r={},l=(t(559),t(65)),component=Object(l.a)(r,(function(){var e=this._self._c;return e("div",{staticClass:"spinner"},[e(o.a,{attrs:{size:"100",indeterminate:""}})],1)}),[],!1,null,"b799d304",null);n.default=component.exports},572:function(e,n,t){"use strict";t.r(n);var o=t(120),r=t(1011),l=t(1013),c=t(1012),A=t(1010),d=t(121),h=(t(55),t(8),t(39),t(70),t(44),t(34),t(14),t(78),t(84),t(46),t(17),t(16),t(22),t(15),t(23),t(2)),f=t(20),x=(t(61),t(621),t(1014));function v(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(n){Object(h.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}function y(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return C(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return C(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return l=e.done,e},e:function(e){c=!0,r=e},f:function(){try{l||null==t.return||t.return()}finally{if(c)throw r}}}}function C(e,n){(null==n||n>e.length)&&(n=e.length);for(var i=0,t=new Array(n);i<n;i++)t[i]=e[i];return t}var O={components:{Spinner:t(555).default},data:function(){return{openPanel:[],pageLoaded:!1,open:[],faqs:x.faqs,teasers:[],blogs:[],count:0,eof:!1,isLoading:!1,lastDoc:null,batchSize:2,changed:"",noBlogs:!1}},props:{category:{type:String,required:!0},type:{type:String,required:!0},pageTitle:{type:String,required:!0}},mounted:function(){var e=this;return Object(f.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.loadBlogs();case 2:window.addEventListener("scroll",e.loadMore);case 3:case"end":return n.stop()}}),n)})))()},destroyed:function(){window.removeEventListener("scroll",this.loadMore)},methods:{launchPanel:function(e){return Object(f.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},loadBlogs:function(){var e=this;return Object(f.a)(regeneratorRuntime.mark((function n(){var t,o,r,l,c,A;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.isLoading&&!e.eof){n.next=2;break}return n.abrupt("return");case 2:return e.isLoading=!0,t=e.$fire.firestore,o=t.collection("blogs").where(e.type,"==",e.category).where("published","==",!0).orderBy("created","desc").limit(e.batchSize),e.lastDoc&&(o=o.startAfter(e.lastDoc)),n.next=8,o.get();case 8:if(r=n.sent,e.eof=r.empty,r.size>0){e.lastDoc=r.docs[r.docs.length-1],l=y(r.docs);try{for(l.s();!(c=l.n()).done;)A=c.value,e.blogs.push(m({id:A.id},A.data())),e.open.push(!0),e.openPanel.push(e.count),e.count+=1}catch(e){l.e(e)}finally{l.f()}}e.blogs.length||(e.noBlogs=!0),e.isLoading=!1,e.pageLoaded=!0;case 14:case"end":return n.stop()}}),n)})))()},loadMore:function(){!(this.$el.getBoundingClientRect().bottom<=(window.innerHeight||document.documentElement.clientHeight)+100)||this.isLoading||this.eof||this.loadBlogs()},addBlog:function(e){var n=this;return Object(f.a)(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.teasers[e].blog){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,n.$fire.firestore.collection("blogs").doc(n.teasers[e].id).get();case 4:(o=t.sent).exists&&(n.teasers[e]=m(m({},n.teasers[e]),{},{blog:m({id:o.id},o.data())}),n.changed=n.teasers[e].id);case 6:case"end":return t.stop()}}),t)})))()},toggle:function(e){this.loadBlogs(),this.open[e]=!this.open[e],this.$forceUpdate()},accordionClasses:function(e){return this.open[e]?"is-open":"is-closed"}},layout:"home"},j=(t(1015),t(65)),component=Object(j.a)(O,(function(){var e=this,n=e._self._c;return n("div",{staticClass:"d-flex align-center flex-column",attrs:{justify:"center"}},[e.pageLoaded?n("div",{staticClass:"container-inner d-flex flex-column",attrs:{justify:"center"}},[n("span",{staticClass:"container-title pa-3"},[e._v(e._s(e.pageTitle))]),e._v(" "),e.noBlogs?n("span",{staticClass:"mb-10"},[e._v("No Contents yet. Coming Soon!")]):n(A.a,{staticStyle:{"z-index":"0"},attrs:{flat:"",accordion:"",multiple:""},model:{value:e.openPanel,callback:function(n){e.openPanel=n},expression:"openPanel"}},e._l(e.blogs,(function(t,o){return n(r.a,{key:t.id},[n(c.a,{attrs:{id:t.id,"disable-icon-rotate":"",ripple:""},on:{click:function(n){return e.toggle(o)}},scopedSlots:e._u([{key:"actions",fn:function(){return[n(d.a)]},proxy:!0}],null,!0)},[n("span",{staticClass:"faq-title"},[e.open[o]?n(d.a,{staticClass:"icon minus"},[e._v("mdi-minus-circle-outline")]):n(d.a,{staticClass:"icon plus"},[e._v("mdi-plus-circle-outline")]),e._v(" "),n("span",[e._v("\n              "+e._s(t.title)+"\n            ")])],1)]),e._v(" "),n(l.a,{staticClass:"expansion-text"},[n("div",{staticClass:"expansion-text-inner"},[n("blog-details",{attrs:{teaser:t,changed:e.changed,prev:null,next:null}})],1)])],1)})),1),e._v(" "),e.eof?n(o.a,{staticClass:"mb-10 primary white--text",attrs:{target:"_blank",href:"https://docs.google.com/forms/d/e/1FAIpQLSchlVo4KUWEHr2IWrAJ2gVFIVtEchwHyc12bYTYk3jerWtiIw/viewform?usp=pp_url"}},[e._v("Ask us your questions")]):e._e()],1):e._e(),e._v(" "),!e.pageLoaded||e.isLoading?n("Spinner",{attrs:{color:"blue"}}):e._e()],1)}),[],!1,null,"2126c68b",null);n.default=component.exports;installComponents(component,{BlogDetails:t(621).default,Spinner:t(561).default})},603:function(e,n,t){var content=t(675);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(26).default)("50385a29",content,!0,{sourceMap:!1})},604:function(e,n,t){var content=t(677);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(26).default)("37126c70",content,!0,{sourceMap:!1})},621:function(e,n,t){"use strict";t.r(n);var o=t(612),r=t(248),l=(t(267),t(55),t(34),t(66),t(8),t(15),t(555)),c=t(794),A=t.n(c),d=t(795),h=t.n(d),f=t(796),x=t.n(f),v=t(797),m=t.n(v),y=t(798),C=t.n(y),O=t(799),j=t.n(O),w=t(800),I=t.n(w),L=t(801),J=t.n(L),k=t(802),W=t.n(k),B={name:"BlogDetails",components:{Spinner:l.default},data:function(){return{lazyGif:"data:image/gif;base64,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",blog:{title:"",body:"",tags:[]}}},props:{teaser:{type:Object,required:!0},prev:{type:Object,default:null},next:{type:Object,default:null},changed:{type:String,default:""}},computed:{tags:function(){return this.blog.tags.slice(0).sort()}},watch:{},methods:{replaceUrls:function(e){return e?e.replace(/href="([^\'\"]+)/g,(function(e){return' target="_blank" '+e})):""}},mounted:function(){this.blog=this.teaser,this.blog.body=this.replaceUrls(this.teaser.body),A.a.registerLanguage("javascript",m.a),A.a.registerLanguage("css",x.a),A.a.registerLanguage("xml",J.a),A.a.registerLanguage("php",C.a),A.a.registerLanguage("yaml",W.a),A.a.registerLanguage("sql",I.a),A.a.registerLanguage("bash",h.a),A.a.registerLanguage("shell",j.a),this.$el.querySelectorAll("pre code").forEach((function(e){A.a.highlightBlock(e)}))}},E=(t(674),t(676),t(65)),component=Object(E.a)(B,(function(){var e=this,n=e._self._c;return n("div",[e.teaser?n("article",{staticClass:"blog",staticStyle:{width:"calc(100vw-30px)","max-width":"min(100%,800px)"}},[n("div",{staticClass:"mb-5"},[n("div",{staticClass:"text-xs uppercase font-semibold text-gray-600 mb-1 d-flex flex-wrap"},e._l(e.tags,(function(t){return n(o.a,{key:t,staticClass:"my-1 ml-0 mr-2 d-flex flex-row"},[e._v("\n          "+e._s(t.toUpperCase())+"\n        ")])})),1),e._v(" "),e.blog.lead?n("h2",{staticClass:"font-sans text-gray-700 font-light"},[e._v("\n        "+e._s(e.blog.lead)+"\n      ")]):e._e(),e._v(" "),n("div",{staticClass:"text-gray-600 text-xs font-light"},[e._v("\n        "+e._s(e._f("toOnlyDate")(e.blog.created))+"\n      ")])]),e._v(" "),e.blog.imageUrl?n("figure",{staticClass:"mb-5",staticStyle:{"min-height":"350px"}},[n(r.a,{staticStyle:{"max-height":"350px",height:"100%",width:"100%"},attrs:{transition:"xxx",contain:"",src:e.blog.imageUrl,"lazy-src":e.lazyGif,alt:e.blog.imageAlt||e.blog.title}}),e._v(" "),e.blog.imageCaption?n("figcaption",{staticClass:"text-center text-gray-600 text-sm my-2",domProps:{innerHTML:e._s(e.blog.imageCaption)}}):e._e()],1):e._e(),e._v(" "),n("div",{staticClass:"content",staticStyle:{"word-break":"break-word"},domProps:{innerHTML:e._s(e.blog.body)}}),e._v(" "),n("div",{staticClass:"clearfix mt-10 text-xs font-semibold uppercase"},[e.prev?n("nuxt-link",{staticClass:"float-left no-underline col-6 break-normal pr-5",attrs:{to:{name:"blog-id",params:{id:e.prev.id}}}},[e._v("\n        < "+e._s(e.prev.title)+"\n      ")]):e._e(),e._v(" "),e.next?n("nuxt-link",{staticClass:"float-right no-underline col-6 break-normal pl-5",attrs:{to:{name:"blog-id",params:{id:e.next.id}}}},[e._v("\n        "+e._s(e.next.title)+" >\n      ")]):e._e()],1)]):n("Spinner",{attrs:{color:"blue"}})],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Spinner:t(561).default})},674:function(e,n,t){"use strict";t(603)},675:function(e,n,t){var o=t(25)(!1);o.push([e.i,'.disable-tap-zoom,body{touch-action:manipulation!important}.xxx-enter-active{transition:opacity .3s ease-in-out}.xxx-leave-active{transition:none}.xxx-enter,.xxx-leave,.xxx-leave-to{opacity:0}.xxx-enter-to{opacity:1}h1,h2,h3{margin-bottom:16px}.content img{background-image:url("data:image/gif;base64,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")}',""]),e.exports=o},676:function(e,n,t){"use strict";t(604)},677:function(e,n,t){var o=t(25)(!1);o.push([e.i,"blockquote{border-left:.25em solid #dfe2e5;color:#6a737d;padding-left:1em;margin:20px 0!important}.content table{border-collapse:collapse;table-layout:fixed;width:100%;margin:0;overflow:hidden}.content table th{font-weight:700;text-align:left}.content table td,.content table th{min-width:1em;border:2px solid grey;padding:3px 5px;vertical-align:top;box-sizing:border-box;position:relative}.content table td{display:flex;justify-content:center;align-items:center}.content table td h1,.content table td h2,.content table td h3,.content table td h4,.content table td h5{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.content img{-o-object-fit:contain;object-fit:contain;max-width:100%;max-height:350px;display:block;margin-left:auto;margin-right:auto}",""]),e.exports=o},814:function(e,n,t){var content=t(815);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(26).default)("48751daa",content,!0,{sourceMap:!1})},815:function(e,n,t){var o=t(25)(!1);o.push([e.i,'.theme--light.v-expansion-panels .v-expansion-panel{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-expansion-panels .v-expansion-panel--disabled{color:rgba(0,0,0,.38)}.theme--light.v-expansion-panels .v-expansion-panel:not(:first-child):after{border-color:rgba(0,0,0,.12)}.theme--light.v-expansion-panels .v-expansion-panel-header .v-expansion-panel-header__icon .v-icon{color:rgba(0,0,0,.54)}.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:hover:before{opacity:.04}.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:before,.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:hover:before,.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:focus:before{opacity:.12}.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:focus:before{opacity:.16}.theme--light.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover:before{opacity:.04}.theme--dark.v-expansion-panels .v-expansion-panel{background-color:#1e1e1e;color:#fff}.theme--dark.v-expansion-panels .v-expansion-panel--disabled{color:hsla(0,0%,100%,.5)}.theme--dark.v-expansion-panels .v-expansion-panel:not(:first-child):after{border-color:hsla(0,0%,100%,.12)}.theme--dark.v-expansion-panels .v-expansion-panel-header .v-expansion-panel-header__icon .v-icon{color:#fff}.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:hover:before{opacity:.08}.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:before,.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:hover:before,.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:focus:before{opacity:.24}.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:focus:before{opacity:.32}.theme--dark.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover:before{opacity:.08}.v-expansion-panels{border-radius:4px;display:flex;flex-wrap:wrap;justify-content:center;list-style-type:none;padding:0;width:100%;z-index:1}.v-expansion-panels>*{cursor:auto}.v-expansion-panels>:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.v-expansion-panels>:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--active{border-radius:4px}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--active+.v-expansion-panel{border-top-left-radius:4px;border-top-right-radius:4px}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--next-active{border-bottom-left-radius:4px;border-bottom-right-radius:4px}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--next-active .v-expansion-panel-header{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-expansion-panel{flex:1 0 100%;max-width:100%;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-expansion-panel:before{border-radius:inherit;bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:-1;transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-expansion-panel:not(:first-child):after{border-top:thin solid;content:"";left:0;position:absolute;right:0;top:0;transition:border-color .2s cubic-bezier(.4,0,.2,1),opacity .2s cubic-bezier(.4,0,.2,1)}.v-expansion-panel--disabled .v-expansion-panel-header{pointer-events:none}.v-expansion-panel--active+.v-expansion-panel,.v-expansion-panel--active:not(:first-child){margin-top:16px}.v-expansion-panel--active+.v-expansion-panel:after,.v-expansion-panel--active:not(:first-child):after{opacity:0}.v-expansion-panel--active>.v-expansion-panel-header{min-height:64px}.v-expansion-panel--active>.v-expansion-panel-header--active .v-expansion-panel-header__icon:not(.v-expansion-panel-header__icon--disable-rotate) .v-icon{transform:rotate(-180deg)}.v-expansion-panel-header__icon{display:inline-flex;margin-bottom:-4px;margin-top:-4px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-application--is-ltr .v-expansion-panel-header__icon{margin-left:auto}.v-application--is-rtl .v-expansion-panel-header__icon{margin-right:auto}.v-expansion-panel-header{align-items:center;border-top-left-radius:inherit;border-top-right-radius:inherit;display:flex;font-size:.9375rem;line-height:1;min-height:48px;outline:none;padding:16px 24px;position:relative;transition:min-height .3s cubic-bezier(.25,.8,.5,1);width:100%}.v-application--is-ltr .v-expansion-panel-header{text-align:left}.v-application--is-rtl .v-expansion-panel-header{text-align:right}.v-expansion-panel-header:not(.v-expansion-panel-header--mousedown):focus:before{opacity:.12}.v-expansion-panel-header:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-expansion-panel-header>:not(.v-expansion-panel-header__icon){flex:1 1 auto}.v-expansion-panel-content{display:flex}.v-expansion-panel-content__wrap{padding:0 24px 16px;flex:1 1 auto;max-width:100%}.v-expansion-panels--accordion>.v-expansion-panel{margin-top:0}.v-expansion-panels--accordion>.v-expansion-panel:after{opacity:1}.v-expansion-panels--popout>.v-expansion-panel{max-width:calc(100% - 32px)}.v-expansion-panels--popout>.v-expansion-panel--active{max-width:calc(100% + 16px)}.v-expansion-panels--inset>.v-expansion-panel{max-width:100%}.v-expansion-panels--inset>.v-expansion-panel--active{max-width:calc(100% - 32px)}.v-expansion-panels--flat>.v-expansion-panel:after{border-top:none}.v-expansion-panels--flat>.v-expansion-panel:before{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-expansion-panels--tile,.v-expansion-panels--tile>.v-expansion-panel:before{border-radius:0}',""]),e.exports=o},898:function(e,n,t){var content=t(1016);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(26).default)("7f3e2c71",content,!0,{sourceMap:!1})}}]);