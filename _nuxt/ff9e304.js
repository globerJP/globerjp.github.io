(window.webpackJsonp=window.webpackJsonp||[]).push([[6,23],{563:function(e,t,n){var content=n(592);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("22af2ab5",content,!0,{sourceMap:!1})},564:function(e,t,n){var content=n(594);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("922b36be",content,!0,{sourceMap:!1})},571:function(e,t,n){"use strict";n.r(t);var r=n(119),o=n(358),l=n(535),c=n(120),d=n(246),m=n(357),f=(n(18),n(16),n(17),n(22),n(15),n(23),n(1)),h=n(81),v=n(21);n(55),n(7),n(46),n(75),n(43),n(34),n(169),n(87),n(39),n(36),n(211),n(54),n(61);function x(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function y(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(t){Object(f.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var I={name:"FileSelector",data:function(){return{imgFailed:!1,FULL_IMAGE:{maxDimension:1280,quality:.9},THUMB_IMAGE:{maxDimension:640,quality:.7},userRepo:{images:[]}}},created:function(){var e=this;return Object(v.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getUserRepo();case 2:case"end":return t.stop()}}),t)})))()},computed:{user:function(){return this.$nuxt.$store.state.authUser},eventImagesReversedLength:function(){return Object(h.a)(Array(this.userRepo.images.length).keys()).slice().reverse()},isDeletingImage:function(){if(!this.userRepo)return[];var e=this.userRepo.images.map((function(e){return!1}));return e},isUploadingImage:function(){if(!this.userRepo)return[];var e=this.userRepo.images.map((function(e){return!1}));return e}},methods:{selectImage:function(img){var image={src:img.imageUrl,alt:""};this.$emit("select-file",image)},getUserRepo:function(){var e=this;return Object(v.a)(regeneratorRuntime.mark((function t(){var n,r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$nuxt.$fire.firestore.collection("repoImages").doc(e.user.uid).get();case 2:(n=t.sent).exists&&(r=n.id,data=n.data(),e.userRepo=y(y({},data),{},{id:r}));case 4:case"end":return t.stop()}}),t)})))()},deleteImage:function(e){var t=this;return Object(v.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.isDeletingImage[e]=!0,r=t.$nuxt.$fire.storage.refFromURL(t.userRepo.images[e].imageUrl).delete(),o=t.$nuxt.$fire.storage.refFromURL(t.userRepo.images[e].teaserImageUrl).delete(),n.abrupt("return",Promise.all([r,o]).then(Object(v.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.userRepo.images[e].imageUrl="",t.userRepo.images[e].teaserImageUrl="",n.next=4,t.updateImageFirestore();case 4:return n.abrupt("return",null);case 5:case"end":return n.stop()}}),n)})))).catch(function(){var n=Object(v.a)(regeneratorRuntime.mark((function n(r){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(console.error("Error deleting image",r),"storage/object-not-found"!==r.code){n.next=6;break}return t.userRepo.images[e].imageUrl="",t.userRepo.images[e].teaserImageUrl="",n.next=6,t.updateImageFirestore();case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()).finally((function(){t.isDeletingImage[e]=!1})));case 4:case"end":return n.stop()}}),n)})))()},launchImageFile:function(e){var t="imageFile".concat(e);this.$refs[t][0].click()},launchImageFilePicker:function(){this.$refs.imageFilePicker.click()},uploadImageFile:function(e,t){var n=this;return Object(v.a)(regeneratorRuntime.mark((function t(){var r,o,l,c,d,m,f,h,x;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.length){t.next=2;break}return t.abrupt("return");case 2:if((r=e[0]).type.match("image.*")){t.next=6;break}return alert("Please upload an image."),t.abrupt("return");case 6:return o={contentType:r.type},l=new Promise((function(e,t){n.generateVariation(r,n.FULL_IMAGE.maxDimension,n.FULL_IMAGE.quality,e)})),c=new Promise((function(e,t){n.generateVariation(r,n.THUMB_IMAGE.maxDimension,n.THUMB_IMAGE.quality,e)})),t.next=11,Promise.all([l,c]);case 11:return d=t.sent,m=Date.now().toString(),f=n.uploadSingleImageFile(m+"_"+r.name,d[0],o),h=m+"_"+r.name.substring(0,r.name.lastIndexOf("."))+"_thumb."+r.name.substring(r.name.lastIndexOf(".")+1),x=n.uploadSingleImageFile(h,d[1],o),t.next=18,Promise.all([f,x]).then(function(){var e=Object(v.a)(regeneratorRuntime.mark((function e(t){var image;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return image={imageUrl:t[0],teaserImageUrl:t[1]},n.userRepo.images.push(image),e.next=4,n.updateImageFirestore();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 18:case"end":return t.stop()}}),t)})))()},uploadSingleImageFile:function(e,t,n){return this.$nuxt.$fire.storage.ref("repoImages/".concat(this.user.uid,"/").concat(e)).put(t,n).then((function(e){return e.ref.getDownloadURL().then((function(e){return e}))})).catch((function(e){console.error("Error uploading image",e)}))},generateVariation:function(e,t,n,r){var o=this,l=new FileReader;l.onload=function(e){return l=e.target.result,(image=new Image).src=l,void(image.onload=function(){o.getScaledCanvas(image,t).toBlob(r,"image/jpeg",n)});var l,image},l.readAsDataURL(e)},getScaledCanvas:function(image,e){var t=document.createElement("canvas");return image.width>e||image.height>e?image.width>image.height?(t.width=e,t.height=e*image.height/image.width):(t.width=e*image.width/image.height,t.height=e):(t.width=image.width,t.height=image.height),t.getContext("2d").drawImage(image,0,0,image.width,image.height,0,0,t.width,t.height),t},addImage:function(){this.userRepo.images.push({imageUrl:"",teaserImageUrl:""})},removeImage:function(e){var t=this;return Object(v.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(confirm("Are you sure?")){n.next=3;break}return n.abrupt("return");case 3:if(""===t.userRepo.images[e].imageUrl){n.next=11;break}return n.next=6,t.deleteImage(e);case 6:return t.userRepo.images.splice(e,1),n.next=9,t.updateImageFirestore();case 9:n.next=12;break;case 11:t.userRepo.images.splice(e,1);case 12:case"end":return n.stop()}}),n)})))()},updateImageFirestore:function(){var e=this;return Object(v.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,data={images:e.userRepo.images},t.next=4,e.$nuxt.$fire.firestore.collection("repoImages").doc(e.user.uid).set(data).then((function(){e.success="Successfully updated!!",setTimeout((function(){e.success=null}),2e3)}));case 4:t.next=10;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0),e.error="Could not set user information";case 10:case"end":return t.stop()}}),t,null,[[0,6]])})))()}}},w=I,_=(n(591),n(65)),k=Object(_.a)(w,(function(){var e=this,t=e._self._c;return t(l.a,{staticStyle:{"margin-top":"20px"}},[t(m.a,{staticClass:"d-flex flex-row flex-wrap"},e._l(e.userRepo.images,(function(img,i){return t("div",{key:i,staticStyle:{position:"relative",overflow:"visible"}},[t(c.a,{staticClass:"close-button",staticStyle:{position:"absolute",top:"-5px","z-index":"5"},attrs:{role:"button"},on:{click:function(t){return e.removeImage(i)}}},[e._v("mdi-close")]),e._v(" "),t(d.a,{staticClass:"ma-2 selectable",staticStyle:{},attrs:{alt:"img-"+i,src:e.imgFailed?"/img/image-not-found.png":img.teaserImageUrl,"max-height":"100","max-width":"100"},on:{error:function(t){e.imgFailed=!0},click:function(){e.selectImage(img)}}})],1)})),0),e._v(" "),t("input",{ref:"imageFilePicker",staticClass:"hidden",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/png, image/jpeg"},on:{change:function(t){return t.preventDefault(),e.uploadImageFile(t.target.files,e.userRepo.images.length)}}}),e._v(" "),t(m.a,[t(o.a,[t(r.a,{staticClass:"mt-5",attrs:{block:""},on:{click:function(){e.launchImageFilePicker()}}},[t(c.a,[e._v("mdi-plus-circle")]),e._v("\n        Add More Photo\n      ")],1)],1)],1)],1)}),[],!1,null,"31d3edde",null).exports,R=n(265),U={components:{TiptapVuetify:R.t},props:{value:{type:String,default:""},changed:{type:String,default:""}},watch:{content:function(e){this.$emit("input",e)},value:function(e){this.content=e||this.content}},mounted:function(){this.content=this.value||this.content},data:function(){return{html:"",extensions:[R.g,R.p,R.q,R.r,R.s,R.a,R.k,R.v,R.o,R.j,R.l,R.c,R.m,[R.i,{options:{imageSources:[{component:k,name:"File Selector"}]}}],[R.f,{options:{levels:[1,2,3]}}],R.b,R.d,R.h,R.n,R.e],content:"",content2:'\n      <h1>Most basic use</h1>\n      <p>\n        You can use the buttons above to add different text decorations. For example:\n        <strong>\n          Bold.\n        </strong>\n        <i>\n          Italics.\n        </i>\n      </p>\n      <pre><code>You can even type some code.</code></pre>\n\n      <blockquote>\n        <p>Blockquote is awesome!</p>\n      </blockquote>\n      <p>Try adding a table like the one below:</p>\n      <table>\n        <tr>\n          <th colspan="2" data-colwidth="100,0">Wide header</th>\n        </tr>\n        <tr>\n          <td>One</td>\n          <td>Two</td>\n        </tr>\n        <tr>\n          <td>Three</td>\n          <td>Four</td>\n        </tr>\n      </table>\n      <p>List items:</p>\n      <ol>\n        <li>\n          <p>Item 1</p>\n        </li>\n        <li>\n          <p>Item 2</p>\n        </li>\n      </ol>\n    '}}},j=(n(593),Object(_.a)(U,(function(){var e=this,t=e._self._c;return t("div",[t("tiptap-vuetify",{staticClass:"tiptap_vuetify",attrs:{extensions:e.extensions},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}})],1)}),[],!1,null,null,null));t.default=j.exports},591:function(e,t,n){"use strict";n(563)},592:function(e,t,n){var r=n(25)(!1);r.push([e.i,".selectable[data-v-31d3edde]{cursor:pointer}",""]),e.exports=r},593:function(e,t,n){"use strict";n(564)},594:function(e,t,n){var r=n(25)(!1);r.push([e.i,".v-tab:nth-child(3){display:none}.tiptap_vuetify img{-o-object-fit:contain;object-fit:contain;max-width:100%;max-height:350px;display:block;margin-left:auto;margin-right:auto}",""]),e.exports=r},595:function(e,t,n){var content=n(632);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("06aab242",content,!0,{sourceMap:!1})},613:function(e,t,n){"use strict";n.r(t);var r=n(119),o=n(110),l=n(359),c=n(358),d=n(246),m=n(357),f=n(612),h=n(171),v=n(650),x=(n(16),n(77),n(21)),y=(n(61),n(91),n(92),n(75),n(34),n(76),n(7),n(43),n(46),n(66),n(264),n(87),n(169),n(39),n(36),n(754)),I=n(571),w=n(637),_={name:"BlogForm",components:{Editor:I.default,CodeEditor:w.default},props:{value:{type:Object,default:function(){}}},data:function(){return{codeEditorBody:"",categories:[{value:"immigration",text:"Immigration Related"},{value:"job_hunting",text:"Job Hunting"},{value:"housing",text:"Housing"},{value:"parttime_jobs",text:"Part-time Jobs"},{value:"scholarship",text:"Scholarship"},{value:"dl_banking",text:"Daily Life: Banking"},{value:"dl_garbage",text:"Daily Life: Garbage and recycling"},{value:"dl_phone",text:"Daily Life: Phone and Post Office"},{value:"dl_transportation",text:"Daily Life: Transportation/Bicycles"},{value:"dl_insurance",text:"Daily Life: Insurance and National Pension"},{value:"dl_medical",text:"Daily Life: Medical Related"},{value:"l_food",text:"Leisure: Food"},{value:"l_traveling",text:"Leisure: Traveling"},{value:"l_extra_curricular_activities",text:"Leisure: Extra Curricular Activities"},{value:"miscellaneous",text:"Other..."}],blog:{},tags:"",status:"",originalId:"",blogMeta:{},isUploadingImage:!1,isDeletingImage:!1,FULL_IMAGE:{maxDimension:1280,quality:.9},THUMB_IMAGE:{maxDimension:640,quality:.7}}},watch:{value:{handler:function(e){this.blog=Object(y.cloneDeep)(e),this.tags=this.blog.tags?this.blog.tags.join():""},immediate:!0},blog:{handler:function(e){this.codeEditorBody=e.body},deep:!0},codeEditorBody:{handler:function(e){this.blog.body=e}}},mounted:function(){this.originalId=this.blog.id},computed:{user:function(){return this.$store.state.authUser}},methods:{submitForm:function(){var e=this;return Object(x.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.blog.id){t.next=4;break}return alert("Please enter the blog ID."),e.$refs.id.focus(),t.abrupt("return");case 4:if(e.originalId===e.blog.id){t.next=12;break}return t.next=7,e.checkExists(e.blog.id);case 7:if(!t.sent){t.next=12;break}return alert("Blog ID already exists. Please enter a unique blog ID."),e.$refs.id.focus(),t.abrupt("return");case 12:return t.next=14,e.updateValue();case 14:case"end":return t.stop()}}),t)})))()},updateValue:function(){var e=this;return Object(x.a)(regeneratorRuntime.mark((function t(){var n,r,o,l,c,d,m,f,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.status="Saving...",n=Date.now(),r=Object(y.cloneDeep)(e.blog),o=r.id,delete r.id,r.created||(r.created=n),r.changed=n,r.tags=""!==e.tags.trim()?e.tags.split(",").map((function(e){return e.toLowerCase().trim()})):[],t.prev=8,l=[],c=e.$fire.firestore.collection("blogs").doc(o).set(r),d={title:r.title,body:r.teaser||"",tags:r.tags,category:r.category,imageUrl:r.teaserImageUrl||null,imageAlt:r.imageAlt||"",created:r.created,changed:r.changed,published:r.published||!1},m=e.$fire.firestore.collection("blogTeasers").doc(o).set(d),l.push(c,m),e.originalId&&e.originalId!==o&&(f=e.$fire.firestore.collection("blogs").doc(e.originalId).delete(),h=e.$fire.firestore.collection("blogTeasers").doc(e.originalId).delete(),l.push(f,h)),t.next=17,Promise.all(l);case 17:t.next=23;break;case 19:t.prev=19,t.t0=t.catch(8),alert("Error saving blog or teaser"),console.error(t.t0);case 23:r.id=o,e.$emit("input",Object(y.cloneDeep)(r)),e.status="",e.originalId!==o&&(e.originalId=o,e.$router.replace({name:"blog-id-edit",params:{id:r.id}}));case 27:case"end":return t.stop()}}),t,null,[[8,19]])})))()},confirmDelete:function(){var e=this;if(window.confirm("Are you sure you want to delete this blog?")&&this.originalId){this.blog.imageUrl&&this.deleteImage();var t=this.$fire.firestore.collection("blogs").doc(this.originalId).delete(),n=this.$fire.firestore.collection("teasers").doc(this.originalId).delete();Promise.all([t,n]).then((function(){return alert("Blog deleted!"),e.$router.push({path:"/admin"}),null})).catch((function(e){alert("Unable to delete blog!"),console.error(e)}))}},updateId:function(){this.blog.id=this.slugify(this.blog.title)},checkExists:function(){var e=this;return Object(x.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$fire.firestore.collection("blogs").doc(e.blog.id).get();case 2:return n=t.sent,t.abrupt("return",n.exists);case 4:case"end":return t.stop()}}),t)})))()},slugify:function(e){var a="àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;",p=new RegExp(a.split("").join("|"),"g");return e.toString().toLowerCase().replace(/\s+/g,"-").replace(p,(function(e){return"aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------".charAt(a.indexOf(e))})).replace(/&/g,"-and-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},launchImageFile:function(){this.$refs.imageFile.click()},uploadImageFile:function(e){var t=this;return Object(x.a)(regeneratorRuntime.mark((function n(){var r,o,l,c,d,m,f,h,v;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.length){n.next=2;break}return n.abrupt("return");case 2:if((r=e[0]).type.match("image.*")){n.next=6;break}return alert("Please upload an image."),n.abrupt("return");case 6:return(o=r.name.split(".")).pop(),t.blog.imageAlt=o.join(),l={contentType:r.type},c=new Promise((function(e,n){t.generateVariation(r,t.FULL_IMAGE.maxDimension,t.FULL_IMAGE.quality,e)})),d=new Promise((function(e,n){t.generateVariation(r,t.THUMB_IMAGE.maxDimension,t.THUMB_IMAGE.quality,e)})),n.next=14,Promise.all([c,d]);case 14:return m=n.sent,f=t.uploadSingleImageFile(r.name,m[0],l),h=r.name.substring(0,r.name.lastIndexOf("."))+"_thumb."+r.name.substring(r.name.lastIndexOf(".")+1),v=t.uploadSingleImageFile(h,m[1],l),t.isUploadingImage=!0,n.next=21,Promise.all([f,v]).then((function(e){return t.blog.imageUrl=e[0],t.blog.teaserImageUrl=e[1],null})).finally((function(){t.updateValue(),t.isUploadingImage=!1}));case 21:case"end":return n.stop()}}),n)})))()},uploadSingleImageFile:function(e,t,n){return this.$fire.storage.ref("blogImages/".concat(this.user.uid,"/").concat(e)).put(t,n).then((function(e){return e.ref.getDownloadURL().then((function(e){return e}))})).catch((function(e){console.error("Error uploading image",e)}))},generateVariation:function(e,t,n,r){var o=this,l=new FileReader;l.onload=function(e){return l=e.target.result,(image=new Image).src=l,void(image.onload=function(){o.getScaledCanvas(image,t).toBlob(r,"image/jpeg",n)});var l,image},l.readAsDataURL(e)},getScaledCanvas:function(image,e){var t=document.createElement("canvas");return image.width>e||image.height>e?image.width>image.height?(t.width=e,t.height=e*image.height/image.width):(t.width=e*image.width/image.height,t.height=e):(t.width=image.width,t.height=image.height),t.getContext("2d").drawImage(image,0,0,image.width,image.height,0,0,t.width,t.height),t},deleteImage:function(){var e=this;this.isDeletingImage=!0;var t=this.$fire.storage.refFromURL(this.blog.imageUrl).delete(),n=this.$fire.storage.refFromURL(this.blog.teaserImageUrl).delete();return Promise.all([t,n]).then((function(){return e.blog.imageAlt="",e.blog.imageUrl="",e.blog.teaserImageUrl="",null})).catch((function(t){console.error("Error deleting image",t),"storage/object-not-found"===t.code&&(e.blog.imageAlt="",e.blog.imageUrl="",e.blog.teaserImageUrl="")})).finally((function(){e.updateValue(),e.isDeletingImage=!1}))}}},k=n(65),component=Object(k.a)(_,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"d-flex justify-center pa-2"},[t(m.a,{staticStyle:{"max-width":"100%"}},[t(c.a,{staticClass:"col-lg-8",attrs:{cols:"12"}},[t(m.a,[t(c.a,[t(m.a,{staticClass:"d-flex flex-column justify-center align-center"},[t(c.a,{staticClass:"mb-4"},[t(h.a,{attrs:{id:"title",type:"text",placeholder:"Title"},on:{input:e.updateId},model:{value:e.blog.title,callback:function(t){e.$set(e.blog,"title",t)},expression:"blog.title"}})],1),e._v(" "),t(c.a,[t("editor",{model:{value:e.blog.body,callback:function(t){e.$set(e.blog,"body",t)},expression:"blog.body"}})],1),e._v(" "),t(c.a,{staticStyle:{display:"none"}},[t("code-editor",{model:{value:e.codeEditorBody,callback:function(t){e.codeEditorBody=t},expression:"codeEditorBody"}})],1)],1)],1)],1)],1),e._v(" "),t(c.a,{staticClass:"mt-lg-4 col-lg-4",attrs:{cols:"12"}},[t(o.a,{staticClass:"pa-5"},[t("div",[t(h.a,{ref:"id",attrs:{id:"id",type:"text",placeholder:"ID"},model:{value:e.blog.id,callback:function(t){e.$set(e.blog,"id",t)},expression:"blog.id"}})],1),e._v(" "),t("div",[t(l.a,{staticClass:"mr-2 leading-tight",attrs:{label:"Published",type:"checkbox"},model:{value:e.blog.published,callback:function(t){e.$set(e.blog,"published",t)},expression:"blog.published"}})],1),e._v(" "),t("div",{staticClass:"mb-4"},[t("label",[e._v("Image")]),e._v(" "),e.blog.imageUrl?t("div",[t(d.a,{staticClass:"object-cover inline-block",staticStyle:{height:"300px",width:"100%"},attrs:{src:e.blog.imageUrl,contain:"",alt:""}}),e._v(" "),e.blog.imageUrl?t("button",{staticClass:"bg-red-500 border-red-300 text-white",attrs:{disabled:e.isDeletingImage,type:"button"},on:{click:e.deleteImage}},[e._v("\n              "+e._s(e.isDeletingImage?"Deleting...":"Delete")+"\n            ")]):e._e()],1):e._e(),e._v(" "),e.blog.imageUrl?e._e():t("button",{attrs:{disabled:e.isUploadingImage,type:"button"},on:{click:e.launchImageFile}},[e._v("\n            "+e._s(e.isUploadingImage?"Uploading...":"Upload")+"\n          ")]),e._v(" "),t("input",{ref:"imageFile",staticClass:"hidden",staticStyle:{"max-width":"100%"},attrs:{type:"file",accept:"image/png, image/jpeg"},on:{change:function(t){return t.preventDefault(),e.uploadImageFile(t.target.files)}}})]),e._v(" "),t("div",{staticClass:"mb-4"},[t(v.a,{attrs:{id:"imageCaption",placeholder:"Image caption if any...",rows:"2"},model:{value:e.blog.imageCaption,callback:function(t){e.$set(e.blog,"imageCaption",t)},expression:"blog.imageCaption"}})],1),e._v(" "),t("div",[t(f.a,{attrs:{items:e.categories,label:"Category","item-text":"text","item-value":"value",dense:""},model:{value:e.blog.category,callback:function(t){e.$set(e.blog,"category",t)},expression:"blog.category"}})],1),e._v(" "),t("div",{staticClass:"mb-4"},[t(h.a,{attrs:{id:"tags",type:"text",placeholder:"Tags seperated by comma"},model:{value:e.tags,callback:function(t){e.tags=t},expression:"tags"}})],1),e._v(" "),t("div",{staticClass:"mb-4"},[t(v.a,{attrs:{id:"lead",placeholder:"Blog Subtitle if any...",rows:"1"},model:{value:e.blog.lead,callback:function(t){e.$set(e.blog,"lead",t)},expression:"blog.lead"}})],1),e._v(" "),t("div",{staticClass:"mb-4"},[t(v.a,{attrs:{id:"teaser",placeholder:"Blog Teaser if any...",rows:"1"},model:{value:e.blog.teaser,callback:function(t){e.$set(e.blog,"teaser",t)},expression:"blog.teaser"}})],1),e._v(" "),t("div",{staticClass:"mb-4"},[t(v.a,{attrs:{id:"description",placeholder:"Blog Description if any...",rows:"2"},model:{value:e.blog.description,callback:function(t){e.$set(e.blog,"description",t)},expression:"blog.description"}})],1),e._v(" "),t("div",{staticClass:"mb-4 clearfix"},[t(m.a,{staticClass:"d-flex"},[t(c.a,{staticClass:"col-lg-6",attrs:{cols:"12"}},[t(r.a,{staticClass:"blue float-lg-left",attrs:{disabled:!!e.status,type:"button"},on:{click:e.submitForm}},[e._v("\n                "+e._s(e.status?e.status:"Save")+"\n              ")])],1),e._v(" "),t(c.a,{staticClass:"col-lg-6",attrs:{cols:"12"}},[t(r.a,{staticClass:"error text-white float-lg-right",attrs:{type:"button"},on:{click:e.confirmDelete}},[e._v("\n                Delete\n              ")])],1)],1)],1)])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Editor:n(571).default,CodeEditor:n(637).default})},631:function(e,t,n){"use strict";n(595)},632:function(e,t,n){var r=n(25)(!1);r.push([e.i,".code-editor[data-v-7e33d5d6]{width:100%}",""]),e.exports=r},637:function(e,t,n){"use strict";n.r(t);var r=n(119),o=n(535),l=n(650),c=(n(34),n(66),n(92),n(629)),d=n.n(c),m={props:{value:{type:String,default:""}},watch:{value:function(e){this.content=d()(e)}},mounted:function(){this.content=d()(this.value)||this.content},data:function(){return{content:""}},methods:{checkHtml:function(html){var e=document.createElement("div");return e.innerHTML=html,e.innerHTML===html},validate:function(){this.checkHtml(this.content)?this.$emit("input",this.content.replace(/>\s+|\s+</g,(function(e){return e.trim()}))):(alert("Wrong html"),this.content=d()(this.value))}}},f=(n(631),n(65)),component=Object(f.a)(m,(function(){var e=this,t=e._self._c;return t(o.a,{staticClass:"d-flex flex-column"},[t(l.a,{staticClass:"code-editor",model:{value:e.content,callback:function(t){e.content=t},expression:"content"}}),e._v(" "),t(r.a,{on:{click:e.validate}},[e._v("Submit")])],1)}),[],!1,null,"7e33d5d6",null);t.default=component.exports}}]);