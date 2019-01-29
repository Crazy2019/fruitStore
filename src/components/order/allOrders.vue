<template>
<div class="myOrder-list">
	<div class="f-groupList" v-for="(item, index) in getOrder" :key="index">
		<div class="f-groupList-Item" v-for="list in item" :key="list.id">
			<div class="f-groupItem">
				<img :src="list.img"/>
				<div class="f-groupItem-info">
					<h4>{{list.name}}</h4>
					<p>规格：{{list.weight}}</p>
					<div class="f-group-common">
						<span>数量：x{{list.shopNum}}</span>
						<span class="price-a">{{list.thePrice | moneyFilter}} / {{list.name.slice(-2,-1)}}</span>
					</div>
				</div>
			</div>
			<div class="f-group-tran"></div>
		</div>
		<p class="f-group-methods">
			<span v-if="item[0].state === 2">已付款</span>
			<span v-if="item[0].state === 3">支付失败</span>
			<b>{{allList[index].toastSum | unitMoney('元')}}</b>
			<small v-if="allList[index].couponSum != undefined">，使用{{allList[index].couponSum | unitMoney('元')}}优惠券</small>
		</p>
	</div>
</div>
</template>

<script>
export default{
	props: {
		getOrder: Array,payFaiOrder: Array
	},
	data(){
		return {
			SumList: '',
			allList: [],
		}
	},
	created() {
		const arr = [];
		this.payFaiOrder.map(d=>{
			const couponSum = d.couponSum;
			const toastSum1 = d.toastSum;
			arr.push({'toastSum': toastSum1, 'couponSum': couponSum})
		});
		this.allList = arr;
	}
}
</script>
