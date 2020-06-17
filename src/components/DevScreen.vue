<template>
<div class="developdiv">
	<BackHead></BackHead>
	<div class="devbody">
	<h4>{{$t("message.dev1")}}</h4>
	<p>{{$t("message.dev2")}}</p>
	{{$t("message.dev3")}}
	<p>{{$t("message.dev4")}}</p>
	{{$t("message.dev5")}}
	<p>{{$t("message.dev6")}}</p>
	<p>
		{{$t("message.dev7")}}
	</p>
	<p>
		{{$t("message.dev8")}}
	</p>
	<p> {{$t("message.dev9")}}
</p>
	<p> {{$t("message.dev10")}}</p>
	<p>{{$t("message.dev11")}}</p>
	<p>{{$t("message.dev12")}}</p>
	<p>{{$t("message.dev121")}}</p>
	<p>{{$t("message.dev122")}}</p>
	<p>
		<h3>{{$t("message.dev13")}}</h3>
		<p class="flat">{{$t("message.dev14")}}</p>
		<input class="inputdappclass" placeholder="http:// or https://" ref="inputdappurl" type="text"/>&nbsp;
		<button class="enterclass" @click="enterdapp">{{$t("message.dev15")}}</button>
	</p>
	<!-- <a href="http://www.gowindapp.com">试玩 gowin</a> -->
	<p class="footers">Copyright 2019 © Dapp-Browser E-mail:support@etherzero.org</p>
	<!-- <h2>提交Dapp到发现页面</h2> -->
	<!-- <table class="confirmtable">
		<tr>
			<td>Dapp名称：</td>
			<td><input placeholder="长度小于4个中文或2个单词" class="inputdappname" type="text"/></td>
		</tr>
		<tr>
			<td>Dapp Url:</td>
			<td><input class="inputdappurl" type="text"/></td>
		</tr>
		<tr>
			<td>Dapp logo:</td>
			<td><input class="inputdapplogo" type="file"/></td>
		</tr>
	</table>
	<button class="submitdappbtn">提交</button> -->

	<!-- <form action='/browserapi/api/upload' ref="uploadData" method='post' enctype='multipart/form-data' class="dappform" target="nm_iframe">
				<div>
					<span>名称：</span><input type="text" name='dappname' class="inputdappname" id="dappname"/>
				</div>
				<div>
					<span>url：</span><input type="text" name='dappurl' class="inputdappurl"  id="dappurl"/>
				</div>
				<div>
					<span>描述：</span><textarea cols="10" rows="10" id="comment" name="comment"></textarea>
				</div>
				
				<br/>
				<div><span style="width:30%;">上传Dapp Logo</span><input id='dapplogo' class="inputdapplogo" type='file' name = 'file' multiple /></div>
				<div>

					<button @click="uploadDatabtn" class="submitdappbtn">提交</button>
				</div>
				
	</form>
	<iframe id="id_iframe" name="nm_iframe" style="display:none;"></iframe> -->
</div>
</div>
</template>

<script>
import BackHead from './template/BackHead'
export default{
	components:{
		'BackHead':BackHead
	},
	methods:{
		backbtn:function(){
			this.$router.push({path:'/'})
		},
		enterdapp:function(){

			let inputurl = this.$refs.inputdappurl.value;
			console.log("enter....",inputurl)
			window.open(inputurl,"_self")
		},
		uploadDatabtn:function(){
			this.$refs.uploadData.submit()
			this.$toast("提交成功")
		}
	}
}
</script>
<style>
.footers{
	padding-top: 70px;
}
.developdiv{
	width: 100%;
	text-align: left;
	padding:10px;
	height: auto;
	background-color: #eef0f1;
}
.devbody{
	width: 92%;
	margin-left: 4%;
	text-align: left;
}
.inputdappclass{
	border:1px solid lightgrey;
	width: 70%;
	height: 60px;
	border-radius: 10px;
}
.enterclass{
	font-size: 30px;
	background-color: lightblue;
	border-radius: 9px;
	height: 60px;
}
.dappform{
	margin-bottom: 30px;
}
.dappform div{
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 10px;
}
.dappform div span{
	width: 100px;
}
.dappform div textarea{
	width: calc(100% - 60px);
	border:0.5px solid lightgrey;
}
.inputdappname{
	height: 40px;
	border:1px solid lightgrey;
	border-radius: 8px;
	width: calc(100% - 60px);
}
.inputdappurl{
	height: 40px;
	border:1px solid lightgrey;
	border-radius: 8px;
	width: calc(100% - 60px);
}
.inputdapplogo{
	border-radius: 5px;
	width: 100%
}
.submitdappbtn{
	background-color: #5c925c;
	width: 100%;
	margin-top: 20ox;
	color:white;
	font-size:30px;
	border-radius: 10px;
	height: 80px;
	line-height: 80px;
}
.developdiv p{
	word-break: normal;word-wrap:break-word;
}
</style>