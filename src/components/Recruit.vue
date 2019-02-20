<template>
<div class="recruit-container">
  <div class="recruit-carousel">
    <img src="@/assets/recruit.png">
  </div>
  <div class="recruit-content">
    <h4>And Now</h4>
    <h3>Depromeet 6th</h3>
    <p>
      현재 디프만에서는 <span>6기를 모집 중</span> 입니다.<br>
      모집 기간은 <span>2/15(금) ~ 2/22(금)</span> 까지 입니다.<br>
      모집 공고는 아래 버튼을 클릭해 주세요.<br>
      많은 지원 부탁드립니다.<br>
      지원시 궁금하신 사항은 카카오톡 플친 <span>디프만</span>으로 주시면,<br>
      빠른 답변을 받으실 수 있습니다.
    </p>
    <div class="recruit-buttons">
      <button class="recruit-button" @click="recruitDesigner()">디자이너 지원하기</button>
      <button class="recruit-button" @click="recruitDeveloper()">개발자 지원하기</button>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Recruit extends Vue {
  recruitDesigner(): void {
    window.open('https://goo.gl/forms/86ckS7myeiEDa9O42', '_blank');
  }

  recruitDeveloper(): void {
    window.open('https://goo.gl/forms/3vAWC7tRlws3zxT63', '_blank');
  }
}
</script>

<style lang="scss" scoped>
.recruit-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 63px;

  .recruit-carousel {
    margin-right: 50px;
  }

  .recruit-content {
    h4 {
      font-size: 16px;
      font-weight: 900;
      font-style: normal;
      font-stretch: normal;
      letter-spacing: normal;
      text-align: left;
      color: #222222;
    }
    h3 {
      font-size: 30px;
      font-weight: 900;
      font-style: normal;
      font-stretch: normal;
      letter-spacing: normal;
      text-align: left;
      color: #222222;
      margin-bottom: 10px;
    }
    p {
      font-size: 16px;
      font-weight: 300;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.63;
      letter-spacing: -0.5px;
      text-align: left;
      color: #222222;
      span {
        font-weight: bold;
      }
    }

    .recruit-buttons {
      display: flex;
      flex-direction: row;
      margin-top: 28px;
      button {
        width: 230px;
        height: 50px;
        font-size: 16px;
        font-weight: 300;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.63;
        letter-spacing: -0.5px;
        text-align: left;
        border: 1px solid #707070;
        color: #222222;
        background-color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;

        &:hover {
          color: #ffffff;
        background-color: #222222;
        }
      }
    }
  }
}
</style>
