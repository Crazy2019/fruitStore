export default{
	message(state,getters){
		return state.message
	},
	showLogo: state => state.showLogo,
	showGeolocation: state => state.showGeolocation,
	navTitle: state => state.navTitle,
	priceShow: state => state.priceShow,
}
