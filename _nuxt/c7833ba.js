(window.webpackJsonp=window.webpackJsonp||[]).push([[112,52,59,70],{1023:function(e,t,n){var content=n(1161);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(23).default)("0a2e04c9",content,!0,{sourceMap:!1})},1160:function(e,t,n){"use strict";n(1023)},1161:function(e,t,n){var r=n(22)(!1);r.push([e.i,".resize-observer{height:50px}",""]),e.exports=r},1338:function(e,t,n){"use strict";n.r(t);var r=n(120),o=n(92),c=n(569),l=(n(58),n(70),n(15),n(77),n(85),n(17),n(16),n(24),n(25),n(2)),d=n(19),m=(n(37),n(8),n(592),n(44),n(593),n(594),n(595),n(596),n(597),n(598),n(599),n(600),n(601),n(602),n(603),n(604),n(605),n(606),n(607),n(608),n(46),n(14),n(34),n(171),n(76),n(66),n(62),n(1155),n(1157)),f=n.n(m),v=n(992),h=n(574);n(1158);function j(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function x(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function w(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var k={components:{Spinner:h.default,VirtualList:f.a},data:function(){return{isMounted:!1,itemComponent:v.default,savedFirstTrue:null,latestUpdatedAt:null,posts:[],eof:!1,isLoading:!1,lastDoc:null,batchSize:5,minSize:5,eventIds:{},userIds:{}}},computed:{isMobileScreen:function(){return!(window.innerWidth>500)},user:function(){return this.$store.state.authUser}},mounted:function(){var e=this;return Object(d.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.user){t.next=5;break}return e.isMounted=!0,t.next=4,e.loadUntilSome();case 4:window.addEventListener("scroll",e.loadMore);case 5:case"end":return t.stop()}}),t)})))()},destroyed:function(){window.removeEventListener("scroll",this.loadMore)},watch:{isMounted:function(){this.$nuxt.setLayout("default")},$route:function(e,t){var n=this;return Object(d.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("feed"!==e.name){r.next=4;break}return r.next=3,n.checkNewBlogsAndLoad();case 3:window.addEventListener("scroll",n.loadMore);case 4:"feed"===t.name&&window.removeEventListener("scroll",n.loadMore);case 5:case"end":return r.stop()}}),r)})))()}},methods:{handleJoin:function(){localStorage.setItem("BEFORE_LOGIN_PATH",this.$route.path),this.$router.push({path:"/login"})},getCommentEntries:function(e){var t=this;return Object(d.a)(regeneratorRuntime.mark((function n(){var r,o,c,l,d,m,f,v;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$fire.firestore.collection("commentEntries").where("eventId","==",e.eventId).get();case 2:if(r=n.sent,o={},c=new Set,l=new Set,d=0,r.size>0){m=w(r.docs);try{for(v=function(){var n=f.value,data=(n.id,n.data()),r=data.selectedEmojis,m=data.selectedEmojiNatives;data.creatorId&&data.creatorId!==e.userId||(r.forEach((function(e,i){o[e]=o[e]?x(x({},o[e]),{},{count:o[e].count+1}):{count:1,native:m[i]},d+=1})),data.userId===t.user.uid&&(c=new Set(r),l=new Set(m)))},m.s();!(f=m.n()).done;)v()}catch(e){m.e(e)}finally{m.f()}}e.emojis=o,e.selectedEmojis=c,e.selectedEmojiNatives=l,e.emojiCount={value:d};case 12:case"end":return n.stop()}}),n)})))()},checkNewBlogsAndLoad:function(){var e=this;return Object(d.a)(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$fire.firestore,r=n.collection("eventImages").orderBy("updatedAt","desc").limit(1),t.next=4,r.get();case 4:if(!((o=t.sent).size>0)){t.next=14;break}if(o.docs[0].data().updatedAt!=e.latestUpdatedAt){t.next=9;break}return t.abrupt("return");case 9:return e.lastDoc=null,e.eof=!1,e.posts=[],t.next=14,e.loadUntilSome();case 14:case"end":return t.stop()}}),t)})))()},loadBlogs:function(){var e=this;return Object(d.a)(regeneratorRuntime.mark((function t(){var n,r,o,c,l,d,m,f,v;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.$fire.firestore,r=n.collection("eventImages").orderBy("createdAt","desc").limit(e.batchSize),e.posts.length){t.next=7;break}return t.next=5,n.collection("eventImages").orderBy("updatedAt","desc").limit(1).get();case 5:(o=t.sent).size>0&&(c=o.docs[0].data(),e.latestUpdatedAt=c.updatedAt);case 7:return e.lastDoc&&(r=r.startAfter(e.lastDoc)),t.next=10,r.get();case 10:if(l=t.sent,e.eof=l.empty,e.countMiss=0,!(l.size>0)){t.next=35;break}e.lastDoc=l.docs[l.docs.length-1],d=[],m=w(l.docs),t.prev=17,v=regeneratorRuntime.mark((function t(){var n,r,data,o,c,l,m,v;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=f.value,r=n.id,(data=n.data()).images.length||!e.posts.length){t.next=7;break}if(e.countMiss+=1,!e.posts.length){t.next=7;break}return t.abrupt("return","continue");case 7:return o="",data.comment&&(c=data.comment.match(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi),o=data.comment,c&&c.map((function(e){o=o.replace(e,"<a style='color:blue !important' href=\""+e+'" target="_BLANK">'+e+"</a>")}))),e.eventIds[data.eventId]||(l=e.$fire.firestore.collection("events").doc(data.eventId).get(),d.push(l)),e.userIds[data.userId]||(m=e.$fire.firestore.collection("users").doc(data.userId).get(),d.push(m)),t.next=13,Promise.all(d).then((function(t){t.forEach((function(t){var n=t.id,data=t.data();n&&data&&(data.title&&(e.eventIds[n]=data),data.email&&(e.userIds[n]=data))}))}));case 13:if(!data.images||!data.images.length){t.next=18;break}return v=x(x(x(x({id:r},e.eventIds[data.eventId]),e.userIds[data.userId]),data),{},{alteredComment:o}),t.next=17,e.getCommentEntries(v);case 17:e.posts.push(v);case 18:case"end":return t.stop()}}),t)})),m.s();case 20:if((f=m.n()).done){t.next=27;break}return t.delegateYield(v(),"t0",22);case 22:if("continue"!==t.t0){t.next=25;break}return t.abrupt("continue",25);case 25:t.next=20;break;case 27:t.next=32;break;case 29:t.prev=29,t.t1=t.catch(17),m.e(t.t1);case 32:return t.prev=32,m.f(),t.finish(32);case 35:case"end":return t.stop()}}),t,null,[[17,29,32,35]])})))()},loadUntilSome:function(){var e=this;return Object(d.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isLoading&&!e.eof){t.next=2;break}return t.abrupt("return");case 2:e.isLoading=!0,e.countMiss=e.batchSize;case 4:if(!(e.countMiss>=e.batchSize-1||e.$el.getBoundingClientRect().height<=(window.innerHeight||document.documentElement.clientHeight))||e.eof){t.next=9;break}return t.next=7,e.loadBlogs();case 7:t.next=4;break;case 9:e.isLoading=!1;case 10:case"end":return t.stop()}}),t)})))()},loadMore:function(){var e=this.$el.getBoundingClientRect(),t=this.isMobileScreen?300:150;!(e.bottom<=(window.innerHeight||document.documentElement.clientHeight)+t)||this.isLoading||this.eof||this.loadUntilSome()}}},_=(n(1160),n(54)),component=Object(_.a)(k,(function(){var e=this,t=e._self._c;return e.user?t(c.a,{staticClass:"d-flex flex-column justify-center pa-0"},[t("h1",{staticClass:"d-flex justify-center align-center mt-7 mb-3 mt-md-9 blue--text text-decoration-underline",staticStyle:{"text-align":"center",width:"100%"}},[e._v(" Welcome ")]),e._v(" "),t("DynamicScroller",{attrs:{items:e.posts,"min-item-size":50,prerender:5,"page-mode":""},scopedSlots:e._u([{key:"default",fn:function(n){var r=n.item,o=n.index,c=n.active;return[t("DynamicScrollerItem",{attrs:{item:r,active:c,"size-dependencies":[r.alteredComment,r.images],"data-index":o}},[t("Post",{attrs:{source:r,isMobileScreen:e.isMobileScreen}})],1)]}}])}),e._v(" "),e.isLoading&&e.isMounted?t("Spinner",{staticStyle:{"min-height":"90px"}}):e._e(),e._v(" "),t("div",{staticClass:"d-flex justify-center align-center"},[e.eof?t(o.d,{staticStyle:{"min-height":"90px",width:"fit-content"}},[e._v("No more posts.")]):e._e()],1)],1):t(c.a,[t("h1",[e._v("\n      You must be logged in to view this page.\n    ")]),e._v(" "),t(r.a,{staticClass:"pa-0",staticStyle:{"text-transform":"unset !important","font-size":"16px !important"},attrs:{color:"primary",text:""},on:{click:function(t){return e.handleJoin()}}},[e._v("Click here to Join")])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Post:n(992).default,Spinner:n(580).default})},572:function(e,t,n){var content=n(576);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(23).default)("6333d4fe",content,!0,{sourceMap:!1})},573:function(e,t,n){var content=n(579);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(23).default)("1a30734a",content,!0,{sourceMap:!1})},574:function(e,t,n){"use strict";n.r(t);var r={name:"LoadingSpinner"},o=(n(575),n(54)),component=Object(o.a)(r,(function(){this._self._c;return this._m(0)}),[function(){var e=this._self._c;return e("div",{staticClass:"text-center",staticStyle:{"margin-top":"10px"}},[e("div",{staticClass:"lds-ring"},[e("div"),e("div"),e("div"),e("div")])])}],!1,null,"6f49ae7c",null);t.default=component.exports},575:function(e,t,n){"use strict";n(572)},576:function(e,t,n){var r=n(22)(!1);r.push([e.i,".lds-ring[data-v-6f49ae7c]{display:inline-block;position:relative;width:80px;height:80px}.lds-ring div[data-v-6f49ae7c]{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:5px;border-radius:50%;-webkit-animation:lds-ring-6f49ae7c 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:lds-ring-6f49ae7c 1.2s cubic-bezier(.5,0,.5,1) infinite;border:5px solid transparent;border-top-color:#2196f3}.lds-ring div[data-v-6f49ae7c]:first-child{-webkit-animation-delay:-.45s;animation-delay:-.45s}.lds-ring div[data-v-6f49ae7c]:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.lds-ring div[data-v-6f49ae7c]:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}@-webkit-keyframes lds-ring-6f49ae7c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes lds-ring-6f49ae7c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""]),e.exports=r},578:function(e,t,n){"use strict";n(573)},579:function(e,t,n){var r=n(22)(!1);r.push([e.i,".spinner[data-v-b799d304]{display:flex;justify-content:center;margin-top:1rem;color:#add8e6}",""]),e.exports=r},580:function(e,t,n){"use strict";n.r(t);var r=n(247),o={},c=(n(578),n(54)),component=Object(c.a)(o,(function(){var e=this._self._c;return e("div",{staticClass:"spinner"},[e(r.a,{attrs:{size:"100",indeterminate:""}})],1)}),[],!1,null,"b799d304",null);t.default=component.exports},804:function(e,t,n){var content=n(948);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(23).default)("37d846cb",content,!0,{sourceMap:!1})},805:function(e,t,n){var content=n(950);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(23).default)("0b2a6a81",content,!0,{sourceMap:!1})},947:function(e,t,n){"use strict";n(804)},948:function(e,t,n){var r=n(22)(!1);r.push([e.i,".max-height-0[data-v-78da06a7]{max-height:0!important}.post-carousel[data-v-78da06a7]{display:inline-block!important}@media screen and (min-width:501px){.pc-none[data-v-78da06a7]{display:none!important}}@media screen and (max-width:500px){.sp-none[data-v-78da06a7]{display:none!important}}@media screen and (max-width:800px){.v-image__image[data-v-78da06a7]{width:100%}}@media screen and (min-width:801px){.v-image__image[data-v-78da06a7]{width:760px}}@media screen and (max-width:599px){.post-text-container[data-v-78da06a7]{width:100%}}@media screen and (min-width:600px){.post-text-container[data-v-78da06a7]{min-width:520px}}",""]),e.exports=r},949:function(e,t,n){"use strict";n(805)},950:function(e,t,n){var r=n(22)(!1);r.push([e.i,".d-none{display:none!important}.selected-chip{border:3px solid #000;background-color:#555}",""]),e.exports=r},992:function(e,t,n){"use strict";n.r(t);var r=n(111),o=n(668),c=n(569),l=n(274),d=(n(34),n(66),n(17),n(15),n(24),n(14),n(25),n(2)),m=n(84),f=n(19),v=(n(62),n(8),n(592),n(44),n(593),n(594),n(595),n(596),n(597),n(598),n(599),n(600),n(601),n(602),n(603),n(604),n(605),n(606),n(607),n(608),n(46),n(37),n(76),n(16),n(56),n(83),n(645)),h=n(574),j=n(735),x=n(901),w=n(902);function y(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function k(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(t){Object(d.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var _={components:{Spinner:h.default,Picker:j.Picker,Carousel:v.default,PickerFast:w.Picker},name:"Post",data:function(){return{isVisibleObject:{value:!1},startingImage:0,isVisible:!1,emojiIndex:new w.EmojiIndex(x),shouldShow:!0,showEmojiPicker:!1,showEmojiPickerPortrait:!1,showEmojiPickerLandscape:!1,imagesLoaded:!1,currentIndex:0,emojis:{},selectedEmojis:new Set,selectedEmojiNatives:new Set,timer:null,emojiCount:{value:0}}},watch:{$route:function(e,t){var n=this;return Object(f.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("feed"!==e.name){t.next=3;break}return t.next=3,n.getCommentEntries();case 3:case"end":return t.stop()}}),t)})))()}},mounted:function(){return Object(f.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},props:{source:{type:Object,required:!0},isMobileScreen:{type:Boolean,required:!0}},computed:{hasImages:function(){return this.source.images&&this.source.images.length>0&&this.source.images[0].imageUrl},images:function(){var e=this.source.resizedImages,t=this.source.images;return e?t.map((function(t){var n=e[t.imageUrl];return n?{width:n.width,height:n.height,imageUrl:n.imageUrl1280,teaserImageUrl:n.imageUrl320}:t})):t},landscapeImages:function(){return this.images.filter((function(image){return image.width&&image.height&&image.width>image.height}))},portraitImages:function(){return this.images.filter((function(image){return image.width&&image.height&&image.height>=image.width}))},user:function(){return this.$store.state.authUser}},methods:{visibilityChanged:function(e,t){var n=this;return Object(f.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=6;break}n.isVisible=e,n.isVisibleObject.value=e,n.showEmojiPicker=!1,n.showEmojiPickerPortrait=!1,n.showEmojiPickerLandscape=!1,n.selectedEmojis=new Set,n.selectedEmojiNatives=new Set,n.emojiCount={value:0},t.next=10;break;case 6:return t.next=8,n.getCommentEntries();case 8:n.isVisible=e,n.isVisibleObject.value=e;case 10:case"end":return t.stop()}}),t)})))()},start:function(){var e=this;this.timer=setTimeout((function(){return e.dragging=!0}),100)},end:function(){var e=this;clearTimeout(this.timer),setTimeout((function(){return e.dragging=!1}))},click:function(e){this.dragging&&e.stopPropagation()},doAction:function(e,t){var n=this;return Object(f.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.selectedEmojis.has(e);case 2:if(!r.sent){r.next=6;break}n.removeEmoji(e,t),r.next=7;break;case 6:n.addEmojiOld(e,t);case 7:case"end":return r.stop()}}),r)})))()},onClickOutside:function(){this.showEmojiPicker=!1},onClickOutsidePortrait:function(){this.showEmojiPickerPortrait=!1},onClickOutsideLandscape:function(){this.showEmojiPickerLandscape=!1},saveCommentEntries:function(){var e=this;return Object(f.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$fire.firestore.collection("commentEntries").doc(e.user.uid+e.source.eventId+e.source.userId).set({eventId:e.source.eventId,userId:e.user.uid,creatorId:e.source.userId,selectedEmojis:Object(m.a)(e.selectedEmojis),selectedEmojiNatives:Object(m.a)(e.selectedEmojiNatives)});case 2:case"end":return t.stop()}}),t)})))()},getCommentEntries:function(){var e=this;return Object(f.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.emojis=e.source.emojis,e.selectedEmojis=e.source.selectedEmojis,e.selectedEmojiNatives=e.source.selectedEmojiNatives,e.emojiCount=e.source.emojiCount;case 4:case"end":return t.stop()}}),t)})))()},toggleEmojiPicker:function(){this.showEmojiPicker=!this.showEmojiPicker},toggleEmojiPickerPortrait:function(){this.showEmojiPickerPortrait=!this.showEmojiPickerPortrait},toggleEmojiPickerLandscape:function(){this.showEmojiPickerLandscape=!this.showEmojiPickerLandscape},addEmoji:function(e){var t=this;return Object(f.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.selectedEmojis.has(e.name)){n.next=2;break}return n.abrupt("return");case 2:return t.emojis[e.name]=t.emojis[e.name]?k(k({},t.emojis[e.name]),{},{count:t.emojis[e.name].count+1}):{count:1,native:e.native},t.selectedEmojis.add(e.name),t.selectedEmojiNatives.add(e.native),t.emojiCount.value+=1,n.next=8,t.saveCommentEntries();case 8:t.showEmojiPicker=!1,t.showEmojiPickerPortrait=!1,t.showEmojiPickerLandscape=!1;case 11:case"end":return n.stop()}}),n)})))()},addEmojiOld:function(e,t){var n=this;return Object(f.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n.selectedEmojis.has(e)){r.next=2;break}return r.abrupt("return");case 2:return n.emojis[e]=n.emojis[e]?k(k({},n.emojis[e]),{},{count:n.emojis[e].count+1}):{count:1,native:t.native},n.selectedEmojis.add(e),n.selectedEmojiNatives.add(t.native),n.emojiCount.value+=1,r.next=8,n.saveCommentEntries();case 8:n.$forceUpdate();case 9:case"end":return r.stop()}}),r)})))()},removeEmoji:function(e,t){var n=this;return Object(f.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.selectedEmojis.has(e)){t.next=2;break}return t.abrupt("return");case 2:return r=n.emojis[e].count-1,n.emojis[e]=k(k({},n.emojis[e]),{},{count:r}),n.selectedEmojis.delete(e),n.selectedEmojiNatives.delete(n.emojis[e].native),n.emojiCount.value-=1,t.next=9,n.saveCommentEntries();case 9:n.$forceUpdate();case 10:case"end":return t.stop()}}),t)})))()},downloadMe:function(){var link=document.createElement("a");link.href=this.source.images[this.currentIndex].imageUrl,link.download="image_"+Date.now().toString(),link.target="_blank",link.click()}}},C=(n(947),n(949),n(54)),component=Object(C.a)(_,(function(){var e=this,t=e._self._c;return e.hasImages?t(c.a,{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:e.visibilityChanged,expression:"visibilityChanged"}],staticClass:"py-0",staticStyle:{width:"100%","max-width":"800px"}},[e.isMobileScreen&&e.portraitImages&&e.portraitImages.length?t(r.a,{staticClass:"disable-tap-zoom post-carousel pc-none my-3 my-md-5 d-flex flex-column justify-center align-center",staticStyle:{width:"min(100%,800px)"}},[e.isMobileScreen?t("Carousel",{attrs:{startingImage:e.startingImage,isVisibleObject:e.isVisibleObject,images:e.portraitImages,"auto-slide-interval":0,"show-progress-bar":!1,eager:!1,portrait:!0,postId:e.source.id}}):e._e(),e._v(" "),e.isMobileScreen?t("div",{staticClass:"pa-5 pt-5 post-text-container"},[t("nuxt-link",{attrs:{to:"/event/".concat(e.source.eventId)}},[t("h2",{staticClass:"mb-2 black--text"},[e._v("\n              Event: "+e._s(e.source.title)+" "+e._s(e.landscapeImages&&e.landscapeImages.length?"(Portrait)":"")+"\n          ")])]),e._v(" "),e.source.comment&&e.source.comment.replace(/\s/g,"").length?t("p",{staticStyle:{"word-break":"break-word"},domProps:{innerHTML:e._s(e.source.alteredComment)}}):e._e(),e._v(" "),t("span",[e._v("\n          Posted by:\n        "),t("nuxt-link",{staticClass:"black--text",attrs:{to:"/profile/".concat(e.source.userId)}},[e._v("\n          "+e._s(e.source.firstName||"anonymous")+"\n        ")])],1),e._v(" "),t("div",{staticClass:"d-flex flex-column flex-wrap mt-2 textarea-emoji-picker",staticStyle:{position:"relative"}},[t("div",{directives:[{def:l.a,name:"click-outside",rawName:"v-click-outside",value:e.onClickOutsidePortrait,expression:"onClickOutsidePortrait"}],staticStyle:{width:"fit-content"}},[e.isMobileScreen?t("PickerFast",{directives:[{name:"show",rawName:"v-show",value:e.showEmojiPickerPortrait,expression:"showEmojiPickerPortrait"}],staticStyle:{position:"absolute",top:"-425px",flex:"1","z-index":"99"},attrs:{data:e.emojiIndex,title:"Pick your emoji...",emoji:"point_down"},on:{select:e.addEmoji}}):e._e(),e._v(" "),t("span",{staticClass:"emoji-trigger d-flex justify-center align-center",class:{triggered:e.showEmojiPickerPortrait},staticStyle:{width:"fit-content"},on:{click:function(t){return t.stopPropagation(),e.toggleEmojiPickerPortrait.apply(null,arguments)}}},[t("svg",{staticStyle:{width:"30px",height:"30px"},attrs:{viewBox:"0 0 24 24"}},[t("path",{attrs:{fill:"#888888",d:"M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"}})]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.isVisible,expression:"isVisible"}]},[e._v(e._s(e.emojiCount&&e.emojiCount.value?" ("+e.emojiCount.value+")":""))])])],1),e._v(" "),e.isMobileScreen?t("div",{staticClass:"d-flex flex-column justify-center align-center flex-wrap",staticStyle:{"max-height":"80px","min-height":"60px",overflow:"auto"}},e._l(e.emojis,(function(n,r,i){return t(o.a,{directives:[{name:"show",rawName:"v-show",value:e.isVisible&&e.emojis[r]&&0!=e.emojis[r].count,expression:"isVisible && emojis[key] && (emojis[key].count != 0)"}],key:i,staticClass:"ma-2",class:[e.selectedEmojis.has(r)?"selected-chip":""],attrs:{color:e.selectedEmojis.has(r)?"primary":""},on:{click:function(t){return e.doAction(r,n)}}},[t("span",{staticStyle:{"font-size":"20px"}},[e._v(e._s(e.emojis[r].native+""))]),t("span",[e._v(" "+e._s("  "+e.emojis[r].count))])])})),1):t("div",{directives:[{name:"dragscroll",rawName:"v-dragscroll"}],staticClass:"d-flex flex-column justify-center align-center flex-wrap",staticStyle:{"max-height":"80px","min-height":"60px",overflow:"auto"},on:{dragscrollstart:e.start,dragscrollend:e.end,"!click":function(t){return e.click.apply(null,arguments)}}},e._l(e.emojis,(function(n,r,i){return t(o.a,{directives:[{name:"show",rawName:"v-show",value:e.isVisible&&e.emojis[r]&&0!=e.emojis[r].count,expression:"isVisible && emojis[key] && (emojis[key].count != 0)"}],key:i,staticClass:"ma-2",class:[e.selectedEmojis.has(r)?"selected-chip":""],attrs:{color:e.selectedEmojis.has(r)?"primary":""},on:{click:function(t){return e.doAction(r,n)}}},[t("span",{staticStyle:{"font-size":"20px"}},[e._v(e._s(e.emojis[r].native+""))]),t("span",[e._v(" "+e._s("  "+e.emojis[r].count))])])})),1)])],1):e._e()],1):e._e(),e._v(" "),e.isMobileScreen&&e.landscapeImages&&e.landscapeImages.length?t(r.a,{staticClass:"disable-tap-zoom post-carousel pc-none my-3 my-md-5 d-flex flex-column justify-center align-center",staticStyle:{width:"min(100%,800px)"}},[e.isMobileScreen?t("Carousel",{attrs:{isVisibleObject:e.isVisibleObject,startingImage:e.startingImage,images:e.landscapeImages,"auto-slide-interval":0,"show-progress-bar":!1,eager:!1,postId:e.source.id}}):e._e(),e._v(" "),e.isMobileScreen?t("div",{staticClass:"pa-5 pt-5 post-text-container"},[t("nuxt-link",{attrs:{to:"/event/".concat(e.source.eventId)}},[t("h2",{staticClass:"mb-2 black--text"},[e._v("\n              Event: "+e._s(e.source.title)+" "+e._s(e.portraitImages&&e.portraitImages.length?"(Landscape)":"")+" \n          ")])]),e._v(" "),e.source.comment&&e.source.comment.replace(/\s/g,"").length?t("p",{staticStyle:{"word-break":"break-word"},domProps:{innerHTML:e._s(e.source.alteredComment)}}):e._e(),e._v(" "),t("span",[e._v("\n          Posted by:\n        "),t("nuxt-link",{staticClass:"black--text",attrs:{to:"/profile/".concat(e.source.userId)}},[e._v("\n          "+e._s(e.source.firstName||"anonymous")+"\n        ")])],1),e._v(" "),t("div",{staticClass:"d-flex flex-column flex-wrap mt-2 textarea-emoji-picker",staticStyle:{position:"relative"}},[t("div",{directives:[{def:l.a,name:"click-outside",rawName:"v-click-outside",value:e.onClickOutsideLandscape,expression:"onClickOutsideLandscape"}],staticStyle:{width:"fit-content"}},[e.isMobileScreen?t("PickerFast",{directives:[{name:"show",rawName:"v-show",value:e.showEmojiPickerLandscape,expression:"showEmojiPickerLandscape"}],staticStyle:{position:"absolute",top:"-425px",flex:"1","z-index":"99"},attrs:{data:e.emojiIndex,title:"Pick your emoji...",emoji:"point_down"},on:{select:e.addEmoji}}):e._e(),e._v(" "),t("span",{staticClass:"emoji-trigger d-flex justify-center align-center",class:{triggered:e.showEmojiPickerLandscape},staticStyle:{width:"fit-content"},on:{click:function(t){return t.stopPropagation(),e.toggleEmojiPickerLandscape.apply(null,arguments)}}},[t("svg",{staticStyle:{width:"30px",height:"30px"},attrs:{viewBox:"0 0 24 24"}},[t("path",{attrs:{fill:"#888888",d:"M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"}})]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.isVisible,expression:"isVisible"}]},[e._v(e._s(e.emojiCount&&e.emojiCount.value?" ("+e.emojiCount.value+")":""))])])],1),e._v(" "),e.isMobileScreen?t("div",{staticClass:"d-flex flex-column justify-center align-center flex-wrap",staticStyle:{"max-height":"80px","min-height":"60px",overflow:"auto"}},e._l(e.emojis,(function(n,r,i){return t(o.a,{directives:[{name:"show",rawName:"v-show",value:e.isVisible&&e.emojis[r]&&0!=e.emojis[r].count,expression:"isVisible && emojis[key] && (emojis[key].count != 0)"}],key:i,staticClass:"ma-2",class:[e.selectedEmojis.has(r)?"selected-chip":""],attrs:{color:e.selectedEmojis.has(r)?"primary":""},on:{click:function(t){return e.doAction(r,n)}}},[t("span",{staticStyle:{"font-size":"20px"}},[e._v(e._s(e.emojis[r].native+""))]),t("span",[e._v(" "+e._s("  "+e.emojis[r].count))])])})),1):t("div",{directives:[{name:"dragscroll",rawName:"v-dragscroll"}],staticClass:"d-flex flex-column justify-center align-center flex-wrap",staticStyle:{"max-height":"80px","min-height":"60px",overflow:"auto"},on:{dragscrollstart:e.start,dragscrollend:e.end,"!click":function(t){return e.click.apply(null,arguments)}}},e._l(e.emojis,(function(n,r,i){return t(o.a,{directives:[{name:"show",rawName:"v-show",value:e.isVisible&&e.emojis[r]&&0!=e.emojis[r].count,expression:"isVisible && emojis[key] && (emojis[key].count != 0)"}],key:i,staticClass:"ma-2",class:[e.selectedEmojis.has(r)?"selected-chip":""],attrs:{color:e.selectedEmojis.has(r)?"primary":""},on:{click:function(t){return e.doAction(r,n)}}},[t("span",{staticStyle:{"font-size":"20px"}},[e._v(e._s(e.emojis[r].native+""))]),t("span",[e._v(" "+e._s("  "+e.emojis[r].count))])])})),1)])],1):e._e()],1):e._e(),e._v(" "),e.isMobileScreen?e._e():t(r.a,{staticClass:"disable-tap-zoom post-carousel sp-none my-3 my-md-5 d-flex flex-column justify-center align-center",staticStyle:{width:"min(100%,800px)"}},[e.isMobileScreen?e._e():t("Carousel",{attrs:{isVisibleObject:e.isVisibleObject,startingImage:e.startingImage,images:e.images,"auto-slide-interval":0,"show-progress-bar":!1,eager:!0,postId:e.source.id}}),e._v(" "),t("div",{staticClass:"d-flex justify-center align-center"},[e.isMobileScreen?e._e():t("div",{staticClass:"pa-5 pt-5 post-text-container",staticStyle:{"max-width":"700px"}},[t("nuxt-link",{attrs:{to:"/event/".concat(e.source.eventId)}},[t("h2",{staticClass:"mb-2 black--text"},[e._v("\n                Event: "+e._s(e.source.title)+"\n            ")])]),e._v(" "),e.source.comment&&e.source.comment.replace(/\s/g,"").length?t("p",{staticStyle:{"word-break":"break-word"},domProps:{innerHTML:e._s(e.source.alteredComment)}}):e._e(),e._v(" "),t("span",[e._v("\n            Posted by:\n          "),t("nuxt-link",{staticClass:"black--text",attrs:{to:"/profile/".concat(e.source.userId)}},[e._v("\n            "+e._s(e.source.firstName||"anonymous")+"\n          ")])],1),e._v(" "),t("div",{staticClass:"d-flex flex-column flex-wrap mt-2 textarea-emoji-picker",staticStyle:{position:"relative"}},[t("div",{directives:[{def:l.a,name:"click-outside",rawName:"v-click-outside",value:e.onClickOutside,expression:"onClickOutside"}],staticStyle:{width:"fit-content"}},[e.isMobileScreen?e._e():t("PickerFast",{directives:[{name:"show",rawName:"v-show",value:e.showEmojiPicker,expression:"showEmojiPicker"}],staticStyle:{position:"absolute",top:"-425px",flex:"1","z-index":"99"},attrs:{data:e.emojiIndex,title:"Pick your emoji...",emoji:"point_down"},on:{select:e.addEmoji}}),e._v(" "),t("span",{staticClass:"emoji-trigger d-flex justify-center align-center",class:{triggered:e.showEmojiPicker},staticStyle:{width:"fit-content"},on:{click:function(t){return t.stopPropagation(),e.toggleEmojiPicker.apply(null,arguments)}}},[t("svg",{staticStyle:{width:"30px",height:"30px"},attrs:{viewBox:"0 0 24 24"}},[t("path",{attrs:{fill:"#888888",d:"M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"}})]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.isVisible,expression:"isVisible"}]},[e._v(e._s(e.emojiCount&&e.emojiCount.value?" ("+e.emojiCount.value+")":""))])])],1),e._v(" "),e.isMobileScreen?t("div",{staticClass:"d-flex flex-column justify-center align-center flex-wrap",staticStyle:{"max-height":"80px","min-height":"60px",overflow:"auto"}},e._l(e.emojis,(function(n,r,i){return t(o.a,{directives:[{name:"show",rawName:"v-show",value:e.isVisible&&e.emojis[r]&&0!=e.emojis[r].count,expression:"isVisible && emojis[key] && (emojis[key].count != 0)"}],key:i,staticClass:"ma-2",class:[e.selectedEmojis.has(r)?"selected-chip":""],attrs:{color:e.selectedEmojis.has(r)?"primary":""},on:{click:function(t){return e.doAction(r,n)}}},[t("span",{staticStyle:{"font-size":"20px"}},[e._v(e._s(e.emojis[r].native+""))]),t("span",[e._v(" "+e._s("  "+e.emojis[r].count))])])})),1):t("div",{directives:[{name:"dragscroll",rawName:"v-dragscroll"}],staticClass:"d-flex flex-column justify-center align-center flex-wrap",staticStyle:{"max-height":"80px","min-height":"60px",overflow:"auto"},on:{dragscrollstart:e.start,dragscrollend:e.end,"!click":function(t){return e.click.apply(null,arguments)}}},e._l(e.emojis,(function(n,r,i){return t(o.a,{directives:[{name:"show",rawName:"v-show",value:e.isVisible&&e.emojis[r]&&0!=e.emojis[r].count,expression:"isVisible && emojis[key] && (emojis[key].count != 0)"}],key:i,staticClass:"ma-2",class:[e.selectedEmojis.has(r)?"selected-chip":""],attrs:{color:e.selectedEmojis.has(r)?"primary":""},on:{click:function(t){return e.doAction(r,n)}}},[t("span",{staticStyle:{"font-size":"20px"}},[e._v(e._s(e.emojis[r].native+""))]),t("span",[e._v(" "+e._s("  "+e.emojis[r].count))])])})),1)])],1)])],1)],1):e._e()}),[],!1,null,"78da06a7",null);t.default=component.exports;installComponents(component,{Carousel:n(645).default})}}]);