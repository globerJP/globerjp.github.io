(window.webpackJsonp=window.webpackJsonp||[]).push([[61,21,37,48],{1069:function(e,t,n){"use strict";n.r(t);var r=n(578),o=n(120),l=n(369),c=n(548),d=n(617),y=n(368),h=n(710),m=n(172),v=n(21),f=(n(61),n(70),n(44),n(34),n(17),n(373),n(55),n(581)),S={middleware:"auth",components:{Spinner:n(551).default},layout:"default",name:"profile",data:function(){return{success:null,error:null,valid:!1,firstName:"",lastName:"",email:"",university:"",country:"",degree:"",major:"",expectedGraduationYear:"",expectedGraduationYears:(e=(new Date).getFullYear(),Array.from({length:12},(function(t,i){return i+e}))),majorRules:[],emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)||"E-mail must be valid"}],nameRules:[function(e){return!!e||"Name is required"},function(e){return!!e&&e.length<=20||"Name must be less than 20 characters"}],countries:f.countries,degrees:f.degrees,universities:f.universities,majors:f.majors};var e},asyncData:function(e){var t=this;return Object(v.a)(regeneratorRuntime.mark((function n(){var r,o,l,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.store,o=e.$fire,n.next=3,o.firestore.collection("users").doc(r.state.authUser.uid).get();case 3:if(l=n.sent,c={},!l.exists){n.next=9;break}c=l.data(),n.next=18;break;case 9:return n.prev=9,c={email:r.state.authUser.email,country:"",expectedGraduationYear:"",firstName:"",lastName:"",major:"",university:"",degree:""},n.next=13,o.firestore.collection("users").doc(r.state.authUser.uid).set(c);case 13:n.next=18;break;case 15:n.prev=15,n.t0=n.catch(9),t.error="Could not set user information";case 18:if(!c||0!==Object.keys(c).length||Object.getPrototypeOf(c)!==Object.prototype){n.next=20;break}return n.abrupt("return",{email:"",country:"",expectedGraduationYear:"",firstName:"",lastName:"",major:"",university:"",degree:""});case 20:return n.abrupt("return",{email:c.email,country:c.country,expectedGraduationYear:c.expectedGraduationYear,firstName:c.firstName,lastName:c.lastName,major:c.major,university:c.university,degree:c.degree});case 21:case"end":return n.stop()}}),n,null,[[9,15]])})))()},methods:{validateSubmit:function(){var e=this;return Object(v.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$refs.form.validate()){t.next=11;break}return t.prev=2,data={email:e.email,country:e.country,expectedGraduationYear:e.expectedGraduationYear,firstName:e.firstName,lastName:e.lastName,major:e.major,university:e.university,degree:e.degree},t.next=6,e.$fire.firestore.collection("users").doc(e.user.uid).update(data).then((function(){e.success="Successfully updated!!",setTimeout((function(){e.success=null}),2e3)}));case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),e.error="Could not set user information";case 11:e.$refs.form.validate();case 12:case"end":return t.stop()}}),t,null,[[2,8]])})))()},reset:function(){this.$refs.form.reset()},resetValidation:function(){this.$refs.form.resetValidation()}},computed:{user:function(){return this.$store.state.authUser}}},U=n(65),component=Object(U.a)(S,(function(){var e=this,t=e._self._c;return t("div",[e.user?t(c.a,[t(r.a,{staticStyle:{position:"fixed",left:"50%","z-index":"100",bottom:"50px",transform:"translate(-50%, -50%)",margin:"0 auto"},attrs:{type:"success",value:!!e.success}},[e._v(e._s(e.success))]),e._v(" "),t(d.a,{ref:"form",staticClass:"pt-30",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t(c.a,{staticStyle:{"max-width":"800px"}},[t(y.a,[t(l.a,{attrs:{cols:"12",md:"6",sm:"12"}},[t(m.a,{attrs:{rules:e.nameRules,label:"First Name",required:""},model:{value:e.firstName,callback:function(t){e.firstName=t},expression:"firstName"}})],1),e._v(" "),t(l.a,{attrs:{cols:"12",md:"6",sm:"12"}},[t(m.a,{attrs:{rules:e.nameRules,label:"Last Name",required:""},model:{value:e.lastName,callback:function(t){e.lastName=t},expression:"lastName"}})],1),e._v(" "),t(l.a,{attrs:{cols:"12",md:"6",sm:"12"}},[t(m.a,{attrs:{disabled:"",label:"E-mail",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),e._v(" "),t(l.a,{attrs:{cols:"12",md:"6",sm:"12"}},[t(h.a,{attrs:{items:e.countries,label:"Country"},model:{value:e.country,callback:function(t){e.country=t},expression:"country"}})],1),e._v(" "),t(l.a,{attrs:{cols:"12",md:"6",sm:"12"}},[t(m.a,{attrs:{label:"University"},model:{value:e.university,callback:function(t){e.university=t},expression:"university"}})],1),e._v(" "),t(l.a,{attrs:{cols:"12",md:"6",sm:"12"}},[t(h.a,{attrs:{items:e.degrees,label:"Pursuing Degree"},model:{value:e.degree,callback:function(t){e.degree=t},expression:"degree"}})],1),e._v(" "),t(l.a,{attrs:{cols:"12",md:"6",sm:"12"}},[t(h.a,{attrs:{items:e.expectedGraduationYears,label:"Expected Year of Graduation"},model:{value:e.expectedGraduationYear,callback:function(t){e.expectedGraduationYear=t},expression:"expectedGraduationYear"}})],1),e._v(" "),t(l.a,{attrs:{cols:"12",md:"6",sm:"12"}},[t(h.a,{attrs:{items:e.majors,label:"Major"},model:{value:e.major,callback:function(t){e.major=t},expression:"major"}})],1),e._v(" "),t(l.a,{attrs:{cols:"12",md:"6",sm:"6"}},[t(o.a,{staticClass:"mr-4",attrs:{disabled:!e.valid,color:"blue accent--text"},on:{click:e.validateSubmit}},[e._v("\n                Save\n              ")])],1),e._v(" "),t(l.a,{staticClass:"d-flex justify-md-end justify-sm-end",attrs:{cols:"12",md:"6",sm:"6"}},[t(o.a,{attrs:{color:"white primary--text","nuxt-link":"",to:"/dashboard"}},[e._v("\n                Go back\n              ")])],1)],1)],1)],1)],1):t("Spinner",{attrs:{color:"white"}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Spinner:n(557).default})},549:function(e,t,n){var content=n(553);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("6333d4fe",content,!0,{sourceMap:!1})},550:function(e,t,n){var content=n(555);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("1a30734a",content,!0,{sourceMap:!1})},551:function(e,t,n){"use strict";n.r(t);var r={name:"LoadingSpinner"},o=(n(552),n(65)),component=Object(o.a)(r,(function(){this._self._c;return this._m(0)}),[function(){var e=this._self._c;return e("div",{staticClass:"text-center",staticStyle:{"margin-top":"10px"}},[e("div",{staticClass:"lds-ring"},[e("div"),e("div"),e("div"),e("div")])])}],!1,null,"6f49ae7c",null);t.default=component.exports},552:function(e,t,n){"use strict";n(549)},553:function(e,t,n){var r=n(25)(!1);r.push([e.i,".lds-ring[data-v-6f49ae7c]{display:inline-block;position:relative;width:80px;height:80px}.lds-ring div[data-v-6f49ae7c]{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:5px;border-radius:50%;-webkit-animation:lds-ring-6f49ae7c 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:lds-ring-6f49ae7c 1.2s cubic-bezier(.5,0,.5,1) infinite;border:5px solid transparent;border-top-color:#2196f3}.lds-ring div[data-v-6f49ae7c]:first-child{-webkit-animation-delay:-.45s;animation-delay:-.45s}.lds-ring div[data-v-6f49ae7c]:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.lds-ring div[data-v-6f49ae7c]:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}@-webkit-keyframes lds-ring-6f49ae7c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes lds-ring-6f49ae7c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""]),e.exports=r},554:function(e,t,n){"use strict";n(550)},555:function(e,t,n){var r=n(25)(!1);r.push([e.i,".spinner[data-v-b799d304]{display:flex;justify-content:center;margin-top:1rem;color:#add8e6}",""]),e.exports=r},557:function(e,t,n){"use strict";n.r(t);var r=n(246),o={},l=(n(554),n(65)),component=Object(l.a)(o,(function(){var e=this._self._c;return e("div",{staticClass:"spinner"},[e(r.a,{attrs:{size:"100",indeterminate:""}})],1)}),[],!1,null,"b799d304",null);t.default=component.exports},561:function(e,t,n){"use strict";var r=n(38),o=n(113),l=n(63),c=n(71),d=n(267);r&&(d(Array.prototype,"lastItem",{configurable:!0,get:function(){var e=l(this),t=c(e);return 0==t?void 0:e[t-1]},set:function(e){var t=l(this),n=c(t);return t[0==n?0:n-1]=e}}),o("lastItem"))},564:function(e,t,n){var content=n(565);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("5db1c400",content,!0,{sourceMap:!1})},565:function(e,t,n){var r=n(25)(!1);r.push([e.i,'.disable-tap-zoom,body{touch-action:manipulation!important}.xxx-enter-active{transition:opacity .3s ease-in-out}.xxx-leave-active{transition:none}.xxx-enter,.xxx-leave,.xxx-leave-to{opacity:0}.xxx-enter-to{opacity:1}.theme--light.v-alert .v-alert--prominent .v-alert__icon:after{background:rgba(0,0,0,.12)}.theme--dark.v-alert .v-alert--prominent .v-alert__icon:after{background:hsla(0,0%,100%,.12)}.v-sheet.v-alert{border-radius:4px}.v-sheet.v-alert:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-alert.v-sheet--shaped{border-radius:24px 4px}.v-alert{display:block;font-size:16px;margin-bottom:16px;padding:16px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-alert:not(.v-sheet--tile){border-radius:4px}.v-application--is-ltr .v-alert>.v-alert__content,.v-application--is-ltr .v-alert>.v-icon{margin-right:16px}.v-application--is-rtl .v-alert>.v-alert__content,.v-application--is-rtl .v-alert>.v-icon{margin-left:16px}.v-application--is-ltr .v-alert>.v-icon+.v-alert__content{margin-right:0}.v-application--is-rtl .v-alert>.v-icon+.v-alert__content{margin-left:0}.v-application--is-ltr .v-alert>.v-alert__content+.v-icon{margin-right:0}.v-application--is-rtl .v-alert>.v-alert__content+.v-icon{margin-left:0}.v-alert__border{border-style:solid;border-width:4px;content:"";position:absolute}.v-alert__border:not(.v-alert__border--has-color){opacity:.26}.v-alert__border--left,.v-alert__border--right{bottom:0;top:0}.v-alert__border--bottom,.v-alert__border--top{left:0;right:0}.v-alert__border--bottom{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;bottom:0}.v-application--is-ltr .v-alert__border--left{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-application--is-ltr .v-alert__border--right,.v-application--is-rtl .v-alert__border--left{border-top-right-radius:inherit;border-bottom-right-radius:inherit;right:0}.v-application--is-rtl .v-alert__border--right{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-alert__border--top{border-top-left-radius:inherit;border-top-right-radius:inherit;top:0}.v-alert__content{flex:1 1 auto}.v-application--is-ltr .v-alert__dismissible{margin:-16px -8px -16px 8px}.v-application--is-rtl .v-alert__dismissible{margin:-16px 8px -16px -8px}.v-alert__icon{align-self:flex-start;border-radius:50%;height:24px;min-width:24px;position:relative}.v-application--is-ltr .v-alert__icon{margin-right:16px}.v-application--is-rtl .v-alert__icon{margin-left:16px}.v-alert__icon.v-icon{font-size:24px}.v-alert__wrapper{align-items:center;border-radius:inherit;display:flex}.v-application--is-ltr .v-alert--border.v-alert--prominent .v-alert__icon{margin-left:8px}.v-application--is-rtl .v-alert--border.v-alert--prominent .v-alert__icon{margin-right:8px}.v-alert--dense{padding-top:8px;padding-bottom:8px}.v-alert--dense .v-alert__border{border-width:medium}.v-alert--outlined{background:transparent!important;border:thin solid!important}.v-alert--outlined .v-alert__icon{color:inherit!important}.v-alert--prominent .v-alert__icon{align-self:center;height:48px;min-width:48px}.v-alert--prominent .v-alert__icon.v-icon{font-size:32px}.v-alert--prominent .v-alert__icon.v-icon:after{background:currentColor!important;border-radius:50%;bottom:0;content:"";left:0;opacity:.16;position:absolute;right:0;top:0}.v-alert--prominent.v-alert--dense .v-alert__icon.v-icon:after{transform:scale(1)}.v-alert--text{background:transparent!important}.v-alert--text:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;position:absolute;pointer-events:none;right:0;top:0}',""]),e.exports=r},578:function(e,t,n){"use strict";n(17),n(15),n(16),n(8),n(22),n(14),n(23);var r=n(2),o=(n(40),n(564),n(123)),l=n(122),c=n(82),d=n(100),y=n(27),h=n(1).default.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),m=n(9),v=n(12);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function S(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(m.a)(o.a,d.a,h).extend({name:"v-alert",props:{border:{type:String,validator:function(e){return["top","right","bottom","left"].includes(e)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(e){return"string"==typeof e||!1===e}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(e){return["info","error","success","warning"].includes(e)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var data={staticClass:"v-alert__border",class:Object(r.a)({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&((data=this.setBackgroundColor(this.computedColor,data)).class["v-alert__border--has-color"]=!0),this.$createElement("div",data)},__cachedDismissible:function(){var e=this;if(!this.dismissible)return null;var t=this.iconColor;return this.$createElement(l.a,{staticClass:"v-alert__dismissible",props:{color:t,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return e.isActive=!1}}},[this.$createElement(c.a,{props:{color:t}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(c.a,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var e=S(S({},o.a.options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(e["v-alert--border-".concat(this.border)]=!0),e},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"==typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||y.a.options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(v.a)("outline","outlined",this)},methods:{genWrapper:function(){var e=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible];return this.$createElement("div",{staticClass:"v-alert__wrapper"},e)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var data={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};this.coloredBorder||(data=(this.hasText?this.setTextColor:this.setBackgroundColor)(this.computedColor,data));return this.$createElement("div",data,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(e){var t=this.genAlert();return this.transition?e("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[t]):t}})},581:function(e){e.exports=JSON.parse('{"countries":["Afghanistan","Aland Islands","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bangladesh","Barbados","Bahamas","Bahrain","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","British Indian Ocean Territory","British Virgin Islands","Brunei Darussalam","Bulgaria","Burkina Faso","Burma","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo-Brazzaville","Congo-Kinshasa","Cook Islands","Costa Rica","Croatia","Curaçao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","East Timor","Ecuador","El Salvador","Egypt","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Federated States of Micronesia","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Lands","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard and McDonald Islands","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nauru","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn Islands","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Barthelemy","Saint Helena","Saint Kitts and Nevis","Saint Lucia","Saint Martin","Saint Pierre and Miquelon","Saint Vincent","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia","South Korea","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen","Sweden","Swaziland","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Vatican City","Vietnam","Venezuela","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe"],"degrees":["Professional Certificate","Transfer Degree","Associate Degree","Bachelor Degree","Master Degree","Doctoral Degree","Professional Degree","Specialist Degree"],"majors":["Accounting","Acting","Actuarial Science","Advertising","Aerospace Engineering","Agriculture","Anatomy","Animation and Special Effects","Anime","Anthropology","Arabic","Archeology","Architecture","Art","Artificial Intelligence","Astronomy","Astrophysics","Athletics","Atmospheric Science","Automotive Engineering","Aviation","Bakery Science","Biochemistry","Bioethics","Biology","Biomedical Science","Biotechnology","Botany","Business Administration/Management","Business Communications","Business Education","Cell Biology","Ceramic Engineering","Ceramics","Chemical Engineering","Chemistry","Child Care","Chinese","Chiropractic","Cinematography","Civil Engineering","Classics","Computer Science","Computer Graphics","Construction Management","Counseling","Crafts","Creative Writing","Criminal Science","Criminology","Culinary Arts","Dance","Dentistry","Dietetics","Drawing","Ecology","Economics","Education","Electrical Engineering","Engineering","English","Entomology","Entrepreneurship","Environmental Science","Epidemiology","Fashion Design","Finance","Floriculture","Food Science","Forensic Science","Forestry","French","Furniture Design","Game Design","Game Development","Genetics","Geography","Geology","German","Gerontology","Government","Graphic Design","Health Administration","History","Horticulture","Hotel Management","Human Resources Management","Illustration","Industrial Design","Industrial Engineering","Industrial Management","Information Technology","Interior Design","International Relations","International Studies","Italian","Japanese","Jazz","Jewelry and Metalsmithing","Journalism","Kinesiology","Korean","Languages","Law","Literature","Linguistics","Logistics","Manga","Marine Biology","Marine Science","Marketing","Massage Therapy","Materials Science","Mathematics","Mechanical Engineering","Medical Science","Medicine","Mental Health","Metallurgical Engineering","Microbiology","Military Science","Mineral Engineering","Molecular Biology","Molecular Genetics","Movies","Museum","Music","Natural Resources Conservation","Neuroscience","Nuclear Engineering","Nursing","Nutritional Science","Ocean Engineering","Oceanography","Operations Management","Painting","Paleontology","Pathology","Petroleum Engineering","Pharmacy","Philosophy","Photography","Physical Education","Physics","Planetary Science","Playwriting and Screenwriting","Political Science","Portuguese","Printmaking","Psychology","Public Administration","Public Health","Public Policy Analysis","Public Relations","Real Estate","Religious Studies","Risk Management","Robotics","Russian","Sculpture","Sign Language","Sociology","Spanish","Sports","Statistics","Textile Engineering","Theatre","Theology","Therapy","Tourism","Toxicology","Travelling","Urban Planning","Urban Studies","Veterinary","Web Design","Web Development","Wildlife Management","Women\'s Studies","Writing","Zoology"],"majors2":["Accounting","Actuarial Science","Advertising Major","Aerospace Engineering","African Languages, Literatures, and Linguistics","African Studies","African-American Studies","Agricultural Business and Management","Agricultural Economics","Agricultural Education","Agricultural Journalism","Agricultural Mechanization Major","Agricultural Technology Management","Agricultural/Biological Engineering and Bioengineering","Agriculture","Agronomy and Crop Science","Air Traffic Control","American History","American Literature","American Sign Language","American Studies","Anatomy","Ancient Studies","Animal Behavior and Ethology","Animal Science","Animation and Special Effects","Anthropology","Applied Mathematics","Aquaculture","Aquatic Biology","Arabic","Archeology","Architectural Engineering","Architectural History","Architecture","Art","Art Education","Art History","Art Therapy","Artificial Intelligence","Asian-American Studies","Astronomy","Astrophysics","Athletic Training","Atmospheric Science","Automotive Engineering","Aviation","Bakery Science","Biblical Studies","Biochemistry","Bioethics","Biology","Biomedical Engineering","Biomedical Science","Biopsychology","Biotechnology","Botany/Plant Biology","Business Administration/Management","Business Communications","Business Education","Canadian Studies","Caribbean Studies","Cell Biology Major","Ceramic Engineering","Ceramics","Chemical Engineering Major","Chemical Physics","Chemistry Major","Child Care","Child Development","Chinese","Chiropractic","Church Music","Cinematography","Circulation Technology","Civil Engineering","Classics","Communication Disorders","Communications Studies/Speech Communication and Rhetoric","Comparative Literature","Computer and Information Science","Computer Engineering","Computer Graphics","Computer Systems Analysis Major","Construction Management","Counseling","Crafts","Criminal Science","Criminology","Culinary Arts","Dance","Data Processing","Dental Hygiene","Diagnostic Medical Sonography","Dietetics","Digital Communications and Media/Multimedia","Drawing","Early Childhood Education","East Asian Studies","East European Studies","Ecology","Economics Major","Education","Education Administration","Education of the Deaf","Electrical Engineering","Elementary Education","English","English Composition","English Literature Major","Entomology","Entrepreneurship Major","Environmental Design/Architecture","Environmental Science","Environmental/Environmental Health Engineering","Epidemiology","Equine Studies","Ethnic Studies","European History","Experimental Pathology","Experimental Psychology","Fashion Design","Fashion Merchandising","Feed Science","Fiber, Textiles, and Weaving Arts","Film","Finance","Floriculture","Food Science","Forensic Science","Forestry","French","Furniture Design","Game Design","Gay and Lesbian Studies","Genetics","Geography","Geological Engineering","Geology","Geophysics","German","Gerontology","Government Major","Graphic Design","Health Administration","Hebrew","Hispanic-American, Puerto Rican, and Chicano Studies","Historic Preservation","History","Home Economics","Horticulture","Hospitality","Human Development","Human Resources Management Major","Illustration","Industrial Design","Industrial Engineering","Industrial Management","Industrial Psychology","Information Technology","Interior Architecture","Interior Design","International Agriculture","International Business","International Relations","International Studies","Islamic Studies","Italian","Japanese","Jazz Studies","Jewelry and Metalsmithing","Jewish Studies","Journalism","Kinesiology","Korean","Land Use Planning and Management","Landscape Architecture","Landscape Horticulture","Latin American Studies","Library Science","Linguistics","Logistics Management","Management Information Systems","Managerial Economics","Marine Biology Major","Marine Science","Marketing Major","Mass Communication","Massage Therapy","Materials Science","Mathematics","Mechanical Engineering","Medical Technology","Medieval and Renaissance Studies","Mental Health Services","Merchandising and Buying Operations","Metallurgical Engineering","Microbiology","Middle Eastern Studies","Military Science","Mineral Engineering","Missions","Modern Greek","Molecular Biology","Molecular Genetics","Mortuary Science","Museum Studies","Music","Music Education","Music History Major","Music Management","Music Therapy","Musical Theater","Native American Studies","Natural Resources Conservation","Naval Architecture","Neurobiology","Neuroscience","Nuclear Engineering","Nursing Major","Nutrition","Occupational Therapy","Ocean Engineering","Oceanography","Operations Management","Organizational Behavior Studies","Painting","Paleontology","Pastoral Studies","Peace Studies","Petroleum Engineering","Pharmacology","Pharmacy","Philosophy","Photography","Photojournalism Major","Physical Education","Physical Therapy","Physician Assistant","Physics","Physiological Psychology","Piano","Planetary Science","Plant Pathology","Playwriting and Screenwriting","Political Communication","Political Science Major","Portuguese","Pre-Dentistry","Pre-Law","Pre-Medicine","Pre-Optometry","Pre-Seminary","Pre-Veterinary Medicine","Printmaking","Psychology","Public Administration","Public Health","Public Policy Analysis","Public Relations Major","Radio and Television","Radiologic Technology","Range Science and Management","Real Estate","Recording Arts Technology","Recreation Management","Rehabilitation Services","Religious Studies","Respiratory Therapy","Risk Management","Rural Sociology","Russian","Scandinavian Studies","Sculpture","Slavic Languages and Literatures","Social Psychology","Social Work","Sociology","Soil Science","Sound Engineering","South Asian Studies","Southeast Asia Studies","Spanish Major","Special Education","Speech Pathology","Sport and Leisure Studies","Sports Management","Statistics Major","Surveying","Sustainable Resource Management","Teacher Education","Teaching English as a Second Language","Technical Writing","Technology Education","Textile Engineering","Theatre","Theology","Tourism","Toxicology","Turfgrass Science","Urban Planning","Urban Studies","Video Production","Visual Communication","Voice","Web Design","Webmaster and Web Management","Welding Engineering","Wildlife Management","Women\'s Studies","Youth Ministries","Zoology"],"universities":["Advanced Institute of Industrial Technology","Aichi Prefectural University","Aichi University of Education","Aichi University of the Arts","Akita International University","Akita Prefectural University","Akita University of Art","Akita University","Aomori Public University","Aomori University of Health and Welfare","Asahikawa Medical University","Business Breakthrough University","Chiba Prefectural University of Health Sciences","Chiba University","Chitose Institute of Science and Technology","Cyber University","Digital Hollywood University","Ehime Prefectural University of Health Sciences","Ehime University","Eikei University of Hiroshima","Fukui Prefectural University","Fukuoka Prefectural University","Fukuoka Women\'s University","Fukushima Medical University","Fukushima University","Fukuyama City University","Future University Hakodate","Gifu City Women\'s College","Gifu College of Nursing","Gifu Pharmaceutical University","Gifu University","Gunma Prefectural College of Health Sciences","Gunma Prefectural Women\'s University","Gunma University","Hamamatsu University School of Medicine","Hirosaki University","Hiroshima City University","Hiroshima University","Hitotsubashi University","Hokkaido University","Hokkaido University of Education","Hyogo University of Teacher Education","Ibaraki Prefectural University of Health Sciences","Ibaraki University","Institute of Advanced Media Arts and Sciences","Ishikawa Prefectural Nursing University","Ishikawa Prefectural University","Iwate Prefectural University","Iwate Prefectural University, Miyako College","Iwate Prefectural University, Morioka Junior College","Iwate University","Japan Advanced Institute of Science and Technology","Joetsu University of Education","Kagawa Prefectural University of Health Sciences","Kagawa University","Kagoshima Prefectural College","Kagoshima University","Kanagawa University of Human Services","Kanazawa College of Art","Kanazawa University","Kawasaki City College of Nursing","Kitami Institute of Technology","Kobe City College Of Nursing","Kobe City University of Foreign Studies","Kobe University","Kochi University of Technology","Kochi University","Komatsu University","Kumamoto University","Kurashiki City College","Kushiro Public University of Economics","Kyoto City University of Arts","Kyoto Institute of Technology","Kyoto Prefectural University of Medicine","Kyoto Prefectural University","Kyoto University of Education","Kyoto University","Kyushu Dental University","Kyushu Institute of Technology","Kyushu University","LEC Graduate University","Maebashi Institute of Technology","Meio University","Mie Prefectural College of Nursing","Mie University","Miyagi University of Education","Miyagi University","Miyazaki Municipal University","Miyazaki Prefectural Nursing University","Muroran Institute of Technology","Nagano College of Nursing","Nagano University","Nagaoka Institute Of Design","Nagaoka University of Technology","Nagasaki University","Nagoya City University","Nagoya Institute of Technology","Nagoya University","Nara Institute of Science and Technology","Nara Medical University","Nara Prefectural University","Nara University of Education","Nara Women\'s University","Naruto University of Education","National Graduate Institute for Policy Studies","National Institute of Fitness and Sports in Kanoya","Nayoro City University","Niigata College of Nursing","Niigata University","Niimi University","Obihiro University of Agriculture and Veterinary Medicine","Ochanomizu University","Ohtsuki City College","Oita Prefectural College of Arts and Culture","Oita University of Nursing and Health Sciences","Oita University","Okayama Prefectural University","Okayama University","Okinawa Prefectural College of Nursing","Okinawa Prefectural University of Arts","Onomichi City University","Osaka City University","Osaka Kyoiku University","Osaka Prefecture University","Osaka University","Otaru University of Commerce","Prefectural University of Hiroshima","Prefectural University of Kumamoto","Professional College of Arts and Tourism","Saga University","Saitama Prefectural University","Saitama University","Sanjo City University","Sanyo-Onoda City University","Sapporo City University","Sapporo Medical University","Shiga University of Medical Science","Shiga University","Shimane University","Shimonoseki City University","Shinshu University","Shizuoka Graduate University of Public Health","Shizuoka Professional Junior College of Agriculture","Shizuoka Professional University of Agriculture","Shizuoka University of Art and Culture","Shizuoka University","Suwa University of Science","Takasaki City University of Economics","The Graduate University for Advanced Studies","The University of Aizu","The University of Aizu, Junior College Division","The University of Electro-Communications","The University of Fukuchiyama","The University of Kitakyushu","The University of Nagano","The University of Shiga Prefecture","The University of Shimane Junior College","The University of Shimane","The University of Tokyo","Tohoku University","Tokushima University","Tokyo Gakugei University","Tokyo Institute of Technology","Tokyo Medical and Dental University","Tokyo Metropolitan University","Tokyo University of Agriculture and Technology","Tokyo University of Foreign Studies","Tokyo University of Marine Science and Technology","Tokyo University of the Arts","Tottori University of Environmental Studies","Tottori University","Toyama Prefectural University","Toyohashi University of Technology","Tsu City College","Tsukuba University of Technology","Tsuru University","Tsuruga Nursing University","University of Fukui","University of Hyogo","University of Kochi","University of Miyazaki","University of Nagasaki","University of Niigata Prefecture","University of Shizuoka","University of Shizuoka, Junior College","University of Teacher Education Fukuoka","University of Toyama","University of Tsukuba","University of Yamanashi","University of the Ryukyus","Utsunomiya University","Wakayama Medical University","Wakayama University","Yamagata Prefectural University of Health Sciences","Yamagata Prefectural Yonezawa University of Nutrition Sciences","Yamagata Prefectural Yonezawa Women\'s Junior College","Yamagata University","Yamaguchi Prefectural University","Yamaguchi University","Yamanashi Prefectural University","Yokohama City University","Yokohama National University"]}')},617:function(e,t,n){"use strict";var r=n(2),o=(n(40),n(62),n(268),n(16),n(8),n(14),n(55),n(112),n(17),n(15),n(22),n(23),n(9)),l=n(129),c=n(171);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function y(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var e=this,t=function(input){return input.$watch("hasError",(function(t){e.$set(e.errorBag,input._uid,t)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(e.errorBag.hasOwnProperty(input._uid)||(n.valid=t(input)))})):n.valid=t(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var e=this.inputs.find((function(i){return i._uid===input._uid}));if(e){var t=this.watchers.find((function(i){return i._uid===e._uid}));t&&(t.valid(),t.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==e._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:y({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})}}]);