import * as func from "../function.js";
import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

const state = func.collection.get() || {
	collectionForm: [{
			"id": "10001",
			"name": "南丰蜜桔（斤）",
			"content": "南丰蜜桔以皮薄核少、汁多少渣、色泽金黄、甜酸适口、营养丰富而享誉古今中外。色、香、味、形俱全，营养丰富，是柑桔中的精品，水果中的佳品，为“食之悦口、视之悦目、闻之悦鼻、誉之悦耳”的四悦水果。 ",
			"price": 5,
			"img": "/static/img/indexImg1.jpg",
			"spell": "5",
			"discount": 8.5,
			"thePrice": "6",
			"weight": "500g",
			"yicollection": false,
			"collection": false
		},
		{
			"id": "10002",
			"name": "越南进口火龙果（2粒）",
			"content": "外皮红艳张扬，果肉绵软白嫩，汁液丰富，富含维生素C，丰富的水溶性膳食纤维，前者美白皮肤，后者有助减肥，降血糖，润肠，预防肠癌，美容瘦身。",
			"price": 14,
			"img": "/static/img/j-c01.jpg",
			"spell": "3",
			"discount": 6.8,
			"thePrice": "16",
			"weight": "700g~800g",
			"yicollection": false,
			"collection": false
		},
		{
			"id": "10003",
			"name": "苹果（箱）",
			"content": "苹果树多为异花授粉，有2～4%的花座果较为理想。虽然成熟苹果的大小、形状、颜色和酸度因品种和环境条件的不同而差异很大，但通常圆形，直径50～100毫米，带红色或黄色",
			"price": 60,
			"img": "/static/img/indexImg3.jpg",
			"spell": "2",
			"discount": 8.2,
			"thePrice": "72",
			"weight": "5kg~5.5kg",
			"yicollection": false,
			"collection": false
		},
		{
			"id": "10004",
			"name": "荔枝（箱）",
			"content": "常绿乔木，高通常不超过10米，有时可达15米或更高，树皮灰黑色；小枝圆柱状，褐红色，密生白色皮孔",
			"price": 40,
			"img": "/static/img/indexImg5.jpg",
			"spell": "3",
			"discount": 7.3,
			"thePrice": "45",
			"weight": "4kg~5kg",
			"yicollection": false,
			"collection": false
		},
		{
			"id": "10005",
			"name": "脐橙（斤）",
			"content": "形状酷似人的肚脐而得名， 具有外形美观、色泽鲜艳、肉质脆嫩、风味香甜且营养价值高等特点,深受消费者的青睐。目前我国主要的种植品种有纽荷尔朋娜、林娜、华盛顿等",
			"price": 8,
			"img": "/static/img/indexImg2.jpg",
			"spell": "4",
			"discount": 6.8,
			"thePrice": "10",
			"weight": "500g",
			"yicollection": false,
			"collection": false
		},
		{
			"id": "10006",
			"name": "雪梨（箱）",
			"content": "树姿半开张 ，树势强壮，树冠较大，萌芽率高，成枝力强。以短果枝结果为主，果台连续结果能力强。",
			"price": 70,
			"img": "/static/img/indexImg4.jpg",
			"spell": "6",
			"discount": 5.6,
			"thePrice": "82",
			"weight": "8kg~9kg",
			"yicollection": false,
			"collection": false
		}
	],
	count: 0,
}

export default {
	state,
	getters,
	mutations,
	actions
}