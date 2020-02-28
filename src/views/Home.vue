<template>
  <div class="home">
    <h1>Welcome to Cleveland Injector Hospital</h1>
    <div>
      <div>
        <h2></h2>
      </div>
      <div>
        <div>Welcome to Cleveland Injector Hospital!&nbsp; If you are in need of getting your injectors tested to make 
          sure they are working they way they are made you are at rhe right place.&nbsp; We provide service for cars, trucks, boats, 
          motorcycles, jet skis and just about anything that is fuel injected. For more information about us you can call us at 216-219-2263 or email us at 
          <a href="mailto:info@clevelandinjectorhospital.com">info@clevelandinjectorhospital.com</a> 
        </div>
        <div>you can also find us on Facebook at
        </div>
        <div>
          <a href="http://www.facebook.com/clevelandinjectorhospital">www.facebook.com/clevelandinjectorhospital</a>
        </div>
        <div>or instagram under 
          <a href="https://instagram.com/cleveland_injector_hospital/">Cleveland_Injector_Hospital</a>
        </div>
      </div>
    </div>
    
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
