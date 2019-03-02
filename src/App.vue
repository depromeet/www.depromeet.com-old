<template>
  <div id="app">
    <app-header />
    <router-view />
    <app-footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

@Component({
  components: {
    'app-header': Header,
    'app-footer': Footer,
  },
})
export default class App extends Vue {
}
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/earlyaccess/notosanskr.css);

#app {
  font-family: 'Noto Sans KR', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #212121;
  overflow: hidden;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

html, body {
  padding: 0;
  margin: 0;
}

body {
  color: #212121;
  padding-top: 70px;
}

.container  {
  margin: 0 auto;
}
@media screen and (max-width: 480px) {
  .container {
    width: 375px;
  }
}
@media screen and (min-width: 481px) and (max-width: 768px) {
  .contaienr {
    width: 760px;
  }
}
@media screen and (min-width: 960px) {
  .container {
    width: 960px;
  }
}

a, button {
  outline: 0;
  text-decoration: none;
  cursor: pointer;
}

button {
  border: 0;
}

h1, h2, h3, h4, h5, h6, p {
  margin: 0;
}

* {
  box-sizing: border-box;
}
</style>
