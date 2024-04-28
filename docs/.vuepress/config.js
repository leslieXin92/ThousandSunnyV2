import { blogPlugin } from '@vuepress/plugin-blog'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Leslie',
  description: '穷且益坚，不坠青云之志',
  bundler: viteBundler(),

  theme: defaultTheme({
    logo: '/static/chicken.png',
    // home: '/home/',

    navbar: [
      {
        text: 'Home',
        link: '/home/',
        activeMatch: 'home'
      },
      {
        text: 'Blog',
        link: '/blog/',
        activeMatch: 'blog'
      },
      {
        text: 'Project',
        link: '/project/',
        activeMatch: 'project'
      },
      {
        text: 'Read',
        link: '/read/',
        activeMatch: 'read'
      }
    ]
  }),

  plugins: [
    blogPlugin({
      hotReload: true,

      filter: ({ filePathRelative }) => {
        return filePathRelative
          ? filePathRelative.startsWith('blogs/') || filePathRelative.startsWith('reads/')
          : false
      },

      getInfo: ({ frontmatter, title, data }) => ({
        ...frontmatter,
        title,
        date: frontmatter.date || null,
        excerpt: typeof frontmatter.excerpt === 'string'
          ? frontmatter.excerpt
          : data?.excerpt || ''
      }),

      excerptFilter: ({ frontmatter }) => {
        return !frontmatter.home &&
          frontmatter.excerpt !== false &&
          typeof frontmatter.excerpt !== 'string'
      },

      category: [],

      type: [
        {
          key: 'home',
          layout: 'Home',
          filter: () => false,
          frontmatter: () => ({
            title: 'Home',
            sidebar: false
          })
        },
        {
          key: 'blog',
          layout: 'Blog',
          filter: (page) => page.filePathRelative.startsWith('blogs/'),
          frontmatter: () => ({
            title: 'Blog',
            sidebar: false
          }),
          sorter
        },
        {
          key: 'project',
          layout: 'Project',
          filter: () => false,
          frontmatter: () => ({
            title: 'Project',
            sidebar: false
          }),
          sorter
        },
        {
          key: 'read',
          layout: 'Read',
          filter: (page) => page.filePathRelative.startsWith('reads/'),
          frontmatter: () => ({
            title: 'Read',
            sidebar: false
          }),
          sorter
        }
      ]
    })
  ]
})

const sorter = (pageA, pageB) => {
  if (pageA.frontmatter.sticky && pageB.frontmatter.sticky)
    return pageB.frontmatter.sticky - pageA.frontmatter.sticky

  if (pageA.frontmatter.sticky && !pageB.frontmatter.sticky) return -1

  if (!pageA.frontmatter.sticky && pageB.frontmatter.sticky) return 1

  if (!pageB.frontmatter.date) return 1
  if (!pageA.frontmatter.date) return -1

  return (
    new Date(pageB.frontmatter.date).getTime() -
    new Date(pageA.frontmatter.date).getTime()
  )
}
