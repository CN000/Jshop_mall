(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login-index"],{"0b45":function(t,e,i){"use strict";var o,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"login-t"},[i("v-uni-image",{staticClass:"login-logo",attrs:{src:t.logoImage,mode:"aspectFill"}})],1),i("v-uni-view",{staticClass:"login-m"},[i("v-uni-view",{staticClass:"login-item"},[i("v-uni-input",{attrs:{type:"number",maxlength:t.maxMobile,placeholder:"请输入手机号码",focus:!0,"placeholder-class":"login-item-i-p fsz26"},model:{value:t.mobile,callback:function(e){t.mobile=e},expression:"mobile"}})],1),i("v-uni-view",{staticClass:"login-item flc"},[i("v-uni-input",{staticClass:"login-item-input",attrs:{"placeholder-class":"login-item-i-p fsz26",type:"text",placeholder:"请输入验证码"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),t.verification?i("v-uni-view",{class:t.sendCodeBtn,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sendCode.apply(void 0,arguments)}}},[t._v("发送验证码")]):t._e(),t.verification?t._e():i("v-uni-view",{staticClass:"btn btn-g"},[t._v(t._s(t.timer)+" 秒后重新获取")])],1)],1),i("v-uni-view",{staticClass:"login-b"},[t.user_wx_id?i("v-uni-view",[i("v-uni-button",{class:t.regButtonClass,attrs:{"hover-class":"btn-hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toBind()}}},[t._v("登录")]),i("v-uni-view",{staticClass:"color-9 fsz24 agreement"},[t._v("登录即代表你同意"),i("v-uni-text",{staticClass:"color-o",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goAgreement()}}},[t._v("用户协议")]),t._v("和"),i("v-uni-text",{staticClass:"color-o",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goPrivacy()}}},[t._v("隐私政策")])],1)],1):i("v-uni-view",[i("v-uni-button",{class:t.regButtonClass,attrs:{"hover-class":"btn-hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.login()}}},[t._v("登录")]),i("v-uni-view",{staticClass:"color-9 fsz24 agreement"},[t._v("登录即代表你同意"),i("v-uni-text",{staticClass:"color-o",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goAgreement()}}},[t._v("用户协议")]),t._v("和"),i("v-uni-text",{staticClass:"color-o",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goPrivacy()}}},[t._v("隐私政策")])],1),i("v-uni-view",{staticClass:"login-other flc"},[i("v-uni-view",{staticClass:"fz12 item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectLoginType.apply(void 0,arguments)}}},[t._v("密码登录")]),i("v-uni-view",{staticClass:"fz12 item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toReg.apply(void 0,arguments)}}},[t._v("注册")])],1)],1)],1)],1)},a=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return o}))},"22a2":function(t,e,i){"use strict";i.r(e);var o=i("0b45"),n=i("9720");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("7480");var s,r=i("f0c5"),c=Object(r["a"])(n["default"],o["b"],o["c"],!1,null,"57a06994",null,!1,o["a"],s);e["default"]=c.exports},7480:function(t,e,i){"use strict";var o=i("f807"),n=i.n(o);n.a},"7d77":function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-57a06994]{height:calc(100vh - %?90?%);background-color:#fff;padding:%?0?% %?100?%}.login-t[data-v-57a06994]{text-align:center;padding:%?50?% 0}.login-logo[data-v-57a06994]{width:%?180?%;height:%?180?%;border-radius:%?20?%;background-color:#f8f8f8}.login-m[data-v-57a06994]{margin-bottom:%?100?%}.login-item[data-v-57a06994]{border-bottom:%?2?% solid #d0d0d0;overflow:hidden;padding:%?10?%;color:#333;margin-bottom:%?30?%}.login-item-input[data-v-57a06994]{display:inline-block;-webkit-box-flex:1;-webkit-flex:1;flex:1;box-sizing:border-box}.login-item .btn[data-v-57a06994]{border:none;width:40%;text-align:right;padding:0}.login-item .btn.btn-b[data-v-57a06994]{background:none;color:#333!important}.login-b .btn[data-v-57a06994]{color:#999}.btn-b[data-v-57a06994]{color:#fff!important}.login-other[data-v-57a06994]{margin-bottom:%?40?%}.login-other .item[data-v-57a06994]{padding:%?20?% 0}.btn-square[data-v-57a06994]{color:#333}.agreement[data-v-57a06994]{margin:%?20?% 0;text-align:center}.agreement .color-o[data-v-57a06994]{margin:0 %?10?%}.goforgetpwd[data-v-57a06994]{width:100%;text-align:right}',""]),t.exports=e},9720:function(t,e,i){"use strict";i.r(e);var o=i("a6cf"),n=i.n(o);for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);e["default"]=n.a},a6cf:function(t,e,i){"use strict";i("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i("bc20"),n={mixins:[o.goBack,o.jumpBackPage],data:function(){return{maxMobile:11,mobile:"",code:"",user_wx_id:"",verification:!0,timer:60,btnb:"btn btn-square btn-c btn-all",type:"",isWeixinBrowser:this.$common.isWeiXinBrowser()}},onLoad:function(t){t.user_wx_id&&(this.user_wx_id=t.user_wx_id,uni.setNavigationBarTitle({title:"绑定手机号"}))},computed:{rightMobile:function(){var t={};return this.mobile?/^1[3456789]{1}\d{9}$/gi.test(this.mobile)?t.status=!0:(t.status=!1,t.msg="手机号格式不正确"):(t.status=!1,t.msg="请输入手机号"),t},sendCodeBtn:function(){var t="btn btn-g";return this.mobile.length===this.maxMobile&&this.rightMobile.status?t+" btn-b":t},regButtonClass:function(){return this.mobile&&this.mobile.length===this.maxMobile&&this.code?this.btnb+" btn-b":this.btnb},logoImage:function(){return this.$store.state.config.shop_logo}},onShow:function(){var t=this,e=t.$db.get("userToken");if(e)return uni.switchTab({url:"/pages/member/index/index"}),!0;t.timer=parseInt(t.$db.get("timer")),null!=t.timer&&t.timer>0&&(t.countDown(),t.verification=!1)},methods:{sendCode:function(){var t=this;this.rightMobile.status?(this.$common.loadToShow("发送中..."),setTimeout((function(){t.$common.loadToHide(),t.$api.sms({mobile:t.mobile,code:"login"},(function(e){e.status?(t.timer=60,t.verification=!1,t.$common.successToShow(e.msg),t.countDown()):t.$common.errorToShow(e.msg)}))}),1e3)):this.$common.errorToShow(this.rightMobile.msg)},toReg:function(){this.$common.redirectTo("/pages/login/register/index")},countDown:function(){var t=this,e=setInterval((function(){t.timer--,uni.setStorage({key:"timer",data:t.timer,success:function(){}}),t.timer<=0&&(t.verification=!0,clearInterval(e))}),1e3)},login:function(){var t=this,e=this;if(e.rightMobile.status)if(e.code){var i={mobile:e.mobile,code:e.code},o=e.$db.get("invitecode");o&&(i.invitecode=o),e.$api.smsLogin(i,(function(i){i.status?(t.$db.set("userToken",i.data),e.redirectHandler()):e.$common.errorToShow(i.msg)}))}else e.$common.errorToShow("请输入短信验证码!");else e.$common.errorToShow(e.rightMobile.msg)},redirectHandler:function(){var t=this;this.$common.successToShow("登录成功!",(function(){t.$db.set("timer",0),t.$db.del("invitecode"),uni.navigateBack({delta:1})}))},toLogin:function(){uni.navigateTo({url:"../../login/login/index"})},showTopTips:function(){var t=this;if(""==t.mobile)return t.$common.errorToShow("请输入手机号码"),!1;if(""==this.code)return t.$common.errorToShow("请输入验证码"),!1;if(0==t.user_wx_id)return t.$common.errorToShow("登录失败，请稍后再试",(function(){uni.navigateBack({delta:1})})),!1;var e=2,i={mobile:t.mobile,code:t.code,platform:e,user_wx_id:t.user_wx_id},o=t.$db.get("invitecode");o&&(i.invitecode=o),t.$api.smsLogin(i,(function(e){e.status?(t.$db.set("userToken",e.data),t.redirectHandler()):t.$common.errorToShow(e.msg)}))},toBind:function(){var t=this;if(""==this.mobile)return this.$common.errorToShow("请输入手机号码"),!1;if(""==this.code)return this.$common.errorToShow("请输入验证码"),!1;var e={mobile:this.mobile,code:this.code,user_wx_id:this.user_wx_id},i=this.$db.get("invitecode");i&&(e.invitecode=i),this.$api.smsLogin(e,(function(e){e.status?(t.$db.set("userToken",e.data),t.redirectHandler()):t.$common.errorToShow(e.msg)}))},selectLoginType:function(){this.$common.redirectTo("./index1")},goAgreement:function(){var t=this.$store.state.config.user_agreement_id;this.$common.navigateTo("/pages/article/index?id_type=1&id="+t)},goPrivacy:function(){var t=this.$store.state.config.privacy_policy_id;this.$common.navigateTo("/pages/article/index?id_type=1&id="+t)},goForgetpwd:function(){this.$common.navigateTo("/pages/login/forget/forget")}}};e.default=n},bc20:function(t,e,i){"use strict";i("c975"),i("b64b"),Object.defineProperty(e,"__esModule",{value:!0}),e.tools=e.checkLogin=e.jumpBackPage=e.goBack=e.goods=e.orders=void 0;var o={mounted:function(){},methods:{orderDetail:function(t){this.$common.navigateTo("/pages/member/order/orderdetail?order_id="+t)},toPay:function(t){this.$common.navigateTo("/pages/goods/payment/index?order_id="+t+"&type=1")},toEvaluate:function(t){this.$common.navigateTo("/pages/member/order/evaluate?order_id="+t)},showExpress:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=encodeURIComponent("code="+t+"&no="+e+"&add="+i);this.$common.navigateTo("/pages/member/order/express_delivery?params="+o)}}};e.orders=o;var n={mounted:function(){},methods:{goodsDetail:function(t){this.$common.navigateTo("/pages/goods/index/index?id="+t)},goodsList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e="/pages/classify/index";Object.keys(t).length&&(e=this.$common.builderUrlParams(e,t)),this.$common.navigateTo(e)},groupDetail:function(t,e){this.$common.navigateTo("/pages/goods/index/group?id="+t+"&group_id="+e)},pintuanDetail:function(t,e){e?this.$common.navigateTo("/pages/goods/index/pintuan?id="+t+"&team_id="+e):this.$common.navigateTo("/pages/goods/index/pintuan?id="+t)}}};e.goods=n;var a={onBackPress:function(t){if("navigateBack"===t.from)return!1;var e=["/pages/cart/index/index","/pages/member/index/index"],i=this.$store.state.redirectPage;return e.indexOf(i)>-1?(this.$store.commit({type:"redirect",page:""}),uni.switchTab({url:"/pages/index/index"}),!0):void 0},backBtn:function(){var t=getCurrentPages();t.length>1?uni.navigateBack({delta:1}):uni.switchTab({url:"/pages/index/index"})}};e.goBack=a;var s={methods:{handleBack:function(){var t=this.$store.state.redirectPage;console.log(t),this.$store.commit({type:"redirect",page:""});var e=["/pages/index/index","/pages/member/index/index"];e.indexOf(t)>-1?uni.switchTab({url:t}):t?uni.redirectTo({url:t}):uni.switchTab({url:"/pages/index/index"})}}};e.jumpBackPage=s;var r={methods:{checkIsLogin:function(){uni.showToast({title:"请先登录！",icon:"none",duration:800,success:function(t){setTimeout((function(){uni.hideToast(),uni.navigateTo({url:"/pages/login/login/index1"})}),800)}})}}};e.checkLogin=r;var c={methods:{copyData:function(t){var e=this;uni.setClipboardData({data:t,success:function(){e.$common.errorToShow("复制成功")}})}}};e.tools=c},f807:function(t,e,i){var o=i("7d77");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("31c5efac",o,!0,{sourceMap:!1,shadowMode:!1})}}]);