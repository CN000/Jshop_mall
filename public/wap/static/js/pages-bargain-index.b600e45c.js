(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-bargain-index"],{"0440":function(t,e,i){"use strict";i.r(e);var n=i("72b6"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"1e04":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{popShow:{default:!1},price:{default:0}},methods:{close:function(){this.$emit("update:popShow",!1)}}};e.default=n},2693:function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.popShow,expression:"popShow"}],staticClass:"pop"},[n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"close-wrap"},[n("v-uni-image",{staticClass:"close",attrs:{src:i("d993"),mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"purse"},[n("v-uni-image",{staticClass:"purse",attrs:{src:i("c831"),mode:""}})],1),n("v-uni-view",{staticClass:"title"},[t._v("恭喜您成功砍掉")]),n("v-uni-view",{staticClass:"money"},[n("v-uni-text",[t._v(t._s(t.price||"0.00"))]),t._v("元")],1),n("v-uni-view",{staticClass:"button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}},[t._v("我知道啦")])],1)],1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},"310e":function(t,e,i){"use strict";i.r(e);var n=i("efab"),a=i("4b78");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("b988");var s,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"53933692",null,!1,n["a"],s);e["default"]=c.exports},"4b78":function(t,e,i){"use strict";i.r(e);var n=i("facc"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"58e9":function(t,e,i){"use strict";i.r(e);var n=i("b8f0"),a=i("0440");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("ef28");var s,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"5b1c7816",null,!1,n["a"],s);e["default"]=c.exports},"5acb":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".pop[data-v-89681538]{position:fixed;width:100%;height:100vh;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.5);z-index:9}.pop .content[data-v-89681538]{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:%?400?%;height:%?450?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#fff;border-radius:%?20?%;padding:%?20?% %?25?%}.pop .content .purse[data-v-89681538]{width:%?100?%;height:%?100?%\n\t/* margin-top: 32rpx; */}.close-wrap[data-v-89681538]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;flex-direction:row-reverse}.pop .close[data-v-89681538]{width:%?21?%;height:%?21?%}.pop .title[data-v-89681538]{margin-top:%?40?%}.pop .money[data-v-89681538]{color:#fe1421;font-size:%?26?%;margin-top:%?28?%;margin-bottom:%?20?%}.pop .money uni-text[data-v-89681538]{font-size:%?56?%}.pop .button[data-v-89681538]{width:%?248?%;height:%?60?%;line-height:%?60?%;text-align:center;color:#fff;background-color:#ff7159;border-radius:%?5?%}",""]),t.exports=e},6662:function(t,e,i){var n=i("5acb");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("1478685e",n,!0,{sourceMap:!1,shadowMode:!1})},"67d0":function(t,e,i){"use strict";var n=i("6662"),a=i.n(n);a.a},"72b6":function(t,e,i){"use strict";var n=i("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("924c")),o=n(i("bfdc")),s=n(i("310e")),r=n(i("c39a")),c=n(i("4b3d")),d=i("660c"),u=i("bc20"),l={mixins:[u.goBack],data:function(){return{tabList:["亲友团","商品详情","活动规则","参与榜"],current:0,popShow:!1,id:0,type:1,record_id:0,bargain_price:0,info:{},userInfo:{},buyNum:1,shareUrl:"/pages/share/jump"}},components:{pop:r.default,jshopContent:o.default,uniCountdown:s.default,lvvPopup:a.default,shareByH5:c.default},onLoad:function(t){t.id||u.goBack.backBtn(),this.id=t.id,t.record_id&&0!=t.record_id&&(this.record_id=t.record_id),t.type&&0!=t.type&&(this.type=t.type)},onShow:function(){this.getUserInfo()},computed:{shareHref:function(){var t=getCurrentPages(),e=t[t.length-1];return d.apiBaseUrl+"wap/"+e.route+"?id="+this.id+"&record_id="+this.record_id+"&type=2"}},methods:{tabClick:function(t){this.current=t.currentTarget.dataset.tabindex},doAdd:function(){var t=this,e={id:this.id};this.$api.addBargain(e,(function(e){e.status?t.doBargain(e.data):e.data.code&&"over"==e.data.code?(t.$common.errorToShow(e.msg),u.goBack.backBtn()):t.getBargainDetial(e.data)}))},doBargain:function(t){var e=this,i={type:this.type,id:this.id,record_id:t};this.record_id=t,this.$api.doBargain(i,(function(i){e.getBargainDetial(t),i.status?(e.info.current_price=i.data.current_price,e.bargain_price=i.data.bargain_price,e.popShow=!0):e.$common.errorToShow(i.msg)}))},getBargainDetial:function(t){var e=this,i={type:this.type,record_id:t,id:this.id};this.record_id=t,this.$api.getBargainDetial(i,(function(t){t.status?e.info=t.data:e.$common.errorToShow(t.msg)}))},getUserInfo:function(){var t=this;this.$api.userInfo({},(function(e){e.status&&(t.userInfo=e.data,1==t.type?t.record_id&&0!=t.record_id?t.getBargainDetial(t.record_id):t.doAdd():t.doBargain(t.record_id))}))},buyNow:function(){var t=this;if(this.buyNum>0){var e={product_id:this.info.goods.product.id,nums:1,type:2,order_type:6};this.$api.addCart(e,(function(e){if(e.status){var i=e.data;t.$common.navigateTo("/pages/goods/place-order/index?cart_ids="+JSON.stringify(i)+"&order_type=6&bargain_id="+t.id+"&record_id="+t.record_id)}else t.$common.errorToShow(e.msg)}),(function(e){t.submitStatus=!1}))}},friendsAddBargain:function(){this.$common.navigateTo("/pages/bargain/index?id="+this.id)},goShare:function(){this.$refs.share.show()},closeShare:function(){this.$refs.share.close()},getShareUrl:function(){var t=this,e={client:2,url:"/pages/share/jump",type:1,page:10,params:{record_id:this.record_id,id:this.id,type:2}},i=this.$db.get("userToken");i&&""!=i&&(e["token"]=i),this.$api.share(e,(function(e){t.shareUrl=e.data}))}},watch:{record_id:{handler:function(){},deep:!0}},onShareAppMessage:function(){return{title:"我正在参与"+this.info.name+"砍价，快来祝我一臂之力~",imageUrl:this.info.goods.image_url,path:this.shareUrl}}};e.default=l},8464:function(t,e,i){"use strict";i.r(e);var n=i("1e04"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"8e49":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".flot-btn[data-v-5b1c7816]{position:fixed;bottom:0;width:100%;height:%?80?%;text-align:center;line-height:%?80?%;background-color:#ff7159;font-size:%?26?%;color:#fff}.red[data-v-5b1c7816]{color:#ff7159}.bargain[data-v-5b1c7816]{padding-bottom:%?100?%}.shop-wrap[data-v-5b1c7816]{padding:0 %?20?%;background:#fff;padding:%?15?% %?20?% %?30?% %?20?%}.shop-wrap .shop-title[data-v-5b1c7816]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-bottom:%?15?%}.shop-wrap .shop-title .avatar[data-v-5b1c7816]{width:%?47?%;height:%?50?%;border-radius:50%;margin-right:%?20?%}.shop-wrap .shop-info[data-v-5b1c7816]{padding:%?20?%;background:#f4f4f4;display:-webkit-box;display:-webkit-flex;display:flex}.shop-wrap .shop-info .shop-pic[data-v-5b1c7816]{width:%?120?%;height:%?120?%;margin-right:%?30?%;-webkit-box-flex:0;-webkit-flex:0 0 %?120?%;flex:0 0 %?120?%}.shop-info .shop-detail .info-title[data-v-5b1c7816]{width:%?485?%;overflow:hidden;white-space:nowrap;word-break:break-all;text-overflow:ellipsis;font-size:%?20?%}.shop-info .shop-detail .sub-desc[data-v-5b1c7816]{font-size:%?24?%;color:#cacaca;margin-top:%?6?%}.shop-info .shop-detail .sub-desc uni-text.red[data-v-5b1c7816]{font-size:%?24?%}.shop-info .shop-detail .sub-desc uni-text[data-v-5b1c7816]{margin-right:%?15?%}.shop-info .shop-detail .time[data-v-5b1c7816]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?15?%}.shop-info .shop-detail .time uni-text.block[data-v-5b1c7816]{display:inline-block;width:%?37?%;height:%?37?%;text-align:center;line-height:%?37?%;background-color:#4f1701;font-size:%?20?%;color:#fff;margin:0 %?10?%}.shop-info .shop-detail .time uni-text.block[data-v-5b1c7816]:first-child{margin-left:0}.shop-info .shop-detail .time uni-text.desc[data-v-5b1c7816]{font-size:%?24?%;color:#5f5f5f}.pro-text[data-v-5b1c7816]{margin-top:%?20?%;margin-bottom:%?14?%;text-align:center;font-size:%?24?%}.pro-text uni-text[data-v-5b1c7816]{font-size:%?24?%}.pro-text .now-price[data-v-5b1c7816]{font-size:%?44?%}.pro-text .tag[data-v-5b1c7816]{color:#ff7159;border:%?1?% solid #ff7159;padding:%?2?% %?4?%;margin-right:%?6?%;font-size:%?22?%}.pro-text .now-price-wrap[data-v-5b1c7816]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-bottom:%?10?%}.share[data-v-5b1c7816]{width:%?668?%;height:%?60?%;border-radius:%?30?%;text-align:center;line-height:%?60?%;color:#fff;margin:0 auto;margin-top:%?44?%;background:-webkit-linear-gradient(left,#ff7159,#fb3642);background:linear-gradient(left,#ff7159,#fb3642)}.tab-nav[data-v-5b1c7816]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-top:%?20?%;background:#fff}.tab-nav .tab-item[data-v-5b1c7816]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;color:#ff7159;padding:%?28?% 0;border-bottom:1px solid #f3f3f3}.tab-nav .tab-item.active[data-v-5b1c7816]{border-bottom:%?1?% solid #ff7159}.tab-list[data-v-5b1c7816]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?24?% %?20?%}.tab-list-wrap[data-v-5b1c7816]{background:#fff}.tab-list-wrap .user-avatar[data-v-5b1c7816]{width:%?50?%;height:%?50?%;border-radius:50%;margin-right:%?30?%}.tab-list-wrap .user[data-v-5b1c7816]{display:-webkit-box;display:-webkit-flex;display:flex}.tab-list-wrap .user .user-name[data-v-5b1c7816]{font-size:%?24?%;color:#434343}.tab-list-wrap .user .user-date[data-v-5b1c7816]{color:#ababab;font-size:%?16?%;margin-top:%?10?%}.tab-list-wrap .money[data-v-5b1c7816]{font-size:%?16?%;color:#ababab}.tab-list-wrap .money uni-text[data-v-5b1c7816]{font-size:%?22?%;color:#ff7159}.comment-none[data-v-5b1c7816]{text-align:center;padding:%?160?% 0}.comment-none-img[data-v-5b1c7816]{width:%?274?%;height:%?274?%}",""]),t.exports=e},"9cbf":function(t,e,i){var n=i("8e49");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("3b3ea44a",n,!0,{sourceMap:!1,shadowMode:!1})},a883:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-countdown[data-v-53933692]{padding:%?2?% 0;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-countdown__splitor[data-v-53933692]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;line-height:%?44?%;padding:0 %?5?%;font-size:%?24?%}.uni-countdown__number[data-v-53933692]{line-height:%?44?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:%?44?%;border-radius:%?6?%;font-size:%?24?%;font-size:%?24?%;padding:0 %?5?%}',""]),t.exports=e},b756:function(t,e,i){var n=i("a883");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("d2aa94b2",n,!0,{sourceMap:!1,shadowMode:!1})},b8f0:function(t,e,i){"use strict";var n={uniCountdown:i("310e").default,lvvPopup:i("924c").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"bargain"},[i("v-uni-view",{staticClass:"shop-wrap"},[i("v-uni-view",{staticClass:"shop-title"},[i("v-uni-image",{staticClass:"avatar",attrs:{src:t.info.bargain_user.avatar,mode:""}}),t._v(t._s(t.info.bargain_user.nickname||""))],1),t.info.goods?i("v-uni-view",{staticClass:"shop-info"},[i("v-uni-image",{staticClass:"shop-pic",attrs:{src:t.info.goods.image_url||"",mode:""}}),i("v-uni-view",{staticClass:"shop-detail"},[i("v-uni-view",{staticClass:"info-title fsz28 color-3"},[t._v(t._s(t.info.goods.name||""))]),i("v-uni-view",{staticClass:"sub-desc fsz24"},[i("v-uni-text",{staticClass:"red "},[t._v(t._s(t.info.goods.brief||""))]),i("v-uni-text",{staticClass:"color-9"},[t._v("库存:"+t._s(t.info.max_goods_nums||"0"))]),i("v-uni-text",{staticClass:"color-9"},[t._v("|")]),i("v-uni-text",{staticClass:"color-9"},[t._v("已售:"+t._s(t.info.sales_num||"0"))])],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.info.lasttime&&2==t.info.status_progress,expression:"info.lasttime && info.status_progress == 2"}],staticClass:"time"},[i("uni-countdown",{attrs:{day:t.info.lasttime.day,hour:t.info.lasttime.hour,minute:t.info.lasttime.minute,second:t.info.lasttime.second,backgroundColor:"#4f1701",color:"#fff"}}),i("v-uni-text",{staticClass:"desc"},[t._v("后砍价过期")])],1)],1)],1):t._e(),i("v-uni-view",{staticClass:"pro-text"},[i("v-uni-view",{staticClass:"now-price-wrap"},[i("v-uni-text",{staticClass:"tag"},[t._v("当前价")]),i("v-uni-text",{staticClass:"red now-price"},[t._v("￥"+t._s(t.info.current_price||"0.00")+"元")]),i("br")],1),t._v("已砍"),i("v-uni-text",{staticClass:"red"},[t._v("￥"+t._s(t.info.cut_off_price||"0.00"))]),t._v("元")],1),i("v-uni-progress",{attrs:{percent:t.info.cut_off_progress,active:!0,"border-radius":"10","stroke-width":"5",activeColor:"#ff7159",backgroundColor:"#e5e5e5"}}),1==t.info.status_progress&&1==t.type?i("v-uni-view",{staticClass:"share",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goShare()}}},[t._v("分享好友，代您砍价")]):t._e(),1==t.info.status_progress&&2==t.type?i("v-uni-view",{staticClass:"share",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goShare()}}},[t._v("分享好友，帮他砍价吧~")]):t._e(),2==t.info.status_progress&&1==t.type?i("v-uni-view",{staticClass:"share",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.buyNow()}}},[t._v("砍价成功，购买吧~")]):t._e(),2==t.info.status_progress&&2==t.type?i("v-uni-view",{staticClass:"share"},[t._v("非常感谢，助我砍价成功")]):t._e(),3==t.info.status_progress||4==t.info.status_progress?i("v-uni-view",{staticClass:"share"},[t._v("砍价结束")]):t._e()],1),i("v-uni-view",{staticClass:"tab-nav"},t._l(t.tabList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"tab-item",class:{active:n==t.current},attrs:{"data-tabindex":n},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabClick.apply(void 0,arguments)}}},[t._v(t._s(e))])})),1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:0==t.current,expression:"current == 0"}],staticClass:"tab tab-list-wrap"},[t.info.friends_record&&t.info.friends_record.list.length>0?i("v-uni-view",t._l(t.info.friends_record.list,(function(e,n){return i("v-uni-view",{key:n,staticClass:"tab-list"},[i("v-uni-view",{staticClass:"user"},[i("v-uni-image",{staticClass:"user-avatar",attrs:{src:e.avatar,mode:"aspectFill"}}),i("v-uni-view",{staticClass:"user-info"},[i("v-uni-view",{staticClass:"user-name"},[t._v(t._s(e.nickname||""))]),i("v-uni-view",{staticClass:"user-date"},[t._v(t._s(e.ctime||""))])],1)],1),i("v-uni-view",{staticClass:"money"},[i("v-uni-text",{staticClass:"red"},[t._v("-"+t._s(e.bargain_price||"0.00"))]),t._v("元")],1)],1)})),1):i("v-uni-view",{staticClass:"comment-none"},[i("v-uni-image",{staticClass:"comment-none-img",attrs:{src:"/static/image/order.png",mode:""}})],1)],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1==t.current,expression:"current == 1"}],staticClass:"tab tab-list-wrap"},[t.info.goods?i("jshopContent",{attrs:{content:t.info.goods.intro}}):i("v-uni-view",{staticClass:"comment-none"},[i("v-uni-image",{staticClass:"comment-none-img",attrs:{src:"/static/image/order.png",mode:""}})],1)],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:2==t.current,expression:"current == 2"}],staticClass:"tab tab-list-wrap"},[t.info.desc?i("jshopContent",{attrs:{content:t.info.desc}}):i("v-uni-view",{staticClass:"comment-none"},[i("v-uni-image",{staticClass:"comment-none-img",attrs:{src:"/static/image/order.png",mode:""}})],1)],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:3==t.current,expression:"current == 3"}],staticClass:"tab tab-list-wrap"},[t.info.attendance_record&&t.info.attendance_record.list.length>0?i("v-uni-view",t._l(t.info.attendance_record.list,(function(e,n){return i("v-uni-view",{key:n,staticClass:"tab-list"},[i("v-uni-view",{staticClass:"user"},[i("v-uni-image",{staticClass:"user-avatar",attrs:{src:e.avatar,mode:"aspectFill"}}),i("v-uni-view",{staticClass:"user-info"},[i("v-uni-view",{staticClass:"user-name"},[t._v(t._s(e.nickname||""))]),i("v-uni-view",{staticClass:"user-date"},[t._v(t._s(e.ctime||""))])],1)],1)],1)})),1):i("v-uni-view",{staticClass:"comment-none"},[i("v-uni-image",{staticClass:"comment-none-img",attrs:{src:"/static/image/order.png",mode:""}})],1)],1),i("pop",{attrs:{popShow:t.popShow,price:t.bargain_price},on:{"update:popShow":function(e){arguments[0]=e=t.$handleEvent(e),t.popShow=e},"update:pop-show":function(e){arguments[0]=e=t.$handleEvent(e),t.popShow=e}}}),t.record_id&&0!=t.record_id?i("lvv-popup",{ref:"share",attrs:{position:"bottom"}},[i("shareByH5",{attrs:{goodsId:t.info.id,shareImg:t.info.goods.image_url,shareTitle:t.info.name,shareContent:t.info.intro,shareHref:t.shareHref,shareType:10,bargainType:2,record_id:t.record_id},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.closeShare()}}})],1):t._e(),2==t.type?i("v-uni-view",{staticClass:"flot-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.friendsAddBargain()}}},[t._v("我也要砍")]):t._e(),1==t.type&&1==t.info.status_progress?i("v-uni-view",{staticClass:"flot-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.buyNow()}}},[t._v("立即购买")]):t._e()],1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},b988:function(t,e,i){"use strict";var n=i("b756"),a=i.n(n);a.a},bc20:function(t,e,i){"use strict";i("c975"),i("b64b"),Object.defineProperty(e,"__esModule",{value:!0}),e.tools=e.checkLogin=e.jumpBackPage=e.goBack=e.goods=e.orders=void 0;var n={mounted:function(){},methods:{orderDetail:function(t){this.$common.navigateTo("/pages/member/order/orderdetail?order_id="+t)},toPay:function(t){this.$common.navigateTo("/pages/goods/payment/index?order_id="+t+"&type=1")},toEvaluate:function(t){this.$common.navigateTo("/pages/member/order/evaluate?order_id="+t)},showExpress:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=encodeURIComponent("code="+t+"&no="+e+"&add="+i);this.$common.navigateTo("/pages/member/order/express_delivery?params="+n)}}};e.orders=n;var a={mounted:function(){},methods:{goodsDetail:function(t){this.$common.navigateTo("/pages/goods/index/index?id="+t)},goodsList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e="/pages/classify/index";Object.keys(t).length&&(e=this.$common.builderUrlParams(e,t)),this.$common.navigateTo(e)},groupDetail:function(t,e){this.$common.navigateTo("/pages/goods/index/group?id="+t+"&group_id="+e)},pintuanDetail:function(t,e){e?this.$common.navigateTo("/pages/goods/index/pintuan?id="+t+"&team_id="+e):this.$common.navigateTo("/pages/goods/index/pintuan?id="+t)}}};e.goods=a;var o={onBackPress:function(t){if("navigateBack"===t.from)return!1;var e=["/pages/cart/index/index","/pages/member/index/index"],i=this.$store.state.redirectPage;return e.indexOf(i)>-1?(this.$store.commit({type:"redirect",page:""}),uni.switchTab({url:"/pages/index/index"}),!0):void 0},backBtn:function(){var t=getCurrentPages();t.length>1?uni.navigateBack({delta:1}):uni.switchTab({url:"/pages/index/index"})}};e.goBack=o;var s={methods:{handleBack:function(){var t=this.$store.state.redirectPage;console.log(t),this.$store.commit({type:"redirect",page:""});var e=["/pages/index/index","/pages/member/index/index"];e.indexOf(t)>-1?uni.switchTab({url:t}):t?uni.redirectTo({url:t}):uni.switchTab({url:"/pages/index/index"})}}};e.jumpBackPage=s;var r={methods:{checkIsLogin:function(){uni.showToast({title:"请先登录！",icon:"none",duration:800,success:function(t){setTimeout((function(){uni.hideToast(),uni.navigateTo({url:"/pages/login/login/index1"})}),800)}})}}};e.checkLogin=r;var c={methods:{copyData:function(t){var e=this;uni.setClipboardData({data:t,success:function(){e.$common.errorToShow("复制成功")}})}}};e.tools=c},c39a:function(t,e,i){"use strict";i.r(e);var n=i("2693"),a=i("8464");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("67d0");var s,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"89681538",null,!1,n["a"],s);e["default"]=c.exports},c831:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAABHVBMVEUAAAD97T3/7EP97kP/8Ev76Uf76Ub86UX86UX76kT76EX86UX860H+8zz/60f76UT86EX86kX86kT86kT97En76UT76UX86EP76ET86kT960T760P87zX77EX+8T3//4D87kf76T396kT860P78EL65Uj98i376Er66kb/6Eb760P9xy/76UX76kb9yjH78En9wyz76ET9wSr77kj+xS378kz8sRv77Uj9zDL8rhj78Ur750b77Eb8sBn82Tn8uCH8th/750P8uiP9vCb81jf7rBb83z38zjD80TP7pxP7xSn8sx380zX9vyj7qRT84T/7wif83Tz82zr85EH8viT750X8yy775077yCv9zzP79Ez8yC37qhX7pRH7ng10NkS/AAAAK3RSTlMAIhuaFeHXycDy6YA4KRHuzlr1o0H4007EupWGZGAyAo6Lcmot/IWsqAtHwN9AVgAACJxJREFUaN6tmnljkzAYxrv7VOc25zZ1bs4bAglQaLlLz/W+d+r3/xgGWpvQAC3T5y/tGn68efK+uZpZVuv7H/aOtrc2N3Z2Nja3to/2PuyvZ/6n1l9fHhzyjA63Ll//J9DKp7M3aMQjFoL4EXpz9mnlXwkvPm0jngawIN7Y/ifO5zU+UYS09vmZiP3vfAp9338GYvWITyd0tJqW8f4Vn1qv3qfze5t/lrZfLM94/SZuPAEATBNgxXTZ4etlGWvIiHi8KYvZrGwChDBKzOqyGUEyjLXlku+AReCHiqhXqt7Vu0PPGw679XGzV8AfspzRwcoSubHLtNOyWn/cdRuNhusViy2p1Wp5rut69WrfzGrM13cXGrN/aDBBDKqe2nBaCifkBCxOCMTBout2ax1dnDdmZ0HKHBtzDFGv1Buqx+HHc/PCH7Uc77EizmGM0XES4+ILH5Kc7XWthiTkGADhFL27ni6H2325SPB8h44DgSzfzbtKTuCShDHOXSELQrG8inX/5QaiGXK2pFqQBJGE8Uq6Fmq88TIGcsDT0rX6U5FEkYyBzh3QeVoHMTkY8jw7cPMcCWMhpjjshCjRWfnWoLoVPNhllwkjkSI5Nm0MMN6yjHV6EgfZWttjw0imKE5Tp+3fYef/M0QzqjctzEgrp0ZTjDOms3i6r2o3Emakl9cM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"},d993:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAB/UlEQVQ4jZWVv2sUURSFvzO7ZDsRBP8BG8HC1t5CI8YVFmxcNCb+jGARbSwULNTCtdJSEAmkFJSIUTSCf4C1vYWlgoUxLnPkypt13JmdbE4z83be/d557917VxsbG9+yLPsIdAFsU1YxlsQUehqcTNIn2ydsP5kmqkH3gHngSwYcBlaARdsrk2MaNQBuAm+Bg+008wwQC/SB38BCE2FM4fA68A44Ep/ape8BHALn0nga8CAB30g6Wpx/GRqXMW87T+CZtNAkFcB1SbPlOe2agAXbHUmnga0Jju8WQNuz45lRBw0FcDOAkmZs92NrKbhw+Bo4VolsgAYgsqETC0jatH0euJWA7ycBG6EJ3M/z/Ieky5IOAQeA55J64TzP89qiyCq/VKvnCvA5Ab8DvVFwlm0PLZdovKdzvA3sB74Cu4HHxcIFsJhbC63RQ+AO8FLSPuARcBVYrU79p6YzjbRZTqXXTdu9ZnuX7bOSfpUKZSpoOFyW9Ao4Xt5aKpAt2xdimJrIttBBAq5JmosbrtHFOMr0bI9X3jj0fsrDNWCuyhq5jXS6FIWRnOapKVWgD4Ab6VK6FVIN2Hac6c9IO0lFlxtBo30FcL24lB1oKcuyju3oEX8dB/RZsv7C9skp/zb+c9xqtRaHw2FkQxTK3rakU7Y/BHCHDse1ZHuPpN4fmKe493LXILUAAAAASUVORK5CYII="},ef28:function(t,e,i){"use strict";var n=i("9cbf"),a=i.n(n);a.a},efab:function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-countdown"},[t.showDay&&0!=t.d?i("v-uni-view",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,background:t.backgroundColor}},[t._v(t._s(t.d))]):t._e(),t.showDay&&0!=t.d?i("v-uni-view",{staticClass:"uni-countdown__splitor",style:{color:t.textColor}},[t._v("天")]):t._e(),i("v-uni-view",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,background:t.backgroundColor}},[t._v(t._s(t.h))]),i("v-uni-view",{staticClass:"uni-countdown__splitor",style:{color:t.textColor}},[t._v(t._s(t.showColon?":":"时"))]),i("v-uni-view",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,background:t.backgroundColor}},[t._v(t._s(t.i))]),i("v-uni-view",{staticClass:"uni-countdown__splitor",style:{color:t.textColor}},[t._v(t._s(t.showColon?":":"分"))]),i("v-uni-view",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,background:t.backgroundColor}},[t._v(t._s(t.s))]),t.showColon?t._e():i("v-uni-view",{staticClass:"uni-countdown__splitor",style:{color:t.textColor}},[t._v("秒")])],1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},facc:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"uni-countdown",props:{showDay:{type:Boolean,default:!0},showColon:{type:Boolean,default:!0},backgroundColor:{type:String,default:"#FFFFFF"},borderColor:{type:String,default:"#000000"},color:{type:String},textColor:{type:String,default:"#000000"},splitorColor:{type:String,default:"#000"},day:{type:Number,default:0},hour:{type:Number,default:0},minute:{type:Number,default:0},second:{type:Number,default:0}},data:function(){return{timer:null,d:"00",h:"00",i:"00",s:"00",leftTime:0,seconds:0}},created:function(t){var e=this;this.seconds=this.toSeconds(this.day,this.hour,this.minute,this.second),this.countDown(),this.timer=setInterval((function(){e.seconds--,e.seconds<0?e.timeUp():e.countDown()}),1e3)},beforeDestroy:function(){clearInterval(this.timer)},methods:{toSeconds:function(t,e,i,n){return 60*t*60*24+60*e*60+60*i+n},timeUp:function(){clearInterval(this.timer),this.$emit("timeup")},countDown:function(){var t=this.seconds,e=0,i=0,n=0,a=0;t>0?(e=Math.floor(t/86400),i=Math.floor(t/3600)-24*e,n=Math.floor(t/60)-24*e*60-60*i,a=Math.floor(t)-24*e*60*60-60*i*60-60*n):this.timeUp(),e<10&&(e="0"+e),i<10&&(i="0"+i),n<10&&(n="0"+n),a<10&&(a="0"+a),this.d=e,this.h=i,this.i=n,this.s=a}}};e.default=n}}]);