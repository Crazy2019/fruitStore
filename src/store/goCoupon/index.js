import * as func from '../function.js';
import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

const state = func.goCoupon.get() || {
	lingquCoupon: [{
		"id": "001",
		"price": "5",
		"fullPrice": "50",
		"startTime": "2019-01-15",
		"endTime": "2019-10-15",
		"state": 1
	},
	{
		"id": "002",
		"price": "20",
		"fullPrice": "150",
		"startTime": "2019-01-15",
		"endTime": "2019-02-16",
		"state": 1
	},
	{
		"id": "003",
		"price": "15",
		"fullPrice": "100",
		"startTime": "2019-01-15",
		"endTime": "2019-04-08",
		"state": 1
	},
	{
		"id": "004",
		"price": "50",
		"fullPrice": "300",
		"startTime": "2019-01-15",
		"endTime": "2019-02-14",
		"state": 1
	},
	{
		"id": "005",
		"price": "70",
		"fullPrice": "340",
		"startTime": "2019-01-15",
		"endTime": "2019-08-08",
		"state": 1
	},
	{
		"id": "006",
		"price": "25",
		"fullPrice": "250",
		"startTime": "2019-01-15",
		"endTime": "2019-11-11",
		"state": 1
	}],
}
export default {
	state,
	getters,
	mutations,
	actions
}