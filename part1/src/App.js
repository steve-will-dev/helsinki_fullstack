const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return <p>{props.title} {props.amountOfExercises}</p>
}

const Total = (props) => {
  return <p>Number of exercises {props.totalNumberOfExercises}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content title={part1} amountOfExercises={exercises1}/>
      <Content title={part2} amountOfExercises={exercises2}/>
      <Content title={part3} amountOfExercises={exercises3}/>
      <Total totalNumberOfExercises={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App