import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import PostList from './components/PostList.vue'
import TagCloud from './components/TagCloud.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('PostList', PostList)
    app.component('TagCloud', TagCloud)
  },
} satisfies Theme
