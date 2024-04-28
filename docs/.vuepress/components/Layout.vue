<template>
  <ParentLayout>
    <template #page>
      <main class="page">
        <slot />
      </main>
    </template>
  </ParentLayout>
</template>

<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
</script>

<style scoped lang="scss">
.theme-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.page {
  flex: 1;
}
</style>
