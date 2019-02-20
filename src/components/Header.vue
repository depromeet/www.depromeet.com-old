<template>
<div class="app-header">
  <div class="logo menu left-side">
    <router-link to="/">
      <logo />
    </router-link>
  </div>
  <div class="menu right-side">
    <router-link
      to="/"
      class="menu-item active"
    >
      HOME
    </router-link>
    <router-link
      to="#vision" @click.native="scrollFix('#vision')"
      class="menu-item"
    >
      ABOUT
    </router-link>
    <router-link
      to="#recruit" @click.native="scrollFix('#recruit')"
      class="menu-item"
    >
      DEPROMEET
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
  scrollFix(hashbang: string): void {
    window.location.href = hashbang;
  }
}
</script>

<style lang="scss" scoped>
.app-header {
  z-index: 10;
  width: 100%;
  height: 70px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
</style>
