(window.webpackJsonp=window.webpackJsonp||[]).push([[26,25],{1091:function(t,e,n){"use strict";n(921)},1092:function(t,e,n){var r=n(25)(!1);r.push([t.i,"[data-v-668558f1]::-webkit-scrollbar{height:7px!important}[data-v-668558f1]::-webkit-scrollbar-track{background:#eee;border-radius:14px}[data-v-668558f1]::-webkit-scrollbar-thumb{background:#888;border-radius:14px}[data-v-668558f1]::-webkit-scrollbar-thumb:hover{background:#555}.card-carousel[data-v-668558f1]{-webkit-user-select:none;-moz-user-select:none;user-select:none;position:relative;width:100%}.progressbar[data-v-668558f1]{display:block;width:100%;height:5px;position:absolute;background-color:hsla(0,0%,86.7%,.25);z-index:1}.progressbar>div[data-v-668558f1]{background-color:hsla(0,0%,100%,.52);height:100%}.thumbnails[data-v-668558f1]{display:flex;flex-direction:row;overflow-x:auto;overflow-y:hidden}.thumbnail-image[data-v-668558f1]{display:flex;align-items:center;cursor:pointer;padding:3px}.thumbnail-image>img[data-v-668558f1]{width:100px;height:auto;transition:all .25s}.thumb-img[data-v-668558f1]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.thumb-img-outer[data-v-668558f1]{width:100px;height:70px}.thumbnail-image.active>div>img[data-v-668558f1],.thumbnail-image:hover>div>img[data-v-668558f1]{opacity:.6;box-shadow:2px 2px 6px 1px rgba(0,0,0,.5)}.card-img[data-v-668558f1]{position:relative;margin-bottom:15px}.card-img>img[data-v-668558f1]{display:block;margin:0 auto}.actions[data-v-668558f1]{font-size:1.5em;height:40px;position:absolute;top:50%;margin-top:-20px;width:100%;display:flex;align-items:center;justify-content:space-between;color:#585858}.actions>span[data-v-668558f1]{cursor:pointer;transition:all .25s;font-size:45px}.actions>span.prev[data-v-668558f1]{margin-left:5px}.actions>span.next[data-v-668558f1]{margin-right:5px}.actions>span[data-v-668558f1]:hover{color:#eee}",""]),t.exports=r},1093:function(t,e,n){"use strict";n(922)},1094:function(t,e,n){var r=n(25)(!1);r.push([t.i,"@media screen and (max-width:800px){.main-img[data-v-668558f1]{height:350px;width:100%}}@media screen and (min-width:801px){.main-img[data-v-668558f1]{height:400px;max-width:100%}}.create-image[data-v-668558f1]{-webkit-animation:createBox-668558f1 .99s;animation:createBox-668558f1 .99s}.delete-image[data-v-668558f1]{-webkit-animation:deleteBox-668558f1 .99s;animation:deleteBox-668558f1 .99s}@-webkit-keyframes createBox-668558f1{0%{transform:translateX(-100%)}to{transform:translateX(0)}}@keyframes createBox-668558f1{0%{transform:translateX(-100%)}to{transform:translateX(0)}}.hidden-visibility[data-v-668558f1]{visibility:hidden}.visible-visibility[data-v-668558f1]{visibility:visible}@-webkit-keyframes deleteBox-668558f1{0%{transform:translateX(0)}to{transform:translateX(100%)}}@keyframes deleteBox-668558f1{0%{transform:translateX(0)}to{transform:translateX(100%)}}",""]),t.exports=r},1202:function(t,e,n){"use strict";n.r(e);var r=n(248),o=(n(575),n(54),{name:"Carousel",props:["startingImage","images","autoSlideInterval","showProgressBar"],data:function(){return{imgFailed:!1,timeOut:null,timeOutInner:null,activeImage:0,autoSlideTimeout:null,stopSlider:!1,timeLeft:0,timerInterval:null,countdownInterval:10}},computed:{currentImage:function(){return this.timeLeft=this.autoSlideInterval,this.images[this.activeImage]?this.images[this.activeImage]:"/img/image-not-found.png"},progressBar:function(){return 100-this.timeLeft/this.autoSlideInterval*100}},created:function(){this.startingImage&&this.startingImage>=0&&this.startingImage<this.images.length&&(this.activeImage=this.startingImage),this.autoSlideInterval&&this.autoSlideInterval>this.countdownInterval&&(this.startTimer(this.autoSlideInterval),this.timeLeft=this.autoSlideInterval,this.startCountdown())},methods:{nextImage:function(){var t=this.activeImage+1;t>=this.images.length&&(t=0),this.activateImage(t)},prevImage:function(){var t=this.activeImage-1;t<0&&(t=this.images.length-1),this.activateImage(t)},activateImage:function(t){this.activeImage=t},transitionImage:function(t){var e=this.activeImage;t<e?this.transitionRight(t,e,210):t>e&&this.transitionLeft(t,e,210)},transitionLeft:function(t,e,n){var r=this;clearTimeout(this.timeOut),clearTimeout(this.timeOutInner);var o=[{transform:"translateX(100%)"},{transform:"translateX(0)"}],l={duration:n,iterations:1},m={duration:n,iterations:1};this.$refs["main-img-".concat(e)].lastItem.$el.animate([{transform:"translateX(0)"},{transform:"translateX(-100%)"}],l),this.timeOut=setTimeout((function(){r.$refs["main-img-".concat(t)].lastItem.$el.animate(o,m)}),n-20),this.timeOutInner=setTimeout((function(){r.activateImage(t)}),n-10)},transitionRight:function(t,e,n){var r=this;clearTimeout(this.timeOut),clearTimeout(this.timeOutInner);var o=[{transform:"translateX(-100%)"},{transform:"translateX(0)"}],l={duration:n,iterations:1},m={duration:n,iterations:1};this.$refs["main-img-".concat(e)].lastItem.$el.animate([{transform:"translateX(0)"},{transform:"translateX(100%)"}],l),this.timeOut=setTimeout((function(){r.$refs["main-img-".concat(t)].lastItem.$el.animate(o,m)}),n-20),this.timeOutInner=setTimeout((function(){r.activateImage(t)}),n-10)},startTimer:function(t){if(t&&t>0&&!this.stopSlider){var e=this;clearTimeout(this.autoSlideTimeout),this.autoSlideTimeout=setTimeout((function(){e.nextImage(),e.startTimer(e.autoSlideInterval)}),t)}},stopTimer:function(){clearTimeout(this.autoSlideTimeout),this.stopSlider=!0,clearInterval(this.timerInterval)},restartTimer:function(){this.stopSlider=!1,clearInterval(this.timerInterval),this.startCountdown(),this.startTimer(this.timeLeft)},startCountdown:function(){if(this.showProgressBar){var t=this;this.timerInterval=setInterval((function(){t.timeLeft-=t.countdownInterval,t.timeLeft<=0&&(t.timeLeft=t.autoSlideInterval)}),this.countdownInterval)}}}}),l=(n(1091),n(1093),n(65)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-carousel",on:{mouseover:t.stopTimer,mouseleave:t.restartTimer}},[t.autoSlideInterval&&t.showProgressBar?e("div",{staticClass:"progressbar"},[e("div",{style:{width:t.progressBar+"%"}})]):t._e(),t._v(" "),e("div",{class:["card-img",1==t.images.length?"mb-0":""],staticStyle:{overflow:"hidden",position:"relative",height:"400px",width:"100%"}},t._l(t.images,(function(image,n){return e(r.a,{key:n,ref:"main-img-"+n,refInFor:!0,class:["main-img",1==t.images.length?"mb-0":"",n==t.activeImage?"visible-visiblity":"hidden-visibility"],staticStyle:{position:"absolute",left:"0",right:"0",margin:"auto"},attrs:{contain:"",src:t.imgFailed?"/img/image-not-found.png":image.imageUrl,alt:""},on:{error:function(e){t.imgFailed=!0}}})})),1),t._v(" "),t.images.length>1?e("div",{staticClass:"d-flex justify-center align-center"},[e("div",{staticClass:"thumbnails"},t._l(t.images,(function(image,n){return e("div",{key:n,class:["thumbnail-image",t.activeImage==n?"active":""],on:{click:function(e){return t.transitionImage(n)}}},[e("div",{staticClass:"thumb-img-outer"},[e("img",{staticClass:"thumb-img",attrs:{src:t.imgFailed?"/img/image-not-found.png":image.teaserImageUrl},on:{error:function(e){t.imgFailed=!0}}})])])})),0)]):t._e()])}),[],!1,null,"668558f1",null);e.default=component.exports},575:function(t,e,n){"use strict";var r=n(38),o=n(113),l=n(63),m=n(71),c=n(269);r&&(c(Array.prototype,"lastItem",{configurable:!0,get:function(){var t=l(this),e=m(t);return 0==e?void 0:t[e-1]},set:function(t){var e=l(this),n=m(e);return e[0==n?0:n-1]=t}}),o("lastItem"))},921:function(t,e,n){var content=n(1092);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("3b2601cd",content,!0,{sourceMap:!1})},922:function(t,e,n){var content=n(1094);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("5dd364a5",content,!0,{sourceMap:!1})}}]);