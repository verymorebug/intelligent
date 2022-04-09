<template>
  <div class = "result">

    <div class = "bar">
      <span @click = "back"></span>
    </div>

    <div class = "show-img" :style="imgStyle"></div>

    <div class = "show-result">
      <div class = "result-item" style="color:#3a85f5">
        <span>名 称</span>
        <span>置信度</span>
      </div>

      <div class = "result-item" v-for = "item in getResultList">
        <span>{{item.name}}</span>
        <span>{{formatNum(item.score)}}</span>
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
export default {
  name: "Result",

  computed:{
    ...mapGetters(['getResultList','getImage']),

    imgStyle(){   //图片展示的样式
      return{
        backgroundImage:`url(${this.getImage})`,
      }
    }
  },

  methods:{

    //将原来的小数变为百分数形式字符串
    formatNum(num){

      //使之变成百分数 不四舍五入
      let temp = Math.floor(num*10000)/100
      return temp.toFixed(2)+'%';
    },

    back(){
      this.$router.back();
    }

  }
}
</script>

<style scoped>
  .result{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

  }
  .bar{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    z-index: 10;
    background: rgba(100,100,100,0.1);
    display: flex;
  }
  .bar span{
    width: 50px;
    height: 50px;
    /*background-color: #3a85f5;*/
    background: url("~@/assets/left.svg") no-repeat center;

  }
  .show-img{

    width: 100%;
    /*height: 100%;*/
    padding-top: 100%;
    background-size: cover;
    /*background:  no-repeat center;*/
  }
  .show-result{

    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 300px;
    overflow: scroll;
  }
  .result-item{

    height: 40px;
    margin: 10px;
    border: 1px solid rgba(100,100,100,0.1);
    display: flex;
    justify-content: space-around;
    align-items: center;

  }

</style>