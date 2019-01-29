
import * as func from "../function.js";

export default{
	
	eachCoupon(state){
		return state.couponList.filter( d => { //为1时优惠券可用
			if(d.state === 1){
				return d
			}
		})
	},
	useCoupon(state){
		return state.couponList.filter( d => { // 为2时已经使用优惠券
			if(d.state === 2){
				return d
			}
		});
	},
	failureCoupon(state){
		return state.couponList.filter(val=>{ // 为3时已失效使用优惠券
			if(func.yearMonth() > val.endTime){
				val.state = 3;
				return val;
			}
		})
	},
	getPayCoupon(state){
		return state.payCoupon;
	},
	
	getCouponLength(states){ //userCenter页面显示领取优惠券的条数
		const arr = [];
		states.couponList.filter(vla => {
			if(vla.state === 1){
				arr.push(vla);
			}
		})
		return arr.length
	},
}
