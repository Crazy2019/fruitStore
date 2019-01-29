import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import setUset from './user';
import Ordinary from './ordinary';
import collection from './collection';
import cart from './cart';
import coupon from './coupon';
import goCoupon from './goCoupon';
import reg from './reg';
import spellGroup from './spellGroup';

export default new Vuex.Store({
	modules: {
		setUset,
		Ordinary,
		collection,
		cart,
		coupon,
		goCoupon,
		reg,
		spellGroup
	}
});
