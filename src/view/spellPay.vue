<template>
	<div class="spellPay">
		<nav-bar></nav-bar>
		<!--收获人-->
		<div class="consignee">
			<img src="../assets/img/user-img0.jpg" alt="" />
			<div>
				<p>{{getUser.name}}</p>
				<p>地址：广东省深圳市宝安区麻布新村</p>
				<p>联系方式：16625114720</p>
			</div>
		</div>
		
		<div class="spellPay-shop-list">
			<ul class="spell-ul-li">
				<li v-for="(item, index) in getPay">
					<img :src="item.img" alt="" />
					<div>
						<p class="tit">{{item.name}}</p>
						<p class="speci">规格：{{item.weight}}</p>
						<div class="title-name">
							<span>数量 x{{item.shopNum}}</span>
							<p>{{item.price | moneyFilter}}</p>
						</div>
					</div>
				</li>
			</ul>
		</div>
		
		<div class="spellPay-shop-list">
			<div class="spellPay-button">
				<div class="payMethod">
					<span><small @click="mes = 1" :class="{'confirm': mes === 1}"></small></span><!-- class="confirm"-->
					<p class="wx">微信支付</p>
				</div>
				<div class="payMethod">
					<span><small @click="mes = 2"  :class="{'confirm': mes === 2}"></small></span>
					<p class="zfb">支付宝支付</p>
				</div>
				
				<button class="buttonPay" @click.prevent="goSpell()">安全支付({{toastMoney | moneyFilter}})</button>
		
				<button class="failuerPay" @click.prevent="noPaySpell()">取消支付</button>
			</div>
		</div>
	
		<div class="shop-model2">
			<div class="shop-spell-play">
				<p>拼团玩法</p>
				<div class="shop-spell-playList">
					<div><span>1</span><p>选择<br />心仪商品</p></div>
					<div class="shop-spell-playItem"><span>2</span><p>支付开团<br />或参团</p></div>
					<div><span>3</span><p>等待好友<br />参团支付</p></div>
					<div><span>4</span><p>达到人数<br />团购成功</p></div>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
import navBar from '../components/nav.vue';
import { mapGetters } from 'vuex';
export default{
	components: {navBar},
//	inject: ['reload'],
	data(){
		return {
			mes: 1,
		}
	},
	created(){
		this.$store.commit("GETNAVTITLE", "拼团支付");
		this.$store.commit("GETSHOWLOGO", false);
		this.$store.commit("GETSHOWGEOLOCATION", false);
		this.getTime();
	},
	methods: {
		goSpell(){
			const newSpellList = {"userList": [], "spellShop": '',"getTime": '', 'spellState': 1};
			newSpellList.spellShop = this.getPay[0]; 
			newSpellList.userList.push(this.getUser); //获取当前用户
			newSpellList.getTime = this.getTime();  //获取当前时间
			this.$set(this.getPay[0], 'payMethod', this.mes);
			if(this.$store.state.spellGroup.spellList.length>0){
				const shopID = [];//检测商品是否已经开团
				const spellPeople = []; //开团人员列表
				let spellPeopleLength = '';
				for(let i in this.$store.state.spellGroup.spellList){
					shopID.push(this.$store.state.spellGroup.spellList[i].spellShop.id);
					if(this.getPay[0].id === this.$store.state.spellGroup.spellList[i].spellShop.id){
						for(let j in this.$store.state.spellGroup.spellList[i].userList){
							spellPeople.push(this.$store.state.spellGroup.spellList[i].userList[j].email);
							spellPeopleLength = this.$store.state.spellGroup.spellList[i].userList.length
						}
					}
				}
				if(shopID.includes(this.getPay[0].id)){
					if(spellPeople.includes(this.getUser.email)){
						this.toast.popTip("已存在!");
						this.$router.push('/spellGroup');
						return false
					}else{
						if(spellPeopleLength < this.getPay[0].spell){
							this.$store.commit("SPELLPEOPLE", newSpellList);
							this.toast.popTip("成功加入!");
 							this.$router.push('/groupDetail');
							return false
						}else{
//							if(spellPeopleLength >= this.getPay[0].spell){
//								this.$store.commit("SPELLSUCCESS", newSpellList);
//								return false
//							}
							this.toast.popTip("拼团人员已满!");
							return false
						}
						
					}
				}else{
					this.$store.commit("SPELLSUCCESS", newSpellList);
					this.toast.popTip("恭喜您开团成功!");
					this.$router.push('/groupDetail');
					return false;
				}
			}else{
				this.toast.popTip("恭喜您开团成功!");
				this.$store.commit("SPELLSUCCESS", newSpellList);
				this.$router.push('/groupDetail');
				return false;
			}
		},
		getTime(){//获取当前时间
			let data = new Date(),month = data.getMonth()+1,dayy = data.getDate(),
			hour = data.getHours(),minute = data.getMinutes(),second = data.getSeconds();
			if(month >= 0 && month <= 9){month = "0" + month;}
			if(dayy>=0 && dayy<=9){dayy = "0"+dayy;}
			if(hour>=0 && hour<=9){hour = "0"+hour;}
			if(minute>=0 && minute<=9){minute = "0"+minute;}
			if(second>=0 && second<=9){second = "0"+second;}
			return data.getFullYear()+"-"+month+"-"+dayy+" "+hour+":"+minute+":"+second;
		},
		noPaySpell(){
			this.toast.popTip("取消拼团成功!");
			this.$router.push('/');
		}
	},
	computed: {
		...mapGetters(['getUser','getPay']),
		toastMoney(){
			let toast = 0;
			this.getPay.forEach(val=>{return toast += val.shopNum*val.price});
			return toast
		}
	}
	
}
</script>
