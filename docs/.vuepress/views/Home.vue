<template>
  <Layout>
    <keep-alive>
      <div class='container' ref="threeRef" />
    </keep-alive>
  </Layout>
</template>

<script setup lang="js">
import Layout from '../components/Layout.vue'
import useThree from '../hooks/useThree.js'

const { threeRef } = useThree()
</script>

<style scoped lang='scss'>
:deep(.page) {
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    height: calc(100vh - 120px);
    width: calc(100vw - 40px);
    margin-top: 25px;
    border-radius: 10px;
    overflow: hidden;
  }
}
</style>
