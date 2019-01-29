

import * as func from "../function.js";

export default {
	GETCOLLECTIONSTATEU(state, obj){  //收藏
		obj.collection = !obj.collection;
		func.collection.set(state);
	}
}
