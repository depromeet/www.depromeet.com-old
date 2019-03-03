<template>
<footer>
  <div class="container">
    <h3 class="copyright">ⓒ 2019 Depromeet.</h3>
    <h3 class="creator">Design : Suzie Park / Publishing : Jaewon kwon</h3>
  </div>
</footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {}
</script>

<style lang="scss" scoped>
footer {
  padding-top: 26px;
  padding-bottom: 32px;

  .copyright {
    font-size: 16px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: -0.5px;
    text-align: center;
    color: #222222;
    margin-bottom: 10px;
  }

  .creator {
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: -0.4px;
    text-align: center;
    color: #222222;
  }
}

@media screen and (max-width: 480px) {
  .container {
    width: 100%;
  }
}

@media screen and (min-width: 481px) and (max-width: 960px) {

}

@media screen and (min-width: 961px) {
}
</style>
