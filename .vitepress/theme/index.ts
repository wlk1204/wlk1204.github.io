import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import PostList from './components/PostList.vue'
import TagCloud from './components/TagCloud.vue'
import ArchiveList from './components/ArchiveList.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('PostList', PostList)
    app.component('TagCloud', TagCloud)
    app.component('ArchiveList', ArchiveList)
  },
} satisfies Theme
