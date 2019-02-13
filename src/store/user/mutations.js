import *as func from "../function.js";
export default{
	GETUSER(state, {user, emailOne}){
		state.isLogin = true;
		state.user.name = user;
		state.user.email = emailOne
		func.session.set(state);
	},
	EXITLOGIN(state){
		state.isLogin = false;
		state.user.name = '';
		state.user.email = ''
		func.session.set(state);
	},
}
