<template>
  <div id="app" class="container">
    <Head/>

    <router-view/>

  </div>
</template>

<script>

import Head from './components/Head'

export default {
  name: 'app',
  components: {
    Head
  }
}
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
#app {
    min-height: 100px;
  text-align: center;
  color: #2c3e50;
  padding:0 0.5rem;
}
body::before {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image:url("images/spaceback.jpg");
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    opacity: .2;
    content: "";
    z-index: -1;
}

.box:last-child {
    margin-bottom: 0.5rem;
}
.box:not(:last-child) {
    margin-bottom: 0.5rem;
}

a { color: #42b983; }
.clickable { cursor: pointer;}




</style>
