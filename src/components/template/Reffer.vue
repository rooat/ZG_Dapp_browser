<template>
  <div class="refferbox">
    <div class="reffertable_box">
	<table class="reffertable">
      <tr>
        <td><img class="refferpic" :src="phoenix_sec" @click="phoenix_secbtn"/></td> 
        <td><img class="refferpic" :src="zerotrap" @click="zerotrapbtn"/></td>
        <td><img class="refferpic" :src="eash" @click="eashbtn"/></td>
        <td><img class="refferpic" :src="zerodicelogo" @click="zerodicelogobtn"/></td> 
        
      </tr>
      <tr>
        <td @click="phoenix_secbtn">{{$t("message.phoenix_sec")}}</td> 
        <td @click="zerotrapbtn">{{$t("message.zerotrap")}}</td>
        <td @click="eashbtn">{{$t("message.eash")}}</td>
        <td @click="zerodicelogobtn">{{$t("message.zerodicelogo")}}</td>
        
      </tr>
    </table>
    <table class="reffertable">
      <tr>
        <td><img class="refferpic" :src="blockoptions" @click="blockoptionsbtn"/></td>
        <td><img class="refferpic" :src="shengcaiyoudao" @click="shengcaiyoudaobtn"/></td>
        <td><img class="refferpic" :src="Boxes" @click="Boxesbtn"/></td>
         <!-- <td><img class="refferpic" :src="phoenix" @click="phoenixbtn"/></td> -->
        <td></td>
        
      </tr>
      <tr>
        <td @click="blockoptionsbtn">{{$t("message.blockoptions")}}</td>
        <td @click="shengcaiyoudaobtn">{{$t("message.shengcaiyoudao")}}</td>
        <td @click="Boxesbtn">{{$t("message.Boxes")}}</td>
        <!-- <td @click="phoenixbtn">{{$t("message.phoenix")}}</td> -->
        <td></td>
        
      </tr>
    </table>
    </div>
    <div v-show="isshowtoast" class="isshowclass">
      <p>{{$t("message.updating")}}</p>
      <span class="closeclass" @click="closedivbtn">{{$t("message.close")}}</span>
    </div>
  </div>
</template>

<script>
import Links from '../../common/links'
import trans from '../../common/utils/trans'
export default {
  name: 'MainScreen',
  components:{
  },
  data () {
    return {
      zerotrap:'static/images/zerotrap.png',
      eash:'static/images/eash.png',
      blockoptions:'static/images/blockoptions.png',
      phoenix:'static/images/phoenix.png',
      zerodicelogo:'static/images/zerodicelogox.png',
      gowinlogo :'static/images/gowin.png',
      gowinpluslogo:'static/images/gowin_plus.png',
      Boxes :'static/images/Boxes.png',
      phoenix_sec:'static/images/phoenix_sec.png',
      shengcaiyoudao:'static/images/shengcaiyoudao.png',
      isshowtoast:false
    }
  },
  mounted() {

  },
  methods: {
    eashbtn:function (event) {      
      let dname = window.localStorage.getItem("Eash");
      if(dname){
        window.open(Links.url.eash,'_self')
      }else{
        trans.$emit("tipsemit",{"name":"Eash","link":Links.url.eash,"state":0});
      }
    },
    zerotrapbtn:function(event){
      let dname = window.localStorage.getItem("ZeroTrap");
      if(dname){
        window.open(Links.url.zerotrap,'_self')
      }else{
        trans.$emit("tipsemit",{"name":"ZeroTrap","link":Links.url.zerotrap,"state":0});
      }
    },
    blockoptionsbtn:function(){
      
      let dname = window.localStorage.getItem("Blockoptions");
      if(dname){
        window.open(Links.url.blockoptions,'_self')
      }else{
        trans.$emit("tipsemit",{"name":"Blockoptions","link":Links.url.blockoptions,"state":0});
      }
    },
    Boxesbtn:function(){
      let dname = window.localStorage.getItem("Boxes");
      if(dname){
        window.open(Links.url.Boxes,'_self')
      }else{
        trans.$emit("tipsemit",{"name":"Boxes","link":Links.url.Boxes,"state":0});
      }
    },
    zerodicelogobtn:function(){
      let dname = window.localStorage.getItem("Zerodicelogo");
      if(dname){
        window.open(Links.url.zerodicelogo,'_self')
      }else{
        trans.$emit("tipsemit",{"name":"ZeroDice","link":Links.url.zerodicelogo,"state":0});
      }
    },
    phoenixbtn:function(){
      let dname = window.localStorage.getItem("Phoenix");
      if(dname){
        window.open(Links.url.phoenix,'_self')
      }else{
        trans.$emit("tipsemit",{"name":"Phoenix","link":Links.url.phoenix,"state":0});
      }
    },
    phoenix_secbtn:function(){
      let dname = window.localStorage.getItem("Phoenix2.0");
      if(dname){
        window.open(Links.url.phoenix_sec,'_self')
      }else{
        trans.$emit("tipsemit",{"name":"Phoenix2.0","link":Links.url.phoenix_sec,"state":0});
      }
    },
    gowinlogobtn:function(){
      let dname = window.localStorage.getItem("gowin");
      if(dname){
        window.open(Links.url.gowin,'_self')
      }else{
        trans.$emit("tipsemit",{"name":"gowin","link":Links.url.gowin,"state":0});
      }
    },
    gowinplusbtn:function(){
      let dname = window.localStorage.getItem("TreasureBasin");
      if(dname){
        window.open(Links.url.gowin_plus,'_self')
      }else{
        trans.$emit("tipsemit",{"name":"TreasureBasin","link":Links.url.gowin_plus,"state":0});
      }
    },
    shengcaiyoudaobtn:function(){
      let dname = window.localStorage.getItem("升财有道");
      if(dname){
        window.open(Links.url.shengcaiyoudao,'_self')
      }else{
        trans.$emit("tipsemit",{"name":"升财有道","link":Links.url.shengcaiyoudao,"state":0});
      }
    },
    closedivbtn:function(){
      this.isshowtoast=false
    }
  }
}
</script>

<style>
.isshowclass{
  background-color: #f1f4f5;
  position: absolute;
  top:30%;
  width: 50%;
  left:25%;
  height: 180px;
  border-radius: 10px;
  line-height: 60px;
}
.refferbox{
  margin: 50px 0;
}
.reffertable_box{
  padding: 15px 0;
  background: #fdfbfb;
}
.reffertable{
  width: 100%;
  margin: 0 auto;
  font-size: 28px;
  border-radius: 10px;
  padding: 15px 0;
}
.reffertable tr td{
  width:25%;
}
.reffertable img{
  width:85%;
}

.reffertable p{
  margin:0;
  padding:0;
}
.closeclass{
  background-color: #f1e0e0
}

</style>