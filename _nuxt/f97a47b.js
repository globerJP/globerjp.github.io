(window.webpackJsonp=window.webpackJsonp||[]).push([[44,40],{553:function(e,t,n){var content=n(557);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("dedf7bda",content,!0,{sourceMap:!1})},555:function(e,t,n){"use strict";n.r(t);var o={name:"LoadingSpinner"},r=(n(556),n(65)),component=Object(r.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var e=this._self._c;return e("div",{staticClass:"text-center",staticStyle:{"margin-top":"10px"}},[e("div",{staticClass:"glober-gif"},[e("img",{attrs:{contain:"",src:"/img/glober_loading.gif"}})])])}],!1,null,"31406e9c",null);t.default=component.exports},556:function(e,t,n){"use strict";n(553)},557:function(e,t,n){var o=n(25)(!1);o.push([e.i,".glober-gif[data-v-31406e9c]{display:inline-block;position:relative;width:80px;height:80px}.glober-gif img[data-v-31406e9c]{width:100%;height:100%}.lds-ring[data-v-31406e9c]{display:inline-block;position:relative;width:80px;height:80px}.lds-ring div[data-v-31406e9c]{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:5px;border-radius:50%;-webkit-animation:lds-ring-31406e9c 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:lds-ring-31406e9c 1.2s cubic-bezier(.5,0,.5,1) infinite;border:5px solid transparent;border-top-color:#2196f3}.lds-ring div[data-v-31406e9c]:first-child{-webkit-animation-delay:-.45s;animation-delay:-.45s}.lds-ring div[data-v-31406e9c]:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.lds-ring div[data-v-31406e9c]:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}@-webkit-keyframes lds-ring-31406e9c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes lds-ring-31406e9c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""]),e.exports=o},732:function(e,t,n){var content=n(823);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("ca76018e",content,!0,{sourceMap:!1})},733:function(e,t,n){var content=n(825);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("5885d7ef",content,!0,{sourceMap:!1})},822:function(e,t,n){"use strict";n(732)},823:function(e,t,n){var o=n(25)(!1);o.push([e.i,".max-height-0[data-v-75216bdc]{max-height:0!important}.post-carousel[data-v-75216bdc]{display:inline-block!important}@media screen and (min-width:501px){.pc-none[data-v-75216bdc]{display:none!important}}@media screen and (max-width:500px){.sp-none[data-v-75216bdc]{display:none!important}}@media screen and (max-width:800px){.v-image__image[data-v-75216bdc]{width:100%}}@media screen and (min-width:801px){.v-image__image[data-v-75216bdc]{width:760px}}@media screen and (max-width:599px){.post-text-container[data-v-75216bdc]{width:100%}}@media screen and (min-width:600px){.post-text-container[data-v-75216bdc]{min-width:520px}}",""]),e.exports=o},824:function(e,t,n){"use strict";n(733)},825:function(e,t,n){var o=n(25)(!1);o.push([e.i,".d-none{display:none!important}.selected-chip{border:3px solid #000;background-color:#555}",""]),e.exports=o},872:function(e,t,n){"use strict";n.r(t);var o=n(111),r=n(612),c=n(552),l=n(270),m=(n(34),n(66),n(17),n(14),n(22),n(15),n(23),n(2)),d=n(83),v=n(20),h=(n(61),n(8),n(629),n(44),n(630),n(631),n(632),n(633),n(634),n(635),n(636),n(637),n(638),n(639),n(640),n(641),n(642),n(643),n(644),n(645),n(46),n(39),n(76),n(16),n(54),n(89),n(593)),f=n(555),j=n(679),x=n(899),w=n(900);function k(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function y(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(t){Object(m.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var _={components:{Spinner:f.default,Picker:j.Picker,Carousel:h.default,PickerFast:w.Picker},name:"Post",data:function(){return{isVisibleObject:{value:!1},startingImage:0,isVisible:!1,emojiIndex:new w.EmojiIndex(x),shouldShow:!0,showEmojiPicker:!1,showEmojiPickerPortrait:!1,showEmojiPickerLandscape:!1,imagesLoaded:!1,currentIndex:0,emojis:{},selectedEmojis:new Set,selectedEmojiNatives:new Set,timer:null,emojiCount:{value:0}}},watch:{$route:function(e,t){var n=this;return Object(v.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("feed"!==e.name){t.next=3;break}return t.next=3,n.getCommentEntries();case 3:case"end":return t.stop()}}),t)})))()}},mounted:function(){return Object(v.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},props:{source:{type:Object,required:!0},isMobileScreen:{type:Boolean,required:!0}},computed:{hasImages:function(){return this.source.images&&this.source.images.length>0&&this.source.images[0].imageUrl},images:function(){var e=this.source.resizedImages,t=this.source.images;return e?t.map((function(t){var n=e[t.imageUrl];return n?{width:n.width,height:n.height,imageUrl:n.imageUrl1280,teaserImageUrl:n.imageUrl320}:t})):t},landscapeImages:function(){return this.images.filter((function(image){return image.width&&image.height&&image.width>image.height}))},portraitImages:function(){return this.images.filter((function(image){return image.width&&image.height&&image.height>=image.width}))},user:function(){return this.$store.state.authUser}},methods:{visibilityChanged:function(e,t){var n=this;return Object(v.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=6;break}n.isVisible=e,n.isVisibleObject.value=e,n.showEmojiPicker=!1,n.showEmojiPickerPortrait=!1,n.showEmojiPickerLandscape=!1,n.selectedEmojis=new Set,n.selectedEmojiNatives=new Set,n.emojiCount={value:0},t.next=10;break;case 6:return t.next=8,n.getCommentEntries();case 8:n.isVisible=e,n.isVisibleObject.value=e;case 10:case"end":return t.stop()}}),t)})))()},start:function(){var e=this;this.timer=setTimeout((function(){return e.dragging=!0}),100)},end:function(){var e=this;clearTimeout(this.timer),setTimeout((function(){return e.dragging=!1}))},click:function(e){this.dragging&&e.stopPropagation()},doAction:function(e,t){var n=this;return Object(v.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.selectedEmojis.has(e);case 2:if(!o.sent){o.next=6;break}n.removeEmoji(e,t),o.next=7;break;case 6:n.addEmojiOld(e,t);case 7:case"end":return o.stop()}}),o)})))()},onClickOutside:function(){this.showEmojiPicker=!1},onClickOutsidePortrait:function(){this.showEmojiPickerPortrait=!1},onClickOutsideLandscape:function(){this.showEmojiPickerLandscape=!1},saveCommentEntries:function(){var e=this;return Object(v.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$fire.firestore.collection("commentEntries").doc(e.user.uid+e.source.eventId+e.source.userId).set({eventId:e.source.eventId,userId:e.user.uid,creatorId:e.source.userId,selectedEmojis:Object(d.a)(e.selectedEmojis),selectedEmojiNatives:Object(d.a)(e.selectedEmojiNatives)});case 2:case"end":return t.stop()}}),t)})))()},getCommentEntries:function(){var e=this;return Object(v.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.emojis=e.source.emojis,e.selectedEmojis=e.source.selectedEmojis,e.selectedEmojiNatives=e.source.selectedEmojiNatives,e.emojiCount=e.source.emojiCount;case 4:case"end":return t.stop()}}),t)})))()},toggleEmojiPicker:function(){this.showEmojiPicker=!this.showEmojiPicker},toggleEmojiPickerPortrait:function(){this.showEmojiPickerPortrait=!this.showEmojiPickerPortrait},toggleEmojiPickerLandscape:function(){this.showEmojiPickerLandscape=!this.showEmojiPickerLandscape},addEmoji:function(e){var t=this;return Object(v.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.selectedEmojis.has(e.name)){n.next=2;break}return n.abrupt("return");case 2:return t.emojis[e.name]=t.emojis[e.name]?y(y({},t.emojis[e.name]),{},{count:t.emojis[e.name].count+1}):{count:1,native:e.native},t.selectedEmojis.add(e.name),t.selectedEmojiNatives.add(e.native),t.emojiCount.value+=1,n.next=8,t.saveCommentEntries();case 8:t.showEmojiPicker=!1,t.showEmojiPickerPortrait=!1,t.showEmojiPickerLandscape=!1;case 11:case"end":return n.stop()}}),n)})))()},addEmojiOld:function(e,t){var n=this;return Object(v.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(!n.selectedEmojis.has(e)){o.next=2;break}return o.abrupt("return");case 2:return n.emojis[e]=n.emojis[e]?y(y({},n.emojis[e]),{},{count:n.emojis[e].count+1}):{count:1,native:t.native},n.selectedEmojis.add(e),n.selectedEmojiNatives.add(t.native),n.emojiCount.value+=1,o.next=8,n.saveCommentEntries();case 8:n.$forceUpdate();case 9:case"end":return o.stop()}}),o)})))()},removeEmoji:function(e,t){var n=this;return Object(v.a)(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.selectedEmojis.has(e)){t.next=2;break}return t.abrupt("return");case 2:return o=n.emojis[e].count-1,n.emojis[e]=y(y({},n.emojis[e]),{},{count:o}),n.selectedEmojis.delete(e),n.selectedEmojiNatives.delete(n.emojis[e].native),n.emojiCount.value-=1,t.next=9,n.saveCommentEntries();case 9:n.$forceUpdate();case 10:case"end":return t.stop()}}),t)})))()},downloadMe:function(){var link=document.createElement("a");link.href=this.source.images[this.currentIndex].imageUrl,link.download="image_"+Date.now().toString(),link.target="_blank",link.click()}}},C=(n(822),n(824),n(65)),component=Object(C.a)(_,(function(){var e=this,t=e._self._c;return e.hasImages?t(c.a,{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:e.visibilityChanged,expression:"visibilityChanged"}],staticClass:"py-0",staticStyle:{width:"100%","max-width":"800px"}},[e.isMobileScreen&&e.portraitImages&&e.portraitImages.length?t(o.a,{staticClass:"disable-tap-zoom post-carousel pc-none my-3 my-md-5 d-flex flex-column justify-center align-center",staticStyle:{width:"min(100%,800px)"}},[e.isMobileScreen?t("Carousel",{attrs:{startingImage:e.startingImage,isVisibleObject:e.isVisibleObject,images:e.portraitImages,"auto-slide-interval":0,"show-progress-bar":!1,eager:!1,portrait:!0,postId:e.source.id}}):e._e(),e._v(" "),e.isMobileScreen?t("div",{staticClass:"pa-5 pt-5 post-text-container"},[t("nuxt-link",{attrs:{to:"/event/".concat(e.source.eventId)}},[t("h2",{staticClass:"mb-2 black--text"},[e._v("\n              Event: "+e._s(e.source.title)+" "+e._s(e.landscapeImages&&e.landscapeImages.length?"(Portrait)":"")+"\n          ")])]),e._v(" "),e.source.comment&&e.source.comment.replace(/\s/g,"").length?t("p",{staticStyle:{"word-break":"break-word"},domProps:{innerHTML:e._s(e.source.alteredComment)}}):e._e(),e._v(" "),t("span",[e._v("\n          Posted by:\n        "),t("nuxt-link",{staticClass:"black--text",attrs:{to:"/profile/".concat(e.source.userId)}},[e._v("\n          "+e._s(e.source.firstName||"anonymous")+"\n        ")])],1),e._v(" "),t("div",{staticClass:"d-flex flex-column flex-wrap mt-2 textarea-emoji-picker",staticStyle:{position:"relative"}},[t("div",{directives:[{def:l.a,name:"click-outside",rawName:"v-click-outside",value:e.onClickOutsidePortrait,expression:"onClickOutsidePortrait"}],staticStyle:{width:"fit-content"}},[e.isMobileScreen?t("PickerFast",{directives:[{name:"show",rawName:"v-show",value:e.showEmojiPickerPortrait,expression:"showEmojiPickerPortrait"}],staticStyle:{position:"absolute",top:"-425px",flex:"1"},attrs:{data:e.emojiIndex,title:"Pick your emoji...",emoji:"point_down"},on:{select:e.addEmoji}}):e._e(),e._v(" "),t("span",{staticClass:"emoji-trigger d-flex justify-center align-center",class:{triggered:e.showEmojiPickerPortrait},staticStyle:{width:"fit-content"},on:{click:function(t){return t.stopPropagation(),e.toggleEmojiPickerPortrait.apply(null,arguments)}}},[t("svg",{staticStyle:{width:"30px",height:"30px"},attrs:{viewBox:"0 0 24 24"}},[t("path",{attrs:{fill:"#888888",d:"M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"}})]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.isVisible,expression:"isVisible"}]},[e._v(e._s(e.emojiCount&&e.emojiCount.value?" ("+e.emojiCount.value+")":""))])])],1),e._v(" "),e.isMobileScreen?t("div",{staticClass:"d-flex flex-column justify-center align-center flex-wrap",staticStyle:{"max-height":"80px","min-height":"60px",overflow:"auto"}},e._l(e.emojis,(function(n,o,i){return t(r.a,{directives:[{name:"show",rawName:"v-show",value:e.isVisible&&e.emojis[o]&&0!=e.emojis[o].count,expression:"isVisible && emojis[key] && (emojis[key].count != 0)"}],key:i,staticClass:"ma-2",class:[e.selectedEmojis.has(o)?"selected-chip":""],attrs:{color:e.selectedEmojis.has(o)?"primary":""},on:{click:function(t){return e.doAction(o,n)}}},[t("span",{staticStyle:{"font-size":"20px"}},[e._v(e._s(e.emojis[o].native+""))]),t("span",[e._v(" "+e._s("  "+e.emojis[o].count))])])})),1):t("div",{directives:[{name:"dragscroll",rawName:"v-dragscroll"}],staticClass:"d-flex flex-column justify-center align-center flex-wrap",staticStyle:{"max-height":"80px","min-height":"60px",overflow:"auto"},on:{dragscrollstart:e.start,dragscrollend:e.end,"!click":function(t){return e.click.apply(null,arguments)}}},e._l(e.emojis,(function(n,o,i){return t(r.a,{directives:[{name:"show",rawName:"v-show",value:e.isVisible&&e.emojis[o]&&0!=e.emojis[o].count,expression:"isVisible && emojis[key] && (emojis[key].count != 0)"}],key:i,staticClass:"ma-2",class:[e.selectedEmojis.has(o)?"selected-chip":""],attrs:{color:e.selectedEmojis.has(o)?"primary":""},on:{click:function(t){return e.doAction(o,n)}}},[t("span",{staticStyle:{"font-size":"20px"}},[e._v(e._s(e.emojis[o].native+""))]),t("span",[e._v(" "+e._s("  "+e.emojis[o].count))])])})),1)])],1):e._e()],1):e._e(),e._v(" "),e.isMobileScreen&&e.landscapeImages&&e.landscapeImages.length?t(o.a,{staticClass:"disable-tap-zoom post-carousel pc-none my-3 my-md-5 d-flex flex-column justify-center align-center",staticStyle:{width:"min(100%,800px)"}},[e.isMobileScreen?t("Carousel",{attrs:{isVisibleObject:e.isVisibleObject,startingImage:e.startingImage,images:e.landscapeImages,"auto-slide-interval":0,"show-progress-bar":!1,eager:!1,postId:e.source.id}}):e._e(),e._v(" "),e.isMobileScreen?t("div",{staticClass:"pa-5 pt-5 post-text-container"},[t("nuxt-link",{attrs:{to:"/event/".concat(e.source.eventId)}},[t("h2",{staticClass:"mb-2 black--text"},[e._v("\n              Event: "+e._s(e.source.title)+" "+e._s(e.portraitImages&&e.portraitImages.length?"(Landscape)":"")+" \n          ")])]),e._v(" "),e.source.comment&&e.source.comment.replace(/\s/g,"").length?t("p",{staticStyle:{"word-break":"break-word"},domProps:{innerHTML:e._s(e.source.alteredComment)}}):e._e(),e._v(" "),t("span",[e._v("\n          Posted by:\n        "),t("nuxt-link",{staticClass:"black--text",attrs:{to:"/profile/".concat(e.source.userId)}},[e._v("\n          "+e._s(e.source.firstName||"anonymous")+"\n        ")])],1),e._v(" "),t("div",{staticClass:"d-flex flex-column flex-wrap mt-2 textarea-emoji-picker",staticStyle:{position:"relative"}},[t("div",{directives:[{def:l.a,name:"click-outside",rawName:"v-click-outside",value:e.onClickOutsideLandscape,expression:"onClickOutsideLandscape"}],staticStyle:{width:"fit-content"}},[e.isMobileScreen?t("PickerFast",{directives:[{name:"show",rawName:"v-show",value:e.showEmojiPickerLandscape,expression:"showEmojiPickerLandscape"}],staticStyle:{position:"absolute",top:"-425px",flex:"1"},attrs:{data:e.emojiIndex,title:"Pick your emoji...",emoji:"point_down"},on:{select:e.addEmoji}}):e._e(),e._v(" "),t("span",{staticClass:"emoji-trigger d-flex justify-center align-center",class:{triggered:e.showEmojiPickerLandscape},staticStyle:{width:"fit-content"},on:{click:function(t){return t.stopPropagation(),e.toggleEmojiPickerLandscape.apply(null,arguments)}}},[t("svg",{staticStyle:{width:"30px",height:"30px"},attrs:{viewBox:"0 0 24 24"}},[t("path",{attrs:{fill:"#888888",d:"M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"}})]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.isVisible,expression:"isVisible"}]},[e._v(e._s(e.emojiCount&&e.emojiCount.value?" ("+e.emojiCount.value+")":""))])])],1),e._v(" "),e.isMobileScreen?t("div",{staticClass:"d-flex flex-column justify-center align-center flex-wrap",staticStyle:{"max-height":"80px","min-height":"60px",overflow:"auto"}},e._l(e.emojis,(function(n,o,i){return t(r.a,{directives:[{name:"show",rawName:"v-show",value:e.isVisible&&e.emojis[o]&&0!=e.emojis[o].count,expression:"isVisible && emojis[key] && (emojis[key].count != 0)"}],key:i,staticClass:"ma-2",class:[e.selectedEmojis.has(o)?"selected-chip":""],attrs:{color:e.selectedEmojis.has(o)?"primary":""},on:{click:function(t){return e.doAction(o,n)}}},[t("span",{staticStyle:{"font-size":"20px"}},[e._v(e._s(e.emojis[o].native+""))]),t("span",[e._v(" "+e._s("  "+e.emojis[o].count))])])})),1):t("div",{directives:[{name:"dragscroll",rawName:"v-dragscroll"}],staticClass:"d-flex flex-column justify-center align-center flex-wrap",staticStyle:{"max-height":"80px","min-height":"60px",overflow:"auto"},on:{dragscrollstart:e.start,dragscrollend:e.end,"!click":function(t){return e.click.apply(null,arguments)}}},e._l(e.emojis,(function(n,o,i){return t(r.a,{directives:[{name:"show",rawName:"v-show",value:e.isVisible&&e.emojis[o]&&0!=e.emojis[o].count,expression:"isVisible && emojis[key] && (emojis[key].count != 0)"}],key:i,staticClass:"ma-2",class:[e.selectedEmojis.has(o)?"selected-chip":""],attrs:{color:e.selectedEmojis.has(o)?"primary":""},on:{click:function(t){return e.doAction(o,n)}}},[t("span",{staticStyle:{"font-size":"20px"}},[e._v(e._s(e.emojis[o].native+""))]),t("span",[e._v(" "+e._s("  "+e.emojis[o].count))])])})),1)])],1):e._e()],1):e._e(),e._v(" "),e.isMobileScreen?e._e():t(o.a,{staticClass:"disable-tap-zoom post-carousel sp-none my-3 my-md-5 d-flex flex-column justify-center align-center",staticStyle:{width:"min(100%,800px)"}},[e.isMobileScreen?e._e():t("Carousel",{attrs:{isVisibleObject:e.isVisibleObject,startingImage:e.startingImage,images:e.images,"auto-slide-interval":0,"show-progress-bar":!1,eager:!1,postId:e.source.id}}),e._v(" "),t("div",{staticClass:"d-flex justify-center align-center"},[e.isMobileScreen?e._e():t("div",{staticClass:"pa-5 pt-5 post-text-container",staticStyle:{"max-width":"700px"}},[t("nuxt-link",{attrs:{to:"/event/".concat(e.source.eventId)}},[t("h2",{staticClass:"mb-2 black--text"},[e._v("\n                Event: "+e._s(e.source.title)+"\n            ")])]),e._v(" "),e.source.comment&&e.source.comment.replace(/\s/g,"").length?t("p",{staticStyle:{"word-break":"break-word"},domProps:{innerHTML:e._s(e.source.alteredComment)}}):e._e(),e._v(" "),t("span",[e._v("\n            Posted by:\n          "),t("nuxt-link",{staticClass:"black--text",attrs:{to:"/profile/".concat(e.source.userId)}},[e._v("\n            "+e._s(e.source.firstName||"anonymous")+"\n          ")])],1),e._v(" "),t("div",{staticClass:"d-flex flex-column flex-wrap mt-2 textarea-emoji-picker",staticStyle:{position:"relative"}},[t("div",{directives:[{def:l.a,name:"click-outside",rawName:"v-click-outside",value:e.onClickOutside,expression:"onClickOutside"}],staticStyle:{width:"fit-content"}},[e.isMobileScreen?e._e():t("PickerFast",{directives:[{name:"show",rawName:"v-show",value:e.showEmojiPicker,expression:"showEmojiPicker"}],staticStyle:{position:"absolute",top:"-425px",flex:"1"},attrs:{data:e.emojiIndex,title:"Pick your emoji...",emoji:"point_down"},on:{select:e.addEmoji}}),e._v(" "),t("span",{staticClass:"emoji-trigger d-flex justify-center align-center",class:{triggered:e.showEmojiPicker},staticStyle:{width:"fit-content"},on:{click:function(t){return t.stopPropagation(),e.toggleEmojiPicker.apply(null,arguments)}}},[t("svg",{staticStyle:{width:"30px",height:"30px"},attrs:{viewBox:"0 0 24 24"}},[t("path",{attrs:{fill:"#888888",d:"M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"}})]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.isVisible,expression:"isVisible"}]},[e._v(e._s(e.emojiCount&&e.emojiCount.value?" ("+e.emojiCount.value+")":""))])])],1),e._v(" "),e.isMobileScreen?t("div",{staticClass:"d-flex flex-column justify-center align-center flex-wrap",staticStyle:{"max-height":"80px","min-height":"60px",overflow:"auto"}},e._l(e.emojis,(function(n,o,i){return t(r.a,{directives:[{name:"show",rawName:"v-show",value:e.isVisible&&e.emojis[o]&&0!=e.emojis[o].count,expression:"isVisible && emojis[key] && (emojis[key].count != 0)"}],key:i,staticClass:"ma-2",class:[e.selectedEmojis.has(o)?"selected-chip":""],attrs:{color:e.selectedEmojis.has(o)?"primary":""},on:{click:function(t){return e.doAction(o,n)}}},[t("span",{staticStyle:{"font-size":"20px"}},[e._v(e._s(e.emojis[o].native+""))]),t("span",[e._v(" "+e._s("  "+e.emojis[o].count))])])})),1):t("div",{directives:[{name:"dragscroll",rawName:"v-dragscroll"}],staticClass:"d-flex flex-column justify-center align-center flex-wrap",staticStyle:{"max-height":"80px","min-height":"60px",overflow:"auto"},on:{dragscrollstart:e.start,dragscrollend:e.end,"!click":function(t){return e.click.apply(null,arguments)}}},e._l(e.emojis,(function(n,o,i){return t(r.a,{directives:[{name:"show",rawName:"v-show",value:e.isVisible&&e.emojis[o]&&0!=e.emojis[o].count,expression:"isVisible && emojis[key] && (emojis[key].count != 0)"}],key:i,staticClass:"ma-2",class:[e.selectedEmojis.has(o)?"selected-chip":""],attrs:{color:e.selectedEmojis.has(o)?"primary":""},on:{click:function(t){return e.doAction(o,n)}}},[t("span",{staticStyle:{"font-size":"20px"}},[e._v(e._s(e.emojis[o].native+""))]),t("span",[e._v(" "+e._s("  "+e.emojis[o].count))])])})),1)])],1)])],1)],1):e._e()}),[],!1,null,"75216bdc",null);t.default=component.exports;installComponents(component,{Carousel:n(593).default})}}]);