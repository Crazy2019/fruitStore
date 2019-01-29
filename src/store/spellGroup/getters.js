import * as func from "../function.js";

export default{
	getSpellList(states){ //团购商品
		return states.spellList.filter(vla=>{
			if(vla.spellState === 1){
				return vla;
			}
		})
	},
	
	getSpellGroupPeople(states){ //团购商品
		return states.spellList.map(vla=>{
			return vla;
		})
	},
	
	successSpell(states){ //拼团成功
		return states.spellList.filter(vla=>{
			if(vla.spellState === 2){
				return vla;
			}
		})
	},
	failureSpell(states){//拼团失败
		return states.spellList.filter(vla=>{
			if(vla.spellState === 3){
				return vla;
			}
		})
	},
	
	spellGroupLength(states){//拼团数量
		return states.spellList.length;
	}
	
}