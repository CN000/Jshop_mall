(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-choose-index"],{"39dc":function(t,n,e){"use strict";var i,o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"login-m"},[e("v-uni-view",{staticClass:"login-item"},[e("v-uni-view",{staticClass:"logo"},[e("v-uni-open-data",{attrs:{type:"userAvatarUrl"}})],1)],1),e("v-uni-view",{staticClass:"login-tip"},[e("v-uni-view",{staticClass:"login-tip-big"},[t._v("申请获取以下权限")]),e("v-uni-view",{staticClass:"login-tip-small"},[t._v("获得你的公开信息 （昵称、头像等）")])],1)],1),e("v-uni-view",{staticClass:"login-b flc"})],1)},a=[];e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}))},"8d7b":function(t,n,e){"use strict";var i=e("9d5e"),o=e.n(i);o.a},"9c94":function(t,n,e){"use strict";e.r(n);var i=e("39dc"),o=e("bc82");for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("8d7b");var s,d=e("f0c5"),r=Object(d["a"])(o["default"],i["b"],i["c"],!1,null,"c9066344",null,!1,i["a"],s);n["default"]=r.exports},"9d5e":function(t,n,e){var i=e("9fdb");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("f7fe7254",i,!0,{sourceMap:!1,shadowMode:!1})},"9fdb":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-c9066344]{background-color:#fff;height:100vh;padding:%?100?% %?60?% 0}.login-item[data-v-c9066344]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding-bottom:%?40?%;border-bottom:%?1?% solid #ddd}.logo[data-v-c9066344]{display:block;width:%?180?%;height:%?180?%;border-radius:50%;overflow:hidden;border:2px solid #fff;box-shadow:3px 3px 10px rgba(0,0,0,.2)}.login-tip[data-v-c9066344]{padding:%?60?% 0}.login-tip-big[data-v-c9066344]{font-size:%?28?%;line-height:%?80?%}.login-tip-small[data-v-c9066344]{font-size:12px;color:#9e9e9e}.app-name[data-v-c9066344]{font-size:%?28?%;color:#999}.login-b .btn-g[data-v-c9066344]{margin-top:%?40?%}.auth-btn[data-v-c9066344]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:block;height:%?80?%;line-height:%?80?%;text-align:center;font-size:12px;color:#fff;background:#1aad19;border-radius:%?40?%}.auth-btn.refuse[data-v-c9066344]{background:#999;margin-right:%?40?%}.toutiao-logo[data-v-c9066344]{width:100%;height:100%}',""]),t.exports=n},bc82:function(t,n,e){"use strict";e.r(n);var i=e("d8b3"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=o.a},d8b3:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{open_id:""}},computed:{logoImage:function(){return this.$store.state.config.shop_logo}},onLoad:function(){},methods:{getCode:function(t){uni.login({success:function(n){if(n.code)return t(n.code);this.$common.errorToShow("未取得code")},fail:function(t){this.$common.errorToShow("用户授权失败wx.login")}})},handleRefuse:function(){uni.showToast({title:"未授权",icon:"none",duration:1e3}),setTimeout((function(){uni.hideToast(),uni.navigateBack(-1)}),1e3)},getUserInfo:function(t){var n=this;if("getUserInfo:fail auth deny"==t.detail.errMsg)n.$common.errorToShow("未授权");else{var e={open_id:n.open_id,iv:t.detail.iv,edata:t.detail.encryptedData,signature:t.detail.signature},i=n.$db.get("invitecode");i&&(e.invitecode=i),n.toLogin(e)}},toLogin:function(t){var n=this;n.$api.login2(t,(function(t){if(t.status){if("undefined"!=typeof t.data.token)return n.$db.set("userToken",t.data.token),uni.navigateBack({delta:1}),!1;uni.redirectTo({url:"/pages/login/login/index?user_wx_id="+t.data.user_wx_id})}else n.$common.errorToShow(t.msg,(function(){"11027"===t.data&&(n.$db.set("userToken",t.token),n.$common.navigateTo("/pages/login/mobile/index"))}))}))}}};n.default=i}}]);