(window.webpackJsonp=window.webpackJsonp||[]).push([[61,28,46],{1040:function(e,t,n){var content=n(1237);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("366ff948",content,!0,{sourceMap:!1})},1041:function(e,t,n){var content=n(1239);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("2198dd5c",content,!0,{sourceMap:!1})},1236:function(e,t,n){"use strict";n(1040)},1237:function(e,t,n){var o=n(25)(!1);o.push([e.i,"@media screen and (min-width:501px){.pc-none[data-v-2862e343]{display:none!important}}@media screen and (max-width:500px){.sp-none[data-v-2862e343]{display:none!important}}@media screen and (max-width:800px){.v-image__image[data-v-2862e343]{width:100%}}@media screen and (min-width:801px){.v-image__image[data-v-2862e343]{width:760px}}@media screen and (max-width:599px){.post-text-container[data-v-2862e343]{width:100%}}@media screen and (min-width:600px){.post-text-container[data-v-2862e343]{min-width:520px}}",""]),e.exports=o},1238:function(e,t,n){"use strict";n(1041)},1239:function(e,t,n){var o=n(25)(!1);o.push([e.i,".d-none{display:none!important}.selected-chip{border:3px solid #000;background-color:#555}",""]),e.exports=o},1329:function(e,t,n){"use strict";n.r(t);var o=n(111),r=n(648),c=n(556),l=n(274),d=(n(34),n(66),n(57),n(70),n(15),n(78),n(85),n(17),n(22),n(23),n(2)),m=n(84),f=n(20),v=(n(61),n(8),n(584),n(44),n(585),n(586),n(587),n(588),n(589),n(590),n(591),n(592),n(593),n(594),n(595),n(596),n(597),n(598),n(599),n(600),n(46),n(39),n(16),n(54),n(14),n(83),n(630)),h=n(561),j=n(709);function w(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function x(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(t){Object(d.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function y(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){l=!0,r=e},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw r}}}}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var _={components:{Spinner:h.default,Picker:j.Picker,Carousel:v.default},name:"Post",data:function(){return{post:{},shouldShow:!0,showEmojiPicker:!1,showEmojiPickerPortrait:!1,showEmojiPickerLandscape:!1,imagesLoaded:!1,currentIndex:0,emojis:{},selectedEmojis:new Set,selectedEmojiNatives:new Set,timer:null,emojiCount:0}},watch:{value:{handler:function(e){console.log("value changed",e)},deep:!0,immediate:!0},$route:function(e,t){var n=this;return Object(f.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("feed"!==e.name){t.next=3;break}return t.next=3,n.getCommentEntries();case 3:case"end":return t.stop()}}),t)})))()}},created:function(){var e=this;return Object(f.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.post=e.source,t.next=3,e.getCommentEntries();case 3:case"end":return t.stop()}}),t)})))()},props:{source:{type:Object,required:!0}},computed:{isMobileScreen:function(){return!(window.innerWidth>500)},hasImages:function(){return this.post.images&&this.post.images.length>0&&this.post.images[0].imageUrl},images:function(){return this.post.images},landscapeImages:function(){return this.post.images.filter((function(image){return image.width&&image.height&&image.width>image.height}))},portraitImages:function(){return this.post.images.filter((function(image){return image.width&&image.height&&image.height>=image.width}))},user:function(){return this.$store.state.authUser}},methods:{start:function(){var e=this;this.timer=setTimeout((function(){return e.dragging=!0}),100)},end:function(){var e=this;clearTimeout(this.timer),setTimeout((function(){return e.dragging=!1}))},click:function(e){this.dragging&&e.stopPropagation()},doAction:function(e,t){var n=this;return Object(f.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.selectedEmojis.has(e);case 2:if(!o.sent){o.next=6;break}n.removeEmoji(e,t),o.next=7;break;case 6:n.addEmojiOld(e,t);case 7:case"end":return o.stop()}}),o)})))()},onClickOutside:function(){this.showEmojiPicker=!1},onClickOutsidePotrait:function(){this.showEmojiPickerPortrait=!1},onClickOutsideLandscape:function(){this.showEmojiPickerLandscape=!1},saveCommentEntries:function(){var e=this;return Object(f.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$fire.firestore.collection("commentEntries").doc(e.user.uid+e.post.eventId+e.post.userId).set({eventId:e.post.eventId,userId:e.user.uid,creatorId:e.post.userId,selectedEmojis:Object(m.a)(e.selectedEmojis),selectedEmojiNatives:Object(m.a)(e.selectedEmojiNatives)});case 2:case"end":return t.stop()}}),t)})))()},getCommentEntries:function(){var e=this;return Object(f.a)(regeneratorRuntime.mark((function t(){var n,o,r,c,l,d,m,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$fire.firestore.collection("commentEntries").where("eventId","==",e.post.eventId).get();case 2:return n=t.sent,t.next=5,e.$fire.firestore.collection("commentEntries").where("eventId","==",e.post.eventId).where("creatorId","==",e.post.userId).get();case 5:if(t.sent,o={},r=new Set,c=new Set,l=0,n.size>0){d=y(n.docs);try{for(f=function(){var t=m.value,data=(t.id,t.data()),n=data.selectedEmojis,d=data.selectedEmojiNatives;data.creatorId&&data.creatorId!==e.post.userId||(n.forEach((function(e,i){o[e]=o[e]?x(x({},o[e]),{},{count:o[e].count+1}):{count:1,native:d[i]},l+=1})),data.userId===e.user.uid&&(r=new Set(n),c=new Set(d)))},d.s();!(m=d.n()).done;)f()}catch(e){d.e(e)}finally{d.f()}}e.emojis=o,e.selectedEmojis=r,e.selectedEmojiNatives=c,e.emojiCount=l;case 15:case"end":return t.stop()}}),t)})))()},toggleEmojiPicker:function(){this.showEmojiPicker=!this.showEmojiPicker},toggleEmojiPickerPortrait:function(){this.showEmojiPickerPortrait=!this.showEmojiPickerPortrait},toggleEmojiPickerLandscape:function(){this.showEmojiPickerLandscape=!this.showEmojiPickerLandscape},addEmoji:function(e){var t=this;return Object(f.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.selectedEmojis.has(e.name)){n.next=2;break}return n.abrupt("return");case 2:return t.emojis[e.name]=t.emojis[e.name]?x(x({},t.emojis[e.name]),{},{count:t.emojis[e.name].count+1}):{count:1,native:e.native},t.selectedEmojis.add(e.name),t.selectedEmojiNatives.add(e.native),t.emojiCount+=1,n.next=8,t.saveCommentEntries();case 8:t.showEmojiPicker=!1,t.showEmojiPickerPortrait=!1,t.showEmojiPickerLandscape=!1;case 11:case"end":return n.stop()}}),n)})))()},addEmojiOld:function(e,t){var n=this;return Object(f.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(!n.selectedEmojis.has(e)){o.next=2;break}return o.abrupt("return");case 2:return n.emojis[e]=n.emojis[e]?x(x({},n.emojis[e]),{},{count:n.emojis[e].count+1}):{count:1,native:t.native},n.selectedEmojis.add(e),n.selectedEmojiNatives.add(t.native),n.emojiCount+=1,o.next=8,n.saveCommentEntries();case 8:n.$forceUpdate();case 9:case"end":return o.stop()}}),o)})))()},removeEmoji:function(e,t){var n=this;return Object(f.a)(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.selectedEmojis.has(e)){t.next=2;break}return t.abrupt("return");case 2:return o=n.emojis[e].count-1,n.emojis[e]=x(x({},n.emojis[e]),{},{count:o}),n.selectedEmojis.delete(e),n.selectedEmojiNatives.delete(n.emojis[e].native),n.emojiCount-=1,t.next=9,n.saveCommentEntries();case 9:n.$forceUpdate();case 10:case"end":return t.stop()}}),t)})))()},downloadMe:function(){var link=document.createElement("a");link.href=this.post.images[this.currentIndex].imageUrl,link.download="image_"+Date.now().toString(),link.target="_blank",link.click()}}},C=(n(1236),n(1238),n(65)),component=Object(C.a)(_,(function(){var e=this,t=e._self._c;return e.hasImages?t(c.a,{staticStyle:{width:"100%","max-width":"800px"}},[e.isMobileScreen&&e.portraitImages&&e.portraitImages.length?t(o.a,{staticClass:"post-carousel pc-none my-3 my-md-5 d-flex flex-column justify-center align-center",staticStyle:{width:"min(100%,800px)"}},[e.shouldShow?t("Carousel",{attrs:{"starting-image":0,images:e.portraitImages,"auto-slide-interval":0,"show-progress-bar":!1,eager:!1,portrait:!0,postId:e.post.id}}):e._e(),e._v(" "),t("div",{staticClass:"pa-5 pt-5 post-text-container"},[t("nuxt-link",{attrs:{to:"/event/".concat(e.post.eventId)}},[t("h2",{staticClass:"mb-2 black--text"},[e._v("\n              Event: "+e._s(e.post.title)+" "+e._s(e.landscapeImages&&e.landscapeImages.length?"(Portrait)":"")+"\n          ")])]),e._v(" "),e.post.comment&&e.post.comment.replace(/\s/g,"").length?t("p",{staticStyle:{"word-break":"break-word"},domProps:{innerHTML:e._s(e.post.alteredComment)}}):e._e(),e._v(" "),t("span",[e._v("\n          Posted by:\n        "),t("nuxt-link",{staticClass:"black--text",attrs:{to:"/profile/".concat(e.post.userId)}},[e._v("\n          "+e._s(e.post.firstName||"anonymous")+"\n        ")])],1),e._v(" "),t("div",{staticClass:"d-flex flex-column flex-wrap mt-2 textarea-emoji-picker",staticStyle:{position:"relative"}},[t("div",{directives:[{def:l.a,name:"click-outside",rawName:"v-click-outside",value:e.onClickOutsidePotrait,expression:"onClickOutsidePotrait"}],staticStyle:{width:"fit-content"}},[t("picker",{directives:[{name:"show",rawName:"v-show",value:e.showEmojiPickerPortrait,expression:"showEmojiPickerPortrait"}],staticStyle:{position:"absolute",top:"-425px",flex:"1"},attrs:{title:"Pick your emoji...",emoji:"point_down"},on:{select:e.addEmoji}}),e._v(" "),t("span",{staticClass:"emoji-trigger d-flex justify-center align-center",class:{triggered:e.showEmojiPickerPortrait},staticStyle:{width:"fit-content"},on:{click:function(t){return t.stopPropagation(),e.toggleEmojiPickerPortrait.apply(null,arguments)}}},[t("svg",{staticStyle:{width:"30px",height:"30px"},attrs:{viewBox:"0 0 24 24"}},[t("path",{attrs:{fill:"#888888",d:"M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"}})]),e._v(" "),t("div",[e._v(e._s(e.emojiCount?" ("+e.emojiCount+")":""))])])],1),e._v(" "),e.isMobileScreen?t("div",{staticClass:"d-flex flex-column justify-center align-center flex-wrap",staticStyle:{"max-height":"80px",overflow:"auto"}},e._l(e.emojis,(function(n,o,i){return t(r.a,{directives:[{name:"show",rawName:"v-show",value:e.emojis[o]&&0!=e.emojis[o].count,expression:"emojis[key] && (emojis[key].count != 0)"}],key:i,staticClass:"ma-2",class:[e.selectedEmojis.has(o)?"selected-chip":""],attrs:{color:e.selectedEmojis.has(o)?"primary":""},on:{click:function(t){return e.doAction(o,n)}}},[t("span",{staticStyle:{"font-size":"20px"}},[e._v(e._s(e.emojis[o].native+""))]),t("span",[e._v(" "+e._s("  "+e.emojis[o].count))])])})),1):t("div",{directives:[{name:"dragscroll",rawName:"v-dragscroll"}],staticClass:"d-flex flex-column justify-center align-center flex-wrap",staticStyle:{"max-height":"80px",overflow:"auto"},on:{dragscrollstart:e.start,dragscrollend:e.end,"!click":function(t){return e.click.apply(null,arguments)}}},e._l(e.emojis,(function(n,o,i){return t(r.a,{directives:[{name:"show",rawName:"v-show",value:e.emojis[o]&&0!=e.emojis[o].count,expression:"emojis[key] && (emojis[key].count != 0)"}],key:i,staticClass:"ma-2",class:[e.selectedEmojis.has(o)?"selected-chip":""],attrs:{color:e.selectedEmojis.has(o)?"primary":""},on:{click:function(t){return e.doAction(o,n)}}},[t("span",{staticStyle:{"font-size":"20px"}},[e._v(e._s(e.emojis[o].native+""))]),t("span",[e._v(" "+e._s("  "+e.emojis[o].count))])])})),1)])],1)],1):e._e(),e._v(" "),e.isMobileScreen&&e.landscapeImages&&e.landscapeImages.length?t(o.a,{staticClass:"post-carousel pc-none my-3 my-md-5 d-flex flex-column justify-center align-center",staticStyle:{width:"min(100%,800px)"}},[e.shouldShow?t("Carousel",{attrs:{"starting-image":0,images:e.landscapeImages,"auto-slide-interval":0,"show-progress-bar":!1,eager:!1,postId:e.post.id}}):e._e(),e._v(" "),t("div",{staticClass:"pa-5 pt-5 post-text-container"},[t("nuxt-link",{attrs:{to:"/event/".concat(e.post.eventId)}},[t("h2",{staticClass:"mb-2 black--text"},[e._v("\n              Event: "+e._s(e.post.title)+" "+e._s(e.portraitImages&&e.portraitImages.length?"(Landscape)":"")+" \n          ")])]),e._v(" "),e.post.comment&&e.post.comment.replace(/\s/g,"").length?t("p",{staticStyle:{"word-break":"break-word"},domProps:{innerHTML:e._s(e.post.alteredComment)}}):e._e(),e._v(" "),t("span",[e._v("\n          Posted by:\n        "),t("nuxt-link",{staticClass:"black--text",attrs:{to:"/profile/".concat(e.post.userId)}},[e._v("\n          "+e._s(e.post.firstName||"anonymous")+"\n        ")])],1),e._v(" "),t("div",{staticClass:"d-flex flex-column flex-wrap mt-2 textarea-emoji-picker",staticStyle:{position:"relative"}},[t("div",{directives:[{def:l.a,name:"click-outside",rawName:"v-click-outside",value:e.onClickOutsideLandscape,expression:"onClickOutsideLandscape"}],staticStyle:{width:"fit-content"}},[t("picker",{directives:[{name:"show",rawName:"v-show",value:e.showEmojiPickerLandscape,expression:"showEmojiPickerLandscape"}],staticStyle:{position:"absolute",top:"-425px",flex:"1"},attrs:{title:"Pick your emoji...",emoji:"point_down"},on:{select:e.addEmoji}}),e._v(" "),t("span",{staticClass:"emoji-trigger d-flex justify-center align-center",class:{triggered:e.showEmojiPickerLandscape},staticStyle:{width:"fit-content"},on:{click:function(t){return t.stopPropagation(),e.toggleEmojiPickerLandscape.apply(null,arguments)}}},[t("svg",{staticStyle:{width:"30px",height:"30px"},attrs:{viewBox:"0 0 24 24"}},[t("path",{attrs:{fill:"#888888",d:"M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"}})]),e._v(" "),t("div",[e._v(e._s(e.emojiCount?" ("+e.emojiCount+")":""))])])],1),e._v(" "),e.isMobileScreen?t("div",{staticClass:"d-flex flex-column justify-center align-center flex-wrap",staticStyle:{"max-height":"80px",overflow:"auto"}},e._l(e.emojis,(function(n,o,i){return t(r.a,{directives:[{name:"show",rawName:"v-show",value:e.emojis[o]&&0!=e.emojis[o].count,expression:"emojis[key] && (emojis[key].count != 0)"}],key:i,staticClass:"ma-2",class:[e.selectedEmojis.has(o)?"selected-chip":""],attrs:{color:e.selectedEmojis.has(o)?"primary":""},on:{click:function(t){return e.doAction(o,n)}}},[t("span",{staticStyle:{"font-size":"20px"}},[e._v(e._s(e.emojis[o].native+""))]),t("span",[e._v(" "+e._s("  "+e.emojis[o].count))])])})),1):t("div",{directives:[{name:"dragscroll",rawName:"v-dragscroll"}],staticClass:"d-flex flex-column justify-center align-center flex-wrap",staticStyle:{"max-height":"80px",overflow:"auto"},on:{dragscrollstart:e.start,dragscrollend:e.end,"!click":function(t){return e.click.apply(null,arguments)}}},e._l(e.emojis,(function(n,o,i){return t(r.a,{directives:[{name:"show",rawName:"v-show",value:e.emojis[o]&&0!=e.emojis[o].count,expression:"emojis[key] && (emojis[key].count != 0)"}],key:i,staticClass:"ma-2",class:[e.selectedEmojis.has(o)?"selected-chip":""],attrs:{color:e.selectedEmojis.has(o)?"primary":""},on:{click:function(t){return e.doAction(o,n)}}},[t("span",{staticStyle:{"font-size":"20px"}},[e._v(e._s(e.emojis[o].native+""))]),t("span",[e._v(" "+e._s("  "+e.emojis[o].count))])])})),1)])],1)],1):e._e(),e._v(" "),e.isMobileScreen?e._e():t(o.a,{staticClass:"post-carousel sp-none my-3 my-md-5 d-flex flex-column justify-center align-center",staticStyle:{width:"min(100%,800px)"}},[e.shouldShow?t("Carousel",{attrs:{"starting-image":0,images:e.images,"auto-slide-interval":0,"show-progress-bar":!1,eager:!1,postId:e.post.id}}):e._e(),e._v(" "),t("div",{staticClass:"pa-5 pt-5 post-text-container"},[t("nuxt-link",{attrs:{to:"/event/".concat(e.post.eventId)}},[t("h2",{staticClass:"mb-2 black--text"},[e._v("\n              Event: "+e._s(e.post.title)+"\n          ")])]),e._v(" "),e.post.comment&&e.post.comment.replace(/\s/g,"").length?t("p",{staticStyle:{"word-break":"break-word"},domProps:{innerHTML:e._s(e.post.alteredComment)}}):e._e(),e._v(" "),t("span",[e._v("\n          Posted by:\n        "),t("nuxt-link",{staticClass:"black--text",attrs:{to:"/profile/".concat(e.post.userId)}},[e._v("\n          "+e._s(e.post.firstName||"anonymous")+"\n        ")])],1),e._v(" "),t("div",{staticClass:"d-flex flex-column flex-wrap mt-2 textarea-emoji-picker",staticStyle:{position:"relative"}},[t("div",{directives:[{def:l.a,name:"click-outside",rawName:"v-click-outside",value:e.onClickOutside,expression:"onClickOutside"}],staticStyle:{width:"fit-content"}},[t("picker",{directives:[{name:"show",rawName:"v-show",value:e.showEmojiPicker,expression:"showEmojiPicker"}],staticStyle:{position:"absolute",top:"-425px",flex:"1"},attrs:{title:"Pick your emoji...",emoji:"point_down"},on:{select:e.addEmoji}}),e._v(" "),t("span",{staticClass:"emoji-trigger d-flex justify-center align-center",class:{triggered:e.showEmojiPicker},staticStyle:{width:"fit-content"},on:{click:function(t){return t.stopPropagation(),e.toggleEmojiPicker.apply(null,arguments)}}},[t("svg",{staticStyle:{width:"30px",height:"30px"},attrs:{viewBox:"0 0 24 24"}},[t("path",{attrs:{fill:"#888888",d:"M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"}})]),e._v(" "),t("div",[e._v(e._s(e.emojiCount?" ("+e.emojiCount+")":""))])])],1),e._v(" "),e.isMobileScreen?t("div",{staticClass:"d-flex flex-column justify-center align-center flex-wrap",staticStyle:{"max-height":"80px",overflow:"auto"}},e._l(e.emojis,(function(n,o,i){return t(r.a,{directives:[{name:"show",rawName:"v-show",value:e.emojis[o]&&0!=e.emojis[o].count,expression:"emojis[key] && (emojis[key].count != 0)"}],key:i,staticClass:"ma-2",class:[e.selectedEmojis.has(o)?"selected-chip":""],attrs:{color:e.selectedEmojis.has(o)?"primary":""},on:{click:function(t){return e.doAction(o,n)}}},[t("span",{staticStyle:{"font-size":"20px"}},[e._v(e._s(e.emojis[o].native+""))]),t("span",[e._v(" "+e._s("  "+e.emojis[o].count))])])})),1):t("div",{directives:[{name:"dragscroll",rawName:"v-dragscroll"}],staticClass:"d-flex flex-column justify-center align-center flex-wrap",staticStyle:{"max-height":"80px",overflow:"auto"},on:{dragscrollstart:e.start,dragscrollend:e.end,"!click":function(t){return e.click.apply(null,arguments)}}},e._l(e.emojis,(function(n,o,i){return t(r.a,{directives:[{name:"show",rawName:"v-show",value:e.emojis[o]&&0!=e.emojis[o].count,expression:"emojis[key] && (emojis[key].count != 0)"}],key:i,staticClass:"ma-2",class:[e.selectedEmojis.has(o)?"selected-chip":""],attrs:{color:e.selectedEmojis.has(o)?"primary":""},on:{click:function(t){return e.doAction(o,n)}}},[t("span",{staticStyle:{"font-size":"20px"}},[e._v(e._s(e.emojis[o].native+""))]),t("span",[e._v(" "+e._s("  "+e.emojis[o].count))])])})),1)])],1)],1)],1):e._e()}),[],!1,null,"2862e343",null);t.default=component.exports;installComponents(component,{Carousel:n(630).default})},559:function(e,t,n){var content=n(563);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("6333d4fe",content,!0,{sourceMap:!1})},561:function(e,t,n){"use strict";n.r(t);var o={name:"LoadingSpinner"},r=(n(562),n(65)),component=Object(r.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var e=this._self._c;return e("div",{staticClass:"text-center",staticStyle:{"margin-top":"10px"}},[e("div",{staticClass:"lds-ring"},[e("div"),e("div"),e("div"),e("div")])])}],!1,null,"6f49ae7c",null);t.default=component.exports},562:function(e,t,n){"use strict";n(559)},563:function(e,t,n){var o=n(25)(!1);o.push([e.i,".lds-ring[data-v-6f49ae7c]{display:inline-block;position:relative;width:80px;height:80px}.lds-ring div[data-v-6f49ae7c]{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:5px;border-radius:50%;-webkit-animation:lds-ring-6f49ae7c 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:lds-ring-6f49ae7c 1.2s cubic-bezier(.5,0,.5,1) infinite;border:5px solid transparent;border-top-color:#2196f3}.lds-ring div[data-v-6f49ae7c]:first-child{-webkit-animation-delay:-.45s;animation-delay:-.45s}.lds-ring div[data-v-6f49ae7c]:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.lds-ring div[data-v-6f49ae7c]:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}@-webkit-keyframes lds-ring-6f49ae7c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes lds-ring-6f49ae7c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""]),e.exports=o},605:function(e,t,n){"use strict";var o=n(38),r=n(113),c=n(64),l=n(71),d=n(273);o&&(d(Array.prototype,"lastItem",{configurable:!0,get:function(){var e=c(this),t=l(e);return 0==t?void 0:e[t-1]},set:function(e){var t=c(this),n=l(t);return t[0==n?0:n-1]=e}}),r("lastItem"))}}]);