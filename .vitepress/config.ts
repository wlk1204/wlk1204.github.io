import { defineConfig } from 'vitepress'
import { RssPlugin } from 'vitepress-plugin-rss'

const BASE_URL = 'https://leekon.github.io'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Leekon',
  description: '个人博客 — 记录技术与生活',
  base: '/',
  appearance: true,
  lastUpdated: true,
  cleanUrls: true,
  srcExclude: ['**/README.md'],
  head: [
    [
      'link',
      {
        rel: 'alternate',
        type: 'application/rss+xml',
        title: 'RSS',
        href: '/feed.rss',
      },
    ],
  ],
  themeConfig: {
    logo: '/favicon.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '标签', link: '/pages/tags' },
      { text: '归档', link: '/pages/archives' },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/leekon' }],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索',
          },
          modal: {
            displayName: '本地搜索',
            noResultsText: '未找到结果',
            resetButtonTitle: '清除',
            footer: {
              selectText: '选择',
              selectKeyAriaLabel: '回车',
              navigateText: '切换',
              navigateUpKeyAriaLabel: '上',
              navigateDownKeyAriaLabel: '下',
              closeText: '关闭',
              closeKeyAriaLabel: 'Esc',
            },
          },
        },
      },
    },
    footer: {
      message: 'Powered by VitePress',
      copyright: 'Copyright © 2026 Leekon',
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    outline: {
      label: '目录',
    },
    lastUpdated: {
      text: '最后更新',
    },
    darkModeSwitchLabel: '主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
  },
  vite: {
    plugins: [
      RssPlugin({
        title: 'Leekon Blog',
        description: '个人博客 — 记录技术与生活',
        baseUrl: BASE_URL,
        filename: 'feed.rss',
        author: {
          name: 'Leekon',
          email: '',
          link: BASE_URL,
        },
        filter: (post) =>
          post.url.startsWith('/posts/') && post.frontmatter?.publish !== false,
      }),
    ],
  },
})
