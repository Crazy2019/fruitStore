<template>
	<div id="app">
		<v-toast v-show="getToast"></v-toast>
		<div class="fruit-container">
			<transition :name="transitionName">
				<router-view />
			</transition>
		</div>
	</div>
</template>

<script>
	import popToast from "./components/toast.vue";
	import { mapGetters } from "vuex";
	export default {
		components: {
			"v-toast": popToast,
		},
		name: 'App',

		data() {
			return {
				transitionName: ''
			}
		},
		watch: {
			$route(to, from) {
				const toDepth = to.path.split('/').length;
				const fromDepth = from.path.split('/').length;
				if(to.path === '/') { //进去的路由
					this.transitionName = 'slide-right';
				} else if(from.path === '/') { //离开的路由
					this.transitionName = 'slide-left';
				} else {
					this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
				}
			}
		},
		computed: {
			...mapGetters(['getToast'])
		}
	}
</script>

<style>
	#app {
		font-family: 'microsoft yahei', Verdana, Arial, Helvetica, sans-serif;
	}
</style>

<style scoped>
	.slide-left-enter-active,
	.slide-left-leave-active,
	.slide-right-enter-active,
	.slide-right-leave-active {
		will-change: transform;
		transition: all .4s;
		position: absolute;
		width: 100%;
		left: 0;
	}
	.slide-left-enter {
		opacity: 0;
		transform: translate(100%, 0);
	}
	.slide-left-leave-active {
		opacity: 0;
		transform: translate(-100%, 0);
	}
	.slide-right-enter {
		opacity: 0;
		transform: translate(-100%, 0);
	}
	.slide-right-leave-active {
		opacity: 0;
		transform: translate(100%, 0);
	}
</style>