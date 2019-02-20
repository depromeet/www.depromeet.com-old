<template>
  <div class="member-item">
    <span class="name">{{ getMemeberName }}</span>
    <span
      class="role"
      v-if="member.role_name"
    >
      {{ member.role_name }}
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MemberItem extends Vue {
  @Prop() member: any

  get getMemeberName(): string {
    const item = this.member;
    return item.name ? item.name : '익명';
  }
}
</script>

<style lang="scss" scoped>
  .member-item {
    width: 80px;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .name {
      font-size: 16px;
      color: #212121;
      font-weight: bold;
    }
    .role {
      margin-top: 3px;
      color: #fff;
      font-size: 14px;
      background-color: #45D2A6;
      border-radius: 4px;
      padding: 2px 10px;
      font-weight: bold;
    }
  }
</style>
