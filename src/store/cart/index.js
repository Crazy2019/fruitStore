
import * as func from "../function.js";
import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";


const state = func.cart.get() || {
	cartList: [],
	payList: [],
	orderList: [],
}

export default{
	state,
	getters,
	mutations,
	actions
}

