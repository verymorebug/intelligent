<template>
  <div class = "app">

    <input-button></input-button>
    <router-view></router-view>

  </div>
</template>
<script>

import InputButton from "@/components/InputButton";
export default {
  name:'App',
  components: {InputButton},
}

</script>
<style>
  .app{
    width: 100%;
    height: 100%;
  }
</style>
