<script setup lang="ts">
import { data as posts } from '../../posts.data'
import { formatDate } from '../../utils/posts'
</script>

<template>
  <div class="post-list">
    <article v-for="post in posts" :key="post.url" class="post-card">
      <h2 class="post-title">
        <a :href="post.url">{{ post.title }}</a>
      </h2>
      <p class="post-meta">
        <time :datetime="post.date">{{ formatDate(post.date) }}</time>
        <span v-if="post.tags.length" class="post-tags">
          <a
            v-for="tag in post.tags"
            :key="tag"
            class="post-tag"
            :href="`/pages/tags#${encodeURIComponent(tag)}`"
          >
            {{ tag }}
          </a>
        </span>
      </p>
      <p v-if="post.description" class="post-desc">{{ post.description }}</p>
    </article>
    <p v-if="!posts.length" class="post-empty">暂无文章</p>
  </div>
</template>
