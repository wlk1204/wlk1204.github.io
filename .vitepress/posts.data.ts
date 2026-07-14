import { createContentLoader } from 'vitepress'
import { normalizeTags, type Post } from './utils/posts'

declare const data: Post[]
export { data }

export default createContentLoader('posts/**/*.md', {
  transform(raw): Post[] {
    return raw
      .map(({ url, frontmatter }) => ({
        title: (frontmatter.title as string) || '无标题',
        date: (frontmatter.date as string) || '',
        tags: normalizeTags(frontmatter.tags as string | string[]),
        description: (frontmatter.description as string) || '',
        url,
        publish: frontmatter.publish !== false,
      }))
      .filter((post) => post.publish && post.date)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  },
})
