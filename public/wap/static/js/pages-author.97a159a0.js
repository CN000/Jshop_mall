(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-author"],{1889:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".content[data-v-f1e13896]{position:relative;height:80vh}.content-c[data-v-f1e13896]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-align:center}.load-img[data-v-f1e13896]{width:%?100?%;height:%?100?%}.load-text[data-v-f1e13896]{font-size:%?26?%}",""]),t.exports=e},"420e":function(t,e,i){"use strict";var n=i("558c"),a=i.n(n);a.a},"4bbe":function(t,e,i){"use strict";i.r(e);var n=i("5152"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},5152:function(t,e,i){"use strict";i("c975"),i("d3b7"),i("ac1f"),i("25f0"),i("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{code:"",type:"",state:""}},onLoad:function(t){this.code=this.getUrlParam("code"),this.state=this.getUrlParam("state"),this.type=t.type;var e=this;setTimeout((function(){e.userTrustLogin()}),100)},methods:{getUrlParam:function(t){var e=window.location.toString(),i=e.split("?");if(i.length>1){for(var n,a=i[1].split("&"),r=0;r<a.length;r++)if(n=a[r].split("="),null!=n&&n[0]==t){if(n[1].indexOf("#")){var o=void 0;return o=n[1].split("#"),o[0]}return n[1]}return""}return""},userTrustLogin:function(){var t=this,e={scope:1,code:this.code,state:this.state,invitecode:this.$db.get("invitecode")||""};this.$api.getOpenId(e,(function(e){e.status?e.data.token?(t.$db.set("userToken",e.data.token),t.redirectHandler()):e.data.user_wx_id&&uni.redirectTo({url:"/pages/login/login/mobile?user_wx_id="+e.data.user_wx_id}):t.$common.errorToShow(e.msg)}))},redirectHandler:function(){this.$db.del("invitecode");var t=this.$db.get("redirectPage");t?(this.$db.del("redirectPage"),this.$common.redirectTo(t)):uni.reLaunch({url:"/pages/index/index"})}}};e.default=n},"558c":function(t,e,i){var n=i("1889");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("692c27ac",n,!0,{sourceMap:!1,shadowMode:!1})},"66cc":function(t,e,i){"use strict";i.r(e);var n=i("766e"),a=i("4bbe");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("420e");var o,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"f1e13896",null,!1,n["a"],o);e["default"]=c.exports},"766e":function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"content-c"},[i("v-uni-image",{staticClass:"load-img",attrs:{src:"/static/image/loading.gif",mode:""}}),i("v-uni-view",{staticClass:"load-text color-9"},[t._v("信息加载中.....")])],1)],1)},r=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}))}}]);