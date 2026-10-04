// Cheatsheet PDFs live in public/cheatsheets/
const cheatsheets: Record<string, string> = {
  'EECS 16A': '/cheatsheets/eecs16a.pdf',
  'EECS 16B': '/cheatsheets/eecs16b.pdf',
  'CS 61C': '/cheatsheets/cs61c.pdf', // PDF itself is password-locked
  'MATH 110': '/cheatsheets/math110.pdf',
  'EECS 126': '/cheatsheets/eecs126.pdf',
  'MATH 53': '/cheatsheets/math53.pdf',
  'UGBA 104': '/cheatsheets/ugba104.pdf',
}

const graduateCourses = new Set(['CS 294-302'])

function CourseItem({ course }: { course: string }) {
  const [prefix, ...rest] = course.split(':')
  const suffix = rest.join(':').trim()
  if (!suffix) return <strong>{course}</strong>
  const cheatsheet = cheatsheets[prefix]
  return (
    <>
      <strong className="underline underline-offset-4">{`${prefix}:`}</strong>{' '}
      {suffix}
      {graduateCourses.has(prefix) && (
        <span className="ml-1.5 rounded border border-neutral-300 px-1 py-px align-middle text-[0.65rem] font-medium uppercase tracking-wide text-neutral-600 dark:border-neutral-600 dark:text-neutral-400">
          Grad
        </span>
      )}
      {cheatsheet && (
        <a
          href={cheatsheet}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1.5 rounded border border-neutral-300 px-1 py-px align-middle text-[0.65rem] font-medium uppercase tracking-wide text-neutral-600 transition-colors hover:bg-neutral-100 dark:border-neutral-600 dark:text-neutral-400 dark:hover:bg-neutral-800"
          aria-label={`${prefix} cheatsheet (PDF)`}
          title="Cheatsheet"
        >
          PDF
        </a>
      )}
    </>
  )
}

export default function Courses() {
  const semesterCourses = {
    'Summer 2024': [
      'CS 61A: Structure of Computer Programs',
    ],
    'Fall 2024': [
      'CS 61B: Data Structures',
      'CS 195: Implications of Computing Tech',
      'EECS 16A: Info. Devices & Systems',
      'UGBA 10X: Foundations of Business',
      'UGBA 196: Technology Innovation',
    ],
    'Spring 2025': [
      'CS 70: Discrete Math & Probability',
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
      'THEATER 52AC: Dance in US Cultures',
    ],
    'Spring 2026': [
      'CS 170: Efficient Algorithms',
      'EECS 126: Probability & Random Processes',
      'MATH 53: Multivariable Calculus',
      'UGBA 135: Personal Finance',
      'Teaching: CS 189 Tutor',
    ],
    'Summer 2026': [
      'UGBA 102A: Financial Accounting',
      'UGBA 104: Business Analytics',
      'Teaching: CS 61C TA',
    ],
    'Fall 2026': [
      'CS 162: Operating Systems',
      'CS 152: Computer Architecture',
      'CS 294-302: Deep Learning for Cancer Immunology',
      'UGBA 100: Business Communication',
      'UGBA 107: Business Ethics',
      'Teaching: CS 189 Tutor',
    ],
  } as const

  const orderedSemesters = Object.keys(semesterCourses).reverse()

  return (
    <section>
      <h1 className="mt-6 mb-4 text-4xl font-semibold tracking-tighter">Courses</h1>
      <div className="mt-6 space-y-6">
        {orderedSemesters.map((semester) => {
          const courses = semesterCourses[semester]
          return (
            <div key={semester}>
              <h2 className="text-base font-semibold tracking-tight">
                {semester}
              </h2>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                {courses.map((course) => (
                  <li key={course}>
                    <CourseItem course={course} />
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}
