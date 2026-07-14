<script setup lang="ts">
import { ref, computed } from 'vue'
import { data as posts } from '../../posts.data'
import { collectTags, formatDate } from '../../utils/posts'

const ALL_TAG = '全部'
const tags = collectTags(posts)

function getInitialTag() {
  if (typeof window !== 'undefined') {
    const hash = decodeURIComponent(window.location.hash.slice(1))
    if (hash) return hash
  }
  return ALL_TAG
}

const activeTag = ref(getInitialTag())

if (typeof window !== 'undefined' && !window.location.hash) {
  window.location.hash = encodeURIComponent(ALL_TAG)
}

const filteredPosts = computed(() => {
  if (!activeTag.value) return []
  if (activeTag.value === ALL_TAG) return posts
  const group = tags.find((t) => t.name === activeTag.value)
  return group?.posts ?? []
})

const listTitle = computed(() =>
  activeTag.value === ALL_TAG ? '全部文章' : `标签：${activeTag.value}`,
)

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
        class="tag-chip"
        :class="{ active: activeTag === ALL_TAG }"
        @click="selectTag(ALL_TAG)"
      >
        {{ ALL_TAG }}
        <span class="tag-count">{{ posts.length }}</span>
      </button>
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
      <h2>{{ listTitle }}</h2>
      <ul>
        <li v-for="post in filteredPosts" :key="post.url">
          <a :href="post.url">{{ post.title }}</a>
          <time :datetime="post.date">{{ formatDate(post.date) }}</time>
        </li>
      </ul>
    </div>
    <p v-else class="tag-hint">暂无文章</p>
  </div>
</template>
