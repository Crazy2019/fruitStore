const localEvent = function(item){
	this.get = function(){
		return localStorage.getItem(item) ? JSON.parse(localStorage.getItem(item)) : '';  //拿到JSON对象
	}
	
	this.set = function(obj){
		return localStorage.setItem(item, JSON.stringify(obj));  //存储字符串
	}
	
	this.clear = function(){
		return localStorage.removeItem(item);
	}
}


const sessionEvent = function(item){
	this.get = function(){
		return sessionStorage.getItem(item) ? JSON.parse(sessionStorage.getItem(item)) : '';  //拿到JSON对象
	}
	
	this.set = function(obj){
		return sessionStorage.setItem(item, JSON.stringify(obj));  //存储字符串
	}
	
	this.clear = function(){
		return sessionStorage.removeItem(item);
	}
}


export const local = new localEvent("qsh_shop");

export const collection = new localEvent("qsh_collection");

export const cart = new localEvent("qsh_cart");

export const coupon = new localEvent("qsh_coupon");

export const goCoupon = new localEvent("qsh_goCoupon");

export const register = new localEvent("qsh_register");

export const spellGroup = new localEvent("qsh_spellGroup");

export const session = new sessionEvent("qsh_user");


export const yearMonth = () => {//获取当前年月日
	let data = new Date(),month = data.getMonth()+1,dayy = data.getDate();
	month = month > 9 ? month : '0' + month;
	dayy = dayy > 9 ? dayy : '0' + dayy;
	return data.getFullYear()+"-"+month+"-"+dayy;
}

