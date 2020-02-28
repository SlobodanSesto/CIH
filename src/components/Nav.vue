<template>
  <nav class="navbar shadow">
    <div>
      <router-link to="/">
        <img class="cih-logo" src="https://clevelandinjectorhospital.simdif.com/images/public/sd_5dd492b2ccdbd.jpg?nocache=1576935971" alt="" >
      </router-link>
    </div>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
      <li><router-link to="/Gallery">Gallery</router-link></li>
      <li><a :href='ordertUrl'>Order</a></li>
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
}

.navbar ul{
  display: flex;
  padding: 20px 20px 0 0;
  align-items: center;
  justify-content: center;
  list-style-type: none;
}

.navbar a {
  margin: 15px;
  padding: 5px;
  text-decoration: none;
}

.navbar a:hover {
  color: rgb(169, 169, 169);
  border-bottom: 1px solid rgb(169, 169, 169);
}

.navbar a.router-link-exact-active {
  color: rgb(169, 169, 169);
}

</style>