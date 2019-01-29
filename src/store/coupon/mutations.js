

import * as func from "../function.js";

export default{
	PAYCOUPON(states, obj){
		states.payCoupon = obj;
		func.coupon.set(states);
	},
	MODIFYPARAMS(state, para){
		const arrAr = [];
		state.couponList.map(vla => {
			if(vla.id === para.id){	
				vla.state = 2;
			}
			arrAr.push(vla);
		});
		state.couponList = arrAr;
		func.coupon.set(state);
	},
	COUPONSPAGE(state, num){//领取优惠券放入个人中心
		state.couponList.unshift(num);
		func.coupon.set(state);
	},
	
}
