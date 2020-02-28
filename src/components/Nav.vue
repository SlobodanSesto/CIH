<template>
  <nav class="navbar shadow">
    <div class="logo-wrapper">
      <router-link to="/">
        <img class="cih-logo" src="https://clevelandinjectorhospital.simdif.com/images/public/sd_5dd492b2ccdbd.jpg?nocache=1576935971" alt="" >
      </router-link>
    </div>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
      <li><router-link to="/Gallery">Gallery</router-link></li>
      <li><a :href='ordertUrl' target="_blank">Order</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      ordertUrl: process.env.VUE_APP_FORMURL,
    }
  },
  mounted() {
    console.log(this.ordertUrl);
  }
}
</script>

<style scoped>

.navbar{
  display: flex;
  align-items: center;
}

.cih-logo{
  width: 100px;
  position: relative;
}

.navbar ul{
  display: flex;
  padding: 20px 20px 0 0;
  align-items: center;
  justify-content: center;
  list-style-type: none;
}

.navbar a {
  font-weight: 400;
  font-size: 1.3em;
  margin: 15px;
  padding: 5px;
  color: rgb(25, 25, 25);
  text-decoration: none;
}

.navbar a:hover {
  color: rgb(169, 169, 169);
  border-bottom: 1px solid rgb(169, 169, 169);
}

.navbar a.router-link-exact-active {
  color: rgb(164, 145, 145);
}

.logo-wrapper a:hover{
  border: none;
}
</style>