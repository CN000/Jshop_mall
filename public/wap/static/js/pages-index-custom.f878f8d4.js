(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-custom"],{"1c1f":function(t,a,e){"use strict";var n=e("c49c"),i=e.n(n);i.a},"3e6a":function(t,a,e){"use strict";e.r(a);var n=e("5dfa"),i=e("b9dd");for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("1c1f");var d,r=e("f0c5"),s=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"18b998ed",null,!1,n["a"],d);a["default"]=s.exports},"5dfa":function(t,a,e){"use strict";var n={jshop:e("4bef").default},i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"content",staticStyle:{"padding-top":"0upx"}},[e("jshop",{attrs:{jdata:t.pageData}}),e("jihaiCopyright")],1)},o=[];e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return n}))},9040:function(t,a,e){"use strict";var n=e("ee27");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(e("4bef")),o=n(e("941d")),d=e("bc20"),r={mixins:[d.goods],components:{jihaiCopyright:o.default,jshop:i.default},data:function(){return{imageUrl:"/static/image/share_image.png",pageData:[],pageCode:"mobile_home",statusBarHeight:"0",customBarOpacity:!1,scrollTop:0,showLoad:!1,share_name:"",shareUrl:"/pages/share/jump"}},computed:{appTitle:function(){return this.$store.state.config.shop_name}},onLoad:function(t){t.page_code&&(this.pageCode=t.page_code),this.initData()},onPageScroll:function(t){t.scrollTop>50?this.customBarOpacity=!0:this.customBarOpacity=!1},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.searchBarOpacity=t>50},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},goSearch:function(){uni.navigateTo({url:"./search"})},initData:function(){var t=this;this.showLoad=!0,this.$api.getPageConfig({code:this.pageCode},(function(a){1==a.status&&(t.pageData=a.data.items,t.share_name=a.data.name,uni.setNavigationBarTitle({title:a.data.name}),setTimeout((function(){t.showLoad=!1}),600))}))},getShareUrl:function(){var t=this,a={client:2,url:"/pages/share/jump",type:1,page:7,params:{page_code:this.pageCode}},e=this.$db.get("userToken");e&&""!=e&&(a["token"]=e),this.$api.share(a,(function(a){t.shareUrl=a.data}))}},watch:{pageCode:{handler:function(){this.getShareUrl()},deep:!0}},onPullDownRefresh:function(){this.initData(),uni.stopPullDownRefresh()},onShareAppMessage:function(){return{title:this.share_name,path:this.shareUrl}}};a.default=r},b9dd:function(t,a,e){"use strict";e.r(a);var n=e("9040"),i=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a},c49c:function(t,a,e){var n=e("fd53");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("13e6581d",n,!0,{sourceMap:!1,shadowMode:!1})},fd53:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,".cell-item[data-v-18b998ed]{border:none}.cell-ft-text[data-v-18b998ed]{font-size:%?22?%;color:#999}.status_bar[data-v-18b998ed]{height:0;width:100%;position:fixed;top:0;z-index:999;background:transparent;-webkit-transition:all .5s;transition:all .5s}.custom-navbar[data-v-18b998ed]{height:40px;line-height:34px;position:fixed;width:100%;padding-left:%?26?%;top:0;z-index:999;background:transparent;-webkit-transition:all .5s;transition:all .5s}.index-logo[data-v-18b998ed]{width:%?140?%;height:%?70?%}.index-logo-img[data-v-18b998ed]{width:100%;height:100%}.isOpacity[data-v-18b998ed]{background:#fff;-webkit-transition:all .5s;transition:all .5s}\r\n\r\n/* iPhone X in portrait & landscape */@media only screen and (min-device-width:375px) and (max-device-width:812px) and (-webkit-device-pixel-ratio:3){.status_bar[data-v-18b998ed]{height:50px}.custom-navbar[data-v-18b998ed]{top:50px}}\r\n\r\n/* iPhone X in landscape */@media only screen and (min-device-width:375px) and (max-device-width:812px) and (-webkit-device-pixel-ratio:3) and (orientation:landscape){.status_bar[data-v-18b998ed]{height:50px}.custom-navbar[data-v-18b998ed]{top:50px}}\r\n\r\n/* iPhone X in portrait */@media only screen and (min-device-width:375px) and (max-device-width:812px) and (-webkit-device-pixel-ratio:3) and (orientation:portrait){.status_bar[data-v-18b998ed]{height:50px}.custom-navbar[data-v-18b998ed]{top:50px}}",""]),t.exports=a}}]);