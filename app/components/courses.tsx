export default function Courses() {
  const semesterCourses = {
    'Summer 2024': [
      'CS 61A: Structure of Computer Programs',
    ],
    'Fall 2024': [
      'CS 61B: Data Structures',
      'CS 195: Implications of Computing Technology',
      'EECS 16A: Info. Devices & Systems',
      'UGBA 10X: Foundations of Business',
      'UGBA 196: Technology Innovation',
    ],
    'Spring 2025': [
      'CS 70: Discrete Mathematics & Probability Theory',
      'DESINV 22: Prototyping & Fabrication',
      'EECS 16B: Circuits & Devices',
      'MATH 54: Linear Algebra & Diff. Eqns.',
      'PHYSICS 7B: Electromagnetism',
    ],
    'Fall 2025': [
      'CS 61C: Machine Architecture',
      'CS 189: Machine Learning',
      'EECS 127: Optimization',
      'MATH 110: Abstract Linear Algebra',
      'THEATER 52AC: Dance in American Cultures',
    ],
    'Spring 2026': [
      'CS 170: Efficient Algorithms',
      'EECS 126: Probability & Random Processes',
      'MATH 53: Multivariable Calculus',
      'UGBA 135: Personal Finance Management',
      'Teaching: CS 189 Tutor',
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
      <h1 className="mb-4 text-4xl font-semibold tracking-tighter">Courses</h1>
      <p className="mb-6">Timeline overview.</p>
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
