<template>
	<div class="buyNow-box">
		<div class="showPrice" v-if="priceShow">
			<div class="buynow-select">
				<div class="selectedN buynow-quan" :class="{'selectedY': seletedAll}"></div>
				<span @click="allSelect(seletedAll)">全选</span>
			</div>
			<p>合计：<span>￥800.00</span><br />(含运费)</p>
			<div class="goShop">立即购买</div>
			<div style="clear: both;"></div>
		</div>
		
		<div  class="showPrice" v-else="">
			<div class="buynow-select">
				<div class="selectedN buynow-quan"></div>
				<span>全选</span>
			</div>
			<p></p>
			<div class="goShop">删除</div>
			<div style="clear: both;"></div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
export default{
	data(){
		return {
			
		}
	},
	computed: {
		...mapGetters(['priceShow']),
		seletedAll(){
//			this.getCartList.every(function(val){
//				console.log(val)
//				return val.selectsingle;
//			});
		}
	},
	methods: {
		allSelect(){
			console.log(1)
		}
	}
}
</script>
