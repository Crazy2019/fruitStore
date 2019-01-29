<template>
	<header class="navHeader" title="navTitle">
		<router-link to="/"  v-if="showLogo"><span class="nav-logo"></span></router-link>
		<span class="nav-return" @click="goBack()" v-else>返回</span>
		
		<p class="nav-title">{{navTitle}}</p>
		
		<span class="geolocation" v-if="showGeolocation">深圳</span>
		<!--<span class="nav-cart"><small>0</small></span>-->
		<router-link to="/" v-else class="register">首页</router-link>
	</header>
</template>

<script>
import { mapGetters } from "vuex";
export default{
	data(){
		return {
			
		}
	},
	methods: {
		goBack(){
			this.$router.go(-1);
		}
	},
	computed: {
		...mapGetters(['showLogo','showGeolocation','navTitle']),
	}
}
</script>
