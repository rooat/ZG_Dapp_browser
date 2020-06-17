<template>
   <div class="toolsdiv">
      <ul class="biduoduoapp">
         <li class="titlename">{{$t("message.tool")}}</li>
         <li class="moreli">{{$t("message.more")}} > </li>
      </ul>
      <ul class="toolsdetail">
        <li class="toolsleft" @click="masternodebtn">
          <img class="toolpic" src="static/images/mainnode.png">
          <p class="toolscontent">
            {{$t("message.mainnode")}}
          </p>
        </li>
        <li class="toolsright">
          <img class="toolpic" src="static/images/votelogo.png">
          <p class="toolscontent">
            {{$t("message.socialvote")}}     
          </p>
        </li>
      </ul>

      <ul class="toolsdetail">
        <li class="toolsleft_wallet">
          <img class="toolpic" src="static/images/etzwallet.png">
          <p class="toolscontent">
            {{$t("message.onlinewallet")}}
          </p>
        </li>
        <li class="toolsright_devtool">
          <img class="toolpic" src="static/images/devtools.png">
          <p class="toolscontent" @click="devopenbtn">
            {{$t("message.devtool")}}    
          </p>
        </li>
      </ul>
      <!-- <span @click="test">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> -->
    </div>
</template>

<script>
  import Links from '../../common/links'
  export default {
    name: 'Head',
    components: {},
    mounted() {
    },
    methods: {
      devopenbtn:function(){
        console.log("dev...")
        this.$router.push({path:'/dev'})
      },
      test:function(){
        //window.open("http://52.197.189.155/dist/index.html","_self")
        window.open("http://www.blockoptions.com","_self")
      },
      masternodebtn:function(){
        window.open(Links.url.masternode,'_self')
      }
    }
  }
</script>

<style>
ul{
  padding-inline-start:0
}
.biduoduoapp{
  width: 95%;
  clear:both;
  padding:20px 0; 
  list-style:none; 
  font-size: 33px;
  margin:10px 22px 50px 22px;
}
.toolsdiv{
  height: 430px;
}
.toolsdetail{
  width: 95%;
  margin:30px auto;
  height:120px;
  clear:both;
  list-style: none;
}
.toolsdetail li{
  height: auto;
  width:45%;
  border-radius: 20px;
}
.toolsleft{
  float:left;
  line-height: 10px;
  padding:10px 0 10px 10px;
  background:linear-gradient(180deg,#fd757d 10%,#ed2e30 98%);
  box-shadow:0px 3px 12px 0px rgba(25,171,163,0.3);
  border-radius:20px;
  color:white;
}
.toolsright{
  float:right;
  line-height: 10px;
  padding:10px 0 10px 10px;
  background:linear-gradient(0deg,#fc743c 10%,#f8c000 98%);
  border-radius:20px;
  color:white;
}
.toolsleft_wallet{
  float:left;
  line-height: 10px;
  padding:10px 0 10px 10px;
  background:linear-gradient(180deg,#4bd7b6 10%,#167ccc 98%);
  box-shadow:0px 3px 12px 0px rgba(25,171,163,0.3);
  border-radius:20px;
  color:white;
}
.toolsright_devtool{
  float:right;
  line-height: 10px;
  padding:10px 0 10px 10px;
  background:linear-gradient(0deg,#4399FB 10%,#3EBFFC 90%);
  border-radius:20px;
  color:white;
}
.toolpic{
  width:22%;
  float:left;
  padding:0;
  margin: 20px 5px;
}
.toolscontent{
  float:left;
  font-size: 32px;
  padding:18px 20px;
}
</style>




