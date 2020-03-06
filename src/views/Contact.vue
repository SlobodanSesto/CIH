<template>
  <div class="contact">
    <div class="left-side">
      <i class="material-icons">question_answer</i> FAQ
      <ul>
        <li>Question 2 : <br/> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, possimus.</p></li>
        <li>Question 1 : <br/> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, possimus.</p></li>
        <li>Question 3 : <br/> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, possimus.</p></li>
        <li>Question 4 : <br/> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, possimus.</p></li>
      </ul>
    </div>
    <div class="right-side">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" v-model="cName">
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" class="form-control" id="email" placeholder="name@example.com" v-model="cEmail">
      </div>
      <input type="hidden" name="_honeypot" @change="honeypot" v-model="cHoneypot">
      <div class="form-group">
        <label for="phone">Phone</label>
        <input type="text" class="form-control" id="phone" placeholder="555-555-5555" v-model="cPhone">
      </div>
      <div class="form-group">
        <label for="msg">Message</label>
        <textarea class="form-control" id="msg" rows="3" v-model="cMsg"></textarea>
      </div>
      <button @click="submitForm" class="btn btn-secondary">Submit</button>
    </div>
  </div>


      <!-- <div class="form-group">
        <label for="exampleFormControlSelect1">Example select</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div> -->
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      cHoneypot: '',
      cEmail: '',
      cPhone: '',
      cName: '',
      cMsg: '',
    }
  },
  methods: {
    honeypot() {
      console.log('honeypot val changed')
    },
    submitForm() {
      let msg = this.validateInput();
      if(msg) {
        console.log(msg)
      }
      // console.log(this.cName)
      // console.log(this.cHoneypot)
      // console.log(this.cPhone)
      // console.log(this.cEmail)
      // console.log(this.cMsg)
      // console.log('form submit!')
    },
    validateInput() {
      if(this.cName === '' || this.cPhone === '' || this.cEmail === '' || this.cMsg === '') {
        return "Please complete all fields"
      }
      var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
      if(!email_regex.test(this.cEmail)){
        console.log("invalid email")
        return 'Invalid e-mail'
      }
    }
  }
}
</script>

<style scoped>
.contact {
  padding: 5%;
  display: flex;
  flex-direction: row;
}

.left-side, .right-side {
  width: 100%;
}

.left-side ul li p{
  margin-bottom: 15px;
  padding-left: 15px;
}

form button {
  background-color: rgb(48, 204, 181)
}


</style>