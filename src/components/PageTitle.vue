<template>
  <div class="page-title">
    {{ title }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  props: {
    title: String,
  },
})
export default class PageTitle extends Vue {

}
</script>

<style lang="scss" scoped>
.page-title {
  height: 200px;
  background-color: #212121;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  padding-top: 60px;
}
</style>
