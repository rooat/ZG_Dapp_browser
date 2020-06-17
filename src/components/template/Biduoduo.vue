<template>
<div class="biduoduodiv">
	<!-- <ul class="biduoduoapp">
       <li class="titlename">{{$t("message.biduoduo")}}</li>
       <li class="moreli">{{$t("message.more")}}&nbsp;&nbsp;&nbsp; > </li>
    </ul> -->

    <div class="biduoduodiv1">
      <table class="biduoduotable">
        <div class="grad1"> </div>
        <div class="randclass"> </div>
      	<tr>
      		<td colspan="3" class="licaihead">{{$t("message.financial")}}</td>
      	</tr>
      	<tr class="licaititle">
      		<td>{{$t("message.annualizedrate")}}</td>
      		<td>{{$t("message.term")}}</td>
      		<td class="details">{{$t("message.platformguarantee")}}</td>
      	</tr>
      	<tr class="licaidetail">
      		<td>--</td>
      		<td>30{{$t("message.day")}}</td>
      		<td class="details"><button class="buybtn">{{$t("message.comingsoon")}}</button></td>
      	</tr>
      </table>
    </div>
    </div>
</div>
</template>

<script>
	

</script>

<style>
.biduoduodiv{
  background-color: #fafbf8;
  height: 300px;
  width: 100%;
  border-radius: 10px;
}
.buybtn{
	border-radius: 30px;
	background-color: white;
	padding: 10px;
	width: 60%;
	color:rgba(87,43,209,1);
  outline: 0;
  border: 0;
}
.details{
	width:42%;
  z-index: 100;
}
.licaidetail{
	text-align: center;
}
.licaihead{
	text-align: left;
	padding-left: 50px;
	font-size: 27px;
}
.biduoduotable{
	width: 100%;
	font-size: 35px;
	border-collapse:separate; 
	border-spacing:0px 20px;
  position: relative;
  z-index: 1;
}
.licaititle td{
	font-size:24px;
}
.titlename{
  float:left;
  font-weight:bold;
  font-size: 30px;
}
.moreli{
  float:right;
  color:rgba(153,172,187,1);
  font-size: 25px;
}
.biduoduoapp{
  width: 95%;
  clear:both;
  padding:20px 0; 
  list-style:none; 
  font-size: 33px;
  margin:50px 22px;
}
.biduoduodiv1{

  width:95%;
  height: 260px;
  background:linear-gradient(-40deg,rgba(1,210,233,1) 0%,rgba(122,77,247,1) 98%);
  box-shadow:0px 3px 12px 0px rgba(239,58,53,0.3);
  border-radius:20px;
  padding:0;
  margin:0 auto;
  border-radius: 20px;
  color:white;
}
.grad1{
  width:280px;
  height:180px;
  margin-left:45%;
  margin-top: 8%;
  border-radius:280px 280px 0 0;
  background:linear-gradient(225deg,rgba(80,123,242,1) 0%,rgba(12,198,235,1) 98%);
  opacity:0.5;
  position:absolute;
  z-index: -1;
}
.randclass{
  width:280px;
  height:180px;
  margin-left:60%;
  margin-top: 0%;
  border-radius:280px;
  background:linear-gradient(-40deg,rgba(19,190,235,1) 0%,rgba(79,124,242,1) 98%);
  opacity:0.5;
  position:absolute;
  z-index: -1;
}
.biduoduodiv2{
  width:100%;
  height: 260px;
  background:linear-gradient(-40deg,rgba(111,238,213,1) 0%,rgba(20,200,189,1) 98%);
  box-shadow:0px 3px 12px 0px rgba(12,172,162,0.3);
  border-radius:20px;
  padding:0;
  margin-bottom: 45px;
  border-radius: 20px;
  color:white;
}
.grad2{
  width:280px;
  height:180px;
  margin-left:45%;
  margin-top: 9%;
  border-radius:280px 280px 0 0;
  background:linear-gradient(to bottom left,rgba(20,200,189,1),rgba(111,238,213,1));
  opacity:0.5;
  position:absolute;
  z-index: -1;
}
.biduoduodiv3{
  width:100%;
  height: 260px;
  background:linear-gradient(-40deg,rgba(1,210,233,1) 0%,rgba(122,77,247,1) 98%);
  box-shadow:0px 3px 12px 0px rgba(122,77,247,0.3);
  border-radius:20px;
  padding:0;
  margin-bottom: 45px;
  border-radius: 20px;
  color:white;
}
.grad3{
  width:280px;
  height:180px;
  margin-left:45%;
  margin-top: 9%;
  border-radius:280px 280px 0 0;
  background:linear-gradient(to bottom left,rgba(122,77,247,1),rgba(1,210,233,1));
  opacity:0.3;
  position:absolute;
  z-index: -1;
}

</style>