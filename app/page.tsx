import { BlogPosts } from 'app/components/posts'
import { Great_Vibes } from 'next/font/google'

const signatureFont = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
})

export default function Page() {
  return (
    <section>
      <svg
        aria-label="adelina chau"
        className={`mt-0 mb-2 signature ${signatureFont.className}`}
        role="img"
        viewBox="0 0 640 160"
      >
        <text x="0" y="110">
          adelina chau
        </text>
      </svg>
      <p className="mb-4">
        hey there! im a second year student at{' '}
        <a
          className="underline"
          href="https://met.berkeley.edu/"
          rel="noreferrer"
          target="_blank"
        >
          uc berkeley m.e.t.
        </a>{' '}
        studying electrical engineering computer science & business
        administration. i am primarily interested in applying machine learning to biological questions, but i also enjoy exploring quantum computing, chemistry, math, and systems. you'll probably hear me talking about dance, formula 1, traveling, and sidequesting!
      </p>
    </section>
  )
}
