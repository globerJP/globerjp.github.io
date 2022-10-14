(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1084:function(e,t,r){"use strict";r.r(t);r(15),r(24),r(25);var n=r(2),o=r(84),c=r(19),d=(r(62),r(58),r(56),r(8),r(44),r(46),r(14),r(112),r(36),r(17),r(16),r(93),r(76),r(213),r(37),r(704));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={props:{currentUserId:{type:String,default:""},isAdmin:{type:Boolean||String,default:!1},screenHeight:{type:String,required:!0},isDevice:{type:Boolean,required:!0}},emits:["show-demo-options"],data:function(){return{roomsListOpened:!1,remainingUsersIdNameList:[],pageLoaded:!1,theme:"light",usersRef:null,roomsRef:null,messagesRef:null,filesRef:null,dbTimestamp:null,deleteDbField:null,roomsPerPage:15,rooms:[],roomId:"",startRooms:null,endRooms:null,roomsLoaded:!1,loadingRooms:!0,allUsers:[],allUsersDictionary:{},allUsersIdNameList:[],loadingLastMessageByRoom:0,roomsLoadedCount:!1,selectedRoom:null,messagesPerPage:20,messages:[],messagesLoaded:!1,roomMessage:"",startMessages:null,endMessages:null,roomsListeners:[],listeners:[],typingMessageCache:"",disableForm:!1,addNewRoom:null,addRoomUserIdList:[],inviteRoomId:null,invitedUserIdList:[],removeRoomId:null,removeUserId:"",removeUsers:[],messageActions:[{name:"replyMessage",title:"Reply"},{name:"editMessage",title:"Edit Message",onlyMe:!0},{name:"deleteMessage",title:"Delete Message",onlyMe:!this.isAdmin}],styles:{message:{background:"#fff",backgroundMe:"#cce7f2",color:"#0a0a0a",colorStarted:"#9ca6af",backgroundDeleted:"#dadfe2",backgroundSelected:"#c2dcf2",colorDeleted:"#757e85",colorUsername:"#9ca6af",colorTimestamp:"#828c94",backgroundDate:"#e5effa",colorDate:"#505a62",backgroundSystem:"#e5effa",colorSystem:"#505a62",backgroundMedia:"rgba(0, 0, 0, 0.15)",backgroundReply:"rgba(0, 0, 0, 0.08)",colorReplyUsername:"#0a0a0a",colorReply:"#6e6e6e",colorTag:"#0d579c",backgroundImage:"#ddd",colorNewMessages:"#1976d2",backgroundScrollCounter:"#0696c7",colorScrollCounter:"#fff",backgroundReaction:"#eee",borderStyleReaction:"1px solid #eee",backgroundReactionHover:"#fff",borderStyleReactionHover:"1px solid #ddd",colorReactionCounter:"#0a0a0a",backgroundReactionMe:"#cfecf5",borderStyleReactionMe:"1px solid #3b98b8",backgroundReactionHoverMe:"#cfecf5",borderStyleReactionHoverMe:"1px solid #3b98b8",colorReactionCounterMe:"#0b59b3",backgroundAudioRecord:"#eb4034",backgroundAudioLine:"rgba(0, 0, 0, 0.15)",backgroundAudioProgress:"#455247",backgroundAudioProgressSelector:"#455247",colorFileExtension:"#757e85"},container:{borderRadius:"5px"}},templatesText:[{tag:"hello",text:"Hi there, nice you meet you."},{tag:"thanks",text:"Thank you so much."}]}},computed:{user:function(){return this.$store.state.authUser},loadedRooms:function(){return this.rooms.slice(0,this.roomsLoadedCount)}},mounted:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$fire.firestore,n=e.$fire.storage.ref(),e.usersRef=r.collection("chatUsers"),e.roomsRef=r.collection("chatRooms"),e.messagesRef=function(t){return e.roomsRef.doc(t).collection("chatMessages")},e.filesRef=n.child("chatFiles"),e.dbTimestamp=e.$fireModule.firestore.FieldValue.serverTimestamp(),e.deleteDbField=e.$fireModule.firestore.FieldValue.delete(),t.next=10,e.fetchRooms();case 10:e.pageLoaded=!0,setTimeout((function(){e.addCss()}),100);case 12:case"end":return t.stop()}}),t)})))()},created:function(){return Object(c.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.e(141).then(r.bind(null,1307));case 2:t=e.sent,(0,t.register)();case 5:case"end":return e.stop()}}),e)})))()},methods:{openEventPage:function(e){e.eventId&&this.$router.push({path:"/event/".concat(e.eventId)})},addCss:function(){this.isDevice&&(this.$refs.chatWindow.shadowRoot.getElementById("room-footer").setAttribute("style","position:fixed; width: 100%; bottom: 0;"),this.$refs.chatWindow.shadowRoot.getElementById("messages-list").setAttribute("style","padding-bottom: 50px;"),this.$refs.chatWindow.shadowRoot.querySelectorAll(".vac-input")[0].setAttribute("style","font-size:16px !important"))},resetRooms:function(){this.loadingRooms=!0,this.loadingLastMessageByRoom=0,this.roomsLoadedCount=0,this.rooms=[],this.roomsLoaded=!0,this.startRooms=null,this.endRooms=null,this.roomsListeners.forEach((function(e){return e()})),this.roomsListeners=[],this.resetMessages()},resetMessages:function(){this.messages=[],this.messagesLoaded=!1,this.startMessages=null,this.endMessages=null,this.listeners.forEach((function(e){return e()})),this.listeners=[]},fetchRooms:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.resetRooms(),t.next=3,e.fetchMoreRooms();case 3:case"end":return t.stop()}}),t)})))()},fetchMoreRooms:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var n,c,d,l,f,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.endRooms||e.startRooms){t.next=2;break}return t.abrupt("return",e.roomsLoaded=!0);case 2:return n=e.roomsRef.where("users","array-contains",e.currentUserId).orderBy("lastUpdated","desc").limit(e.roomsPerPage),e.startRooms&&(n=n.startAfter(e.startRooms)),t.next=6,n.get();case 6:return c=t.sent,e.roomsLoaded=c.empty||c.size<e.roomsPerPage,e.startRooms&&(e.endRooms=e.startRooms),e.startRooms=c.docs[c.docs.length-1],d=[],c.forEach((function(t){t.data().users.forEach((function(t){e.allUsers.find((function(e){return(null==e?void 0:e._id)===t}))||-1!==d.indexOf(t)||d.push(t)}))})),l=[],d.forEach((function(t){var r=e.usersRef.doc(t).get().then((function(e){return e.data()}));l.push(r)})),t.t0=[],t.t1=Object(o.a)(e.allUsers),t.t2=o.a,t.next=19,Promise.all(l);case 19:t.t3=t.sent,t.t4=(0,t.t2)(t.t3),e.allUsers=t.t0.concat.call(t.t0,t.t1,t.t4),f={},c.forEach((function(t){f[t.id]=m(m({},t.data()),{},{users:[]}),t.data().users.forEach((function(r){var n=e.allUsers.find((function(e){return(null==e?void 0:e._id)===r}));n&&f[t.id].users.push(n)}))})),h=[],Object.keys(f).forEach((function(t){var n=f[t],o=n.users.filter((function(t){return t._id!==e.currentUserId}));n.roomName=n.roomName||o.map((function(e){return e.username})).join(", ")||"Myself";var c=n.roomAvatarUrl?n.roomAvatarUrl:r(626);h.push(m(m({},n),{},{roomId:t,avatar:c,index:n.lastUpdated.seconds,lastMessage:{content:"Room created",timestamp:e.formatTimestamp(new Date(n.lastUpdated.seconds),n.lastUpdated)}}))})),e.rooms=e.rooms.concat(h),h.map((function(t){return e.listenLastMessage(t)})),e.rooms.length||(e.loadingRooms=!1,e.roomsLoadedCount=0),e.listenRooms(n);case 30:case"end":return t.stop()}}),t)})))()},listenLastMessage:function(e){var t=this,r=this.messagesRef(e.roomId).orderBy("timestamp","desc").limit(1).onSnapshot((function(r){r.forEach((function(r){var n=t.formatLastMessage(r.data()),c=t.rooms.findIndex((function(t){return e.roomId===t.roomId}));t.rooms[c].lastMessage=n,t.rooms=Object(o.a)(t.rooms)})),t.loadingLastMessageByRoom<t.rooms.length&&(t.loadingLastMessageByRoom++,t.loadingLastMessageByRoom===t.rooms.length&&(t.loadingRooms=!1,t.roomsLoadedCount=t.rooms.length))}));this.roomsListeners.push(r)},formatLastMessage:function(e){var t;if(e.timestamp){var content=e.content;if(null!==(t=e.files)&&void 0!==t&&t.length){var r=e.files[0];content="".concat(r.name,".").concat(r.extension||r.type)}return m(m({},e),{content:content,timestamp:this.formatTimestamp(new Date(1e3*e.timestamp.seconds),e.timestamp),distributed:!0,seen:e.sender_id===this.currentUserId?e.seen:null,new:!(e.sender_id===this.currentUserId||e.seen&&e.seen[this.currentUserId])})}},formatTimestamp:function(e,t){var r=Object(d.a)(e,new Date)?"HH:mm":"DD/MM/YY",n=Object(d.b)(t,r);return"HH:mm"===r?"Today, ".concat(n):n},fetchMessages:function(e){var t=this,r=e.room,n=e.options,o=void 0===n?{}:n;if(this.$emit("show-demo-options",!1),o.reset&&(this.resetMessages(),this.roomId=r.roomId),this.endMessages&&!this.startMessages)return this.messagesLoaded=!0;var c=this.messagesRef(r.roomId),d=c.orderBy("timestamp","desc").limit(this.messagesPerPage);this.startMessages&&(d=d.startAfter(this.startMessages)),this.selectedRoom=r.roomId,d.get().then((function(e){if(t.selectedRoom===r.roomId){(e.empty||e.docs.length<t.messagesPerPage)&&setTimeout((function(){return t.messagesLoaded=!0}),0),t.startMessages&&(t.endMessages=t.startMessages),t.startMessages=e.docs[e.docs.length-1];var n=c.orderBy("timestamp");t.startMessages&&(n=n.startAt(t.startMessages)),t.endMessages&&(n=n.endAt(t.endMessages)),o.reset&&(t.messages=[]),e.forEach((function(e){var n=t.formatMessage(r,e);t.messages.unshift(n)}));var d=n.onSnapshot((function(e){t.listenMessages(e,r)}));t.listeners.push(d)}}))},listenMessages:function(e,t){var r=this;e.forEach((function(e){var n=r.formatMessage(t,e),c=r.messages.findIndex((function(t){return t._id===e.id}));-1===c?r.messages=r.messages.concat([n]):(r.messages[c]=n,r.messages=Object(o.a)(r.messages)),r.markMessagesSeen(t,e)}))},markMessagesSeen:function(e,t){t.data().sender_id===this.currentUserId||t.data().seen&&t.data().seen[this.currentUserId]||this.messagesRef(e.roomId).doc(t.id).update(Object(n.a)({},"seen.".concat(this.currentUserId),new Date))},formatMessage:function(e,t){var r=e.users.find((function(e){return t.data().sender_id===e._id})),n=t.data().timestamp,o=m(m({},t.data()),{senderId:t.data().sender_id,_id:t.id,seconds:n.seconds,timestamp:Object(d.b)(n,"HH:mm"),date:Object(d.b)(n,"DD MMMM YYYY"),username:r?r.username:null,distributed:!0});return t.data().replyMessage&&(o.replyMessage=m(m({},t.data().replyMessage),{senderId:t.data().replyMessage.sender_id})),o},sendMessage:function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function r(){var content,n,o,c,d,l,m,f;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return content=e.content,n=e.roomId,o=e.files,c=e.replyMessage,d={sender_id:t.currentUserId,content:content,timestamp:new Date},o&&(d.files=t.formattedFiles(o)),c&&(d.replyMessage={_id:c._id,content:c.content,sender_id:c.senderId},c.files&&(d.replyMessage.files=c.files)),r.next=6,t.messagesRef(n).add(d);case 6:if(l=r.sent,m=l.id,!o){r.next=16;break}f=0;case 10:if(!(f<o.length)){r.next=16;break}return r.next=13,t.uploadFile({file:o[f],messageId:m,roomId:n});case 13:f++,r.next=10;break;case 16:t.roomsRef.doc(n).update({lastUpdated:new Date});case 17:case"end":return r.stop()}}),r)})))()},editMessage:function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function r(){var n,o,c,d,l,m,f;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.messageId,o=e.newContent,c=e.roomId,d=e.files,(l={edited:new Date}).content=o,l.files=d?t.formattedFiles(d):t.deleteDbField,r.next=6,t.messagesRef(c).doc(n).update(l);case 6:if(!d){r.next=15;break}m=0;case 8:if(!(m<d.length)){r.next=15;break}if(null===(f=d[m])||void 0===f||!f.blob){r.next=12;break}return r.next=12,t.uploadFile({file:d[m],messageId:n,roomId:c});case 12:m++,r.next=8;break;case 15:case"end":return r.stop()}}),r)})))()},deleteMessage:function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function r(){var n,o,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=e.message,o=e.roomId,window.confirm("Are you sure?")){r.next=4;break}return r.abrupt("return");case 4:return r.next=6,t.messagesRef(o).doc(n._id).update({deleted:new Date});case 6:(c=n.files)&&c.forEach((function(e){t.filesRef.child(t.currentUserId).child(n._id).child("".concat(e.name,".").concat(e.extension||e.type)).delete()}));case 8:case"end":return r.stop()}}),r)})))()},uploadFile:function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function r(){var n,o,d,l,m,f;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n=e.file,o=e.messageId,d=e.roomId,"svg"!==(l=n.extension||n.type)&&"pdf"!==l||(l=n.type),m=t.filesRef.child(t.currentUserId).child(o).child("".concat(n.name,".").concat(l)),(f=m.put(n.blob,{contentType:l})).on("state_changed",(function(e){var progress=Math.round(e.bytesTransferred/e.totalBytes*100);t.updateFileProgress(o,n.localUrl,progress)}),(function(e){}),Object(c.a)(regeneratorRuntime.mark((function e(){var r,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.snapshot.ref.getDownloadURL();case 2:return r=e.sent,e.next=5,t.messagesRef(d).doc(o).get();case 5:return c=e.sent,(l=c.data().files).forEach((function(e){e.url===n.localUrl&&(e.url=r)})),e.next=10,t.messagesRef(d).doc(o).update({files:l});case 10:case"end":return e.stop()}}),e)}))));case 6:case"end":return r.stop()}}),r)})))()},updateFileProgress:function(e,t,progress){var r=this.messages.find((function(t){return t._id===e}));r&&r.files&&(r.files.find((function(e){return e.url===t})).progress=progress,this.messages=Object(o.a)(this.messages))},formattedFiles:function(e){var t=[];return e.forEach((function(e){var r={name:e.name,size:e.size,type:e.type,extension:e.extension||e.type,url:e.url||e.localUrl};e.audio&&(r.audio=!0,r.duration=e.duration),t.push(r)})),t},openFile:function(e){var t=e.file;window.open(t.file.url,"_blank")},openUserTag:function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function r(){var n,o,c,d,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if((n=e.user)._id!==t.currentUserId){r.next=3;break}return r.abrupt("return");case 3:if(t.rooms.forEach((function(e){if(2===e.users.length){var r=e.users[0]._id,c=e.users[1]._id;r!==n._id&&r!==t.currentUserId||c!==n._id&&c!==t.currentUserId||(o=e.roomId)}})),!o){r.next=6;break}return r.abrupt("return",t.roomId=o);case 6:return r.next=8,t.roomsRef.where("users","==",[t.currentUserId,n._id]).get();case 8:if((c=r.sent).empty){r.next=11;break}return r.abrupt("return",t.loadRoom(c));case 11:return r.next=13,t.roomsRef.where("users","==",[n._id,t.currentUserId]).get();case 13:if((d=r.sent).empty){r.next=16;break}return r.abrupt("return",t.loadRoom(d));case 16:return r.next=18,t.roomsRef.add({users:[n._id,t.currentUserId],lastUpdated:new Date});case 18:l=r.sent,t.roomId=l.id,t.fetchRooms();case 21:case"end":return r.stop()}}),r)})))()},loadRoom:function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e.forEach(function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.loadingRooms){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.roomsRef.doc(r.id).update({lastUpdated:new Date});case 4:t.roomId=r.id,t.fetchRooms();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return r.stop()}}),r)})))()},sendMessageReaction:function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function r(){var o,c,d,l,m;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=e.reaction,c=e.remove,d=e.messageId,l=e.roomId,m=c?t.$fireModule.firestore.FieldValue.arrayRemove(t.currentUserId):t.$fireModule.firestore.FieldValue.arrayUnion(t.currentUserId),r.next=4,t.messagesRef(l).doc(d).update(Object(n.a)({},"reactions.".concat(o.unicode),m));case 4:case"end":return r.stop()}}),r)})))()},typingMessage:function(e){var t=e.message,r=e.roomId;if(r){if((null==t?void 0:t.length)>1)return this.typingMessageCache=t;if(1===(null==t?void 0:t.length)&&this.typingMessageCache)return this.typingMessageCache=t;this.typingMessageCache=t;var n=t?this.$fireModule.firestore.FieldValue.arrayUnion(this.currentUserId):this.$fireModule.firestore.FieldValue.arrayRemove(this.currentUserId);this.roomsRef.doc(r).update({typingUsers:n})}},listenRooms:function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n=e.onSnapshot((function(e){e.forEach((function(e){var r=t.rooms.find((function(t){return t.roomId===e.id}));r&&(r.typingUsers=e.data().typingUsers,r.index=e.data().lastUpdated.seconds)}))})),t.roomsListeners.push(n);case 2:case"end":return r.stop()}}),r)})))()}}},h=f,v=(r(1090),r(54)),component=Object(v.a)(h,(function(){var e=this,t=e._self._c;return e.pageLoaded?t("div",{staticClass:"window-container",class:{"window-mobile":e.isDevice}},[t("client-only",[t("vue-advanced-chat",{ref:"chatWindow",attrs:{height:e.screenHeight,"room-info-enabled":"true",theme:e.theme,"username-options":JSON.stringify({minUsers:2,currentUser:!1}),styles:JSON.stringify(e.styles),"current-user-id":e.currentUserId,"room-id":e.roomId,rooms:JSON.stringify(e.loadedRooms),"loading-rooms":e.loadingRooms,"rooms-loaded":e.roomsLoaded,messages:JSON.stringify(e.messages),"messages-loaded":e.messagesLoaded,"room-message":e.roomMessage,"message-actions":JSON.stringify(e.messageActions),"templates-text":JSON.stringify(e.templatesText),"show-add-room":"false","user-tags-enabled":"false","accepted-files":"image/png, image/jpeg, image/gif, application/pdf"},on:{"room-info":function(t){return e.openEventPage(t.detail[0])},"fetch-more-rooms":e.fetchMoreRooms,"fetch-messages":function(t){return e.fetchMessages(t.detail[0])},"send-message":function(t){return e.sendMessage(t.detail[0])},"edit-message":function(t){return e.editMessage(t.detail[0])},"delete-message":function(t){return e.deleteMessage(t.detail[0])},"open-file":function(t){return e.openFile(t.detail[0])},"send-message-reaction":function(t){return e.sendMessageReaction(t.detail[0])},"typing-message":function(t){return e.typingMessage(t.detail[0])},"toggle-rooms-list":function(t){return e.$emit("show-demo-options",t.detail[0].opened)}}})],1)],1):e._e()}),[],!1,null,"54f4cf3c",null);t.default=component.exports},1090:function(e,t,r){"use strict";r(999)},1091:function(e,t,r){var n=r(22)(!1);n.push([e.i,".window-container[data-v-54f4cf3c]{width:100%}.window-mobile form[data-v-54f4cf3c]{padding:0 10px 10px}form[data-v-54f4cf3c]{padding-bottom:20px}input[data-v-54f4cf3c]{padding:5px;width:140px;height:21px;border-radius:4px;border:1px solid #d2d6da;outline:none;font-size:14px;vertical-align:middle}input[data-v-54f4cf3c]::-moz-placeholder{color:#9ca6af}input[data-v-54f4cf3c]::placeholder{color:#9ca6af}button[data-v-54f4cf3c]{background:#1976d2;color:#fff;outline:none;cursor:pointer;border-radius:4px;padding:8px 12px;margin-left:10px;border:none;font-size:14px;transition:.3s;vertical-align:middle}button[data-v-54f4cf3c]:hover{opacity:.8}button[data-v-54f4cf3c]:active{opacity:.6}button[data-v-54f4cf3c]:disabled{cursor:auto;background:#c6c9cc;opacity:.6}.button-cancel[data-v-54f4cf3c]{color:#a8aeb3;background:none;margin-left:5px}select[data-v-54f4cf3c]{vertical-align:middle;height:33px;width:152px;font-size:13px;margin:0!important}",""]),e.exports=n},618:function(e,t,r){var n=r(21),o=r(126),c=r(48),d=r(276),l=r(74),m=n(d),f=n("".slice),h=Math.ceil,v=function(e){return function(t,r,n){var d,v,R=c(l(t)),M=o(r),y=R.length,x=void 0===n?" ":c(n);return M<=y||""==x?R:((v=m(x,h((d=M-y)/x.length))).length>d&&(v=f(v,0,d)),e?R+v:v+R)}};e.exports={start:v(!1),end:v(!0)}},619:function(e,t,r){var n=r(101);e.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(n)},626:function(e,t,r){e.exports=r.p+"img/default_profile.18de71f.png"},640:function(e,t,r){"use strict";var n=r(6),o=r(618).start;n({target:"String",proto:!0,forced:r(619)},{padStart:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},704:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return c}));r(36),r(640);var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(e){var r=e.seconds?new Date(1e3*e.seconds):e;if("HH:mm"===t)return"".concat(o(r.getHours(),2),":").concat(o(r.getMinutes(),2));if("DD MMMM YYYY"===t){var n={month:"long",year:"numeric",day:"numeric"};return"".concat(new Intl.DateTimeFormat("en-GB",n).format(r))}if("DD/MM/YY"===t){var c={month:"numeric",year:"numeric",day:"numeric"};return"".concat(new Intl.DateTimeFormat("en-GB",c).format(r))}if("DD MMMM, HH:mm"===t){var d={month:"long",day:"numeric"};return"".concat(new Intl.DateTimeFormat("en-GB",d).format(r),", ").concat(o(r.getHours(),2),":").concat(o(r.getMinutes(),2))}return r}},o=function(e,t){return String(e).padStart(t,"0")},c=function(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}},999:function(e,t,r){var content=r(1091);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(23).default)("0713cbd1",content,!0,{sourceMap:!1})}}]);