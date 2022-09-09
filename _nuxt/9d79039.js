(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{1024:function(e,t,r){"use strict";r.r(t);r(8),r(46),r(17),r(14),r(16),r(22),r(15),r(23);var n=r(1),o=r(81),c=r(21);r(54),r(75),r(44),r(34),r(170),r(88),r(39),r(36),r(211),r(55),r(61);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={name:"FileSelector",data:function(){return{imgFailed:!1,FULL_IMAGE:{maxDimension:1280,quality:.9},THUMB_IMAGE:{maxDimension:640,quality:.7},userRepo:{images:[]}}},created:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getUserRepo();case 2:case"end":return t.stop()}}),t)})))()},computed:{user:function(){return this.$nuxt.$store.state.authUser},eventImagesReversedLength:function(){return Object(o.a)(Array(this.userRepo.images.length).keys()).slice().reverse()},isDeletingImage:function(){if(!this.userRepo)return[];var e=this.userRepo.images.map((function(e){return!1}));return e},isUploadingImage:function(){if(!this.userRepo)return[];var e=this.userRepo.images.map((function(e){return!1}));return e}},methods:{selectImage:function(img){var image={src:img.imageUrl,alt:""};this.$emit("select-file",image)},getUserRepo:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var r,n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$nuxt.$fire.firestore.collection("repoImages").doc(e.user.uid).get();case 2:(r=t.sent).exists&&(n=r.id,data=r.data(),e.userRepo=m(m({},data),{},{id:n}));case 4:case"end":return t.stop()}}),t)})))()},deleteImage:function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.isDeletingImage[e]=!0,n=t.$nuxt.$fire.storage.refFromURL(t.userRepo.images[e].imageUrl).delete(),o=t.$nuxt.$fire.storage.refFromURL(t.userRepo.images[e].teaserImageUrl).delete(),r.abrupt("return",Promise.all([n,o]).then(Object(c.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.userRepo.images[e].imageUrl="",t.userRepo.images[e].teaserImageUrl="",r.next=4,t.updateImageFirestore();case 4:return r.abrupt("return",null);case 5:case"end":return r.stop()}}),r)})))).catch(function(){var r=Object(c.a)(regeneratorRuntime.mark((function r(n){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(console.error("Error deleting image",n),"storage/object-not-found"!==n.code){r.next=6;break}return t.userRepo.images[e].imageUrl="",t.userRepo.images[e].teaserImageUrl="",r.next=6,t.updateImageFirestore();case 6:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()).finally((function(){t.isDeletingImage[e]=!1})));case 4:case"end":return r.stop()}}),r)})))()},launchImageFile:function(e){var t="imageFile".concat(e);this.$refs[t][0].click()},launchImageFilePicker:function(){this.$refs.imageFilePicker.click()},uploadImageFile:function(e,t){var r=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var n,o,l,m,f,h,d,v,w;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.length){t.next=2;break}return t.abrupt("return");case 2:if((n=e[0]).type.match("image.*")){t.next=6;break}return alert("Please upload an image."),t.abrupt("return");case 6:return o={contentType:n.type},l=new Promise((function(e,t){r.generateVariation(n,r.FULL_IMAGE.maxDimension,r.FULL_IMAGE.quality,e)})),m=new Promise((function(e,t){r.generateVariation(n,r.THUMB_IMAGE.maxDimension,r.THUMB_IMAGE.quality,e)})),t.next=11,Promise.all([l,m]);case 11:return f=t.sent,h=Date.now().toString(),d=r.uploadSingleImageFile(h+"_"+n.name,f[0],o),v=h+"_"+n.name.substring(0,n.name.lastIndexOf("."))+"_thumb."+n.name.substring(n.name.lastIndexOf(".")+1),w=r.uploadSingleImageFile(v,f[1],o),t.next=18,Promise.all([d,w]).then(function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(t){var image;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return image={imageUrl:t[0],teaserImageUrl:t[1]},r.userRepo.images.push(image),e.next=4,r.updateImageFirestore();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 18:case"end":return t.stop()}}),t)})))()},uploadSingleImageFile:function(e,t,r){return this.$nuxt.$fire.storage.ref("repoImages/".concat(this.user.uid,"/").concat(e)).put(t,r).then((function(e){return e.ref.getDownloadURL().then((function(e){return e}))})).catch((function(e){console.error("Error uploading image",e)}))},generateVariation:function(e,t,r,n){var o=this,c=new FileReader;c.onload=function(e){return c=e.target.result,(image=new Image).src=c,void(image.onload=function(){o.getScaledCanvas(image,t).toBlob(n,"image/jpeg",r)});var c,image},c.readAsDataURL(e)},getScaledCanvas:function(image,e){var t=document.createElement("canvas");return image.width>e||image.height>e?image.width>image.height?(t.width=e,t.height=e*image.height/image.width):(t.width=e*image.width/image.height,t.height=e):(t.width=image.width,t.height=image.height),t.getContext("2d").drawImage(image,0,0,image.width,image.height,0,0,t.width,t.height),t},addImage:function(){this.userRepo.images.push({imageUrl:"",teaserImageUrl:""})},removeImage:function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(confirm("Are you sure?")){r.next=3;break}return r.abrupt("return");case 3:if(""===t.userRepo.images[e].imageUrl){r.next=11;break}return r.next=6,t.deleteImage(e);case 6:return t.userRepo.images.splice(e,1),r.next=9,t.updateImageFirestore();case 9:r.next=12;break;case 11:t.userRepo.images.splice(e,1);case 12:case"end":return r.stop()}}),r)})))()},updateImageFirestore:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,data={images:e.userRepo.images},t.next=4,e.$nuxt.$fire.firestore.collection("repoImages").doc(e.user.uid).set(data).then((function(){e.success="Successfully updated!!",setTimeout((function(){e.success=null}),2e3)}));case 4:t.next=10;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0),e.error="Could not set user information";case 10:case"end":return t.stop()}}),t,null,[[0,6]])})))()}}},h=f,d=(r(946),r(65)),component=Object(d.a)(h,(function(){var e=this;return(0,e._self._c)("FormulateForm",{staticClass:"d-flex justify-center flex-column",staticStyle:{width:"100%"},attrs:{schema:e.schema},model:{value:e.values,callback:function(t){e.values=t},expression:"values"}})}),[],!1,null,"1dbcdfbc",null);t.default=component.exports},818:function(e,t,r){var content=r(947);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(26).default)("9a5c6ce6",content,!0,{sourceMap:!1})},946:function(e,t,r){"use strict";r(818)},947:function(e,t,r){var n=r(25)(!1);n.push([e.i,".selectable[data-v-1dbcdfbc]{cursor:pointer}",""]),e.exports=n}}]);