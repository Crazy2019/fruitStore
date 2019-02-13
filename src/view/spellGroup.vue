<template>
	<div class="spellGroup">
		<navbar class="orderNav"></navbar>
		
		<orderNav @getMsgOne="getMsgOne" :navOne="navOne" :navTwo="navTwo" :navThree="navThree"></orderNav>
		
		<div class="spellGroup-box">
			<div  v-show="msg === 0">
				<div v-if="allSpellList.length > 0">
					<div class="f-groupList" v-for="(item, index) in allSpellList" :key="index">
						<div class="f-groupItem">
							<img :src="item.img"/>
							<div class="f-groupItem-info">
								<h4>{{item.name}} </h4>
								<p>规格：{{item.weight}}</p>
								<div class="f-group-tuan">
									<div class="f-group-price">
										<span>团价</span>
										<b>{{item.price | moneyFilter}}</b>
									</div>
									<div class="f-group-btn"></div>
									<p style="clear: both;"></p>
								</div>
							</div>
						</div>
						<div class="f-group-other">
							拼团进行中
							<button @click.prevent="gogroupDetail(item)" class="f-group-other-btn">查看团详情</button>
							<button @click.prevent="noTry()" class="f-group-other-btn" style=" margin-right: 5px;">查看订单详情</button>
						</div>
					</div>
				</div>
				<div class="noProduct" v-else="">目前还没有拼团产品哦...</div>
			</div>
			<div  v-show="msg === 1">
				<div  v-if="successSpellList.length > 0">
					<div class="f-groupList" v-for="(item, index) in successSpellList" :key="index">
						<div class="f-groupItem">
							<img :src="item.img"/>
							<div class="f-groupItem-info">
								<h4>{{item.name}}</h4>
								<p>规格：{{item.weight}}</p>
								<div class="f-group-tuan">
									<div class="f-group-price">
										<span>团价</span>
										<b>{{item.price | moneyFilter}}</b>
									</div>
									<div class="f-group-btn"></div>
									<p style="clear: both;"></p>
								</div>
							</div>
						</div>
						<div class="f-group-other">
							拼团成功
							<button @click="gogroupDetail(item)" class="f-group-other-btn">查看团详情</button>
							<button @click="noTry()" class="f-group-other-btn" style=" margin-right: 5px;">查看订单详情</button>
						</div>
					</div>
				</div>	
				<div class="noProduct" v-else="">暂无拼团成功产品...</div>
			</div>
			
			<div  v-show="msg === 2">
				<div v-if="failureSpellList.length > 0" >
					<div class="f-groupList" v-for="(item, index) in failureSpellList" :key="index">
						<div class="f-groupItem">
							<img :src="item.img"/>
							<div class="f-groupItem-info">
								<h4>{{item.name}} </h4>
								<p>规格：{{item.weight}}</p>
								<div class="f-group-tuan">
									<div class="f-group-price">
										<span>团价</span>
										<b>{{item.price | moneyFilter}}</b>
									</div>
									<div class="f-group-btn"></div>
									<p style="clear: both;"></p>
								</div>
							</div>
						</div>
						<div class="f-group-other">
							拼团失败
							<button @click="gogroupDetail(item)" class="f-group-other-btn">查看团详情</button>
							<button @click="noTry()" class="f-group-other-btn" style=" margin-right: 5px;">查看订单详情</button>
						</div>
					</div>
				</div>
				<div class="noProduct" v-else="">暂无拼团失败产品...</div>
			</div>
		</div>
		<!--<tabbar></tabbar>-->
	</div>
</template>

<script>
import nav from "../components/nav.vue";
//import tabbar from "../components/tabbar";
import orderNav from "../components/order/orderNav.vue";
import { mapGetters } from "vuex";
export default{
	components: {'navbar':nav,orderNav},/*,tabbar*/
	data(){
		return {
			msg: 0,
			navOne: '',
			navTwo: '',
			navThree: '',
			allSpellList: [],
			successSpellList: [],
			failureSpellList: [],
		}
	},
	beforeRouteEnter(to, from, next){
		next( vm => {
			vm.navOne = "全部拼团";
			vm.navTwo = "拼团成功";
			vm.navThree = "拼团失败";
			vm.$store.commit("GETNAVBAR", 'spell-Group');
			vm.$store.dispatch("navContent", false);
			vm.$store.commit("GETNAVTITLE", "我的拼团");
			vm.successSpell.map(vla=>{vm.successSpellList.push(vla.spellShop);});//拼团成功
			vm.getSpellList.map(vla=>{vm.allSpellList.push(vla.spellShop);})//拼团中
			vm.failureSpell.map(vla=>{vm.failureSpellList.push(vla.spellShop);})//拼团失败
		})
	},
	beforeRouteLevae(to, from, next){
		next()
	},
	methods: {
		getMsgOne(val){
			this.msg = val;
		},
		gogroupDetail(obj){
			const arr = [];
			arr.push(obj);
			this.$router.push({
				name: 'groupDetail',
				query: this.$store.commit("PAYPAGE", arr)
			});
		},
		noTry(){
			this.toast.popTip("开发中...")
		},
	},
	computed: {
		...mapGetters(['getSpellList','successSpell','failureSpell']),
	},
}
</script>
