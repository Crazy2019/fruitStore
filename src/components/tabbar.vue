<template>
	<mt-tabbar fixed v-model="message">
		<mt-tab-item id="home">
			<span class="tabIcon1" :class="message == 'home' ? 'tabIcon11': ''"></span>
			<small :class="message == 'home' ? 'small1': ''">首页</small>
		</mt-tab-item>
		<!--<mt-tab-item id="spell-Group">
			<span class="tabIcon2" :class="message == 'spell-Group' ? 'tabIcon22': ''"></span>
			<small :class="message == 'spell-Group' ? 'small1': ''">我的拼团</small>
		</mt-tab-item>-->
		<mt-tab-item id="order">
			<span class="tabIcon3" :class="message == 'order' ? 'tabIcon33': ''"></span>
			<small :class="message == 'order' ? 'small1': ''">购物车</small>
		</mt-tab-item>
		<mt-tab-item id="userCenter">
			<span class="tabIcon4" :class="message == 'userCenter' ? 'tabIcon44': ''"></span>
			<small :class="message == 'userCenter' ? 'small1': ''">个人中心</small>
		</mt-tab-item>
	</mt-tabbar>
</template>

<script>
export default{
	data(){
		return {
			
		}
	},
	computed: {
		message:{
			get(){
				return this.$store.state.Ordinary.message
			},
			set(value){
				this.$store.state.Ordinary.message = value;
			}
		}
	},
	watch:{
		message(val,oldVal){
			switch(val){
				case 'home': 
					this.$router.push({path: '/'});
				break;
//				case 'spell-Group':
//					this.$router.push({path: '/spellGroup'});
//				break;
				case 'order':
					this.$router.push({path: '/cart'});
				break;
				case 'userCenter':
					this.$router.push({path: '/userCenter'});
				break;
			}
		}
	},
}
</script>
