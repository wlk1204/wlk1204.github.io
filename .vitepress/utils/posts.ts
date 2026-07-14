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

export function getYearMonth(date: string): { year: string; month: string } {
  const parsed = new Date(date)
  const year = String(parsed.getFullYear())
  const month = String(parsed.getMonth() + 1).padStart(2, '0')
  return { year, month }
}

export function groupByYearMonth(posts: Post[]) {
  const groups = new Map<string, Post[]>()

  for (const post of posts) {
    const { year, month } = getYearMonth(post.date)
    const key = `${year}-${month}`
    const list = groups.get(key) ?? []
    list.push(post)
    groups.set(key, list)
  }

  return [...groups.entries()]
    .sort(([a], [b]) => b.localeCompare(a))
    .map(([key, items]) => {
      const [year, month] = key.split('-')
      return { year, month, posts: items }
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
