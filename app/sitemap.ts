import { notebookEnabled, getNotebookPosts } from 'app/notebook/utils'

export const baseUrl = 'https://personal-website-3-0-theta.vercel.app'

export default async function sitemap() {
  let notebookPosts = getNotebookPosts().map((post) => ({
    url: `${baseUrl}/notebook/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', '/research', '/courses', ...(notebookEnabled ? ['/notebook'] : [])].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...notebookPosts]
}
