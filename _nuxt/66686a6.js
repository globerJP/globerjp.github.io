(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{571:function(t,e,r){var content=r(572);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("5db1c400",content,!0,{sourceMap:!1})},572:function(t,e,r){var o=r(25)(!1);o.push([t.i,'.theme--light.v-alert .v-alert--prominent .v-alert__icon:after{background:rgba(0,0,0,.12)}.theme--dark.v-alert .v-alert--prominent .v-alert__icon:after{background:hsla(0,0%,100%,.12)}.v-sheet.v-alert{border-radius:4px}.v-sheet.v-alert:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-alert.v-sheet--shaped{border-radius:24px 4px}.v-alert{display:block;font-size:16px;margin-bottom:16px;padding:16px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-alert:not(.v-sheet--tile){border-radius:4px}.v-application--is-ltr .v-alert>.v-alert__content,.v-application--is-ltr .v-alert>.v-icon{margin-right:16px}.v-application--is-rtl .v-alert>.v-alert__content,.v-application--is-rtl .v-alert>.v-icon{margin-left:16px}.v-application--is-ltr .v-alert>.v-icon+.v-alert__content{margin-right:0}.v-application--is-rtl .v-alert>.v-icon+.v-alert__content{margin-left:0}.v-application--is-ltr .v-alert>.v-alert__content+.v-icon{margin-right:0}.v-application--is-rtl .v-alert>.v-alert__content+.v-icon{margin-left:0}.v-alert__border{border-style:solid;border-width:4px;content:"";position:absolute}.v-alert__border:not(.v-alert__border--has-color){opacity:.26}.v-alert__border--left,.v-alert__border--right{bottom:0;top:0}.v-alert__border--bottom,.v-alert__border--top{left:0;right:0}.v-alert__border--bottom{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;bottom:0}.v-application--is-ltr .v-alert__border--left{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-application--is-ltr .v-alert__border--right,.v-application--is-rtl .v-alert__border--left{border-top-right-radius:inherit;border-bottom-right-radius:inherit;right:0}.v-application--is-rtl .v-alert__border--right{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-alert__border--top{border-top-left-radius:inherit;border-top-right-radius:inherit;top:0}.v-alert__content{flex:1 1 auto}.v-application--is-ltr .v-alert__dismissible{margin:-16px -8px -16px 8px}.v-application--is-rtl .v-alert__dismissible{margin:-16px 8px -16px -8px}.v-alert__icon{align-self:flex-start;border-radius:50%;height:24px;min-width:24px;position:relative}.v-application--is-ltr .v-alert__icon{margin-right:16px}.v-application--is-rtl .v-alert__icon{margin-left:16px}.v-alert__icon.v-icon{font-size:24px}.v-alert__wrapper{align-items:center;border-radius:inherit;display:flex}.v-application--is-ltr .v-alert--border.v-alert--prominent .v-alert__icon{margin-left:8px}.v-application--is-rtl .v-alert--border.v-alert--prominent .v-alert__icon{margin-right:8px}.v-alert--dense{padding-top:8px;padding-bottom:8px}.v-alert--dense .v-alert__border{border-width:medium}.v-alert--outlined{background:transparent!important;border:thin solid!important}.v-alert--outlined .v-alert__icon{color:inherit!important}.v-alert--prominent .v-alert__icon{align-self:center;height:48px;min-width:48px}.v-alert--prominent .v-alert__icon.v-icon{font-size:32px}.v-alert--prominent .v-alert__icon.v-icon:after{background:currentColor!important;border-radius:50%;bottom:0;content:"";left:0;opacity:.16;position:absolute;right:0;top:0}.v-alert--prominent.v-alert--dense .v-alert__icon.v-icon:after{transform:scale(1)}.v-alert--text{background:transparent!important}.v-alert--text:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;position:absolute;pointer-events:none;right:0;top:0}',""]),t.exports=o},592:function(t,e,r){"use strict";r(17),r(14),r(16),r(8),r(22),r(15),r(23);var o=r(2),n=(r(40),r(571),r(123)),c=r(122),l=r(82),d=r(100),h=r(27),f=r(1).default.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),v=r(9),m=r(12);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(v.a)(n.a,d.a,f).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"==typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var data={staticClass:"v-alert__border",class:Object(o.a)({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&((data=this.setBackgroundColor(this.computedColor,data)).class["v-alert__border--has-color"]=!0),this.$createElement("div",data)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(c.a,{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(l.a,{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(l.a,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=_(_({},n.a.options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"==typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||h.a.options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(m.a)("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible];return this.$createElement("div",{staticClass:"v-alert__wrapper"},t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var data={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};this.coloredBorder||(data=(this.hasText?this.setTextColor:this.setBackgroundColor)(this.computedColor,data));return this.$createElement("div",data,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},626:function(t,e,r){var content=r(697);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("09d0c184",content,!0,{sourceMap:!1})},627:function(t,e,r){var content=r(699);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("e153e246",content,!0,{sourceMap:!1})},684:function(t,e,r){"use strict";r.r(e);var o=r(592),n=r(120),c=(r(34),r(66),r(54),r(376),{props:["imgSrcIn","index","fileType","fileName","fileWidth","fileHeight"],data:function(){return{isCropping:!1,scaleX:1,scaleY:1,aspectRatio:4/3,imgSrc:null,cropImg:"",data:null,imgStyle:{height:"350px"},error:null,success:null}},mounted:function(){this.imgSrc=this.imgSrcIn,this.$refs.cropper.replace(this.imgSrc)},watch:{isCropping:function(t){this.$emit("isCropping",t)},cropImg:function(t){this.imgSrc=null,this.$emit("cropImg",{img:t,index:this.index,fileType:this.fileType,fileName:this.fileName}),this.isCropping=!1},imgSrcIn:{handler:function(t){this.imgSrc=t,this.$refs.cropper.replace(this.imgSrc)},deep:!0}},methods:{calculateCoeff:function(t,e){return 100*("width"==e?600:350)/t*.01},cropImage:function(){var t=this;this.isCropping=!0,setTimeout((function(){try{t.cropImg=t.$refs.cropper.getCroppedCanvas().toDataURL(t.fileType)}catch(e){t.isCropping=!1,t.error="Some error occured"+e,setTimeout((function(){t.error=null}),2e3)}}),1e3)},flipX:function(){this.scaleX=-this.scaleX,this.$refs.cropper.scaleX(this.scaleX)},flipY:function(){this.scaleY=-this.scaleY,this.$refs.cropper.scaleY(this.scaleY)},getCropBoxData:function(){this.data=JSON.stringify(this.$refs.cropper.getCropBoxData(),null,4)},getData:function(){this.data=JSON.stringify(this.$refs.cropper.getData(),null,4)},move:function(t,e){this.$refs.cropper.move(t,e)},reset:function(){this.$refs.cropper.reset()},rotate:function(t){this.$refs.cropper.rotate(t)},setCropBoxData:function(){this.data&&this.$refs.cropper.setCropBoxData(JSON.parse(this.data))},setData:function(){this.data&&this.$refs.cropper.setData(JSON.parse(this.data))},setImage:function(t){var e=this;if(-1!==t.type.indexOf("image/"))if("function"==typeof FileReader){var r=new FileReader;r.onload=function(t){e.imgSrc=t.target.result,e.$refs.cropper.replace(t.target.result)},r.readAsDataURL(t)}else alert("Sorry, FileReader API not supported");else alert("Please select an image file")},showFileChooser:function(){this.$refs.input.click()},zoom:function(t){this.$refs.cropper.relativeZoom(t)},setAspectRatio:function(){this.aspectRatio==4/3?(this.$refs.cropper.setAspectRatio(3/4),this.aspectRatio=3/4,this.$forceUpdate()):(this.$refs.cropper.setAspectRatio(4/3),this.aspectRatio=4/3,this.$forceUpdate())}}}),l=(r(696),r(698),r(65)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"content"},[e("section",{staticClass:"cropper-area"},[e(o.a,{staticStyle:{position:"fixed",left:"50%","z-index":"100",bottom:"50px",transform:"translate(-50%, -50%)",margin:"0 auto"},attrs:{type:"success",value:!!t.success}},[t._v(t._s(t.success))]),t._v(" "),e(o.a,{staticStyle:{position:"fixed",left:"50%","z-index":"100",bottom:"50px",transform:"translate(-50%, -50%)",margin:"0 auto"},attrs:{type:"error",value:!!t.error}},[t._v(t._s(t.error))]),t._v(" "),e("div",{staticClass:"img-cropper",staticStyle:{"min-height":"350px"}},[e("vue-cropper",{ref:"cropper",attrs:{src:t.imgSrc,"aspect-ratio":t.aspectRatio,imgStyle:t.imgStyle,autoCropArea:1,viewMode:1,background:!1,dragMode:"move"}})],1),t._v(" "),e("div",{staticClass:"actions"},[e("div",{staticClass:"d-flex justify-center align-center flex-wrap"},[e(n.a,{staticClass:"button",attrs:{disabled:t.isCropping},on:{click:function(e){return e.preventDefault(),t.rotate(90)}}},[t._v("\n          Rotate +90deg\n        ")]),t._v(" "),e(n.a,{ref:"flipX",staticClass:"button",attrs:{disabled:t.isCropping},on:{click:function(e){return e.preventDefault(),t.flipX.apply(null,arguments)}}},[t._v("\n          Flip X\n        ")]),t._v(" "),e(n.a,{ref:"flipY",staticClass:"button",attrs:{disabled:t.isCropping},on:{click:function(e){return e.preventDefault(),t.flipY.apply(null,arguments)}}},[t._v("\n          Flip Y\n        ")]),t._v(" "),e(n.a,{staticClass:"button",attrs:{disabled:t.isCropping},on:{click:function(e){return e.preventDefault(),t.setAspectRatio.apply(null,arguments)}}},[t._v("\n          "+t._s(this.aspectRatio===3/4?"Landscape":"Portrait")+"\n        ")]),t._v(" "),e(n.a,{staticClass:"button",attrs:{disabled:t.isCropping},on:{click:function(e){return e.preventDefault(),t.reset.apply(null,arguments)}}},[t._v("\n          Reset\n        ")]),t._v(" "),e(n.a,{staticClass:"button",staticStyle:{"background-color":"red !important",color:"white"},attrs:{disabled:t.isCropping},on:{click:function(e){return e.preventDefault(),t.cropImage.apply(null,arguments)}}},[t._v("\n        "+t._s(t.isCropping?"Cropping...":"Crop & Upload")+"\n        ")])],1)])],1)])])}),[],!1,null,null,null);e.default=component.exports},696:function(t,e,r){"use strict";r(626)},697:function(t,e,r){var o=r(25)(!1);o.push([t.i,'/*!\n * Cropper.js v1.5.12\n * https://fengyuanchen.github.io/cropperjs\n *\n * Copyright 2015-present Chen Fengyuan\n * Released under the MIT license\n *\n * Date: 2021-06-12T08:00:11.623Z\n */.cropper-container{direction:ltr;font-size:0;line-height:0;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.cropper-container img{display:block;height:100%;image-orientation:0deg;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;width:100%}.cropper-canvas,.cropper-crop-box,.cropper-drag-box,.cropper-modal,.cropper-wrap-box{bottom:0;left:0;position:absolute;right:0;top:0}.cropper-canvas,.cropper-wrap-box{overflow:hidden}.cropper-drag-box{background-color:#fff;opacity:0}.cropper-modal{background-color:#000;opacity:.5}.cropper-view-box{display:block;height:100%;outline:1px solid #39f;outline-color:rgba(51,153,255,.75);overflow:hidden;width:100%}.cropper-dashed{border:0 dashed #eee;display:block;opacity:.5;position:absolute}.cropper-dashed.dashed-h{border-bottom-width:1px;border-top-width:1px;height:33.33333%;left:0;top:33.33333%;width:100%}.cropper-dashed.dashed-v{border-left-width:1px;border-right-width:1px;height:100%;left:33.33333%;top:0;width:33.33333%}.cropper-center{display:block;height:0;left:50%;opacity:.75;position:absolute;top:50%;width:0}.cropper-center:after,.cropper-center:before{background-color:#eee;content:" ";display:block;position:absolute}.cropper-center:before{height:1px;left:-3px;top:0;width:7px}.cropper-center:after{height:7px;left:0;top:-3px;width:1px}.cropper-face,.cropper-line,.cropper-point{display:block;height:100%;opacity:.1;position:absolute;width:100%}.cropper-face{background-color:#fff;left:0;top:0}.cropper-line{background-color:#39f}.cropper-line.line-e{cursor:ew-resize;right:-3px;top:0;width:5px}.cropper-line.line-n{cursor:ns-resize;height:5px;left:0;top:-3px}.cropper-line.line-w{cursor:ew-resize;left:-3px;top:0;width:5px}.cropper-line.line-s{bottom:-3px;cursor:ns-resize;height:5px;left:0}.cropper-point{background-color:#39f;height:5px;opacity:.75;width:5px}.cropper-point.point-e{cursor:ew-resize;margin-top:-3px;right:-3px;top:50%}.cropper-point.point-n{cursor:ns-resize;left:50%;margin-left:-3px;top:-3px}.cropper-point.point-w{cursor:ew-resize;left:-3px;margin-top:-3px;top:50%}.cropper-point.point-s{bottom:-3px;cursor:s-resize;left:50%;margin-left:-3px}.cropper-point.point-ne{cursor:nesw-resize;right:-3px;top:-3px}.cropper-point.point-nw{cursor:nwse-resize;left:-3px;top:-3px}.cropper-point.point-sw{bottom:-3px;cursor:nesw-resize;left:-3px}.cropper-point.point-se{bottom:-3px;cursor:nwse-resize;height:20px;opacity:1;right:-3px;width:20px}@media (min-width:768px){.cropper-point.point-se{height:15px;width:15px}}@media (min-width:992px){.cropper-point.point-se{height:10px;width:10px}}@media (min-width:1200px){.cropper-point.point-se{height:5px;opacity:.75;width:5px}}.cropper-point.point-se:before{background-color:#39f;bottom:-50%;content:" ";display:block;height:200%;opacity:0;position:absolute;right:-50%;width:200%}.cropper-invisible{opacity:0}.cropper-bg{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC")}.cropper-hide{display:block;height:0;position:absolute;width:0}.cropper-hidden{display:none!important}.cropper-move{cursor:move}.cropper-crop{cursor:crosshair}.cropper-disabled .cropper-drag-box,.cropper-disabled .cropper-face,.cropper-disabled .cropper-line,.cropper-disabled .cropper-point{cursor:not-allowed}',""]),t.exports=o},698:function(t,e,r){"use strict";r(627)},699:function(t,e,r){var o=r(25)(!1);o.push([t.i,".cropper-container{max-width:100%!important;height:350px!important}.cropper-bg,.cropper-container{max-height:350px!important;overflow:hidden}.img-container img{height:100%}.cropper-area{width:100%}.actions{margin-top:1rem;flex-wrap:wrap}.actions,.actions .button{display:flex;justify-content:center;align-items:center}.actions .button{padding:5px 15px;background-color:#0062cc!important;color:#fff!important;text-decoration:none;border-radius:3px;margin-right:1rem;margin-bottom:1rem}.img-cropper{max-height:350px;background-color:#000}.cropper-crop-box{z-index:0}.crop-placeholder{width:100%;height:200px}.cropper-modal{opacity:0}.cropper-canvas{z-index:0}.cropped-image img{max-height:100%}",""]),t.exports=o}}]);