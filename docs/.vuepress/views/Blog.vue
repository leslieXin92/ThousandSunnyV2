<template>
  <Layout>
    <div class='blogs'>
      <template v-for='item in blogs' :key='item.id'>
        <div class='year' v-if='item.showYear'>{{ dayjs(item.date).year() }}</div>
        <div class='blog'>
          <div class='blogTitle' @click='$router.push(item.path)'>{{ item.title }}</div>
          <div class='dot'></div>
          <div class='time'>{{ dayjs(item.date).format('YYYY-MM-DD') }}</div>
        </div>
      </template>
    </div>
  </Layout>
</template>

<script setup lang='js'>
import { computed } from 'vue'
import dayjs from 'dayjs'
import Layout from '../components/Layout.vue'
import { useBlogType } from '@vuepress/plugin-blog/client'

const blogs = computed(() => {
  const origin = useBlogType('blog')
  return origin.value.items.map((item, index, array) => ({
    ...item.info,
    path: item.path,
    showYear: !index || dayjs(array[index - 1]?.info.date).year() !== dayjs(item?.info.date).year()
  }))
})
</script>

<style scoped lang="scss">
.blogs {
  width: 60%;
  margin: 0 auto;

  .year {
    margin-top: 1.2rem;
    margin-left: 1.6rem;
    font-size: 3.5rem;
    font-weight: bold;
    font-family: 'Space Mono', monospace;
    cursor: default;
    color: #dedede;
  }

  .blog {
    padding: 1.8rem 0;
    font-size: 1rem;
    border-left: 0.4rem solid rgba(0, 139, 139, 0.1);

    &:first-child {
      padding-top: 0;
    }

    .blogTitle {
      margin-left: 2.5rem;
      font-size: 1.2rem;
      cursor: pointer;

      &:hover {
        color: darkcyan;
      }

      &:active {
        color: darkgreen;
      }
    }

    .dot {
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      transform: translateX(-0.6rem);
      background-color: darkcyan;
    }

    .time {
      margin-left: 2.5rem;
      color: #999;
    }
  }
}
</style>
