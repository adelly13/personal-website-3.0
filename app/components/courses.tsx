export default function Courses() {
  const semesterCourses = {
    'summer 2024': [
      'cs 61a: structure of computer programs',
      '*ewrt 2: crit. reading, writing, & thinking',
    ],
    'fall 2024': [
      'cs 61b: data structures',
      'cs 195: social implications of comp. tech',
      'eecs 16a: design info devices & systems',
      'ugba 10x: foundations of business',
      'ugba 196: managing tech innovation',
    ],
    'spring 2025': [
      'cs 70: discrete math & probability theory',
      'desinv 22: prototyping & fabrication',
      'eecs 16b: intro to circuits & devices',
      'math 54: linear algebra & diff. equations',
      'physics 7b: physics for scientists',
    ],
    'fall 2025': [
      'cs 61c: great ideas of comp. architecture',
      'cs 189: introduction to machine learning',
      'eecs 127: optimazation models',
      'math 110: abstract linear algebra',
      'theater 52ac: dance in american cultures',
    ],
    'spring 2026': [
      'cs 170: efficient algos & intractable probs',
      'eecs 126: probability & random process',
      'math 53: multivariable calculus',
      'ugba 135: personal finance management',
      'cs 197: cs 189 ucs1 tutor'
    ],
  } as const

  const orderedSemesters = Object.keys(semesterCourses).reverse()
  const rowHeight = 180
  const rowGap = 40
  const step = rowHeight + rowGap
  const startY = rowHeight / 2
  const svgHeight = startY * 2 + step * (orderedSemesters.length - 1)
  const centerX = 30
  const amplitude = 12
  const curvePoints = orderedSemesters.map((_, index) => ({
    x: index % 2 === 0 ? centerX - amplitude : centerX + amplitude,
    y: startY + index * step,
  }))
  const curvePath = curvePoints.reduce((path, point, index, points) => {
    if (index === 0) return `M ${point.x} ${point.y}`
    const p0 = points[index - 1]
    const p1 = points[index]
    const pPrev = points[index - 2] ?? p0
    const pNext = points[index + 1] ?? p1
    const control1 = {
      x: p0.x + (p1.x - pPrev.x) / 6,
      y: p0.y + (p1.y - pPrev.y) / 6,
    }
    const control2 = {
      x: p1.x - (pNext.x - p0.x) / 6,
      y: p1.y - (pNext.y - p0.y) / 6,
    }
    return `${path} C ${control1.x} ${control1.y}, ${control2.x} ${control2.y}, ${p1.x} ${p1.y}`
  }, '')

  return (
    <section>
      <h1 className="mb-4 text-2xl font-semibold tracking-tighter">courses</h1>
      <p className="mb-6">timeline overview.</p>
      <div className="relative mt-6 md:hidden">
        <div className="absolute left-4 top-0 h-full w-px bg-neutral-300 dark:bg-neutral-400" />
        <div className="space-y-6 pl-12">
          {orderedSemesters.map((semester) => {
            const courses = semesterCourses[semester]
            return (
              <div key={semester} className="relative">
                <span className="absolute left-4 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-neutral-900 dark:bg-neutral-100" />
                <div className="course-card rounded-xl border border-neutral-200 p-4 text-sm shadow-sm dark:border-neutral-800">
                  <h2 className="text-base font-semibold tracking-tight">
                    {semester}
                  </h2>
                  <div className="mt-2 space-y-1 text-[0.85rem]">
                    {courses.map((course) => {
                      const [prefix, ...rest] = course.split(':')
                      const suffix = rest.join(':').trim()
                      return (
                        <p key={course}>
                          {suffix ? (
                            <>
                              <strong className="underline underline-offset-4">
                                {`${prefix}:`}
                              </strong>{' '}
                              {suffix}
                            </>
                          ) : (
                            <strong>{course}</strong>
                          )}
                        </p>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="relative mt-6 hidden md:block">
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-full w-14 -translate-x-1/2 text-neutral-300 dark:text-neutral-400 -z-10"
          viewBox={`0 0 60 ${svgHeight}`}
        >
          <path
            d={curvePath}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
          />
          {curvePoints.map((point, index) => (
            <circle
              key={index}
              cx={point.x}
              cy={point.y}
              r="5"
              fill="currentColor"
            />
          ))}
        </svg>
        <div
          className="relative grid"
          style={{ gridAutoRows: `${rowHeight}px`, rowGap: `${rowGap}px` }}
        >
          {orderedSemesters.map((semester, index) => {
            const isLeft = index % 2 === 0
            const courses = semesterCourses[semester]
            return (
              <div
                key={semester}
                className="grid grid-cols-[minmax(0,1fr)_48px_minmax(0,1fr)] items-center gap-x-3"
              >
                <div className={isLeft ? '' : 'md:pointer-events-none md:opacity-0'}>
                  <div className="course-card rounded-xl border border-neutral-200 p-4 text-sm shadow-sm dark:border-neutral-800">
                    <h2 className="text-base font-semibold tracking-tight">
                      {semester}
                    </h2>
                    <div className="mt-2 space-y-1 text-[0.85rem]">
                      {courses.map((course) => {
                        const [prefix, ...rest] = course.split(':')
                        const suffix = rest.join(':').trim()
                        return (
                          <p key={course}>
                            {suffix ? (
                              <>
                                <strong className="underline underline-offset-4">
                                  {`${prefix}:`}
                                </strong>{' '}
                                {suffix}
                              </>
                            ) : (
                              <strong>{course}</strong>
                            )}
                          </p>
                        )
                      })}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center" />
                <div className={isLeft ? 'md:pointer-events-none md:opacity-0' : ''}>
                  <div className="course-card rounded-xl border border-neutral-200 p-4 text-sm shadow-sm dark:border-neutral-800">
                    <h2 className="text-base font-semibold tracking-tight">
                      {semester}
                    </h2>
                    <div className="mt-2 space-y-1 text-[0.85rem]">
                      {courses.map((course) => {
                        const [prefix, ...rest] = course.split(':')
                        const suffix = rest.join(':').trim()
                        return (
                          <p key={course}>
                            {suffix ? (
                              <>
                                <strong className="underline underline-offset-4">
                                  {`${prefix}:`}
                                </strong>{' '}
                                {suffix}
                              </>
                            ) : (
                              <strong>{course}</strong>
                            )}
                          </p>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
