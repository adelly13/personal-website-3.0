import path from 'path'
import { getMDXData } from 'app/lib/posts'

// Flip to true to publish the notebook. While false, the notebook is only visible
// in local dev (npm run dev); in production every /notebook page is a 404 and
// posts are left out of the sitemap and RSS feed.
const NOTEBOOK_PUBLISHED = false

export const notebookEnabled =
  NOTEBOOK_PUBLISHED || process.env.NODE_ENV !== 'production'

export function getNotebookPosts() {
  if (!notebookEnabled) return []
  return getMDXData(path.join(process.cwd(), 'app', 'notebook', 'posts')).filter(
    (post) => post.metadata.visibility !== 'hidden'
  )
}
