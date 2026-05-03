export default function Research() {
  return (
    <section>
      <h1 className="mb-4 text-4xl font-semibold tracking-tighter">Research</h1>

      <p className="mb-4">I am interested in applying computational methods to creating novel treatments and improving early disease detection, particularly as it relates to cancer biology and immunometabolism.</p>

      <p className="mb-4">
        Currently, in the{' '}
        <a
          className="underline"
          href="https://www.allonwagnerlab.org/"
          rel="noreferrer"
          target="_blank"
        >
          Wagner lab
        </a>
        , I work on understanding how a given cell's transcriptomic state maps
        to its metabolic state, in addition to how metabolic programs vary
        across cell types, niches, and continuous trajectories.
      </p>

      <p className="mb-4">Previously, I've worked on quantum machine learning for small organic molecule discovery and computational microscopy in the {' '}
        <a
          className="underline"
          href="https://sites.bu.edu/tianlab/"
          rel="noreferrer"
          target="_blank"
        >
          Tian Lab.
        </a>
        </p>

      {/* <p className="mb-4">i'm generally driven by the intersection between machine learning and biological questions. currently, i work on computational immunology under prof. allon wagner and phd student daniel lewinsohn. in particular my current project is in utilizing graph variational autoencoders to infer metabolic states from transcriptomic states! previously, i've done a lot of work in quantum gans for small organic molecule discovery under dr. larry mcmahan and computational microscopy under prof. lei tian and phd student qianwan yang!</p> */}
    </section>
  )
}
