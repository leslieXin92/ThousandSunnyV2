<template>
  <Layout>
    <div class="reads">
      <div
        v-for="{ info, path } in reads.items"
        :key="path"
        class="read"
      >
        <div class="cover" @click="$router.push(path)">
          <img :src="info.cover" alt="" />
        </div>
        <div class="title">{{ info.title }}</div>
      </div>
    </div>
  </Layout>
</template>

<script setup lang='js'>
import Layout from '../components/Layout.vue'
import { useBlogType } from '@vuepress/plugin-blog/client'

const reads = useBlogType('read')
</script>

<style scoped lang='scss'>
:deep(.page) {
  display: flex;
  justify-content: center;
  align-items: flex-start;

  .reads {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    width: 80vw;
    margin-top: 25px;

    .read {
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 5px;
      padding: 20px 0;

      .cover {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 150px;
        height: 200px;
        font-size: 2rem;
        cursor: pointer;
        transition: box-shadow 0.15s ease-in-out;

        &:hover {
          box-shadow: 0 15px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.15);
        }

        img {
          width: 100%;
          height: 100%;
        }
      }

      .title {
        margin-top: 15px;
        font-size: 1.2rem;
        font-weight: bold;
      }
    }
  }

}
</style>
