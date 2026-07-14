export interface Post {
  title: string
  date: string
  tags: string[]
  description: string
  url: string
  publish: boolean
}

export function normalizeTags(tags: string | string[] | undefined): string[] {
  if (!tags) return []
  return Array.isArray(tags) ? tags : [tags]
}

export function formatDate(date: string): string {
  const parsed = new Date(date)
  if (Number.isNaN(parsed.getTime())) return date
  return parsed.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function collectTags(posts: Post[]) {
  const tagMap = new Map<string, Post[]>()

  for (const post of posts) {
    for (const tag of post.tags) {
      const list = tagMap.get(tag) ?? []
      list.push(post)
      tagMap.set(tag, list)
    }
  }

  return [...tagMap.entries()]
    .sort(([a], [b]) => a.localeCompare(b, 'zh-CN'))
    .map(([name, items]) => ({ name, posts: items }))
}
