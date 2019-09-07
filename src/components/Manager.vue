<template>
<div class="manager-container">
  <div class="container">
    <h2 class="title">7th Manager</h2>
    <p>7기를 기획한 운영진을 소개합니다.</p>
    <div class="managers">
      <div class="manager">
        <div class="profile">
          <!--<img src="@/assets/현식.jpeg" alt="해성">-->
        </div>
        <h3>Haeseong Jeon</h3>
        <h5>Backend Developer</h5>
      </div>
      <div class="manager">
        <div class="profile">
          <!--<img src="@/assets/재원.jpeg" alt="진용">-->
        </div>
        <h3>Jinyoung Jeong</h3>
        <h5>Android Developer</h5>
      </div>
      <div class="manager">
        <div class="profile">
          <!--<img src="@/assets/재원.jpeg" alt="승화">-->
        </div>
        <h3>Seunghwa Baek</h3>
        <h5>UI/UX Designer</h5>
      </div>
      <div class="manager">
        <div class="profile">
          <!--<img src="@/assets/수지.jpeg" alt="규석">-->
        </div>
        <h3>Kyuseok Ma</h3>
        <h5>Backend Developer</h5>
      </div>
      <div class="manager">
        <div class="profile">
          <!--<img src="@/assets/한나.jpeg" alt="지원">-->
        </div>
        <h3>Jiwon Lee</h3>
        <h5>Frontend Developer</h5>
      </div>
      <div class="manager">
        <div class="profile">
          <!--<img src="@/assets/윤지.jpeg" alt="경래">-->
        </div>
        <h3>Kyeongrae Noh</h3>
        <h5>UI/UX Designer</h5>
      </div>
      <div class="manager">
        <div class="profile">
          <!--<img src="@/assets/윤지.jpeg" alt="은지">-->
        </div>
        <h3>Eunji Park</h3>
        <h5>UI/UX Designer</h5>
      </div>
      <div class="manager">
        <div class="profile">
          <!--<img src="@/assets/재원.jpeg" alt="종효">-->
        </div>
        <h3>Jonghyo Lee</h3>
        <h5>Android Developer</h5>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Manager extends Vue {}
</script>

<style lang="scss" scoped>
.manager-container {
  height: 500px;
  background-color: #f0f0f0;

  p {
    font-size: 16px;
    font-weight: 100;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.63;
    letter-spacing: -0.5px;
    text-align: center;
    color: #222222;
  }

  .container {
    height: 100%;
    padding-top: 60px;
    padding-bottom: 83px;
  }

  .title {
    font-size: 30px;
    font-weight: 900;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: -0.9px;
    text-align: center;
    color: #222222;
  }

  .managers {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 38px;
    overflow: hidden;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }

    .manager {
      &:not(:last-child) {
        margin-right: 20px;
      }

      .profile {
        width: 200px;
        height: 200px;
        background-color: #ffffff;
        border: 2px solid #eaeaea;

        img {
          width: 100%;
          height: 100%;
          border: 0;
        }
      }

      h3 {
        font-size: 22px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        letter-spacing: normal;
        text-align: left;
        color: #222222;
        margin-top: 12px;
        margin-left: 5px;
      }

      h5 {
        font-size: 14px;
        font-weight: 300;
        font-style: normal;
        font-stretch: normal;
        letter-spacing: normal;
        text-align: left;
        color: #222222;
        margin-top: 6px;
        margin-left: 5px;
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .managers {
    padding: 0 30px;
  }
}

@media screen and (min-width: 481px) and (max-width: 960px) {
  .managers {
    padding: 0 30px;
  }
}

@media screen and (min-width: 961px) {
}
</style>
