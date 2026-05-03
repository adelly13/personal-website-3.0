import { notFound } from 'next/navigation'
import { cookies } from 'next/headers'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getPrivatePosts } from 'app/blog/utils'
import { PrivateGate } from 'app/components/private-gate'

export const dynamic = 'force-dynamic'

export default async function PrivatePost({ params }) {
  const cookieStore = await cookies()
  const hasAccess = cookieStore.get('private_access')?.value === 'granted'

  if (!hasAccess) {
    return <PrivateGate />
  }

  const post = getPrivatePosts().find((entry) => entry.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <section>
      <h1 className="title font-semibold text-4xl tracking-tighter">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </section>
  )
}
