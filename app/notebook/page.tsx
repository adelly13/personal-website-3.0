import { notFound } from 'next/navigation'
import { PostList } from 'app/components/posts'
import { getNotebookPosts, notebookEnabled } from 'app/notebook/utils'

export const metadata = {
  title: 'Notebook',
  description: 'Notes on what I am learning.',
}

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<{ tag?: string }>
}) {
  if (!notebookEnabled) notFound()
  let activeTag = (await searchParams)?.tag

  return (
    <section>
      <h1 className="font-semibold text-4xl mb-8 tracking-tighter">My Notebook</h1>
      <PostList
        posts={getNotebookPosts()}
        basePath="/notebook"
        activeTag={activeTag}
      />
    </section>
  )
}
