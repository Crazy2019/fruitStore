<template>
<div class="myOrder-nav">
	<ul>
		<li @click="msg1(0)" :class="{'navActive': msg == 0}">{{navOne}}</li>
		<li @click="msg1(1)" :class="{'navActive': msg == 1}">{{navTwo}}</li>
		<li @click="msg1(2)" :class="{'navActive': msg == 2}">{{navThree}}</li>
	</ul>
</div>
</template>

<script>
export default{
	props: {
		navOne: String,
		navTwo: String,
		navThree: String,
	},
	data() {
		return {
			msg: 0,
		}
	},
	methods:{
		msg1(val){
			this.$emit("getMsgOne",val);
			this.msg = val;
		}
	}
}
</script>
