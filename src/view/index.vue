<template>
	<div class="index-home">
		<navbar></navbar>
		<Swiper />
		<div class="f-hint">仅20元起送，24小时内极速达</div>
		<div class="f-component-func">
			<ul>
				<li class="route1"><router-link to="/register"><span></span>新用户</router-link></li>
				<li class="route2" @click="noTry()"><router-link to=""><span></span>套餐</router-link></li>
				<li class="route3" @click="noTry()"><router-link to=""><span></span>邀请红包</router-link></li>
				<li class="route4" @click="noTry()"><router-link to=""><span></span>企业团购</router-link></li>
				<p style="clear: both;"></p>
			</ul>
		</div>
		<div class="f-advertising"><router-link to="/goCoupons"><img src="../assets/img/coupons.jpg"/></router-link></div>
		<div class="f-content">
			<div class="f-con-item" v-for="(item, index) in getShopList" :key="index">
				<div @click="goDetail(item.id)">
					<div class="tally_box">
						<p>{{item.spell}}人团</p>
						<p>{{item.discount}}折</p>
					</div>
					<img class="item-img" :src="item.img" alt="" />
					<div class="f-con-item-info">
						<p class="item-info-name">{{item.name}}</p>
						<p class="item-info-cn">{{item.content}}</p>
					</div>
					<div class="Spell-group">
						<div class="arrow-right"></div>
						<div class="group-price">
							<span>{{item.spell}}人团只需</span>
							<b>{{item.price | moneyFilter}}</b>
						</div>
						<div class="go-spell-group">我要拼></div>
						<p style="clear: both;"></p>
					</div>
					<p class="the-price"><s>原价:￥{{item.thePrice | moneyFilter}}</s></p>
				</div>
			</div>
		</div>
		<tabbar></tabbar>
	</div>
</template>

<script>
import Nav from "../components/nav.vue";
import tabbar from "../components/tabbar.vue";
import Swiper from "../components/swiper.vue";
import { mapGetters } from "vuex";
export default{
	components: {'navbar':Nav,Swiper,tabbar},
	data(){
		return {
			shoppingList: [],
		}
	},
	created(){
		this.$nextTick(()=>{
			this.$store.commit("GETNAVBAR", 'home');
			this.$store.dispatch("navContent", true);
			this.$store.commit("GETNAVTITLE", "");
		})
	},
	methods: {
		goDetail(id){
			this.$router.push({name: 'shopDetail', params: {id: id}});
		},
		noTry(){
			this.toast.popTip("开发中...")
		},
	},
	computed: {
		...mapGetters(['getShopList'])
	}
	
}
</script>
<style type="text/css">
	a:hover{text-decoration: none;}
</style>
