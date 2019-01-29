

import * as func from "../function.js";

export default{
	SELECTPAGE(state, {obj, index}){//领取成功变为已领取
		state.lingquCoupon.splice(index, 1);
		func.goCoupon.set(state);
	}
}
