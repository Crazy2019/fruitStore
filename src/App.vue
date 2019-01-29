<template>
  <div id="app">
  	<v-toast v-show="getToast"></v-toast>
	  <div class="fruit-container">
	    <router-view />
	  </div>
  </div>
</template>

<script>
import popToast from "./components/toast.vue";
import { mapGetters } from "vuex";
export default {
	components: {"v-toast": popToast,},
  name: 'App',
	
	data(){
		return {
			
		}
	},
	computed: {
		...mapGetters(['getToast'])
	}
}
</script>

<style>
#app {
  font-family: 'microsoft yahei',Verdana,Arial,Helvetica,sans-serif;
}
</style>
