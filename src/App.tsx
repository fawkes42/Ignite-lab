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
            </li>
          )
        })
      }
    </ul>
  )
}

export default App
