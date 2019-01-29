<template>
	<div class="shopping-cart">
		<cartNav @editOut="editOut"></cartNav>
		
		<div class="shop-cartBox">
			<ul class="shop-cart-list" v-if="getCartList.length > 0">
				<li v-for="(item, index) in getCartList" :key="index">
					<div class="selectedN" :class="{'selectedY': item.selectsingle}" @click="item.selectsingle = !item.selectsingle"></div>
					<img :src="item.img" alt="" />
					<div class="shop-cart-info">
						<h3><span>{{item.name}}</span></h3>
						<div class="specifications">
							价格：<span class="price-cart">{{item.thePrice * item.shopNum | unitMoney('元')}}</span>
						</div>
						<div class="cart-computed">
							<span @click="changeNum(item,index, -1)">-</span>
							<input type="text" v-model="item.shopNum" disabled="" />
							<span @click="changeNum(item,index, 1)">+</span>
							<p style="clear: both;"></p>
						</div>
					</div>
				</li>
			</ul>
			
			<div class="cartempyt" v-else>您的购物车还是空的，赶紧行动加入吧 <router-link to="/">go</router-link> !</div>
		</div>
		
		<div class="buyNow-box">
			<div class="showPrice" v-if="priceShow">
				<div class="buynow-select" @click="allSelect(seletedAll)">
					<div class="selectedN buynow-quan" :class="{'selectedY': seletedAll}"></div>
					<span>全选</span>
				</div>
				<p>合计：<span>{{totalSum | unitMoney('元')}}</span><br />(含运费)</p>
				<div class="goShop" @click="goOrder()">立即购买</div>
				<div style="clear: both;"></div>
			</div>
			
			<div  class="showPrice" v-else="">
				<div class="buynow-select" @click="allSelect(seletedAll)">
					<div class="selectedN buynow-quan" :class="{'selectedY': seletedAll}"></div>
					<span>全选</span>
				</div>
				<p></p>
				<div class="goShop" @click="delectShopList()">删除</div>
				<div style="clear: both;"></div>
			</div>
		</div>
		<tabbar></tabbar>
	</div>
</template>

<script>
import cartNav from '../components/cartNav.vue';
import tabbar from "../components/tabbar.vue";
import { mapGetters } from 'vuex';
export default{
	components: {cartNav,tabbar},
	data(){
		return {
		
		}
	},
	created(){
		this.$store.commit("GETNAVBAR", 'order');
	},
	methods: {
		editOut(){
			if(this.getCartList.length > 0){
				this.$store.state.Ordinary.priceShow = !this.$store.state.Ordinary.priceShow;
				if(this.$store.state.Ordinary.priceShow === false || this.$store.state.Ordinary.priceShow === true){
					for(let i=0; i<this.getCartList.length; i++){
						this.getCartList[i].selectsingle = false;
					}
				}
			}
		},
		changeNum(item,index,num){
			if(num>0){//加法
				this.$store.commit('ADDNUM', {item, index});
			}else{//数据减
				if(item.shopNum > 1){
					this.$store.commit('REDUCTION', {item, index});
				}
			}
		},
		allSelect(obj){//全选
			for(let i=0; i<this.getCartList.length; i++){
				this.getCartList[i].selectsingle = !obj;
			}
		},
		delectShopList(){
			let _delectShop = this.getCartList.filter(val => {return val.selectsingle});
			if(_delectShop.length>0){
				this.$store.commit("DELETESHOP", _delectShop);
				this.$store.state.Ordinary.priceShow = true;
			}else{
				this.toast.popTip("请选择你需要删除的商品!");
			}
		},
		goOrder(){
			const goOrderList = this.getCartList.filter(value => {return value.selectsingle}),stringOrder = JSON.stringify(goOrderList);
			if(goOrderList.length > 0){
				this.$router.push({name: 'pay', query: this.$store.commit("PAYPAGE", goOrderList)});
			}else{
				this.toast.popTip("请选择需要购买的商品!");
			}
		}
	
	},
	computed: {
		...mapGetters(['getCartList','priceShow']),
		seletedAll(){ 
			return this.getCartList.every(function(val){
				return val.selectsingle;
			});
		},
		totalSum(){
			let total = 0,hasSelected = this.getCartList.filter(val => {return val.selectsingle})
			for(let i=0; i<hasSelected.length; i++){
				total += hasSelected[i].shopNum * hasSelected[i].thePrice;
			}
			return total
		},
	}
}
</script>
