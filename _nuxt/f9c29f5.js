(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1001:function(e,t,n){"use strict";n(879)},1002:function(e,t,n){var r=n(22)(!1);r.push([e.i,".progressbar[data-v-3e22658b]{display:block;top:0;width:100%;height:5px;position:absolute;background-color:#64bddc;z-index:1}.progressbar>div[data-v-3e22658b]{background-color:#1976d2;height:100%}",""]),e.exports=r},1003:function(e,t,n){"use strict";n(880)},1004:function(e,t,n){var r=n(22)(!1);r.push([e.i,".banner-outer{z-index:4;position:-webkit-sticky;position:sticky;top:0;width:100%;max-height:65px;overflow:visible}.yellow-banner{display:flex;min-height:65px;justify-content:center;align-items:center;background-color:#64bddc;opacity:.97}.yellow-banner .banner-inner{display:flex;flex-direction:row;justify-content:center;align-items:center;width:100%}.yellow-banner .banner-inner .banner-text{width:100%;display:flex;justify-content:center;align-items:center;font-family:Roboto;font-stretch:normal;font-style:normal;line-height:1.38;letter-spacing:normal;text-align:left;color:#fff}.yellow-banner .banner-inner .banner-text #cross-menu{padding:5px 10px 5px 40px;font-size:24px;color:grey}.yellow-banner .banner-inner .banner-text p{margin-bottom:0}.yellow-banner .banner-inner .banner-text a{color:#1976d2;margin-bottom:0}.yellow-banner .banner-inner .banner-text strong{color:#ff0}.yellow-banner .banner-inner .banner-text span{margin-bottom:0}",""]),e.exports=r},1017:function(e,t,n){"use strict";n.r(t);var r=n(120),o=n(266),l=(n(18),n(17),n(16),n(24),n(25),n(2)),c=n(14);n(58),n(37),n(57),n(8),n(15),n(34),n(66);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={data:function(){return{news:[],index:0,showProgressBar:!0,autoSlideInterval:1e4,autoSlideTimeout:null,stopSlider:!1,timeLeft:0,timerInterval:null,countdownInterval:10}},watch:{$route:function(e,t){var n=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("index"!==e.name){t.next=4;break}return t.next=3,n.getData();case 3:n.autoSlideInterval&&n.autoSlideInterval>n.countdownInterval&&(n.stopTimer(),n.restartTimer());case 4:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getData();case 2:e.autoSlideInterval&&e.autoSlideInterval>e.countdownInterval&&(e.startTimer(e.autoSlideInterval),e.timeLeft=e.autoSlideInterval,e.startCountdown());case 3:case"end":return t.stop()}}),t)})))()},computed:{progressBar:function(){return 100-this.timeLeft/this.autoSlideInterval*100}},methods:{startCountdown:function(){if(this.showProgressBar){var e=this;this.timerInterval=setInterval((function(){e.timeLeft-=e.countdownInterval,e.timeLeft<=0&&(e.timeLeft=e.autoSlideInterval,e.changeIndex())}),this.countdownInterval)}},startTimer:function(e){if(e&&e>0&&!this.stopSlider){var t=this;clearTimeout(this.autoSlideTimeout),this.autoSlideTimeout=setTimeout((function(){t.startTimer(t.autoSlideInterval)}),e)}},stopTimer:function(){clearTimeout(this.autoSlideTimeout),this.stopSlider=!0,clearInterval(this.timerInterval)},restartTimer:function(){this.stopSlider=!1,clearInterval(this.timerInterval),this.startCountdown(),this.startTimer(this.timeLeft)},changeIndex:function(){this.index=(this.index+1)%this.news.length},getData:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$fire.firestore.collection("news").where("isPublished","==",!0).orderBy("createdAt","desc"),t.next=3,n.get();case 3:r=t.sent,o=[],r.size>0&&r.forEach((function(t){var n=t.id,data=t.data(),r="";data.content&&(r=e.replaceUrls(data.content)),o.push(f(f({id:n},data),{},{alteredContent:r}))})),e.news=o;case 7:case"end":return t.stop()}}),t)})))()},replaceUrls:function(e){return e?e.replace(/href="([^\'\"]+)/g,(function(e){return' target="_blank" '+e})):""},toggleBanner:function(){document.getElementById("banner-box").style.display="none"}}},h=(n(1001),n(1003),n(55)),component=Object(h.a)(m,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"banner-outer"},[e.news.length?t("div",{staticClass:"yellow-banner pa-3",attrs:{id:"banner-box"},on:{mouseover:e.stopTimer,mouseleave:e.restartTimer}},[e.autoSlideInterval&&e.showProgressBar?t("div",{staticClass:"progressbar"},[t("div",{style:{width:e.progressBar+"%"}})]):e._e(),e._v(" "),t("div",{staticClass:"banner-inner text-body-1"},[t(o.a),e._v(" "),t("span",{staticClass:"banner-text font-weight-medium",domProps:{innerHTML:e._s(e.news[e.index]&&e.news[e.index].alteredContent)}}),e._v(" "),t("span",{attrs:{id:"cross-menu"},on:{click:function(t){return e.toggleBanner()}}},[t(r.a,{staticClass:"pl-5 font-weight-bold white--text"},[e._v("mdi-close")])],1)],1)]):e._e()])}),[],!1,null,"3e22658b",null);t.default=component.exports},879:function(e,t,n){var content=n(1002);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(23).default)("0eb81f89",content,!0,{sourceMap:!1})},880:function(e,t,n){var content=n(1004);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(23).default)("5aee5462",content,!0,{sourceMap:!1})}}]);