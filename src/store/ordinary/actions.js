export default{
	navContent({commit,state}, obj){
		commit("GETSHOWLOGO",obj);
		commit("GETSHOWGEOLOCATION",obj);
	}
}
