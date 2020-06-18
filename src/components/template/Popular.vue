<template>
<div class=excelentdiv>
    <ul class="exelentdapp">
      <li class="titlename">{{$t("message.popular")}}</li>
      <li class="moreli" >&nbsp;</li>
    </ul>
  <div class="detaildapp">
    <img v-if="lang == 'zh'" class="popularimg" @click="popular_master_btn" src="static/img/go.png"/>
      <!-- <img v-if="lang == 'zh'" class="popularimg" @click="staking_btn" src="static/images/stakingbtn_zh.png"/>
      <img v-if="lang != 'zh'" class="popularimg" @click="staking_btn" src="static/images/stakingbtn_en.png"/>
      
      <img v-if="lang == 'zh'" class="popularimg" @click="popular_master_btn" src="static/images/popular_img.png"/>
      <img v-if="lang != 'zh'" class="popularimg" @click="popular_master_btn" src="static/images/popular_img_en.png"/>
      -->
    </div>
</div>
</template>

<script>
  import Links from '../../common/links'
  import trans from '../../common/utils/trans'
	export default{
	  name: 'MainScreen',
	  components:{

	  },
	  data () {
	    return {
        deving:String,
        lang: ''
	    }
	  },
	  mounted() {
      this.states();
	  },
	  methods: {
		     popular_master_btn:function(){
           window.open(Links.url.vipnode,'_self')
          // let dname = window.localStorage.getItem("Vip节点");
          // if(dname){
          //   window.open(Links.url.vipnode,'_self')
          // }else{
          //   trans.$emit("tipsemit",{"name":"Vip节点","link":Links.url.vipnode,"state":0});
          // }
        },
        staking_btn:function(){
          window.open(Links.url.vipnode,'_self')
        },
        states() {
          let that = this;
          let lang = navigator.language || navigator.userLanguage;//常规浏览器语言和IE浏览器
          lang = lang.substr(0, 2);//截取lang前2位字符
          that.lang = lang;
        }
	  }
	}
</script>

<style>
.excelentdiv{
  margin-left: 20px;
  margin-right:20px;
  /* height: 550px; */
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
}
.popularimg{
  width: 100%
}

</style>