<template>
	<div class="page-coupon">
		<topnav></topnav>
		<div class="coupons-list">
			<div class="coupons-flex" v-for="(item, index) in lingquCoupon" :key="index">
				<div class="coupons-left">
					<h3>抵用券</h3>
					<div class="coupons-pirce">
						<b>￥{{item.price | unitFilter}}</b><span> 优惠券</span>
					</div>
					<p>订单满元{{item.fullPrice | moneyFilter}}</p>
				</div>
				<div class="coupons-right">
					<div><p>{{item.startTime}}</p><p>{{item.endTime}}</p></div>
					<button @click="getCoupons(item, index)">立即领取</button>
				</div>
				<p style="clear: both;"></p>
			</div>
		</div>
		
		<div class="coupons-list">
			<div class="faicover" v-for="(item, index) in changeCoupon" :key="index">
				<div class="coupons-left">
					<h3>抵用券</h3>
					<div class="coupons-pirce">
						<b>￥</b>{{item.price | unitFilter}}<span> 优惠券</span>
					</div>
					<p>订单满{{item.fullPrice | moneyFilter}}元</p>
				</div>
				<div class="coupons-right">
					<div><p>{{item.startTime}}</p><p>{{item.endTime}}</p></div>
					<p class="coupons-circle">已领取</p>
				</div>
				<p style="clear: both;"></p>
			</div>
		</div>
	</div>
</template>

<script>
import Nav from "../components/nav.vue";
import { mapGetters } from "vuex";
export default{
	components: {'topnav': Nav},
	data(){
		return {
			couponList: [],
		}
	},
	created() {
		this.$store.commit("GETSHOWLOGO", true);
		this.$store.commit("GETSHOWGEOLOCATION", true);
		this.$store.commit("GETNAVTITLE", '领取优惠券');
	},
	methods: {
		getCoupons(obj, index){
			if(this.$store.state.setUset.isLogin === true){
				this.$store.commit('COUPONSPAGE', obj);
				this.$store.commit('SELECTPAGE',{obj, index});
				this.toast.popTip("领取成功已放入我的优惠券中");
			}else{
				this.$router.push('/login');
			}
		}
	},
	computed: {
		...mapGetters(['lingquCoupon','changeCoupon'])
	}
	
}
</script>
