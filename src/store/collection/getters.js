
export default{
	getShopListCart(states){
		return states.collectionForm;
	},
	
	getShopList(states){
		return states.collectionForm
	},
	
	getCollectoin(states){
		return states.collectionForm.filter(vla=>{
			if(vla.collection === true){
				return vla;
			}
		})
	}
	
}
