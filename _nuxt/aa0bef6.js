(window.webpackJsonp=window.webpackJsonp||[]).push([[12,38],{518:function(t,e,n){var content=n(521);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("1a30734a",content,!0,{sourceMap:!1})},519:function(t,e,n){"use strict";n.r(e);var l=n(241),o={},r=(n(520),n(73)),component=Object(r.a)(o,(function(){var t=this._self._c;return t("div",{staticClass:"spinner"},[t(l.a,{attrs:{size:"100",indeterminate:""}})],1)}),[],!1,null,"b799d304",null);e.default=component.exports},520:function(t,e,n){"use strict";n(518)},521:function(t,e,n){var l=n(25)(!1);l.push([t.i,".spinner[data-v-b799d304]{display:flex;justify-content:center;margin-top:1rem;color:#add8e6}",""]),t.exports=l},529:function(t,e,n){var content=n(544);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("071c7de2",content,!0,{sourceMap:!1})},535:function(t,e,n){"use strict";n.r(e);var l=n(550),o=n(517),r=n(243),c=(n(255),n(54),n(7),n(17),n(519)),d=n(573),f=n.n(d),x=n(574),m=n.n(x),h=n(575),v=n.n(h),_=n(576),y=n.n(_),w=n(577),C=n.n(w),L=n(578),j=n.n(L),k=n(579),S=n.n(k),M=n(580),O=n.n(M),U=n(581),z=n.n(U),A={name:"BlogDetails",components:{Spinner:c.default},data:function(){return{blog:{title:"",body:"",tags:[]}}},props:{teaser:{type:Object,required:!0},prev:{type:Object,default:null},next:{type:Object,default:null},changed:{type:String,default:""}},computed:{tags:function(){return this.blog.tags.slice(0).sort()}},watch:{changed:function(t){this.teaser.blog&&!this.blog.body&&(this.blog=this.teaser.blog)}},mounted:function(){f.a.registerLanguage("javascript",y.a),f.a.registerLanguage("css",v.a),f.a.registerLanguage("xml",O.a),f.a.registerLanguage("php",C.a),f.a.registerLanguage("yaml",z.a),f.a.registerLanguage("sql",S.a),f.a.registerLanguage("bash",m.a),f.a.registerLanguage("shell",j.a),this.$el.querySelectorAll("pre code").forEach((function(t){f.a.highlightBlock(t)}))}},B=(n(543),n(73)),component=Object(B.a)(A,(function(){var t=this,e=t._self._c;return e(o.a,[t.teaser.blog?e("article",{staticClass:"blog",staticStyle:{width:"calc(100vw-30px)","max-width":"min(100%,800px)"}},[e("div",{staticClass:"mb-5"},[e("div",{staticClass:"text-xs uppercase font-semibold text-gray-600 mb-1 d-flex flex-wrap"},t._l(t.tags,(function(n){return e(l.a,{key:n,staticClass:"my-1 ml-0 mr-2 d-flex flex-row"},[t._v("\n          "+t._s(n.toUpperCase())+"\n        ")])})),1),t._v(" "),e("h1",[t._v(t._s(t.blog.title))]),t._v(" "),t.blog.lead?e("h2",{staticClass:"font-sans text-gray-700 font-light"},[t._v("\n        "+t._s(t.blog.lead)+"\n      ")]):t._e(),t._v(" "),e("div",{staticClass:"text-gray-600 text-xs font-light"},[t._v("\n        "+t._s(t._f("toDate")(t.blog.created))+"\n      ")])]),t._v(" "),t.blog.imageUrl?e("figure",{staticClass:"mb-5"},[e(r.a,{staticStyle:{"max-height":"350px",height:"100%",width:"100%"},attrs:{contain:"",src:t.blog.imageUrl,alt:t.blog.imageAlt||t.blog.title}}),t._v(" "),t.blog.imageCaption?e("figcaption",{staticClass:"text-center text-gray-600 text-sm my-2",domProps:{innerHTML:t._s(t.blog.imageCaption)}}):t._e()],1):t._e(),t._v(" "),e("div",{staticClass:"content",domProps:{innerHTML:t._s(t.blog.body)}}),t._v(" "),e("div",{staticClass:"clearfix mt-10 text-xs font-semibold uppercase"},[t.prev?e("nuxt-link",{staticClass:"float-left no-underline col-6 break-normal pr-5",attrs:{to:{name:"blog-id",params:{id:t.prev.id}}}},[t._v("\n        < "+t._s(t.prev.title)+"\n      ")]):t._e(),t._v(" "),t.next?e("nuxt-link",{staticClass:"float-right no-underline col-6 break-normal pl-5",attrs:{to:{name:"blog-id",params:{id:t.next.id}}}},[t._v("\n        "+t._s(t.next.title)+" >\n      ")]):t._e()],1)]):e("Spinner",{attrs:{color:"blue"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Spinner:n(519).default})},543:function(t,e,n){"use strict";n(529)},544:function(t,e,n){var l=n(25)(!1);l.push([t.i,".content table{border-collapse:collapse;table-layout:fixed;width:100%;margin:0;overflow:hidden}.content table th{font-weight:700;text-align:left}.content table td,.content table th{min-width:1em;border:2px solid grey;padding:3px 5px;vertical-align:top;box-sizing:border-box;position:relative}.content img{-o-object-fit:contain;object-fit:contain;max-width:100%;max-height:350px;display:block;margin-left:auto;margin-right:auto}",""]),t.exports=l}}]);