<template>
  <div class="about">
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
      <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Phone</label>
          <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="name@example.com">
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Name</label>
          <input type="text" class="form-control" id="exampleFormControlInput3" placeholder="name@example.com">
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Example select</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Message</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button type="submit" class="btn">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.about {
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