(window.webpackJsonp=window.webpackJsonp||[]).push([[2,17,49,54],{539:function(e,n,t){var content=t(543);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(26).default)("6333d4fe",content,!0,{sourceMap:!1})},540:function(e,n,t){var content=t(545);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(26).default)("1a30734a",content,!0,{sourceMap:!1})},541:function(e,n,t){"use strict";t.r(n);var o={name:"LoadingSpinner"},r=(t(542),t(65)),component=Object(r.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var e=this._self._c;return e("div",{staticClass:"text-center",staticStyle:{"margin-top":"10px"}},[e("div",{staticClass:"lds-ring"},[e("div"),e("div"),e("div"),e("div")])])}],!1,null,"6f49ae7c",null);n.default=component.exports},542:function(e,n,t){"use strict";t(539)},543:function(e,n,t){var o=t(25)(!1);o.push([e.i,".lds-ring[data-v-6f49ae7c]{display:inline-block;position:relative;width:80px;height:80px}.lds-ring div[data-v-6f49ae7c]{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:5px;border-radius:50%;-webkit-animation:lds-ring-6f49ae7c 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:lds-ring-6f49ae7c 1.2s cubic-bezier(.5,0,.5,1) infinite;border:5px solid transparent;border-top-color:#2196f3}.lds-ring div[data-v-6f49ae7c]:first-child{-webkit-animation-delay:-.45s;animation-delay:-.45s}.lds-ring div[data-v-6f49ae7c]:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.lds-ring div[data-v-6f49ae7c]:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}@-webkit-keyframes lds-ring-6f49ae7c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes lds-ring-6f49ae7c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""]),e.exports=o},544:function(e,n,t){"use strict";t(540)},545:function(e,n,t){var o=t(25)(!1);o.push([e.i,".spinner[data-v-b799d304]{display:flex;justify-content:center;margin-top:1rem;color:#add8e6}",""]),e.exports=o},546:function(e,n,t){"use strict";t.r(n);var o=t(246),r={},l=(t(544),t(65)),component=Object(l.a)(r,(function(){var e=this._self._c;return e("div",{staticClass:"spinner"},[e(o.a,{attrs:{size:"100",indeterminate:""}})],1)}),[],!1,null,"b799d304",null);n.default=component.exports},549:function(e,n,t){"use strict";t.r(n);var o=t(120),r=(t(17),t(14),t(16),t(8),t(22),t(15),t(23),t(1)),l=t(124),c=t(171),d=t(4),h=t(9);function f(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}var v=Object(h.a)(Object(l.a)("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(c.b)("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:function(){return{content:null,header:null,nextIsActive:!1}},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(n){Object(r.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}({"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled},this.groupClasses)},isDisabled:function(){return this.expansionPanels.disabled||this.disabled},isReadonly:function(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent:function(e){this.content=e},unregisterContent:function(){this.content=null},registerHeader:function(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader:function(){this.header=null},onClick:function(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle:function(){var e=this;this.$nextTick((function(){return e.$emit("change")}))}},render:function(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(d.t)(this))}}),x=t(147),m=t(198),y=t(37),w=Object(h.a)(m.a,y.a,Object(c.a)("expansionPanel","v-expansion-panel-content","v-expansion-panel")).extend().extend({name:"v-expansion-panel-content",data:function(){return{isActive:!1}},computed:{parentIsActive:function(){return this.expansionPanel.isActive}},watch:{parentIsActive:{immediate:!0,handler:function(e,n){var t=this;e&&(this.isBooted=!0),null==n?this.isActive=e:this.$nextTick((function(){return t.isActive=e}))}}},created:function(){this.expansionPanel.registerContent(this)},beforeDestroy:function(){this.expansionPanel.unregisterContent()},render:function(e){var n=this;return e(x.a,this.showLazyContent((function(){return[e("div",n.setBackgroundColor(n.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:n.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},Object(d.t)(n))])]})))}}),O=t(80),j=t(126);function _(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}function k(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(n){Object(r.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}var P=Object(h.a)(y.a,Object(c.a)("expansionPanel","v-expansion-panel-header","v-expansion-panel")).extend().extend({name:"v-expansion-panel-header",directives:{ripple:j.a},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{hasMousedown:!1}},computed:{classes:function(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive:function(){return this.expansionPanel.isActive},isDisabled:function(){return this.expansionPanel.isDisabled},isReadonly:function(){return this.expansionPanel.isReadonly}},created:function(){this.expansionPanel.registerHeader(this)},beforeDestroy:function(){this.expansionPanel.unregisterHeader()},methods:{onClick:function(e){this.$emit("click",e)},genIcon:function(){var e=Object(d.t)(this,"actions")||[this.$createElement(O.a,this.expandIcon)];return this.$createElement(x.c,[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render:function(e){var n=this;return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:k(k({},this.$listeners),{},{click:this.onClick,mousedown:function(){return n.hasMousedown=!0},mouseup:function(){return n.hasMousedown=!1}})}),[Object(d.t)(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}}),C=(t(213),t(214),t(809),t(79)),S=t(12);function A(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}function D(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?A(Object(source),!0).forEach((function(n){Object(r.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):A(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}var z=C.a.extend({name:"v-expansion-panels",provide:function(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes:function(){return D(D({},C.a.options.computed.classes.call(this)),{},{"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile})}},created:function(){this.$attrs.hasOwnProperty("expand")&&Object(S.a)("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"==typeof this.value[0]&&Object(S.a)(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem:function(e,n){var t=this.getValue(e,n),o=this.getValue(e,n+1);e.isActive=this.toggleMethod(t),e.nextIsActive=this.toggleMethod(o)}}}),I=t(121),B=(t(55),t(39),t(70),t(44),t(34),t(77),t(82),t(46),t(20)),L=(t(61),t(573),t(811));function J(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}function M(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?J(Object(source),!0).forEach((function(n){Object(r.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):J(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}function $(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return E(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return E(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return l=e.done,e},e:function(e){c=!0,r=e},f:function(){try{l||null==t.return||t.return()}finally{if(c)throw r}}}}function E(e,n){(null==n||n>e.length)&&(n=e.length);for(var i=0,t=new Array(n);i<n;i++)t[i]=e[i];return t}var R={components:{Spinner:t(541).default},data:function(){return{openPanel:[],pageLoaded:!1,open:[],faqs:L.faqs,teasers:[],blogs:[],eof:!1,isLoading:!1,lastDoc:null,batchSize:2,changed:"",noBlogs:!1}},props:{category:{type:String,required:!0},type:{type:String,required:!0},pageTitle:{type:String,required:!0}},mounted:function(){var e=this;return Object(B.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.loadBlogs();case 2:window.addEventListener("scroll",e.loadMore);case 3:case"end":return n.stop()}}),n)})))()},destroyed:function(){window.removeEventListener("scroll",this.loadMore)},methods:{launchPanel:function(e){return Object(B.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},loadBlogs:function(){var e=this;return Object(B.a)(regeneratorRuntime.mark((function n(){var t,o,r,l,c,d,h;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.isLoading&&!e.eof){n.next=2;break}return n.abrupt("return");case 2:return e.isLoading=!0,t=e.$fire.firestore,o=t.collection("blogs").where(e.type,"==",e.category).where("published","==",!0).orderBy("created","desc").limit(e.batchSize),e.lastDoc&&(o=o.startAfter(e.lastDoc)),n.next=8,o.get();case 8:if(r=n.sent,e.eof=r.empty,r.size>0){e.lastDoc=r.docs[r.docs.length-1],l=0,c=$(r.docs);try{for(c.s();!(d=c.n()).done;)h=d.value,e.blogs.push(M({id:h.id},h.data())),e.open.push(!0),e.openPanel.push(l),l+=1}catch(e){c.e(e)}finally{c.f()}}e.blogs.length||(e.noBlogs=!0),e.isLoading=!1,e.pageLoaded=!0;case 14:case"end":return n.stop()}}),n)})))()},loadMore:function(){!(this.$el.getBoundingClientRect().bottom<=(window.innerHeight||document.documentElement.clientHeight)+100)||this.isLoading||this.eof||this.loadBlogs()},addBlog:function(e){var n=this;return Object(B.a)(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.teasers[e].blog){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,n.$fire.firestore.collection("blogs").doc(n.teasers[e].id).get();case 4:(o=t.sent).exists&&(n.teasers[e]=M(M({},n.teasers[e]),{},{blog:M({id:o.id},o.data())}),n.changed=n.teasers[e].id);case 6:case"end":return t.stop()}}),t)})))()},toggle:function(e){this.open[e]=!this.open[e]},accordionClasses:function(e){return this.open[e]?"is-open":"is-closed"}},layout:"home"},H=(t(812),t(65)),component=Object(H.a)(R,(function(){var e=this,n=e._self._c;return n("div",{staticClass:"d-flex align-center flex-column",attrs:{justify:"center"}},[e.pageLoaded?n("div",{staticClass:"container-inner d-flex flex-column",attrs:{justify:"center"}},[n("span",{staticClass:"container-title"},[e._v(e._s(e.pageTitle))]),e._v(" "),e.noBlogs?n("span",{staticClass:"mb-10"},[e._v("No Contents yet. Coming Soon!")]):n(z,{staticStyle:{"z-index":"0"},attrs:{flat:"",accordion:"",value:e.openPanel,multiple:""}},e._l(e.blogs,(function(t,o){return n(v,{key:t.id},[n(P,{attrs:{"disable-icon-rotate":"",ripple:""},on:{click:function(n){return e.$set(e.open,o,!e.open[o])}},scopedSlots:e._u([{key:"actions",fn:function(){return[n(I.a)]},proxy:!0}],null,!0)},[n("span",{staticClass:"faq-title"},[e.open[o]?n(I.a,{staticClass:"icon minus"},[e._v("mdi-minus-circle-outline")]):n(I.a,{staticClass:"icon plus"},[e._v("mdi-plus-circle-outline")]),e._v(" "),n("span",[e._v("\n              "+e._s(t.title)+"\n            ")])],1)]),e._v(" "),n(w,{staticClass:"expansion-text"},[n("div",{staticClass:"expansion-text-inner"},[n("blog-details",{attrs:{teaser:t,changed:e.changed,prev:null,next:null}})],1)])],1)})),1),e._v(" "),n(o.a,{staticClass:"mb-10 primary white--text",attrs:{target:"_blank",href:"https://docs.google.com/forms/d/e/1FAIpQLSchlVo4KUWEHr2IWrAJ2gVFIVtEchwHyc12bYTYk3jerWtiIw/viewform?usp=pp_url"}},[e._v("Ask us your questions")])],1):e._e(),e._v(" "),e.isLoading?n("Spinner",{attrs:{color:"blue"}}):e._e()],1)}),[],!1,null,"6d34ed27",null);n.default=component.exports;installComponents(component,{BlogDetails:t(573).default,Spinner:t(546).default})},558:function(e,n,t){var content=t(587);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(26).default)("296fe7bd",content,!0,{sourceMap:!1})},573:function(e,n,t){"use strict";t.r(n);var o=t(568),r=t(247),l=(t(263),t(55),t(8),t(15),t(541)),c=t(637),d=t.n(c),h=t(638),f=t.n(h),v=t(639),x=t.n(v),m=t(640),y=t.n(m),w=t(641),O=t.n(w),j=t(642),_=t.n(j),k=t(643),P=t.n(k),C=t(644),S=t.n(C),A=t(645),D=t.n(A),z={name:"BlogDetails",components:{Spinner:l.default},data:function(){return{blog:{title:"",body:"",tags:[]}}},props:{teaser:{type:Object,required:!0},prev:{type:Object,default:null},next:{type:Object,default:null},changed:{type:String,default:""}},computed:{tags:function(){return this.blog.tags.slice(0).sort()}},watch:{},mounted:function(){this.blog=this.teaser,d.a.registerLanguage("javascript",y.a),d.a.registerLanguage("css",x.a),d.a.registerLanguage("xml",S.a),d.a.registerLanguage("php",O.a),d.a.registerLanguage("yaml",D.a),d.a.registerLanguage("sql",P.a),d.a.registerLanguage("bash",f.a),d.a.registerLanguage("shell",_.a),this.$el.querySelectorAll("pre code").forEach((function(e){d.a.highlightBlock(e)}))}},I=(t(586),t(65)),component=Object(I.a)(z,(function(){var e=this,n=e._self._c;return n("div",[e.teaser?n("article",{staticClass:"blog",staticStyle:{width:"calc(100vw-30px)","max-width":"min(100%,800px)"}},[n("div",{staticClass:"mb-5"},[n("div",{staticClass:"text-xs uppercase font-semibold text-gray-600 mb-1 d-flex flex-wrap"},e._l(e.tags,(function(t){return n(o.a,{key:t,staticClass:"my-1 ml-0 mr-2 d-flex flex-row"},[e._v("\n          "+e._s(t.toUpperCase())+"\n        ")])})),1),e._v(" "),e.blog.lead?n("h2",{staticClass:"font-sans text-gray-700 font-light"},[e._v("\n        "+e._s(e.blog.lead)+"\n      ")]):e._e(),e._v(" "),n("div",{staticClass:"text-gray-600 text-xs font-light"},[e._v("\n        "+e._s(e._f("toOnlyDate")(e.blog.created))+"\n      ")])]),e._v(" "),e.blog.imageUrl?n("figure",{staticClass:"mb-5"},[n(r.a,{staticStyle:{"max-height":"350px",height:"100%",width:"100%"},attrs:{contain:"",src:e.blog.imageUrl,alt:e.blog.imageAlt||e.blog.title}}),e._v(" "),e.blog.imageCaption?n("figcaption",{staticClass:"text-center text-gray-600 text-sm my-2",domProps:{innerHTML:e._s(e.blog.imageCaption)}}):e._e()],1):e._e(),e._v(" "),n("div",{staticClass:"content",staticStyle:{"word-break":"break-word"},domProps:{innerHTML:e._s(e.blog.body)}}),e._v(" "),n("div",{staticClass:"clearfix mt-10 text-xs font-semibold uppercase"},[e.prev?n("nuxt-link",{staticClass:"float-left no-underline col-6 break-normal pr-5",attrs:{to:{name:"blog-id",params:{id:e.prev.id}}}},[e._v("\n        < "+e._s(e.prev.title)+"\n      ")]):e._e(),e._v(" "),e.next?n("nuxt-link",{staticClass:"float-right no-underline col-6 break-normal pl-5",attrs:{to:{name:"blog-id",params:{id:e.next.id}}}},[e._v("\n        "+e._s(e.next.title)+" >\n      ")]):e._e()],1)]):n("Spinner",{attrs:{color:"blue"}})],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Spinner:t(546).default})},586:function(e,n,t){"use strict";t(558)},587:function(e,n,t){var o=t(25)(!1);o.push([e.i,".content table{border-collapse:collapse;table-layout:fixed;width:100%;margin:0;overflow:hidden}.content table th{font-weight:700;text-align:left}.content table td,.content table th{min-width:1em;border:2px solid grey;padding:3px 5px;vertical-align:top;box-sizing:border-box;position:relative}.content img{-o-object-fit:contain;object-fit:contain;max-width:100%;max-height:350px;display:block;margin-left:auto;margin-right:auto}",""]),e.exports=o},708:function(e,n,t){var content=t(813);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(26).default)("484f9cc4",content,!0,{sourceMap:!1})},809:function(e,n,t){var content=t(810);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(26).default)("48751daa",content,!0,{sourceMap:!1})},810:function(e,n,t){var o=t(25)(!1);o.push([e.i,'.theme--light.v-expansion-panels .v-expansion-panel{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-expansion-panels .v-expansion-panel--disabled{color:rgba(0,0,0,.38)}.theme--light.v-expansion-panels .v-expansion-panel:not(:first-child):after{border-color:rgba(0,0,0,.12)}.theme--light.v-expansion-panels .v-expansion-panel-header .v-expansion-panel-header__icon .v-icon{color:rgba(0,0,0,.54)}.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:hover:before{opacity:.04}.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:before,.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:hover:before,.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:focus:before{opacity:.12}.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:focus:before{opacity:.16}.theme--light.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover:before{opacity:.04}.theme--dark.v-expansion-panels .v-expansion-panel{background-color:#1e1e1e;color:#fff}.theme--dark.v-expansion-panels .v-expansion-panel--disabled{color:hsla(0,0%,100%,.5)}.theme--dark.v-expansion-panels .v-expansion-panel:not(:first-child):after{border-color:hsla(0,0%,100%,.12)}.theme--dark.v-expansion-panels .v-expansion-panel-header .v-expansion-panel-header__icon .v-icon{color:#fff}.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:hover:before{opacity:.08}.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:before,.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:hover:before,.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:focus:before{opacity:.24}.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:focus:before{opacity:.32}.theme--dark.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover:before{opacity:.08}.v-expansion-panels{border-radius:4px;display:flex;flex-wrap:wrap;justify-content:center;list-style-type:none;padding:0;width:100%;z-index:1}.v-expansion-panels>*{cursor:auto}.v-expansion-panels>:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.v-expansion-panels>:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--active{border-radius:4px}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--active+.v-expansion-panel{border-top-left-radius:4px;border-top-right-radius:4px}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--next-active{border-bottom-left-radius:4px;border-bottom-right-radius:4px}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--next-active .v-expansion-panel-header{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-expansion-panel{flex:1 0 100%;max-width:100%;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-expansion-panel:before{border-radius:inherit;bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:-1;transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-expansion-panel:not(:first-child):after{border-top:thin solid;content:"";left:0;position:absolute;right:0;top:0;transition:border-color .2s cubic-bezier(.4,0,.2,1),opacity .2s cubic-bezier(.4,0,.2,1)}.v-expansion-panel--disabled .v-expansion-panel-header{pointer-events:none}.v-expansion-panel--active+.v-expansion-panel,.v-expansion-panel--active:not(:first-child){margin-top:16px}.v-expansion-panel--active+.v-expansion-panel:after,.v-expansion-panel--active:not(:first-child):after{opacity:0}.v-expansion-panel--active>.v-expansion-panel-header{min-height:64px}.v-expansion-panel--active>.v-expansion-panel-header--active .v-expansion-panel-header__icon:not(.v-expansion-panel-header__icon--disable-rotate) .v-icon{transform:rotate(-180deg)}.v-expansion-panel-header__icon{display:inline-flex;margin-bottom:-4px;margin-top:-4px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-application--is-ltr .v-expansion-panel-header__icon{margin-left:auto}.v-application--is-rtl .v-expansion-panel-header__icon{margin-right:auto}.v-expansion-panel-header{align-items:center;border-top-left-radius:inherit;border-top-right-radius:inherit;display:flex;font-size:.9375rem;line-height:1;min-height:48px;outline:none;padding:16px 24px;position:relative;transition:min-height .3s cubic-bezier(.25,.8,.5,1);width:100%}.v-application--is-ltr .v-expansion-panel-header{text-align:left}.v-application--is-rtl .v-expansion-panel-header{text-align:right}.v-expansion-panel-header:not(.v-expansion-panel-header--mousedown):focus:before{opacity:.12}.v-expansion-panel-header:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-expansion-panel-header>:not(.v-expansion-panel-header__icon){flex:1 1 auto}.v-expansion-panel-content{display:flex}.v-expansion-panel-content__wrap{padding:0 24px 16px;flex:1 1 auto;max-width:100%}.v-expansion-panels--accordion>.v-expansion-panel{margin-top:0}.v-expansion-panels--accordion>.v-expansion-panel:after{opacity:1}.v-expansion-panels--popout>.v-expansion-panel{max-width:calc(100% - 32px)}.v-expansion-panels--popout>.v-expansion-panel--active{max-width:calc(100% + 16px)}.v-expansion-panels--inset>.v-expansion-panel{max-width:100%}.v-expansion-panels--inset>.v-expansion-panel--active{max-width:calc(100% - 32px)}.v-expansion-panels--flat>.v-expansion-panel:after{border-top:none}.v-expansion-panels--flat>.v-expansion-panel:before{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-expansion-panels--tile,.v-expansion-panels--tile>.v-expansion-panel:before{border-radius:0}',""]),e.exports=o},811:function(e){e.exports=JSON.parse('{"faqs":[{"id":"0","title":"Are there formal requirements to become a member of jobooza?","text":"There are no formal requirements other than already being an engineer or willing to be an engineer to join our platform, because jobooza platform is designed to connect great engineers to the jobs in Japan. On average we see candidates in our network have a minimum of a college degree."},{"id":"1","title":"How much does it cost to use jobooza?","text":"It’s free. There’s no hidden cost for candidates."},{"id":"2","title":"What will happen if I sign up?","text":"What will happen if I sign up? First, please update your profile so your future team mates can understand who you are, including experiences, skills and your superpower! Then, you can search job opportunities, subscribe the postings that you are interested, and text to your future team mates and learn more about the opportunities. After you learn about theopportunity and want to apply for it, hit APPLY button. Then, the official screening process will start. No pressure. Networking with decent people itself is a value. You could even talk about new technologies or the next hackathon together "},{"id":"3","title":"Does it cost me anything to apply for a job?","text":"It does not cost you to apply for the job."},{"id":"4","title":"Where are employers based?","text":"Our customers are based all over Japan. In 2020 we’re very focused on buildingout our presence in the areas of machine learning, robotics, and SaaS startups in Japan."},{"id":"5","title":"How long will it take for me to get matched with a work opportunity?","text":"Our team is always signing up new companies and working to match you with an exciting opportunity."},{"id":"6","title":"Do I have to live outside of Japan to get accepted into jobooza? ","text":"No. We welcome engineers who live in Japan as well. jobooza welcomes any engineer who identifies with our mission and goals."},{"id":"7","title":"Do Japanese companies hire non-Japanese speakers? How can I find opportunities for non-Japanese speakers? ","text":"Our corporate users understand that jobooza’s users are the international engineers. They will specify the Japanese language level in the job opportunities. If you don\'t see any current opportunities that do not fit, we encourage you to check back frequently as we are adding new opportunities frequently in a variety of Japanese language level. We also do offer a variety of zero Japanese positions that could be a good fit!"},{"id":"8","title":"Should I learn Japanese if I am hired and move to Japan?","text":"The language that you use at work will depend on the agreement between you and your future employer. Aside from work, in many cases, Japanese language skill will improve your quality of life and open more doors for your future career in Japan. Our blogs will cover the tips to learn Japanese language as well as how to enjoy local culture there. It is up to what you want"},{"id":"9","title":"I don’t know anything about the work and life in Japan. How can I learn before I make decision to work for a Japanese company?","text":"Check out our blogs. You can find stories of fellow international engineers who work in Japan (Japanese people call those people “senpai”, someone who are in the similar situation ahead of you)."}]}')},812:function(e,n,t){"use strict";t(708)},813:function(e,n,t){var o=t(25)(!1);o.push([e.i,".container[data-v-6d34ed27]{padding:1rem 20px;max-width:100%;height:100%}.container[data-v-6d34ed27],.container-inner[data-v-6d34ed27]{display:flex;align-items:center;justify-content:center}.container-inner[data-v-6d34ed27]{max-width:800px;margin-top:50px;width:100%;flex-direction:column}.container-title[data-v-6d34ed27]{font-size:40px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.38;letter-spacing:normal;text-align:center;color:grey;padding-bottom:25px}@media screen and (max-width:800px){.container-title[data-v-6d34ed27]{font-size:30px}}.icon[data-v-6d34ed27]{font-size:30px;margin-right:22px;color:grey}.faq-title[data-v-6d34ed27]{display:flex;align-items:flex-start;justify-content:flex-start}.faq-title span[data-v-6d34ed27]{font-size:20px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.35;letter-spacing:normal;text-align:left;color:#1d90fc}@media screen and (max-width:800px){.faq-title span[data-v-6d34ed27]{font-size:18px}}.v-expansion-panel[data-v-6d34ed27]:before{box-shadow:none!important}.v-expansion-panel[data-v-6d34ed27]{background-color:transparent!important}.expansion-text .expansion-text-inner span[data-v-6d34ed27]{font-size:18px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.33;letter-spacing:normal;text-align:left;color:grey}@media screen and (max-width:800px){.expansion-text .expansion-text-inner span[data-v-6d34ed27]{font-size:16px;padding:0}}",""]),e.exports=o}}]);