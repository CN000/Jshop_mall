(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-member-collection-index"],{"24be":function(t,i,e){"use strict";e.r(i);var n=e("3fcf"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},"3fcf":function(t,i,e){"use strict";var n=e("ee27");e("99af"),e("4160"),e("a434"),e("ac1f"),e("159b"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("d0ff")),o=n(e("d2fa")),s=e("bc20"),d={mixins:[s.goods],components:{uniLoadMore:o.default},computed:{Screen_width:function(){return uni.getSystemInfoSync().windowWidth}},data:function(){return{visible:!1,start_slide_x:0,btnWidth:0,startX:0,LastX:0,startTime:0,screenName:"",page:1,limit:10,list:[],loadStatus:"more"}},onLoad:function(){this.goodsCollectionList()},onShow:function(){uni.getSystemInfoSync()},onReachBottom:function(){"more"===this.loadStatus&&this.goodsCollectionList()},methods:{goodsCollectionList:function(){var t=this,i={page:this.page,limit:this.limit};this.loadStatus="loading",this.$api.goodsCollectionList(i,(function(i){if(i.status){var e=i.data.list;e.forEach((function(i){t.$set(i,"slide_x",0),i.ctime=t.$common.timeToDate(i.ctime)})),t.list=[].concat((0,a.default)(t.list),(0,a.default)(e)),i.data.count>t.list.length?(t.page++,t.loadStatus="more"):t.loadStatus="noMore"}else t.$common.errorToShow(i.msg)}))},cancelEvent:function(){this.visible=!1},touchStart:function(t,i){var e=this;this.startCilentY=t.touches[0].clientY,this.startTime=t.timeStamp,this.start_slide_x=this.list[i].slide_x,uni.createSelectorQuery().in(this).selectAll(".group-btn").boundingClientRect().exec((function(t){null!=t[0]&&(e.btnWidth=-1*t[0][i].width)})),this.startX=t.touches[0].pageX,this.lastX=this.startX,this.list.forEach((function(t,e){e!==i&&(t.slide_x=0)}))},touchMove:function(t,i){var e=t.touches[0].clientY,n=e-this.startCilentY;if("Y"===this.direction||Math.abs(n)>20||!0===t.currentTarget.dataset.disabled)this.direction="";else{var a=t.touches[0].pageX,o=a-this.lastX,s=this.list[i].slide_x+o;s<=0&&s>=this.btnWidth&&(this.list[i].slide_x=s),this.lastX=a}},touchEnd:function(t,i){var e=10,n=t.timeStamp,a=this.startX-this.lastX;Math.abs(n-this.startTime)>200&&(e=this.btnWidth/-2),this.list[i].slide_x=a>e?this.btnWidth:a<-1*e?0:this.start_slide_x},recover:function(t){this.list[t].slide_x=0},collect:function(t){var i=this,e={goods_id:this.list[t].goods_id};this.$api.goodsCollection(e,(function(e){e.status?i.$common.successToShow(e.msg,(function(){i.$nextTick((function(){i.list.splice(t,1)}))})):i.$common.errorToShow(e.msg)}))}}};i.default=d},6862:function(t,i,e){"use strict";var n={uniLoadMore:e("d2fa").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"content"},[t.list.length?e("v-uni-view",{staticClass:"collection"},[t._l(t.list,(function(i,n){return e("v-uni-view",{key:n,staticClass:"container_of_slide"},[i.goods?e("v-uni-view",{staticClass:"slide_list",style:{transform:"translate3d("+i.slide_x+"px, 0, 0)"},on:{touchstart:function(i){arguments[0]=i=t.$handleEvent(i),t.touchStart(i,n)},touchend:function(i){arguments[0]=i=t.$handleEvent(i),t.touchEnd(i,n)},touchmove:function(i){arguments[0]=i=t.$handleEvent(i),t.touchMove(i,n)},click:function(i){arguments[0]=i=t.$handleEvent(i),t.recover(n)}}},[e("v-uni-view",{staticClass:"now-message-info",style:{width:t.Screen_width+"px"},attrs:{"hover-class":"uni-list-cell-hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goodsDetail(i.goods_id)}}},[e("v-uni-view",{staticClass:"icon-circle"},[e("v-uni-image",{staticClass:"goods-img",attrs:{src:i.goods.image_url,mode:"aspectFill"}})],1),e("v-uni-view",{staticClass:"list-right"},[e("v-uni-view",{staticClass:"list-title"},[t._v(t._s(i.goods.name))]),e("v-uni-view",{staticClass:"red-price"},[t._v("￥"+t._s(i.goods.price))]),e("v-uni-view",{staticClass:"list-detail"},[t._v(t._s(i.ctime))])],1),e("v-uni-view",{staticClass:"list-right-1"},[e("v-uni-image",{staticClass:"cell-ft-next icon",attrs:{src:"/static/image/right.png"}})],1)],1),e("v-uni-view",{staticClass:"group-btn"},[e("v-uni-view",{staticClass:"removeM btn-div",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.collect(n)}}},[t._v("取消")])],1),e("v-uni-view",{staticStyle:{clear:"both"}})],1):t._e()],1)})),e("uni-load-more",{attrs:{status:t.loadStatus}})],2):e("v-uni-view",{staticClass:"collection-none"},[e("v-uni-image",{staticClass:"collection-none-img",attrs:{src:"/static/image/order.png",mode:""}})],1)],1)},o=[];e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}))},"7b80":function(t,i,e){var n=e("dcbd");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("7de2a02c",n,!0,{sourceMap:!1,shadowMode:!1})},"7ec8":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"uni-load-more",props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},color:{type:String,default:"#999"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}}},data:function(){return{}}};i.default=n},"832f":function(t,i,e){"use strict";var n=e("7b80"),a=e.n(n);a.a},8785:function(t,i,e){var n=e("e61a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("77f11666",n,!0,{sourceMap:!1,shadowMode:!1})},"95e3":function(t,i,e){"use strict";var n,a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"uni-load-more"},[e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.status&&t.showIcon,expression:"status === 'loading' && showIcon"}],staticClass:"uni-load-more__img"},[e("v-uni-view",{staticClass:"load1"},[e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}})],1),e("v-uni-view",{staticClass:"load2"},[e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}})],1),e("v-uni-view",{staticClass:"load3"},[e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}})],1)],1),e("v-uni-text",{staticClass:"uni-load-more__text",style:{color:t.color}},[t._v(t._s("more"===t.status?t.contentText.contentdown:"loading"===t.status?t.contentText.contentrefresh:t.contentText.contentnomore))])],1)},o=[];e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}))},b241:function(t,i,e){"use strict";var n=e("8785"),a=e.n(n);a.a},b6802:function(t,i,e){"use strict";function n(t,i){(null==i||i>t.length)&&(i=t.length);for(var e=0,n=new Array(i);e<i;e++)n[e]=t[e];return n}e.d(i,"a",(function(){return n}))},b8ba:function(t,i,e){"use strict";e.r(i);var n=e("7ec8"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},bc20:function(t,i,e){"use strict";e("c975"),e("b64b"),Object.defineProperty(i,"__esModule",{value:!0}),i.tools=i.checkLogin=i.jumpBackPage=i.goBack=i.goods=i.orders=void 0;var n={mounted:function(){},methods:{orderDetail:function(t){this.$common.navigateTo("/pages/member/order/orderdetail?order_id="+t)},toPay:function(t){this.$common.navigateTo("/pages/goods/payment/index?order_id="+t+"&type=1")},toEvaluate:function(t){this.$common.navigateTo("/pages/member/order/evaluate?order_id="+t)},showExpress:function(t,i){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=encodeURIComponent("code="+t+"&no="+i+"&add="+e);this.$common.navigateTo("/pages/member/order/express_delivery?params="+n)}}};i.orders=n;var a={mounted:function(){},methods:{goodsDetail:function(t){this.$common.navigateTo("/pages/goods/index/index?id="+t)},goodsList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i="/pages/classify/index";Object.keys(t).length&&(i=this.$common.builderUrlParams(i,t)),this.$common.navigateTo(i)},groupDetail:function(t,i){this.$common.navigateTo("/pages/goods/index/group?id="+t+"&group_id="+i)},pintuanDetail:function(t,i){i?this.$common.navigateTo("/pages/goods/index/pintuan?id="+t+"&team_id="+i):this.$common.navigateTo("/pages/goods/index/pintuan?id="+t)}}};i.goods=a;var o={onBackPress:function(t){if("navigateBack"===t.from)return!1;var i=["/pages/cart/index/index","/pages/member/index/index"],e=this.$store.state.redirectPage;return i.indexOf(e)>-1?(this.$store.commit({type:"redirect",page:""}),uni.switchTab({url:"/pages/index/index"}),!0):void 0},backBtn:function(){var t=getCurrentPages();t.length>1?uni.navigateBack({delta:1}):uni.switchTab({url:"/pages/index/index"})}};i.goBack=o;var s={methods:{handleBack:function(){var t=this.$store.state.redirectPage;console.log(t),this.$store.commit({type:"redirect",page:""});var i=["/pages/index/index","/pages/member/index/index"];i.indexOf(t)>-1?uni.switchTab({url:t}):t?uni.redirectTo({url:t}):uni.switchTab({url:"/pages/index/index"})}}};i.jumpBackPage=s;var d={methods:{checkIsLogin:function(){uni.showToast({title:"请先登录！",icon:"none",duration:800,success:function(t){setTimeout((function(){uni.hideToast(),uni.navigateTo({url:"/pages/login/login/index1"})}),800)}})}}};i.checkLogin=d;var r={methods:{copyData:function(t){var i=this;uni.setClipboardData({data:t,success:function(){i.$common.errorToShow("复制成功")}})}}};i.tools=r},c034:function(t,i,e){"use strict";e.r(i);var n=e("6862"),a=e("24be");for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("832f");var s,d=e("f0c5"),r=Object(d["a"])(a["default"],n["b"],n["c"],!1,null,"d27b82ca",null,!1,n["a"],s);i["default"]=r.exports},d0ff:function(t,i,e){"use strict";e.r(i);var n=e("b6802");function a(t){if(Array.isArray(t))return Object(n["a"])(t)}e("a4d3"),e("e01a"),e("d28b"),e("a630"),e("e260"),e("d3b7"),e("3ca3"),e("ddb0");function o(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var s=e("dde1");function d(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t){return a(t)||o(t)||Object(s["a"])(t)||d()}e.d(i,"default",(function(){return r}))},d2fa:function(t,i,e){"use strict";e.r(i);var n=e("95e3"),a=e("b8ba");for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("b241");var s,d=e("f0c5"),r=Object(d["a"])(a["default"],n["b"],n["c"],!1,null,"4403899d",null,!1,n["a"],s);i["default"]=r.exports},dcbd:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,".collection .goods-img[data-v-d27b82ca]{width:%?150?%;height:%?150?%}.container_of_slide[data-v-d27b82ca]{width:100%;overflow:hidden}.slide_list[data-v-d27b82ca]{-webkit-transition:all .1s;transition:all .1s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;min-width:200%}.now-message-info[data-v-d27b82ca]{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:16px;clear:both;padding:%?20?% %?26?%;margin-bottom:%?2?%;background:#fff}.now-message-info[data-v-d27b82ca],\n.group-btn[data-v-d27b82ca]{float:left}.group-btn[data-v-d27b82ca]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:%?190?%;min-width:%?100?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.group-btn .btn-div[data-v-d27b82ca]{height:%?190?%;color:#fff;text-align:center;padding:0 %?50?%;font-size:%?34?%;line-height:%?190?%}.group-btn .top[data-v-d27b82ca]{background-color:#fa3}.group-btn .removeM[data-v-d27b82ca]{background-color:#ff3b44}.icon-circle[data-v-d27b82ca]{width:%?150?%;height:%?150?%;float:left}.list-right[data-v-d27b82ca]{float:left;margin-left:%?25?%;height:%?150?%}.list-right-1[data-v-d27b82ca]{float:right;color:#a9a9a9}.list-title[data-v-d27b82ca]{width:%?490?%;line-height:1.5;overflow:hidden;color:#333;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;font-size:%?26?%;color:#333;min-height:%?80?%}.list-detail[data-v-d27b82ca]{width:%?460?%;font-size:%?24?%;color:#a9a9a9;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;overflow:hidden}.collection-none[data-v-d27b82ca]{text-align:center;padding:%?200?% 0}.collection-none-img[data-v-d27b82ca]{width:%?274?%;height:%?274?%}",""]),t.exports=i},dde1:function(t,i,e){"use strict";e.d(i,"a",(function(){return a}));e("a630"),e("fb6a"),e("d3b7"),e("25f0"),e("3ca3");var n=e("b6802");function a(t,i){if(t){if("string"===typeof t)return Object(n["a"])(t,i);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Object(n["a"])(t,i):void 0}}},e61a:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-load-more[data-v-4403899d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-load-more__text[data-v-4403899d]{font-size:%?26?%;color:#999}.uni-load-more__img[data-v-4403899d]{height:24px;width:24px;margin-right:10px}.uni-load-more__img > uni-view[data-v-4403899d]{position:absolute}.uni-load-more__img > uni-view uni-view[data-v-4403899d]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#999;position:absolute;opacity:.2;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-4403899d 1.56s ease infinite;animation:load-data-v-4403899d 1.56s ease infinite}.uni-load-more__img > uni-view uni-view[data-v-4403899d]:nth-child(1){-webkit-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.uni-load-more__img > uni-view uni-view[data-v-4403899d]:nth-child(2){-webkit-transform:rotate(180deg);transform:rotate(180deg);top:11px;right:0}.uni-load-more__img > uni-view uni-view[data-v-4403899d]:nth-child(3){-webkit-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.uni-load-more__img > uni-view uni-view[data-v-4403899d]:nth-child(4){top:11px;left:0}.load1[data-v-4403899d],\n.load2[data-v-4403899d],\n.load3[data-v-4403899d]{height:24px;width:24px}.load2[data-v-4403899d]{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-4403899d]{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.load1 uni-view[data-v-4403899d]:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-4403899d]:nth-child(1){-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-4403899d]:nth-child(1){-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-4403899d]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-4403899d]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-4403899d]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-4403899d]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-4403899d]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-4403899d]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-4403899d]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-4403899d]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-4403899d]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-4403899d{0%{opacity:1}100%{opacity:.2}}',""]),t.exports=i}}]);