(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{530:function(e,t,n){var content=n(548);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("3ded6f50",content,!0,{sourceMap:!1})},536:function(e,t,n){"use strict";n.r(t);var l=n(118),o=n(517),r=n(593),c=(n(35),n(63),n(89),n(565)),d=n.n(c),m={props:{value:{type:String,default:""}},watch:{value:function(e){this.content=d()(e)}},mounted:function(){this.content=d()(this.value)||this.content},data:function(){return{content:""}},methods:{checkHtml:function(html){var e=document.createElement("div");return e.innerHTML=html,e.innerHTML===html},validate:function(){this.checkHtml(this.content)?this.$emit("input",this.content.replace(/>\s+|\s+</g,(function(e){return e.trim()}))):(alert("Wrong html"),this.content=d()(this.value))}}},f=(n(547),n(73)),component=Object(f.a)(m,(function(){var e=this,t=e._self._c;return t(o.a,{staticClass:"d-flex flex-column"},[t(r.a,{staticClass:"code-editor",model:{value:e.content,callback:function(t){e.content=t},expression:"content"}}),e._v(" "),t(l.a,{on:{click:e.validate}},[e._v("Submit")])],1)}),[],!1,null,"3e1e6744",null);t.default=component.exports},547:function(e,t,n){"use strict";n(530)},548:function(e,t,n){var l=n(25)(!1);l.push([e.i,".code-editor[data-v-3e1e6744]{width:100%}",""]),e.exports=l},553:function(e,t,n){"use strict";n.r(t);var l=n(118),o=n(109),r=n(345),c=n(344),d=n(243),m=n(343),f=n(635),h=n(170),v=n(593),x=(n(16),n(75),n(22)),y=(n(62),n(98),n(89),n(74),n(35),n(78),n(7),n(41),n(46),n(63),n(257),n(85),n(167),n(45),n(36),n(602)),I=n(552),_=n(536),w={name:"BlogForm",components:{Editor:I.default,CodeEditor:_.default},props:{value:{type:Object,default:function(){}}},data:function(){return{codeEditorBody:"",categories:[{value:"immigration",text:"Immigration Related"},{value:"job_hunting",text:"Job Hunting"},{value:"housing",text:"Housing"},{value:"parttime_jobs",text:"Part-time Jobs"},{value:"scholarship",text:"Scholarship"},{value:"dl_banking",text:"Daily Life: Banking"},{value:"dl_garbage",text:"Daily Life: Garbage and recycling"},{value:"dl_phone",text:"Daily Life: Phone and Post Office"},{value:"dl_transportation",text:"Daily Life: Transportation/Bicycles"},{value:"dl_insurance",text:"Daily Life: Insurance and National Pension"},{value:"dl_medical",text:"Daily Life: Medical Related"},{value:"l_food",text:"Leisure: Food"},{value:"l_traveling",text:"Leisure: Traveling"},{value:"l_extra_curricular_activities",text:"Leisure: Extra Curricular Activities"},{value:"miscellaneous",text:"Other..."}],blog:{},tags:"",status:"",originalId:"",blogMeta:{},isUploadingImage:!1,isDeletingImage:!1,FULL_IMAGE:{maxDimension:1280,quality:.9},THUMB_IMAGE:{maxDimension:640,quality:.7}}},watch:{value:{handler:function(e){this.blog=Object(y.cloneDeep)(e),this.tags=this.blog.tags?this.blog.tags.join():""},immediate:!0},blog:{handler:function(e){this.codeEditorBody=e.body},deep:!0},codeEditorBody:{handler:function(e){this.blog.body=e}}},mounted:function(){this.originalId=this.blog.id},computed:{user:function(){return this.$store.state.authUser}},methods:{submitForm:function(){var e=this;return Object(x.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.blog.id){t.next=4;break}return alert("Please enter the blog ID."),e.$refs.id.focus(),t.abrupt("return");case 4:if(e.originalId===e.blog.id){t.next=12;break}return t.next=7,e.checkExists(e.blog.id);case 7:if(!t.sent){t.next=12;break}return alert("Blog ID already exists. Please enter a unique blog ID."),e.$refs.id.focus(),t.abrupt("return");case 12:return t.next=14,e.updateValue();case 14:case"end":return t.stop()}}),t)})))()},updateValue:function(){var e=this;return Object(x.a)(regeneratorRuntime.mark((function t(){var n,l,o,r,c,d,m,f,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.status="Saving...",n=Date.now(),l=Object(y.cloneDeep)(e.blog),o=l.id,delete l.id,l.created||(l.created=n),l.changed=n,l.tags=""!==e.tags.trim()?e.tags.split(",").map((function(e){return e.toLowerCase().trim()})):[],t.prev=8,r=[],c=e.$fire.firestore.collection("blogs").doc(o).set(l),d={title:l.title,body:l.teaser||"",tags:l.tags,category:l.category,imageUrl:l.teaserImageUrl||null,imageAlt:l.imageAlt||"",created:l.created,changed:l.changed,published:l.published||!1},m=e.$fire.firestore.collection("blogTeasers").doc(o).set(d),r.push(c,m),e.originalId&&e.originalId!==o&&(f=e.$fire.firestore.collection("blogs").doc(e.originalId).delete(),h=e.$fire.firestore.collection("blogTeasers").doc(e.originalId).delete(),r.push(f,h)),t.next=17,Promise.all(r);case 17:t.next=23;break;case 19:t.prev=19,t.t0=t.catch(8),alert("Error saving blog or teaser"),console.error(t.t0);case 23:l.id=o,e.$emit("input",Object(y.cloneDeep)(l)),e.status="",e.originalId!==o&&(e.originalId=o,e.$router.replace({name:"blog-id-edit",params:{id:l.id}}));case 27:case"end":return t.stop()}}),t,null,[[8,19]])})))()},confirmDelete:function(){var e=this;if(window.confirm("Are you sure you want to delete this blog?")&&this.originalId){this.blog.imageUrl&&this.deleteImage();var t=this.$fire.firestore.collection("blogs").doc(this.originalId).delete(),n=this.$fire.firestore.collection("teasers").doc(this.originalId).delete();Promise.all([t,n]).then((function(){return alert("Blog deleted!"),e.$router.push({path:"/admin"}),null})).catch((function(e){alert("Unable to delete blog!"),console.error(e)}))}},updateId:function(){this.blog.id=this.slugify(this.blog.title)},checkExists:function(){var e=this;return Object(x.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$fire.firestore.collection("blogs").doc(e.blog.id).get();case 2:return n=t.sent,t.abrupt("return",n.exists);case 4:case"end":return t.stop()}}),t)})))()},slugify:function(e){var a="àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;",p=new RegExp(a.split("").join("|"),"g");return e.toString().toLowerCase().replace(/\s+/g,"-").replace(p,(function(e){return"aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------".charAt(a.indexOf(e))})).replace(/&/g,"-and-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},launchImageFile:function(){this.$refs.imageFile.click()},uploadImageFile:function(e){var t=this;return Object(x.a)(regeneratorRuntime.mark((function n(){var l,o,r,c,d,m,f,h,v;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.length){n.next=2;break}return n.abrupt("return");case 2:if((l=e[0]).type.match("image.*")){n.next=6;break}return alert("Please upload an image."),n.abrupt("return");case 6:return(o=l.name.split(".")).pop(),t.blog.imageAlt=o.join(),r={contentType:l.type},c=new Promise((function(e,n){t.generateVariation(l,t.FULL_IMAGE.maxDimension,t.FULL_IMAGE.quality,e)})),d=new Promise((function(e,n){t.generateVariation(l,t.THUMB_IMAGE.maxDimension,t.THUMB_IMAGE.quality,e)})),n.next=14,Promise.all([c,d]);case 14:return m=n.sent,f=t.uploadSingleImageFile(l.name,m[0],r),h=l.name.substring(0,l.name.lastIndexOf("."))+"_thumb."+l.name.substring(l.name.lastIndexOf(".")+1),v=t.uploadSingleImageFile(h,m[1],r),t.isUploadingImage=!0,n.next=21,Promise.all([f,v]).then((function(e){return t.blog.imageUrl=e[0],t.blog.teaserImageUrl=e[1],null})).finally((function(){t.updateValue(),t.isUploadingImage=!1}));case 21:case"end":return n.stop()}}),n)})))()},uploadSingleImageFile:function(e,t,n){return this.$fire.storage.ref("blogImages/".concat(this.user.uid,"/").concat(e)).put(t,n).then((function(e){return e.ref.getDownloadURL().then((function(e){return e}))})).catch((function(e){console.error("Error uploading image",e)}))},generateVariation:function(e,t,n,l){var o=this,r=new FileReader;r.onload=function(e){return r=e.target.result,(image=new Image).src=r,void(image.onload=function(){o.getScaledCanvas(image,t).toBlob(l,"image/jpeg",n)});var r,image},r.readAsDataURL(e)},getScaledCanvas:function(image,e){var t=document.createElement("canvas");return image.width>e||image.height>e?image.width>image.height?(t.width=e,t.height=e*image.height/image.width):(t.width=e*image.width/image.height,t.height=e):(t.width=image.width,t.height=image.height),t.getContext("2d").drawImage(image,0,0,image.width,image.height,0,0,t.width,t.height),t},deleteImage:function(){var e=this;this.isDeletingImage=!0;var t=this.$fire.storage.refFromURL(this.blog.imageUrl).delete(),n=this.$fire.storage.refFromURL(this.blog.teaserImageUrl).delete();return Promise.all([t,n]).then((function(){return e.blog.imageAlt="",e.blog.imageUrl="",e.blog.teaserImageUrl="",null})).catch((function(t){console.error("Error deleting image",t),"storage/object-not-found"===t.code&&(e.blog.imageAlt="",e.blog.imageUrl="",e.blog.teaserImageUrl="")})).finally((function(){e.updateValue(),e.isDeletingImage=!1}))}}},k=n(73),component=Object(k.a)(w,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"d-flex justify-center pa-2"},[t(m.a,{staticStyle:{"max-width":"100%"}},[t(c.a,{staticClass:"col-lg-8",attrs:{cols:"12"}},[t(m.a,[t(c.a,[t(m.a,{staticClass:"d-flex flex-column justify-center align-center"},[t(c.a,{staticClass:"mb-4"},[t(h.a,{attrs:{id:"title",type:"text",placeholder:"Title"},on:{input:e.updateId},model:{value:e.blog.title,callback:function(t){e.$set(e.blog,"title",t)},expression:"blog.title"}})],1),e._v(" "),t(c.a,[t("editor",{model:{value:e.blog.body,callback:function(t){e.$set(e.blog,"body",t)},expression:"blog.body"}})],1),e._v(" "),t(c.a,{staticStyle:{display:"none"}},[t("code-editor",{model:{value:e.codeEditorBody,callback:function(t){e.codeEditorBody=t},expression:"codeEditorBody"}})],1)],1)],1)],1)],1),e._v(" "),t(c.a,{staticClass:"mt-lg-4 col-lg-4",attrs:{cols:"12"}},[t(o.a,{staticClass:"pa-5"},[t("div",[t(h.a,{ref:"id",attrs:{id:"id",type:"text",placeholder:"ID"},model:{value:e.blog.id,callback:function(t){e.$set(e.blog,"id",t)},expression:"blog.id"}})],1),e._v(" "),t("div",[t(r.a,{staticClass:"mr-2 leading-tight",attrs:{label:"Published",type:"checkbox"},model:{value:e.blog.published,callback:function(t){e.$set(e.blog,"published",t)},expression:"blog.published"}})],1),e._v(" "),t("div",{staticClass:"mb-4"},[t("label",[e._v("Image")]),e._v(" "),e.blog.imageUrl?t("div",[t(d.a,{staticClass:"object-cover inline-block",staticStyle:{height:"300px",width:"100%"},attrs:{src:e.blog.imageUrl,contain:"",alt:""}}),e._v(" "),e.blog.imageUrl?t("button",{staticClass:"bg-red-500 border-red-300 text-white",attrs:{disabled:e.isDeletingImage,type:"button"},on:{click:e.deleteImage}},[e._v("\n              "+e._s(e.isDeletingImage?"Deleting...":"Delete")+"\n            ")]):e._e()],1):e._e(),e._v(" "),e.blog.imageUrl?e._e():t("button",{attrs:{disabled:e.isUploadingImage,type:"button"},on:{click:e.launchImageFile}},[e._v("\n            "+e._s(e.isUploadingImage?"Uploading...":"Upload")+"\n          ")]),e._v(" "),t("input",{ref:"imageFile",staticClass:"hidden",attrs:{type:"file",accept:"image/png, image/jpeg"},on:{change:function(t){return t.preventDefault(),e.uploadImageFile(t.target.files)}}})]),e._v(" "),t("div",{staticClass:"mb-4"},[t(v.a,{attrs:{id:"imageCaption",placeholder:"Image caption if any...",rows:"2"},model:{value:e.blog.imageCaption,callback:function(t){e.$set(e.blog,"imageCaption",t)},expression:"blog.imageCaption"}})],1),e._v(" "),t("div",[t(f.a,{attrs:{items:e.categories,label:"Category","item-text":"text","item-value":"value",dense:""},model:{value:e.blog.category,callback:function(t){e.$set(e.blog,"category",t)},expression:"blog.category"}})],1),e._v(" "),t("div",{staticClass:"mb-4"},[t(h.a,{attrs:{id:"tags",type:"text",placeholder:"Tags seperated by comma"},model:{value:e.tags,callback:function(t){e.tags=t},expression:"tags"}})],1),e._v(" "),t("div",{staticClass:"mb-4"},[t(v.a,{attrs:{id:"lead",placeholder:"Blog Subtitle if any...",rows:"1"},model:{value:e.blog.lead,callback:function(t){e.$set(e.blog,"lead",t)},expression:"blog.lead"}})],1),e._v(" "),t("div",{staticClass:"mb-4"},[t(v.a,{attrs:{id:"teaser",placeholder:"Blog Teaser if any...",rows:"1"},model:{value:e.blog.teaser,callback:function(t){e.$set(e.blog,"teaser",t)},expression:"blog.teaser"}})],1),e._v(" "),t("div",{staticClass:"mb-4"},[t(v.a,{attrs:{id:"description",placeholder:"Blog Description if any...",rows:"2"},model:{value:e.blog.description,callback:function(t){e.$set(e.blog,"description",t)},expression:"blog.description"}})],1),e._v(" "),t("div",{staticClass:"mb-4 clearfix"},[t(m.a,{staticClass:"d-flex"},[t(c.a,{staticClass:"col-lg-6",attrs:{cols:"12"}},[t(l.a,{staticClass:"blue float-lg-left",attrs:{disabled:!!e.status,type:"button"},on:{click:e.submitForm}},[e._v("\n                "+e._s(e.status?e.status:"Save")+"\n              ")])],1),e._v(" "),t(c.a,{staticClass:"col-lg-6",attrs:{cols:"12"}},[t(l.a,{staticClass:"error text-white float-lg-right",attrs:{type:"button"},on:{click:e.confirmDelete}},[e._v("\n                Delete\n              ")])],1)],1)],1)])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Editor:n(552).default,CodeEditor:n(536).default})}}]);