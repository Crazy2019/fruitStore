<template>
<div class="myOrder-list">
	<div class="f-groupList" v-for="(item, index) in stayOrderList" :key="index">
		<div class="f-groupList-Item" v-for="list in item" :key="list.id">
			<div class="f-groupItem">
				<img :src="list.img"/>
				<div class="f-groupItem-info">
					<h4>{{list.name}}</h4>
					<p>规格：{{list.weight}}</p>
					<div class="f-group-common">
						<span>数量：{{list.shopNum}}</span>
						<span class="price-a">{{list.thePrice | moneyFilter}} / {{list.name.slice(-2,-1)}}</span>
					</div>
				</div>
			</div>
			<div class="f-group-tran">
				<!--共{{list.shopNum}}件商品，免运费
				<span>实付：<em>{{list.price * list.shopNum | moneyFilter}}</em></span>-->
			</div>
		</div>
		<p class="f-group-methods">支付失败
			<b>{{faiList[index].price | unitMoney('元')}}</b>
			<span v-if="faiList[index].couponSum>0">，使用{{faiList[index].couponSum | unitMoney('元')}}优惠券</span>
			<span v-else></span>
		</p>
	</div>
</div>
</template>

<script>
export default{
	props: {stayOrder: Array,payFaiOrder:Array},
	data(){
		return {
			stayOrderList: [],
			faiList: '',
		}
	},
	created(){
		this.stayOrder.map(vla=>{
			if(vla.length != 0){
				this.stayOrderList.push(vla);
			}
		});
		const arr = [];
		this.payFaiOrder.map(val=>{
			let price1 = val.toastSum;let sum1 = val.list[0].state;const couponSum = val.couponSum;
			if(sum1 === 3 && couponSum != undefined){
				arr.push({'price':price1, 'sum':sum1,'couponSum': couponSum});
			}else if(sum1 === 3 && couponSum === undefined){
				arr.push({'price':price1, 'sum':sum1,'couponSum': 0});
			}
		})
		this.faiList = arr;
	}
}
</script>

<style>
</style>