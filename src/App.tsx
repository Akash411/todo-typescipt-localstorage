import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <main>
      <h1> Todo react Akash with Typescript </h1>
      <Navbar/>
      <AddTodo/>
      <Todos/>
    </main>
  )
}

export default App