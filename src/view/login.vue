<template>
	<div class="f-login">
		<navBar />
		<div class="f-login-box">
			<form>
				<div class="user-phone">
					<span class="usernamaIcon"></span>
					<input type="text" placeholder="请输入邮箱" v-model.trim="userName" />
					<p style="clear: both;"></p>
				</div>
				<div class="user-phone">
					<span class="passnamaIcon"></span>
					<input type="password" placeholder="请输入密码" v-model.trim="userPass" />
					<p style="clear: both;"></p>
				</div>
				<button class="successBtn" @click.prevent="goSuccess()">登录</button>
				<p class="forgetPass"><router-link to="/register">立即注册</router-link></p>
			</form>
		</div>
		
	</div>
</template>

<script>
import nav from "../components/nav.vue";
import { mapGetters } from "vuex";
export default{
	components: {'navBar': nav},
	data(){
		return {
			userName: '',
			userPass: '',
		}
	},
	created() {
		this.$store.commit("GETNAVTITLE", "登录");
		this.$store.dispatch("navContent", false);
	},
	methods: {
		goSuccess(){
			const reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
			if(this.userName == "" || this.userName == undefined || this.userName == null){
				this.toast.popTip("用户名不能为空");
				return false
			}else if(!reg.test(this.userName)){
				this.toast.popTip("邮箱格式不正确");
				return false
			}else if(this.userPass == "" || this.userPass == undefined || this.userPass == null){
				this.toast.popTip("密码不能为空");
				return false
			}else{
				let emailList = this.$store.state.reg.registerList.map( vla => {return vla.email});
				if(!emailList.includes(this.userName)){
					this.toast.popTip("无效账号");
				}else{
					for(let i in this.$store.state.reg.registerList){
						if(this.userName === this.$store.state.reg.registerList[i].email){
							const pass = this.$store.state.reg.registerList[i].pass;
							const user = this.$store.state.reg.registerList[i].user;
							const emailOne = this.$store.state.reg.registerList[i].email;
							if(this.userPass === pass){
								this.$store.commit("GETUSER", {user, emailOne});
								this.toast.popTip("欢迎"+user+"登录");
								//this.$router.push({'path': this.$route.query.redirect});
								this.$router.push('/');
								return false
							}else{
								this.toast.popTip("密码错误，请重新输入");
								return false
							}
						}
					}
				}
			}
		}	
	}
}
</script>
