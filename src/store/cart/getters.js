
export default{
	getCartList(states){
		return states.cartList
	},
	getPay(state){
		return state.payList
	},
	getOrder(states){ //全部订单
		return states.orderList.map(vla=>{
			return vla.list.filter(d=>{
				return d
			})
		})
	},
	successOrder(states){//完成订单 state为2
		return states.orderList.map(val => {
			return val.list.filter(d=>{
				if(d.state === 2){
					return d
				}
			})
		});
	},
	
	stayOrder(states){//支付失败订单 state为3
		return states.orderList.map(val => {
			return val.list.filter(d=>{
				if(d.state === 3){
					return d
				}
			});
		});
	},
	payFaiOrder(states){//支付金额
		return states.orderList.map(val => {
			return val
		});
	}
}
    