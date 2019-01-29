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
}
