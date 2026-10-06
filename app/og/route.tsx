import { ImageResponse } from 'next/og'

// Link-preview image (1200x630). With ?title= it's a post card;
// without it, the default card for the rest of the site.
export async function GET(request: Request) {
  let url = new URL(request.url)
  let title = url.searchParams.get('title')

  let photo: string | null = null
  if (!title) {
    try {
      let res = await fetch(new URL('/images/profile.jpg', url))
      if (res.ok) {
        let bytes = Buffer.from(await res.arrayBuffer()).toString('base64')
        photo = `data:image/jpeg;base64,${bytes}`
      }
    } catch {}
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 96px',
          backgroundColor: '#f6f2e8',
          color: '#111827',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: photo ? 620 : 1000,
          }}
        >
          <div style={{ fontSize: title ? 64 : 80, letterSpacing: '-0.03em' }}>
            {title ?? 'Adelina Chau'}
          </div>
          <div
            style={{
              marginTop: title ? 40 : 28,
              fontSize: 32,
              lineHeight: 1.4,
              color: '#525252',
            }}
          >
            {title
              ? 'Adelina Chau'
              : 'EECS & Business at UC Berkeley. Interpretable machine learning for biology.'}
          </div>
        </div>
        {photo && (
          <img
            src={photo}
            width={340}
            height={340}
            style={{ borderRadius: 24, objectFit: 'cover' }}
          />
        )}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
