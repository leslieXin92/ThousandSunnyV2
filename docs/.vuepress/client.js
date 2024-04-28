import { defineClientConfig } from 'vuepress/client'
import Home from './views/Home.vue'
import Blog from './views/Blog.vue'
import Read from './views/Read.vue'
import Project from './views/Project.vue'

export default defineClientConfig({
  layouts: {
    Home,
    Blog,
    Read,
    Project
  }
})
