
import * as func from "../function.js";


export default {
	GETCARTITEM(state, obj){
		state.cartList.unshift(obj);
		func.cart.set(state);
		
	},
	ADDNUM(state, {item, index}){ //商品加
		item.shopNum++;
		state.cartList[index].shopNum = item.shopNum++;
		func.cart.set(state);
	},
	REDUCTION(state, {item,index}){//商品减
		item.shopNum--;
		state.cartList[index].shopNum = item.shopNum--;
		func.cart.set(state);
	},
	//删除商品
	DELETESHOP(state, obj){
		const length = obj.length;
		obj.forEach(vla=>{
			let ID = vla.id;
			for(let i in state.cartList){
				if(ID === state.cartList[i].id){
					state.cartList.splice(i, 1);
					return false
				}
			}
		})
		func.cart.set(state);
	},
	PAYPAGE(state, obj){ //支付传参
		state.payList = obj;
		func.cart.set(state);
	},
	PAYMENT(state, obj){//支付成功
		for(let i=0; i<obj.list.length; i++){obj.list[i].state = 2;}
		state.orderList.unshift(obj);
		obj.list.forEach(vla=>{
			let ID = vla.id;
			for(let i in state.cartList){
				if(ID === state.cartList[i].id){
					state.cartList.splice(i, 1);
					return false
				}
			}
		});
		state.payList = [];
		func.cart.set(state);
	},
	CANCELMENT(state, obj){//取消支付
		for(let i=0; i<obj.list.length; i++){obj.list[i].state = 3;}
		state.orderList.unshift(obj);
		obj.list.forEach(vla=>{
			let ID = vla.id;
			for(let i in state.cartList){
				if(ID === state.cartList[i].id){
					state.cartList.splice(i, 1);
					return false
				}
			}
		});
		state.payList = [];
		func.cart.set(state);
	}
}
