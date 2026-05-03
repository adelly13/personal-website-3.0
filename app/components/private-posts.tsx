import Link from 'next/link'
import { formatDate, getPrivatePosts } from 'app/blog/utils'

export function PrivatePosts() {
  let allPosts = getPrivatePosts()

  if (allPosts.length === 0) {
    return (
      <p className="text-neutral-600 dark:text-neutral-400">
        no private entries yet.
      </p>
    )
  }

  return (
    <div>
      {allPosts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/private/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
