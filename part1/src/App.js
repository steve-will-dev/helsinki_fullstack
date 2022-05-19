const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
const Header = (props) => {
  return <h1>{props.course.name}</h1>
}

const Part = (props) => {
  return (
    props.part.map(part =>
      <p key={part.name}>{part.name} {part.exercises}</p>
  )
  )
}

const Total = (props) => {
  return <p>Number of exercises {props.totalNumberOfExercises}</p>
}

const Content = (props) => {
    return(
    <div>
    <Part part={props.parts}/>
    </div>
    )
   }
   
  return (
    <div>
      <Header course={course}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts} />
    </div>
  )
}

export default App