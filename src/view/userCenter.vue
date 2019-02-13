<template>
	<div class="userCenter">
		<navbar></navbar>
		<div class="f-user-center">
			<span class="userPic"><img src="../assets/img/user-img0.jpg"/></span>
			<div class="user-btn">
				<div class="user-login" v-if="getIsLogin == false">
					<router-link to="/login" class="thisL">登录</router-link>
					<router-link to="/register">注册</router-link>
				</div>
				<p class="user-name" v-else="">欢迎<span>{{getUser.name}}</span>用户</p>
			</div>
		</div>
		
		<div class="user-content-list">
			<ul>
				<li>
					<router-link to="/spellGroup">
						<span class="user-num" v-if="getIsLogin == false">0</span>
						<span class="user-num" v-else="">{{spellGroupLength}}</span>
						<span class="user-text">我的拼团</span>
					</router-link>
				</li>
				<li>
					<router-link to="/coupons">
						<span class="user-num" v-if="getIsLogin == false">0</span>
						<span class="user-num" v-else="">{{this.$store.getters.getCouponLength}}</span>
						<span class="user-text">优惠券</span>
					</router-link>
				</li>
				<li>
					<router-link to="/my/Order">
						<span class="user-num" v-if="getIsLogin == false">0</span>
						<span class="user-num" v-else="">{{this.$store.state.cart.orderList.length}}</span>
						<span class="user-text">我的订单</span>
					</router-link>
				</li>
			</ul>
		</div>
		
		
		<div class="f-user-contentList">
			<div class="f-user-item">
				<div class="f-user-other">
					<router-link to="/collection">
						<img src="../assets/img/userCellection.png" class="" alt="" />
						<p>我的收藏</p>
					</router-link>
				</div>
				<div class="f-user-other">
					<a @click="noTry()">
						<img src="../assets/img/invitation.png" class="" alt="" />
						<p>邀请好友得大礼包</p>
					</a>
				</div>
				<!--<div class="f-user-other">
					<a href="###">
						<img src="../assets/img/single.png" class="" alt="" />
						<p>我的团单</p>
					</a>	
				</div>-->
			</div>
			
			
			<div class="f-user-item">
				<div class="f-user-other">
					<a @click="noTry()">
						<img src="../assets/img/address.png" class="" alt="" />
						<p>管理收获地址</p>
					</a>
				</div>
				<div class="f-user-other">
					<a @click="noTry()">
						<img src="../assets/img/set.png" class="" alt="" />
						<p>设置</p>
					</a>	
				</div>
				<div class="f-user-other">
					<a>
						<img src="../assets/img/service.png" class="" alt="" />
						<div>联系方式</div>
						<span>16625114720</span>
					</a>	
				</div>
			</div>
		</div>
		
		<p class="exitLogin" @click="exitClick()" v-if="getIsLogin == true">退出登录</p>
		
		<p class="copy">1458595024.qq.com 广东·深圳</p>
		
		
		<tabbar></tabbar>
	</div>
</template>

<script>
import nav from "../components/nav.vue";
import tabbar from "../components/tabbar";
import { mapGetters } from "vuex";
export default{
	components: {'navbar':nav,tabbar},
	data(){
		return {
			
		}
	},
	created(){
		this.$store.commit("GETNAVBAR", 'userCenter');
		this.$store.dispatch("navContent", true);
		this.$store.commit("GETNAVTITLE", "个人中心");
	},
	computed: {
		...mapGetters(['getIsLogin','getUser','spellGroupLength']),
	},
	methods: {
		exitClick(){
			this.$store.commit("EXITLOGIN");
		},
		noTry(){
			this.toast.popTip("开发中...");
		}
	}
}
</script>
