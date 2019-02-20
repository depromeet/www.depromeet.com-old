<template>
  <div class="category-list">
    <div
      class="category-item"
      :class="{ active: item.key === activeCategory.key }"
      v-for="item in items"
      :key="item.key"
      @click="categoryClick(item.key)"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Category extends Vue {
  @Prop() items: any

  // activeCategory: any = this.items.find((item: any) => item.currennt!!)
  activeCategory: any = this.items[0]

  categoryClick(key: string): void {
    this.activeCategory = this.items.find((item: any) => item.key === key);
  }
}
</script>

<style lang="scss" scoped>
  .category-list {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 50px;
    .category-item {
      font-size: 14px;
      color: rgba(102, 102, 102, .6);
      padding: 0 15px;
      cursor: pointer;
      &.active {
        font-weight: bold;
        /* color: #45D2A6; */
        color: #696969;
      }
      &:not(:last-child) {
        border-right: 2px solid rgba(102, 102, 102, .4);
      }
    }
  }
</style>
