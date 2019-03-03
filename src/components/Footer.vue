<template>
<footer>
  <div class="container">
    <div class="top" @click="moveTop">
      <arrow-top />
    </div>
    <h3 class="copyright">ⓒ 2019 Depromeet.</h3>
    <h3 class="creator">Design : Suzie Park / Publishing : Jaewon kwon</h3>
  </div>
</footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ArrowTop from '@/assets/arrow-top.svg';

@Component({
  components: {
    ArrowTop,
  },
})
export default class Footer extends Vue {
  moveTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
</script>

<style lang="scss" scoped>
footer {
  padding-top: 26px;
  padding-bottom: 32px;
  position: relative;

  .top {
    position: absolute;
    top: -35px;
    right: 10px;
    width: 70px;
    height: 70px;
    border: 3px solid #222222;
    justify-content: center;
    align-items: center;
    background: #fff;
    z-index: 1;
    cursor: pointer;
  }

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

  .top {
    display: flex;
  }
}

@media screen and (min-width: 481px) and (max-width: 960px) {
  .top {
    display: none;
  }
}

@media screen and (min-width: 961px) {
  .top {
    display: none;
  }
}
</style>
