(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{566:function(t,e,r){var content=r(605);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("74e23782",content,!0,{sourceMap:!1})},567:function(t,e,r){var content=r(607);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("190b05c2",content,!0,{sourceMap:!1})},604:function(t,e,r){"use strict";r(566)},605:function(t,e,r){var o=r(25)(!1);o.push([t.i,"[data-v-42b6e04d]::-webkit-scrollbar{height:7px!important}[data-v-42b6e04d]::-webkit-scrollbar-track{background:#eee;border-radius:14px}[data-v-42b6e04d]::-webkit-scrollbar-thumb{background:#888;border-radius:14px}[data-v-42b6e04d]::-webkit-scrollbar-thumb:hover{background:#555}.card-carousel[data-v-42b6e04d]{-webkit-user-select:none;-moz-user-select:none;user-select:none;position:relative;width:100%}.progressbar[data-v-42b6e04d]{display:block;width:100%;height:5px;position:absolute;background-color:hsla(0,0%,86.7%,.25);z-index:1}.progressbar>div[data-v-42b6e04d]{background-color:hsla(0,0%,100%,.52);height:100%}.thumbnails[data-v-42b6e04d]{display:flex;flex-direction:row;overflow-x:auto;overflow-y:hidden}.thumbnail-image[data-v-42b6e04d]{display:flex;align-items:center;cursor:pointer;padding:3px}.thumbnail-image>img[data-v-42b6e04d]{width:100px;height:auto;transition:all .25s}.thumb-img[data-v-42b6e04d]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.thumb-img-outer[data-v-42b6e04d]{width:100px;height:70px}.thumbnail-image.active>div>img[data-v-42b6e04d],.thumbnail-image:hover>div>img[data-v-42b6e04d]{opacity:.6;box-shadow:2px 2px 6px 1px rgba(0,0,0,.5)}.card-img[data-v-42b6e04d]{position:relative;margin-bottom:15px}.card-img>img[data-v-42b6e04d]{display:block;margin:0 auto}.actions[data-v-42b6e04d]{font-size:1.5em;height:40px;position:absolute;top:50%;margin-top:-20px;width:100%;display:flex;align-items:center;justify-content:space-between;color:#585858}.actions>span[data-v-42b6e04d]{cursor:pointer;transition:all .25s;font-size:45px}.actions>span.prev[data-v-42b6e04d]{margin-left:5px}.actions>span.next[data-v-42b6e04d]{margin-right:5px}.actions>span[data-v-42b6e04d]:hover{color:#eee}",""]),t.exports=o},606:function(t,e,r){"use strict";r(567)},607:function(t,e,r){var o=r(25)(!1);o.push([t.i,"@media screen and (max-width:800px){.main-img[data-v-42b6e04d]{width:100%}}@media screen and (min-width:801px){.main-img[data-v-42b6e04d]{height:400px;max-width:100%}}",""]),t.exports=o},609:function(t,e,r){"use strict";r.r(e);r(59);var o={name:"Carousel",props:["startingImage","images","autoSlideInterval","showProgressBar"],data:function(){return{activeImage:0,autoSlideTimeout:null,stopSlider:!1,timeLeft:0,timerInterval:null,countdownInterval:10}},computed:{currentImage:function(){return this.timeLeft=this.autoSlideInterval,this.images[this.activeImage]?this.images[this.activeImage].imageUrl:"/img/image-not-found.png"},progressBar:function(){return 100-this.timeLeft/this.autoSlideInterval*100}},created:function(){this.startingImage&&this.startingImage>=0&&this.startingImage<this.images.length&&(this.activeImage=this.startingImage),this.autoSlideInterval&&this.autoSlideInterval>this.countdownInterval&&(this.startTimer(this.autoSlideInterval),this.timeLeft=this.autoSlideInterval,this.startCountdown())},methods:{nextImage:function(){var t=this.activeImage+1;t>=this.images.length&&(t=0),this.activateImage(t)},prevImage:function(){var t=this.activeImage-1;t<0&&(t=this.images.length-1),this.activateImage(t)},activateImage:function(t){this.activeImage=t},startTimer:function(t){if(t&&t>0&&!this.stopSlider){var e=this;clearTimeout(this.autoSlideTimeout),this.autoSlideTimeout=setTimeout((function(){e.nextImage(),e.startTimer(e.autoSlideInterval)}),t)}},stopTimer:function(){clearTimeout(this.autoSlideTimeout),this.stopSlider=!0,clearInterval(this.timerInterval)},restartTimer:function(){this.stopSlider=!1,clearInterval(this.timerInterval),this.startCountdown(),this.startTimer(this.timeLeft)},startCountdown:function(){if(this.showProgressBar){var t=this;this.timerInterval=setInterval((function(){t.timeLeft-=t.countdownInterval,t.timeLeft<=0&&(t.timeLeft=t.autoSlideInterval)}),this.countdownInterval)}}}},n=(r(604),r(606),r(73)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-carousel",on:{mouseover:t.stopTimer,mouseleave:t.restartTimer}},[t.autoSlideInterval&&t.showProgressBar?e("div",{staticClass:"progressbar"},[e("div",{style:{width:t.progressBar+"%"}})]):t._e(),t._v(" "),e("div",{staticClass:"card-img"},[e("img",{staticClass:"main-img",attrs:{src:t.currentImage,onerror:"this.src='/img/image-not-found'",alt:""}})]),t._v(" "),e("div",{staticClass:"thumbnails"},t._l(t.images,(function(image,r){return e("div",{key:r,class:["thumbnail-image",t.activeImage==r?"active":""],on:{click:function(e){return t.activateImage(r)}}},[e("div",{staticClass:"thumb-img-outer"},[e("img",{staticClass:"thumb-img",attrs:{src:image.imageUrl,onerror:"this.src='/img/image-not-found'"}})])])})),0)])}),[],!1,null,"42b6e04d",null);e.default=component.exports}}]);