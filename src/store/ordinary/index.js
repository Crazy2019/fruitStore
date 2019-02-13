import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";


export default{
	state: {
		message: 'home',
		showLogo: true,
		showGeolocation: true,
		navTitle: "",
		priceShow: true, //显示价格and删除商品
		toastMsg: '',
		showToast: false,
	},
	getters,
	mutations,
	actions,
}

