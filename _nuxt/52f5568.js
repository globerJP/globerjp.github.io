(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{554:function(t,e,r){"use strict";var n=r(38),o=r(113),l=r(63),m=r(71),d=r(265);n&&(d(Array.prototype,"lastItem",{configurable:!0,get:function(){var t=l(this),e=m(t);return 0==e?void 0:t[e-1]},set:function(t){var e=l(this),r=m(e);return e[0==r?0:r-1]=t}}),o("lastItem"))},681:function(t,e,r){var content=r(750);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("6d0c145e",content,!0,{sourceMap:!1})},682:function(t,e,r){var content=r(752);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("5e22df6e",content,!0,{sourceMap:!1})},683:function(t,e,r){var content=r(754);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("23f0756b",content,!0,{sourceMap:!1})},749:function(t,e,r){"use strict";r(681)},750:function(t,e,r){var n=r(25)(!1);n.push([t.i,".thumbnail-image.active .v-image__image,.thumbnail-image:hover .v-image__image{opacity:.6;box-shadow:2px 2px 6px 1px rgba(0,0,0,.5)}",""]),t.exports=n},751:function(t,e,r){"use strict";r(682)},752:function(t,e,r){var n=r(25)(!1);n.push([t.i,"[data-v-2b7ab4d0]::-webkit-scrollbar{height:7px!important}[data-v-2b7ab4d0]::-webkit-scrollbar-track{background:#eee;border-radius:14px}[data-v-2b7ab4d0]::-webkit-scrollbar-thumb{background:#888;border-radius:14px}[data-v-2b7ab4d0]::-webkit-scrollbar-thumb:hover{background:#555}.card-carousel[data-v-2b7ab4d0]{-webkit-user-select:none;-moz-user-select:none;user-select:none;position:relative;width:100%}.progressbar[data-v-2b7ab4d0]{display:block;width:100%;height:5px;position:absolute;background-color:hsla(0,0%,86.7%,.25);z-index:1}.progressbar>div[data-v-2b7ab4d0]{background-color:hsla(0,0%,100%,.52);height:100%}.thumbnails[data-v-2b7ab4d0]{display:flex;flex-direction:row;overflow-x:overlay;overflow-y:hidden}.thumbnail-image[data-v-2b7ab4d0]{display:flex;align-items:center;cursor:pointer;padding:3px 9px}.thumbnail-image[data-v-2b7ab4d0]:first-child{padding-left:0}.thumbnail-image[data-v-2b7ab4d0]:last-child{padding-right:0}.thumbnail-image>img[data-v-2b7ab4d0]{width:100px;height:auto;transition:all .25s}.thumb-img[data-v-2b7ab4d0]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.thumb-img-outer[data-v-2b7ab4d0]{width:120px;height:70px}.card-img[data-v-2b7ab4d0]{position:relative;margin-bottom:15px}.card-img>img[data-v-2b7ab4d0]{display:block;margin:0 auto}.actions[data-v-2b7ab4d0]{font-size:1.5em;height:40px;position:absolute;top:50%;margin-top:-20px;width:100%;display:flex;align-items:center;justify-content:space-between;color:#585858}.actions>span[data-v-2b7ab4d0]{cursor:pointer;transition:all .25s;font-size:45px}.actions>span.prev[data-v-2b7ab4d0]{margin-left:5px}.actions>span.next[data-v-2b7ab4d0]{margin-right:5px}.actions>span[data-v-2b7ab4d0]:hover{color:#eee}",""]),t.exports=n},753:function(t,e,r){"use strict";r(683)},754:function(t,e,r){var n=r(25)(!1);n.push([t.i,".main-img[data-v-2b7ab4d0]{height:100%;width:100%}@media screen and (max-width:800px){.card-img[data-v-2b7ab4d0]{height:400px;max-width:100%}}@media screen and (max-width:500px){.card-img[data-v-2b7ab4d0]{height:calc(131vw - 20px);max-width:100%}}@media screen and (min-width:801px){.card-img[data-v-2b7ab4d0]{height:420px;max-width:100%}}.create-image[data-v-2b7ab4d0]{-webkit-animation:createBox-2b7ab4d0 .99s;animation:createBox-2b7ab4d0 .99s}.delete-image[data-v-2b7ab4d0]{-webkit-animation:deleteBox-2b7ab4d0 .99s;animation:deleteBox-2b7ab4d0 .99s}@-webkit-keyframes createBox-2b7ab4d0{0%{transform:translateX(-100%)}to{transform:translateX(0)}}@keyframes createBox-2b7ab4d0{0%{transform:translateX(-100%)}to{transform:translateX(0)}}@-webkit-keyframes deleteBox-2b7ab4d0{0%{transform:translateX(0)}to{transform:translateX(100%)}}@keyframes deleteBox-2b7ab4d0{0%{transform:translateX(0)}to{transform:translateX(100%)}}",""]),t.exports=n},821:function(t,e,r){"use strict";r.r(e);var n=r(247),o=(r(54),r(554),{name:"Carousel",props:["startingImage","images","autoSlideInterval","showProgressBar","thumbnailWidth","eager"],data:function(){return{dragging:!1,timer:null,imgFailed:!1,timeOut:null,timeOutInner:null,activeImage:0,autoSlideTimeout:null,stopSlider:!1,timeLeft:0,timerInterval:null,countdownInterval:10}},computed:{isMobileScreen:function(){return!(window.innerWidth>800)},currentImage:function(){return this.timeLeft=this.autoSlideInterval,this.images[this.activeImage]?this.images[this.activeImage]:"/img/image-not-found.png"},progressBar:function(){return 100-this.timeLeft/this.autoSlideInterval*100}},created:function(){this.startingImage&&this.startingImage>=0&&this.startingImage<this.images.length&&(this.activeImage=this.startingImage),this.autoSlideInterval&&this.autoSlideInterval>this.countdownInterval&&(this.startTimer(this.autoSlideInterval),this.timeLeft=this.autoSlideInterval,this.startCountdown())},methods:{start:function(){var t=this;this.timer=setTimeout((function(){return t.dragging=!0}),100)},end:function(){var t=this;clearTimeout(this.timer),setTimeout((function(){return t.dragging=!1}))},click:function(t){this.dragging&&t.stopPropagation()},nextImage:function(){var t=this.activeImage+1;t>=this.images.length&&(t=0),this.activateImage(t)},prevImage:function(){var t=this.activeImage-1;t<0&&(t=this.images.length-1),this.activateImage(t)},activateImage:function(t){this.activeImage=t},transitionImage:function(t){var e=this.activeImage;t<e?this.transitionRight(t,e,250):t>e&&this.transitionLeft(t,e,250)},transitionLeft:function(t,e,r){var n=this;clearTimeout(this.timeOut),clearTimeout(this.timeOutInner);var o=[{transform:"translateX(150%)"},{transform:"translateX(0)"}],l={duration:r,iterations:1},m={duration:1.5*r,iterations:1};this.$refs["main-img-".concat(e)].lastItem.$el.animate([{transform:"translateX(0)"},{transform:"translateX(-100%)"}],l),this.timeOut=setTimeout((function(){n.$refs["main-img-".concat(t)].lastItem.$el.animate(o,m)}),r-60),this.timeOutInner=setTimeout((function(){n.activateImage(t)}),r-30)},transitionRight:function(t,e,r){var n=this;clearTimeout(this.timeOut),clearTimeout(this.timeOutInner);var o=[{transform:"translateX(-150%)"},{transform:"translateX(0)"}],l={duration:r,iterations:1},m={duration:1.5*r,iterations:1};this.$refs["main-img-".concat(e)].lastItem.$el.animate([{transform:"translateX(0)"},{transform:"translateX(100%)"}],l),this.timeOut=setTimeout((function(){n.$refs["main-img-".concat(t)].lastItem.$el.animate(o,m)}),r-60),this.timeOutInner=setTimeout((function(){n.activateImage(t)}),r-30)},startTimer:function(t){if(t&&t>0&&!this.stopSlider){var e=this;clearTimeout(this.autoSlideTimeout),this.autoSlideTimeout=setTimeout((function(){e.nextImage(),e.startTimer(e.autoSlideInterval)}),t)}},stopTimer:function(){clearTimeout(this.autoSlideTimeout),this.stopSlider=!0,clearInterval(this.timerInterval)},restartTimer:function(){this.stopSlider=!1,clearInterval(this.timerInterval),this.startCountdown(),this.startTimer(this.timeLeft)},startCountdown:function(){if(this.showProgressBar){var t=this;this.timerInterval=setInterval((function(){t.timeLeft-=t.countdownInterval,t.timeLeft<=0&&(t.timeLeft=t.autoSlideInterval)}),this.countdownInterval)}}}}),l=(r(749),r(751),r(753),r(65)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-carousel",on:{mouseover:t.stopTimer,mouseleave:t.restartTimer}},[t.autoSlideInterval&&t.showProgressBar?e("div",{staticClass:"progressbar"},[e("div",{style:{width:t.progressBar+"%"}})]):t._e(),t._v(" "),e("div",{class:["card-img",1==t.images.length?"mb-0":""],staticStyle:{overflow:"hidden"}},t._l(t.images,(function(image,r){return e(n.a,{directives:[{name:"show",rawName:"v-show",value:t.activeImage==r,expression:"activeImage == index? true: false"}],key:r,ref:"main-img-"+r,refInFor:!0,class:["main-img",1==t.images.length?"mb-0":""],attrs:{eager:0===r||t.eager,contain:"",src:t.imgFailed?"/img/image-not-found.png":image.imageUrl,alt:""},on:{error:function(e){t.imgFailed=!0}}})})),1),t._v(" "),e("div",{staticClass:"d-flex justify-center align-center"},[t.images.length>1?e("div",{staticClass:"d-flex justify-center align-center",style:"width:min(".concat(this.thumbnailWidth||"500","px,100%);padding: 0 10px;")},[t.isMobileScreen?e("div",{staticClass:"thumbnails"},t._l(t.images,(function(image,r){return e("div",{key:r,class:["thumbnail-image",t.activeImage==r?"active":""],on:{click:function(e){return t.transitionImage(r)}}},[e("div",{staticClass:"thumb-img-outer"},[e(n.a,{staticClass:"thumb-img",attrs:{src:t.imgFailed?"/img/image-not-found.png":image.teaserImageUrl,eager:t.eager},on:{error:function(e){t.imgFailed=!0}}})],1)])})),0):e("div",{directives:[{name:"dragscroll",rawName:"v-dragscroll"}],staticClass:"thumbnails",on:{dragscrollstart:t.start,dragscrollend:t.end,"!click":function(e){return t.click.apply(null,arguments)}}},t._l(t.images,(function(image,r){return e("div",{key:r,class:["thumbnail-image",t.activeImage==r?"active":""],on:{click:function(e){return t.transitionImage(r)}}},[e("div",{staticClass:"thumb-img-outer"},[e(n.a,{staticClass:"thumb-img",attrs:{src:t.imgFailed?"/img/image-not-found.png":image.teaserImageUrl,eager:t.eager},on:{error:function(e){t.imgFailed=!0}}})],1)])})),0)]):t._e()])])}),[],!1,null,"2b7ab4d0",null);e.default=component.exports}}]);