import Image from 'next/image'
import { Great_Vibes } from 'next/font/google'

const signatureFont = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
})

export default function Page() {
  return (
    <section>
      <div className="mx-auto mb-1 w-[min(62vw,240px)] md:hidden">
        <Image
          alt="Adelina Chau"
          className="aspect-square w-full rounded-md object-cover object-center"
          height={400}
          priority
          src="/images/profile.png"
          width={400}
        />
      </div>
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
      <div className="flex flex-col-reverse gap-5 md:flex-row md:items-start md:justify-between md:gap-6">
        <div className="md:flex-1">
          <p className="mb-4">
            I'm a second-year student at{' '}
            <a
              className="underline"
              href="https://met.berkeley.edu/"
              rel="noreferrer"
              target="_blank"
            >
              UC Berkeley M.E.T.
            </a>{' '}
            studying Electrical Engineering and Computer Science & Business
            Administration. I am broadly interested in applying computational
            methods to understanding biological systems, especially immunology
            and protein design. You'll probably hear me talking about dance,
            Formula 1, and traveling!
          </p>
        </div>
        <div className="hidden w-44 shrink-0 md:block">
          <Image
            alt="Adelina Chau"
            className="aspect-square w-full rounded-md object-cover object-center"
            height={400}
            src="/images/profile.png"
            width={400}
          />
        </div>
      </div>
    </section>
  )
}
