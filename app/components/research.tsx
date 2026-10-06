const SELF = 'Adelina Chau'

const publications = [
  {
    title:
      'Extracting interpretable single-cell metabolic states with graph-guided representation learning',
    authors: [
      'Daniel P. Lewinsohn',
      'Nicolas Dias',
      'Adelina Chau',
      'Yuko Koike',
      'Zachary D. Smith',
      'Nilah M. Ioannidis',
      'Allon Wagner',
    ],
    venue: 'bioRxiv preprint, 2026',
    links: {
      bioRxiv: 'https://doi.org/10.64898/2026.09.17.751504',
      code: 'https://github.com/wagnerlab-berkeley/mern',
    },
  },
  {
    title:
      'Folate deficiency disrupts key metabolic transitions within the developing neural ectoderm',
    authors: [
      'Nicolas Dias',
      'Daniel P. Lewinsohn',
      'William N. Colgan',
      'Minming Wang',
      'Yusuke Kijima',
      'JoAnne Villagrana',
      'Tien-Chi Jason Hou',
      'Gokul Gowri',
      'Adelina Chau',
      'Tuğçe Aktaş',
      'Kaelyn Sumigray',
      'Jonathan S. Weissman',
      'Luke W. Koblan',
      'Allon Wagner',
      'Zachary D. Smith',
    ],
    venue: 'bioRxiv preprint, 2026',
    links: { bioRxiv: 'https://doi.org/10.64898/2026.09.18.752622' },
  },
  {
    title: 'Multi-channel FourierNet for large-scale shift variant reconstruction',
    authors: [
      'Qianwan Yang',
      'Ruipeng Guo',
      'Guorong Hu',
      'Adelina Chau',
      'Jamin Xie',
      'Lei Tian',
    ],
    venue:
      'SPIE Computational Optical Imaging and Artificial Intelligence in Biomedical Sciences, 2024',
    links: { doi: 'https://doi.org/10.1117/12.3001718' },
  },
  {
    title:
      'Molecular Geometry Generation Processes Through Hybrid Quantum-Classical Generative Adversarial Networks and Python-Based Self-Consistent Field Molecular Calculations',
    authors: [
      'Max Cui*',
      'Adelina Chau*',
      'Michelle Pan*',
      'Vaibhav Vaiyakarnam*',
      'Larry McMahan',
    ],
    venue:
      'IEEE International Conference on Quantum Computing and Engineering (QCE), 2023',
    links: { IEEE: 'https://ieeexplore.ieee.org/document/10313850' },
  },
]

export default function Research() {
  return (
    <section>
      <h1 className="mt-6 mb-4 text-4xl font-semibold tracking-tighter">Research</h1>

      <p className="mb-4">I'm interested in building interpretable machine learning methods for biology, using ideas from probability, information theory, and statistical physics to make models more biologically meaningful.</p>

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
        , I work on spatial metabolism, studying how a cell's metabolism is
        shaped by its surrounding tissue environment. I've also worked on{' '}
        <a
          className="underline"
          href="https://github.com/wagnerlab-berkeley/mern"
          rel="noreferrer"
          target="_blank"
        >
          MeRN
        </a>
        , a framework for inferring interpretable metabolic activity from
        single-cell RNA-seq.
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

      <h2 className="mt-10 mb-4 text-2xl font-semibold tracking-tighter">
        Selected Publications
      </h2>
      <p className="mb-6 text-sm text-neutral-600 dark:text-neutral-400">
        See also{' '}
        <a
          className="underline"
          href="https://scholar.google.com/citations?user=v6yg79cAAAAJ"
          rel="noreferrer"
          target="_blank"
        >
          Google Scholar
        </a>{' '}
        and{' '}
        <a
          className="underline"
          href="https://orcid.org/0009-0002-1691-8732"
          rel="noreferrer"
          target="_blank"
        >
          ORCID
        </a>
        .
      </p>
      <ul className="space-y-6">
        {publications.map((pub) => (
          <li key={pub.title}>
            <p className="font-semibold">{pub.title}</p>
            <p className="mt-1 text-sm">
              {pub.authors.map((author, i) => (
                <span key={author}>
                  {i > 0 && ', '}
                  {author.replace('*', '') === SELF ? <strong>{author}</strong> : author}
                </span>
              ))}
            </p>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              <em>{pub.venue}</em>{' '}
              {Object.entries(pub.links).map(([label, href]) => (
                <span key={label}>
                  [
                  <a
                    className="underline"
                    href={href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {label}
                  </a>
                  ]
                </span>
              ))}
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-xs text-neutral-600 dark:text-neutral-400">
        * Equal contribution
      </p>
    </section>
  )
}
