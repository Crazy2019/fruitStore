<template>
	<div class="myOrder">
		<navbar class="orderNav"></navbar>
		
		<div class="myOrder-tab">
			<orderNav @getMsgOne="getMsgOne" :navOne="navOne" :navTwo="navTwo" :navThree="navThree"></orderNav>
			<div class="myOrder-content"  v-if="getOrder.length>0">
				<AllOrders :getOrder="getOrder" :payFaiOrder="payFaiOrder" v-show="msg == 0" />
				<Payment :successOrder="successOrder" :payFaiOrder="payFaiOrder" v-show="msg == 1" />
				<NoPay :stayOrder="stayOrder" :payFaiOrder="payFaiOrder" v-show="msg == 2" />
			</div>
			<div class="nobills" v-else="">您还没有下过单哦，抓紧时间去下单吧...</div>
		</div>
		
	</div>
</template>

<script>
import nav from "../components/nav.vue";
import tabbar from "../components/tabbar";
import AllOrders from "../components/order/allOrders.vue";
import NoPay from "../components/order/noPay.vue";
import Payment from "../components/order/Payment.vue";
import orderNav from "../components/order/orderNav.vue";
import { mapGetters } from "vuex"
export default {
	components: {'navbar': nav,tabbar,AllOrders,NoPay,Payment,orderNav},
	data() {
		return {
			msg: 0,
			navOne: '',
			navTwo: '',
			navThree: ''
		}
	},
	computed: {
		...mapGetters(['getOrder','successOrder','stayOrder','payFaiOrder']),
	},
	methods: {
		getMsgOne(val){
			this.msg = val;
		}
	},
	beforeRouteEnter(to, from, next){
		next( vm => {
			vm.navOne = "全部订单";
			vm.navTwo = "已付款";
			vm.navThree = "支付失败";
			vm.$store.commit("GETNAVBAR", 'myOrder');
			vm.$store.commit("GETSHOWLOGO", false);
			vm.$store.commit("GETSHOWGEOLOCATION", false);
			vm.$store.commit("GETNAVTITLE", "我的订单");
		})
	},
	beforeRouteLevae(to, from, next){
		next()
	}
}
</script>