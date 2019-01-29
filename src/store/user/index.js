import *as func from "../function.js";
import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

const state = func.session.get() || {
	isLogin: false,  //未登录
	user: {'name': '', 'email': ''},
	showToast: false,
	toastMsg: '',
}
export default{
	state,
	getters,
	mutations,
	actions,
}