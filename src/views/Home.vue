<template>
  <div class="home">
    <div class="home-carousel-container">
      <div class="container">
        <h1>
          디자이너와<br>
          프로그래머가<br>
          만났을 때
        </h1>
        <h6>
          Designer & Programmer Networking Union Circle
        </h6>
        <router-link
          class="apply"
          to="#vision"
          @click.native="scrollFix('#recruit')"
        >
          6기 지원하기
          <arrow />
        </router-link>
      </div>
    </div>
    <div class="container">
      <div
        class="vision"
        id="vision"
        :class="{ mobile: getDeviceType === 'mobile', tablet: getDeviceType === 'tablet' }"
      >
        <h2 class="vision-title">Depromeet<br v-if="getDeviceType !== 'desktop'"> Vision</h2>
        <p class="vision-description">
          디프만은 2-30대<br v-if="getDeviceType === 'mobile'"> 디자이너, 프로그래머의 네트워크로서<br>
          <span>디자이너와 프로그래머 간의<br v-if="getDeviceType === 'mobile'"> 생산적인 모임을 지향</span>합니다.
        </p>

        <div class="vision-items">
          <div class="vision-item">
            <div class="vision-item-title">
              <h3>Co-Working</h3>
              <h2>01</h2>
            </div>
            <div class="vision-item-content">
              디자이너와 개발자로 팀빌딩하여
              미니프로젝트, 파이널프로젝트를
              진행합니다. 평소에 하고 싶었는데
              어려웠던 사이드 프로젝트나, 정말
              재밌게 협업을 하면서 얻을 수 있는
              프로젝트를 경험할 수 있습니다.
            </div>
          </div>
          <div class="vision-item">
            <div class="vision-item-title">
              <h3>Networking</h3>
              <h2>02</h2>
            </div>
            <div class="vision-item-content">
              디프만은 디자이너와 개발자 간의 네트워킹을 추구하는 모임입니다.
              디프만에서 준비한 다양한 네트워킹 프로그램에 참여해보세요.
              활발히 활동하는 다양한 분야의 종사자들을 만나 인맥의 폭을 넓힐 수 있습니다.
            </div>
          </div>
          <div class="vision-item">
            <div class="vision-item-title">
              <h3>Learning</h3>
              <h2>03</h2>
            </div>
            <div class="vision-item-content">
              평소에 하고 싶은 스터디가 있었
              지만, 끌어주거나 궁금할 때 물을 수
              있거나, 피드백을 받지 못해 아쉬움이
              많지는 않았나요? 이제 같은 고민을
              하는 디자이너, 개발자들과 해결해
              보세요! 훨씬 재밌을 거에요.
            </div>
          </div>
        </div>
      </div>

      <recruit id="recruit" />
    </div>

    <manager id="manager" />

    <contact id="contact" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Recruit from '@/components/Recruit.vue';
import Manager from '@/components/Manager.vue';
import Contact from '@/components/Contact.vue';
import Arrow from '@/assets/arrow.svg';

@Component({
  components: {
    Arrow,
    Recruit,
    Manager,
    Contact,
  },
})
export default class Home extends Vue {
  width: number = document.documentElement.clientWidth;

  onResize() {
    // Typescript에서 데이터 초기화 후 변경이 안됨...
    // 왜 그러는걸까나
    this.width = document.documentElement.clientWidth;
  }

  created() {
    window.addEventListener('resize', this.onResize);
  }

  destroyed() {
    window.removeEventListener('resize', this.onResize);
  }

  get getDeviceType() {
    let device = 'desktop';

    if (this.width <= 468) {
      device = 'mobile';
    } else if (this.width <= 768) {
      device = 'tablet';
    }

    return device;
  }

  scrollFix = (hashbang: string) => {
    window.location.href = hashbang;
  }
}
</script>

<style lang="scss" scoped>
.home {
  @media screen and (max-width: 480px) {
    .home-carousel-container {
      padding-left: 30px;
    }
  }
  .home-carousel-container {
    background-color: #222222;

    .container {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    h1 {
      color: #fff;
      font-size: 60px;
      font-weight: 100;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.17;
      letter-spacing: -1.8px;
      text-align: left;
    }

    h6 {
      font-size: 13px;
      font-weight: bold;
      font-style: normal;
      font-stretch: normal;
      line-height: 2.17;
      letter-spacing: normal;
      text-align: left;
      color: #ffffff;
      margin-bottom: 40px;
    }

    @media screen and (max-width: 480px) {
      h1 {
        font-size: 40px;
        margin-bottom: 10px;
      }

      h6 {
        font-size: 10px;
      }
    }

    .apply {
      display: none;
      width: 230px;
      height: 50px;
      background-color: #ffffff;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
      letter-spacing: -0.4px;
      text-align: left;
      color: #222222;

      svg {
        margin-left: 7px;
      }
    }
  }

  .vision {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 107px;

    .vision-title {
      font-size: 30px;
      font-weight: 900;
      font-style: normal;
      font-stretch: normal;
      letter-spacing: normal;
      text-align: center;
      color: #222222;
      margin-top: 45px;
      margin-bottom: 16px;
    }

    .vision-description {
      font-size: 16px;
      font-weight: 100;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.63;
      letter-spacing: -0.5px;
      text-align: center;
      color: #222222;
      margin-bottom: 55px;

      span {
        font-weight: 500;
        text-decoration: underline;
      }
    }

    .vision-items {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;

      .vision-item {
        width: 215px;

        .vision-item-title {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-end;

          h3 {
            font-size: 22px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            letter-spacing: normal;
            text-align: left;
            color: #222222;
            line-height: 2;
          }

          h2 {
            opacity: 0.06;
            font-family: Helvetica;
            font-size: 60px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            letter-spacing: normal;
            text-align: left;
            color: #222222;
          }
        }
        .vision-item-content {
          font-size: 16px;
          font-weight: 300;
          font-style: normal;
          font-stretch: normal;
          line-height: 1.63;
          letter-spacing: -0.5px;
          text-align: left;
          color: #222222;
        }
      }
    }

    &.mobile {
      padding: 0 30px;

      .vision-title, .vision-description {
        text-align: left;
      }

      .vision-items {
        display: flex;
        flex-direction: column;

        .vision-item {
          &:not(:last-child) {
            margin-bottom: 40px;
          }
          &:nth-child(2) {
            position: relative;
            width: 100%;
            box-sizing: border-box;
            margin-bottom: 280px;

            .vision-item-title, .vision-item-content {
              position: absolute;
              text-align: right;
              right: 0;
            }

            .vision-item-title {
              top: 0;

              h2 {
                margin-left: 20px;
              }
            }

            .vision-item-content {
              top: 70px;
              width: 230px;
            }
          }
        }
      }
    }

    &.tablet {
      .vision-items {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .vision-item {
          width: 280px;
          &:not(:last-child) {
            margin-bottom: 60px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .home-carousel-container {
    height: 400px;
  }
}

@media screen and (min-width: 481px) and (max-width: 768px) {
  .home-carousel-container {
    height: 460px;

    .container {
      padding: 0 30px;

      h1, h6 {
        text-align: center;
      }
    }
  }
}

@media screen and (min-width: 769px) and (max-width: 960px) {
  .home-carousel-container {
    height: 500px;
    .container {
      padding: 0 40px;
    }
  }

  .vision {
    padding: 0 30px;
  }
}

@media screen and (min-width: 961px) {
  .home-carousel-container {
    height: 500px;
    .container {
      padding: 0;
    }
  }
}
</style>
