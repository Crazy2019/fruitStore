<template>
	<div class="myOrder">
		<nav-bar  class="orderNav"></nav-bar>
		
		<div class="myOrder-tab">
			<orderNav @getMsgOne="getMsgOne" :navOne="navOne" :navTwo="navTwo" :navThree="navThree"></orderNav>
			<div class="coupons-content">
				<div class="coupons-list" v-show="mes == 0">
					<div v-if="eachCoupon.length>0">
						<div class="coupons-flex" v-for="(item, index) in eachCoupon" :key="index">
							<div class="coupons-left">
								<h3>抵用券</h3>
								<div class="coupons-pirce">
									<b>￥</b>{{item.price | unitFilter}}<span> 优惠券</span>
								</div>
								<p>订单满{{item.fullPrice | moneyFilter}}元</p>
							</div>
							<div class="coupons-right">
								<div><p>{{item.startTime}}</p><p>{{item.endTime}}</p></div>
								<button><router-link to="/">立即使用</router-link></button>
							
							</div>
							<p style="clear: both;"></p>
						</div>
					</div>
					<div class="nofailure" v-else="">暂无优惠券，领取<router-link to="/goCoupons">优惠券</router-link></div>
				</div>
				
				<div class="coupons-list" v-show="mes == 1">
					<div v-if="useCoupon.length>0">
						<div class="faicover" v-for="(item, index) in useCoupon" :key="index">
							<div class="coupons-left">
								<h3>抵用券</h3>
								<div class="coupons-pirce">
									<b>￥</b>{{item.price | unitFilter}}<span> 优惠券</span>
								</div>
								<p>订单满{{item.fullPrice | moneyFilter}}元</p>
							</div>
							<div class="coupons-right">
								<div><p>{{item.startTime}}</p><p>{{item.endTime}}</p></div>
								<p class="coupons-circle">已使用</p>
							</div>
							<p style="clear: both;"></p>
						</div>
					</div>
					<div class="nofailure" v-else="">还未使用优惠券</div>
				</div>
				
				<div class="coupons-list" v-show="mes == 2">
					<div v-if="failureCoupon.length>0">
						<div class="faicover" v-for="(item, index) in failureCoupon" :key="index">
							<div class="coupons-left">
								<h3>抵用券</h3>
								<div class="coupons-pirce">
									<b>￥</b>{{item.price | unitFilter}}<span> 优惠券</span>
								</div>
								<p>订单满{{item.fullPrice | moneyFilter}}元</p>
							</div>
							<div class="coupons-right">
								<div><p>{{item.startTime}}</p><p>{{item.endTime}}</p></div>
								<p class="coupons-circle">已失效</p>
							</div>
							<p style="clear: both;"></p>
						</div>
					</div>
					<div class="nofailure" v-else="">无失效优惠券</div>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
import nav from "../components/nav.vue";
import orderNav from "../components/order/orderNav.vue";
import { mapGetters } from "vuex";
export default{
	components: {'navBar': nav,orderNav},
	data() {
		return {
			mes: 0,
			navOne: '',
			navTwo: '',
			navThree: '',
		}
	},
	beforeRouteEnter(to, from, next){
		next( vm => {
			vm.navOne = "全部优惠券";
			vm.navTwo = "已使用";
			vm.navThree = "已失效";
			vm.$store.dispatch("navContent", false);
			vm.$store.commit("GETNAVTITLE", "优惠券");
		})
	},
	beforeRouteLevae(to, from, next){
		next()
	},
	methods: {
		getMsgOne(val){
			this.mes = val;
		},
	},
	computed: {
		...mapGetters(['eachCoupon','useCoupon','failureCoupon']),
	}
}
</script>
