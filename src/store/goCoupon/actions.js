
export default{
	couponsList({commit}, obj){
		commit("SELECTPAGE", obj);
		commit("COUPONSPAGE", obj);
	}
}
