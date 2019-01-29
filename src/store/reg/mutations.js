
import *as func from "../function.js";
export default{
	REGISTER(states, obj){//用户注册列表
		states.registerList.unshift(obj);
		func.register.set(states);
	},
	
}