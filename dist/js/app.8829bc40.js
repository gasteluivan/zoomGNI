(function(e){function t(t){for(var o,u,a=t[0],c=t[1],s=t[2],p=0,f=[];p<a.length;p++)u=a[p],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&f.push(r[u][0]),r[u]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(o=!1)}o&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},i=[];function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/GITHUB_REPO_NAME/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"0d8c":function(e,t,n){"use strict";n("c61c")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("HelloWorld")],1)},i=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("h1",[e._v("Zoom Meeting SDK Sample Vue.js 2")]),n("button",{on:{click:e.getSignature}},[e._v("Join Meeting")])])},a=[],c=(n("a15b"),n("bc3a")),s=n.n(c),l=n("de18"),p={name:"HelloWorld",created:function(){l["ZoomMtg"].setZoomJSLib("https://source.zoom.us/2.3.5/lib","/av"),l["ZoomMtg"].preLoadWasm(),l["ZoomMtg"].prepareWebSDK(),l["ZoomMtg"].i18n.load("en-US"),l["ZoomMtg"].i18n.reload("en-US")},mounted:function(){l["ZoomMtg"].inMeetingServiceListener("onUserJoin",(function(e){console.log("inMeetingServiceListener onUserJoin",e)}))},data:function(){return{sdkKey:"JyTvJjRNf5AM6SwTHilW4JN56EHY5aLMJLsr",leaveUrl:"https://desarrollo.factoriamedia.com/zoom/",meetingNumber:"6064922536",passWord:"6I8eRzbNs4ZFHo2Eo66wchiS2I7akx1R",role:0,signatureEndpoint:"https://ivanzoom.herokuapp.com/",userEmail:"gastelu.n.ivan@gmail.com",userName:"Vue.js",registrantToken:""}},methods:{getSignature:function(){var e=this;s.a.post(this.signatureEndpoint,{meetingNumber:this.meetingNumber,role:this.role}).then((function(t){console.log(t.data.signature),e.startMeeting(t.data.signature)})).catch((function(e){console.log(e)}))},startMeeting:function(e){var t=this;document.getElementById("zmmtg-root").style.display="block",l["ZoomMtg"].init({leaveUrl:this.leaveUrl,success:function(n){console.log(n),l["ZoomMtg"].join({meetingNumber:t.meetingNumber,userName:t.userName,signature:e,sdkKey:t.sdkKey,userEmail:t.userEmail,passWord:t.passWord,tk:t.registrantToken,success:function(e){console.log(e)},error:function(e){console.log(e)}})},error:function(e){console.log(e)}})}}},f=p,d=(n("0d8c"),n("2877")),m=Object(d["a"])(f,u,a,!1,null,"670e1a00",null),g=m.exports,b={name:"App",components:{HelloWorld:g}},h=b,v=(n("034f"),Object(d["a"])(h,r,i,!1,null,null,null)),y=v.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(y)}}).$mount("#app")},"85ec":function(e,t,n){},c61c:function(e,t,n){}});
//# sourceMappingURL=app.8829bc40.js.map