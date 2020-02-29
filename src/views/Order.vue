<template>
  <div class="order">
    <h3 class="order-h">How to send us injectors?</h3>
    <div class="note">
      <p>We will be closed Friday June 7th - June 17th. If you are able to wait until we come back you are welcome to send the injectors to us.</p>
    </div>
    <div class="order-form">
      Please fill out the<a :href='ordertUrl' target="_blank"> Order form</a>
    </div>
    <div class="payment-links">
      
    </div>
    <div class="ship">
      Once that is completed send the injectors to the following address: <br/><br/>
      ATTN: Cleveland Injector Hospital<br/>
      14626 N. Gallatin Blvd<br/>
      Brook Park, OH 44142<br/>
      216-219-2263<br/>
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
.order {
  padding: 5%;
}
.order-h {
  font-size: 3em;
  margin-bottom: 20px;
}
.note {

}
</style>