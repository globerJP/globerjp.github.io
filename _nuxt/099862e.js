(window.webpackJsonp=window.webpackJsonp||[]).push([[43,37],{1e3:function(e,t,n){"use strict";n(847)},1001:function(e,t,n){var r=n(25)(!1);r.push([e.i,"@media screen and (max-width:800px){.v-image__image[data-v-3b7b868c]{width:100%}}@media screen and (min-width:801px){.v-image__image[data-v-3b7b868c]{width:760px}}@media screen and (max-width:599px){.post-text-container[data-v-3b7b868c]{width:100%}}@media screen and (min-width:600px){.post-text-container[data-v-3b7b868c]{min-width:520px}}",""]),e.exports=r},1002:function(e,t,n){"use strict";n(848)},1003:function(e,t,n){var r=n(25)(!1);r.push([e.i,".selected-chip{border:3px solid #000;background-color:#555}",""]),e.exports=r},1090:function(e,t,n){"use strict";n.r(t);var r=n(600),o=n(548),c=n(269),l=(n(34),n(66),n(55),n(70),n(14),n(78),n(83),n(17),n(16),n(22),n(23),n(2)),d=n(82),m=n(21),f=(n(61),n(8),n(653),n(44),n(654),n(655),n(656),n(657),n(658),n(659),n(660),n(661),n(662),n(663),n(664),n(665),n(666),n(667),n(668),n(669),n(46),n(39),n(54),n(15),n(89),n(760),n(551)),v=n(670);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function j(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function w(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var y={components:{Spinner:f.default,Picker:v.Picker},name:"Post",data:function(){return{showEmojiPicker:!1,imagesLoaded:!1,imageCount:0,currentIndex:0,emojis:{},selectedEmojis:new Set,selectedEmojiNatives:new Set,timer:null,allowedOutsideClick:!1,emojiCount:0}},watch:{$route:function(e,t){var n=this;return Object(m.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("feed"!==e.name){t.next=3;break}return t.next=3,n.getCommentEntries();case 3:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;return Object(m.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getCommentEntries();case 2:case"end":return t.stop()}}),t)})))()},props:{post:{type:Object,required:!0}},computed:{isMobileScreen:function(){return!(window.innerWidth>800)},hasImages:function(){return this.post.images.length>0&&this.post.images[0].imageUrl},images:function(){return this.post.images},user:function(){return this.$store.state.authUser}},methods:{start:function(){var e=this;this.timer=setTimeout((function(){return e.dragging=!0}),100)},end:function(){var e=this;clearTimeout(this.timer),setTimeout((function(){return e.dragging=!1}))},click:function(e){this.dragging&&e.stopPropagation()},doAction:function(e,t){var n=this;return Object(m.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.selectedEmojis.has(e);case 2:if(!r.sent){r.next=6;break}n.removeEmoji(e,t),r.next=7;break;case 6:n.addEmojiOld(e,t);case 7:case"end":return r.stop()}}),r)})))()},onClickOutside:function(){this.showEmojiPicker=!1,this.allowedOutsideClick=!1},saveCommentEntries:function(){var e=this;return Object(m.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$fire.firestore.collection("commentEntries").doc(e.user.uid+e.post.eventId+e.post.userId).set({eventId:e.post.eventId,userId:e.user.uid,creatorId:e.post.userId,selectedEmojis:Object(d.a)(e.selectedEmojis),selectedEmojiNatives:Object(d.a)(e.selectedEmojiNatives)});case 2:case"end":return t.stop()}}),t)})))()},getCommentEntries:function(){var e=this;return Object(m.a)(regeneratorRuntime.mark((function t(){var n,r,o,c,l,d,m,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$fire.firestore.collection("commentEntries").where("eventId","==",e.post.eventId).get();case 2:return n=t.sent,t.next=5,e.$fire.firestore.collection("commentEntries").where("eventId","==",e.post.eventId).where("creatorId","==",e.post.userId).get();case 5:if(t.sent,r={},o=new Set,c=new Set,l=0,n.size>0){d=w(n.docs);try{for(f=function(){var t=m.value,data=(t.id,t.data()),n=data.selectedEmojis,d=data.selectedEmojiNatives;data.creatorId&&data.creatorId!==e.post.userId||(n.forEach((function(e,i){r[e]=r[e]?j(j({},r[e]),{},{count:r[e].count+1}):{count:1,native:d[i]},l+=1})),data.userId===e.user.uid&&(o=new Set(n),c=new Set(d)))},d.s();!(m=d.n()).done;)f()}catch(e){d.e(e)}finally{d.f()}}e.emojis=r,e.selectedEmojis=o,e.selectedEmojiNatives=c,e.emojiCount=l;case 15:case"end":return t.stop()}}),t)})))()},toggleEmojiPicker:function(){this.showEmojiPicker=!this.showEmojiPicker},addEmoji:function(e){var t=this;return Object(m.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.selectedEmojis.has(e.name)){n.next=2;break}return n.abrupt("return");case 2:return t.emojis[e.name]=t.emojis[e.name]?j(j({},t.emojis[e.name]),{},{count:t.emojis[e.name].count+1}):{count:1,native:e.native},t.selectedEmojis.add(e.name),t.selectedEmojiNatives.add(e.native),t.emojiCount+=1,n.next=8,t.saveCommentEntries();case 8:t.showEmojiPicker=!1;case 9:case"end":return n.stop()}}),n)})))()},addEmojiOld:function(e,t){var n=this;return Object(m.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n.selectedEmojis.has(e)){r.next=2;break}return r.abrupt("return");case 2:return n.emojis[e]=n.emojis[e]?j(j({},n.emojis[e]),{},{count:n.emojis[e].count+1}):{count:1,native:t.native},n.selectedEmojis.add(e),n.selectedEmojiNatives.add(t.native),n.emojiCount+=1,r.next=8,n.saveCommentEntries();case 8:n.$forceUpdate();case 9:case"end":return r.stop()}}),r)})))()},removeEmoji:function(e,t){var n=this;return Object(m.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.selectedEmojis.has(e)){t.next=2;break}return t.abrupt("return");case 2:return r=n.emojis[e].count-1,n.emojis[e]=j(j({},n.emojis[e]),{},{count:r}),n.selectedEmojis.delete(e),n.selectedEmojiNatives.delete(n.emojis[e].native),n.emojiCount-=1,t.next=9,n.saveCommentEntries();case 9:n.$forceUpdate();case 10:case"end":return t.stop()}}),t)})))()},downloadMe:function(){var link=document.createElement("a");link.href=this.post.images[this.currentIndex].imageUrl,link.download="image_"+Date.now().toString(),link.target="_blank",link.click()}}},k=(n(1e3),n(1002),n(65)),component=Object(k.a)(y,(function(){var e=this,t=e._self._c;return e.hasImages?t(o.a,{staticClass:"d-flex flex-column justify-center align-center",staticStyle:{width:"100%","max-width":"800px"}},[t("div",{staticClass:"post-carousel my-3 my-md-5 d-flex flex-column justify-center align-center",staticStyle:{width:"min(100%,800px)"}},[t("div",{staticClass:"pa-5 pt-5 post-text-container"},[t("nuxt-link",{attrs:{to:"/event/".concat(e.post.eventId)}},[t("h2",{staticClass:"mb-2 black--text"},[e._v("\n              Event: "+e._s(e.post.title)+"\n          ")])]),e._v(" "),e.post.comment&&e.post.comment.replace(/\s/g,"").length?t("p",{staticStyle:{"word-break":"break-word"},domProps:{innerHTML:e._s(e.post.alteredComment)}}):e._e(),e._v(" "),t("span",[e._v("\n          Posted by:\n        "),t("nuxt-link",{staticClass:"black--text",attrs:{to:"/profile/".concat(e.post.userId)}},[e._v("\n          "+e._s(e.post.firstName||"anonymous")+"\n        ")])],1),e._v(" "),t("div",{staticClass:"d-flex flex-column flex-wrap mt-2 textarea-emoji-picker",staticStyle:{position:"relative"}},[t("div",{directives:[{def:c.a,name:"click-outside",rawName:"v-click-outside",value:e.onClickOutside,expression:"onClickOutside"}],staticStyle:{width:"fit-content"}},[t("picker",{directives:[{name:"show",rawName:"v-show",value:e.showEmojiPicker,expression:"showEmojiPicker"}],staticStyle:{position:"absolute",top:"-425px",flex:"1"},attrs:{title:"Pick your emoji...",emoji:"point_down"},on:{select:e.addEmoji}}),e._v(" "),t("span",{staticClass:"emoji-trigger d-flex justify-center align-center",class:{triggered:e.showEmojiPicker},staticStyle:{width:"fit-content"},on:{click:function(t){return t.stopPropagation(),e.toggleEmojiPicker.apply(null,arguments)}}},[t("svg",{staticStyle:{width:"30px",height:"30px"},attrs:{viewBox:"0 0 24 24"}},[t("path",{attrs:{fill:"#888888",d:"M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"}})]),e._v(" "),t("div",[e._v(e._s(e.emojiCount?" ("+e.emojiCount+")":""))])])],1),e._v(" "),e.isMobileScreen?t("div",{staticClass:"d-flex flex-column justify-center align-center flex-wrap",staticStyle:{"max-height":"80px",overflow:"auto"}},e._l(e.emojis,(function(n,o,i){return t(r.a,{directives:[{name:"show",rawName:"v-show",value:e.emojis[o]&&0!=e.emojis[o].count,expression:"emojis[key] && (emojis[key].count != 0)"}],key:i,staticClass:"ma-2",class:[e.selectedEmojis.has(o)?"selected-chip":""],attrs:{color:e.selectedEmojis.has(o)?"primary":""},on:{click:function(t){return e.doAction(o,n)}}},[t("span",{staticStyle:{"font-size":"20px"}},[e._v(e._s(e.emojis[o].native+""))]),t("span",[e._v(" "+e._s("  "+e.emojis[o].count))])])})),1):t("div",{directives:[{name:"dragscroll",rawName:"v-dragscroll"}],staticClass:"d-flex flex-column justify-center align-center flex-wrap",staticStyle:{"max-height":"80px",overflow:"auto"},on:{dragscrollstart:e.start,dragscrollend:e.end,"!click":function(t){return e.click.apply(null,arguments)}}},e._l(e.emojis,(function(n,o,i){return t(r.a,{directives:[{name:"show",rawName:"v-show",value:e.emojis[o]&&0!=e.emojis[o].count,expression:"emojis[key] && (emojis[key].count != 0)"}],key:i,staticClass:"ma-2",class:[e.selectedEmojis.has(o)?"selected-chip":""],attrs:{color:e.selectedEmojis.has(o)?"primary":""},on:{click:function(t){return e.doAction(o,n)}}},[t("span",{staticStyle:{"font-size":"20px"}},[e._v(e._s(e.emojis[o].native+""))]),t("span",[e._v(" "+e._s("  "+e.emojis[o].count))])])})),1)])],1),e._v(" "),t("PostCarousel",{attrs:{"starting-image":0,images:e.images,"auto-slide-interval":0,"show-progress-bar":!1,eager:!1}})],1)]):e._e()}),[],!1,null,"3b7b868c",null);t.default=component.exports},549:function(e,t,n){var content=n(553);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("6333d4fe",content,!0,{sourceMap:!1})},551:function(e,t,n){"use strict";n.r(t);var r={name:"LoadingSpinner"},o=(n(552),n(65)),component=Object(o.a)(r,(function(){this._self._c;return this._m(0)}),[function(){var e=this._self._c;return e("div",{staticClass:"text-center",staticStyle:{"margin-top":"10px"}},[e("div",{staticClass:"lds-ring"},[e("div"),e("div"),e("div"),e("div")])])}],!1,null,"6f49ae7c",null);t.default=component.exports},552:function(e,t,n){"use strict";n(549)},553:function(e,t,n){var r=n(25)(!1);r.push([e.i,".lds-ring[data-v-6f49ae7c]{display:inline-block;position:relative;width:80px;height:80px}.lds-ring div[data-v-6f49ae7c]{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:5px;border-radius:50%;-webkit-animation:lds-ring-6f49ae7c 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:lds-ring-6f49ae7c 1.2s cubic-bezier(.5,0,.5,1) infinite;border:5px solid transparent;border-top-color:#2196f3}.lds-ring div[data-v-6f49ae7c]:first-child{-webkit-animation-delay:-.45s;animation-delay:-.45s}.lds-ring div[data-v-6f49ae7c]:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.lds-ring div[data-v-6f49ae7c]:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}@-webkit-keyframes lds-ring-6f49ae7c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes lds-ring-6f49ae7c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""]),e.exports=r},847:function(e,t,n){var content=n(1001);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("e3da54a0",content,!0,{sourceMap:!1})},848:function(e,t,n){var content=n(1003);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("4866868c",content,!0,{sourceMap:!1})}}]);