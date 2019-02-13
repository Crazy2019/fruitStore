<template>
	<div class="pay-box">
		<!--<div class="pay-tip">
			<p></p>
			<div>请在半小时之内完成你的订单，超时订单取消。</div>
		</div>-->
		<topNav />
		<!--收获人-->
		<div class="consignee">
			<img src="../assets/img/user-img0.jpg" alt="" />
			<div>
				<p>{{getUser.name}}</p>
				<p>地址：广东省深圳市宝安区麻布新村</p>
				<p>联系方式：16625114720</p>
			</div>
		</div>
		<div class="pay-shop-list">
			<ul>
				<li v-for="(item, index) in getPay" :key="index">
					<img :src="item.img" alt="" />
					<div>
						<p class="tit">{{item.name}}</p>
						<p class="speci">规格：{{item.weight}}</p>
						<div class="title-name">
							<span>数量：x{{item.shopNum}}</span>
							<p>{{item.thePrice | moneyFilter}}</p>
						</div>
						
					</div>
				</li>
			</ul>
			<div class="pay-price">
				<span>总价</span>
				<p>{{totalNum | moneyFilter}}</p>
			</div>
		</div>
		<div class="pay-shop-list">
			<div class="preferential">
				<p>优惠券</p>
				<div>
					<span class="avai" v-if="couponLength.length > 0" @click="getCoupon()">
						<p v-if="!this.$route.query.price">{{couponLength.length}}张可用 <b>></b></p>
						<p v-else>-{{choose.coupon | unitMoney('元')}}</p>
					</span>
					<span class="noCou" v-else="">暂无优惠券可用</span>
				</div>
			</div>
		</div>
		<button class="aqmethods" @click.prevent="payment()">安全支付({{choose.sumToast | moneyFilter}})</button>
		
		<button class="aqmethods" @click.prevent="cancelment()">取消支付</button>
		
		
		<!--<div class="popPay" v-show="popPay">
			<div  class="popPay-box"></div>@click="closePop()"
			<div class="popPay-content" :class="{'showPopS': hideTran, 'transAni': transOne}">
				<div class="popPay-info">
					<ul>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
				
				<div class="popPay-close">取消</div>@click="closePop()"
			</div>
		</div>-->
		
		
	</div>
</template>
<script>
import { mapGetters } from "vuex";
import topNav from '../components/nav.vue';
export default{
	components: {topNav},
	data(){
		return{
//			popPay: false,hideTran: false,transOne: false,
			couponLength: '',
			sumPayList: {"list":'',"toastSum": '','couponSum': ''},
		}
	},
	mounted(){
		const length = this.$store.state.coupon.couponList.filter(val => {if(this.totalNum >= val.fullPrice && val.state === 1){return val;}});
		this.couponLength = length;
		this.$store.commit("GETNAVTITLE", "支付订单");
		this.$store.commit("GETSHOWLOGO", false);
		this.$store.commit("GETSHOWGEOLOCATION", false);
	},
	methods: {
		payment(){
			this.sumPayList.toastSum = this.choose.sumToast;
			this.sumPayList.list = this.getPay;
			this.sumPayList.couponSum = this.$route.query.price;
			this.$store.commit("PAYMENT", this.sumPayList);
			this.$store.commit("MODIFYPARAMS", this.$route.query);
			this.toast.popTip("支付成功!");
			this.$router.push({name: 'myOrder'});
		},
		cancelment(){
			this.sumPayList.toastSum = this.choose.sumToast;
			this.sumPayList.list = this.getPay;
			this.sumPayList.couponSum = this.$route.query.price;
			this.$store.commit("CANCELMENT", this.sumPayList);
			this.$store.commit("MODIFYPARAMS", this.$route.query);
			this.toast.popTip("已取消支付!");
			this.$router.push({name: 'myOrder'});
		},
		getCoupon(){   
			this.$router.push({name: 'payCoupon', params: this.$store.commit('PAYCOUPON', this.couponLength)});
		}
//		showPop(){ //弹出优惠券弹出框
//			this.popPay = true;
//			this.hideTran = true;
//		},
//		closePop(){//隐藏优惠券弹出框
//			this.transOne = true;
//			this.hideTran = false;
//			setTimeout(()=> {this.popPay = false;this.transOne = false;},500)
//		}
	},
	computed: {
		...mapGetters(['getPay','getUser']),
		totalNum(){
			let toast = 0;
			for(let i=0; i<this.getPay.length; i++){
				toast += this.getPay[i].shopNum * this.getPay[i].thePrice;
			}
			return toast
		},
		choose(){
			if(this.$route.query.price){
				return {sumToast: this.totalNum - this.$route.query.price,coupon: this.$route.query.price}
			}else{
				return {sumToast:this.totalNum}
			}
		},
	}
}
</script>
