<template>
<div class="manager-container">
  <div class="container">
    <h2 class="title">6th Manager</h2>
    <div class="managers">
      <div class="manager">
        <div class="profile">
        </div>
        <h3>Hyunsik Yoo</h3>
        <h5>Android Developer</h5>
      </div>
      <div class="manager">
        <div class="profile">
        </div>
        <h3>Jaewon Kwon</h3>
        <h5>Python Developer</h5>
      </div>
      <div class="manager">
        <div class="profile">
        </div>
        <h3>Suzie Park</h3>
        <h5>UI/Web Designer</h5>
      </div>
      <div class="manager">
        <div class="profile">
        </div>
        <h3>Hanna Kim</h3>
        <h5>UI Designer</h5>
      </div>
      <div class="manager">
        <div class="profile">
        </div>
        <h3>YunJi Lee</h3>
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
        font-size: 25px;
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
</style>
