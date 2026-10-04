import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts({ activeTag }: { activeTag?: string }) {
  let allBlogs = getBlogPosts()
  let allTags = Array.from(
    new Set(allBlogs.flatMap((post) => post.metadata.tags || []))
  ).sort()
  let filteredBlogs = activeTag
    ? allBlogs.filter((post) => post.metadata.tags?.includes(activeTag))
    : allBlogs

  return (
    <div>
      {allTags.length ? (
        <div className="mb-8 flex flex-wrap gap-2">
          <Link
            href="/blog"
            className={`blog-tag-filter ${!activeTag ? 'active' : ''}`}
          >
            all
          </Link>
          {allTags.map((tag) => (
            <Link
              key={tag}
              href={`/blog?tag=${encodeURIComponent(tag)}`}
              className={`blog-tag-filter ${activeTag === tag ? 'active' : ''}`}
            >
              {tag}
            </Link>
          ))}
        </div>
      ) : null}

      {filteredBlogs
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
            className="flex flex-col space-y-1 mb-5"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <div>
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                  {post.metadata.title}
                </p>
                {post.metadata.summary ? (
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {post.metadata.summary}
                  </p>
                ) : null}
                {post.metadata.tags?.length ? (
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    {post.metadata.tags.map((tag) => (
                      <span key={tag} className="blog-post-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </Link>
        ))}
    </div>
  )
}
