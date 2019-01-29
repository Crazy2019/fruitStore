<template>
	<div class="f-login">
		<navBar />
		<div class="f-login-box">
			<form>
				<div class="user-phone">
					<span class="userEmail"><img src="../assets/img/email.png"/></span>
					<input type="text" placeholder="请输入邮箱" v-model.trim="userEmail" />
					<p style="clear: both;"></p>
				</div>
				<div class="user-phone">
					<span class="usernamaIcon"></span>
					<input type="text" placeholder="请输入用户名" v-model.trim="userName" />
					<p style="clear: both;"></p>
				</div>
				<div class="user-phone">
					<span class="passnamaIcon"></span>
					<input type="password" placeholder="请输入密码" v-model.trim="userPass" />
					<p style="clear: both;"></p>
				</div>
				<div class="user-phone">
					<span class="passnamaIcon"></span>
					<input type="password" placeholder="请确定密码" v-model.trim="comfirmPass" />
					<p style="clear: both;"></p>
				</div>
				<button class="successBtn" @click="goRegister()">立即注册</button>
			</form>
		</div>
		
	</div>
</template>

<script>
import navBar from '../components/nav.vue';
import { mapGetters } from "vuex";
export default{
	components: {navBar},
	data(){
		return {
			userEmail: '',
			userName: '',
			userPass: '',
			comfirmPass: ''
		}
	},
	created(){
		this.$store.commit("GETNAVTITLE", "注册");
		this.$store.dispatch("navContent", false);
	},
	methods: {
		goRegister(){
			const reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
			if(!this.userEmail){
				this.toast.popTip("邮箱不能为空");
				return false
			}else if(!reg.test(this.userEmail)){
			 	this.toast.popTip("邮箱格式不正确");
				return false
			}else if(!this.userName){
				this.toast.popTip("用户名不能为空");
				return false;
			}else if(!this.userPass){
				this.toast.popTip("密码不能为空");
				return false;
			}else if(!this.comfirmPass){
				this.toast.popTip("确定密码不能为空");
				return false;
			}else if(this.comfirmPass != this.userPass){
				this.toast.popTip("两次输入的密码不相同");
				return false;
			}
			const  list = {email: this.userEmail, user: this.userName, pass: this.userPass, comfirmPass: this.comfirmPass}
			if(this.$store.state.reg.registerList.length > 0){
				const arr = [];
				for(let i in this.$store.state.reg.registerList){
					arr.push(this.$store.state.reg.registerList[i].email);
				}
				if(arr.includes(this.userEmail)){
					this.toast.popTip("该邮箱已被注册");
					return false;
				}else{
					this.$store.commit("REGISTER", list);
					this.toast.popTip("注册成功");
					this.$router.push("/login");
					return false
				}
			}else{
				this.$store.commit("REGISTER", list);
				this.toast.popTip("注册成功");
				this.$router.push("/login");
			}
			
			
		}
	}
}
</script>
