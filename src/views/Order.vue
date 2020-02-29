<template>
  <div class="order">
    <h3>How to send us injectors?</h3>
    <div class="directions">
      <p>We will be closed Friday June 7th - June 17th. If you are able to wait until we come back you are welcome to send the injectors to us.</p>
    </div>
    <div class="order-form">
      Please fill out the<a :href='ordertUrl' target="_blank"> Order form</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Order",
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

</style>