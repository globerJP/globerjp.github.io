(window.webpackJsonp=window.webpackJsonp||[]).push([[12,20,36],{542:function(t,e,n){var content=n(546);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("6333d4fe",content,!0,{sourceMap:!1})},544:function(t,e,n){"use strict";n.r(e);var r={name:"LoadingSpinner"},o=(n(545),n(65)),component=Object(o.a)(r,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{"margin-top":"10px"}},[t("div",{staticClass:"lds-ring"},[t("div"),t("div"),t("div"),t("div")])])}],!1,null,"6f49ae7c",null);e.default=component.exports},545:function(t,e,n){"use strict";n(542)},546:function(t,e,n){var r=n(25)(!1);r.push([t.i,".lds-ring[data-v-6f49ae7c]{display:inline-block;position:relative;width:80px;height:80px}.lds-ring div[data-v-6f49ae7c]{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:5px;border-radius:50%;-webkit-animation:lds-ring-6f49ae7c 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:lds-ring-6f49ae7c 1.2s cubic-bezier(.5,0,.5,1) infinite;border:5px solid transparent;border-top-color:#2196f3}.lds-ring div[data-v-6f49ae7c]:first-child{-webkit-animation-delay:-.45s;animation-delay:-.45s}.lds-ring div[data-v-6f49ae7c]:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.lds-ring div[data-v-6f49ae7c]:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}@-webkit-keyframes lds-ring-6f49ae7c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes lds-ring-6f49ae7c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""]),t.exports=r},554:function(t,e,n){"use strict";var r=n(38),o=n(113),c=n(62),l=n(71),m=n(265);r&&(m(Array.prototype,"lastItem",{configurable:!0,get:function(){var t=c(this),e=l(t);return 0==e?void 0:t[e-1]},set:function(t){var e=c(this),n=l(e);return e[0==n?0:n-1]=t}}),o("lastItem"))},562:function(t,e,n){var content=n(587);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("d2db9898",content,!0,{sourceMap:!1})},563:function(t,e,n){var content=n(589);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("521b5646",content,!0,{sourceMap:!1})},564:function(t,e,n){var content=n(591);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("0e852041",content,!0,{sourceMap:!1})},578:function(t,e,n){"use strict";n.r(e);var r=n(247),o=(n(54),n(36),n(554),{name:"Carousel",props:["startingImage","images","autoSlideInterval","showProgressBar","thumbnailWidth","eager","portrait","postId"],data:function(){return{dragging:!1,timer:null,imgFailed:!1,timeOut:null,timeOutInner:null,timeOutOuter:null,activeImage:0,passiveImage:0,autoSlideTimeout:null,stopSlider:!1,timeLeft:0,timerInterval:null,countdownInterval:10}},computed:{isMobileScreen:function(){return!(window.innerWidth>500)},currentImage:function(){return this.timeLeft=this.autoSlideInterval,this.images[this.activeImage]?this.images[this.activeImage]:"/img/image-not-found.png"},progressBar:function(){return 100-this.timeLeft/this.autoSlideInterval*100}},mounted:function(){console.log("eager",this.eager)},created:function(){this.startingImage&&this.startingImage>=0&&this.startingImage<this.images.length&&(this.activeImage=this.startingImage,this.passiveImage=this.startingImage),this.autoSlideInterval&&this.autoSlideInterval>this.countdownInterval&&(this.startTimer(this.autoSlideInterval),this.timeLeft=this.autoSlideInterval,this.startCountdown())},methods:{start:function(){var t=this;this.timer=setTimeout((function(){return t.dragging=!0}),100)},end:function(){var t=this;clearTimeout(this.timer),setTimeout((function(){return t.dragging=!1}))},click:function(t){this.dragging&&t.stopPropagation()},nextImage:function(){var t=this.activeImage+1;this.passiveImage=this.activeImage,t>=this.images.length&&(t=0),this.activateImage(t)},prevImage:function(){var t=this.activeImage-1;this.passiveImage=this.activeImage,t<0&&(t=this.images.length-1),this.activateImage(t)},activateImage:function(t){this.passiveImage=this.activeImage,this.activeImage=t},transitionImage:function(t){this.passiveImage=this.activeImage,this.activeImage=null;var e=this.passiveImage,n=400;this.isMobileScreen&&(n=300),t<e?this.transitionRight(t,e,n):t>e?this.transitionLeft(t,e,n):this.activeImage=this.passiveImage,this.$forceUpdate()},transitionLeft:function(t,e,n){var r=this;clearTimeout(this.timeOut),clearTimeout(this.timeOutInner),clearTimeout(this.timeOutOuter);var o=[{transform:"translateX(130%)"},{transform:"translateX(0)"}],c={duration:n,iterations:1},l={duration:n,iterations:1};this.$refs["".concat(this.postId?this.postId:"carousel","-old-img-").concat(e)].lastItem.$el.animate([{transform:"translateX(0)"},{transform:"translateX(-130%)"}],c),this.timeOut=setTimeout((function(){var e=r.$refs["".concat(r.postId?r.postId:"carousel","-main-img-").concat(t)];r.activeImage=t,e.lastItem.$el.animate(o,l)}),10),this.timeOutInner=setTimeout((function(){r.passiveImage=null}),n-20),this.timeOutOuter=setTimeout((function(){r.passiveImage=r.activeImage}),n+20)},transitionRight:function(t,e,n){var r=this;clearTimeout(this.timeOut),clearTimeout(this.timeOutInner),clearTimeout(this.timeOutOuter);var o=[{transform:"translateX(-130%)"},{transform:"translateX(0)"}],c={duration:n,iterations:1},l={duration:n,iterations:1};this.$refs["".concat(this.postId?this.postId:"carousel","-old-img-").concat(e)].lastItem.$el.animate([{transform:"translateX(0)"},{transform:"translateX(130%)"}],c),this.timeOut=setTimeout((function(){r.activeImage=t,r.$refs["".concat(r.postId?r.postId:"carousel","-main-img-").concat(t)].lastItem.$el.animate(o,l)}),10),this.timeOutInner=setTimeout((function(){r.passiveImage=null}),n-20),this.timeOutOuter=setTimeout((function(){r.passiveImage=r.activeImage}),n+20)},startTimer:function(t){if(t&&t>0&&!this.stopSlider){var e=this;clearTimeout(this.autoSlideTimeout),this.autoSlideTimeout=setTimeout((function(){e.nextImage(),e.startTimer(e.autoSlideInterval)}),t)}},stopTimer:function(){clearTimeout(this.autoSlideTimeout),this.stopSlider=!0,clearInterval(this.timerInterval)},restartTimer:function(){this.stopSlider=!1,clearInterval(this.timerInterval),this.startCountdown(),this.startTimer(this.timeLeft)},startCountdown:function(){if(this.showProgressBar){var t=this;this.timerInterval=setInterval((function(){t.timeLeft-=t.countdownInterval,t.timeLeft<=0&&(t.timeLeft=t.autoSlideInterval)}),this.countdownInterval)}}}}),c=(n(586),n(588),n(590),n(65)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-carousel",on:{mouseover:t.stopTimer,mouseleave:t.restartTimer}},[t.autoSlideInterval&&t.showProgressBar?e("div",{staticClass:"progressbar"},[e("div",{style:{width:t.progressBar+"%"}})]):t._e(),t._v(" "),e("div",{class:[t.portrait?"portrait-card-img":"card-img",1==t.images.length?"mb-0":""],staticStyle:{overflow:"hidden"}},[t._l(t.images,(function(image,n){return e(r.a,{directives:[{name:"show",rawName:"v-show",value:t.passiveImage===n,expression:"passiveImage === index? true: false"}],key:"old-img-"+n,ref:(t.postId?t.postId:"carousel")+"-old-img-"+n,refInFor:!0,class:["old-img",1===t.images.length?"mb-0":""],attrs:{eager:0===n||n===t.passiveImage+1||t.eager,contain:"",src:t.imgFailed?"/img/image-not-found.png":image.imageUrl,alt:""},on:{error:function(e){t.imgFailed=!0}}})})),t._v(" "),t._l(t.images,(function(image,n){return e(r.a,{directives:[{name:"show",rawName:"v-show",value:t.activeImage===n,expression:"activeImage === index? true: false"}],key:"main-img-"+n,ref:(t.postId?t.postId:"carousel")+"-main-img-"+n,refInFor:!0,class:["main-img",1===t.images.length?"mb-0":""],attrs:{eager:0===n||n===t.activeImage+1||t.eager,contain:"",src:t.imgFailed?"/img/image-not-found.png":image.imageUrl,alt:""},on:{error:function(e){t.imgFailed=!0}}})}))],2),t._v(" "),e("div",{staticClass:"d-flex justify-center align-center"},[t.images.length>1?e("div",{staticClass:"d-flex justify-center align-center",style:"width:min(".concat(this.thumbnailWidth||"500","px,100%);padding: 0 10px;")},[t.isMobileScreen?e("div",{staticClass:"thumbnails"},t._l(t.images,(function(image,n){return e("div",{key:n,class:["thumbnail-image",t.activeImage==n?"active":""],on:{click:function(e){return t.transitionImage(n)}}},[e("div",{staticClass:"thumb-img-outer"},[e(r.a,{staticClass:"thumb-img",attrs:{src:t.imgFailed?"/img/image-not-found.png":image.teaserImageUrl},on:{error:function(e){t.imgFailed=!0}}})],1)])})),0):e("div",{directives:[{name:"dragscroll",rawName:"v-dragscroll"}],staticClass:"thumbnails",on:{dragscrollstart:t.start,dragscrollend:t.end,"!click":function(e){return t.click.apply(null,arguments)}}},t._l(t.images,(function(image,n){return e("div",{key:n,class:["thumbnail-image",t.activeImage==n?"active":""],on:{click:function(e){return t.transitionImage(n)}}},[e("div",{staticClass:"thumb-img-outer"},[e(r.a,{staticClass:"thumb-img",attrs:{src:t.imgFailed?"/img/image-not-found.png":image.teaserImageUrl},on:{error:function(e){t.imgFailed=!0}}})],1)])})),0)]):t._e()])])}),[],!1,null,"f1287796",null);e.default=component.exports},586:function(t,e,n){"use strict";n(562)},587:function(t,e,n){var r=n(25)(!1);r.push([t.i,".thumbnail-image.active .v-image__image,.thumbnail-image:hover .v-image__image{opacity:.6;box-shadow:2px 2px 6px 1px rgba(0,0,0,.5)}",""]),t.exports=r},588:function(t,e,n){"use strict";n(563)},589:function(t,e,n){var r=n(25)(!1);r.push([t.i,"[data-v-f1287796]::-webkit-scrollbar{height:7px!important}[data-v-f1287796]::-webkit-scrollbar-track{background:#eee;border-radius:14px}[data-v-f1287796]::-webkit-scrollbar-thumb{background:#888;border-radius:14px}[data-v-f1287796]::-webkit-scrollbar-thumb:hover{background:#555}.card-carousel[data-v-f1287796]{-webkit-user-select:none;-moz-user-select:none;user-select:none;position:relative;width:100%}.progressbar[data-v-f1287796]{display:block;width:100%;height:5px;position:absolute;background-color:hsla(0,0%,86.7%,.25);z-index:1}.progressbar>div[data-v-f1287796]{background-color:hsla(0,0%,100%,.52);height:100%}.thumbnails[data-v-f1287796]{display:flex;flex-direction:row;overflow-x:overlay;overflow-y:hidden}.thumbnail-image[data-v-f1287796]{display:flex;align-items:center;cursor:pointer;padding:3px 9px}.thumbnail-image[data-v-f1287796]:first-child{padding-left:0}.thumbnail-image[data-v-f1287796]:last-child{padding-right:0}.thumbnail-image>img[data-v-f1287796]{width:100px;height:auto;transition:all .25s}.thumb-img[data-v-f1287796]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.thumb-img-outer[data-v-f1287796]{width:120px;height:70px}.card-img[data-v-f1287796]{position:relative;margin-bottom:15px}.card-img>img[data-v-f1287796]{display:block;margin:0 auto}.portrait-card-img[data-v-f1287796]{position:relative;margin-bottom:15px}.portrait-card-img>img[data-v-f1287796]{display:block;margin:0 auto}.actions[data-v-f1287796]{font-size:1.5em;height:40px;position:absolute;top:50%;margin-top:-20px;width:100%;display:flex;align-items:center;justify-content:space-between;color:#585858}.actions>span[data-v-f1287796]{cursor:pointer;transition:all .25s;font-size:45px}.actions>span.prev[data-v-f1287796]{margin-left:5px}.actions>span.next[data-v-f1287796]{margin-right:5px}.actions>span[data-v-f1287796]:hover{color:#eee}",""]),t.exports=r},590:function(t,e,n){"use strict";n(564)},591:function(t,e,n){var r=n(25)(!1);r.push([t.i,".old-img[data-v-f1287796]{position:absolute}.main-img[data-v-f1287796],.old-img[data-v-f1287796]{width:100%;height:100%}@media screen and (max-width:800px){.card-img[data-v-f1287796]{height:400px;max-width:100%}}@media screen and (max-width:500px){.card-img[data-v-f1287796]{height:calc(75vw - 20px);max-width:100%}}@media screen and (min-width:801px){.card-img[data-v-f1287796]{height:420px;max-width:100%}}@media screen and (max-width:800px){.portrait-card-img[data-v-f1287796]{height:400px;max-width:100%}}@media screen and (max-width:500px){.portrait-card-img[data-v-f1287796]{height:calc(131vw - 20px);max-width:100%}}@media screen and (min-width:801px){.portrait-card-img[data-v-f1287796]{height:420px;max-width:100%}}.create-image[data-v-f1287796]{-webkit-animation:createBox-f1287796 .99s;animation:createBox-f1287796 .99s}.delete-image[data-v-f1287796]{-webkit-animation:deleteBox-f1287796 .99s;animation:deleteBox-f1287796 .99s}@-webkit-keyframes createBox-f1287796{0%{transform:translateX(-100%)}to{transform:translateX(0)}}@keyframes createBox-f1287796{0%{transform:translateX(-100%)}to{transform:translateX(0)}}@-webkit-keyframes deleteBox-f1287796{0%{transform:translateX(0)}to{transform:translateX(100%)}}@keyframes deleteBox-f1287796{0%{transform:translateX(0)}to{transform:translateX(100%)}}",""]),t.exports=r},774:function(t,e,n){var content=n(898);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("3997dbb6",content,!0,{sourceMap:!1})},775:function(t,e,n){var content=n(900);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("0d6c7028",content,!0,{sourceMap:!1})},816:function(t,e,n){"use strict";n.r(e);var r=n(111),o=n(581),c=n(541),l=n(267),m=(n(34),n(66),n(55),n(70),n(14),n(77),n(82),n(17),n(22),n(23),n(1)),d=n(81),f=n(21),h=(n(61),n(8),n(677),n(44),n(678),n(679),n(680),n(681),n(682),n(683),n(684),n(685),n(686),n(687),n(688),n(689),n(690),n(691),n(692),n(693),n(46),n(39),n(16),n(54),n(15),n(88),n(578)),v=n(544),x=n(694);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function j(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function k(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var I={components:{Spinner:v.default,Picker:x.Picker,Carousel:h.default},name:"Post",data:function(){return{showEmojiPicker:!1,showEmojiPickerPortrait:!1,showEmojiPickerLandscape:!1,imagesLoaded:!1,currentIndex:0,emojis:{},selectedEmojis:new Set,selectedEmojiNatives:new Set,timer:null,emojiCount:0}},watch:{$route:function(t,e){var n=this;return Object(f.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("feed"!==t.name){e.next=3;break}return e.next=3,n.getCommentEntries();case 3:case"end":return e.stop()}}),e)})))()}},created:function(){var t=this;return Object(f.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getCommentEntries();case 2:case"end":return e.stop()}}),e)})))()},props:{post:{type:Object,required:!0}},computed:{isMobileScreen:function(){return!(window.innerWidth>500)},hasImages:function(){return this.post.images&&this.post.images.length>0&&this.post.images[0].imageUrl},images:function(){return this.post.images},landscapeImages:function(){return this.post.images.filter((function(image){return image.width&&image.height&&image.width>image.height}))},portraitImages:function(){return this.post.images.filter((function(image){return image.width&&image.height&&image.height>=image.width}))},user:function(){return this.$store.state.authUser}},methods:{start:function(){var t=this;this.timer=setTimeout((function(){return t.dragging=!0}),100)},end:function(){var t=this;clearTimeout(this.timer),setTimeout((function(){return t.dragging=!1}))},click:function(t){this.dragging&&t.stopPropagation()},doAction:function(t,e){var n=this;return Object(f.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.selectedEmojis.has(t);case 2:if(!r.sent){r.next=6;break}n.removeEmoji(t,e),r.next=7;break;case 6:n.addEmojiOld(t,e);case 7:case"end":return r.stop()}}),r)})))()},onClickOutside:function(){this.showEmojiPicker=!1},onClickOutsidePotrait:function(){this.showEmojiPickerPortrait=!1},onClickOutsideLandscape:function(){this.showEmojiPickerLandscape=!1},saveCommentEntries:function(){var t=this;return Object(f.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$fire.firestore.collection("commentEntries").doc(t.user.uid+t.post.eventId+t.post.userId).set({eventId:t.post.eventId,userId:t.user.uid,creatorId:t.post.userId,selectedEmojis:Object(d.a)(t.selectedEmojis),selectedEmojiNatives:Object(d.a)(t.selectedEmojiNatives)});case 2:case"end":return e.stop()}}),e)})))()},getCommentEntries:function(){var t=this;return Object(f.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,l,m,d,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$fire.firestore.collection("commentEntries").where("eventId","==",t.post.eventId).get();case 2:return n=e.sent,e.next=5,t.$fire.firestore.collection("commentEntries").where("eventId","==",t.post.eventId).where("creatorId","==",t.post.userId).get();case 5:if(e.sent,r={},o=new Set,c=new Set,l=0,n.size>0){m=k(n.docs);try{for(f=function(){var e=d.value,data=(e.id,e.data()),n=data.selectedEmojis,m=data.selectedEmojiNatives;data.creatorId&&data.creatorId!==t.post.userId||(n.forEach((function(t,i){r[t]=r[t]?j(j({},r[t]),{},{count:r[t].count+1}):{count:1,native:m[i]},l+=1})),data.userId===t.user.uid&&(o=new Set(n),c=new Set(m)))},m.s();!(d=m.n()).done;)f()}catch(t){m.e(t)}finally{m.f()}}t.emojis=r,t.selectedEmojis=o,t.selectedEmojiNatives=c,t.emojiCount=l;case 15:case"end":return e.stop()}}),e)})))()},toggleEmojiPicker:function(){this.showEmojiPicker=!this.showEmojiPicker},toggleEmojiPickerPortrait:function(){this.showEmojiPickerPortrait=!this.showEmojiPickerPortrait},toggleEmojiPickerLandscape:function(){this.showEmojiPickerLandscape=!this.showEmojiPickerLandscape},addEmoji:function(t){var e=this;return Object(f.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.selectedEmojis.has(t.name)){n.next=2;break}return n.abrupt("return");case 2:return e.emojis[t.name]=e.emojis[t.name]?j(j({},e.emojis[t.name]),{},{count:e.emojis[t.name].count+1}):{count:1,native:t.native},e.selectedEmojis.add(t.name),e.selectedEmojiNatives.add(t.native),e.emojiCount+=1,n.next=8,e.saveCommentEntries();case 8:e.showEmojiPicker=!1,e.showEmojiPickerPortrait=!1,e.showEmojiPickerLandscape=!1;case 11:case"end":return n.stop()}}),n)})))()},addEmojiOld:function(t,e){var n=this;return Object(f.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n.selectedEmojis.has(t)){r.next=2;break}return r.abrupt("return");case 2:return n.emojis[t]=n.emojis[t]?j(j({},n.emojis[t]),{},{count:n.emojis[t].count+1}):{count:1,native:e.native},n.selectedEmojis.add(t),n.selectedEmojiNatives.add(e.native),n.emojiCount+=1,r.next=8,n.saveCommentEntries();case 8:n.$forceUpdate();case 9:case"end":return r.stop()}}),r)})))()},removeEmoji:function(t,e){var n=this;return Object(f.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.selectedEmojis.has(t)){e.next=2;break}return e.abrupt("return");case 2:return r=n.emojis[t].count-1,n.emojis[t]=j(j({},n.emojis[t]),{},{count:r}),n.selectedEmojis.delete(t),n.selectedEmojiNatives.delete(n.emojis[t].native),n.emojiCount-=1,e.next=9,n.saveCommentEntries();case 9:n.$forceUpdate();case 10:case"end":return e.stop()}}),e)})))()},downloadMe:function(){var link=document.createElement("a");link.href=this.post.images[this.currentIndex].imageUrl,link.download="image_"+Date.now().toString(),link.target="_blank",link.click()}}},_=(n(897),n(899),n(65)),component=Object(_.a)(I,(function(){var t=this,e=t._self._c;return t.hasImages?e(c.a,{staticClass:"d-flex flex-column justify-center align-center",staticStyle:{width:"100%","max-width":"800px"}},[t.isMobileScreen&&t.portraitImages&&t.portraitImages.length?e(r.a,{staticClass:"post-carousel pc-none my-3 my-md-5 d-flex flex-column justify-center align-center",staticStyle:{width:"min(100%,800px)"}},[e("Carousel",{attrs:{"starting-image":0,images:t.portraitImages,"auto-slide-interval":0,"show-progress-bar":!1,eager:!1,portrait:!0,postId:t.post.id}}),t._v(" "),e("div",{staticClass:"pa-5 pt-5 post-text-container"},[e("nuxt-link",{attrs:{to:"/event/".concat(t.post.eventId)}},[e("h2",{staticClass:"mb-2 black--text"},[t._v("\n              Event: "+t._s(t.post.title)+" "+t._s(t.landscapeImages&&t.landscapeImages.length?"(Portrait)":"")+"\n          ")])]),t._v(" "),t.post.comment&&t.post.comment.replace(/\s/g,"").length?e("p",{staticStyle:{"word-break":"break-word"},domProps:{innerHTML:t._s(t.post.alteredComment)}}):t._e(),t._v(" "),e("span",[t._v("\n          Posted by:\n        "),e("nuxt-link",{staticClass:"black--text",attrs:{to:"/profile/".concat(t.post.userId)}},[t._v("\n          "+t._s(t.post.firstName||"anonymous")+"\n        ")])],1),t._v(" "),e("div",{staticClass:"d-flex flex-column flex-wrap mt-2 textarea-emoji-picker",staticStyle:{position:"relative"}},[e("div",{directives:[{def:l.a,name:"click-outside",rawName:"v-click-outside",value:t.onClickOutsidePotrait,expression:"onClickOutsidePotrait"}],staticStyle:{width:"fit-content"}},[e("picker",{directives:[{name:"show",rawName:"v-show",value:t.showEmojiPickerPortrait,expression:"showEmojiPickerPortrait"}],staticStyle:{position:"absolute",top:"-425px",flex:"1"},attrs:{title:"Pick your emoji...",emoji:"point_down"},on:{select:t.addEmoji}}),t._v(" "),e("span",{staticClass:"emoji-trigger d-flex justify-center align-center",class:{triggered:t.showEmojiPickerPortrait},staticStyle:{width:"fit-content"},on:{click:function(e){return e.stopPropagation(),t.toggleEmojiPickerPortrait.apply(null,arguments)}}},[e("svg",{staticStyle:{width:"30px",height:"30px"},attrs:{viewBox:"0 0 24 24"}},[e("path",{attrs:{fill:"#888888",d:"M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"}})]),t._v(" "),e("div",[t._v(t._s(t.emojiCount?" ("+t.emojiCount+")":""))])])],1),t._v(" "),t.isMobileScreen?e("div",{staticClass:"d-flex flex-column justify-center align-center flex-wrap",staticStyle:{"max-height":"80px",overflow:"auto"}},t._l(t.emojis,(function(n,r,i){return e(o.a,{directives:[{name:"show",rawName:"v-show",value:t.emojis[r]&&0!=t.emojis[r].count,expression:"emojis[key] && (emojis[key].count != 0)"}],key:i,staticClass:"ma-2",class:[t.selectedEmojis.has(r)?"selected-chip":""],attrs:{color:t.selectedEmojis.has(r)?"primary":""},on:{click:function(e){return t.doAction(r,n)}}},[e("span",{staticStyle:{"font-size":"20px"}},[t._v(t._s(t.emojis[r].native+""))]),e("span",[t._v(" "+t._s("  "+t.emojis[r].count))])])})),1):e("div",{directives:[{name:"dragscroll",rawName:"v-dragscroll"}],staticClass:"d-flex flex-column justify-center align-center flex-wrap",staticStyle:{"max-height":"80px",overflow:"auto"},on:{dragscrollstart:t.start,dragscrollend:t.end,"!click":function(e){return t.click.apply(null,arguments)}}},t._l(t.emojis,(function(n,r,i){return e(o.a,{directives:[{name:"show",rawName:"v-show",value:t.emojis[r]&&0!=t.emojis[r].count,expression:"emojis[key] && (emojis[key].count != 0)"}],key:i,staticClass:"ma-2",class:[t.selectedEmojis.has(r)?"selected-chip":""],attrs:{color:t.selectedEmojis.has(r)?"primary":""},on:{click:function(e){return t.doAction(r,n)}}},[e("span",{staticStyle:{"font-size":"20px"}},[t._v(t._s(t.emojis[r].native+""))]),e("span",[t._v(" "+t._s("  "+t.emojis[r].count))])])})),1)])],1)],1):t._e(),t._v(" "),t.isMobileScreen&&t.landscapeImages&&t.landscapeImages.length?e(r.a,{staticClass:"post-carousel pc-none my-3 my-md-5 d-flex flex-column justify-center align-center",staticStyle:{width:"min(100%,800px)"}},[e("Carousel",{attrs:{"starting-image":0,images:t.landscapeImages,"auto-slide-interval":0,"show-progress-bar":!1,eager:!1,postId:t.post.id}}),t._v(" "),e("div",{staticClass:"pa-5 pt-5 post-text-container"},[e("nuxt-link",{attrs:{to:"/event/".concat(t.post.eventId)}},[e("h2",{staticClass:"mb-2 black--text"},[t._v("\n              Event: "+t._s(t.post.title)+" "+t._s(t.portraitImages&&t.portraitImages.length?"(Landscape)":"")+" \n          ")])]),t._v(" "),t.post.comment&&t.post.comment.replace(/\s/g,"").length?e("p",{staticStyle:{"word-break":"break-word"},domProps:{innerHTML:t._s(t.post.alteredComment)}}):t._e(),t._v(" "),e("span",[t._v("\n          Posted by:\n        "),e("nuxt-link",{staticClass:"black--text",attrs:{to:"/profile/".concat(t.post.userId)}},[t._v("\n          "+t._s(t.post.firstName||"anonymous")+"\n        ")])],1),t._v(" "),e("div",{staticClass:"d-flex flex-column flex-wrap mt-2 textarea-emoji-picker",staticStyle:{position:"relative"}},[e("div",{directives:[{def:l.a,name:"click-outside",rawName:"v-click-outside",value:t.onClickOutsideLandscape,expression:"onClickOutsideLandscape"}],staticStyle:{width:"fit-content"}},[e("picker",{directives:[{name:"show",rawName:"v-show",value:t.showEmojiPickerLandscape,expression:"showEmojiPickerLandscape"}],staticStyle:{position:"absolute",top:"-425px",flex:"1"},attrs:{title:"Pick your emoji...",emoji:"point_down"},on:{select:t.addEmoji}}),t._v(" "),e("span",{staticClass:"emoji-trigger d-flex justify-center align-center",class:{triggered:t.showEmojiPickerLandscape},staticStyle:{width:"fit-content"},on:{click:function(e){return e.stopPropagation(),t.toggleEmojiPickerLandscape.apply(null,arguments)}}},[e("svg",{staticStyle:{width:"30px",height:"30px"},attrs:{viewBox:"0 0 24 24"}},[e("path",{attrs:{fill:"#888888",d:"M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"}})]),t._v(" "),e("div",[t._v(t._s(t.emojiCount?" ("+t.emojiCount+")":""))])])],1),t._v(" "),t.isMobileScreen?e("div",{staticClass:"d-flex flex-column justify-center align-center flex-wrap",staticStyle:{"max-height":"80px",overflow:"auto"}},t._l(t.emojis,(function(n,r,i){return e(o.a,{directives:[{name:"show",rawName:"v-show",value:t.emojis[r]&&0!=t.emojis[r].count,expression:"emojis[key] && (emojis[key].count != 0)"}],key:i,staticClass:"ma-2",class:[t.selectedEmojis.has(r)?"selected-chip":""],attrs:{color:t.selectedEmojis.has(r)?"primary":""},on:{click:function(e){return t.doAction(r,n)}}},[e("span",{staticStyle:{"font-size":"20px"}},[t._v(t._s(t.emojis[r].native+""))]),e("span",[t._v(" "+t._s("  "+t.emojis[r].count))])])})),1):e("div",{directives:[{name:"dragscroll",rawName:"v-dragscroll"}],staticClass:"d-flex flex-column justify-center align-center flex-wrap",staticStyle:{"max-height":"80px",overflow:"auto"},on:{dragscrollstart:t.start,dragscrollend:t.end,"!click":function(e){return t.click.apply(null,arguments)}}},t._l(t.emojis,(function(n,r,i){return e(o.a,{directives:[{name:"show",rawName:"v-show",value:t.emojis[r]&&0!=t.emojis[r].count,expression:"emojis[key] && (emojis[key].count != 0)"}],key:i,staticClass:"ma-2",class:[t.selectedEmojis.has(r)?"selected-chip":""],attrs:{color:t.selectedEmojis.has(r)?"primary":""},on:{click:function(e){return t.doAction(r,n)}}},[e("span",{staticStyle:{"font-size":"20px"}},[t._v(t._s(t.emojis[r].native+""))]),e("span",[t._v(" "+t._s("  "+t.emojis[r].count))])])})),1)])],1)],1):t._e(),t._v(" "),t.isMobileScreen?t._e():e(r.a,{staticClass:"post-carousel sp-none my-3 my-md-5 d-flex flex-column justify-center align-center",staticStyle:{width:"min(100%,800px)"}},[e("Carousel",{attrs:{"starting-image":0,images:t.images,"auto-slide-interval":0,"show-progress-bar":!1,eager:!1,postId:t.post.id}}),t._v(" "),e("div",{staticClass:"pa-5 pt-5 post-text-container"},[e("nuxt-link",{attrs:{to:"/event/".concat(t.post.eventId)}},[e("h2",{staticClass:"mb-2 black--text"},[t._v("\n              Event: "+t._s(t.post.title)+"\n          ")])]),t._v(" "),t.post.comment&&t.post.comment.replace(/\s/g,"").length?e("p",{staticStyle:{"word-break":"break-word"},domProps:{innerHTML:t._s(t.post.alteredComment)}}):t._e(),t._v(" "),e("span",[t._v("\n          Posted by:\n        "),e("nuxt-link",{staticClass:"black--text",attrs:{to:"/profile/".concat(t.post.userId)}},[t._v("\n          "+t._s(t.post.firstName||"anonymous")+"\n        ")])],1),t._v(" "),e("div",{staticClass:"d-flex flex-column flex-wrap mt-2 textarea-emoji-picker",staticStyle:{position:"relative"}},[e("div",{directives:[{def:l.a,name:"click-outside",rawName:"v-click-outside",value:t.onClickOutside,expression:"onClickOutside"}],staticStyle:{width:"fit-content"}},[e("picker",{directives:[{name:"show",rawName:"v-show",value:t.showEmojiPicker,expression:"showEmojiPicker"}],staticStyle:{position:"absolute",top:"-425px",flex:"1"},attrs:{title:"Pick your emoji...",emoji:"point_down"},on:{select:t.addEmoji}}),t._v(" "),e("span",{staticClass:"emoji-trigger d-flex justify-center align-center",class:{triggered:t.showEmojiPicker},staticStyle:{width:"fit-content"},on:{click:function(e){return e.stopPropagation(),t.toggleEmojiPicker.apply(null,arguments)}}},[e("svg",{staticStyle:{width:"30px",height:"30px"},attrs:{viewBox:"0 0 24 24"}},[e("path",{attrs:{fill:"#888888",d:"M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"}})]),t._v(" "),e("div",[t._v(t._s(t.emojiCount?" ("+t.emojiCount+")":""))])])],1),t._v(" "),t.isMobileScreen?e("div",{staticClass:"d-flex flex-column justify-center align-center flex-wrap",staticStyle:{"max-height":"80px",overflow:"auto"}},t._l(t.emojis,(function(n,r,i){return e(o.a,{directives:[{name:"show",rawName:"v-show",value:t.emojis[r]&&0!=t.emojis[r].count,expression:"emojis[key] && (emojis[key].count != 0)"}],key:i,staticClass:"ma-2",class:[t.selectedEmojis.has(r)?"selected-chip":""],attrs:{color:t.selectedEmojis.has(r)?"primary":""},on:{click:function(e){return t.doAction(r,n)}}},[e("span",{staticStyle:{"font-size":"20px"}},[t._v(t._s(t.emojis[r].native+""))]),e("span",[t._v(" "+t._s("  "+t.emojis[r].count))])])})),1):e("div",{directives:[{name:"dragscroll",rawName:"v-dragscroll"}],staticClass:"d-flex flex-column justify-center align-center flex-wrap",staticStyle:{"max-height":"80px",overflow:"auto"},on:{dragscrollstart:t.start,dragscrollend:t.end,"!click":function(e){return t.click.apply(null,arguments)}}},t._l(t.emojis,(function(n,r,i){return e(o.a,{directives:[{name:"show",rawName:"v-show",value:t.emojis[r]&&0!=t.emojis[r].count,expression:"emojis[key] && (emojis[key].count != 0)"}],key:i,staticClass:"ma-2",class:[t.selectedEmojis.has(r)?"selected-chip":""],attrs:{color:t.selectedEmojis.has(r)?"primary":""},on:{click:function(e){return t.doAction(r,n)}}},[e("span",{staticStyle:{"font-size":"20px"}},[t._v(t._s(t.emojis[r].native+""))]),e("span",[t._v(" "+t._s("  "+t.emojis[r].count))])])})),1)])],1)],1)],1):t._e()}),[],!1,null,"90b3ad82",null);e.default=component.exports;installComponents(component,{Carousel:n(578).default})},897:function(t,e,n){"use strict";n(774)},898:function(t,e,n){var r=n(25)(!1);r.push([t.i,"@media screen and (min-width:501px){.pc-none[data-v-90b3ad82]{display:none!important}}@media screen and (max-width:500px){.sp-none[data-v-90b3ad82]{display:none!important}}@media screen and (max-width:800px){.v-image__image[data-v-90b3ad82]{width:100%}}@media screen and (min-width:801px){.v-image__image[data-v-90b3ad82]{width:760px}}@media screen and (max-width:599px){.post-text-container[data-v-90b3ad82]{width:100%}}@media screen and (min-width:600px){.post-text-container[data-v-90b3ad82]{min-width:520px}}",""]),t.exports=r},899:function(t,e,n){"use strict";n(775)},900:function(t,e,n){var r=n(25)(!1);r.push([t.i,".selected-chip{border:3px solid #000;background-color:#555}",""]),t.exports=r}}]);