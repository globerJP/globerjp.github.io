(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1001:function(e,t,r){var content=r(1093);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(23).default)("4c3f3fee",content,!0,{sourceMap:!1})},1002:function(e,t,r){var content=r(1095);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(23).default)("2c7758fe",content,!0,{sourceMap:!1})},1003:function(e,t,r){var content=r(1097);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(23).default)("03d7b00a",content,!0,{sourceMap:!1})},1086:function(e,t,r){"use strict";r.r(t);var o,n=r(274),c=(r(15),r(24),r(25),r(2)),d=r(84),m=r(19),l=(r(62),r(58),r(8),r(14),r(112),r(36),r(44),r(46),r(17),r(16),r(93),r(76),r(213),r(37),r(56),r(704)),f=r(901),h=r(902);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function R(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var x={components:{PickerFast:h.Picker},props:{currentUserId:{type:String,default:""},isAdmin:{type:Boolean||String,default:!1},screenHeight:{type:String,required:!0},isDevice:{type:Boolean,required:!0}},emits:["show-demo-options"],data:function(){return{addEmojiLocal:null,positionRight:!0,positionTop:!0,currMessage:{},emojiPickerHeight:300,emojiPickerTop:0,emojiPickerRight:"",emojiPickerLeft:"",emojiOpened:!1,emojiIndex:new h.EmojiIndex(f),roomsListOpened:!0,remainingUsersIdNameList:[],pageLoaded:!1,theme:"light",usersRef:null,roomsRef:null,messagesRef:null,filesRef:null,dbTimestamp:null,deleteDbField:null,roomsPerPage:15,rooms:[],roomId:"",startRooms:null,endRooms:null,roomsLoaded:!1,loadingRooms:!0,allUsers:[],allUsersDictionary:{},allUsersIdNameList:[],loadingLastMessageByRoom:0,roomsLoadedCount:!1,selectedRoom:null,messagesPerPage:20,messages:[],messagesLoaded:!1,roomMessage:"",startMessages:null,endMessages:null,roomsListeners:[],listeners:[],typingMessageCache:"",disableForm:!1,addNewRoom:null,addRoomUserIdList:[],inviteRoomId:null,invitedUserIdList:[],removeRoomId:null,removeUserId:"",removeUsers:[],messageActions:[{name:"replyMessage",title:"Reply"},{name:"editMessage",title:"Edit Message",onlyMe:!0},{name:"deleteMessage",title:"Delete Message",onlyMe:!this.isAdmin}],styles:{message:{background:"#fff",backgroundMe:"#cce7f2",color:"#0a0a0a",colorStarted:"#9ca6af",backgroundDeleted:"#dadfe2",backgroundSelected:"#c2dcf2",colorDeleted:"#757e85",colorUsername:"#9ca6af",colorTimestamp:"#828c94",backgroundDate:"#e5effa",colorDate:"#505a62",backgroundSystem:"#e5effa",colorSystem:"#505a62",backgroundMedia:"rgba(0, 0, 0, 0.15)",backgroundReply:"rgba(0, 0, 0, 0.08)",colorReplyUsername:"#0a0a0a",colorReply:"#6e6e6e",colorTag:"#0d579c",backgroundImage:"#ddd",colorNewMessages:"#1976d2",backgroundScrollCounter:"#0696c7",colorScrollCounter:"#fff",backgroundReaction:"#eee",borderStyleReaction:"1px solid #eee",backgroundReactionHover:"#fff",borderStyleReactionHover:"1px solid #ddd",colorReactionCounter:"#0a0a0a",backgroundReactionMe:"#cfecf5",borderStyleReactionMe:"1px solid #3b98b8",backgroundReactionHoverMe:"#cfecf5",borderStyleReactionHoverMe:"1px solid #3b98b8",colorReactionCounterMe:"#0b59b3",backgroundAudioRecord:"#eb4034",backgroundAudioLine:"rgba(0, 0, 0, 0.15)",backgroundAudioProgress:"#455247",backgroundAudioProgressSelector:"#455247",colorFileExtension:"#757e85"},container:{borderRadius:"5px"}},templatesText:[{tag:"hello",text:"Hi there, nice you meet you."},{tag:"thanks",text:"Thank you so much."}]}},computed:{user:function(){return this.$store.state.authUser},loadedRooms:function(){return this.rooms.slice(0,this.roomsLoadedCount)}},mounted:function(){var e=this;return Object(m.a)(regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$fire.firestore,o=e.$fire.storage.ref(),e.usersRef=r.collection("chatUsers"),e.roomsRef=r.collection("chatRooms"),e.messagesRef=function(t){return e.roomsRef.doc(t).collection("chatMessages")},e.filesRef=o.child("chatFiles"),e.dbTimestamp=e.$fireModule.firestore.FieldValue.serverTimestamp(),e.deleteDbField=e.$fireModule.firestore.FieldValue.delete(),t.next=10,e.fetchRooms();case 10:e.pageLoaded=!0;case 11:case"end":return t.stop()}}),t)})))()},methods:(o={openEventPage:function(e){e.eventId&&this.$router.push({path:"/event/".concat(e.eventId)})},sendMessageReaction:function(e){var t=this;return Object(m.a)(regeneratorRuntime.mark((function r(){var o,n,c,d;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:o=e.reaction,n=e.remove,c=e.messageId,d=e.roomId,firestoreService.updateMessageReactions(d,c,t.currentUserId,o.unicode,n?"remove":"add");case 2:case"end":return r.stop()}}),r)})))()},openEmoji:function(e,t){this.addEmojiLocal=t,this.emojiOpened=!this.emojiOpened,this.setEmojiPickerPosition(e.clientX,e.clientY,e.view.innerWidth,e.view.innerHeight)},setEmojiPickerPosition:function(e,t,r,o){this.positionRight=!(e<=.66*r),this.positionTop=t<=o/2;var n=r<500||o<700,c=document.getElementById("room-footer"),d=document.getElementById("picker-container");if(c){if(!n){c.getBoundingClientRect().top;var m=d.getBoundingClientRect().left,l=d.getBoundingClientRect().right;this.positionTop?this.emojiPickerTop=t-110:this.emojiPickerTop=t-this.emojiPickerHeight-130,this.emojiPickerRight=(this.positionTop,this.positionRight?"".concat(l-e,"px"):""),this.emojiPickerLeft=(this.positionTop,this.positionRight?"":"".concat(e-m,"px"))}}else n&&(this.emojiPickerRight="-50px")},onClickOutside:function(){this.emojiOpened&&(this.emojiOpened=!1)},addEmojiNow:function(e){this.emojiOpened=!1,this.addEmojiLocal&&this.addEmojiLocal({unicode:e.native})},resetRooms:function(){this.loadingRooms=!0,this.loadingLastMessageByRoom=0,this.roomsLoadedCount=0,this.rooms=[],this.roomsLoaded=!0,this.startRooms=null,this.endRooms=null,this.roomsListeners.forEach((function(e){return e()})),this.roomsListeners=[],this.resetMessages()},resetMessages:function(){this.messages=[],this.messagesLoaded=!1,this.startMessages=null,this.endMessages=null,this.listeners.forEach((function(e){return e()})),this.listeners=[]},fetchRooms:function(){var e=this;return Object(m.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.resetRooms(),t.next=3,e.fetchMoreRooms();case 3:case"end":return t.stop()}}),t)})))()},fetchMoreRooms:function(){var e=this;return Object(m.a)(regeneratorRuntime.mark((function t(){var o,n,c,m,l,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.endRooms||e.startRooms){t.next=2;break}return t.abrupt("return",e.roomsLoaded=!0);case 2:return o=e.roomsRef.where("users","array-contains",e.currentUserId).orderBy("lastUpdated","desc").limit(e.roomsPerPage),e.startRooms&&(o=o.startAfter(e.startRooms)),t.next=6,o.get();case 6:return n=t.sent,e.roomsLoaded=n.empty||n.size<e.roomsPerPage,e.startRooms&&(e.endRooms=e.startRooms),e.startRooms=n.docs[n.docs.length-1],c=[],n.forEach((function(t){t.data().users.forEach((function(t){e.allUsers.find((function(e){return(null==e?void 0:e._id)===t}))||-1!==c.indexOf(t)||c.push(t)}))})),m=[],c.forEach((function(t){var r=e.usersRef.doc(t).get().then((function(e){return e.data()}));m.push(r)})),t.t0=[],t.t1=Object(d.a)(e.allUsers),t.t2=d.a,t.next=19,Promise.all(m);case 19:t.t3=t.sent,t.t4=(0,t.t2)(t.t3),e.allUsers=t.t0.concat.call(t.t0,t.t1,t.t4),l={},n.forEach((function(t){l[t.id]=R(R({},t.data()),{},{users:[]}),t.data().users.forEach((function(r){var o=e.allUsers.find((function(e){return(null==e?void 0:e._id)===r}));o&&l[t.id].users.push(o)}))})),f=[],Object.keys(l).forEach((function(t){var o=l[t],n=o.users.filter((function(t){return t._id!==e.currentUserId}));o.roomName=o.roomName||n.map((function(e){return e.username})).join(", ")||"Myself";var c=o.roomAvatarUrl?o.roomAvatarUrl:r(626);f.push(R(R({},o),{},{roomId:t,avatar:c,index:o.lastUpdated.seconds,lastMessage:{content:"Room created",timestamp:e.formatTimestamp(new Date(o.lastUpdated.seconds),o.lastUpdated)}}))})),e.rooms=e.rooms.concat(f),f.map((function(t){return e.listenLastMessage(t)})),e.rooms.length||(e.loadingRooms=!1,e.roomsLoadedCount=0),e.listenRooms(o);case 30:case"end":return t.stop()}}),t)})))()},listenLastMessage:function(e){var t=this,r=this.messagesRef(e.roomId).orderBy("timestamp","desc").limit(1).onSnapshot((function(r){r.forEach((function(r){var o=t.formatLastMessage(r.data()),n=t.rooms.findIndex((function(t){return e.roomId===t.roomId}));t.rooms[n].lastMessage=o,t.rooms=Object(d.a)(t.rooms)})),t.loadingLastMessageByRoom<t.rooms.length&&(t.loadingLastMessageByRoom++,t.loadingLastMessageByRoom===t.rooms.length&&(t.loadingRooms=!1,t.roomsLoadedCount=t.rooms.length))}));this.roomsListeners.push(r)},formatLastMessage:function(e){var t;if(e.timestamp){var content=e.content;if(null!==(t=e.files)&&void 0!==t&&t.length){var r=e.files[0];content="".concat(r.name,".").concat(r.extension||r.type)}return R(R({},e),{content:content,timestamp:this.formatTimestamp(new Date(1e3*e.timestamp.seconds),e.timestamp),distributed:!0,seen:e.sender_id===this.currentUserId?e.seen:null,new:!(e.sender_id===this.currentUserId||e.seen&&e.seen[this.currentUserId])})}},formatTimestamp:function(e,t){var r=Object(l.a)(e,new Date)?"HH:mm":"DD/MM/YY",o=Object(l.b)(t,r);return"HH:mm"===r?"Today, ".concat(o):o},fetchMessages:function(e){var t=this;return Object(m.a)(regeneratorRuntime.mark((function r(){var o,n,c,m,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o=e.room,n=e.options,c=void 0===n?{}:n,t.$emit("show-demo-options",!1),c.reset&&(t.resetMessages(),t.roomId=o.roomId),!t.endMessages||t.startMessages){r.next=5;break}return r.abrupt("return",t.messagesLoaded=!0);case 5:return m=t.messagesRef(o.roomId),l=m.orderBy("timestamp","desc").limit(t.messagesPerPage),t.startMessages&&(l=l.startAfter(t.startMessages)),t.selectedRoom=o.roomId,r.next=11,l.get().then((function(e){if(t.selectedRoom===o.roomId){(e.empty||e.docs.length<t.messagesPerPage)&&setTimeout((function(){return t.messagesLoaded=!0}),0),t.startMessages&&(t.endMessages=t.startMessages),t.startMessages=e.docs[e.docs.length-1];var r=m.orderBy("timestamp");t.startMessages&&(r=r.startAt(t.startMessages)),t.endMessages&&(r=r.endAt(t.endMessages)),c.reset&&(t.messages=[]);var n=[];e.forEach((function(e){var r=t.formatMessage(o,e);n.push(r)})),t.messages=[].concat(Object(d.a)(n.reverse()),Object(d.a)(t.messages)),t.listeners.forEach((function(e){return e()})),t.listeners=[],setTimeout((function(){var e=r.onSnapshot((function(e){t.listenMessages(e,o)}));t.listeners.push(e)}),700)}}));case 11:case"end":return r.stop()}}),r)})))()},listenMessages:function(e,t){var r=this;e.forEach((function(e){var o=r.formatMessage(t,e),n=r.messages.findIndex((function(t){return t._id===e.id}));-1===n?r.messages=r.messages.concat([o]):(r.messages[n]=o,r.messages=Object(d.a)(r.messages)),r.markMessagesSeen(t,e)}))},markMessagesSeen:function(e,t){t.data().sender_id===this.currentUserId||t.data().seen&&t.data().seen[this.currentUserId]||this.messagesRef(e.roomId).doc(t.id).update(Object(c.a)({},"seen.".concat(this.currentUserId),new Date))},formatMessage:function(e,t){var r=e.users.find((function(e){return t.data().sender_id===e._id})),o=t.data().timestamp,n=R(R({},t.data()),{senderId:t.data().sender_id,_id:t.id,seconds:o.seconds,timestamp:Object(l.b)(o,"HH:mm"),date:Object(l.b)(o,"DD MMMM YYYY"),username:r?r.username:null,distributed:!0});return t.data().replyMessage&&(n.replyMessage=R(R({},t.data().replyMessage),{senderId:t.data().replyMessage.sender_id})),n},sendMessage:function(e){var t=this;return Object(m.a)(regeneratorRuntime.mark((function r(){var content,o,n,c,d,m,l,f;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return content=e.content,o=e.roomId,n=e.files,c=e.replyMessage,d={sender_id:t.currentUserId,content:content,timestamp:new Date},n&&(d.files=t.formattedFiles(n)),c&&(d.replyMessage={_id:c._id,content:c.content,sender_id:c.senderId},c.files&&(d.replyMessage.files=c.files)),r.next=6,t.messagesRef(o).add(d);case 6:if(m=r.sent,l=m.id,!n){r.next=16;break}f=0;case 10:if(!(f<n.length)){r.next=16;break}return r.next=13,t.uploadFile({file:n[f],messageId:l,roomId:o});case 13:f++,r.next=10;break;case 16:t.roomsRef.doc(o).update({lastUpdated:new Date});case 17:case"end":return r.stop()}}),r)})))()},editMessage:function(e){var t=this;return Object(m.a)(regeneratorRuntime.mark((function r(){var o,n,c,d,m,l,f;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=e.messageId,n=e.newContent,c=e.roomId,d=e.files,(m={edited:new Date}).content=n,m.files=d?t.formattedFiles(d):t.deleteDbField,r.next=6,t.messagesRef(c).doc(o).update(m);case 6:if(!d){r.next=15;break}l=0;case 8:if(!(l<d.length)){r.next=15;break}if(null===(f=d[l])||void 0===f||!f.blob){r.next=12;break}return r.next=12,t.uploadFile({file:d[l],messageId:o,roomId:c});case 12:l++,r.next=8;break;case 15:case"end":return r.stop()}}),r)})))()},deleteMessage:function(e){var t=this;return Object(m.a)(regeneratorRuntime.mark((function r(){var o,n,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o=e.message,n=e.roomId,window.confirm("Are you sure?")){r.next=4;break}return r.abrupt("return");case 4:return r.next=6,t.messagesRef(n).doc(o._id).update({deleted:new Date});case 6:(c=o.files)&&c.forEach((function(e){t.filesRef.child(t.currentUserId).child(o._id).child("".concat(e.name,".").concat(e.extension||e.type)).delete()}));case 8:case"end":return r.stop()}}),r)})))()},uploadFile:function(e){var t=this;return Object(m.a)(regeneratorRuntime.mark((function r(){var o,n,c,d,l,f;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:o=e.file,n=e.messageId,c=e.roomId,"svg"!==(d=o.extension||o.type)&&"pdf"!==d||(d=o.type),l=t.filesRef.child(t.currentUserId).child(n).child("".concat(o.name,".").concat(d)),(f=l.put(o.blob,{contentType:d})).on("state_changed",(function(e){var progress=Math.round(e.bytesTransferred/e.totalBytes*100);t.updateFileProgress(n,o.localUrl,progress)}),(function(e){}),Object(m.a)(regeneratorRuntime.mark((function e(){var r,d,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.snapshot.ref.getDownloadURL();case 2:return r=e.sent,e.next=5,t.messagesRef(c).doc(n).get();case 5:return d=e.sent,(m=d.data().files).forEach((function(e){e.url===o.localUrl&&(e.url=r)})),e.next=10,t.messagesRef(c).doc(n).update({files:m});case 10:case"end":return e.stop()}}),e)}))));case 6:case"end":return r.stop()}}),r)})))()},updateFileProgress:function(e,t,progress){var r=this.messages.find((function(t){return t._id===e}));r&&r.files&&(r.files.find((function(e){return e.url===t})).progress=progress,this.messages=Object(d.a)(this.messages))},formattedFiles:function(e){var t=[];return e.forEach((function(e){var r={name:e.name,size:e.size,type:e.type,extension:e.extension||e.type,url:e.url||e.localUrl};e.audio&&(r.audio=!0,r.duration=e.duration),t.push(r)})),t},openFile:function(e){var t=e.file;window.open(t.file.url,"_blank")},openUserTag:function(e){var t=this;return Object(m.a)(regeneratorRuntime.mark((function r(){var o,n,c,d,m;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if((o=e.user)._id!==t.currentUserId){r.next=3;break}return r.abrupt("return");case 3:if(t.rooms.forEach((function(e){if(2===e.users.length){var r=e.users[0]._id,c=e.users[1]._id;r!==o._id&&r!==t.currentUserId||c!==o._id&&c!==t.currentUserId||(n=e.roomId)}})),!n){r.next=6;break}return r.abrupt("return",t.roomId=n);case 6:return r.next=8,t.roomsRef.where("users","==",[t.currentUserId,o._id]).get();case 8:if((c=r.sent).empty){r.next=11;break}return r.abrupt("return",t.loadRoom(c));case 11:return r.next=13,t.roomsRef.where("users","==",[o._id,t.currentUserId]).get();case 13:if((d=r.sent).empty){r.next=16;break}return r.abrupt("return",t.loadRoom(d));case 16:return r.next=18,t.roomsRef.add({users:[o._id,t.currentUserId],lastUpdated:new Date});case 18:m=r.sent,t.roomId=m.id,t.fetchRooms();case 21:case"end":return r.stop()}}),r)})))()},loadRoom:function(e){var t=this;return Object(m.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e.forEach(function(){var e=Object(m.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.loadingRooms){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.roomsRef.doc(r.id).update({lastUpdated:new Date});case 4:t.roomId=r.id,t.fetchRooms();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return r.stop()}}),r)})))()}},Object(c.a)(o,"sendMessageReaction",(function(e){var t=this;return Object(m.a)(regeneratorRuntime.mark((function r(){var o,n,d,m,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=e.reaction,n=e.remove,d=e.messageId,m=e.roomId,l=n?t.$fireModule.firestore.FieldValue.arrayRemove(t.currentUserId):t.$fireModule.firestore.FieldValue.arrayUnion(t.currentUserId),r.next=4,t.messagesRef(m).doc(d).update(Object(c.a)({},"reactions.".concat(o.unicode),l));case 4:case"end":return r.stop()}}),r)})))()})),Object(c.a)(o,"typingMessage",(function(e){var t=e.message,r=e.roomId;if(r){if((null==t?void 0:t.length)>1)return this.typingMessageCache=t;if(1===(null==t?void 0:t.length)&&this.typingMessageCache)return this.typingMessageCache=t;this.typingMessageCache=t;var o=t?this.$fireModule.firestore.FieldValue.arrayUnion(this.currentUserId):this.$fireModule.firestore.FieldValue.arrayRemove(this.currentUserId);this.roomsRef.doc(r).update({typingUsers:o})}})),Object(c.a)(o,"listenRooms",(function(e){var t=this;return Object(m.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:o=e.onSnapshot((function(e){e.forEach((function(e){var r=t.rooms.find((function(t){return t.roomId===e.id}));r&&(r.typingUsers=e.data().typingUsers,r.index=e.data().lastUpdated.seconds)}))})),t.roomsListeners.push(o);case 2:case"end":return r.stop()}}),r)})))()})),o)},M=x,w=(r(1092),r(1094),r(1096),r(54)),component=Object(w.a)(M,(function(){var e=this,t=e._self._c;return e.pageLoaded?t("div",{staticClass:"window-container",class:{"window-mobile":e.isDevice}},[t("client-only",[t("div",{staticStyle:{"pointer-events":"none",position:"absolute","z-index":"12",width:"100%",top:"60px",height:"calc(100% - 60px)"},style:!this.isDevice&&this.roomsListOpened?{width:"calc(100% - 300px)",left:"300px"}:{},attrs:{id:"picker-container"}},[e.emojiOpened?t("div",{staticStyle:{width:"100%",height:"100%",position:"relative"}},[t("div",{staticClass:"vac-emoji-picker vac-picker-reaction",staticStyle:{"pointer-events":"auto"},style:e.isDevice?{height:"400px",top:"0",right:"0",left:"0",bottom:"0",display:"initial",margin:"auto"}:{height:"".concat(e.emojiPickerHeight,"px"),top:"".concat(e.emojiPickerTop,"px"),right:"".concat(e.emojiPickerRight),left:"".concat(e.emojiPickerLeft),display:"initial"}},[e.emojiOpened?t("PickerFast",{directives:[{def:n.a,name:"click-outside",rawName:"v-click-outside",value:e.onClickOutside,expression:"onClickOutside"}],ref:"chat",staticClass:"emoji-picker",staticStyle:{"z-index":"99999"},attrs:{data:e.emojiIndex,title:"Pick your emoji...",emoji:"point_down"},on:{select:function(t){e.addEmojiNow(t)}}}):e._e()],1)]):e._e()]),e._v(" "),t("vue-chat",{staticStyle:{position:"relative"},attrs:{height:e.screenHeight,"show-emojis":!1,"show-reaction-emojis":!0,"username-options":{minUsers:2,currentUser:!1},theme:e.theme,styles:e.styles,"current-user-id":e.currentUserId,"room-id":e.roomId,rooms:e.loadedRooms,"loading-rooms":e.loadingRooms,messages:e.messages,"messages-loaded":e.messagesLoaded,"user-tags-enabled":!1,"rooms-loaded":e.roomsLoaded,"room-message":e.roomMessage,"templates-text":e.templatesText,"show-add-room":!1,"accepted-files":"image/png, image/jpeg, image/gif, application/pdf","message-actions":e.messageActions,"room-info-enabled":!0,"scroll-distance":60},on:{"room-info":e.openEventPage,"fetch-more-rooms":e.fetchMoreRooms,"fetch-messages":e.fetchMessages,"send-message":e.sendMessage,"edit-message":e.editMessage,"delete-message":e.deleteMessage,"open-file":e.openFile,"open-user-tag":e.openUserTag,"send-message-reaction":e.sendMessageReaction,"typing-message":e.typingMessage,"toggle-rooms-list":function(t){e.roomsListOpened=t.opened,e.$emit("show-demo-options",t.opened)}},scopedSlots:e._u([{key:"emoji-picker",fn:function(r){var o=r.addEmoji;return[t("div",{staticClass:"vac-emoji-wrapper"},[t("div",[t("div",{staticClass:"vac-svg-button vac-emoji-reaction",on:{click:function(t){e.openEmoji(t,o)}}},[t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",width:"24",height:"24",viewBox:"0 0 24 24"}},[t("path",{attrs:{id:"vac-icon-emoji",d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"}})])])])])]}}],null,!1,1508614227)})],1)],1):e._e()}),[],!1,null,"315829bb",null);t.default=component.exports},1092:function(e,t,r){"use strict";r(1001)},1093:function(e,t,r){var o=r(22)(!1);o.push([e.i,".vac-svg-button{max-height:30px;display:flex;cursor:pointer;transition:all .2s}.vac-svg-button:hover{transform:scale(1.1);opacity:.7}.vac-emoji-wrapper{position:relative;float:right;right:25px;padding:5px}.vac-emoji-wrapper .vac-emoji-reaction svg{height:22px;width:22px}.vac-emoji-picker{position:absolute;z-index:9999;bottom:32px;right:10px;width:340px;padding-top:4px}.vac-emoji-picker::-webkit-scrollbar{display:none}.vac-emoji-picker.vac-picker-reaction{top:auto;right:auto}.vac-emoji-picker .emoji-picker{height:100%;width:100%;--emoji-size:1.2rem;--background:var(--chat-emoji-bg-color);--emoji-padding:0.4rem;--border-color:var(--chat-sidemenu-border-color-search);--button-hover-background:var(--chat-sidemenu-bg-color-hover);--button-active-background:var(--chat-sidemenu-bg-color-hover)}",""]),e.exports=o},1094:function(e,t,r){"use strict";r(1002)},1095:function(e,t,r){var o=r(22)(!1);o.push([e.i,"@media screen and (max-width:500px){#room-footer{position:fixed;width:100%;bottom:0}.vac-input{font-size:16px!important}#messages-list{padding-bottom:50px}}",""]),e.exports=o},1096:function(e,t,r){"use strict";r(1003)},1097:function(e,t,r){var o=r(22)(!1);o.push([e.i,".window-container[data-v-315829bb]{width:100%}.window-mobile form[data-v-315829bb]{padding:0 10px 10px}form[data-v-315829bb]{padding-bottom:20px}input[data-v-315829bb]{padding:5px;width:140px;height:21px;border-radius:4px;border:1px solid #d2d6da;outline:none;font-size:14px;vertical-align:middle}input[data-v-315829bb]::-moz-placeholder{color:#9ca6af}input[data-v-315829bb]::placeholder{color:#9ca6af}button[data-v-315829bb]{background:#1976d2;color:#fff;outline:none;cursor:pointer;border-radius:4px;padding:8px 12px;margin-left:10px;border:none;font-size:14px;transition:.3s;vertical-align:middle}button[data-v-315829bb]:hover{opacity:.8}button[data-v-315829bb]:active{opacity:.6}button[data-v-315829bb]:disabled{cursor:auto;background:#c6c9cc;opacity:.6}.button-cancel[data-v-315829bb]{color:#a8aeb3;background:none;margin-left:5px}select[data-v-315829bb]{vertical-align:middle;height:33px;width:152px;font-size:13px;margin:0!important}",""]),e.exports=o},619:function(e,t,r){var o=r(21),n=r(126),c=r(48),d=r(276),m=r(74),l=o(d),f=o("".slice),h=Math.ceil,v=function(e){return function(t,r,o){var d,v,R=c(m(t)),x=n(r),M=R.length,w=void 0===o?" ":c(o);return x<=M||""==w?R:((v=l(w,h((d=x-M)/w.length))).length>d&&(v=f(v,0,d)),e?R+v:v+R)}};e.exports={start:v(!1),end:v(!0)}},620:function(e,t,r){var o=r(101);e.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(o)},626:function(e,t,r){e.exports=r.p+"img/default_profile.18de71f.png"},640:function(e,t,r){"use strict";var o=r(6),n=r(619).start;o({target:"String",proto:!0,forced:r(620)},{padStart:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},704:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return c}));r(36),r(640);var o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(e){var r=e.seconds?new Date(1e3*e.seconds):e;if("HH:mm"===t)return"".concat(n(r.getHours(),2),":").concat(n(r.getMinutes(),2));if("DD MMMM YYYY"===t){var o={month:"long",year:"numeric",day:"numeric"};return"".concat(new Intl.DateTimeFormat("en-GB",o).format(r))}if("DD/MM/YY"===t){var c={month:"numeric",year:"numeric",day:"numeric"};return"".concat(new Intl.DateTimeFormat("en-GB",c).format(r))}if("DD MMMM, HH:mm"===t){var d={month:"long",day:"numeric"};return"".concat(new Intl.DateTimeFormat("en-GB",d).format(r),", ").concat(n(r.getHours(),2),":").concat(n(r.getMinutes(),2))}return r}},n=function(e,t){return String(e).padStart(t,"0")},c=function(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}}}]);