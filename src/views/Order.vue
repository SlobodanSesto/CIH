<template>
  <div class="order">
    <h3 class="order-h">How to send us injectors?</h3>
    <div class="note">
      <p>We will be closed Friday June 7th - June 17th. If you are able to wait until we come back you are welcome to send the injectors to us.</p>
    </div>
    <div class="order-form">
      Please submit the&nbsp; 
      <span class="form-btn">
        <a :href='ordertUrl' target="_blank"><i class="material-icons">assignment</i>Order form</a>
      </span>
    </div>
    <div class="payment-links">
      Then choose an option below to pay for the injectors. 
      <div class="options">
        <div class="top-feed">
          <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=9HP3JGCR3EHY2" target="_blank">
            <div class="btn btn-secondary">Top Feed</div>
          </a>
        </div>
        <div class="side-feed">
          <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=FZSAB7NZY9VSL" target="_blank">
            <div class="btn btn-secondary">Side Feed</div>
          </a>
        </div>
        <div class="direct">
          <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=37WWYXWYPZ74E" target="_blank">
            <div class="btn btn-secondary">Direct Injection</div>
          </a>
        </div>
      </div>
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
  margin-bottom: 20px;
}
.order-form {
  margin-bottom: 40px;
}
.form-btn {
  border-radius: 3px;
  padding: 6px;
  min-height: 24px;
  background-image: linear-gradient(124deg, rgba(245, 127, 0, 0.972), rgba(255, 247, 3, 0.966));
}
.form-btn:hover {
  background-image: linear-gradient(124deg, rgba(245, 127, 0, 0.905), rgba(255, 247, 3, 0.837));
}
.form-btn a {
  text-decoration-line: none;
  color: rgb(41, 41, 41);
}
.form-btn a i {
  position: relative;
  top: 6px;
}
.payment-links {
  margin-bottom: 40px;
}
.options {
  display: flex;
}
.options div {
  margin: 10px 10px 0 0;
}
.ship {
  margin-bottom: 20px;
}
</style>