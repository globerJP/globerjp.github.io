(window.webpackJsonp=window.webpackJsonp||[]).push([[71,14,36,39],{521:function(t,e,r){var content=r(524);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("1a30734a",content,!0,{sourceMap:!1})},522:function(t,e,r){"use strict";r.r(e);var n=r(241),o={},c=(r(523),r(73)),component=Object(c.a)(o,(function(){var t=this._self._c;return t("div",{staticClass:"spinner"},[t(n.a,{attrs:{size:"100",indeterminate:""}})],1)}),[],!1,null,"b799d304",null);e.default=component.exports},523:function(t,e,r){"use strict";r(521)},524:function(t,e,r){var n=r(25)(!1);n.push([t.i,".spinner[data-v-b799d304]{display:flex;justify-content:center;margin-top:1rem;color:#add8e6}",""]),t.exports=n},533:function(t,e,r){var content=r(550);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("3d804e23",content,!0,{sourceMap:!1})},534:function(t,e,r){var content=r(552);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("79b64fbb",content,!0,{sourceMap:!1})},543:function(t,e,r){"use strict";var n=r(38),o=r(111),c=r(60),l=r(69),d=r(258);n&&(d(Array.prototype,"lastItem",{configurable:!0,get:function(){var t=c(this),e=l(t);return 0==e?void 0:t[e-1]},set:function(t){var e=c(this),r=l(e);return e[0==r?0:r-1]=t}}),o("lastItem"))},549:function(t,e,r){"use strict";r(533)},550:function(t,e,r){var n=r(25)(!1);n.push([t.i,"[data-v-6a402b2d]::-webkit-scrollbar{height:7px!important}[data-v-6a402b2d]::-webkit-scrollbar-track{background:#eee;border-radius:14px}[data-v-6a402b2d]::-webkit-scrollbar-thumb{background:#888;border-radius:14px}[data-v-6a402b2d]::-webkit-scrollbar-thumb:hover{background:#555}.card-carousel[data-v-6a402b2d]{-webkit-user-select:none;-moz-user-select:none;user-select:none;position:relative;width:100%}.progressbar[data-v-6a402b2d]{display:block;width:100%;height:5px;position:absolute;background-color:hsla(0,0%,86.7%,.25);z-index:1}.progressbar>div[data-v-6a402b2d]{background-color:hsla(0,0%,100%,.52);height:100%}.thumbnails[data-v-6a402b2d]{display:flex;flex-direction:row;overflow-x:auto;overflow-y:hidden}.thumbnail-image[data-v-6a402b2d]{display:flex;align-items:center;cursor:pointer;padding:3px}.thumbnail-image>img[data-v-6a402b2d]{width:100px;height:auto;transition:all .25s}.thumb-img[data-v-6a402b2d]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.thumb-img-outer[data-v-6a402b2d]{width:100px;height:70px}.thumbnail-image.active>div>img[data-v-6a402b2d],.thumbnail-image:hover>div>img[data-v-6a402b2d]{opacity:.6;box-shadow:2px 2px 6px 1px rgba(0,0,0,.5)}.card-img[data-v-6a402b2d]{position:relative;margin-bottom:15px}.card-img>img[data-v-6a402b2d]{display:block;margin:0 auto}.actions[data-v-6a402b2d]{font-size:1.5em;height:40px;position:absolute;top:50%;margin-top:-20px;width:100%;display:flex;align-items:center;justify-content:space-between;color:#585858}.actions>span[data-v-6a402b2d]{cursor:pointer;transition:all .25s;font-size:45px}.actions>span.prev[data-v-6a402b2d]{margin-left:5px}.actions>span.next[data-v-6a402b2d]{margin-right:5px}.actions>span[data-v-6a402b2d]:hover{color:#eee}",""]),t.exports=n},551:function(t,e,r){"use strict";r(534)},552:function(t,e,r){var n=r(25)(!1);n.push([t.i,"@media screen and (max-width:800px){.main-img[data-v-6a402b2d]{height:400px;width:100%}}@media screen and (min-width:801px){.main-img[data-v-6a402b2d]{height:400px;max-width:100%}}.create-image[data-v-6a402b2d]{-webkit-animation:createBox-6a402b2d .99s;animation:createBox-6a402b2d .99s}.delete-image[data-v-6a402b2d]{-webkit-animation:deleteBox-6a402b2d .99s;animation:deleteBox-6a402b2d .99s}@-webkit-keyframes createBox-6a402b2d{0%{transform:translateX(-100%)}to{transform:translateX(0)}}@keyframes createBox-6a402b2d{0%{transform:translateX(-100%)}to{transform:translateX(0)}}@-webkit-keyframes deleteBox-6a402b2d{0%{transform:translateX(0)}to{transform:translateX(100%)}}@keyframes deleteBox-6a402b2d{0%{transform:translateX(0)}to{transform:translateX(100%)}}",""]),t.exports=n},555:function(t,e,r){"use strict";r.r(e);var n=r(243),o=(r(543),r(59),{name:"Carousel",props:["startingImage","images","autoSlideInterval","showProgressBar"],data:function(){return{timeOut:null,activeImage:0,autoSlideTimeout:null,stopSlider:!1,timeLeft:0,timerInterval:null,countdownInterval:10}},computed:{currentImage:function(){return this.timeLeft=this.autoSlideInterval,this.images[this.activeImage]?this.images[this.activeImage]:"/img/image-not-found.png"},progressBar:function(){return 100-this.timeLeft/this.autoSlideInterval*100}},created:function(){this.startingImage&&this.startingImage>=0&&this.startingImage<this.images.length&&(this.activeImage=this.startingImage),this.autoSlideInterval&&this.autoSlideInterval>this.countdownInterval&&(this.startTimer(this.autoSlideInterval),this.timeLeft=this.autoSlideInterval,this.startCountdown())},methods:{nextImage:function(){var t=this.activeImage+1;t>=this.images.length&&(t=0),this.activateImage(t)},prevImage:function(){var t=this.activeImage-1;t<0&&(t=this.images.length-1),this.activateImage(t)},activateImage:function(t){this.activeImage=t},transitionImage:function(t){var e=this.activeImage;t<e?this.transitionRight(t,e,200):t>e&&this.transitionLeft(t,e,200)},transitionLeft:function(t,e,r){var n=this;clearTimeout(this.timeOut);var o=[{transform:"translateX(100%)"},{transform:"translateX(0)"}],c={duration:r,iterations:1};this.$refs["main-img-".concat(e)].lastItem.$el.animate([{transform:"translateX(0)"},{transform:"translateX(-100%)"}],c),this.timeOut=setTimeout((function(){n.$refs["main-img-".concat(t)].lastItem.$el.animate(o,c),n.activateImage(t)}),r-50)},transitionRight:function(t,e,r){var n=this;clearTimeout(this.timeOut);var o=[{transform:"translateX(-100%)"},{transform:"translateX(0)"}],c={duration:r,iterations:1};this.$refs["main-img-".concat(e)].lastItem.$el.animate([{transform:"translateX(0)"},{transform:"translateX(100%)"}],c),this.timeOut=setTimeout((function(){n.$refs["main-img-".concat(t)].lastItem.$el.animate(o,c),n.activateImage(t)}),r)},startTimer:function(t){if(t&&t>0&&!this.stopSlider){var e=this;clearTimeout(this.autoSlideTimeout),this.autoSlideTimeout=setTimeout((function(){e.nextImage(),e.startTimer(e.autoSlideInterval)}),t)}},stopTimer:function(){clearTimeout(this.autoSlideTimeout),this.stopSlider=!0,clearInterval(this.timerInterval)},restartTimer:function(){this.stopSlider=!1,clearInterval(this.timerInterval),this.startCountdown(),this.startTimer(this.timeLeft)},startCountdown:function(){if(this.showProgressBar){var t=this;this.timerInterval=setInterval((function(){t.timeLeft-=t.countdownInterval,t.timeLeft<=0&&(t.timeLeft=t.autoSlideInterval)}),this.countdownInterval)}}}}),c=(r(549),r(551),r(73)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-carousel",on:{mouseover:t.stopTimer,mouseleave:t.restartTimer}},[t.autoSlideInterval&&t.showProgressBar?e("div",{staticClass:"progressbar"},[e("div",{style:{width:t.progressBar+"%"}})]):t._e(),t._v(" "),e("div",{staticClass:"card-img",staticStyle:{overflow:"hidden"}},t._l(t.images,(function(image,r){return e(n.a,{directives:[{name:"show",rawName:"v-show",value:t.activeImage==r,expression:"activeImage == index? true: false"}],key:r,ref:"main-img-"+r,refInFor:!0,staticClass:"main-img",attrs:{contain:"",src:image.imageUrl,"lazy-src":image.teaserImageUrl,alt:""},on:{error:function(t){this.src="/img/image-not-found"}}})})),1),t._v(" "),e("div",{staticClass:"d-flex justify-center align-center"},[e("div",{staticClass:"thumbnails"},t._l(t.images,(function(image,r){return e("div",{key:r,class:["thumbnail-image",t.activeImage==r?"active":""],on:{click:function(e){return t.transitionImage(r)}}},[e("div",{staticClass:"thumb-img-outer"},[e("img",{staticClass:"thumb-img",attrs:{src:image.teaserImageUrl,onerror:"this.src='/img/image-not-found'"}})])])})),0)])])}),[],!1,null,"6a402b2d",null);e.default=component.exports},571:function(t,e,r){var content=r(603);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("145e9198",content,!0,{sourceMap:!1})},572:function(t,e,r){var content=r(605);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("c9ce7e64",content,!0,{sourceMap:!1})},602:function(t,e,r){"use strict";r(571)},603:function(t,e,r){var n=r(25)(!1);n.push([t.i,"@media screen and (max-width:800px){.v-image__image[data-v-7ca2ebd1]{width:100%}}@media screen and (min-width:801px){.v-image__image[data-v-7ca2ebd1]{width:760px}}",""]),t.exports=n},604:function(t,e,r){"use strict";r(572)},605:function(t,e,r){var n=r(25)(!1);n.push([t.i,"",""]),t.exports=n},610:function(t,e,r){"use strict";r.r(e);var n=r(118),o=r(109),c=r(520),l=r(119),d=(r(34),r(63),r(7),r(85),{components:{Spinner:r(522).default},name:"Post",data:function(){return{imagesLoaded:!1,imageCount:0,currentIndex:0}},props:{post:{type:Object,required:!0}},computed:{hasImages:function(){return this.post.images.length>0&&this.post.images[0].imageUrl},images:function(){return this.post.images}},methods:{downloadMe:function(){var link=document.createElement("a");link.href=this.post.images[this.currentIndex].imageUrl,link.download="image_"+Date.now().toString(),link.target="_blank",link.click()}}}),m=(r(602),r(604),r(73)),component=Object(m.a)(d,(function(){var t=this,e=t._self._c;return t.hasImages?e(c.a,{staticClass:"d-flex flex-column justify-center align-center",staticStyle:{width:"100%","max-width":"800px"}},[e(o.a,{staticClass:"post-carousel my-3 my-md-5 d-flex flex-column justify-center align-center",staticStyle:{width:"min(100%,800px)"}},[e("Carousel",{attrs:{"starting-image":0,images:t.images,"auto-slide-interval":0,"show-progress-bar":!1}}),t._v(" "),e("div",{staticClass:"pa-5 pt-5"},[e("nuxt-link",{attrs:{to:"/event/".concat(t.post.eventId)}},[e("h2",{staticClass:"mb-2 black--text"},[t._v("\n              Event: "+t._s(t.post.title)+"\n          ")])]),t._v(" "),t.post.comment&&t.post.comment.replace(/\s/g,"").length?e("p",{staticStyle:{"word-break":"break-word"},domProps:{innerHTML:t._s(t.post.alteredComment)}}):t._e(),t._v(" "),e("span",[t._v("\n          Posted by:\n        "),e("nuxt-link",{staticClass:"black--text",attrs:{to:"/profile/".concat(t.post.userId)}},[t._v("\n          "+t._s(t.post.firstName||"anonymous")+"\n        ")])],1),t._v(" "),e(n.a,{staticClass:"float-right",attrs:{icon:"",color:"blue"},on:{click:t.downloadMe}},[e(l.a,[t._v("mdi-download")])],1)],1)],1)],1):t._e()}),[],!1,null,"7ca2ebd1",null);e.default=component.exports;installComponents(component,{Carousel:r(555).default})},767:function(t,e,r){"use strict";r.r(e);var n=r(520),o=(r(54),r(45),r(68),r(16),r(76),r(79),r(18),r(19),r(23),r(24),r(1)),c=r(22),l=(r(41),r(46),r(34),r(167),r(74),r(63),r(7),r(17),r(62),r(610));function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function f(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var v={components:{Spinner:r(522).default,Post:l.default},data:function(){return{posts:[],eof:!1,isLoading:!1,lastDoc:null,batchSize:10,eventIds:{},userIds:{}}},computed:{user:function(){return this.$store.state.authUser}},mounted:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.user){e.next=4;break}return e.next=3,t.loadBlogs();case 3:window.addEventListener("scroll",t.loadMore);case 4:case"end":return e.stop()}}),e)})))()},destroyed:function(){window.removeEventListener("scroll",this.loadMore)},methods:{loadBlogs:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,l,d,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isLoading&&!t.eof){e.next=2;break}return e.abrupt("return");case 2:return t.isLoading=!0,r=t.$fire.firestore,n=r.collection("eventImages").orderBy("createdAt","desc").limit(t.batchSize),t.lastDoc&&(n=n.startAfter(t.lastDoc)),e.next=8,n.get();case 8:if(o=e.sent,t.eof=o.empty,!(o.size>0)){e.next=29;break}t.lastDoc=o.docs[o.docs.length-1],c=[],l=f(o.docs),e.prev=14,h=regeneratorRuntime.mark((function e(){var r,n,data,o,l,f,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=d.value,n=r.id,data=r.data(),o="",data.comment&&(l=data.comment.match(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi),o=data.comment,l&&l.map((function(t){o=o.replace(t,"<a style='color:blue !important' href=\""+t+'" target="_BLANK">'+t+"</a>")}))),t.eventIds[data.eventId]||(f=t.$fire.firestore.collection("events").doc(data.eventId).get(),c.push(f)),t.userIds[data.userId]||(h=t.$fire.firestore.collection("users").doc(data.userId).get(),c.push(h)),e.next=9,Promise.all(c).then((function(e){e.forEach((function(e){var r=e.id,data=e.data();r&&data&&(data.title&&(t.eventIds[r]=data),data.email&&(t.userIds[r]=data))}))}));case 9:t.posts.push(m(m(m(m({id:n},t.eventIds[data.eventId]),t.userIds[data.userId]),data),{},{alteredComment:o}));case 10:case"end":return e.stop()}}),e)})),l.s();case 17:if((d=l.n()).done){e.next=21;break}return e.delegateYield(h(),"t0",19);case 19:e.next=17;break;case 21:e.next=26;break;case 23:e.prev=23,e.t1=e.catch(14),l.e(e.t1);case 26:return e.prev=26,l.f(),e.finish(26);case 29:t.isLoading=!1;case 30:case"end":return e.stop()}}),e,null,[[14,23,26,29]])})))()},loadMore:function(){!(this.$el.getBoundingClientRect().bottom<=(window.innerHeight||document.documentElement.clientHeight)+100)||this.isLoading||this.eof||this.loadBlogs()}}},x=r(73),component=Object(x.a)(v,(function(){var t=this,e=t._self._c;return t.user?e(n.a,{staticStyle:{}},[e("h1",{staticClass:"d-flex justify-center align-center mt-7 mb-3 mt-md-9 blue--text text-decoration-underline",staticStyle:{"text-align":"center",width:"100%"}},[t._v(" Welcome ")]),t._v(" "),t._l(t.posts,(function(t){return e("Post",{key:t.createdAt,staticClass:"mb-0 pa-0",attrs:{post:t}})})),t._v(" "),t.isLoading?e("Spinner"):t._e()],2):e(n.a,[e("h1",[t._v("\n    You must be logged in to view this page.\n  ")]),t._v("\n  Go to "),e("NuxtLink",{staticClass:"primary--text",attrs:{color:"blue",to:"/"}},[t._v("\n      Home page\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Post:r(610).default,Spinner:r(522).default})}}]);