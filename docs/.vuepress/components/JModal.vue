<template>
  <div class="overlay" v-show="visible" @click.self="handleClose">
    <div class="modalBody" @click.stop>
      <slot name="header">
        <div class="header">
          <div class="title">{{ title }}</div>
        </div>
      </slot>

      <div class="content">
        <slot></slot>
      </div>

      <slot name="footer">
        <div class="footer">
          <JButton
            v-for="item in footer"
            :key="item.text"
            :text="item.text"
            @click="item.callback"
          />
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup lang="js">
import { watch } from 'vue'
import JButton from './JButton.vue'

const props = defineProps({
  visible: Boolean,
  title: String,
  footer: Array
})

const emits = defineEmits(['update:visible'])

watch(() => props.visible, (newVal) => {
  if (!newVal) emits('update:visible', false)
})

const handleClose = () => {
  emits('update:visible', false)
}

</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  animation: fadeIn 0.5s;
  background-color: rgba(0, 0, 0, 0.4);
}

.modalBody {
  //flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 30%;
  min-width: 20rem;
  max-width: 25rem;
  padding: 20px;
  animation: slideIn 0.3s;
  border-radius: 10px;
  box-shadow: 0 0 180px #dedede inset;
  background-color: rgba(256, 256, 256, 0.4);

  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 1rem;

    .title {
      font-size: 20px;
      font-weight: bold;
      color: darkcyan;
    }
  }

  .content {
    width: 100%;
  }

  .footer {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 20px;
    padding-top: 15px;
    border-top: 1px solid #ccc;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
