<template>
  <div>
    <div class="language">
     <!--  <ul class="langs">
        <li @click="langzh" v-bind:style="{background:activbgzh}">ZH</li>
        <li @click="langen" v-bind:style="{background:activbgen}">EN</li>
      </ul> -->
    </div>
    <Head></Head>
    <Reffer></Reffer>
    <Popular></Popular>
    <Biduoduo></Biduoduo>
    <Tools></Tools>
    <p>Copyright 2019 © Dapp-Browser E-mail:support@etherzero.org</p>
    <div class="tipsclass" v-show="isshowtipx">
      <div  v-show="state_open">
        <p>
          <h2>{{$t("message.tips1")}}</h2>
          <h2>DApp {{dappname}}</h2>
        </p>
        <p class="tipcontentclass">
          {{$t("message.tips2")}}DApp {{dappname}}{{$t("message.tips7")}}{{dappname}}{{$t("message.tips8")}}
        </p>
        <ul>
          <li class="left" @click="cenceltipbtn">{{$t("message.tips3")}}</li>
          <li class = "right" @click="openurlbtn">{{$t("message.tips4")}}</li>
        </ul>
      </div>
      <div v-show="state_dev">
        <p class="devwordclass">{{$t("message.tips5")}}</p>
        <button @click="cenceltipbtn" class="state_dev"> {{$t("message.tips6")}} </button>
      </div>
      
    </div>
    <div class="ceng" v-show="isshowceng"></div>
  </div>
</template>

<script>
import Head from './template/Head'
import Reffer from './template/Reffer'
import Popular from './template/Popular'
import Biduoduo from './template/Biduoduo'
import Tools from './template/Tools'
import trans from '../common/utils/trans'

export default {
  name: 'MainScreen',
  components:{
    'Head': Head,
    'Reffer':Reffer,
    'Popular':Popular,
    'Biduoduo':Biduoduo,
    'Tools':Tools
  },
  data () {
    return {
      state_open:false,
      state_dev:true,
      msg: 'ETZ DApps',
      screenwidth:0,
      screenheight:0,
      activbgzh:"red",
      activbgen:"",
      isshowtipx:false,
      isshowceng:false,
      dappname:'',
      dappurl:'',
      state:0
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init:function(){
      if(navigator.language.indexOf('zh')!=-1){
        this.$i18n.locale='zh'
        this.activbgzh="red"
        this.activbgen="blue"
      }else{
        this.$i18n.locale='en'
        this.activbgzh="blue"
        this.activbgen="red"
      }
      window.localStorage.clear();
      trans.$off("tipsemit")
      trans.$on("tipsemit",(data)=>{
        if(data.state==0){
          this.state_open=true;
          this.state_dev=false;
        }else{
          this.state_open=false;
          this.state_dev = true;
        }
        if(data.name!='NumberOne'){
          this.dappname=data.name;
          this.dappurl = data.link;
          this.state = data.state;
          this.isshowtipx=true
          this.isshowceng=true;
        }else{
          this.dappname=data.name;
          this.dappurl = data.link;
          this.state = data.state;
          this.openurlbtn();
        }
        
      })
    },
    langzh:function(){
      this.$i18n.locale='zh'
        this.activbgzh="red"
        this.activbgen="blue"
     },
     langen:function(){
      this.$i18n.locale='en'
        this.activbgzh="blue"
        this.activbgen="red"
     },
     cenceltipbtn:function(){
      this.isshowtipx=false
      this.isshowceng=false;
     },
     openurlbtn:function(){
      window.localStorage.setItem(this.dappname,this.dappurl);
      this.cenceltipbtn();
      window.open(this.dappurl,'_self')

     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.devwordclass{
  font-size: 28px;
}
.state_dev{
          background: #ebefe6;
    height: 60px;
    line-height: 60px;
    width: 40%;
    border-radius: 7px;
    margin-bottom: 10px;
    font-size: 28px;
}
.tipcontentclass{
  width: 90%;
  margin-left: 5%;
  text-align: left;
  font-size: 25px;
}
.ceng{
  width: 100%;
  height: 2400px;
  background: black;
  position: absolute;
  top:0;
  opacity: 0.4;
  z-index: 20;
}
.tipsclass{
  margin-left:10%;
  width: 80%;
  height: auto;
  background: white;
  position: absolute;
  top:350px;
  z-index: 25;
  border-radius: 8px;
}
.tipsclass ul{
  margin-left: 4%;
}
.tipsclass ul li{
  float:left;
  width:45.8%;
  list-style: none;
  border-top:1px solid grey;
  height: 70px;
  line-height: 70px;
  font-size: 26px;
}
.tipsclass ul  .left{
  border-right: 0.1px solid grey;
}
.tipsclass ul  .right{
   color: #3c6a79;
}
.langs{
  list-style: none;
  width:100%;
  color: white
}
.langs li{
  float:left;
  width: 50%;
  height: 50px;
  line-height: 50px;
  background-color: blue;
  border-radius: 20px;
}
.language{
  width: 30%;
  height: 50px;
  position: absolute;
  top:0;
  right: 35%;
}


</style>
