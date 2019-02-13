export default{
	message(state,getters){
		return state.message
	},
	showLogo: state => state.showLogo,
	showGeolocation: state => state.showGeolocation,
	navTitle: state => state.navTitle,
	priceShow: state => state.priceShow,
	getToastMsg(states){
		return states.toastMsg
	},
	getToast(states){
		return states.showToast
	},
}
