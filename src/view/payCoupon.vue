<template>
	<div class="myOrder-tab">
		<div class="coupons-list">
			<div class="coupons-flex" v-for="(item, index) in getPayCoupon" :key="index">
				<div class="coupons-left">
					<h3>抵用券</h3>
					<div class="coupons-pirce">
						<b>￥</b>{{item.price | unitFilter}}<span> 优惠券</span>
					</div>
					<p>订单满{{item.fullPrice | moneyFilter}}元</p>
				</div>
				<div class="coupons-right">
					<div><p>{{item.startTime}}</p><p>{{item.endTime}}</p></div>
					<button @click="USE(item)">立即使用</button>
				</div>
				<p style="clear: both;"></p>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
export default{
	computed: {
		...mapGetters(['getPayCoupon']),
	},
	methods: {
		USE(obj){
//			const price = obj.price;
			this.$router.push({path: '/pay', query: obj});
		}
	}
}
</script>
</script>
