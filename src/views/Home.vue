<template>
  <div class="home">
    <h1 class="main-header">CLEVELAND INJECTOR HOSPITAL</h1>
    <div>
      <div>
        <h2 class="sub-header">Testing and service for fuel injectors.</h2>
      </div>
      <div class="container py-5">
        <div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio molestiae, distinctio ullam rem delectus impedit facilis molestias soluta
             quam cupiditate in suscipit qui iste alias nihil nostrum. Blanditiis, qui vero.
              <br/>For more information call us at <span class="phone">216.219.2263</span></p>
          <!-- Welcome to Cleveland Injector Hospital!&nbsp; If you are in need of getting your injectors tested to make 
          sure they are working they way they are made you are at rhe right place.&nbsp; We provide service for cars, trucks, boats, 
          motorcycles, jet skis and just about anything that is fuel injected. For more information about us you can call us at 216-219-2263 or email us at 
          <a href="mailto:info@clevelandinjectorhospital.com">info@clevelandinjectorhospital.com</a>  -->
        </div>
        <!-- <div>you can also find us on Facebook at
        </div>
        <div>
          <a href="http://www.facebook.com/clevelandinjectorhospital">www.facebook.com/clevelandinjectorhospital</a>
        </div>
        <div>or instagram under 
          <a href="https://instagram.com/cleveland_injector_hospital/">Cleveland_Injector_Hospital</a>
        </div> -->
      </div>
    </div>
    
    <!-- <img alt="Vue logo" :src='basePath + "images/sd_5dd492b2da76d.jpg"'> -->
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

<style scoped>
.home {
  padding: 5% 0 0 5%;
  line-height: 2rem;
}
.main-header {
  font-size: 40pt;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 20px;
}
.sub-header {
  font-size: 18pt;
  font-weight: 400;
  margin-bottom: 30px;
}
.phone {
  font-size: 2em;
  line-height: 2em;
  letter-spacing: 2px;
}
</style>
