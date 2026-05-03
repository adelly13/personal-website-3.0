import { cookies } from 'next/headers'
import { PrivateGate } from 'app/components/private-gate'
import { PrivatePosts } from 'app/components/private-posts'

export const dynamic = 'force-dynamic'

export default async function Page() {
  const cookieStore = await cookies()
  const hasAccess = cookieStore.get('private_access')?.value === 'granted'

  if (!hasAccess) {
    return <PrivateGate />
  }

  return (
    <section>
      <h1 className="font-semibold text-4xl mb-8 tracking-tighter">
        private journal
      </h1>
      <PrivatePosts />
    </section>
  )
}
