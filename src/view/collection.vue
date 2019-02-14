<template>
	<div class="collection-box">
		<div class="collection">
			<navbar></navbar> 
			<div v-if="getCollectoin.length>0">
				<div v-for="(item, index) in getCollectoin">
					<div class="f-groupItem" @click="goDetail(item.id)">
						<img :src="item.img"/>
						<div class="f-groupItem-info">
							<h4>{{item.name}}</h4>
							<p>规格：{{item.weight}}</p>
							<p class="collectionContent">{{item.content}}</p>
						</div>
					</div>
				</div>
			</div>
			<div v-else class="noProduct">暂无商品收藏...</div>
		</div>
	</div>
</template>

<script>
import nav from "../components/nav.vue";
import { mapGetters } from "vuex";
export default{
	components: {'navbar':nav},
	created(){
		this.$store.dispatch("navContent", false);
		this.$store.commit("GETNAVTITLE", "我的收藏");
	},
	computed: {
		...mapGetters(['getCollectoin'])
	},
	methods: {
		goDetail(id){
			this.$router.push({name: 'shopDetail', params: {id: id}});
		},
	}
}
</script>

<style>
</style>