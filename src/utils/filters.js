

/*过滤器*/
export const moneyFilter = (value) => {
	return "￥"+value+".00";
}

export const unitMoney = (value, type) => {
	return "￥"+value+".00"+type;
}

export const unitFilter = (value) => {
	return value+".00";
}

