import { notFound } from 'next/navigation'
import { BlogPosts } from 'app/components/posts'
import { blogEnabled } from 'app/blog/utils'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<{ tag?: string }>
}) {
  if (!blogEnabled) notFound()
  let activeTag = (await searchParams)?.tag

  return (
    <section>
      <h1 className="font-semibold text-4xl mb-8 tracking-tighter">My Blog</h1>
      <BlogPosts activeTag={activeTag} />
    </section>
  )
}
