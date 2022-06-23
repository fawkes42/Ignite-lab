import { gql, useQuery } from '@apollo/client'

const get = gql`
  query {
    lessons {
      id
      title
      teacher {
        name
        bio
      }
    }
  }`

interface Lesson {
  id: string
  title: string
  teacher: Teacher
}

interface Teacher {
  name: string
  bio: string
}

function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(get)
  return (
    <ul>
      {
        data?.lessons.map(lesson => {
          return (
            <li key={lesson.id}>
              {lesson.title}
              {lesson.teacher.name}
            </li>
          )
        })
      }
    </ul>
  )
}

export default App
