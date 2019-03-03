<template>
<div class="app-header">
  <div class="container">
    <div class="logo menu left-side">
      <router-link to="/">
        <logo />
      </router-link>
    </div>
    <div class="menu right-side">
      <router-link
        to="#vision" @click.native="scrollFix('#vision')"
        class="menu-item"
      >
        ABOUT
      </router-link>
      <router-link
        to="#manager" @click.native="scrollFix('#manager')"
        class="menu-item"
      >
        STAFF
      </router-link>
      <router-link
        to="#contact" @click.native="scrollFix('#contact')"
        class="menu-item"
      >
        CONTACT
      </router-link>
    </div>
    <div
      class="nav-icon"
      :class="{ 'open': navigationStatus }"
      @click="toggleNavigation"
    >
      <span></span>
      <span></span>
    </div>
  </div>

  <div
    class="nav-container"
    :class="{ 'open': navigationStatus }"
    @focusout="handleFocusOut"
    tabindex="0"
  >
    <ul>
      <li>
        <router-link
          to="#manager" @click.native="scrollFix('#vision')"
          class="menu-item"
        >
          ABOUT
        </router-link>
      </li>
      <li>
        <router-link
          to="#manager" @click.native="scrollFix('#manager')"
          class="menu-item"
        >
          STAFF
        </router-link>
      </li>
      <li>
        <router-link
          to="#manager" @click.native="scrollFix('#contact')"
          class="menu-item"
        >
          CONTACT
        </router-link>
      </li>
    </ul>
  </div>

  <div
    class="outside"
    :class="{ active: navigationStatus }"
    @click="toggleNavigation"></div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Logo from '@/assets/logo.svg';

@Component({
  components: {
    Logo,
  },
})
export default class Header extends Vue {
  navigationStatus: boolean = false;

  scrollFix(hashbang: string) {
    this.navigationStatus = !this.navigationStatus;
    const elementId: string = hashbang.split('#')[1];
    const element: any = document.getElementById(elementId);

    window.scrollTo({
      top: element.offsetTop - 70,
      behavior: 'smooth',
    });
  }

  toggleNavigation() {
    this.navigationStatus = !this.navigationStatus;
  }

  handleFocusOut() {
    this.navigationStatus = false;
  }
}
</script>

<style lang="scss" scoped>
.app-header {
  z-index: 10;
  width: 100%;
  height: 70px;
  background-color: #fff;
  position: fixed;
  margin-top: -70px;

  .container {
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  .logo {
    svg {
      width: 187px;
    }
  }

  .menu {
    .menu-item {
      box-sizing: border-box;
      font-size: 14px;
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.57;
      letter-spacing: -0.4px;
      text-align: center;
      color: #222222;
      margin-left: 21px;
      padding: 0 9px;

      &.active, &:hover {
        font-weight: 900;
        border-bottom: 4px solid #1717df;
      }
    }
  }
}

.nav-icon {
  position: relative;
  cursor: pointer;
  width: 55px;
  height: 60px;
  padding: 15px;

  span {
    position: absolute;
    width: 25px;
    height: 3px;
    background-color: #222222;
    opacity: 1;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;

    &:nth-child(1) {
      top: 22px;
      left: 15px;
      -webkit-transform-origin: left center;
      -moz-transform-origin: left center;
      -o-transform-origin: left center;
      transform-origin: left center;
    }

    &:nth-child(2) {
      top: 33px;
      left: 15px;
      -webkit-transform-origin: left center;
      -moz-transform-origin: left center;
      -o-transform-origin: left center;
      transform-origin: left center;
    }
  }

  &.open {
    span:nth-child(1) {
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      transform: rotate(45deg);
      top: 20px;
    }
    span:nth-child(2) {
      -webkit-transform: rotate(-45deg);
      -moz-transform: rotate(-45deg);
      -o-transform: rotate(-45deg);
      transform: rotate(-45deg);
      top: 37px;
    }
  }
}

.nav-container {
  display: none;
  position: absolute;
  z-index: 10;
  background: #fff;
  width: 100%;

  -webkit-animation: fadeInFromNone 0.25s ease-out;
  -moz-animation: fadeInFromNone 0.25s ease-out;
  -o-animation: fadeInFromNone 0.25s ease-out;
  animation: fadeInFromNone 0.25s ease-out;

  &.open {
    display: flex;
    opacity: 1;
    transform: scaleY(1);
  }

  ul {
    width: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
    border: 0;

    li {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 10px;
      font-size: 14px;

      a {
        color: #222;
      }

      &:hover, &.active {
        a {
          border-bottom: 2px solid #1717df;
          padding-bottom: 5px;
        }
      }
    }
  }
}

.outside {
  background: transparent;
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100vh;
  display: none;

  &.active {
    display: block;
  }
}

@media screen and (max-width: 480px) {
  .app-header {
    width: 100%;
    position: fixed;

    .container {
      padding: 15px 20px 15px 30px;
      width: 100%;
      margin: 0;
    }

    .logo {
      margin-top: 5px;

      svg {
        width: 150px;
      }
    }

    .right-side {
      display: none;
    }

    .nav-icon {
      display: flex;
    }
  }
}

@media screen and (min-width: 481px) and (max-width: 768px) {
  .app-header {
    width: 100%;
    /* position: relative; */
    position: fixed;

    .logo {
      margin-top: 5px;
      position: absolute;
      left: 50%;
      svg {
        position: relative;
        left: -50%;
      }
    }

    .right-side {
      display: none;
    }

    .nav-icon {
      position: absolute;
      right: 0;
    }
  }
}

@media screen and (min-width: 769px) and (max-width: 960px) {
  .app-header {
    width: 100%;
    position: fixed;

    .logo {
      margin-top: 5px;
      margin-left: 15px;
    }

    .right-side {
      margin-right: 15px;
    }

    .nav-icon {
      display: none;
    }
  }
}

@media screen and (min-width: 961px) {
  .app-header {
    width: 100%;
    position: fixed;

    .logo {
      margin-top: 5px;
      margin-left: 0;
    }

    .nav-icon {
      display: none;
    }
  }
}

@-webkit-keyframes fadeInFromNone {
  0% {
    display: none;
    opacity: 0;
  }

  1% {
    display: block;
    opacity: 0;
  }

  100% {
    display: block;
    opacity: 1;
  }
}

@-moz-keyframes fadeInFromNone {
  0% {
    display: none;
    opacity: 0;
  }

  1% {
    display: block;
    opacity: 0;
  }

  100% {
    display: block;
    opacity: 1;
  }
}

@-o-keyframes fadeInFromNone {
  0% {
    display: none;
    opacity: 0;
  }

  1% {
    display: block;
    opacity: 0;
  }

  100% {
    display: block;
    opacity: 1;
  }
}

@keyframes fadeInFromNone {
  0% {
    display: none;
    opacity: 0;
  }

  1% {
    display: block;
    opacity: 0;
  }

  100% {
    display: block;
    opacity: 1;
  }
}
</style>
