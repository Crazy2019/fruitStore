import * as func from "../function.js";

export default{
	SPELLPEOPLE(state, obj){//开团成功
		state.spellList.map(vla=>{ 
			if(obj.spellShop.id === vla.spellShop.id){
				vla.userList.unshift(obj.userList[0]);
				if(vla.userList.length === Number(vla.spellShop.spell)){
					vla.spellState = 2; //拼团成功2
				}
				func.spellGroup.set(state);
			}
		});
	},
	SPELLSUCCESS(states, obj){
		states.spellList.unshift(obj);
		console.log(states)
		func.spellGroup.set(states);
	},
	
	
	SPELLFAILURE(states, obj){
		states.spellList.map(vla=>{ 
			if(obj.spellShop.id === vla.spellShop.id){
				vla.spellState = 3; //拼团失败3
			}
		});
		func.spellGroup.set(states);
	},
	ISSPELL(states, obj){
		states.spellList.map(vla=>{ 
			if(obj.spellShop.id === vla.spellShop.id){
				vla.spellState = 1; //拼团失败1
			}
		});
		func.spellGroup.set(states);
	},
	
//	SPELLDEFAULT(state, obj){
//		states.spellList.map(vla=>{ 
//			if(obj.spellShop.id === vla.spellShop.id){
//				vla.spellState = 1; //拼团中1
//			}
//		});
//		func.spellGroup.set(states);
//	}
	
//	SUCCESSSPELL(states, obj){//拼团成功2
//		states.spellList.map(vla=>{ 
//			if(obj.spellShop.id === vla.spellShop.id){
//				vla.spellState = 2; //拼团成功2
//			}
//		});
//		func.spellGroup.set(states);
//	}
}
