
import * as func from "../function.js";

export default{
	lingquCoupon(state){ //首页领取优惠券
		return state.lingquCoupon.filter(vla=>{
			if(vla.state === 1){
				return vla
			}
		});
	},
	changeCoupon(state){//已领取优惠券
		return state.lingquCoupon.filter(vla=>{
			if(vla.state === 2){
				return vla
			}
		});
	}
	
}
