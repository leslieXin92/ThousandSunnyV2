<template>
  <button class="button">
    <slot>
      {{ text }}
    </slot>
  </button>
</template>

<script setup lang='js'>
const props = defineProps({
  text: String
})
</script>

<style scoped lang='scss'>
.button {
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  outline: none;
  color: #fff;
  background-color: darkcyan;

  &:hover {
    background-color: #1a6868;
    transition: background-color 0.1s ease-in-out;
  }
}
</style>
