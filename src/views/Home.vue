<template>
  <div class="home">
    <img alt="Vue logo" :src='basePath + "images/sd_5dd492b2da76d.jpg"'>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import api from '../api/index'

export default {
  name: 'Home',
  data() {
    return {
      basePath: process.env.VUE_APP_API
    }
  },
  components: {
    // HelloWorld
  },
  mounted() {
    api.testing().then( res => {
      console.log(res);
    })
  }
}
</script>
