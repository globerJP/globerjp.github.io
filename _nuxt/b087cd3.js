(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{547:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"c",(function(){return v})),n.d(e,"b",(function(){return m})),n.d(e,"d",(function(){return y})),n.d(e,"o",(function(){return T})),n.d(e,"m",(function(){return x})),n.d(e,"n",(function(){return _})),n.d(e,"l",(function(){return w})),n.d(e,"E",(function(){return D})),n.d(e,"u",(function(){return k})),n.d(e,"F",(function(){return O})),n.d(e,"v",(function(){return E})),n.d(e,"t",(function(){return C})),n.d(e,"k",(function(){return A})),n.d(e,"p",(function(){return M})),n.d(e,"C",(function(){return j})),n.d(e,"r",(function(){return F})),n.d(e,"A",(function(){return $})),n.d(e,"B",(function(){return H})),n.d(e,"D",(function(){return Y})),n.d(e,"z",(function(){return z})),n.d(e,"i",(function(){return S})),n.d(e,"e",(function(){return L})),n.d(e,"s",(function(){return B})),n.d(e,"w",(function(){return J})),n.d(e,"x",(function(){return N})),n.d(e,"j",(function(){return K})),n.d(e,"q",(function(){return U})),n.d(e,"y",(function(){return Z})),n.d(e,"f",(function(){return X})),n.d(e,"g",(function(){return G})),n.d(e,"h",(function(){return Q}));var r=n(11),o=(n(34),n(36),n(583)),c=/^(\d{4})-(\d{1,2})(-(\d{1,2}))?([^\d]+(\d{1,2}))?(:(\d{1,2}))?(:(\d{1,2}))?$/,l=/(\d\d?)(:(\d\d?)|)(:(\d\d?)|)/,d=[0,31,28,31,30,31,30,31,31,30,31,30,31],h=[0,31,29,31,30,31,30,31,31,30,31,30,31],f=31,v=1,m=7,y=1440;function T(t,e,n){var r=L(t);return R(r,e[0],J),z(r),n&&j(r,n,r.hasTime),r}function x(t,e,n){var r=L(t);return R(r,e[e.length-1]),z(r),n&&j(r,n,r.hasTime),r}function _(t){var e=L(t);return e.day=v,Y(e),z(e),e}function w(t){var e=L(t);return e.day=S(e.year,e.month),Y(e),z(e),e}function D(input){return"number"==typeof input&&isFinite(input)||!!l.exec(input)||"object"===Object(r.a)(input)&&isFinite(input.hour)&&isFinite(input.minute)}function k(input){if("number"==typeof input)return input;if("string"==typeof input){var t=l.exec(input);return!!t&&60*parseInt(t[1])+parseInt(t[3]||0)}return"object"===Object(r.a)(input)&&("number"==typeof input.hour&&"number"==typeof input.minute&&60*input.hour+input.minute)}function O(input){return"number"==typeof input&&isFinite(input)||"string"==typeof input&&!!c.exec(input)||input instanceof Date}function E(input){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=arguments.length>2?arguments[2]:void 0;if("number"==typeof input&&isFinite(input)&&(input=new Date(input)),input instanceof Date){var n=C(input);return e&&j(n,e,n.hasTime),n}if("string"!=typeof input){if(t)throw new Error("".concat(input," is not a valid timestamp. It must be a Date, number of milliseconds since Epoch, or a string in the format of YYYY-MM-DD or YYYY-MM-DD hh:mm. Zero-padding is optional and seconds are ignored."));return null}var r=c.exec(input);if(!r){if(t)throw new Error("".concat(input," is not a valid timestamp. It must be a Date, number of milliseconds since Epoch, or a string in the format of YYYY-MM-DD or YYYY-MM-DD hh:mm. Zero-padding is optional and seconds are ignored."));return null}var o={date:input,time:"",year:parseInt(r[1]),month:parseInt(r[2]),day:parseInt(r[4])||1,hour:parseInt(r[6])||0,minute:parseInt(r[8])||0,weekday:0,hasDay:!!r[4],hasTime:!(!r[6]||!r[8]),past:!1,present:!1,future:!1};return Y(o),z(o),e&&j(o,e,o.hasTime),o}function C(t){return z({date:"",time:"",year:t.getFullYear(),month:t.getMonth()+1,day:t.getDate(),weekday:t.getDay(),hour:t.getHours(),minute:t.getMinutes(),hasDay:!0,hasTime:!0,past:!1,present:!0,future:!1})}function A(t){return 1e4*t.year+100*t.month+t.day}function I(t){return 100*t.hour+t.minute}function M(t){return 1e4*A(t)+I(t)}function j(t,e){var time=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=A(e),b=A(t),n=a===b;return t.hasTime&&time&&n&&(n=(a=I(e))===(b=I(t))),t.past=b<a,t.present=n,t.future=b>a,t}function F(input){return input instanceof Date||"number"==typeof input&&isFinite(input)}function $(t,e,n){return t.hasTime!==e&&(t.hasTime=e,e||(t.hour=23,t.minute=59,t.time=W(t)),n&&j(t,n,t.hasTime)),t}function H(t,e,n){return t.hasTime=!0,t.hour=Math.floor(e/60),t.minute=e%60,t.time=W(t),n&&j(t,n,!0),t}function Y(t){return t.weekday=function(t){if(t.hasDay){var e=Math.floor,n=t.day,r=(t.month+9)%12+1,o=e(t.year/100),c=t.year%100-(t.month<=2?1:0);return((n+e(2.6*r-.2)-2*o+c+e(c/4)+e(o/4))%7+7)%7}return t.weekday}(t),t}function z(t){return t.time=W(t),t.date=function(t){var e="".concat(P(t.year,4),"-").concat(P(t.month,2));t.hasDay&&(e+="-".concat(P(t.day,2)));return e}(t),t}function S(t,e){return Object(o.a)(t)?h[e]:d[e]}function L(t){return{date:t.date,time:t.time,year:t.year,month:t.month,day:t.day,weekday:t.weekday,hour:t.hour,minute:t.minute,hasDay:t.hasDay,hasTime:t.hasTime,past:t.past,present:t.present,future:t.future}}function P(t,e){for(var n=String(t);n.length<e;)n="0"+n;return n}function W(t){return t.hasTime?"".concat(P(t.hour,2),":").concat(P(t.minute,2)):""}function B(t){return t.day++,t.weekday=(t.weekday+1)%m,t.day>28&&t.day>S(t.year,t.month)&&(t.day=v,t.month++,t.month>12&&(t.month=1,t.year++)),t}function J(t){return t.day--,t.weekday=(t.weekday+6)%m,t.day<v&&(t.month--,t.month<1&&(t.year--,t.month=12),t.day=S(t.year,t.month)),t}function N(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:B,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;--n>=0;)e(t);return t}function K(t,e){return 525600*(e.year-t.year)+43800*(e.month-t.month)+1440*(e.day-t.day)+60*(e.hour-t.hour)+(e.minute-t.minute)}function R(t,e){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:B,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:6;t.weekday!==e&&--r>=0;)n(t);return t}function U(t){for(var e=[1,1,1,1,1,1,1],n=[0,0,0,0,0,0,0],i=0;i<t.length;i++)n[t[i]]=1;for(var r=0;r<m;r++){for(var o=1,c=1;c<m;c++){if(n[(r+c)%m])break;o++}e[r]=n[r]*o}return e}function Z(t){var time="".concat(P(t.hour,2),":").concat(P(t.minute,2)),e=t.date;return new Date("".concat(e,"T").concat(time,":00+00:00"))}function X(t,e,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:42,c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,l=A(e),d=[],h=L(t),f=0,v=f===l;if(l<A(t))throw new Error("End date is earlier than start date.");for(;(!v||d.length<c)&&d.length<o;)if(f=A(h),v=v||f===l,0!==r[h.weekday]){var m=L(h);z(m),j(m,n),d.push(m),h=N(h,B,r[h.weekday])}else h=B(h);if(!d.length)throw new Error("No dates found using specified start date, end date, and weekdays.");return d}function G(t,e,n,r,o){for(var c=[],i=0;i<r;i++){var l=e+i*n,d=L(t);c.push(H(d,l,o))}return c}function Q(t,e){return"undefined"==typeof Intl||void 0===Intl.DateTimeFormat?function(t,e){return""}:function(n,r){try{return new Intl.DateTimeFormat(t||void 0,e(n,r)).format(Z(n))}catch(t){return""}}}},576:function(t,e,n){"use strict";var r=n(2);e.a=r.a.extend({name:"localable",props:{locale:String},computed:{currentLocale:function(){return this.locale||this.$vuetify.lang.current}}})},583:function(t,e,n){"use strict";function r(t,e,n){var r=7+e-n,o=(7+function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return t<100&&t>=0?(e=new Date(Date.UTC(t,n,r)),isFinite(e.getUTCFullYear())&&e.setUTCFullYear(t)):e=new Date(Date.UTC(t,n,r)),e}(t,0,r).getUTCDay()-e)%7;return-o+r-1}function o(t,e,n){var o=r(t,e,n),c=r(t+1,e,n);return((l(t)?366:365)-o+c)/7}function c(t,e,n,c,d){var h=r(t,c,d),f=Math.ceil((function(t,e,n,r){var o=[0,31,59,90,120,151,181,212,243,273,304,334][e];return e>1&&l(t)&&o++,o+n}(t,e,n)-h)/7);return f<1?f+o(t-1,c,d):f>o(t,c,d)?f-o(t,c,d):f}function l(t){return t%4==0&&t%100!=0||t%400==0}n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return l}))},600:function(t,e,n){var content=n(646);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("3a3e8fd5",content,!0,{sourceMap:!1})},634:function(t,e,n){"use strict";n(18),n(16),n(17),n(22),n(15),n(23);var r=n(81),o=n(1),c=(n(31),n(111),n(7),n(70),n(43),n(36),n(92),n(55),n(38),n(62),n(635),n(522)),l=n(118),d=n(197),h=n(173),f=n(272),v=n(273),m=n(269),y=n(27),T=n(266),x=n(126),_=n(9),w=n(12),D=n(3),k=n(527);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function E(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var C=Object(_.a)(h.a,d.a,v.a,m.a,y.a,f.a);e.a=C.extend({name:"v-menu",directives:{ClickOutside:T.a,Resize:x.a},provide:function(){return{isInMenu:!0,theme:this.theme}},props:{auto:Boolean,closeOnClick:{type:Boolean,default:!0},closeOnContentClick:{type:Boolean,default:!0},disabled:Boolean,disableKeys:Boolean,maxHeight:{type:[Number,String],default:"auto"},offsetX:Boolean,offsetY:Boolean,openOnHover:Boolean,origin:{type:String,default:"top left"},transition:{type:[Boolean,String],default:"v-menu-transition"}},data:function(){return{calculatedTopAuto:0,defaultOffset:8,hasJustFocused:!1,listIndex:-1,resizeTimeout:0,selectedIndex:null,tiles:[]}},computed:{activeTile:function(){return this.tiles[this.listIndex]},calculatedLeft:function(){var t=Math.max(this.dimensions.content.width,parseFloat(this.calculatedMinWidth));return this.auto?Object(D.h)(this.calcXOverflow(this.calcLeftAuto(),t))||"0":this.calcLeft(t)||"0"},calculatedMaxHeight:function(){return(this.auto?"200px":Object(D.h)(this.maxHeight))||"0"},calculatedMaxWidth:function(){return Object(D.h)(this.maxWidth)||"0"},calculatedMinWidth:function(){if(this.minWidth)return Object(D.h)(this.minWidth)||"0";var t=Math.min(this.dimensions.activator.width+Number(this.nudgeWidth)+(this.auto?16:0),Math.max(this.pageWidth-24,0)),e=isNaN(parseInt(this.calculatedMaxWidth))?t:parseInt(this.calculatedMaxWidth);return Object(D.h)(Math.min(e,t))||"0"},calculatedTop:function(){return(this.auto?Object(D.h)(this.calcYOverflow(this.calculatedTopAuto)):this.calcTop())||"0"},hasClickableTiles:function(){return Boolean(this.tiles.find((function(t){return t.tabIndex>-1})))},styles:function(){return{maxHeight:this.calculatedMaxHeight,minWidth:this.calculatedMinWidth,maxWidth:this.calculatedMaxWidth,top:this.calculatedTop,left:this.calculatedLeft,transformOrigin:this.origin,zIndex:this.zIndex||this.activeZIndex}}},watch:{isActive:function(t){t||(this.listIndex=-1)},isContentActive:function(t){this.hasJustFocused=t},listIndex:function(t,e){if(t in this.tiles){var n=this.tiles[t];n.classList.add("v-list-item--highlighted");var r=this.$refs.content.scrollTop,o=this.$refs.content.clientHeight;r>n.offsetTop-8?Object(k.b)(n.offsetTop-n.clientHeight,{appOffset:!1,duration:300,container:this.$refs.content}):r+o<n.offsetTop+n.clientHeight+8&&Object(k.b)(n.offsetTop-o+2*n.clientHeight,{appOffset:!1,duration:300,container:this.$refs.content})}e in this.tiles&&this.tiles[e].classList.remove("v-list-item--highlighted")}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(w.e)("full-width",this)},mounted:function(){this.isActive&&this.callActivate()},methods:{activate:function(){var t=this;this.updateDimensions(),requestAnimationFrame((function(){t.startTransition().then((function(){t.$refs.content&&(t.calculatedTopAuto=t.calcTopAuto(),t.auto&&(t.$refs.content.scrollTop=t.calcScrollPosition()))}))}))},calcScrollPosition:function(){var t=this.$refs.content,e=t.querySelector(".v-list-item--active"),n=t.scrollHeight-t.offsetHeight;return e?Math.min(n,Math.max(0,e.offsetTop-t.offsetHeight/2+e.offsetHeight/2)):t.scrollTop},calcLeftAuto:function(){return parseInt(this.dimensions.activator.left-2*this.defaultOffset)},calcTopAuto:function(){var t=this.$refs.content,e=t.querySelector(".v-list-item--active");if(e||(this.selectedIndex=null),this.offsetY||!e)return this.computedTop;this.selectedIndex=Array.from(this.tiles).indexOf(e);var n=e.offsetTop-this.calcScrollPosition(),r=t.querySelector(".v-list-item").offsetTop;return this.computedTop-n-r-1},changeListIndex:function(t){if(this.getTiles(),this.isActive&&this.hasClickableTiles)if(t.keyCode!==D.z.tab){if(t.keyCode===D.z.down)this.nextTile();else if(t.keyCode===D.z.up)this.prevTile();else if(t.keyCode===D.z.end)this.lastTile();else if(t.keyCode===D.z.home)this.firstTile();else{if(t.keyCode!==D.z.enter||-1===this.listIndex)return;this.tiles[this.listIndex].click()}t.preventDefault()}else this.isActive=!1},closeConditional:function(t){var e=t.target;return this.isActive&&!this._isDestroyed&&this.closeOnClick&&!this.$refs.content.contains(e)},genActivatorAttributes:function(){var t=l.a.options.methods.genActivatorAttributes.call(this);return this.activeTile&&this.activeTile.id?E(E({},t),{},{"aria-activedescendant":this.activeTile.id}):t},genActivatorListeners:function(){var t=f.a.options.methods.genActivatorListeners.call(this);return this.disableKeys||(t.keydown=this.onKeyDown),t},genTransition:function(){var content=this.genContent();return this.transition?this.$createElement("transition",{props:{name:this.transition}},[content]):content},genDirectives:function(){var t=this,e=[{name:"show",value:this.isContentActive}];return!this.openOnHover&&this.closeOnClick&&e.push({name:"click-outside",value:{handler:function(){t.isActive=!1},closeConditional:this.closeConditional,include:function(){return[t.$el].concat(Object(r.a)(t.getOpenDependentElements()))}}}),e},genContent:function(){var t=this,e={attrs:E(E({},this.getScopeIdAttrs()),{},{role:"role"in this.$attrs?this.$attrs.role:"menu"}),staticClass:"v-menu__content",class:E(E(E({},this.rootThemeClasses),this.roundedClasses),{},Object(o.a)({"v-menu__content--auto":this.auto,"v-menu__content--fixed":this.activatorFixed,menuable__content__active:this.isActive},this.contentClass.trim(),!0)),style:this.styles,directives:this.genDirectives(),ref:"content",on:{click:function(e){e.target.getAttribute("disabled")||t.closeOnContentClick&&(t.isActive=!1)},keydown:this.onKeyDown}};return this.$listeners.scroll&&(e.on=e.on||{},e.on.scroll=this.$listeners.scroll),!this.disabled&&this.openOnHover&&(e.on=e.on||{},e.on.mouseenter=this.mouseEnterHandler),this.openOnHover&&(e.on=e.on||{},e.on.mouseleave=this.mouseLeaveHandler),this.$createElement("div",e,this.getContentSlot())},getTiles:function(){this.$refs.content&&(this.tiles=Array.from(this.$refs.content.querySelectorAll(".v-list-item, .v-divider, .v-subheader")))},mouseEnterHandler:function(){var t=this;this.runDelay("open",(function(){t.hasJustFocused||(t.hasJustFocused=!0)}))},mouseLeaveHandler:function(t){var e=this;this.runDelay("close",(function(){var n;(null===(n=e.$refs.content)||void 0===n?void 0:n.contains(t.relatedTarget))||requestAnimationFrame((function(){e.isActive=!1,e.callDeactivate()}))}))},nextTile:function(){var t=this.tiles[this.listIndex+1];if(!t){if(!this.tiles.length)return;return this.listIndex=-1,void this.nextTile()}this.listIndex++,-1===t.tabIndex&&this.nextTile()},prevTile:function(){var t=this.tiles[this.listIndex-1];if(!t){if(!this.tiles.length)return;return this.listIndex=this.tiles.length,void this.prevTile()}this.listIndex--,-1===t.tabIndex&&this.prevTile()},lastTile:function(){var t=this.tiles[this.tiles.length-1];t&&(this.listIndex=this.tiles.length-1,-1===t.tabIndex&&this.prevTile())},firstTile:function(){var t=this.tiles[0];t&&(this.listIndex=0,-1===t.tabIndex&&this.nextTile())},onKeyDown:function(t){var e=this;if(t.keyCode===D.z.esc){setTimeout((function(){e.isActive=!1}));var n=this.getActivator();this.$nextTick((function(){return n&&n.focus()}))}else!this.isActive&&[D.z.up,D.z.down].includes(t.keyCode)&&(this.isActive=!0);this.$nextTick((function(){return e.changeListIndex(t)}))},onResize:function(){this.isActive&&(this.$refs.content.offsetWidth,this.updateDimensions(),clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.updateDimensions,100))}},render:function(t){var e=this;return t("div",{staticClass:"v-menu",class:{"v-menu--attached":""===this.attach||!0===this.attach||"attach"===this.attach},directives:[{arg:"500",name:"resize",value:this.onResize}]},[!this.activator&&this.genActivator(),this.showLazyContent((function(){return[e.$createElement(c.a,{props:{root:!0,light:e.light,dark:e.dark}},[e.genTransition()])]}))])}})},635:function(t,e,n){var content=n(636);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("1f651591",content,!0,{sourceMap:!1})},636:function(t,e,n){var r=n(25)(!1);r.push([t.i,".v-menu{display:none}.v-menu--attached{display:inline}.v-menu__content{position:absolute;display:inline-block;max-width:80%;overflow-y:auto;overflow-x:hidden;contain:content;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);border-radius:4px}.v-menu__content--active{pointer-events:none}.v-menu__content--auto .v-list-item{transition-property:transform,opacity;transition-duration:.3s;transition-timing-function:cubic-bezier(.25,.8,.25,1)}.v-menu__content--fixed{position:fixed}.v-menu__content>.card{contain:content;-webkit-backface-visibility:hidden;backface-visibility:hidden}.v-menu>.v-menu__content{max-width:none}.v-menu-transition-enter .v-list-item{min-width:0;pointer-events:none}.v-menu-transition-enter-to .v-list-item{transition-delay:.1s}.v-menu-transition-leave-active,.v-menu-transition-leave-to{pointer-events:none}.v-menu-transition-enter,.v-menu-transition-leave-to{opacity:0}.v-menu-transition-enter-active,.v-menu-transition-leave-active{transition:all .3s cubic-bezier(.25,.8,.25,1)}.v-menu-transition-enter.v-menu__content--auto{transition:none!important}.v-menu-transition-enter.v-menu__content--auto .v-list-item{opacity:0;transform:translateY(-15px)}.v-menu-transition-enter.v-menu__content--auto .v-list-item--active{opacity:1;transform:none!important;pointer-events:auto}",""]),t.exports=r},645:function(t,e,n){"use strict";n(600)},646:function(t,e,n){var r=n(25)(!1);r.push([t.i,"@media screen and (max-width:599px){.sp-none{display:none}}",""]),t.exports=r},661:function(t,e,n){"use strict";n.r(e);var r=n(119),o=n(819),c=n(110),l=n(90),d=n(358),h=n(120),f=n(668),v=n(631),m=n(544),y=n(634),T=n(357),x=n(138),_=n(257),w=n(204),D=n(146),k=(n(39),n(16),n(77),n(363),n(7),n(15),n(617)),O={data:function(){return{focus:"",type:"month",typeToLabel:{month:"Month",week:"Week",day:"Day","4day":"4 Days"},selectedEvent:{},registeredEvents:[],selectedElement:null,selectedOpen:!1,events:[],colors:["blue","indigo","deep-purple","cyan","green","orange","grey darken-1"],names:["Meeting","Holiday","PTO","Travel","Event","Birthday","Conference","Party"]}},mounted:function(){this.registeredEvents=this.value,this.getData()},props:{value:{type:Array,required:!0}},watch:{value:{handler:function(t){this.registeredEvents=t,this.getData()},deep:!0}},methods:{duration:function(t){if(!(t.eventDateFrom&&t.eventDateTo&&t.eventTimeFrom&&t.eventTimeTo))return"";var e,n,r,o=Math.abs(new Date(t.eventDateFrom+"T"+t.eventTimeFrom)-new Date(t.eventDateTo+"T"+t.eventTimeTo)),c=Math.floor(o/1e3/60);return e=Math.floor(c/1440),r=c%60,(n=Math.floor((c-1440*e)/60))||r||e?(e?1==e?"1 day ":"".concat(e," days "):"")+(n?1==n?"1 hour ":"".concat(n," hours "):"")+(r?1==r?"1 minute":"".concat(r," minutes"):""):""},viewDay:function(t){var e=t.date;this.focus=e,this.type="day"},getEventColor:function(t){return t.color},setToday:function(){this.focus=""},prev:function(){this.$refs.calendar.prev()},next:function(){this.$refs.calendar.next()},showEvent:function(t){var e=this,n=t.nativeEvent,r=t.event,o=function(){e.selectedEvent=r,e.selectedElement=n.target,requestAnimationFrame((function(){return requestAnimationFrame((function(){return e.selectedOpen=!0}))}))};this.selectedOpen?(this.selectedOpen=!1,requestAnimationFrame((function(){return requestAnimationFrame((function(){return o()}))}))):o(),n.stopPropagation()},getData:function(){var t=this;if(this.registeredEvents.length){var e=[];this.registeredEvents.forEach((function(n){var r=new Date(Date.parse(n.eventDateFrom+"T"+n.eventTimeFrom)),o=new Date(Date.parse(n.eventDateTo+"T"+n.eventTimeTo));e.push({name:n.title,start:r,end:o,color:t.colors[t.rnd(0,t.colors.length-1)],timed:r.toDateString()==o.toDateString(),location:n.isOnline?"Online":n.location?n.location:"N/A",startDT:n.startDT,endDT:n.endDT,link:"/event/".concat(n.id),description:n.description,duration:t.duration(n)})})),this.events=e}else this.events=[]},extractContent:function(s,t){return Object(k.stripHtml)(s).result},updateRange:function(t){t.start,t.end},rnd:function(a,b){return Math.floor((b-a+1)*Math.random())+a}}},E=(n(645),n(65)),component=Object(E.a)(O,(function(){var t=this,e=t._self._c;return e(T.a,{staticClass:"fill-height"},[e(d.a,[e(x.a,{attrs:{height:"64"}},[e(w.a,{attrs:{flat:""}},[e(r.a,{staticClass:"sp-none mr-4",attrs:{outlined:"",color:"grey darken-2"},on:{click:t.setToday}},[t._v("\n          Today\n        ")]),t._v(" "),e(r.a,{attrs:{fab:"",text:"",small:"",color:"grey darken-2"},on:{click:t.prev}},[e(h.a,{attrs:{small:""}},[t._v("\n            mdi-chevron-left\n          ")])],1),t._v(" "),e(r.a,{attrs:{fab:"",text:"",small:"",color:"grey darken-2"},on:{click:t.next}},[e(h.a,{attrs:{small:""}},[t._v("\n            mdi-chevron-right\n          ")])],1),t._v(" "),t.$refs.calendar?e(D.a,{},[t._v("\n          "+t._s(t.$refs.calendar.title)+"\n        ")]):t._e(),t._v(" "),e(_.a),t._v(" "),e(y.a,{attrs:{bottom:"",right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,c=n.attrs;return[e(r.a,t._g(t._b({attrs:{outlined:"",color:"grey darken-2"}},"v-btn",c,!1),o),[e("span",[t._v(t._s(t.typeToLabel[t.type]))]),t._v(" "),e(h.a,{attrs:{right:""}},[t._v("\n                mdi-menu-down\n              ")])],1)]}}])},[t._v(" "),e(f.a,[e(v.a,{on:{click:function(e){t.type="day"}}},[e(m.d,[t._v("Day")])],1),t._v(" "),e(v.a,{on:{click:function(e){t.type="week"}}},[e(m.d,[t._v("Week")])],1),t._v(" "),e(v.a,{on:{click:function(e){t.type="month"}}},[e(m.d,[t._v("Month")])],1)],1)],1)],1)],1),t._v(" "),e(x.a,{attrs:{height:"600"}},[e(o.a,{ref:"calendar",attrs:{color:"primary",events:t.events,"event-color":t.getEventColor,type:t.type},on:{"click:event":t.showEvent,"click:more":t.viewDay,"click:date":t.viewDay,change:t.updateRange},model:{value:t.focus,callback:function(e){t.focus=e},expression:"focus"}}),t._v(" "),e(y.a,{attrs:{"min-width":"350px",width:"350px","close-on-content-click":!1,activator:t.selectedElement,"offset-x":""},model:{value:t.selectedOpen,callback:function(e){t.selectedOpen=e},expression:"selectedOpen"}},[e(c.a,{attrs:{color:"grey lighten-4","min-width":"350px",width:"350px",flat:""}},[e(w.a,{attrs:{color:t.selectedEvent.color,dark:""}},[e(D.a,{domProps:{innerHTML:t._s(t.selectedEvent.name)}}),t._v(" "),e(_.a)],1),t._v(" "),e(l.c,[t.selectedEvent.description?e("p",{staticStyle:{"word-break":"break-word"}},[t._v("  "+t._s("".concat(t.extractContent(t.selectedEvent.description,!0).substr(0,80),"...")))]):t._e(),t._v(" "),t.selectedEvent.location?e("p",[t._v(" Location: "+t._s(t.selectedEvent.location))]):t._e(),t._v(" "),t.selectedEvent.startDT?e("p",[t._v(" Start Date: "+t._s(t.selectedEvent.startDT))]):t._e(),t._v(" "),t.selectedEvent.endDT?e("p",[t._v(" End Date: "+t._s(t.selectedEvent.endDT))]):t._e(),t._v(" "),t.selectedEvent.duration?e("p",[t._v(" Duration: "+t._s(t.selectedEvent.duration))]):t._e(),t._v(" "),e("nuxt-link",{attrs:{to:t.selectedEvent.link}},[t._v(" Go to Event Page! ")])],1),t._v(" "),e(l.a,[e(r.a,{attrs:{text:"",color:"secondary"},on:{click:function(e){t.selectedOpen=!1}}},[t._v("\n              Cancel\n            ")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);