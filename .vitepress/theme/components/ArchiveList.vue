<script setup lang="ts">
import { data as posts } from '../../posts.data'
import { groupByYearMonth, formatDate } from '../../utils/posts'

const archives = groupByYearMonth(posts)
</script>

<template>
  <div class="archive-page">
    <section v-for="group in archives" :key="`${group.year}-${group.month}`" class="archive-group">
      <h2 class="archive-heading">{{ group.year }} 年 {{ group.month }} 月</h2>
      <ul class="archive-list">
        <li v-for="post in group.posts" :key="post.url">
          <a :href="post.url">{{ post.title }}</a>
          <time :datetime="post.date">{{ formatDate(post.date) }}</time>
        </li>
      </ul>
    </section>
    <p v-if="!archives.length" class="archive-empty">暂无归档</p>
  </div>
</template>
