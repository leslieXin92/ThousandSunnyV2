<template>
  <Layout>
    <div class="projects">
      <template v-if="!projects.length">
        <div class="project noProject">
          <div class="cover">
            <img src="../public/no_project.gif" alt="" />
          </div>
          <div class="projectInfo">
            <div class="name">No projects yet ~~</div>
          </div>
        </div>
      </template>

      <template v-else>
        <div
          v-for="item in projects"
          :key="item"
          class="project"
          @click="handleClickProject(item)"
        >
          <div class="cover">
            <img :src="item.cover" alt="" />
          </div>
          <div class="projectInfo">
            <div class="name">{{ item.title }}</div>
            <div class="description">{{ item.description }}</div>
          </div>
        </div>
      </template>

      <JModal
        v-model:visible="visible"
        :title="curProject.title"
        :footer="modalFooter"
      >
        <div class="modalInfo">
          <div class="projectCover">
            <img :src="curProject.cover" alt="" />
          </div>

          <div class="projectInfo">
            <div class="description">{{ curProject.description }}</div>

            <div>
              <JTag
                v-for="item in curProject.technologyStack"
                :key="item"
                :text="item"
                type="danger"
              />
            </div>

            <div v-if="curProject.startAt" class="startAt">
              <div class="label">start:</div>
              <div class="value">{{ timeFormat(curProject.startAt) }}</div>
            </div>

            <div v-if="curProject.doneAt" class="doneAt">
              <div class="label">done:</div>
              <div class="value">{{ timeFormat(curProject.doneAt) }}</div>
            </div>
          </div>
        </div>
      </JModal>
    </div>
  </Layout>
</template>

<script setup lang='js'>
import { computed, ref } from 'vue'
import { useBlogType } from '@vuepress/plugin-blog/client'
import Layout from '../components/Layout.vue'
import JModal from '../components/JModal.vue'
import JTag from '../components/JTag.vue'
import { timeFormat } from '../utils/time.js'

const modalFooter = computed(() => {
  return [
    {
      condition: curProject.value.codeAddress,
      text: 'view code',
      callback: () => {
        skip2Web(curProject.value.codeAddress)
      }
    },
    {
      condition: curProject.value.onlineAddress,
      text: 'view online',
      callback: () => {
        skip2Web(curProject.value.onlineAddress)
      }
    }
  ].filter(i => i.condition)
})

const visible = ref(false)

const projects = computed(() => {
  const origin = useBlogType('project')
  return origin.value.items.map(item => ({
    ...item.info
  }))
})

const curProject = ref({})

const handleClickProject = (project) => {
  curProject.value = project
  visible.value = true
}

const skip2Web = (url) => {
  window.open(url)
}
</script>

<style scoped lang='scss'>
:deep(.page) {
  display: flex;
  justify-content: center;
  align-items: flex-start;

  .projects {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    width: 80vw;
    margin-top: 25px;

    .noProject {
      cursor: default !important;

      &:hover {
        background-color: initial !important;
      }
    }

    .project {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      min-width: 280px;
      max-width: 500px;
      height: 80px;
      padding: 0 10px 0 10px;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background-color: rgba(0, 136, 136, 0.03);
      }

      .cover {
        width: 50px;
        height: 50px;

        img {
          width: 100%;
          height: 100%;
          border-radius: 5px;
        }
      }

      .projectInfo {
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

    .modalInfo {
      display: flex;
      justify-content: space-around;
      align-items: center;
      //width: 100%;

      .projectCover {
        width: 100px;
        height: 100px;
        border-radius: 10px;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .projectInfo {
        flex: 0.75;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        .description {
          margin-top: 5px;
          font-size: 16px;
          font-style: italic;
          color: #0a5050;
          margin-bottom: 10px;
        }

        .startAt,
        .doneAt {
          display: flex;
          margin-top: 0.8rem;
          font-size: 14px;
          color: #0a5050;
          font-style: italic;

          .value {
            margin-left: 0.6rem;
          }
        }
      }
    }
  }
}
</style>
