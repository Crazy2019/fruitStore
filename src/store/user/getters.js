
import *as func from "../function.js";

export default{
	getIsLogin(state){
		return state.isLogin;
	},
	getUser(states){
		return states.user;
	},
	getToast(states){
		return states.showToast
	},
	getToastMsg(states){
		return states.toastMsg
	}
	
}
