(window.webpackJsonp=window.webpackJsonp||[]).push([[45,46],{524:function(t,e,n){var content=n(527);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("1a30734a",content,!0,{sourceMap:!1})},525:function(t,e,n){"use strict";n.r(e);var o=n(242),r={},c=(n(526),n(73)),component=Object(c.a)(r,(function(){var t=this._self._c;return t("div",{staticClass:"spinner"},[t(o.a,{attrs:{size:"100",indeterminate:""}})],1)}),[],!1,null,"b799d304",null);e.default=component.exports},526:function(t,e,n){"use strict";n(524)},527:function(t,e,n){var o=n(25)(!1);o.push([t.i,".spinner[data-v-b799d304]{display:flex;justify-content:center;margin-top:1rem;color:#add8e6}",""]),t.exports=o},654:function(t,e,n){var content=n(764);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("0ad9076b",content,!0,{sourceMap:!1})},763:function(t,e,n){"use strict";n(654)},764:function(t,e,n){var o=n(25)(!1);o.push([t.i,"@media screen and (max-width:800px){.v-image__image[data-v-58146677]{width:100%}}@media screen and (min-width:801px){.v-image__image[data-v-58146677]{width:760px}}",""]),t.exports=o},826:function(t,e,n){"use strict";n.r(e);var o=n(118),r=n(109),c=n(523),l=n(119),d=n(244),m=(n(7),n(85),{components:{Spinner:n(525).default},name:"Post",data:function(){return{imagesLoaded:!1,imageCount:0}},props:{post:{type:Object,required:!0}},methods:{onImageLoad:function(){this.imageCount+=1,this.imageCount==this.post.images.length&&(this.imagesLoaded=!0)},downloadMe:function(t){var link=document.createElement("a");link.href=this.post.images[t].imageUrl,link.download="image_"+Date.now().toString(),link.target="_blank",link.click()}}}),f=(n(763),n(73)),component=Object(f.a)(m,(function(){var t=this,e=t._self._c;return e(c.a,{staticStyle:{width:"fit-content"}},t._l(t.post.images,(function(image,n){return e(r.a,{key:n,staticClass:"my-7 my-md-10 d-flex flex-column",staticStyle:{width:"min(100%,800px)"}},[e("nuxt-link",{attrs:{to:"/event/".concat(t.post.eventId)}},[e("div",{staticClass:"d-flex justify-center align-center",staticStyle:{"min-height":"min(400px,100%)"}},[e(d.a,{directives:[{name:"show",rawName:"v-show",value:t.imagesLoaded,expression:"imagesLoaded"}],staticClass:"d-flex justify-center align-center object-cover",staticStyle:{"border-radius":"5px 5px 0 0",width:"calc(100vw - 40px)","max-width":"760px"},attrs:{loading:"lazy",src:image.teaserImageUrl,alt:t.post.eventId},on:{load:t.onImageLoad}})],1)]),t._v(" "),t.imagesLoaded?e("div",{staticClass:"pa-5"},[e("h2",{staticClass:"mb-2 black--text"},[t._v("\n              Event: "+t._s(t.post.title)+"\n          ")]),t._v(" "),e("span",[t._v("\n          Posted by:\n        "),e("nuxt-link",{staticClass:"black--text",attrs:{to:"/profile/".concat(t.post.userId,"/")}},[t._v("\n          "+t._s(t.post.firstName||"anonymous")+"\n        ")])],1),t._v(" "),e(o.a,{staticClass:"float-right",attrs:{icon:"",color:"blue"},on:{click:function(e){return t.downloadMe(n)}}},[e(l.a,[t._v("mdi-download")])],1)],1):t._e()],1)})),1)}),[],!1,null,"58146677",null);e.default=component.exports}}]);