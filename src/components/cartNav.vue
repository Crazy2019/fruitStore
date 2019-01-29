<template>
	<header class="cartHeader">
		<span class="nav-return" @click="goBack()">返回</span>
		<p class="navCart-title">购物车</p>
		<div class="navCart-edit" @click="clickEdit()">编辑</div>
	</header>
</template>

<script>
export default{
	data(){
		return {}
	},
	methods: {
		goBack(){
			this.$router.go(-1);
		},
		clickEdit(){
			this.$emit('editOut');
		}
	}
}
</script>
