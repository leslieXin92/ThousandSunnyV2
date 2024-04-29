<template>
  <span :class="['tag', type]">
    <slot>
      {{ text }}
    </slot>
  </span>
</template>

<script setup lang='js'>
const props = defineProps({
  type: String, // 'success' | 'info' | 'warning' | 'error'
  text: String
})
</script>

<style scoped lang='scss'>
.tag {
  display: inline-block;
  padding: 4px 8px;
  margin: 5px 3px 0 0;
  font-size: 12px;
  line-height: 1;
  text-align: center;
  border-radius: 4px;
  color: #909399;
  background-color: #f5f7fa;
  border: 1px solid #dcdfe6;

  &.success {
    color: #67c23a;
    background-color: #f0f9eb;
    border-color: #e1f3d8;
  }

  &.info {
    color: #909399;
    background-color: #f2f6fc;
    border-color: #dcdfe6;
  }

  &.warning {
    color: #e6a23c;
    background-color: #fdf6ec;
    border-color: #faecd8;
  }

  &.danger {
    color: #f56c6c;
    background-color: #fef0f0;
    border-color: #fde2e2;
  }
}
</style>
