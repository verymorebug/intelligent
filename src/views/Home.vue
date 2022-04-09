<template>
  <div class = "root">
    <div class="top" v-if = "!showImg">
      <div class="title">
        <span>图像识别</span>
      </div>
      <div class="description">
        <span>美女|狼|狗|猪|兔|虎|猫</span>
      </div>
      <div class="author">
        <span>靓仔:彭静扬</span>
      </div>
    </div>

<!--    <input-button></input-button>-->

  </div>
</template>

<script>
import InputButton from "@/components/InputButton";
export default {
  name: "home",
  components:{ InputButton },
  data(){

    return{
      showImg:false
    }
  }

}
</script>

<style scoped>
.root{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #93e0f5;
}
.top{
  position: absolute;
  width: 100%;
  top: 10%;
}

.title{
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
}

.title span{
  color: white;
  font-size: 30px;
  background-color: #3a85f5;
  /* border-radius: 25px; */
  padding: 10px 20%;
}
.description,.author{
  width: 100%;
  line-height: 60px;
  text-align: center;
}
.description span{
  color: #3a85f5;
}
.author span{
  color: rgb(0,0,0);
  opacity: 0.3;
}


</style>