<template>
  <Layout>
    <div class="project">
      <div class="icon">
        <img src="../public/no_project.gif" alt="" />
      </div>
      <div class="info">
        <div class="name">No projects yet ~~</div>
      </div>
    </div>
  </Layout>
</template>

<script setup lang='js'>
import Layout from '../components/Layout.vue'
</script>

<style scoped lang='scss'>
.project {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 80px;
  padding: 0 10px 0 10px;
  border-radius: 5px;

  .icon {
    width: 50px;
    height: 50px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
  }

  .info {
    flex: 0.9;
    align-content: center;
    height: 100%;
    margin-left: 10px;

    .name {
      font-size: 18px;
      font-weight: bold;
      color: #999;
    }

    .description {
      margin-top: 5px;
      font-size: 14px;
      opacity: 0.6;
      color: #666;
    }
  }
}
</style>
