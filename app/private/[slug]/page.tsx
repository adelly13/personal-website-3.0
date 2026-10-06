import { notFound } from 'next/navigation'
import { cookies } from 'next/headers'
import { CustomMDX } from 'app/components/mdx'
import { formatDate } from 'app/lib/posts'
import { getPrivatePosts } from 'app/private/utils'
import { PrivateGate } from 'app/components/private-gate'

export const dynamic = 'force-dynamic'

type PrivatePostProps = {
  params: Promise<{ slug: string }>
}

export default async function PrivatePost({ params }: PrivatePostProps) {
  const cookieStore = await cookies()
  const hasAccess = cookieStore.get('private_access')?.value === 'granted'

  if (!hasAccess) {
    return <PrivateGate />
  }

  const { slug } = await params
  const post = getPrivatePosts().find((entry) => entry.slug === slug)

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
