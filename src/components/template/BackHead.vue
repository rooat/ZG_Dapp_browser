<template>
	<div>
		<p class="backclass" @click="backbtn">< {{$t("message.back")}}</p>
	</div>
</template>

<script>
export default{
	components:{
	},
	methods:{
		backbtn:function(){
			this.$router.push({path:'/'})
		}
	}
}
</script>

<style scoped="scoped">
.backclass{
	text-align: left;
	 background:linear-gradient(to bottom left,#b5dcf3,#0ab5b4);
	height: 45px;
	line-height: 45px;
	margin:0;
	padding:20px;
	font-size: 40px;
	border-radius: 10px;
	color:white;
}
</style>