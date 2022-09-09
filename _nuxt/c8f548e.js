(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1022:function(e,t,r){"use strict";r.r(t);var n=r(120),o=r(538),c=r(121),l=r(247),m=(r(17),r(14),r(16),r(22),r(15),r(23),r(1)),f=r(81),h=r(21);r(54),r(8),r(46),r(75),r(44),r(34),r(170),r(88),r(39),r(36),r(211),r(55),r(61);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(m.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var x={name:"FileSelector",data:function(){return{imgFailed:!1,FULL_IMAGE:{maxDimension:1280,quality:.9},THUMB_IMAGE:{maxDimension:640,quality:.7},userRepo:{images:[]}}},created:function(){var e=this;return Object(h.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getUserRepo();case 2:case"end":return t.stop()}}),t)})))()},computed:{user:function(){return this.$nuxt.$store.state.authUser},eventImagesReversedLength:function(){return Object(f.a)(Array(this.userRepo.images.length).keys()).slice().reverse()},isDeletingImage:function(){if(!this.userRepo)return[];var e=this.userRepo.images.map((function(e){return!1}));return e},isUploadingImage:function(){if(!this.userRepo)return[];var e=this.userRepo.images.map((function(e){return!1}));return e}},methods:{selectImage:function(img){var image={src:img.imageUrl,alt:""};this.$emit("select-file",image)},getUserRepo:function(){var e=this;return Object(h.a)(regeneratorRuntime.mark((function t(){var r,n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$nuxt.$fire.firestore.collection("repoImages").doc(e.user.uid).get();case 2:(r=t.sent).exists&&(n=r.id,data=r.data(),e.userRepo=v(v({},data),{},{id:n}));case 4:case"end":return t.stop()}}),t)})))()},deleteImage:function(e){var t=this;return Object(h.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.isDeletingImage[e]=!0,n=t.$nuxt.$fire.storage.refFromURL(t.userRepo.images[e].imageUrl).delete(),o=t.$nuxt.$fire.storage.refFromURL(t.userRepo.images[e].teaserImageUrl).delete(),r.abrupt("return",Promise.all([n,o]).then(Object(h.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.userRepo.images[e].imageUrl="",t.userRepo.images[e].teaserImageUrl="",r.next=4,t.updateImageFirestore();case 4:return r.abrupt("return",null);case 5:case"end":return r.stop()}}),r)})))).catch(function(){var r=Object(h.a)(regeneratorRuntime.mark((function r(n){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(console.error("Error deleting image",n),"storage/object-not-found"!==n.code){r.next=6;break}return t.userRepo.images[e].imageUrl="",t.userRepo.images[e].teaserImageUrl="",r.next=6,t.updateImageFirestore();case 6:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()).finally((function(){t.isDeletingImage[e]=!1})));case 4:case"end":return r.stop()}}),r)})))()},launchImageFile:function(e){var t="imageFile".concat(e);this.$refs[t][0].click()},launchImageFilePicker:function(){this.$refs.imageFilePicker.click()},uploadImageFile:function(e,t){var r=this;return Object(h.a)(regeneratorRuntime.mark((function t(){var n,o,c,l,m,f,d,v,x;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.length){t.next=2;break}return t.abrupt("return");case 2:if((n=e[0]).type.match("image.*")){t.next=6;break}return alert("Please upload an image."),t.abrupt("return");case 6:return o={contentType:n.type},c=new Promise((function(e,t){r.generateVariation(n,r.FULL_IMAGE.maxDimension,r.FULL_IMAGE.quality,e)})),l=new Promise((function(e,t){r.generateVariation(n,r.THUMB_IMAGE.maxDimension,r.THUMB_IMAGE.quality,e)})),t.next=11,Promise.all([c,l]);case 11:return m=t.sent,f=Date.now().toString(),d=r.uploadSingleImageFile(f+"_"+n.name,m[0],o),v=f+"_"+n.name.substring(0,n.name.lastIndexOf("."))+"_thumb."+n.name.substring(n.name.lastIndexOf(".")+1),x=r.uploadSingleImageFile(v,m[1],o),t.next=18,Promise.all([d,x]).then(function(){var e=Object(h.a)(regeneratorRuntime.mark((function e(t){var image;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return image={imageUrl:t[0],teaserImageUrl:t[1]},r.userRepo.images.push(image),e.next=4,r.updateImageFirestore();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 18:case"end":return t.stop()}}),t)})))()},uploadSingleImageFile:function(e,t,r){return this.$nuxt.$fire.storage.ref("repoImages/".concat(this.user.uid,"/").concat(e)).put(t,r).then((function(e){return e.ref.getDownloadURL().then((function(e){return e}))})).catch((function(e){console.error("Error uploading image",e)}))},generateVariation:function(e,t,r,n){var o=this,c=new FileReader;c.onload=function(e){return c=e.target.result,(image=new Image).src=c,void(image.onload=function(){o.getScaledCanvas(image,t).toBlob(n,"image/jpeg",r)});var c,image},c.readAsDataURL(e)},getScaledCanvas:function(image,e){var t=document.createElement("canvas");return image.width>e||image.height>e?image.width>image.height?(t.width=e,t.height=e*image.height/image.width):(t.width=e*image.width/image.height,t.height=e):(t.width=image.width,t.height=image.height),t.getContext("2d").drawImage(image,0,0,image.width,image.height,0,0,t.width,t.height),t},addImage:function(){this.userRepo.images.push({imageUrl:"",teaserImageUrl:""})},removeImage:function(e){var t=this;return Object(h.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(confirm("Are you sure?")){r.next=3;break}return r.abrupt("return");case 3:if(""===t.userRepo.images[e].imageUrl){r.next=11;break}return r.next=6,t.deleteImage(e);case 6:return t.userRepo.images.splice(e,1),r.next=9,t.updateImageFirestore();case 9:r.next=12;break;case 11:t.userRepo.images.splice(e,1);case 12:case"end":return r.stop()}}),r)})))()},updateImageFirestore:function(){var e=this;return Object(h.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,data={images:e.userRepo.images},t.next=4,e.$nuxt.$fire.firestore.collection("repoImages").doc(e.user.uid).set(data).then((function(){e.success="Successfully updated!!",setTimeout((function(){e.success=null}),2e3)}));case 4:t.next=10;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0),e.error="Could not set user information";case 10:case"end":return t.stop()}}),t,null,[[0,6]])})))()}}},w=x,R=(r(942),r(65)),component=Object(R.a)(w,(function(){var e=this,t=e._self._c;return t(o.a,{staticStyle:{"margin-top":"20px",width:"100%",height:"fit-content"}},[t("div",{staticStyle:{width:"100%",height:"250px",overflow:"scroll"}},[t("div",{staticClass:"d-flex flex-row flex-wrap justify-center align-center"},e._l(e.userRepo.images,(function(img,i){return t("div",{key:i,staticStyle:{width:"100px",height:"100px",position:"relative",overflow:"visible",margin:"6px"}},[t(c.a,{staticClass:"close-button",staticStyle:{position:"absolute",top:"-12px",left:"-12px","z-index":"10"},attrs:{role:"button"},on:{click:function(t){return e.removeImage(i)}}},[e._v("mdi-close")]),e._v(" "),t(l.a,{staticClass:"selectable",staticStyle:{border:"thin solid rgba(0,0,0,0.12)",height:"100px",width:"100px","object-fit":"cover"},attrs:{alt:"img-"+i,src:e.imgFailed?"/img/image-not-found.png":img.teaserImageUrl},on:{error:function(t){e.imgFailed=!0},click:function(){e.selectImage(img)}}})],1)})),0)]),e._v(" "),t("input",{ref:"imageFilePicker",staticClass:"hidden",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/png, image/jpeg"},on:{change:function(t){return t.preventDefault(),e.uploadImageFile(t.target.files,e.userRepo.images.length)}}}),e._v(" "),t(n.a,{staticClass:"mt-5",attrs:{block:""},on:{click:function(){e.launchImageFilePicker()}}},[t(c.a,[e._v("mdi-plus-circle")]),e._v("\n    Add More Photo\n  ")],1)],1)}),[],!1,null,"04c76237",null);t.default=component.exports},816:function(e,t,r){var content=r(943);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(26).default)("374df52c",content,!0,{sourceMap:!1})},942:function(e,t,r){"use strict";r(816)},943:function(e,t,r){var n=r(25)(!1);n.push([e.i,".selectable[data-v-04c76237]{cursor:pointer}",""]),e.exports=n}}]);