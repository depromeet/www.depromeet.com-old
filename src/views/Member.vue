<template>
  <div class="member-page">
    <page-title
      title="디프만 멤버"
    />
    <div class="container">
      <category
        :items="categories"
        class="member-category"
      />
      <div class="member-container">
        <div class="member-title">
          <div class="line"></div>
          <span>운영진</span>
          <div class="line"></div>
        </div>
        <div class="member-list" v-if="staffMember.length > 0">
          <member-item
            class="member-item"
            :member="member"
            :key="index"
            v-for="(member, index) in staffMember"
          />
        </div>
        <div class="member-list" v-else>
          <span>Comming Soon</span>
        </div>
        <div class="member-title">
          <div class="line"></div>
          <span>개발자</span>
          <div class="line"></div>
        </div>
        <div class="member-list" v-if="developerMember.length > 0">
          <member-item
            class="member-item"
            :member="member"
            :key="index"
            v-for="(member, index) in developerMember"
          />
        </div>
        <div class="member-list" v-else>
          <span>Comming Soon</span>
        </div>
        <div class="member-title">
          <div class="line"></div>
          <span>디자이너</span>
          <div class="line"></div>
        </div>
        <div class="member-list" v-if="designerMember.length > 0">
          <member-item
            class="member-item"
            :member="member"
            :key="index"
            v-for="(member, index) in designerMember"
          />
        </div>
        <div class="member-list" v-else>
          <span>Comming Soon</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PageTitle from '@/components/PageTitle.vue';
import Category from '@/components/Category.vue';
import MemberItem from '@/components/MemberItem.vue';

@Component({
  components: {
    PageTitle,
    Category,
    MemberItem,
  },
})
export default class Member extends Vue {
  categories = [
    {
      key: '5',
      name: '5기',
      current: false,
    },
    {
      key: '6',
      name: '6기',
      current: true,
    },
  ]

  members = [
    {
      name: '유현식',
      number: '6',
      role: 'staff',
      role_name: '회장',
    },
    {
      name: '이수지',
      number: '6',
      role: 'staff',
      role_name: 'CDO',
    },
    {
      name: '권재원',
      number: '6',
      role: 'staff',
      role_name: 'CTO',
    },
    {
      name: '이윤지',
      number: '6',
      role: 'staff',
      role_name: '회계',
    },
    {
      name: '김한나',
      number: '6',
      role: 'staff',
      role_name: '홍보',
    },
    {
      name: '아무개',
      number: '6',
      role: 'designer',
      role_name: null,
    },
    {
      name: '아무개',
      number: '6',
      role: 'designer',
      role_name: null,
    },
    {
      name: '아무개',
      number: '6',
      role: 'designer',
      role_name: null,
    },
    {
      name: '아무개',
      number: '6',
      role: 'designer',
      role_name: null,
    },
    {
      name: '아무개',
      number: '6',
      role: 'designer',
      role_name: null,
    },
    {
      name: '아무개',
      number: '6',
      role: 'designer',
      role_name: null,
    },
    {
      name: '아무개',
      number: '6',
      role: 'designer',
      role_name: null,
    },
    {
      name: '아무개',
      number: '6',
      role: 'developer',
      role_name: null,
    },
    {
      name: '아무개',
      number: '6',
      role: 'developer',
      role_name: null,
    },
    {
      name: '아무개',
      number: '6',
      role: 'developer',
      role_name: null,
    },
    {
      name: '아무개',
      number: '6',
      role: 'designer',
      role_name: null,
    },
    {
      name: '아무개',
      number: '6',
      role: 'designer',
      role_name: null,
    },
    {
      name: '아무개',
      number: '6',
      role: 'designer',
      role_name: null,
    },
    {
      name: '아무개',
      number: '6',
      role: 'designer',
      role_name: null,
    },
    {
      name: '아무개',
      number: '6',
      role: 'developer',
      role_name: null,
    },
    {
      name: '아무개',
      number: '6',
      role: 'developer',
      role_name: null,
    },
  ]

  get staffMember(): any {
    return this.members.filter((member: any) => member.role === 'staff');
  }

  get developerMember(): any {
    return this.members.filter((member: any) => member.role === 'developer');
  }

  get designerMember(): any {
    return this.members.filter((member: any) => member.role === 'designer');
  }
}
</script>

<style lang="scss" scoped>
  .member-category {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .member-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .member-title {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      margin-bottom: 30px;

      span {
        font-size: 18px;
        font-weight: bold;
        width: 100%;
      }
      .line {
        width: 80px;
        height: 1px;
        background: rgba(102, 102, 102, .4);
      }
    }

    .member-list {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    .member-item {
      margin: 0 10px;
    }
  }
</style>
