<template>
	<view class="adbrathing" 
	v-show="adbshow" 
	v-bind:class="['adbrathing'+jdata.params.style.align,!hideanimation?'pc':hideanimation?'hc':'']" 
	:style="{top:jdata.params.style.top+'%'}" >
		<view class="adbrathing-c">
			<view class="adbrathing-l">
				<image class="user-head-img" :src="log.avatar" mode="aspectFill"></image>
				<view class="user-name">
					{{log.nickname||''}}
				</view>
			</view>
			<view class="adbrathing-r">
				 {{log.ctime||''}}{{log.desc||''}}
			</view>
		</view>
	</view>
</template>

<script>
import { apiBaseUrl } from '@/config/config.js';
export default {
	name: "jshoprecord",
	props: {
		jdata:{
			// type: Object,
			required: true,
		},
		//记录显示的位置类型
		ltype:{
			type: String,
			required: false,
			default:'home',
		},
		//记录显示的位置的值
		lvalue:{
			type: String,
			required: false,
			default:'0',
		}
	},
    data() {
        return { 
			adbshow:false,
			hideanimation: true,
			log:{
				avatar:'/static/demo-img/user-head.jpg',
				nickname:'',
				desc:'',
				ctime:'',
			},
			times:{},//定时器
		};
    },
	methods:{
		//隐藏
		hideLog(){
			var _this = this;	
			_this.times = setInterval(function(){
				_this.adbshow = !_this.adbshow;
				_this.hideanimation = !_this.hideanimation;
				clearInterval(_this.times);
				_this.times = setInterval(function(){
					_this.getRecod();
				},5000);
			},3000)
		},
		//获取日志
		getRecod(){
			var _this = this;
			if(_this.times !={}){
				clearInterval(_this.times);
			}
			var data = {
				type:_this.ltype,
				value:_this.lvalue,
				method:'pages.getrecod',
			};
			uni.request({
				url: apiBaseUrl+'api.html',
				data: data,
				header: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				method: 'POST',
				success: (response) => {
					var res = response.data;
					if(res.status == true){
						if(res.data && res.data.nickname && res.data.ctime && res.data.desc){
							_this.log = res.data;
							_this.adbshow = true;
							_this.hideanimation = false;
						}
					}
                    _this.hideLog();
				}
			});
		}
	},
	mounted() {
		this.getRecod();
	}
}
</script>

<style lang="scss">
.adbrathing{
	position: fixed;
	// top: 100px;
	// right: 30upx;
	// max-width: 400upx;
	height: 70upx;
	background-color: rgba(0,0,0,.5);
	border-radius: 10upx;
	padding: 10upx;
	z-index: 666;
	.adbrathing-c{
		width: 100%;
		height: 100%;
		overflow: hidden;
		color: #fff;
		font-size: 24upx;
		
		.adbrathing-l{
			display: inline-block;
			height: 100%;
			float: left;
			overflow: hidden;
			.user-head-img{
				width: 50upx;
				height: 50upx;
				border-radius: 50%;
				float: left;
				
			}
			.user-name{
				float: left;
				display: inline-block;
				height: 100%;
				line-height: 50upx;
				margin: 0 4upx 0 10upx;
				max-width: 120upx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
		
		.adbrathing-r{
			float: left;
			height: 100%;
			display: inline-block;
			line-height: 50upx;
		}
	}
	
}
.adbrathingleft{
	left: 30upx
}
.adbrathingright{
	right: 30upx
}
.pc{
	animation: showcenter .55s;
}
.hc{
	animation: hidecenter .55s;
}
@keyframes showcenter{
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
@keyframes hidecenter{
	0% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
}
</style>