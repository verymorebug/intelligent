<template>
  <div class="bottom">
    <div class="btn">
      <span>上传相片</span>
      <input type="file" accept="image/*" class="input-file" @change = "upLoadImage" ref = "inputFile">
    </div>
  </div>
</template>

<script>
import { getResult } from "@/network/inputButton.js"
export default {
  name: "InputButton",
  data(){
    return{
      image:''
    }

  },

  methods:{
     async upLoadImage(){

      const input = this.$refs.inputFile;
      const files = input.files;
      console.log(files);
      await this.imageToBase64(files[0]);   //图像转换base64

    },

     async imageToBase64(file){

       let list = {};
       const reader = new FileReader();
       reader.readAsDataURL(file);
       reader.onload = async () =>{
        const base64 = reader.result;   //图片转换成了base64
        this.image = base64.substring(base64.indexOf(',')+1);

        await getResult('24.48fdb9d24e1c11891404c62763a6bede.2592000.1652019790.282335-25831275',this.image).then(res=>{

          // this.$store.commit("setImage",this.image);
          // this.$store.com
          list = res.data.results;
        })
        //将数据保存到Vuex中
        this.$store.commit("setImage",base64);
        this.$store.commit("setResultList",list);

         //跳转到新页面

         if(this.$route.path !=='/result')
          await this.$router.push('/result');
      }
    }
  }
}
</script>

<style scoped>
  .bottom{
    position: fixed;
    width: 100%;
    bottom: 10%;
    z-index: 10;
  }

  .btn{
    position: relative;
    height: 60px;
    width: 100%;
    line-height: 60px;
    text-align: center;
  }

  .btn span{
    color: white;
    font-size: 15px;
    background-color: #3a85f5;
    border-radius: 25px;
    padding: 10px 15%;
  }

  .input-file{
    position: absolute;
    opacity: 0;
    top:0;
    left: 0;
    height: 100%;
    width: 100%;
  }
</style>