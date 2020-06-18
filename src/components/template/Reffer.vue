<template>
  <div class="refferbox">
    <div class="reffertable_box">
	  <table class="reffertable">
      <tr>
        <td><img class="refferpic" :src="shuzitanxian" @click="alertbtn(1)"/></td> 
        <td><img class="refferpic" :src="huanlesaizi" @click="alertbtn(2)"/></td>
        <td><img class="refferpic" :src="qukuainongchang" @click="alertbtn(3)"/></td>
        <td><img class="refferpic" :src="kuanggongdaheng" @click="alertbtn(4)"/></td>
      </tr>
      <tr>
        <td @click="alertbtn(1)">{{$t("message.shuzitanxian")}}</td> 
        <td @click="alertbtn(1)">{{$t("message.huanleshaizi")}}</td> 
        <td @click="alertbtn(1)">{{$t("message.qukuainongchang")}}</td> 
        <td @click="alertbtn(1)">{{$t("message.kuanggongdaheng")}}</td> 
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
      shuzitanxian:'static/img/1.png',
      huanlesaizi:'static/img/2.png',
      qukuainongchang:'static/img/3.png',
      kuanggongdaheng:'static/img/4.png',
      isshowtoast:false
    }
  },
  mounted() {

  },
  methods: {
    alertbtn:function(index){
      let data = {};
      if(index==1){
        data = {"name":"数字探险","link":Links.url.shuzitanxian,"state":1}
      }else if(index==2){
        data = {"name":"欢乐骰子","link":Links.url.shuzitanxian,"state":1}
      }else if(index==3){
        data = {"name":"区块农场","link":Links.url.shuzitanxian,"state":1}
      }else{
        data = {"name":"矿工大亨","link":Links.url.shuzitanxian,"state":1}
      }
      trans.$emit("tipsemit",data);

      // let dname = window.localStorage.getItem("Phoenix2.0");
      // if(dname){
      //   window.open(Links.url.phoenix_sec,'_self')
      // }else{
      //   trans.$emit("tipsemit",{"name":"Phoenix2.0","link":Links.url.phoenix_sec,"state":0});
      // }
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