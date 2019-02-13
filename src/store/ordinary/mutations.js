export default{
	GETNAVBAR(state, obj){
		state.message = obj;
	},
	GETSHOWLOGO(state, bool){
		state.showLogo = bool;
	},
	GETSHOWGEOLOCATION(state, bool){
		state.showGeolocation = bool;
	},
	GETNAVTITLE(state, obj){
		state.navTitle = obj;
	},
	SHOWTOASTTEST(state, obj){
		state.toastMsg = obj;
	},
	SHOWTOAST(state, obj){
		state.showToast = obj
	},
}
