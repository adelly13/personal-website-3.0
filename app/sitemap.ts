import { blogEnabled, getBlogPosts } from 'app/blog/utils'

export const baseUrl = 'https://personal-website-3-0-theta.vercel.app'

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', '/research', '/courses', ...(blogEnabled ? ['/blog'] : [])].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
