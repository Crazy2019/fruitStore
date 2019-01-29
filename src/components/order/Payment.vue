<template>
<div class="myOrder-list">
	<div class="f-groupList" v-for="(item, index) in vlaOne" :key="index">
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
			<div class="f-group-tran"></div>
		</div>
		<p class="f-group-methods">已付款<b>{{succList[index].price | unitMoney('元')}}</b>
			<span v-if="succList[index].couponSum>0">，使用{{succList[index].couponSum | unitMoney('元')}}优惠券</span>
			<span v-else></span>
		</p>
	</div>
</div>
</template>

<script>
export default{
	props: {successOrder: Array,payFaiOrder:Array},
	data(){
		return {
			vlaOne: [],
			succList: '',
		}
	},
	created(){
		this.successOrder.map(vla=>{
			if(vla.length != 0){
				this.vlaOne.push(vla)
			}
		});
		const arr = [];
		this.payFaiOrder.map(val=>{
			const price1 = val.toastSum;const sum1 = val.list[0].state;const couponSum = val.couponSum;
			if(sum1 === 2 && couponSum != undefined){
				arr.push({'price':price1, 'sum':sum1,'couponSum': couponSum});
			}else if(sum1 === 2 && couponSum === undefined){
				arr.push({'price':price1, 'sum':sum1,'couponSum': 0});
			}
		})
		this.succList = arr;
	}
}
</script>

<style>
</style>