(window.webpackJsonp=window.webpackJsonp||[]).push([[60,45],{523:function(t,e,n){var content=n(526);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("1a30734a",content,!0,{sourceMap:!1})},524:function(t,e,n){"use strict";n.r(e);var r=n(242),o={},c=(n(525),n(73)),component=Object(c.a)(o,(function(){var t=this._self._c;return t("div",{staticClass:"spinner"},[t(r.a,{attrs:{size:"100",indeterminate:""}})],1)}),[],!1,null,"b799d304",null);e.default=component.exports},525:function(t,e,n){"use strict";n(523)},526:function(t,e,n){var r=n(25)(!1);r.push([t.i,".spinner[data-v-b799d304]{display:flex;justify-content:center;margin-top:1rem;color:#add8e6}",""]),t.exports=r},542:function(t,e,n){var content=n(567);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("7479063a",content,!0,{sourceMap:!1})},543:function(t,e,n){var content=n(569);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("2df0d297",content,!0,{sourceMap:!1})},544:function(t,e,n){var content=n(571);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("d1534c72",content,!0,{sourceMap:!1})},566:function(t,e,n){"use strict";n(542)},567:function(t,e,n){var r=n(25)(!1);r.push([t.i,".thumbnail-image.active .v-image__image,.thumbnail-image:hover .v-image__image{opacity:.6;box-shadow:2px 2px 6px 1px rgba(0,0,0,.5)}",""]),t.exports=r},568:function(t,e,n){"use strict";n(543)},569:function(t,e,n){var r=n(25)(!1);r.push([t.i,"[data-v-0ea33a10]::-webkit-scrollbar{height:7px!important}[data-v-0ea33a10]::-webkit-scrollbar-track{background:#eee;border-radius:14px}[data-v-0ea33a10]::-webkit-scrollbar-thumb{background:#888;border-radius:14px}[data-v-0ea33a10]::-webkit-scrollbar-thumb:hover{background:#555}.card-carousel[data-v-0ea33a10]{-webkit-user-select:none;-moz-user-select:none;user-select:none;position:relative;width:100%}.progressbar[data-v-0ea33a10]{display:block;width:100%;height:5px;position:absolute;background-color:hsla(0,0%,86.7%,.25);z-index:1}.progressbar>div[data-v-0ea33a10]{background-color:hsla(0,0%,100%,.52);height:100%}.thumbnails[data-v-0ea33a10]{display:flex;flex-direction:row;overflow-x:overlay;overflow-y:hidden}.thumbnail-image[data-v-0ea33a10]{display:flex;align-items:center;cursor:pointer;padding:3px 9px}.thumbnail-image[data-v-0ea33a10]:first-child{padding-left:0}.thumbnail-image[data-v-0ea33a10]:last-child{padding-right:0}.thumbnail-image>img[data-v-0ea33a10]{width:100px;height:auto;transition:all .25s}.thumb-img[data-v-0ea33a10]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.thumb-img-outer[data-v-0ea33a10]{width:120px;height:70px}.card-img[data-v-0ea33a10]{position:relative;margin-bottom:15px}.card-img>img[data-v-0ea33a10]{display:block;margin:0 auto}.actions[data-v-0ea33a10]{font-size:1.5em;height:40px;position:absolute;top:50%;margin-top:-20px;width:100%;display:flex;align-items:center;justify-content:space-between;color:#585858}.actions>span[data-v-0ea33a10]{cursor:pointer;transition:all .25s;font-size:45px}.actions>span.prev[data-v-0ea33a10]{margin-left:5px}.actions>span.next[data-v-0ea33a10]{margin-right:5px}.actions>span[data-v-0ea33a10]:hover{color:#eee}",""]),t.exports=r},570:function(t,e,n){"use strict";n(544)},571:function(t,e,n){var r=n(25)(!1);r.push([t.i,".main-img[data-v-0ea33a10]{height:100%;width:100%}@media screen and (max-width:800px){.card-img[data-v-0ea33a10]{height:350px;max-width:100%}}@media screen and (max-width:500px){.card-img[data-v-0ea33a10]{height:calc(75vw - 20px);max-width:100%}}@media screen and (min-width:801px){.card-img[data-v-0ea33a10]{height:400px;max-width:100%}}.create-image[data-v-0ea33a10]{-webkit-animation:createBox-0ea33a10 .99s;animation:createBox-0ea33a10 .99s}.delete-image[data-v-0ea33a10]{-webkit-animation:deleteBox-0ea33a10 .99s;animation:deleteBox-0ea33a10 .99s}@-webkit-keyframes createBox-0ea33a10{0%{transform:translateX(-100%)}to{transform:translateX(0)}}@keyframes createBox-0ea33a10{0%{transform:translateX(-100%)}to{transform:translateX(0)}}@-webkit-keyframes deleteBox-0ea33a10{0%{transform:translateX(0)}to{transform:translateX(100%)}}@keyframes deleteBox-0ea33a10{0%{transform:translateX(0)}to{transform:translateX(100%)}}",""]),t.exports=r},581:function(t,e,n){"use strict";n.r(e);var r=n(244),o=(n(532),n(59),{name:"Carousel",props:["startingImage","images","autoSlideInterval","showProgressBar","thumbnailWidth"],data:function(){return{imgFailed:!1,timeOut:null,timeOutInner:null,activeImage:0,autoSlideTimeout:null,stopSlider:!1,timeLeft:0,timerInterval:null,countdownInterval:10}},computed:{currentImage:function(){return this.timeLeft=this.autoSlideInterval,this.images[this.activeImage]?this.images[this.activeImage]:"/img/image-not-found.png"},progressBar:function(){return 100-this.timeLeft/this.autoSlideInterval*100}},created:function(){this.startingImage&&this.startingImage>=0&&this.startingImage<this.images.length&&(this.activeImage=this.startingImage),this.autoSlideInterval&&this.autoSlideInterval>this.countdownInterval&&(this.startTimer(this.autoSlideInterval),this.timeLeft=this.autoSlideInterval,this.startCountdown())},methods:{nextImage:function(){var t=this.activeImage+1;t>=this.images.length&&(t=0),this.activateImage(t)},prevImage:function(){var t=this.activeImage-1;t<0&&(t=this.images.length-1),this.activateImage(t)},activateImage:function(t){this.activeImage=t},transitionImage:function(t){var e=this.activeImage;t<e?this.transitionRight(t,e,250):t>e&&this.transitionLeft(t,e,250)},transitionLeft:function(t,e,n){var r=this;clearTimeout(this.timeOut),clearTimeout(this.timeOutInner);var o=[{transform:"translateX(150%)"},{transform:"translateX(0)"}],c={duration:n,iterations:1},l={duration:1.5*n,iterations:1};this.$refs["main-img-".concat(e)].lastItem.$el.animate([{transform:"translateX(0)"},{transform:"translateX(-100%)"}],c),this.timeOut=setTimeout((function(){r.$refs["main-img-".concat(t)].lastItem.$el.animate(o,l)}),n-60),this.timeOutInner=setTimeout((function(){r.activateImage(t)}),n-30)},transitionRight:function(t,e,n){var r=this;clearTimeout(this.timeOut),clearTimeout(this.timeOutInner);var o=[{transform:"translateX(-150%)"},{transform:"translateX(0)"}],c={duration:n,iterations:1},l={duration:1.5*n,iterations:1};this.$refs["main-img-".concat(e)].lastItem.$el.animate([{transform:"translateX(0)"},{transform:"translateX(100%)"}],c),this.timeOut=setTimeout((function(){r.$refs["main-img-".concat(t)].lastItem.$el.animate(o,l)}),n-60),this.timeOutInner=setTimeout((function(){r.activateImage(t)}),n-30)},startTimer:function(t){if(t&&t>0&&!this.stopSlider){var e=this;clearTimeout(this.autoSlideTimeout),this.autoSlideTimeout=setTimeout((function(){e.nextImage(),e.startTimer(e.autoSlideInterval)}),t)}},stopTimer:function(){clearTimeout(this.autoSlideTimeout),this.stopSlider=!0,clearInterval(this.timerInterval)},restartTimer:function(){this.stopSlider=!1,clearInterval(this.timerInterval),this.startCountdown(),this.startTimer(this.timeLeft)},startCountdown:function(){if(this.showProgressBar){var t=this;this.timerInterval=setInterval((function(){t.timeLeft-=t.countdownInterval,t.timeLeft<=0&&(t.timeLeft=t.autoSlideInterval)}),this.countdownInterval)}}}}),c=(n(566),n(568),n(570),n(73)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-carousel",on:{mouseover:t.stopTimer,mouseleave:t.restartTimer}},[t.autoSlideInterval&&t.showProgressBar?e("div",{staticClass:"progressbar"},[e("div",{style:{width:t.progressBar+"%"}})]):t._e(),t._v(" "),e("div",{class:["card-img",1==t.images.length?"mb-0":""],staticStyle:{overflow:"hidden"}},t._l(t.images,(function(image,n){return e(r.a,{directives:[{name:"show",rawName:"v-show",value:t.activeImage==n,expression:"activeImage == index? true: false"}],key:n,ref:"main-img-"+n,refInFor:!0,class:["main-img",1==t.images.length?"mb-0":""],attrs:{contain:"",src:t.imgFailed?"/img/image-not-found.png":image.imageUrl,alt:""},on:{error:function(e){t.imgFailed=!0}}})})),1),t._v(" "),e("div",{staticClass:"d-flex justify-center align-center"},[t.images.length>1?e("div",{staticClass:"d-flex justify-center align-center",style:"width:min(".concat(this.thumbnailWidth||"500","px,100%);padding: 0 10px;")},[e("div",{staticClass:"thumbnails"},t._l(t.images,(function(image,n){return e("div",{key:n,class:["thumbnail-image",t.activeImage==n?"active":""],on:{click:function(e){return t.transitionImage(n)}}},[e("div",{staticClass:"thumb-img-outer"},[e(r.a,{staticClass:"thumb-img",attrs:{src:t.imgFailed?"/img/image-not-found.png":image.teaserImageUrl},on:{error:function(e){t.imgFailed=!0}}})],1)])})),0)]):t._e()])])}),[],!1,null,"0ea33a10",null);e.default=component.exports},638:function(t,e,n){var content=n(729);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("eab854de",content,!0,{sourceMap:!1})},639:function(t,e,n){var content=n(731);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("eddc0a46",content,!0,{sourceMap:!1})},640:function(t,e,n){var content=n(733);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("64d3769e",content,!0,{sourceMap:!1})},726:function(t,e,n){var content=n(727);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("63c9496b",content,!0,{sourceMap:!1})},727:function(t,e,n){var r=n(25)(!1);r.push([t.i,'.theme--light.v-snack__wrapper{color:rgba(0,0,0,.87)}.theme--dark.v-snack__wrapper{color:#fff}.v-sheet.v-snack__wrapper{border-radius:4px}.v-sheet.v-snack__wrapper:not(.v-sheet--outlined){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-sheet.v-snack__wrapper.v-sheet--shaped{border-radius:24px 4px}.v-snack{bottom:0;display:flex;font-size:.875rem;justify-content:center;left:0;pointer-events:none;right:0;top:0;width:100%}.v-snack:not(.v-snack--absolute){height:100vh;position:fixed;z-index:1000}.v-snack:not(.v-snack--centered):not(.v-snack--top){align-items:flex-end}.v-snack__wrapper{align-items:center;border-color:currentColor!important;display:flex;margin:8px;max-width:672px;min-height:48px;min-width:344px;padding:0;pointer-events:auto;position:relative;transition-duration:.15s;transition-property:opacity,transform;transition-timing-function:cubic-bezier(0,0,.2,1);z-index:1}.v-snack__wrapper.theme--dark{background-color:#333;color:hsla(0,0%,100%,.87)}.v-snack__content{flex-grow:1;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1.25rem;margin-right:auto;padding:14px 16px;text-align:left;text-align:initial}.v-snack__action{align-items:center;align-self:center;display:flex}.v-snack__action .v-ripple__container{display:none}.v-application--is-ltr .v-snack__action{margin-right:8px}.v-application--is-rtl .v-snack__action{margin-left:8px}.v-snack__action>.v-snack__btn.v-btn{padding:0 8px}.v-snack__btn{margin:0;min-width:auto}.v-snack--absolute{height:100%;position:absolute;z-index:1}.v-snack--centered{align-items:center}.v-snack--left{justify-content:flex-start;right:auto}.v-snack--multi-line .v-snack__wrapper{min-height:68px}.v-snack--right{justify-content:flex-end;left:auto}.v-snack:not(.v-snack--has-background) .v-snack__wrapper{box-shadow:none}.v-snack--bottom{top:auto}.v-snack--text .v-snack__wrapper:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:0;z-index:-1}.v-snack--top{align-items:flex-start;bottom:auto}.v-snack--vertical .v-snack__wrapper{flex-direction:column}.v-snack--vertical .v-snack__wrapper .v-snack__action{align-self:flex-end;margin-bottom:8px}.v-snack-transition-enter.v-snack__wrapper{transform:scale(.8)}.v-snack-transition-enter.v-snack__wrapper,.v-snack-transition-leave-to.v-snack__wrapper{opacity:0}',""]),t.exports=r},728:function(t,e,n){"use strict";n(638)},729:function(t,e,n){var r=n(25)(!1);r.push([t.i,".content table{border-collapse:collapse;table-layout:fixed;width:100%;margin:0;overflow:hidden}.content table th{font-weight:700;text-align:left}.content table td,.content table th{min-width:1em;border:2px solid grey;padding:3px 5px;vertical-align:top;box-sizing:border-box;position:relative}.content img{-o-object-fit:contain;object-fit:contain;max-width:100%;max-height:350px;display:block;margin-left:auto;margin-right:auto}",""]),t.exports=r},730:function(t,e,n){"use strict";n(639)},731:function(t,e,n){var r=n(25)(!1);r.push([t.i,".tag[data-v-21df8ec1]{text-align:center;margin-right:1rem;margin-top:.5rem;margin-bottom:1rem}.tag p[data-v-21df8ec1]{margin-bottom:0}#tags[data-v-21df8ec1]{display:flex;justify-content:flex-start}",""]),t.exports=r},732:function(t,e,n){"use strict";n(640)},733:function(t,e,n){var r=n(25)(!1);r.push([t.i,"@media screen and (max-width:801px){.top-carousel-div[data-v-21df8ec1]{width:800px}}@media screen and (max-width:801px){.carousel-div[data-v-21df8ec1]{width:800px!important}}",""]),t.exports=r},782:function(t,e,n){"use strict";n.r(e);var r=n(582),o=n(118),c=n(109),l=n(88),d=n(551),m=n(347),v=n(522),h=n(119),f=n(624),x=n(599),_=n(529),y=n(659),w=n(346),k=n(1),T=(n(31),n(41),n(59),n(726),n(134)),I=n(37),C=n(27),R=n(99),O=n(105),D=n(9),j=n(2),S=n(12),A=Object(D.a)(T.a,I.a,R.a,Object(O.b)(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"==typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:C.a.options.computed.isDark.call(this)},styles:function(){if(this.absolute||!this.app)return{};var t=this.$vuetify.application,e=t.bar,n=t.bottom,footer=t.footer,r=t.insetFooter,o=t.left,c=t.right,l=t.top;return{paddingBottom:Object(j.h)(n+footer+r),paddingLeft:Object(j.h)(o),paddingRight:Object(j.h)(c),paddingTop:Object(j.h)(e+l)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(S.e)("auto-height",this),0==this.timeout&&Object(S.d)('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(j.t)(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(k.a)({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(j.t)(this)])},genWrapper:function(){var t=this,data=(this.hasBackground?this.setBackgroundColor:this.setTextColor)(this.color,{staticClass:"v-snack__wrapper",class:T.a.options.computed.classes.call(this),style:T.a.options.computed.styles.call(this),directives:[{name:"show",value:this.isActive}],on:{pointerenter:function(){return window.clearTimeout(t.activeTimeout)},pointerleave:this.setTimeout}});return this.$createElement("div",data,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}}),E=(n(16),n(76),n(34),n(63),n(18),n(19),n(23),n(24),n(54),n(45),n(79),n(22)),$=(n(62),n(7),n(68),n(42),n(167),n(74),n(17),n(46),n(209),n(208),n(93)),L=n(524),P=n(581),U=n(768);function B(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return M(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return M(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function M(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function F(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function X(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?F(Object(source),!0).forEach((function(e){Object(k.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):F(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var z={components:{Spinner:L.default,Carousel:P.default,AccountForm:U.default},data:function(){return{imgFailed:!1,openDialog:!1,isRegistered:!1,isRegistering:!1,isUnRegistered:!1,isUnRegistering:!1,eventImagesArray:[],entryId:"",passError:"",error:"",success:"",userAlreadyRegistered:!1,event:"",pageLoaded:!1,eventTopImages:[],attendees:[],entries:[]}},created:function(){var t=this;return Object(E.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getInfo();case 2:return e.next=4,t.isUserAlreadyRegistered();case 4:return e.next=6,t.getEventImages(t.$route.params.id);case 6:t.$nuxt.$on("closeDialog",(function(e){t.openDialog=!1})),t.$nuxt.$on("success",(function(e){t.success=e,setTimeout((function(){t.success=null}),3e3),t.handleRegistration(t.event.id)})),t.$nuxt.$on("error",(function(e){t.error=e,setTimeout((function(){t.error=null}),3e3)}));case 9:case"end":return e.stop()}}),e)})))()},methods:{isHtml:function(t){var e=(new DOMParser).parseFromString(t,"text/html");return Array.from(e.body.childNodes).some((function(t){return 1===t.nodeType}))},getInfo:function(){var t=this;return Object(E.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,l,data,d,m,v,h,f,x,_;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$route.params.id){e.next=3;break}return error({statusCode:404,message:"Page not found"}),e.abrupt("return");case 3:return e.next=5,t.$fire.firestore.collection("events").doc(t.$route.params.id).get();case 5:if(n=e.sent,r=!1,o={id:"ID",title:"",description:"",location:"",isOnline:!1,creatorId:"ID",eventDateFrom:"",eventDateTo:"",eventTimeFrom:"",eventTimeTo:"",deadlineDate:"",deadlineTime:"",hasDeadline:!1,hasAttendeeLimit:!1,attendeeLimit:0,images:[]},c="",l=[],!n.exists){e.next=18;break}(data=n.data()).description&&(d=data.description.match(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi),c=data.description,d&&d.map((function(t){c=c.replace(t,"<a style='color:blue !important' href=\""+t+'" target="_BLANK">'+t+"</a>")}))),(o=X(X(X({},o),data),{},{id:n.id,alteredDescription:c})).images&&o.images.forEach((function(t){t&&t.imageUrl&&l.push(t)})),o.isPublished&&(r=!0),e.next=20;break;case 18:return error({statusCode:404,message:"Page not found"}),e.abrupt("return");case 20:return e.next=22,t.$fire.firestore.collection("entries").where("eventId","==",t.$route.params.id).get().then((function(t){var e=[];return t.forEach((function(t){var data=t.data();e.push(X({id:t.id},data))})),e}));case 22:m=e.sent,v=[],h=B(m);try{for(h.s();!(f=h.n()).done;)x=f.value,v.push(t.$fire.firestore.collection("users").doc(x.userId).get())}catch(t){h.e(t)}finally{h.f()}return e.next=28,Promise.all(v).then((function(t){var e=[];return t.forEach((function(t){var n=t.id,data=t.data();t&&n&&data&&e.push(X({id:n},data))})),e}));case 28:_=e.sent,t.event=o,t.pageLoaded=r,t.eventTopImages=l,t.attendees=_,t.entries=m;case 34:case"end":return e.stop()}}),e)})))()},getEventImages:function(t){var e=this;return Object(E.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$fire.firestore.collection("eventImages").where("eventId","==",t).get().then((function(t){var e=[];return t.forEach((function(t){var n=t.id,data=t.data();e.push(X({id:n},data))})),e}));case 2:(r=n.sent)&&(o=[],r.forEach((function(t){t.images&&t.images.forEach((function(t){t&&t.imageUrl&&o.push(t)}))})),r=o),e.eventImagesArray=r;case 5:case"end":return n.stop()}}),n)})))()},isUserAlreadyRegistered:function(){var t=this;return Object(E.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=B(t.entries);try{for(n.s();!(r=n.n()).done;)o=r.value,t.user&&o&&o.userId==t.user.uid&&(t.entryId=o.id)}catch(t){n.e(t)}finally{n.f()}t.userAlreadyRegistered=!!t.entryId;case 3:case"end":return e.stop()}}),e)})))()},handleRegistration:function(t){var e=this;return Object(E.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.isAccountComplete){n.next=5;break}return e.passError="Please complete your profile first!",setTimeout((function(){e.passError=null}),4e3),e.openDialog=!0,n.abrupt("return");case 5:if(!e.userAlreadyRegistered){n.next=7;break}return n.abrupt("return");case 7:return e.isRegistering=!0,n.next=10,e.$fire.firestore.collection("entries").add({eventId:t,userId:e.user.uid}).then((function(t){e.entryId=t.id})).catch((function(t){console.error("Error adding document: ",t)}));case 10:e.attendees.push(X(X({},e.$store.state.account.ACCOUNT),{},{id:e.user.uid})),e.userAlreadyRegistered=!0,e.isRegistered=!0;case 13:case"end":return n.stop()}}),n)})))()},handleUnRegistration:function(){var t=this;return Object(E.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isUnRegistering=!0,e.next=3,t.$fire.firestore.collection("entries").doc(t.entryId).delete().then((function(){var e=t.attendees.findIndex((function(e){return e.id==t.user.uid}));t.attendees.splice(e,1),t.userAlreadyRegistered=!1})).catch((function(t){console.error("Error removing document: ",t)}));case 3:t.isUnRegistered=!0;case 4:case"end":return e.stop()}}),e)})))()},isPastEndDate:function(t){return Date.now()>t}},computed:X(X({isAccountComplete:function(){return this.account.firstName&&this.account.country&&this.account.university&&this.account.dateOfEntry&&this.account.major&&this.account.expectedGraduationYear&&this.account.degree}},Object($.e)({account:function(t){return t.account.ACCOUNT}})),{},{startingTime:function(){return this.event.eventDateFrom&&this.event.eventTimeFrom?this.toWeekDate(this.event.eventDateFrom+"T"+this.event.eventTimeFrom):""},endingTime:function(){return this.event.eventDateTo&&this.event.eventTimeTo?this.toWeekDate(this.event.eventDateTo+"T"+this.event.eventTimeTo):""},duration:function(){if(!this.startingTime||!this.endingTime)return"";var t,e,n,r=Math.abs(new Date(this.event.eventDateFrom+"T"+this.event.eventTimeFrom)-new Date(this.event.eventDateTo+"T"+this.event.eventTimeTo)),o=Math.floor(r/1e3/60);return t=Math.floor(o/1440),n=o%60,(e=Math.floor((o-1440*t)/60))||n||t?(t?1==t?"1 day ":"".concat(t," days "):"")+(e?1==e?"1 hour ":"".concat(e," hours "):"")+(n?1==n?"1 minute":"".concat(n," minutes"):""):""},deadlineString:function(){return this.event.deadlineDate&&this.event.deadlineTime?new Date(this.event.deadlineDate+"T"+this.event.deadlineTime).toLocaleString("en-CA",{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"2-digit"}):""},deadline:function(){return this.event.deadlineDate&&this.event.deadlineTime?new Date(this.event.deadlineDate+"T"+this.event.deadlineTime):""},isEventFull:function(){return this.event.hasAttendeeLimit&&this.event.attendeeLimit<=this.attendees.length},isPassedDeadline:function(){if(!this.event.hasDeadline){var t=Date.parse(this.event.eventDateTo+"T"+this.event.eventTimeTo);return this.isPastEndDate(t)}return(new Date).getTime()-this.deadline>0},user:function(){return this.$store.state.authUser}}),watch:{isRegistered:function(){var t=this;this.isRegistered&&setTimeout((function(){t.isRegistered=!1,t.isRegistering=!1}),3e3)},isUnRegistered:function(){var t=this;this.isUnRegistered&&setTimeout((function(){t.isUnRegistered=!1,t.isUnRegistering=!1}),3e3)}}},N=(n(728),n(730),n(732),n(73)),component=Object(N.a)(z,(function(){var t=this,e=t._self._c;return e(v.a,{staticClass:"d-flex flex-column align-center justify-center"},[t.pageLoaded?t.pageLoaded?e(c.a,{staticStyle:{width:"min(100%, 800px)"}},[e(r.a,{staticStyle:{position:"absolute",left:"50%","z-index":"100",bottom:"50px",transform:"translate(-50%, -50%)",margin:"0 0 auto"},attrs:{type:"success",value:!!t.success}},[t._v(t._s(t.success))]),t._v(" "),e(r.a,{staticStyle:{position:"absolute",left:"50%","z-index":"100",bottom:"50px",transform:"translate(-50%, -50%)",margin:"0 0 auto"},attrs:{type:"error",value:!!t.error}},[t._v(t._s(t.error))]),t._v(" "),e("div",{staticClass:"pa-2 pb-0 pa-sm-4 pb-sm-0 pa-md-8 pb-md-0"},[e("Carousel",{attrs:{"starting-image":0,thumbnailWidth:700,images:t.eventTopImages,"auto-slide-interval":0,"show-progress-bar":!1}})],1),t._v(" "),e(v.a,{staticClass:"pt-4 pt-md-5 pa-2 pa-sm-4 pa-md-8;"},[e(w.a,{staticClass:"d-flex align-center justify-center"},[e(m.a,{staticClass:"pt-0",attrs:{cols:"12",sm:"11"}},[e(l.d,{staticClass:"text-h5",staticStyle:{"word-break":"break-word","text-align":"center"}},[t._v(" "+t._s(t.event.title)+" ")]),t._v(" "),t.isHtml(t.event.description)?e(l.b,{staticClass:"text-body-1 content",staticStyle:{"padding-top":"10px","white-space":"pre-wrap","word-break":"break-word"},domProps:{innerHTML:t._s(t.event.description)}}):e(l.b,{staticClass:"text-body-1 content",staticStyle:{"padding-top":"10px","white-space":"pre-wrap","word-break":"break-word"},domProps:{innerHTML:t._s(t.event.alteredDescription)}}),t._v(" "),e(l.c,[t.event.isOnline?e("p",{staticClass:"text-body-1"},[t._v("Online Event")]):t.event.location?e("p",{staticClass:"text-body-1"},[t._v("Location: "+t._s(t.event.location))]):t._e(),t._v(" "),t.startingTime?e("p",{staticClass:"text-body-1"},[t._v("Starting time: "+t._s(t.startingTime))]):t._e(),t._v(" "),t.endingTime?e("p",{staticClass:"text-body-1"},[t._v("Ending time: "+t._s(t.endingTime))]):t._e(),t._v(" "),t.duration?e("p",{staticClass:"text-body-1"},[t._v("Duration: "+t._s(t.duration))]):t._e(),t._v(" "),t.deadlineString?e("p",{staticClass:"text-body-1"},[t._v("Deadline to register: "+t._s(t.deadlineString))]):t._e(),t._v(" "),t.event.hasAttendeeLimit&&t.event.attendeeLimit?e("p",{staticClass:"text-body-1"},[t._v("Maximum Capacity: "+t._s(t.event.attendeeLimit)+" "+t._s(t.event.attendeeLimit>1?"Participants":"Participant"))]):t._e(),t._v(" "),t._l(t.event.tags,(function(n){return e(d.a,{key:n,staticClass:"tag"},[t._v("\n                "+t._s(n)+"\n              ")])})),t._v(" "),e(l.a,{staticClass:"px-0 pb-5"},[t.user&&!t.userAlreadyRegistered?e(o.a,{staticClass:"blue white--text",attrs:{disabled:t.isRegistering||t.isUnRegistering||t.isPassedDeadline||t.isEventFull},on:{click:function(e){return t.handleRegistration(t.event.id)}}},[t._v(t._s(t.isPassedDeadline?"Event Past Deadline":t.isEventFull?"Event Full":"Register"))]):t.user?e(o.a,{staticClass:"grey white--text",attrs:{disabled:t.isRegistering||t.isUnRegistering||t.isPassedDeadline},on:{click:function(e){return t.handleUnRegistration(t.event.id)}}},[t._v(t._s(t.isPassedDeadline?"Event Past Deadline":"Unregister"))]):e(o.a,{staticClass:"white--text",attrs:{disabled:!t.user}},[t._v("Please Login to Join")])],1),t._v(" "),e("h2",[t._v(t._s("Attendees ("+t.attendees.length+")"))]),t._v(" "),t.attendees.length?e(c.a,{staticClass:"my-5",staticStyle:{"max-height":"170px","overflow-y":"scroll","scrollbar-width":"thin"},attrs:{outlined:""}},[e(f.a,{staticClass:"py-0"},t._l(t.attendees,(function(n){return e(x.a,{key:n.id,staticClass:"black--text",attrs:{"nuxt-link":"",to:"/profile/".concat(n.id,"/")}},[e(y.a,[e(h.a,[t._v("mdi-account")])],1),(n.firstName||n.lastName)&&(n.firstName.replace(/\s/g,"").length||n.lastName.replace(/\s/g,"").length)?e(_.c,[t._v(t._s(n.firstName+" "+n.lastName))]):e(_.c,[t._v(t._s("anonymous"))]),t._v(" "),t.user&&n.id===t.user.uid?e(_.a,[t._v("YOURSELF")]):t._e()],1)})),1)],1):e("p",[t._v("Be the first one to register!")])],2)],1)],1)],1)],1):t._e():e("Spinner"),t._v(" "),t.eventImagesArray.length?e(c.a,{staticClass:"mt-5 mt-md-7 pa-5",staticStyle:{width:"min(100%, 800px)"}},[e(l.d,[t._v("Event Images")]),t._v(" "),e(w.a,[t.eventImagesArray?e(m.a,{staticClass:"pt-0",staticStyle:{overflow:"visible"},attrs:{cols:"12"}},[e("Carousel",{attrs:{"starting-image":0,images:t.eventImagesArray,"auto-slide-interval":0,"show-progress-bar":!1}})],1):t._e()],1)],1):t._e(),t._v(" "),e("AccountForm",{attrs:{newInfoDialog:t.openDialog,error:t.passError,success:t.success}}),t._v(" "),e(A,{attrs:{app:""},model:{value:t.isRegistering,callback:function(e){t.isRegistering=e},expression:"isRegistering"}},[t._v("Registering")]),t._v(" "),e(A,{attrs:{app:""},model:{value:t.isUnRegistering,callback:function(e){t.isUnRegistering=e},expression:"isUnRegistering"}},[t._v("Unregistering")]),t._v(" "),e(A,{attrs:{app:""},model:{value:t.isRegistered,callback:function(e){t.isRegistered=e},expression:"isRegistered"}},[t._v("Event Registered")]),t._v(" "),e(A,{attrs:{app:""},model:{value:t.isUnRegistered,callback:function(e){t.isUnRegistered=e},expression:"isUnRegistered"}},[t._v("Event Unregistered")])],1)}),[],!1,null,"21df8ec1",null);e.default=component.exports;installComponents(component,{Spinner:n(524).default,Carousel:n(581).default})}}]);