(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-member-after_sale-index"],{"09fe":function(t,e,i){"use strict";i("4160"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{type_list:[{value:"1",name:"仅退款",checked:!0,disabled:!1},{value:"2",name:"退货退款",checked:!1,disabled:!1}]}},methods:{radioChange:function(t){var e=this;this.type_list.forEach((function(i){i.value===t.target.value?(i.checked=!0,e.aftersale_type=t.target.value):i.checked=!1})),this.type_list[0].checked?this.refund_input_noedit=!0:this.refund_input_noedit=!1}}};e.default=a},"16a2":function(t,e,i){var a=i("203b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("5593d1b5",a,!0,{sourceMap:!1,shadowMode:!1})},"203b":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".content-top[data-v-2b501510]{\n}.list-goods-name[data-v-2b501510]{font-size:%?26?%;width:100%!important}.cart-checkbox-item[data-v-2b501510]{position:relative}.invoice-type .uni-list-cell[data-v-2b501510]{display:inline-block;font-size:%?26?%;color:#333;position:relative;margin-left:%?50?%}.invoice-type .uni-list-cell>uni-view[data-v-2b501510]{display:inline-block}.invoice-type-icon[data-v-2b501510]{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.invoice-type-c[data-v-2b501510]{margin-left:%?50?%;line-height:2}.cell-item-ft .cell-bd-input[data-v-2b501510]{text-align:right;width:%?500?%;font-size:%?28?%}.right-img[data-v-2b501510]{border-bottom:0}.cell-textarea[data-v-2b501510]{padding:0 %?26?% %?20?%}.cell-textarea uni-textarea[data-v-2b501510]{width:100%;height:%?200?%;font-size:%?26?%;color:#333}.evaluate-c-b[data-v-2b501510]{overflow:hidden;padding:0 %?20?%}.upload-img[data-v-2b501510]{width:%?146?%;height:%?146?%;margin:%?14?%;text-align:center;color:#999;font-size:%?22?%;border:%?2?% solid #e1e1e1;border-radius:%?4?%;display:inline-block;float:left;padding:%?24?% 0}.goods-img-item[data-v-2b501510]{width:%?174?%;height:%?174?%;padding:%?14?%;float:left;position:relative}.goods-img-item[data-v-2b501510]:nth-child(4n){margin-right:0}.goods-img-item uni-image[data-v-2b501510]{width:100%;height:100%}.del[data-v-2b501510]{width:%?30?%!important;height:%?30?%!important;position:absolute;right:0;top:0;z-index:999}.cell-header[data-v-2b501510]{padding:10rpxpx 0;margin:0;margin-left:%?20?%;font-size:%?28?%;font-weight:550}.mr5[data-v-2b501510]{margin-right:%?10?%}.inputStyle[data-v-2b501510]{display:inline-block;border:%?2?% solid #ccc;height:%?13?%;line-height:%?13?%;width:%?60?%;text-align:center;font-size:%?24?%;vertical-align:middle;margin-bottom:%?8?%}\n.refund-price[data-v-2b501510]{border-bottom:none}.refund-tip[data-v-2b501510]{padding:0 %?26?% %?10?%;text-align:right}",""]),t.exports=e},5077:function(t,e,i){"use strict";i.r(e);var a=i("8254"),s=i("55e1");for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);i("993c");var r,l=i("f0c5"),o=Object(l["a"])(s["default"],a["b"],a["c"],!1,null,"2b501510",null,!1,a["a"],r);e["default"]=o.exports},"55e1":function(t,e,i){"use strict";i.r(e);var a=i("e8e6"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=s.a},"7b7e":function(t,e,i){"use strict";i.r(e);var a=i("e8df"),s=i("84cd");for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);var r,l=i("f0c5"),o=Object(l["a"])(s["default"],a["b"],a["c"],!1,null,"8d8a7300",null,!1,a["a"],r);e["default"]=o.exports},8254:function(t,e,i){"use strict";var a,s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"cell-group margin-cell-group cell-header",staticStyle:{"margin-left":"0","padding-left":"20rpx"}},[t._v("请选择退货商品和数量")]),i("v-uni-form",{attrs:{"report-submit":"true"},on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content-top"},[i("v-uni-view",{staticClass:"img-list cart-list"},t._l(t.items,(function(e,a){return i("v-uni-checkbox-group",{key:a,staticClass:"cart-checkbox",attrs:{"data-idx":a,"data-itemid":e.id},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.checkboxChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cart-checkbox-item"},[i("v-uni-label",{staticClass:"uni-list-cell uni-list-cell-pd"},[i("v-uni-view",{staticClass:"cart-checkbox-c"},[e.disabled?i("v-uni-checkbox",{staticClass:"checkboxNo",attrs:{value:e.id,checked:e.checked,color:"#FF7159",disabled:e.disabled}}):i("v-uni-checkbox",{attrs:{value:e.id,checked:e.checked,color:"#FF7159"}})],1),i("v-uni-view",{staticClass:"img-list-item"},[i("v-uni-image",{staticClass:"img-list-item-l little-img have-none",attrs:{src:e.image_url,mode:"aspectFill"}}),i("v-uni-view",{staticClass:"img-list-item-r little-right"},[i("v-uni-view",{staticClass:"little-right-t"},[i("v-uni-view",{staticClass:"goods-name list-goods-name"},[t._v(t._s(e.name))])],1),e.addon?i("v-uni-view",{staticClass:"goods-item-c"},[i("v-uni-view",{staticClass:"goods-buy"},[i("v-uni-view",{staticClass:"goods-salesvolume mr5"},[t._v(t._s(e.addon))])],1)],1):t._e(),i("v-uni-view",{staticClass:"goods-item-c"},[i("v-uni-view",{staticClass:"goods-buy"},[i("v-uni-view",{staticClass:"goods-salesvolume mr5"},[t._v("购买数:"+t._s(e.nums))]),i("v-uni-view",{staticClass:"goods-salesvolume mr5"},[t._v("发货数量:"+t._s(e.sendnums))]),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:0!=e.reship_nums,expression:"item.reship_nums!=0"}],staticClass:"goods-salesvolume mr5"},[t._v("已退数量:"+t._s(e.reship_nums))]),e.disabled?t._e():i("v-uni-view",{staticClass:"goods-salesvolume"},[i("v-uni-label",[t._v("可退数：")]),i("v-uni-input",{ref:"input",refInFor:!0,staticClass:"inputStyle",attrs:{type:"number"},on:{focus:function(i){arguments[0]=i=t.$handleEvent(i),t.onFocus(e,a)},blur:function(i){arguments[0]=i=t.$handleEvent(i),t.updateNum(e,a)},click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)}},model:{value:e.returnNums,callback:function(i){t.$set(e,"returnNums",i)},expression:"item.returnNums"}})],1)],1)],1)],1)],1)],1)],1)],1)})),1),i("v-uni-view",{staticClass:"cell-group margin-cell-group"},[i("v-uni-view",{staticClass:"cell-item"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title"},[t._v("是否发货")])],1),i("v-uni-view",{staticClass:"cell-item-ft"},[i("v-uni-view",{staticClass:"uni-form-item uni-column invoice-type"},[i("v-uni-radio-group",{staticClass:"uni-list",on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.radioChange.apply(void 0,arguments)}}},t._l(t.type_list,(function(e,a){return i("v-uni-label",{key:a,staticClass:"uni-list-cell uni-list-cell-pd"},[i("v-uni-view",{staticClass:"invoice-type-icon"},[e.disabled?i("v-uni-radio",{staticClass:"a-radio radioNo",attrs:{id:e.name,value:e.value,checked:e.checked,disabled:e.disabled}}):i("v-uni-radio",{staticClass:"a-radio ",attrs:{id:e.name,value:e.value,checked:e.checked,disabled:e.disabled}})],1),i("v-uni-view",{staticClass:"invoice-type-c"},[i("v-uni-label",{staticClass:"label-2-text",attrs:{for:e.name}},[i("v-uni-text",[t._v(t._s(e.name))])],1)],1)],1)})),1)],1)],1)],1),i("v-uni-view",{staticClass:"cell-item refund-price"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title"},[t._v("退款金额")])],1),i("v-uni-view",{staticClass:"cell-item-ft"},[i("v-uni-input",{ref:"refund",staticClass:"cell-bd-input red-price",attrs:{type:"digit"},on:{focus:function(e){arguments[0]=e=t.$handleEvent(e),t.refundFocus.apply(void 0,arguments)}},model:{value:t.refund,callback:function(e){t.refund=e},expression:"refund"}})],1)],1),i("v-uni-view",{staticClass:"color-9 fsz24 refund-tip"},[t._v("可修改，最多￥"+t._s(t.maxRefund)+"，含发货邮费￥"+t._s(t.cost_freight))])],1),i("v-uni-view",{staticClass:"cell-group margin-cell-group"},[i("v-uni-view",{staticClass:"cell-item right-img"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title"},[t._v("上传凭证")])],1)],1),i("v-uni-view",{},[i("v-uni-view",{staticClass:"evaluate-c-b"},[t._l(t.images,(function(e,a){return i("v-uni-view",{key:a,staticClass:"goods-img-item"},[i("v-uni-image",{staticClass:"del",attrs:{src:"/static/image/del.png",mode:""},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.delImage(e)}}}),i("v-uni-image",{attrs:{src:e.url,mode:""},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickImg(e.url)}}})],1)})),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.isImage,expression:"isImage"}],staticClass:"upload-img",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.upImage.apply(void 0,arguments)}}},[i("v-uni-image",{staticClass:"icon",attrs:{src:"/static/image/camera.png",mode:""}}),i("v-uni-view",{},[t._v("上传照片")])],1)],2)],1)],1),i("v-uni-view",{staticClass:"cell-group margin-cell-group"},[i("v-uni-view",{staticClass:"cell-item right-img"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title"},[t._v("问题描述")])],1)],1),i("v-uni-view",{staticClass:"cell-textarea "},[i("v-uni-input",{attrs:{placeholder:"请您在此描述问题(最多200字)",maxlength:"200"},model:{value:t.reason,callback:function(e){t.reason=e},expression:"reason"}})],1)],1)],1),i("v-uni-view",{staticClass:"button-bottom",staticStyle:{"z-index":"200"}},[i("v-uni-button",{staticClass:"btn btn-b btn-square",attrs:{formType:"submit",disabled:t.submitStatus,loading:t.submitStatus}},[t._v("提交")])],1)],1)],1)},n=[];i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}))},"84cd":function(t,e,i){"use strict";i.r(e);var a=i("09fe"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=s.a},"993c":function(t,e,i){"use strict";var a=i("16a2"),s=i.n(a);s.a},e8df:function(t,e,i){"use strict";var a,s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-radio-group",{staticClass:"uni-list",on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.radioChange.apply(void 0,arguments)}}},t._l(t.type_list,(function(e,a){return i("v-uni-label",{key:a,staticClass:"uni-list-cell uni-list-cell-pd"},[i("v-uni-view",{staticClass:"invoice-type-icon"},[i("v-uni-radio",{staticClass:"a-radio",attrs:{id:e.name,value:e.value,checked:e.checked,disabled:e.disabled}})],1),i("v-uni-view",{staticClass:"invoice-type-c"},[i("v-uni-label",{staticClass:"label-2-text",attrs:{for:e.name}},[i("v-uni-text",[t._v(t._s(e.name))])],1)],1)],1)})),1)],1)},n=[];i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}))},e8e6:function(t,e,i){"use strict";var a=i("ee27");i("99af"),i("c740"),i("4160"),i("c975"),i("a434"),i("d3b7"),i("ac1f"),i("25f0"),i("1276"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=a(i("7b7e")),n={data:function(){return{type_list:[{value:"1",name:"未发货",checked:!0,disabled:!1},{value:"2",name:"已发货",checked:!1,disabled:!1}],order_id:"",items:[],item_ids:[],aftersale_type:1,refund:0,maxRefund:0,refund_show:0,images:[],reason:"",image_max:5,refund_input_noedit:!0,mode:"aspectFill",submitStatus:!1,checkedItems:[],isFlag:!0,cost_freight:0}},components:{jhlable:s.default},computed:{isImage:function(){var t=this.image_max-this.images.length;return t>0}},methods:{radioChange:function(t){var e=this;this.type_list.forEach((function(i){i.value===t.target.value?(i.checked=!0,e.aftersale_type=t.target.value):i.checked=!1})),this.type_list[0].checked?this.refund_input_noedit=!0:this.refund_input_noedit=!1},getOrderInfo:function(){var t=this,e={order_id:this.order_id};this.$api.orderDetail(e,(function(e){if(e.status)if(1!=e.data.text_status&&6!=e.data.text_status&&7!=e.data.text_status){var i=t.type_list;2==e.data.text_status&&(i[1].disabled=!0);for(var a,s={},n=0;n<e.data.items.length;n++)e.data.items[n].nums>=e.data.items[n].reship_nums&&(s=e.data.items[n].nums-e.data.items[n].reship_nums),s>0&&(a=!0),e.data.items[n].id=e.data.items[n].id.toString(),e.data.items[n].returnNums=s,e.data.items[n].returnStatus=a,e.data.items[n].checked=!1,e.data.items[n].returnNums>0?e.data.items[n].disabled=!1:e.data.items[n].disabled=!0;t.items=e.data.items,t.refund=t.$common.moneySum(e.data.order_amount-e.data.refunded,0),t.maxRefund=t.$common.formatMoney(e.data.order_amount-e.data.refunded,2,""),t.cost_freight=e.data.cost_freight,t.refund_show=e.data.payed-e.data.refunded,t.type_list=i}else t.$common.errorToBack("订单不可以进行售后");else t.$common.errorToBack("没有找到此订单")}))},checkboxChange:function(t){var e=t.target.dataset.itemid,i=this.checkedItems.findIndex((function(t){return t==e}));i>=0?this.checkedItems.splice(i,1):this.checkedItems.push(e),this.getReturnData()},onFocus:function(t,e){t.returnNums="",-1==this.checkedItems.indexOf(t.id)&&this.checkedItems.push(t.id),this.items[e].checked=!0,this.getReturnData()},refundFocus:function(t){this.refund=""},updateNum:function(t,e){var i=0;i=this.items[e].nums-this.items[e].reship_nums,i<t.returnNums&&(this.isFlag=!1,this.items[e].returnNums=i,this.$common.errorToShow("您填写的数量不对！")),""==t.returnNums&&(this.items[e].returnNums=i),this.isFlag=!0,this.items[e].returnNums=t.returnNums,this.getReturnData()},getReturnData:function(){var t=0;this.item_ids=[];for(var e=0;e<this.checkedItems.length;e++)for(var i=this.checkedItems[e],a=0;a<this.items.length;a++)if(this.items[a].id==i&&this.items[a].nums>=this.items[a].reship_nums){if(t=this.items[a].nums-this.items[a].reship_nums,!(t>=this.items[a].returnNums))return void this.$common.errorToShow("您填写的数量不对！");t=this.items[a].returnNums,this.item_ids=this.item_ids.concat({id:i,nums:t})}},submit:function(t){var e=this;this.submitStatus=!0;for(var i=[],a=0;a<this.images.length;a++)i=i.concat(this.images[a].image_id);if(!this.isFlag)return this.$common.errorToShow("您填写的数量不对！"),this.submitStatus=!1,!1;if(console.log(this.item_ids),this.item_ids.length<=0)return this.$common.errorToShow("请选择要售后的商品"),this.submitStatus=!1,!1;var s={order_id:this.order_id,type:this.aftersale_type,items:this.item_ids,images:i,refund:this.refund,reason:this.reason};this.$api.addAfterSales(s,(function(t){t.status?e.$common.successToShow("提交成功",(function(t){e.$common.navigateTo("/pages/member/order/orderdetail?order_id="+e.order_id)})):e.$common.errorToShow(t.msg)}),(function(t){e.submitStatus=!1}))},upImage:function(){var t=this,e=this.image_max-this.images.length;e>0&&this.$api.uploadImage(e,(function(e){e.status?(t.images.push(e.data),t.$common.successToShow(e.msg)):t.$common.errorToShow(e.msg)}))},delImage:function(t){for(var e=[],i=0;i<this.images.length;i++)this.images[i].image_id!=t.image_id&&e.push(this.images[i]);this.images=e},clickImg:function(t){uni.previewImage({urls:t.split()})}},onLoad:function(t){this.order_id=t.order_id,this.getOrderInfo(),this.getReturnData()}};e.default=n}}]);