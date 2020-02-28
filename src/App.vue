<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <Nav class="myNav"></Nav>
    <router-view class="main-view"></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from './components/Nav'
import Footer from './components/Footer'

export default {
  components: {
    Nav,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
  /* background-image: url('https://images.unsplash.com/photo-1563207769-3343cb585fcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80'); */
  background-image: linear-gradient(to bottom, rgba(34, 34, 34, 0.952), rgba(25, 1, 1, 0.884)), url('/cih/images/bg.jpg');
  background-position: center; /* Center the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #f3f3f3;
  min-width: 100vw;
  min-height: 100vh;
}

.myNav {
  background: white;
}

.main-view {
  padding-top: 20px;
  /* background: rgba(34, 34, 34, 0.938); */
  min-width: 100vw;
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
