<template>
	<div class="popToast">
		
		<div class="popBox">
			
			{{getToastMsg}}
			
		</div>
		
	</div>
</template>

<script>
import { mapGetters } from "vuex";
export default{
	computed: {
		...mapGetters(['getToastMsg'])
	}
}
</script>
