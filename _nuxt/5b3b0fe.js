(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{622:function(t,e,n){"use strict";n.r(e);var l=n(120),o=n(111),c=n(373),r=n(121),d=n(681),h=n(172),m=(n(8),n(89),n(34),n(77),n(16),n(90),n(93),n(211),{data:function(){return{textFields:[],fileType:"mime:image/jpeg,image/png",fileItems:[{text:"",value:""},{text:"PDF",value:"mime:application/pdf"},{text:"image",value:"mime:image/jpeg,image/png"}],checkbox:!1,content:{type:"",name:"",label:"",help:"",validation:"",validationName:""}}},props:{value:{type:Object,required:!0}},watch:{fileType:function(t){var e=this.purifyValidation("mime");this.content.validation=t?e?e+"|"+t:t:e,this.getValidationName()},value:function(t){this.checkbox="required"===t.validation,this.content=t||this.content},checkbox:function(t){var e=this.purifyValidation("required");this.content.validation=t?e?e+"|required":"required":e,this.getValidationName()},content:{handler:function(t){this.$emit("input",t)}},textFields:function(t){this.content.options=t}},methods:{getValidationName:function(){var t="";this.getValidation("required")&&(t+="This field"),this.getValidation("mime")&&(t="Upload file is not valid type. "+t),this.content.validationName=t},purifyValidation:function(t){return this.content.validation.split("|").filter((function(e){return!e.startsWith(t)})).join("|")},getValidation:function(t){var e=this.content.validation.split("|").filter((function(e){return e.startsWith(t)}));return e.length?e[0]:""},createRow:function(){this.textFields.push("<New Option>"+Date.now().toString())},deleteRow:function(t){this.textFields.splice(t,1)}},mounted:function(){this.content=this.value||this.content,"checkbox"!==this.value.type&&"radio"!==this.value.type||(this.content.options||(this.content.options=["<Here enter>"]),this.textFields=this.content.options);var t="";"file"===this.value.type&&this.getValidation("mime")&&(t=this.getValidation("mime")),this.getValidation("required")&&(t?t+="|required":t="required"),this.content.validation=t,this.checkbox=!!this.getValidation("required"),this.fileType=this.getValidation("mime")}}),f=n(65),component=Object(f.a)(m,(function(){var t=this,e=t._self._c;return t.content?e(o.a,{staticClass:"pa-5 mb-4",staticStyle:{"max-width":"100%"}},[e(h.a,{attrs:{label:"Label"},model:{value:t.content.label,callback:function(e){t.$set(t.content,"label",e)},expression:"content.label"}}),t._v(" "),e(h.a,{attrs:{label:"Help Text"},model:{value:t.content.help,callback:function(e){t.$set(t.content,"help",e)},expression:"content.help"}}),t._v(" "),e(c.a,{attrs:{label:"is required field? ".concat(t.checkbox.toString())},model:{value:t.checkbox,callback:function(e){t.checkbox=e},expression:"checkbox"}}),t._v(" "),"file"===t.content.type?e(d.a,{staticClass:"mb-4",attrs:{label:"Select File type",items:t.fileItems,"item-text":"text","item-value":"value"},model:{value:t.fileType,callback:function(e){t.fileType=e},expression:"fileType"}}):t._e(),t._v(" "),"checkbox"===t.content.type||"radio"===t.content.type?e(o.a,{staticClass:"d-flex flex-column mb-10 pa-5",attrs:{outlined:""}},[t._l(t.textFields,(function(n,i){return e("div",{key:i,staticClass:"d-flex flex-row justify-center; align-center"},[e(h.a,{model:{value:t.textFields[i],callback:function(e){t.$set(t.textFields,i,e)},expression:"textFields[i]"}}),t._v(" "),e(l.a,{staticStyle:{display:"absolute","margin-left":"20px","margin-top":"20px",right:"5px",bottom:"20px"},attrs:{icon:"",color:"error"},on:{click:function(){t.deleteRow(i)}}},[e(r.a,[t._v("mdi-delete-empty")])],1)],1)})),t._v(" "),e(l.a,{staticClass:"ma-5 mr-0",on:{click:t.createRow}},[t._v("Add Row")])],2):t._e()],1):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);