<template>
<div class=excelentdiv>
	<ul class="exelentdapp">
      <li class="titlename">{{$t("message.excellent")}}DApps</li>
      <li class="moreli" >{{$t("message.more")}} &nbsp;&nbsp;&nbsp;> </li>
    </ul>
	<div class="detaildapp">
      <img class="excelenimg" src="static/images/mall.png"/>
      <ul class="excellcontent">
        <li>{{$t("message.mall")}}</li>
        <li class="secondtitle">{{$t("message.mallcomment")}}</li>
      </ul>
    </div>
</div>
</template>

<script>
  import Links from '../../common/links'
	export default{
	  name: 'MainScreen',
	  components:{

	  },
	  data () {
	    return {
        deving:String
	    }
	  },
	  mounted() {

	  },
	  methods: {
		    morebtn:function(){
		      this.$router.push({path:'/more'})
		    },
        changeWord:function(){
          if(this.$i18n.locale=='zh'){
            this.deving="在开发中..."
          }else{
            this.deving="Developing..."
          }
        },
        biduoduobtn:function(){
          window.open(Links.url.biduoduo,'_self')
        }
	  }
	}
</script>

<style>
.excelentdiv{
  margin-left: 20px;
  margin-right:20px;
  height: 200px;
}
.secondtitle{
	color:rgba(153,172,187,1);
	padding-top:10px;
	font-size: 20px;
}
.moreli{
  float:right;
}
.titlename{
  float:left;
  font-weight:bold;
}
.exelentdapp{
  clear:both;
  padding:0;
  list-style:none; 
  font-size: 33px;
  height: 20px;
}
.detaildapp{
  clear:both;
  padding-top:20px;
  border-bottom: 1px solid rgba(233,238,244,1);
  height: 120px;
}
.excelenimg{
  width:15%;
  float:left;
}
.excellcontent{
  float:left;
  list-style: none;
  text-align: left;
  margin:10px 25px;
  padding:0;
  font-size: 28px;
}

</style>