<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <Nav class="myNav"></Nav>
    <router-view class="main-container"></router-view>
  </div>
</template>

<script>
import Nav from './components/Nav'

export default {
  components: {
    Nav
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-image: url('https://images.unsplash.com/photo-1563207769-3343cb585fcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80');
  background-position: center; /* Center the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 100vw;
  min-height: 100vh;
}

.myNav {
  background: white;
}

.main-container {
  padding-top: 20px;
  background: rgba(255, 255, 255, 0.81);
  min-width: 100vw;
  min-height: 100vh;
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
