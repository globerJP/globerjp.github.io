(window.webpackJsonp=window.webpackJsonp||[]).push([[24,25],{574:function(e,t,o){"use strict";o.r(t);var l=o(120),r=o(111),n=o(361),m=o(121),c=o(692),f=o(173),d=(o(8),o(88),o(34),o(76),o(16),o(89),o(92),o(211),{data:function(){return{textFields:[],fileType:"mime:image/jpeg,image/png",fileItems:[{text:"",value:""},{text:"PDF",value:"mime:application/pdf"},{text:"image",value:"mime:image/jpeg,image/png"}],checkbox:!1,content:{type:"",name:"",label:"",help:"",validation:"",validationName:""}}},props:{value:{type:Object,required:!0}},watch:{fileType:function(e){var t=this.purifyValidation("mime");this.content.validation=e?t?t+"|"+e:e:t,this.getValidationName()},value:function(e){this.checkbox="required"===e.validation,this.content=e||this.content},checkbox:function(e){var t=this.purifyValidation("required");this.content.validation=e?t?t+"|required":"required":t,this.getValidationName()},content:{handler:function(e){this.$emit("input",e)}},textFields:function(e){this.content.options=e}},methods:{getValidationName:function(){var e="";this.getValidation("required")&&(e+="This field"),this.getValidation("mime")&&(e="Upload file is not valid type. "+e),this.content.validationName=e},purifyValidation:function(e){return this.content.validation.split("|").filter((function(t){return!t.startsWith(e)})).join("|")},getValidation:function(e){var t=this.content.validation.split("|").filter((function(t){return t.startsWith(e)}));return t.length?t[0]:""},createRow:function(){this.textFields.push("<New Option>"+Date.now().toString())},deleteRow:function(e){this.textFields.splice(e,1)}},mounted:function(){this.content=this.value||this.content,"checkbox"!==this.value.type&&"radio"!==this.value.type||(this.content.options||(this.content.options=["<Here enter>"]),this.textFields=this.content.options);var e="";"file"===this.value.type&&this.getValidation("mime")&&(e=this.getValidation("mime")),this.getValidation("required")&&(e?e+="|required":e="required"),this.content.validation=e,this.checkbox=!!this.getValidation("required"),this.fileType=this.getValidation("mime")}}),h=o(65),component=Object(h.a)(d,(function(){var e=this,t=e._self._c;return e.content?t(r.a,{staticClass:"pa-5 mb-4",staticStyle:{"max-width":"100%"}},[t(f.a,{attrs:{label:"Label"},model:{value:e.content.label,callback:function(t){e.$set(e.content,"label",t)},expression:"content.label"}}),e._v(" "),t(f.a,{attrs:{label:"Help Text"},model:{value:e.content.help,callback:function(t){e.$set(e.content,"help",t)},expression:"content.help"}}),e._v(" "),t(n.a,{attrs:{label:"is required field? ".concat(e.checkbox.toString())},model:{value:e.checkbox,callback:function(t){e.checkbox=t},expression:"checkbox"}}),e._v(" "),"file"===e.content.type?t(c.a,{staticClass:"mb-4",attrs:{label:"Select File type",items:e.fileItems,"item-text":"text","item-value":"value"},model:{value:e.fileType,callback:function(t){e.fileType=t},expression:"fileType"}}):e._e(),e._v(" "),"checkbox"===e.content.type||"radio"===e.content.type?t(r.a,{staticClass:"d-flex flex-column mb-10 pa-5",attrs:{outlined:""}},[e._l(e.textFields,(function(o,i){return t("div",{key:i,staticClass:"d-flex flex-row justify-center; align-center"},[t(f.a,{model:{value:e.textFields[i],callback:function(t){e.$set(e.textFields,i,t)},expression:"textFields[i]"}}),e._v(" "),t(l.a,{staticStyle:{display:"absolute","margin-left":"20px","margin-top":"20px",right:"5px",bottom:"20px"},attrs:{icon:"",color:"error"},on:{click:function(){e.deleteRow(i)}}},[t(m.a,[e._v("mdi-delete-empty")])],1)],1)})),e._v(" "),t(l.a,{staticClass:"ma-5 mr-0",on:{click:e.createRow}},[e._v("Add Row")])],2):e._e()],1):e._e()}),[],!1,null,null,null);t.default=component.exports},577:function(e,t,o){var content=o(629);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(26).default)("90f71930",content,!0,{sourceMap:!1})},578:function(e,t,o){var content=o(631);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(26).default)("2d20729e",content,!0,{sourceMap:!1})},606:function(e,t,o){"use strict";o.r(t);var l=o(120),r=o(360),n=o(538),m=o(359),c=o(692),f=(o(8),o(46),o(75),o(15),o(88),o(34),o(66),o(55),o(211),o(687)),d=o.n(f),h=o(574),x={components:{Draggable:d.a,CustomFormElement:h.default},props:{value:{type:Array,default:function(){return[]}}},data:function(){return{selectedItem:"text",items:[{value:"text",text:"Text"},{value:"textarea",text:"Multi-line text"},{value:"checkbox",text:"Checkbox"},{value:"radio",text:"Radio"},{value:"number",text:"Number"},{value:"datetime-local",text:"Date-Time"},{value:"date",text:"Date"},{value:"time",text:"Time"},{value:"file",text:"File"}],values:{},cardArray:[],schema:[]}},watch:{cardArray:{handler:function(e){this.schema=e.map((function(e){return e.value})),this.schema.push({type:"submit",label:"submit",name:"submit"})}},schema:function(e){this.$emit("input",e)}},computed:{draggableCards:{get:function(){return this.cardArray},set:function(e){this.cardArray=e}}},mounted:function(){var e=[];this.value.forEach((function(t){"submit"!==t.type&&e.push({value:t})})),this.cardArray=e.length?e:this.cardArray},methods:{createCard:function(){this.cardArray.push({value:{type:this.selectedItem,name:this.selectedItem+"_"+Date.now().toString(),label:(this.selectedItem+"-"+Date.now().toString().slice(-9).substr(0,7)).replace(/\b\w/g,(function(e){return e.toUpperCase()})),validation:"",validationName:""}})},deleteCard:function(e){this.cardArray.splice(e,1)}}},v=(o(628),o(630),o(65)),component=Object(v.a)(x,(function(){var e=this,t=e._self._c;return t(n.a,{staticClass:"d-flex flex-column justify-center align-center align-md-stretch",staticStyle:{"max-width":"100%"}},[t(m.a,{staticStyle:{"max-width":"100%"}},[t(r.a,{staticClass:"col-md-6 d-flex justify-center align-start",attrs:{cols:"12"}},[t("div",{staticClass:"d-flex justify-center",staticStyle:{width:"100%","max-width":"300px"}},[e.schema.length>1?t("FormulateForm",{staticClass:"d-flex justify-center flex-column",staticStyle:{width:"100%"},attrs:{schema:e.schema},model:{value:e.values,callback:function(t){e.values=t},expression:"values"}}):e._e()],1)]),e._v(" "),t(r.a,{staticClass:"col-md-6 draggable-form px-0",attrs:{cols:"12"}},[t("Draggable",{staticClass:"d-flex flex-column pa-5 sp-none",staticStyle:{"max-width":"100%","max-height":"400px",overflow:"overlay","overscroll-behavior":"contain",border:"thin solid #f5f5f5","background-color":"#f5f5f5"},model:{value:e.draggableCards,callback:function(t){e.draggableCards=t},expression:"draggableCards"}},e._l(e.cardArray,(function(o,i){return t("div",{key:i,staticStyle:{position:"relative"}},[t("CustomFormElement",{staticStyle:{"max-width":"100%"},model:{value:o.value,callback:function(t){e.$set(o,"value",t)},expression:"card.value"}}),e._v(" "),t(l.a,{staticStyle:{display:"absolute",right:"5px",bottom:"20px"},attrs:{color:"error",absolute:""},on:{click:function(){e.deleteCard(i)}}},[e._v("Delete")])],1)})),0),e._v(" "),t("div",{staticClass:"d-flex flex-row"},[t(c.a,{attrs:{items:e.items,"item-text":"text","item-value":"value"},model:{value:e.selectedItem,callback:function(t){e.selectedItem=t},expression:"selectedItem"}}),e._v(" "),t(l.a,{staticClass:"ma-5 mr-0",on:{click:e.createCard}},[e._v("Add Row")])],1)],1)],1)],1)}),[],!1,null,"2aba8919",null);t.default=component.exports;installComponents(component,{CustomFormElement:o(574).default})},628:function(e,t,o){"use strict";o(577)},629:function(e,t,o){var l=o(25)(!1);l.push([e.i,"@media screen and (max-width:599px){.sp-none[data-v-2aba8919]{display:none!important}}@media screen and (min-width:600px){.pc-none[data-v-2aba8919]{display:none!important}}.draggable-form[data-v-2aba8919]{top:0;position:-webkit-sticky;position:sticky;max-width:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}@media screen and (max-width:959px){.draggable-form[data-v-2aba8919]{position:relative}}",""]),e.exports=l},630:function(e,t,o){"use strict";o(578)},631:function(e,t,o){var l=o(25)(!1);l.push([e.i,'.formulate-input{margin-bottom:1.5em;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"}.formulate-input .formulate-input-label{display:block;line-height:1.5;font-size:16px;font-weight:600;margin-bottom:.25em!important;margin-top:.25em!important}.formulate-input .formulate-input-label--before+.formulate-input-help--before{margin-top:-.25em;margin-bottom:.25em}.formulate-input .formulate-input-element{max-width:20em;margin-bottom:.25em!important;margin-top:.25em!important}.formulate-input .formulate-input-help{color:#6d6d6d;font-size:14px;font-weight:400;line-height:1.5;margin-bottom:.4em}.formulate-input .formulate-input-errors{list-style-type:none;padding:0;margin:0}.formulate-input .formulate-file-upload-error,.formulate-input .formulate-input-error{color:#960505;font-size:14px;font-weight:300;line-height:1.5;margin-bottom:.25em}.formulate-input:last-child{margin-bottom:0}.formulate-input[data-classification=text] input{font-size:16px!important;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:.3em;border:1px solid #cecece;box-sizing:border-box;background-color:transparent;font-size:.9em;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";padding:.75em;display:block;width:100%;font-weight:400;line-height:1.2em;margin:0}.formulate-input[data-classification=text] input::-moz-placeholder{color:#a8a8a8;line-height:normal}.formulate-input[data-classification=text] input::placeholder{color:#a8a8a8;line-height:normal}.formulate-input[data-classification=text] input:focus{outline:0;border:1px solid #2196f3}.formulate-input[data-classification=text] .formulate-input-element--date input,.formulate-input[data-classification=text] .formulate-input-element--datetime-local input,.formulate-input[data-classification=text] .formulate-input-element--month input,.formulate-input[data-classification=text] .formulate-input-element--week input{min-height:2.2em}.formulate-input[data-classification=text] .formulate-input-element--search{position:relative}.formulate-input[data-classification=text] .formulate-input-element--search:before{content:"";width:2em;height:100%;position:absolute;left:0;top:0;background-image:url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72.99 72.9"><path fill="%236d6d6d" d="M71.77,66,53.87,48.1A29.94,29.94,0,1,0,30,60a29.52,29.52,0,0,0,18.1-6.1l18,17.8A4,4,0,0,0,69,72.9a4.18,4.18,0,0,0,2.9-1.2A4.09,4.09,0,0,0,71.77,66ZM30.07,51.9a21.9,21.9,0,1,1,15.5-37.4A21.37,21.37,0,0,1,52,30a22,22,0,0,1-6.4,15.5A21.54,21.54,0,0,1,30.07,51.9Z"/></svg>\');background-size:1em 1em;background-repeat:no-repeat;background-position:50%;pointer-events:none}.formulate-input[data-classification=text] .formulate-input-element--search input{padding-left:2em}.formulate-input[data-classification=text] input[type=color]{height:1.1em;box-sizing:content-box;width:auto;min-width:5em}.formulate-input[data-classification=text] input[type=color]::-webkit-color-swatch-wrapper{padding:0 0 0 1.5em;display:flex;align-items:center;background-image:url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 79.17 79.17"><path fill="%236d6d6d" d="M40.8,22.92c-3.4-3.4-4.76-8.44-1-12.24s8.84-2.44,12.24,1c5-5,10.69-13.33,18.81-11.31a11,11,0,0,1,7.62,14.34c-1.26,3.45-4.63,6.06-7.16,8.59-.92.93-3,2.26-3.46,3.46-.42,1,1.82,2.63,2.36,4a8,8,0,0,1-12.42,9.19c-.21-.16-1.35-1.51-1.59-1.51s-.83.83-1,1L49.71,44.9,32.43,62.18c-3.37,3.38-6.6,7.14-10.26,10.21a11,11,0,0,1-4.48,2.28c-1.25.3-3.11-.22-4.18.18-1.28.48-2.42,2.65-3.68,3.4-6.05,3.61-12.64-4-8.46-9.57.73-1,2.53-1.92,3-3a14.46,14.46,0,0,0-.09-2.52,10.75,10.75,0,0,1,3.14-6.77c.92-1,1.93-1.93,2.89-2.9Zm4.4-1.5c4.19,4,8.24,8.24,12.36,12.36,2.06,2.06,5,5.59,8,2.61,4.65-4.62-5-6.8-2.42-10.78C66.3,20.7,76.4,16.48,74.84,9.45,73.62,4,67.12,2.78,63.29,6.32c-2.55,2.36-4.93,4.94-7.39,7.4-.79.78-1.8,2.28-2.88,2.73-2.14.88-3.4-1.62-4.79-2.77-2.58-2.14-6.89-.82-6.53,3C41.89,18.68,43.87,20.09,45.2,21.42Zm-1.45,4.44L27.82,41.79C22,47.57,15.89,53.14,10.41,59.2a8.23,8.23,0,0,0-1.44,2c-.93,2,.25,4.14-.5,6S4.92,69.94,4.3,72a2.34,2.34,0,0,0,2.56,3c1.11-.17,2-1.33,2.71-2.07a11.17,11.17,0,0,1,2.08-2c1.68-.94,4,.17,5.93-.57C20,69.41,22,66.73,23.76,65L34.42,54.3,53.3,35.42Z"/></svg>\');background-repeat:no-repeat;background-size:.9em .9em;background-position:left .1em}.formulate-input[data-classification=text] input[type=color]::-webkit-color-swatch{display:block;height:1em;border-radius:.2em;border:0;flex:auto}.formulate-input[data-classification=text] input[type=color]::-moz-color-swatch{display:block;height:1em;border-radius:.2em;border:0;flex:auto}.formulate-input[data-classification=slider] .formulate-input-element--range{display:flex;align-items:center}.formulate-input[data-classification=slider] .formulate-input-element-range-value{font-size:16px;line-height:1;margin-left:.5em;background-color:#efefef;padding:.25em .3em;border-radius:.25em;color:#6d6d6d;font-feature-settings:"tnum";font-variant-numeric:tabular-nums}.formulate-input[data-classification=slider] input{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:100%;font-size:16px;padding:.5em 0}.formulate-input[data-classification=slider] input:focus{outline:0}.formulate-input[data-classification=slider] input::-webkit-slider-thumb{cursor:pointer;-webkit-appearance:none;appearance:none;width:1em;height:1em;border-radius:1em;border:0;background-color:#2196f3;margin-top:calc(-.5em + 2px)}.formulate-input[data-classification=slider] input::-moz-range-thumb{cursor:pointer;-moz-appearance:none;appearance:none;width:1em;height:1em;border-radius:1em;border:0;background-color:#2196f3;margin-top:calc(-.5em + 2px)}.formulate-input[data-classification=slider] input::-ms-thumb{cursor:pointer;appearance:none;width:1em;height:1em;border-radius:1em;border:0;background-color:#2196f3;margin-top:calc(-.5em + 2px)}.formulate-input[data-classification=slider] input::-webkit-slider-runnable-track{-webkit-appearance:none;appearance:none;width:100%;height:4px;background-color:#efefef;border-radius:3px;margin:0;padding:0}.formulate-input[data-classification=slider] input::-moz-range-track{-moz-appearance:none;appearance:none;width:100%;height:4px;background-color:#efefef;border-radius:3px;margin:0;padding:0}.formulate-input[data-classification=textarea] textarea{font-size:16px!important;min-height:150px;max-height:200px;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:.3em;border:1px solid #cecece;box-sizing:border-box;background-color:transparent;font-size:.9em;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";padding:.75em;display:block;width:100%;font-weight:400;line-height:1.2em;margin:0}.formulate-input[data-classification=textarea] textarea::-moz-placeholder{color:#a8a8a8;line-height:normal}.formulate-input[data-classification=textarea] textarea::placeholder{color:#a8a8a8;line-height:normal}.formulate-input[data-classification=textarea] textarea:focus{outline:0;border:1px solid #2196f3}.formulate-input[data-classification=button] button{-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:.3em;box-sizing:border-box;background-color:transparent;font-size:.9em;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";padding:.75em;display:block;width:100%;font-weight:400;line-height:1.2em;margin:0;border:1px solid #2196f3;background-color:#2196f3;color:#fff;min-width:0;width:auto;font-weight:700;cursor:pointer;display:inline-flex;align-items:center}.formulate-input[data-classification=button] button::-moz-placeholder{color:#a8a8a8;line-height:normal}.formulate-input[data-classification=button] button::placeholder{color:#a8a8a8;line-height:normal}.formulate-input[data-classification=button] button:focus{outline:0;border:1px solid #2196f3}.formulate-input[data-classification=button] button[disabled],.formulate-input[data-classification=button] button[disabled]:active{background-color:#cecece;border-color:#cecece}.formulate-input[data-classification=button] button[data-ghost]{color:#2196f3;background-color:transparent;border-color:currentColor}.formulate-input[data-classification=button] button[data-minor]{font-size:.75em;display:inline-block}.formulate-input[data-classification=button] button[data-danger]{background-color:#960505;border-color:#960505}.formulate-input[data-classification=button] button[data-danger][data-ghost]{color:#960505;background-color:transparent}.formulate-input[data-classification=button] button:active{background-color:#0083e7;border-color:#0083e7}.formulate-input[data-classification=select] .formulate-input-element{position:relative}.formulate-input[data-classification=select] .formulate-input-element:before{content:"";width:0;height:0;border-color:#cecece transparent transparent;border-style:solid;border-width:.3em .3em 0;top:50%;margin-top:-.1em;right:1em;position:absolute}.formulate-input[data-classification=select] .formulate-input-element[data-multiple]:before{display:none}.formulate-input[data-classification=select] select{-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:.3em;border:1px solid #cecece;box-sizing:border-box;background-color:transparent;font-size:.9em;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";display:block;width:100%;font-weight:400;line-height:1.2em;margin:0;padding:.75em 2em .75em .75em}.formulate-input[data-classification=select] select::-moz-placeholder{color:#a8a8a8;line-height:normal}.formulate-input[data-classification=select] select::placeholder{color:#a8a8a8;line-height:normal}.formulate-input[data-classification=select] select:focus{outline:0;border:1px solid #2196f3}.formulate-input[data-classification=select] select option{color:#000}.formulate-input[data-classification=select] select option:disabled{color:#a8a8a8}.formulate-input[data-classification=select] select[multiple]{padding:0;overflow-y:auto}.formulate-input[data-classification=select] select[multiple] option{padding:.75em}.formulate-input[data-classification=select] select[data-placeholder-selected]{color:#a8a8a8}.formulate-input[data-classification=box] .formulate-input-wrapper{display:flex;align-items:center}.formulate-input[data-classification=box] .formulate-input-element{overflow:hidden;display:flex;align-items:center;margin-bottom:.25em!important;margin-top:.25em!important}.formulate-input[data-classification=box] .formulate-input-element input{position:absolute;left:-999px;opacity:0;pointer-events:none}.formulate-input[data-classification=box] .formulate-input-element-decorator{display:block;width:1em;height:1em;border-radius:.25em;border:1px solid #cecece;position:relative}.formulate-input[data-classification=box] .formulate-input-element-decorator:before{content:"";display:block;background-size:contain;background-position:100%;width:calc(100% - .125em);height:calc(100% - .125em);box-sizing:border-box;position:absolute;top:.0625em;left:.0625em}.formulate-input[data-classification=box] .formulate-input-element[data-type=radio]{min-width:15px}.formulate-input[data-classification=box] .formulate-input-element[data-type=radio] .formulate-input-element-decorator{border-radius:1em}.formulate-input[data-classification=box] .formulate-input-element[data-type=radio] .formulate-input-element-decorator:before{border-radius:1em;width:calc(100% - .5em);height:calc(100% - .5em);top:.25em;left:.25em}.formulate-input[data-classification=box] .formulate-input-element[data-type=checkbox]{min-width:15px}.formulate-input[data-classification=box] .formulate-input-element input[type=checkbox]:checked{font-size:14px!important}.formulate-input[data-classification=box] .formulate-input-element input[type=checkbox]:checked~.formulate-input-element-decorator{border-color:#2196f3}.formulate-input[data-classification=box] .formulate-input-element input[type=checkbox]:checked~.formulate-input-element-decorator:before{background-color:#2196f3;-webkit-mask-image:url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M8.76,56.2c-6.38-6.34,3.26-16,9.64-9.69L38,65.88,80.56,23.29c6.38-6.38,16.07,3.32,9.69,9.69L42.84,80.37a6.83,6.83,0,0,1-9.65,0Z"/></svg>\');mask-image:url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M8.76,56.2c-6.38-6.34,3.26-16,9.64-9.69L38,65.88,80.56,23.29c6.38-6.38,16.07,3.32,9.69,9.69L42.84,80.37a6.83,6.83,0,0,1-9.65,0Z"/></svg>\')}.formulate-input[data-classification=box] .formulate-input-element input[type=radio]:checked{font-size:14px!important}.formulate-input[data-classification=box] .formulate-input-element input[type=radio]:checked~.formulate-input-element-decorator{border-color:#2196f3}.formulate-input[data-classification=box] .formulate-input-element input[type=radio]:checked~.formulate-input-element-decorator:before{background-color:#2196f3}.formulate-input[data-classification=box] .formulate-input-element input:focus~.formulate-input-element-decorator{border-color:#2196f3}.formulate-input[data-classification=box] .formulate-input-label--after{margin-left:.5em}.formulate-input[data-classification=box] .formulate-input-label--before{margin-right:.5em}.formulate-input[data-classification=group] .formulate-input-group-item{margin-bottom:0!important}.formulate-input[data-classification=group]>.formulate-input-wrapper>.formulate-input-label{margin-bottom:.5em}.formulate-input[data-classification=group] [data-is-repeatable]{padding:1em;border:1px solid #efefef;border-radius:.3em}.formulate-input[data-classification=group] [data-is-repeatable] .formulate-input-grouping{margin:-1em -1em 0}.formulate-input[data-classification=group] [data-is-repeatable] .formulate-input-group-repeatable{padding:1em 3em 1em 1em;border-bottom:1px solid #efefef;position:relative}.formulate-input[data-classification=group] [data-is-repeatable] .formulate-input-group-repeatable-remove{position:absolute;display:block;top:calc(50% - .15em);width:1.3em;height:1.3em;background-color:#cecece;right:.85em;border-radius:1.3em;cursor:pointer;transition:background-color .2s;overflow:hidden;text-indent:-1000px}.formulate-input[data-classification=group] [data-is-repeatable] .formulate-input-group-repeatable-remove[data-disabled]{opacity:.2;pointer-events:none}.formulate-input[data-classification=group] [data-is-repeatable] .formulate-input-group-repeatable-remove:after,.formulate-input[data-classification=group] [data-is-repeatable] .formulate-input-group-repeatable-remove:before{content:"";position:absolute;top:calc(50% - .1em);left:.325em;display:block;width:.65em;height:.2em;background-color:#fff;transform-origin:center center;transition:transform .25s}@media(pointer:fine){.formulate-input[data-classification=group] [data-is-repeatable] .formulate-input-group-repeatable-remove:hover{background-color:#dc2c2c}.formulate-input[data-classification=group] [data-is-repeatable] .formulate-input-group-repeatable-remove:hover:after,.formulate-input[data-classification=group] [data-is-repeatable] .formulate-input-group-repeatable-remove:hover:before{height:.2em;width:.75em;left:.25em;top:calc(50% - .075em)}.formulate-input[data-classification=group] [data-is-repeatable] .formulate-input-group-repeatable-remove:hover:after{transform:rotate(45deg)}.formulate-input[data-classification=group] [data-is-repeatable] .formulate-input-group-repeatable-remove:hover:before{transform:rotate(-45deg)}}.formulate-input[data-classification=group] [data-is-repeatable] .formulate-input-group-repeatable:last-child{margin-bottom:1em}.formulate-input[data-classification=file] .formulate-input-upload-area{width:100%;position:relative;padding:2em 0}.formulate-input[data-classification=file] .formulate-input-upload-area input{cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;opacity:0;position:absolute;left:0;right:0;bottom:0;top:0;width:100%;height:100%;z-index:5}.formulate-input[data-classification=file] .formulate-input-upload-area[data-has-files]{padding:0}.formulate-input[data-classification=file] .formulate-input-upload-area[data-has-files] input{display:none}.formulate-input[data-classification=file] .formulate-input-upload-area-mask{border-radius:.4em;position:absolute;pointer-events:none;display:flex;justify-content:center;align-items:center;left:0;right:0;top:0;bottom:0;border:2px dashed #a8a8a8;z-index:2}.formulate-input[data-classification=file] .formulate-input-upload-area-mask:before{content:"";background-color:#a8a8a8;-webkit-mask-image:url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58"><path d="M29,58A29,29,0,1,0,0,29,29,29,0,0,0,29,58ZM29,4A25,25,0,1,1,4,29,25,25,0,0,1,29,4Z"/><polygon points="27 22 27 44.4 31 44.4 31 22 41.7 31.1 44.3 28.1 29 15 13.7 28.1 16.3 31.1 27 22"/></svg>\');mask-image:url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58"><path d="M29,58A29,29,0,1,0,0,29,29,29,0,0,0,29,58ZM29,4A25,25,0,1,1,4,29,25,25,0,0,1,29,4Z"/><polygon points="27 22 27 44.4 31 44.4 31 22 41.7 31.1 44.3 28.1 29 15 13.7 28.1 16.3 31.1 27 22"/></svg>\');-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;width:2em;height:2em;position:absolute;pointer-events:none}.formulate-input[data-classification=file] .formulate-input-upload-area input:focus~.formulate-input-upload-area-mask,.formulate-input[data-classification=file] .formulate-input-upload-area input:hover~.formulate-input-upload-area-mask,.formulate-input[data-classification=file] .formulate-input-upload-area input[data-is-drag-hover]~.formulate-input-upload-area-mask{border-color:#2196f3}.formulate-input[data-classification=file] .formulate-input-upload-area input:focus~.formulate-input-upload-area-mask:before,.formulate-input[data-classification=file] .formulate-input-upload-area input:hover~.formulate-input-upload-area-mask:before,.formulate-input[data-classification=file] .formulate-input-upload-area input[data-is-drag-hover]~.formulate-input-upload-area-mask:before{background-color:#2196f3}.formulate-input[data-classification=file] .formulate-files{list-style-type:none;margin:0;padding:0}.formulate-input[data-classification=file] .formulate-files .formulate-file-add{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:block;min-width:75px;border:1px solid #2196f3;color:#2196f3;padding:5px;border-radius:5px;text-align:center;position:relative;font-size:16px;background-color:transparent;cursor:pointer;margin:.5em 0}.formulate-input[data-classification=file] .formulate-files .formulate-file-add input{position:absolute;display:block;cursor:pointer}.formulate-input[data-classification=file] .formulate-files .formulate-file-add input::-webkit-file-upload-button{display:none}.formulate-input[data-classification=file] .formulate-files .formulate-file-progress{background-color:#cecece;height:.3em;border-radius:1.25em;width:5em;overflow:hidden;position:relative;flex:0 0 5em;right:.75em;transition:height .25s,width .25s,flex-basis .25s;z-index:2}.formulate-input[data-classification=file] .formulate-files .formulate-file-progress:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;display:block;opacity:0;transform:scale(.08);background-color:#fff;-webkit-mask-image:url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M8.76,56.2c-6.38-6.34,3.26-16,9.64-9.69L38,65.88,80.56,23.29c6.38-6.38,16.07,3.32,9.69,9.69L42.84,80.37a6.83,6.83,0,0,1-9.65,0Z"/></svg>\');mask-image:url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M8.76,56.2c-6.38-6.34,3.26-16,9.64-9.69L38,65.88,80.56,23.29c6.38-6.38,16.07,3.32,9.69,9.69L42.84,80.37a6.83,6.83,0,0,1-9.65,0Z"/></svg>\');-webkit-mask-size:77%;mask-size:77%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;z-index:3}.formulate-input[data-classification=file] .formulate-files .formulate-file-progress[data-just-finished]{width:1.25em;height:1.25em;flex:0 0 1.25em}.formulate-input[data-classification=file] .formulate-files .formulate-file-progress[data-just-finished]:before{transition:transform .25s .2s,opacity .25s .2s;transform:scale(1);opacity:1}.formulate-input[data-classification=file] .formulate-files .formulate-file-progress[data-is-finished]{transition:height .25s,width .25s,left .25s,top,.25s,border-radius .25s;width:.3em;flex:0 0 .3em;height:100%;right:0;border-radius:0 .23em .23em 0}.formulate-input[data-classification=file] .formulate-files .formulate-file-progress[data-is-finished]:before{transition:opacity .1s;opacity:0}.formulate-input[data-classification=file] .formulate-files .formulate-file-progress .formulate-file-progress-inner{background-color:#2196f3;width:1%;position:absolute;left:0;bottom:0;top:0;z-index:2}.formulate-input[data-classification=file] .formulate-files .formulate-file-name{padding-left:1.5em;padding-right:2em;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-right:auto}.formulate-input[data-classification=file] .formulate-files .formulate-file-name:before{position:absolute;left:.7em;top:50%;margin-top:-.7em;background-color:#a8a8a8;content:"";-webkit-mask-image:url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.06 83.59"><path d="M55.94,83.59a8.16,8.16,0,0,0,8.12-8.16V19.12a1.77,1.77,0,0,0-.52-1.25L46.21.59A1.69,1.69,0,0,0,45.14.08L44.69,0l-.18,0H8.13A8.18,8.18,0,0,0,0,8.16V75.41a8.16,8.16,0,0,0,8.13,8.16H55.94ZM46.68,6,58.11,17.38H46.68ZM3.52,75.43V8.16A4.64,4.64,0,0,1,8.13,3.52h35V19.16a1.75,1.75,0,0,0,1.76,1.74H60.55V75.43a4.65,4.65,0,0,1-4.61,4.65H8.13A4.65,4.65,0,0,1,3.52,75.43Z"/></svg>\');mask-image:url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.06 83.59"><path d="M55.94,83.59a8.16,8.16,0,0,0,8.12-8.16V19.12a1.77,1.77,0,0,0-.52-1.25L46.21.59A1.69,1.69,0,0,0,45.14.08L44.69,0l-.18,0H8.13A8.18,8.18,0,0,0,0,8.16V75.41a8.16,8.16,0,0,0,8.13,8.16H55.94ZM46.68,6,58.11,17.38H46.68ZM3.52,75.43V8.16A4.64,4.64,0,0,1,8.13,3.52h35V19.16a1.75,1.75,0,0,0,1.76,1.74H60.55V75.43a4.65,4.65,0,0,1-4.61,4.65H8.13A4.65,4.65,0,0,1,3.52,75.43Z"/></svg>\');-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:contain;mask-size:contain;width:1.25em;height:1.25em;display:inline-block;margin-right:.5em}.formulate-input[data-classification=file] .formulate-files .formulate-file-remove{width:1.25em;height:1.25em;border-radius:1em;border:1px solid #a8a8a8;background-color:#a8a8a8;-webkit-mask-image:url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.1 59.2"><path d="M1.6,57.7a5,5,0,0,0,3.5,1.5,4.85,4.85,0,0,0,3.5-1.5l21-21,21,21a5,5,0,0,0,3.5,1.5,4.85,4.85,0,0,0,3.5-1.5,5,5,0,0,0,0-7.1l-21-21,21-21a5,5,0,0,0,0-7.1,5,5,0,0,0-7.1,0l-21,21L8.6,1.7a5,5,0,0,0-7.1,0,5,5,0,0,0,0,7.1l21,21L1.6,50.7A4.83,4.83,0,0,0,1.6,57.7Z"/></svg>\');mask-image:url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.1 59.2"><path d="M1.6,57.7a5,5,0,0,0,3.5,1.5,4.85,4.85,0,0,0,3.5-1.5l21-21,21,21a5,5,0,0,0,3.5,1.5,4.85,4.85,0,0,0,3.5-1.5,5,5,0,0,0,0-7.1l-21-21,21-21a5,5,0,0,0,0-7.1,5,5,0,0,0-7.1,0l-21,21L8.6,1.7a5,5,0,0,0-7.1,0,5,5,0,0,0,0,7.1l21,21L1.6,50.7A4.83,4.83,0,0,0,1.6,57.7Z"/></svg>\');-webkit-mask-size:.6em;mask-size:.6em;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;cursor:pointer;position:absolute;right:.75em;z-index:1;transition:transform .25s}@media(pointer:fine){.formulate-input[data-classification=file] .formulate-files .formulate-file-remove:hover{transform:scale(1.5)}}.formulate-input[data-classification=file] .formulate-files li{display:block}.formulate-input[data-classification=file] .formulate-files li[data-has-error] .formulate-file-progress{background-color:#dc2c2c}.formulate-input[data-classification=file] .formulate-files li[data-has-preview] .formulate-file-name:before{display:none}.formulate-input[data-classification=file] .formulate-files li+li{margin-top:.5em}.formulate-input[data-classification=file] .formulate-files .formulate-file{-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:.3em;border:1px solid #cecece;box-sizing:border-box;background-color:transparent;font-size:.9em;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";padding:.75em;display:block;font-weight:400;line-height:1.2em;margin:0;width:100%;display:flex;justify-content:space-between;align-items:center;position:relative}.formulate-input[data-classification=file] .formulate-files .formulate-file::-moz-placeholder{color:#a8a8a8;line-height:normal}.formulate-input[data-classification=file] .formulate-files .formulate-file::placeholder{color:#a8a8a8;line-height:normal}.formulate-input[data-classification=file] .formulate-files .formulate-file:focus{outline:0;border:1px solid #2196f3}.formulate-input[data-classification=file] .formulate-files .formulate-file ::-webkit-progress-bar{-webkit-appearance:none;appearance:none;height:.5em;border-radius:.5em;overflow:hidden}.formulate-input[data-classification=file] .formulate-files .formulate-file-image-preview{width:3em;height:3em;flex:0 0 3em;position:relative;z-index:2;left:-1px;box-shadow:0 0 0 1px #efefef;transition:transform .25s,box-shadow .25s,background-color .25s}@media(pointer:fine){.formulate-input[data-classification=file] .formulate-files .formulate-file-image-preview:hover{transition-delay:.2s;transform:scale(3);background-color:#fff;box-shadow:0 0 2px 0 rgba(0,0,0,.1)}}.formulate-input[data-classification=file] .formulate-files .formulate-file-image-preview img{display:block;position:absolute;width:100%;height:100%;left:0;right:0;bottom:0;top:0;-o-object-fit:contain;object-fit:contain;transition:all .25s}.formulate-input[data-classification=file] [data-type=image] .formulate-input-upload-area .formulate-input-upload-area-mask:before{-webkit-mask-image:url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 71.05"><path d="M82.89,0H7.1A7.12,7.12,0,0,0,0,7.11V64a7.11,7.11,0,0,0,7.1,7.1H82.9A7.11,7.11,0,0,0,90,64V7.11A7.12,7.12,0,0,0,82.89,0ZM69.28,39.35a5.44,5.44,0,0,0-8,0L50.58,50.74,32.38,30.88a5.31,5.31,0,0,0-7.92,0L4.74,52.4V7.11A2.37,2.37,0,0,1,7.11,4.74H82.9a2.37,2.37,0,0,1,2.36,2.37V56.3Z"/><circle cx="67.74" cy="22.26" r="8.53"/></svg>\');mask-image:url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 71.05"><path d="M82.89,0H7.1A7.12,7.12,0,0,0,0,7.11V64a7.11,7.11,0,0,0,7.1,7.1H82.9A7.11,7.11,0,0,0,90,64V7.11A7.12,7.12,0,0,0,82.89,0ZM69.28,39.35a5.44,5.44,0,0,0-8,0L50.58,50.74,32.38,30.88a5.31,5.31,0,0,0-7.92,0L4.74,52.4V7.11A2.37,2.37,0,0,1,7.11,4.74H82.9a2.37,2.37,0,0,1,2.36,2.37V56.3Z"/><circle cx="67.74" cy="22.26" r="8.53"/></svg>\')}.formulate-form-errors{margin:.75em 0;padding:0;list-style-type:none}.formulate-form-errors:first-child{margin-top:0}.formulate-form-errors:last-child{margin-bottom:0}.formulate-form-errors .formulate-form-error{color:#960505;font-size:.9em;font-weight:300;line-height:1.5;margin-bottom:.25em}.formulate-form .formulate-input{width:100%!important}.formulate-form .formulate-input .formulate-input-wrapper .formulate-input-label{display:inline}.formulate-form .formulate-input .formulate-input-wrapper .formulate-input-element{max-width:100%}',""]),e.exports=l}}]);