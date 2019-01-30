<template>
	<div class="groupDetail">
		<navBar></navBar>
		
		<div class="groupDetail-box">
			
			<div class="win-groups">
				<div >开团成功</div>
				<p>快去邀请好友开参团吧</p>
			</div>
			<div class="f-groupList" style="padding-bottom: 8px;">
				<div class="f-groupItem"><!-- v-for="(item, index) in getPay" :key="index"-->
					<img :src="getPay[0].img"/>
					<div class="f-groupItem-info">
						<h4>{{getPay[0].name}}</h4>
						<p>{{getPay[0].spell}}人团：<span class="groupPrice">{{getPay[0].price | moneyFilter}}</span></p>
					</div>
				</div>
			</div>
			<div class="group-avata">
				<div class="grou-avata-img">
					<ul>
						<li v-for='i in plepeoListNum'>
							<img src="../assets/img/user-img0.jpg" v-if="i <= plepeoList.length" alt="" />
							<img src="../assets/img/tx2.jpg" v-else alt="" />
						</li>
						<p style="clear: both;"></p>
					</ul>
				</div>
				<div v-if="betPlepeo>0">
					<p class="man-number" >还差{{betPlepeo}}人，满{{getPay[0].spell}}人才能享受拼团优惠呦~</p>
					<div class="groupDownTime">剩余
						<span>{{hourShow}}</span>:<span>{{minuterShow}}</span>:<span>{{secondsShow}}</span>结束</div>
				</div>
				<div v-else>
					<p class="man-number" style="color: #CE3B41;">拼团成功</p>
					<div class="groupDownTime"></div>
				</div>
				<p class="man-number"></p>
				<div class="man-name">
					<ul>
						<li v-for='(i, index) in plepeoListNum'>
							<div v-if="index < plepeoList.length">
								<div  v-if="index === 0" class="colonel">
									<div class="pushImg"><img src="../assets/img/user-img0.jpg" alt="" /></div>
									<p>团长{{plepeoList[index].name}}</p>
									<span>{{plepeoList[index].email}}</span>
								</div>
								<div v-else="" class="colonel">
									<div class="pushImg"><img src="../assets/img/user-img0.jpg" alt="" /></div>
									<p>{{plepeoList[index].name}}</p>
									<span>{{plepeoList[index].email}}</span>
								</div>
							</div>	
							<div v-else="">
								<div>
									<div class="pushImg"><img src="../assets/img/tx2.jpg" alt="" /></div>
									座位没主人，快去邀请好友占领吧
								</div>
							</div>
							
						</li>
						
					</ul>
				</div>
			</div>
			<div class="shop-model2">
				<div class="shop-spell-play">
					<p>拼团玩法</p>
					<div class="shop-spell-playList">
						<div><span>1</span><p>选择<br />心仪商品</p></div>
						<div><span>2</span><p>支付开团<br />或参团</p></div>
						<div :class="{'shop-spell-playItem': betPlepeo>0}"><span>3</span><p>等待好友<br />参团支付</p></div>
						<div :class="{'shop-spell-playItem': betPlepeo === 0}"><span>4</span><p>达到人数<br />团购成功</p></div>
					</div>
				</div>
			</div>
			<div class="invite-btn">
				<div v-if="state === 3">订单失败</div>
				<div v-else>
					<p v-if="betPlepeo>0">还差{{betPlepeo}}人组团成功</p>
					<p v-else>订单完成</p>
				</div>
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
	data(){
		return {
			plepeoList: [],
			plepeoListNum: '',
			betPlepeo: '',
			hourShow: '',
			minuterShow: '',
			secondsShow: '',
			state: '',
			Time: '',
			shop: '',
		}
	},
	watch:{
		Time(vla){
			if(vla === "00:00:00"){
				this.$store.commit("SPELLFAILURE", this.shop);
			}else{
				this.$store.commit("ISSPELL", this.shop);
			}
		}
	},
	created(){
		this.$store.commit("GETNAVTITLE", "我的拼团");
		this.$store.commit("GETSHOWLOGO", false);
		this.$store.commit("GETSHOWGEOLOCATION", false);
		this.getSpellGroupPeople.forEach(vla=>{
			if(this.getPay[0].id === vla.spellShop.id){
				this.shop = vla;
				this.state = vla.spellState;
				if(vla.userList.length<vla.spellShop.spell){//vla.spellShop.spell  拼团总人数//vla.userList.length  参加人数
					this.downTime(vla.getTime, vla);
				}
				this.plepeoList = vla.userList.reverse();/*.reverse()*/
				this.plepeoListNum = Number(vla.spellShop.spell); //拼团人数
				this.betPlepeo = this.getPay[0].spell - vla.userList.length; //还差人数
			}
		});
	},
	computed: {
		...mapGetters(['getPay','getSpellGroupPeople']),
	},
	methods: {
		downTime(obj, vla){
//			this.$store.commit("SPELLDEFAULT", vla);
			let pageTimer = setInterval(()=>{
				const curDate = new Date();  //当前时间
				const dayAfter = new Date(obj).getTime() + 24*60*60*1000; //后一天的时间24*60*60*1000
				let betweenTime = Math.floor((dayAfter - curDate.getTime()) / 1000);
				if(betweenTime >= 0){
					let currentTime = '';
					this.hourShow = Math.floor(betweenTime / 60 / 60 ); //转换成显示
					this.minuterShow = Math.floor(betweenTime / 60 % 60 );//转换成分钟
					this.secondsShow = Math.floor(betweenTime % 60 );//转换成秒
					this.hourShow = this.hourShow>9 ? this.hourShow : '0' + this.hourShow;
					this.minuterShow = this.minuterShow>9 ? this.minuterShow : '0' + this.minuterShow;
					this.secondsShow = this.secondsShow>9 ? this.secondsShow : '0' + this.secondsShow;
					this.Time = this.hourShow+":"+this.secondsShow+":"+this.secondsShow;
				}
				else{
					clearInterval(pageTimer);
					this.hourShow = "00";
					this.minuterShow = "00";
					this.secondsShow = "00";
					this.Time = "00:00:00";
				}
			},0)
		},
	}
}
</script>
