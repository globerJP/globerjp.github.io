(window.webpackJsonp=window.webpackJsonp||[]).push([[24,21],{1086:function(t,e,r){"use strict";r.r(e);var n=r(247),o=(r(561),r(55),{name:"Carousel",props:["startingImage","images","autoSlideInterval","showProgressBar"],data:function(){return{imgFailed:!1,timeOut:null,timeOutInner:null,activeImage:0,autoSlideTimeout:null,stopSlider:!1,timeLeft:0,timerInterval:null,countdownInterval:10}},computed:{currentImage:function(){return this.timeLeft=this.autoSlideInterval,this.images[this.activeImage]?this.images[this.activeImage]:"/img/image-not-found.png"},progressBar:function(){return 100-this.timeLeft/this.autoSlideInterval*100}},created:function(){this.startingImage&&this.startingImage>=0&&this.startingImage<this.images.length&&(this.activeImage=this.startingImage),this.autoSlideInterval&&this.autoSlideInterval>this.countdownInterval&&(this.startTimer(this.autoSlideInterval),this.timeLeft=this.autoSlideInterval,this.startCountdown())},methods:{nextImage:function(){var t=this.activeImage+1;t>=this.images.length&&(t=0),this.activateImage(t)},prevImage:function(){var t=this.activeImage-1;t<0&&(t=this.images.length-1),this.activateImage(t)},activateImage:function(t){this.activeImage=t},transitionImage:function(t){var e=this.activeImage;t<e?this.transitionRight(t,e,250):t>e&&this.transitionLeft(t,e,250)},transitionLeft:function(t,e,r){var n=this;clearTimeout(this.timeOut),clearTimeout(this.timeOutInner);var o=[{transform:"translateX(150%)"},{transform:"translateX(0)"}],c={duration:r,iterations:1},l={duration:1.5*r,iterations:1};this.$refs["main-img-".concat(e)].lastItem.$el.animate([{transform:"translateX(0)"},{transform:"translateX(-100%)"}],c),this.timeOut=setTimeout((function(){n.$refs["main-img-".concat(t)].lastItem.$el.animate(o,l)}),r-60),this.timeOutInner=setTimeout((function(){n.activateImage(t)}),r-30)},transitionRight:function(t,e,r){var n=this;clearTimeout(this.timeOut),clearTimeout(this.timeOutInner);var o=[{transform:"translateX(-150%)"},{transform:"translateX(0)"}],c={duration:r,iterations:1},l={duration:1.5*r,iterations:1};this.$refs["main-img-".concat(e)].lastItem.$el.animate([{transform:"translateX(0)"},{transform:"translateX(100%)"}],c),this.timeOut=setTimeout((function(){n.$refs["main-img-".concat(t)].lastItem.$el.animate(o,l)}),r-60),this.timeOutInner=setTimeout((function(){n.activateImage(t)}),r-30)},startTimer:function(t){if(t&&t>0&&!this.stopSlider){var e=this;clearTimeout(this.autoSlideTimeout),this.autoSlideTimeout=setTimeout((function(){e.nextImage(),e.startTimer(e.autoSlideInterval)}),t)}},stopTimer:function(){clearTimeout(this.autoSlideTimeout),this.stopSlider=!0,clearInterval(this.timerInterval)},restartTimer:function(){this.stopSlider=!1,clearInterval(this.timerInterval),this.startCountdown(),this.startTimer(this.timeLeft)},startCountdown:function(){if(this.showProgressBar){var t=this;this.timerInterval=setInterval((function(){t.timeLeft-=t.countdownInterval,t.timeLeft<=0&&(t.timeLeft=t.autoSlideInterval)}),this.countdownInterval)}}}}),c=(r(984),r(986),r(65)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-carousel",on:{mouseover:t.stopTimer,mouseleave:t.restartTimer}},[t.autoSlideInterval&&t.showProgressBar?e("div",{staticClass:"progressbar"},[e("div",{style:{width:t.progressBar+"%"}})]):t._e(),t._v(" "),e("div",{class:["card-img",1==t.images.length?"mb-0":""],staticStyle:{overflow:"hidden"}},t._l(t.images,(function(image,r){return e(n.a,{directives:[{name:"show",rawName:"v-show",value:t.activeImage==r,expression:"activeImage == index? true: false"}],key:r,ref:"main-img-"+r,refInFor:!0,class:["main-img",1==t.images.length?"mb-0":""],attrs:{contain:"",src:t.imgFailed?"/img/image-not-found.png":image.imageUrl,alt:""},on:{error:function(e){t.imgFailed=!0}}})})),1),t._v(" "),t.images.length>1?e("div",{staticClass:"d-flex justify-center align-center"},[e("div",{staticClass:"thumbnails"},t._l(t.images,(function(image,r){return e("div",{key:r,class:["thumbnail-image",t.activeImage==r?"active":""],on:{click:function(e){return t.transitionImage(r)}}},[e("div",{staticClass:"thumb-img-outer",staticStyle:{"background-color":"#CCCCCC"}},[e("div",{staticClass:"thumb-img d-flex justify-center align-center"},[t._v("\n          "+t._s(r+1)+"\n          ")])])])})),0)]):t._e()])}),[],!1,null,"41b0c120",null);e.default=component.exports},561:function(t,e,r){"use strict";var n=r(38),o=r(113),c=r(63),l=r(71),m=r(267);n&&(m(Array.prototype,"lastItem",{configurable:!0,get:function(){var t=c(this),e=l(t);return 0==e?void 0:t[e-1]},set:function(t){var e=c(this),r=l(e);return e[0==r?0:r-1]=t}}),o("lastItem"))},848:function(t,e,r){var content=r(985);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("726460b9",content,!0,{sourceMap:!1})},849:function(t,e,r){var content=r(987);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("096c9fdf",content,!0,{sourceMap:!1})},984:function(t,e,r){"use strict";r(848)},985:function(t,e,r){var n=r(25)(!1);n.push([t.i,"[data-v-41b0c120]::-webkit-scrollbar{height:7px!important}[data-v-41b0c120]::-webkit-scrollbar-track{background:#eee;border-radius:14px}[data-v-41b0c120]::-webkit-scrollbar-thumb{background:#888;border-radius:14px}[data-v-41b0c120]::-webkit-scrollbar-thumb:hover{background:#555}.card-carousel[data-v-41b0c120]{-webkit-user-select:none;-moz-user-select:none;user-select:none;position:relative;width:100%}.progressbar[data-v-41b0c120]{display:block;width:100%;height:5px;position:absolute;background-color:hsla(0,0%,86.7%,.25);z-index:1}.progressbar>div[data-v-41b0c120]{background-color:hsla(0,0%,100%,.52);height:100%}.thumbnails[data-v-41b0c120]{display:flex;flex-direction:row;overflow-x:visible;overflow-y:visible}.thumbnail-image[data-v-41b0c120]{display:flex;overflow:visible;align-items:center;cursor:pointer;padding:3px 6px}.thumbnail-image>img[data-v-41b0c120]{transition:all .25s}.thumb-img[data-v-41b0c120]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;background:#fff;border-radius:50%;border:2px solid #2196f3}.thumb-img-outer[data-v-41b0c120]{font-size:16px;font-weight:600;color:#fff;width:24px;height:24px;border-radius:50%}.thumbnail-image.active>div>div[data-v-41b0c120],.thumbnail-image:hover>div>div[data-v-41b0c120]{opacity:1;background:#2196f3}.card-img[data-v-41b0c120]{position:relative;margin-bottom:15px}.card-img>img[data-v-41b0c120]{display:block;margin:0 auto}.actions[data-v-41b0c120]{font-size:1.5em;height:40px;position:absolute;top:50%;margin-top:-20px;width:100%;display:flex;align-items:center;justify-content:space-between;color:#585858}.actions>span[data-v-41b0c120]{cursor:pointer;transition:all .25s;font-size:45px}.actions>span.prev[data-v-41b0c120]{margin-left:5px}.actions>span.next[data-v-41b0c120]{margin-right:5px}.actions>span[data-v-41b0c120]:hover{color:#eee}",""]),t.exports=n},986:function(t,e,r){"use strict";r(849)},987:function(t,e,r){var n=r(25)(!1);n.push([t.i,"@media screen and (max-width:800px){.main-img[data-v-41b0c120]{height:350px;width:100%}}@media screen and (min-width:801px){.main-img[data-v-41b0c120]{height:400px;max-width:100%}}.create-image[data-v-41b0c120]{-webkit-animation:createBox-41b0c120 .99s;animation:createBox-41b0c120 .99s}.delete-image[data-v-41b0c120]{-webkit-animation:deleteBox-41b0c120 .99s;animation:deleteBox-41b0c120 .99s}@-webkit-keyframes createBox-41b0c120{0%{transform:translateX(-100%)}to{transform:translateX(0)}}@keyframes createBox-41b0c120{0%{transform:translateX(-100%)}to{transform:translateX(0)}}@-webkit-keyframes deleteBox-41b0c120{0%{transform:translateX(0)}to{transform:translateX(100%)}}@keyframes deleteBox-41b0c120{0%{transform:translateX(0)}to{transform:translateX(100%)}}",""]),t.exports=n}}]);