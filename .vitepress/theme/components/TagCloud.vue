<script setup lang="ts">
import { ref, computed } from 'vue'
import { data as posts } from '../../posts.data'
import { collectTags, formatDate } from '../../utils/posts'

const tags = collectTags(posts)
const activeTag = ref('')

if (typeof window !== 'undefined') {
  const hash = decodeURIComponent(window.location.hash.slice(1))
  if (hash) activeTag.value = hash
}

const filteredPosts = computed(() => {
  if (!activeTag.value) return []
  const group = tags.find((t) => t.name === activeTag.value)
  return group?.posts ?? []
})

function selectTag(name: string) {
  activeTag.value = name
  if (typeof window !== 'undefined') {
    window.location.hash = encodeURIComponent(name)
  }
}
</script>

<template>
  <div class="tag-page">
    <div class="tag-cloud">
      <button
        v-for="tag in tags"
        :key="tag.name"
        class="tag-chip"
        :class="{ active: activeTag === tag.name }"
        @click="selectTag(tag.name)"
      >
        {{ tag.name }}
        <span class="tag-count">{{ tag.posts.length }}</span>
      </button>
    </div>

    <div v-if="activeTag" class="tag-posts">
      <h2>标签：{{ activeTag }}</h2>
      <ul>
        <li v-for="post in filteredPosts" :key="post.url">
          <a :href="post.url">{{ post.title }}</a>
          <time :datetime="post.date">{{ formatDate(post.date) }}</time>
        </li>
      </ul>
    </div>
    <p v-else class="tag-hint">点击上方标签查看相关文章</p>
  </div>
</template>
