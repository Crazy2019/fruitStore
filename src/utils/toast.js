
import store from '../store/index';

export default{
	popTip(obj){
		store.commit("SHOWTOAST", true);
		store.commit("SHOWTOASTTEST", obj);
		setTimeout(() => {
			store.commit("SHOWTOAST", false);
		},1500)
	}
}
