<template>
	<div class="shop-detail">
		<img :src="list.img"/>
		<div class="shop-detail-body">
			<div class="shop-detail-name">
				<div class="shop-sold"><span>已售：948 件</span></div>
				<div class="shop-title">{{list.name}}</div>
				<div class="shop-introduce">{{list.content}}</div>
			</div>
			
			<div class="shop-model2">
				<h3>支付开团并邀请 {{list.spell}} 人参团，人数不足自动退款</h3>
				<div class="shop-model2-body">
					<div class="shop-original">
						<div><span class="tuan-price">{{list.spell}}团价</span></div>
						<div><span>原价</span></div>
					</div>
					<div class="shop-model2-price">
						<div>
							<div class="kt_price">
								<b>{{list.price | moneyFilter}}</b> / {{list.weight}}
							</div>
							<div class="kt_btn" @click="goSpellPay(list)">立即拼团</div>
						</div>
						<div>
							<div class="kt_priceRight"><b>{{list.thePrice | moneyFilter}}</b> / {{list.weight}}</div>
							<div class="kt_btnRight" @click="goCart(list)">原价购买</div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="shop-model2">
				<div class="shop-spell-play">
					<p>拼团玩法</p>
					<div class="shop-spell-playList">
						<div class="shop-spell-playItem"><span>1</span><p>选择<br />心仪商品</p></div>
						<div><span>2</span><p>支付开团<br />或参团</p></div>
						<div><span>3</span><p>等待好友<br />参团支付</p></div>
						<div><span>4</span><p>达到人数<br />团购成功</p></div>
					</div>
				</div>
			</div>
			<div class="shop-model2">
				<div class="shop-spell-play">
					<p>商品详情</p>
					<div class="shop-show-img">
						<img :src="list.img" />
					</div>
				</div>
			</div>
		</div>
		
		<div class="shop-footer">
			<router-link to="/"> <div class="go-homeOne"></div></router-link>
			<div class="go-collection" @click="goCollection()" :class="{'go-yicollection': list.collection}"></div>
			<div class="go-cartL" @click="joinCart"><img src="../assets/img/shopCart.png"/></div>
			<button @click="goCart(list)" class="go-promptly_tuan">立即购买</button>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";	
export default{
	data(){
		return {
			list: {},
		}
	},
	beforeRouteEnter(to, from, next){
		next( vm => {
			let ID = vm.$route.params.id;
			vm.getShopList.forEach(vla=>{
				if(vla.id === ID){vm.list = vla}
			});
		})
	},
	beforeRouteLeave(to, from, next){
		next();
	},
	methods: {
		goCollection(){
			if(this.$store.state.setUset.isLogin === true){
				if(!this.list.collection){
					this.toast.popTip("收藏成功!");
				}else{
					this.toast.popTip("已取消收藏!");	
				}
				this.$store.commit("GETCOLLECTIONSTATEU", this.list);
			}else{
				this.$router.push({path: '/login'});
			}
		},
		joinCart(){//加入购物车
			if(this.$store.state.setUset.isLogin === true){
				var cartItem = {
					id: this.list.id,
					name:this.list.name,
					img: this.list.img,
					price: this.list.price,
					content: this.list.content,
					spell: this.list.spell,
					discount:this.list.discount,
					thePrice: this.list.thePrice,
					weight: this.list.weight,
					selectsingle: false,
					shopNum: 1,
					state: 1,
				}
				if(JSON.stringify(this.$store.state.cart.cartList).includes(JSON.stringify(cartItem))){
					this.toast.popTip("商品已存在购物车中!");
				}else{
					this.$store.commit("GETCARTITEM", cartItem);
					this.toast.popTip("成功加入购物车!");
				}
			}else{
				this.$router.push({path: '/login'});
			}
		},
		goCart(obj){ //立即购买
			this.$set(obj, 'shopNum', 1);
			const arr = [];
			arr.push(obj);
			this.$router.push({
				name: 'pay',
				query: this.$store.commit("PAYPAGE", arr)
			});
		},
		goSpellPay(num){ //拼团
			this.$set(num, 'shopNum', 1);
			const arrayOne = [];
			arrayOne.push(num);
			this.$router.push({
				name: 'spellPay',
				query: this.$store.commit("PAYPAGE", arrayOne)
			});
		}
	},
	computed: {
		...mapGetters(['getShopList'])
	}
}
</script>
