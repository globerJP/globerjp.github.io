(window.webpackJsonp=window.webpackJsonp||[]).push([[12,37],{549:function(e,t,r){var content=r(553);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(26).default)("6333d4fe",content,!0,{sourceMap:!1})},551:function(e,t,r){"use strict";r.r(t);var n={name:"LoadingSpinner"},o=(r(552),r(65)),component=Object(o.a)(n,(function(){this._self._c;return this._m(0)}),[function(){var e=this._self._c;return e("div",{staticClass:"text-center",staticStyle:{"margin-top":"10px"}},[e("div",{staticClass:"lds-ring"},[e("div"),e("div"),e("div"),e("div")])])}],!1,null,"6f49ae7c",null);t.default=component.exports},552:function(e,t,r){"use strict";r(549)},553:function(e,t,r){var n=r(25)(!1);n.push([e.i,".lds-ring[data-v-6f49ae7c]{display:inline-block;position:relative;width:80px;height:80px}.lds-ring div[data-v-6f49ae7c]{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:5px;border-radius:50%;-webkit-animation:lds-ring-6f49ae7c 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:lds-ring-6f49ae7c 1.2s cubic-bezier(.5,0,.5,1) infinite;border:5px solid transparent;border-top-color:#2196f3}.lds-ring div[data-v-6f49ae7c]:first-child{-webkit-animation-delay:-.45s;animation-delay:-.45s}.lds-ring div[data-v-6f49ae7c]:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.lds-ring div[data-v-6f49ae7c]:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}@-webkit-keyframes lds-ring-6f49ae7c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes lds-ring-6f49ae7c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""]),e.exports=n},567:function(e,t,r){var content=r(576);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(26).default)("160721d7",content,!0,{sourceMap:!1})},568:function(e,t,r){var content=r(578);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(26).default)("1c0642da",content,!0,{sourceMap:!1})},569:function(e,t,r){var content=r(580);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(26).default)("6beef1e4",content,!0,{sourceMap:!1})},570:function(e,t,r){"use strict";r.r(t);var n=r(247),o=(r(54),r(36),r(560),{name:"Carousel",props:["startingImage","images","autoSlideInterval","showProgressBar","thumbnailWidth","eager","portrait","postId"],data:function(){return{dragging:!1,timer:null,imgFailed:!1,timeOut:null,timeOutInner:null,timeOutOuter:null,activeImage:0,passiveImage:0,autoSlideTimeout:null,stopSlider:!1,timeLeft:0,timerInterval:null,countdownInterval:10}},computed:{isMobileScreen:function(){return!(window.innerWidth>500)},currentImage:function(){return this.timeLeft=this.autoSlideInterval,this.images[this.activeImage]?this.images[this.activeImage]:"/img/image-not-found.png"},progressBar:function(){return 100-this.timeLeft/this.autoSlideInterval*100}},created:function(){this.startingImage&&this.startingImage>=0&&this.startingImage<this.images.length&&(this.activeImage=this.startingImage,this.passiveImage=this.startingImage),this.autoSlideInterval&&this.autoSlideInterval>this.countdownInterval&&(this.startTimer(this.autoSlideInterval),this.timeLeft=this.autoSlideInterval,this.startCountdown())},methods:{start:function(){var e=this;this.timer=setTimeout((function(){return e.dragging=!0}),100)},end:function(){var e=this;clearTimeout(this.timer),setTimeout((function(){return e.dragging=!1}))},click:function(e){this.dragging&&e.stopPropagation()},nextImage:function(){var e=this.activeImage+1;this.passiveImage=this.activeImage,e>=this.images.length&&(e=0),this.activateImage(e)},prevImage:function(){var e=this.activeImage-1;this.passiveImage=this.activeImage,e<0&&(e=this.images.length-1),this.activateImage(e)},activateImage:function(e){this.passiveImage=this.activeImage,this.activeImage=e},transitionImage:function(e){this.passiveImage=this.activeImage,this.activeImage=null;var t=this.passiveImage,r=400;this.isMobileScreen&&(r=300),e<t?this.transitionRight(e,t,r):e>t?this.transitionLeft(e,t,r):this.activeImage=this.passiveImage,this.$forceUpdate()},transitionLeft:function(e,t,r){var n=this;clearTimeout(this.timeOut),clearTimeout(this.timeOutInner),clearTimeout(this.timeOutOuter);var o=[{transform:"translateX(130%)"},{transform:"translateX(0)"}],c={duration:r,iterations:1},l={duration:r,iterations:1};this.$refs["".concat(this.postId?this.postId:"carousel","-old-img-").concat(t)].lastItem.$el.animate([{transform:"translateX(0)"},{transform:"translateX(-130%)"}],c),this.timeOut=setTimeout((function(){var t=n.$refs["".concat(n.postId?n.postId:"carousel","-main-img-").concat(e)];n.activeImage=e,t.lastItem.$el.animate(o,l)}),10),this.timeOutInner=setTimeout((function(){n.passiveImage=null}),r-20),this.timeOutOuter=setTimeout((function(){n.passiveImage=n.activeImage}),r+20)},transitionRight:function(e,t,r){var n=this;clearTimeout(this.timeOut),clearTimeout(this.timeOutInner),clearTimeout(this.timeOutOuter);var o=[{transform:"translateX(-130%)"},{transform:"translateX(0)"}],c={duration:r,iterations:1},l={duration:r,iterations:1};this.$refs["".concat(this.postId?this.postId:"carousel","-old-img-").concat(t)].lastItem.$el.animate([{transform:"translateX(0)"},{transform:"translateX(130%)"}],c),this.timeOut=setTimeout((function(){n.activeImage=e,n.$refs["".concat(n.postId?n.postId:"carousel","-main-img-").concat(e)].lastItem.$el.animate(o,l)}),10),this.timeOutInner=setTimeout((function(){n.passiveImage=null}),r-20),this.timeOutOuter=setTimeout((function(){n.passiveImage=n.activeImage}),r+20)},startTimer:function(e){if(e&&e>0&&!this.stopSlider){var t=this;clearTimeout(this.autoSlideTimeout),this.autoSlideTimeout=setTimeout((function(){t.nextImage(),t.startTimer(t.autoSlideInterval)}),e)}},stopTimer:function(){clearTimeout(this.autoSlideTimeout),this.stopSlider=!0,clearInterval(this.timerInterval)},restartTimer:function(){this.stopSlider=!1,clearInterval(this.timerInterval),this.startCountdown(),this.startTimer(this.timeLeft)},startCountdown:function(){if(this.showProgressBar){var e=this;this.timerInterval=setInterval((function(){e.timeLeft-=e.countdownInterval,e.timeLeft<=0&&(e.timeLeft=e.autoSlideInterval)}),this.countdownInterval)}}}}),c=(r(575),r(577),r(579),r(65)),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"card-carousel",on:{mouseover:e.stopTimer,mouseleave:e.restartTimer}},[e.autoSlideInterval&&e.showProgressBar?t("div",{staticClass:"progressbar"},[t("div",{style:{width:e.progressBar+"%"}})]):e._e(),e._v(" "),t("div",{class:[e.portrait?"portrait-card-img":"card-img",1==e.images.length?"mb-0":""],staticStyle:{overflow:"hidden"}},[e._l(e.images,(function(image,r){return t(n.a,{directives:[{name:"show",rawName:"v-show",value:e.passiveImage===r,expression:"passiveImage === index? true: false"}],key:"old-img-"+r,ref:(e.postId?e.postId:"carousel")+"-old-img-"+r,refInFor:!0,class:["old-img",1===e.images.length?"mb-0":""],attrs:{eager:e.eager,contain:"",src:e.imgFailed?"/img/image-not-found.png":image.imageUrl,alt:""},on:{error:function(t){e.imgFailed=!0}}})})),e._v(" "),e._l(e.images,(function(image,r){return t(n.a,{directives:[{name:"show",rawName:"v-show",value:e.activeImage===r,expression:"activeImage === index? true: false"}],key:"main-img-"+r,ref:(e.postId?e.postId:"carousel")+"-main-img-"+r,refInFor:!0,class:["main-img",1===e.images.length?"mb-0":""],attrs:{eager:e.eager,contain:"",src:e.imgFailed?"/img/image-not-found.png":image.imageUrl,alt:""},on:{error:function(t){e.imgFailed=!0}}})}))],2),e._v(" "),t("div",{staticClass:"d-flex justify-center align-center"},[e.images.length>1?t("div",{staticClass:"d-flex justify-center align-center",style:"width:min(".concat(this.thumbnailWidth||"500","px,100%);padding: 0 10px;")},[e.isMobileScreen?t("div",{staticClass:"thumbnails"},e._l(e.images,(function(image,r){return t("div",{key:r,class:["thumbnail-image",e.activeImage==r?"active":""],on:{click:function(t){return e.transitionImage(r)}}},[t("div",{staticClass:"thumb-img-outer"},[t(n.a,{staticClass:"thumb-img",attrs:{src:e.imgFailed?"/img/image-not-found.png":image.teaserImageUrl},on:{error:function(t){e.imgFailed=!0}}})],1)])})),0):t("div",{directives:[{name:"dragscroll",rawName:"v-dragscroll"}],staticClass:"thumbnails",on:{dragscrollstart:e.start,dragscrollend:e.end,"!click":function(t){return e.click.apply(null,arguments)}}},e._l(e.images,(function(image,r){return t("div",{key:r,class:["thumbnail-image",e.activeImage==r?"active":""],on:{click:function(t){return e.transitionImage(r)}}},[t("div",{staticClass:"thumb-img-outer"},[t(n.a,{staticClass:"thumb-img",attrs:{src:e.imgFailed?"/img/image-not-found.png":image.teaserImageUrl},on:{error:function(t){e.imgFailed=!0}}})],1)])})),0)]):e._e()])])}),[],!1,null,"60899472",null);t.default=component.exports},575:function(e,t,r){"use strict";r(567)},576:function(e,t,r){var n=r(25)(!1);n.push([e.i,".thumbnail-image.active .v-image__image,.thumbnail-image:hover .v-image__image{opacity:.6;box-shadow:2px 2px 6px 1px rgba(0,0,0,.5)}",""]),e.exports=n},577:function(e,t,r){"use strict";r(568)},578:function(e,t,r){var n=r(25)(!1);n.push([e.i,"[data-v-60899472]::-webkit-scrollbar{height:7px!important}[data-v-60899472]::-webkit-scrollbar-track{background:#eee;border-radius:14px}[data-v-60899472]::-webkit-scrollbar-thumb{background:#888;border-radius:14px}[data-v-60899472]::-webkit-scrollbar-thumb:hover{background:#555}.card-carousel[data-v-60899472]{-webkit-user-select:none;-moz-user-select:none;user-select:none;position:relative;width:100%}.progressbar[data-v-60899472]{display:block;width:100%;height:5px;position:absolute;background-color:hsla(0,0%,86.7%,.25);z-index:1}.progressbar>div[data-v-60899472]{background-color:hsla(0,0%,100%,.52);height:100%}.thumbnails[data-v-60899472]{display:flex;flex-direction:row;overflow-x:overlay;overflow-y:hidden}.thumbnail-image[data-v-60899472]{display:flex;align-items:center;cursor:pointer;padding:3px 9px}.thumbnail-image[data-v-60899472]:first-child{padding-left:0}.thumbnail-image[data-v-60899472]:last-child{padding-right:0}.thumbnail-image>img[data-v-60899472]{width:100px;height:auto;transition:all .25s}.thumb-img[data-v-60899472]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.thumb-img-outer[data-v-60899472]{width:120px;height:70px}.card-img[data-v-60899472]{position:relative;margin-bottom:15px}.card-img>img[data-v-60899472]{display:block;margin:0 auto}.portrait-card-img[data-v-60899472]{position:relative;margin-bottom:15px}.portrait-card-img>img[data-v-60899472]{display:block;margin:0 auto}.actions[data-v-60899472]{font-size:1.5em;height:40px;position:absolute;top:50%;margin-top:-20px;width:100%;display:flex;align-items:center;justify-content:space-between;color:#585858}.actions>span[data-v-60899472]{cursor:pointer;transition:all .25s;font-size:45px}.actions>span.prev[data-v-60899472]{margin-left:5px}.actions>span.next[data-v-60899472]{margin-right:5px}.actions>span[data-v-60899472]:hover{color:#eee}",""]),e.exports=n},579:function(e,t,r){"use strict";r(569)},580:function(e,t,r){var n=r(25)(!1);n.push([e.i,".old-img[data-v-60899472]{position:absolute}.main-img[data-v-60899472],.old-img[data-v-60899472]{width:100%;height:100%}@media screen and (max-width:800px){.card-img[data-v-60899472]{height:400px;max-width:100%}}@media screen and (max-width:500px){.card-img[data-v-60899472]{height:calc(75vw - 20px);max-width:100%}}@media screen and (min-width:801px){.card-img[data-v-60899472]{height:420px;max-width:100%}}@media screen and (max-width:800px){.portrait-card-img[data-v-60899472]{height:400px;max-width:100%}}@media screen and (max-width:500px){.portrait-card-img[data-v-60899472]{height:calc(131vw - 20px);max-width:100%}}@media screen and (min-width:801px){.portrait-card-img[data-v-60899472]{height:420px;max-width:100%}}.create-image[data-v-60899472]{-webkit-animation:createBox-60899472 .99s;animation:createBox-60899472 .99s}.delete-image[data-v-60899472]{-webkit-animation:deleteBox-60899472 .99s;animation:deleteBox-60899472 .99s}@-webkit-keyframes createBox-60899472{0%{transform:translateX(-100%)}to{transform:translateX(0)}}@keyframes createBox-60899472{0%{transform:translateX(-100%)}to{transform:translateX(0)}}@-webkit-keyframes deleteBox-60899472{0%{transform:translateX(0)}to{transform:translateX(100%)}}@keyframes deleteBox-60899472{0%{transform:translateX(0)}to{transform:translateX(100%)}}",""]),e.exports=n},781:function(e,t,r){var content=r(915);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(26).default)("46b775b8",content,!0,{sourceMap:!1})},782:function(e,t,r){var content=r(917);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(26).default)("7c06665a",content,!0,{sourceMap:!1})},828:function(e,t,r){"use strict";r.r(t);var n=r(111),o=r(594),c=r(548),l=r(269),m=(r(34),r(66),r(55),r(70),r(14),r(78),r(83),r(17),r(22),r(23),r(2)),d=r(82),h=r(21),v=(r(61),r(8),r(635),r(44),r(636),r(637),r(638),r(639),r(640),r(641),r(642),r(643),r(644),r(645),r(646),r(647),r(648),r(649),r(650),r(651),r(46),r(39),r(16),r(54),r(15),r(89),r(570)),f=r(551),x=r(652),w=r(912),j=r(913);function k(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function y(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(t){Object(m.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function I(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}var C={components:{Spinner:f.default,Picker:x.Picker,Carousel:v.default,PickerFast:j.Picker},name:"Post",data:function(){return{isVisible:!1,emojiIndex:new j.EmojiIndex(w),shouldShow:!0,showEmojiPicker:!1,showEmojiPickerPortrait:!1,showEmojiPickerLandscape:!1,imagesLoaded:!1,currentIndex:0,emojis:{},selectedEmojis:new Set,selectedEmojiNatives:new Set,timer:null,emojiCount:0}},watch:{$route:function(e,t){var r=this;return Object(h.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("feed"!==e.name){t.next=3;break}return t.next=3,r.getCommentEntries();case 3:case"end":return t.stop()}}),t)})))()}},mounted:function(){return Object(h.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},props:{source:{type:Object,required:!0},isMobileScreen:{type:Boolean,required:!0}},computed:{hasImages:function(){return this.source.images&&this.source.images.length>0&&this.source.images[0].imageUrl},images:function(){return this.source.images},landscapeImages:function(){return this.source.images.filter((function(image){return image.width&&image.height&&image.width>image.height}))},portraitImages:function(){return this.source.images.filter((function(image){return image.width&&image.height&&image.height>=image.width}))},user:function(){return this.$store.state.authUser}},methods:{visibilityChanged:function(e,t){var r=this;return Object(h.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=5;break}r.isVisible=e,r.showEmojiPicker=!1,r.showEmojiPickerPortrait=!1,r.showEmojiPickerLandscape=!1,r.selectedEmojis=new Set,r.selectedEmojiNatives=new Set,r.emojiCount=0,t.next=8;break;case 5:return t.next=7,r.getCommentEntries();case 7:r.isVisible=e;case 8:case"end":return t.stop()}}),t)})))()},start:function(){var e=this;this.timer=setTimeout((function(){return e.dragging=!0}),100)},end:function(){var e=this;clearTimeout(this.timer),setTimeout((function(){return e.dragging=!1}))},click:function(e){this.dragging&&e.stopPropagation()},doAction:function(e,t){var r=this;return Object(h.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.selectedEmojis.has(e);case 2:if(!n.sent){n.next=6;break}r.removeEmoji(e,t),n.next=7;break;case 6:r.addEmojiOld(e,t);case 7:case"end":return n.stop()}}),n)})))()},onClickOutside:function(){this.showEmojiPicker=!1},onClickOutsidePotrait:function(){this.showEmojiPickerPortrait=!1},onClickOutsideLandscape:function(){this.showEmojiPickerLandscape=!1},saveCommentEntries:function(){var e=this;return Object(h.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$fire.firestore.collection("commentEntries").doc(e.user.uid+e.source.eventId+e.source.userId).set({eventId:e.source.eventId,userId:e.user.uid,creatorId:e.source.userId,selectedEmojis:Object(d.a)(e.selectedEmojis),selectedEmojiNatives:Object(d.a)(e.selectedEmojiNatives)});case 2:case"end":return t.stop()}}),t)})))()},getCommentEntries:function(){var e=this;return Object(h.a)(regeneratorRuntime.mark((function t(){var r,n,o,c,l,m,d,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$fire.firestore.collection("commentEntries").where("eventId","==",e.source.eventId).get();case 2:return r=t.sent,t.next=5,e.$fire.firestore.collection("commentEntries").where("eventId","==",e.source.eventId).where("creatorId","==",e.source.userId).get();case 5:if(t.sent,n={},o=new Set,c=new Set,l=0,r.size>0){m=I(r.docs);try{for(h=function(){var t=d.value,data=(t.id,t.data()),r=data.selectedEmojis,m=data.selectedEmojiNatives;data.creatorId&&data.creatorId!==e.source.userId||(r.forEach((function(e,i){n[e]=n[e]?y(y({},n[e]),{},{count:n[e].count+1}):{count:1,native:m[i]},l+=1})),data.userId===e.user.uid&&(o=new Set(r),c=new Set(m)))},m.s();!(d=m.n()).done;)h()}catch(e){m.e(e)}finally{m.f()}}e.emojis=n,e.selectedEmojis=o,e.selectedEmojiNatives=c,e.emojiCount=l;case 15:case"end":return t.stop()}}),t)})))()},toggleEmojiPicker:function(){this.showEmojiPicker=!this.showEmojiPicker},toggleEmojiPickerPortrait:function(){this.showEmojiPickerPortrait=!this.showEmojiPickerPortrait},toggleEmojiPickerLandscape:function(){this.showEmojiPickerLandscape=!this.showEmojiPickerLandscape},addEmoji:function(e){var t=this;return Object(h.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t.selectedEmojis.has(e.name)){r.next=2;break}return r.abrupt("return");case 2:return t.emojis[e.name]=t.emojis[e.name]?y(y({},t.emojis[e.name]),{},{count:t.emojis[e.name].count+1}):{count:1,native:e.native},t.selectedEmojis.add(e.name),t.selectedEmojiNatives.add(e.native),t.emojiCount+=1,r.next=8,t.saveCommentEntries();case 8:t.showEmojiPicker=!1,t.showEmojiPickerPortrait=!1,t.showEmojiPickerLandscape=!1;case 11:case"end":return r.stop()}}),r)})))()},addEmojiOld:function(e,t){var r=this;return Object(h.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r.selectedEmojis.has(e)){n.next=2;break}return n.abrupt("return");case 2:return r.emojis[e]=r.emojis[e]?y(y({},r.emojis[e]),{},{count:r.emojis[e].count+1}):{count:1,native:t.native},r.selectedEmojis.add(e),r.selectedEmojiNatives.add(t.native),r.emojiCount+=1,n.next=8,r.saveCommentEntries();case 8:r.$forceUpdate();case 9:case"end":return n.stop()}}),n)})))()},removeEmoji:function(e,t){var r=this;return Object(h.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.selectedEmojis.has(e)){t.next=2;break}return t.abrupt("return");case 2:return n=r.emojis[e].count-1,r.emojis[e]=y(y({},r.emojis[e]),{},{count:n}),r.selectedEmojis.delete(e),r.selectedEmojiNatives.delete(r.emojis[e].native),r.emojiCount-=1,t.next=9,r.saveCommentEntries();case 9:r.$forceUpdate();case 10:case"end":return t.stop()}}),t)})))()},downloadMe:function(){var link=document.createElement("a");link.href=this.source.images[this.currentIndex].imageUrl,link.download="image_"+Date.now().toString(),link.target="_blank",link.click()}}},E=(r(914),r(916),r(65)),component=Object(E.a)(C,(function(){var e=this,t=e._self._c;return e.hasImages?t(c.a,{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:e.visibilityChanged,expression:"visibilityChanged"}],staticClass:"py-0",staticStyle:{width:"100%","max-width":"800px"}},[e.isMobileScreen&&e.portraitImages&&e.portraitImages.length?t(n.a,{staticClass:"post-carousel pc-none my-3 my-md-5 d-flex flex-column justify-center align-center",staticStyle:{width:"min(100%,800px)"}},[e.isMobileScreen?t("Carousel",{attrs:{"starting-image":0,images:e.portraitImages,"auto-slide-interval":0,"show-progress-bar":!1,eager:!1,portrait:!0,postId:e.source.id}}):e._e(),e._v(" "),e.isMobileScreen?t("div",{staticClass:"pa-5 pt-5 post-text-container"},[t("nuxt-link",{attrs:{to:"/event/".concat(e.source.eventId)}},[t("h2",{staticClass:"mb-2 black--text"},[e._v("\n              Event: "+e._s(e.source.title)+" "+e._s(e.landscapeImages&&e.landscapeImages.length?"(Portrait)":"")+"\n          ")])]),e._v(" "),e.source.comment&&e.source.comment.replace(/\s/g,"").length?t("p",{staticStyle:{"word-break":"break-word"},domProps:{innerHTML:e._s(e.source.alteredComment)}}):e._e(),e._v(" "),t("span",[e._v("\n          Posted by:\n        "),t("nuxt-link",{staticClass:"black--text",attrs:{to:"/profile/".concat(e.source.userId)}},[e._v("\n          "+e._s(e.source.firstName||"anonymous")+"\n        ")])],1),e._v(" "),t("div",{staticClass:"d-flex flex-column flex-wrap mt-2 textarea-emoji-picker",staticStyle:{position:"relative"}},[t("div",{directives:[{def:l.a,name:"click-outside",rawName:"v-click-outside",value:e.onClickOutsidePotrait,expression:"onClickOutsidePotrait"}],staticStyle:{width:"fit-content"}},[e.isMobileScreen?t("PickerFast",{directives:[{name:"show",rawName:"v-show",value:e.showEmojiPickerPortrait,expression:"showEmojiPickerPortrait"}],staticStyle:{position:"absolute",top:"-425px",flex:"1"},attrs:{data:e.emojiIndex,title:"Pick your emoji...",emoji:"point_down"},on:{select:e.addEmoji}}):e._e(),e._v(" "),t("span",{staticClass:"emoji-trigger d-flex justify-center align-center",class:{triggered:e.showEmojiPickerPortrait},staticStyle:{width:"fit-content"},on:{click:function(t){return t.stopPropagation(),e.toggleEmojiPickerPortrait.apply(null,arguments)}}},[t("svg",{staticStyle:{width:"30px",height:"30px"},attrs:{viewBox:"0 0 24 24"}},[t("path",{attrs:{fill:"#888888",d:"M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"}})]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.isVisibile,expression:"isVisibile"}]},[e._v(e._s(e.emojiCount?" ("+e.emojiCount+")":""))])])],1),e._v(" "),e.isMobileScreen?t("div",{staticClass:"d-flex flex-column justify-center align-center flex-wrap",staticStyle:{"max-height":"80px",overflow:"auto"}},e._l(e.emojis,(function(r,n,i){return t(o.a,{directives:[{name:"show",rawName:"v-show",value:e.isVisible&&e.emojis[n]&&0!=e.emojis[n].count,expression:"isVisible && emojis[key] && (emojis[key].count != 0)"}],key:i,staticClass:"ma-2",class:[e.selectedEmojis.has(n)?"selected-chip":""],attrs:{color:e.selectedEmojis.has(n)?"primary":""},on:{click:function(t){return e.doAction(n,r)}}},[t("span",{staticStyle:{"font-size":"20px"}},[e._v(e._s(e.emojis[n].native+""))]),t("span",[e._v(" "+e._s("  "+e.emojis[n].count))])])})),1):t("div",{directives:[{name:"dragscroll",rawName:"v-dragscroll"}],staticClass:"d-flex flex-column justify-center align-center flex-wrap",staticStyle:{"max-height":"80px",overflow:"auto"},on:{dragscrollstart:e.start,dragscrollend:e.end,"!click":function(t){return e.click.apply(null,arguments)}}},e._l(e.emojis,(function(r,n,i){return t(o.a,{directives:[{name:"show",rawName:"v-show",value:e.isVisible&&e.emojis[n]&&0!=e.emojis[n].count,expression:"isVisible && emojis[key] && (emojis[key].count != 0)"}],key:i,staticClass:"ma-2",class:[e.selectedEmojis.has(n)?"selected-chip":""],attrs:{color:e.selectedEmojis.has(n)?"primary":""},on:{click:function(t){return e.doAction(n,r)}}},[t("span",{staticStyle:{"font-size":"20px"}},[e._v(e._s(e.emojis[n].native+""))]),t("span",[e._v(" "+e._s("  "+e.emojis[n].count))])])})),1)])],1):e._e()],1):e._e(),e._v(" "),e.isMobileScreen&&e.landscapeImages&&e.landscapeImages.length?t(n.a,{staticClass:"post-carousel pc-none my-3 my-md-5 d-flex flex-column justify-center align-center",staticStyle:{width:"min(100%,800px)"}},[e.isMobileScreen?t("Carousel",{attrs:{"starting-image":0,images:e.landscapeImages,"auto-slide-interval":0,"show-progress-bar":!1,eager:!1,postId:e.source.id}}):e._e(),e._v(" "),e.isMobileScreen?t("div",{staticClass:"pa-5 pt-5 post-text-container"},[t("nuxt-link",{attrs:{to:"/event/".concat(e.source.eventId)}},[t("h2",{staticClass:"mb-2 black--text"},[e._v("\n              Event: "+e._s(e.source.title)+" "+e._s(e.portraitImages&&e.portraitImages.length?"(Landscape)":"")+" \n          ")])]),e._v(" "),e.source.comment&&e.source.comment.replace(/\s/g,"").length?t("p",{staticStyle:{"word-break":"break-word"},domProps:{innerHTML:e._s(e.source.alteredComment)}}):e._e(),e._v(" "),t("span",[e._v("\n          Posted by:\n        "),t("nuxt-link",{staticClass:"black--text",attrs:{to:"/profile/".concat(e.source.userId)}},[e._v("\n          "+e._s(e.source.firstName||"anonymous")+"\n        ")])],1),e._v(" "),t("div",{staticClass:"d-flex flex-column flex-wrap mt-2 textarea-emoji-picker",staticStyle:{position:"relative"}},[t("div",{directives:[{def:l.a,name:"click-outside",rawName:"v-click-outside",value:e.onClickOutsideLandscape,expression:"onClickOutsideLandscape"}],staticStyle:{width:"fit-content"}},[e.isMobileScreen?t("PickerFast",{directives:[{name:"show",rawName:"v-show",value:e.showEmojiPickerLandscape,expression:"showEmojiPickerLandscape"}],staticStyle:{position:"absolute",top:"-425px",flex:"1"},attrs:{data:e.emojiIndex,title:"Pick your emoji...",emoji:"point_down"},on:{select:e.addEmoji}}):e._e(),e._v(" "),t("span",{staticClass:"emoji-trigger d-flex justify-center align-center",class:{triggered:e.showEmojiPickerLandscape},staticStyle:{width:"fit-content"},on:{click:function(t){return t.stopPropagation(),e.toggleEmojiPickerLandscape.apply(null,arguments)}}},[t("svg",{staticStyle:{width:"30px",height:"30px"},attrs:{viewBox:"0 0 24 24"}},[t("path",{attrs:{fill:"#888888",d:"M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"}})]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.isVisibile,expression:"isVisibile"}]},[e._v(e._s(e.emojiCount?" ("+e.emojiCount+")":""))])])],1),e._v(" "),e.isMobileScreen?t("div",{staticClass:"d-flex flex-column justify-center align-center flex-wrap",staticStyle:{"max-height":"80px",overflow:"auto"}},e._l(e.emojis,(function(r,n,i){return t(o.a,{directives:[{name:"show",rawName:"v-show",value:e.isVisible&&e.emojis[n]&&0!=e.emojis[n].count,expression:"isVisible && emojis[key] && (emojis[key].count != 0)"}],key:i,staticClass:"ma-2",class:[e.selectedEmojis.has(n)?"selected-chip":""],attrs:{color:e.selectedEmojis.has(n)?"primary":""},on:{click:function(t){return e.doAction(n,r)}}},[t("span",{staticStyle:{"font-size":"20px"}},[e._v(e._s(e.emojis[n].native+""))]),t("span",[e._v(" "+e._s("  "+e.emojis[n].count))])])})),1):t("div",{directives:[{name:"dragscroll",rawName:"v-dragscroll"}],staticClass:"d-flex flex-column justify-center align-center flex-wrap",staticStyle:{"max-height":"80px",overflow:"auto"},on:{dragscrollstart:e.start,dragscrollend:e.end,"!click":function(t){return e.click.apply(null,arguments)}}},e._l(e.emojis,(function(r,n,i){return t(o.a,{directives:[{name:"show",rawName:"v-show",value:e.isVisible&&e.emojis[n]&&0!=e.emojis[n].count,expression:"isVisible && emojis[key] && (emojis[key].count != 0)"}],key:i,staticClass:"ma-2",class:[e.selectedEmojis.has(n)?"selected-chip":""],attrs:{color:e.selectedEmojis.has(n)?"primary":""},on:{click:function(t){return e.doAction(n,r)}}},[t("span",{staticStyle:{"font-size":"20px"}},[e._v(e._s(e.emojis[n].native+""))]),t("span",[e._v(" "+e._s("  "+e.emojis[n].count))])])})),1)])],1):e._e()],1):e._e(),e._v(" "),e.isMobileScreen?e._e():t(n.a,{staticClass:"post-carousel sp-none my-3 my-md-5 d-flex flex-column justify-center align-center",staticStyle:{width:"min(100%,800px)"}},[e.isMobileScreen?e._e():t("Carousel",{attrs:{"starting-image":0,images:e.images,"auto-slide-interval":0,"show-progress-bar":!1,eager:!1,postId:e.source.id}}),e._v(" "),e.isMobileScreen?e._e():t("div",{staticClass:"pa-5 pt-5 post-text-container"},[t("nuxt-link",{attrs:{to:"/event/".concat(e.source.eventId)}},[t("h2",{staticClass:"mb-2 black--text"},[e._v("\n              Event: "+e._s(e.source.title)+"\n          ")])]),e._v(" "),e.source.comment&&e.source.comment.replace(/\s/g,"").length?t("p",{staticStyle:{"word-break":"break-word"},domProps:{innerHTML:e._s(e.source.alteredComment)}}):e._e(),e._v(" "),t("span",[e._v("\n          Posted by:\n        "),t("nuxt-link",{staticClass:"black--text",attrs:{to:"/profile/".concat(e.source.userId)}},[e._v("\n          "+e._s(e.source.firstName||"anonymous")+"\n        ")])],1),e._v(" "),t("div",{staticClass:"d-flex flex-column flex-wrap mt-2 textarea-emoji-picker",staticStyle:{position:"relative"}},[t("div",{directives:[{def:l.a,name:"click-outside",rawName:"v-click-outside",value:e.onClickOutside,expression:"onClickOutside"}],staticStyle:{width:"fit-content"}},[e.isMobileScreen?e._e():t("PickerFast",{directives:[{name:"show",rawName:"v-show",value:e.showEmojiPicker,expression:"showEmojiPicker"}],staticStyle:{position:"absolute",top:"-425px",flex:"1"},attrs:{data:e.emojiIndex,title:"Pick your emoji...",emoji:"point_down"},on:{select:e.addEmoji}}),e._v(" "),t("span",{staticClass:"emoji-trigger d-flex justify-center align-center",class:{triggered:e.showEmojiPicker},staticStyle:{width:"fit-content"},on:{click:function(t){return t.stopPropagation(),e.toggleEmojiPicker.apply(null,arguments)}}},[t("svg",{staticStyle:{width:"30px",height:"30px"},attrs:{viewBox:"0 0 24 24"}},[t("path",{attrs:{fill:"#888888",d:"M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"}})]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.isVisibile,expression:"isVisibile"}]},[e._v(e._s(e.emojiCount?" ("+e.emojiCount+")":""))])])],1),e._v(" "),e.isMobileScreen?t("div",{staticClass:"d-flex flex-column justify-center align-center flex-wrap",staticStyle:{"max-height":"80px",overflow:"auto"}},e._l(e.emojis,(function(r,n,i){return t(o.a,{directives:[{name:"show",rawName:"v-show",value:e.isVisible&&e.emojis[n]&&0!=e.emojis[n].count,expression:"isVisible && emojis[key] && (emojis[key].count != 0)"}],key:i,staticClass:"ma-2",class:[e.selectedEmojis.has(n)?"selected-chip":""],attrs:{color:e.selectedEmojis.has(n)?"primary":""},on:{click:function(t){return e.doAction(n,r)}}},[t("span",{staticStyle:{"font-size":"20px"}},[e._v(e._s(e.emojis[n].native+""))]),t("span",[e._v(" "+e._s("  "+e.emojis[n].count))])])})),1):t("div",{directives:[{name:"dragscroll",rawName:"v-dragscroll"}],staticClass:"d-flex flex-column justify-center align-center flex-wrap",staticStyle:{"max-height":"80px",overflow:"auto"},on:{dragscrollstart:e.start,dragscrollend:e.end,"!click":function(t){return e.click.apply(null,arguments)}}},e._l(e.emojis,(function(r,n,i){return t(o.a,{directives:[{name:"show",rawName:"v-show",value:e.isVisible&&e.emojis[n]&&0!=e.emojis[n].count,expression:"isVisible && emojis[key] && (emojis[key].count != 0)"}],key:i,staticClass:"ma-2",class:[e.selectedEmojis.has(n)?"selected-chip":""],attrs:{color:e.selectedEmojis.has(n)?"primary":""},on:{click:function(t){return e.doAction(n,r)}}},[t("span",{staticStyle:{"font-size":"20px"}},[e._v(e._s(e.emojis[n].native+""))]),t("span",[e._v(" "+e._s("  "+e.emojis[n].count))])])})),1)])],1)],1)],1):e._e()}),[],!1,null,"107ef5a8",null);t.default=component.exports;installComponents(component,{Carousel:r(570).default})},914:function(e,t,r){"use strict";r(781)},915:function(e,t,r){var n=r(25)(!1);n.push([e.i,".max-height-0[data-v-107ef5a8]{max-height:0!important}.post-carousel[data-v-107ef5a8]{display:inline-block!important}@media screen and (min-width:501px){.pc-none[data-v-107ef5a8]{display:none!important}}@media screen and (max-width:500px){.sp-none[data-v-107ef5a8]{display:none!important}}@media screen and (max-width:800px){.v-image__image[data-v-107ef5a8]{width:100%}}@media screen and (min-width:801px){.v-image__image[data-v-107ef5a8]{width:760px}}@media screen and (max-width:599px){.post-text-container[data-v-107ef5a8]{width:100%}}@media screen and (min-width:600px){.post-text-container[data-v-107ef5a8]{min-width:520px}}",""]),e.exports=n},916:function(e,t,r){"use strict";r(782)},917:function(e,t,r){var n=r(25)(!1);n.push([e.i,".d-none{display:none!important}.selected-chip{border:3px solid #000;background-color:#555}",""]),e.exports=n}}]);