import { useState, useEffect } from 'react'
import {TodoProvider} from './contexts'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  // Store the list of todos in the state.
  // Initially, todos are an empty array.
  const [todos, setTodos] = useState([])

  // addTodo function takes a todo object as argument.
  // It adds a new todo to the list of todos, appending the new todo at the beginning of the list
  // and assigning a new id using the current timestamp.
  const addTodo = (todo) => {
    setTodos((prev) => [{ ...todo, id: Date.now() }, ...prev])
  }

  // updateTodo function takes an id and a todo object as arguments.
  // It looks for the todo with the given id in the list of todos and updates it with the new todo.
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  // deleteTodo function takes an id as an argument.
  // It removes the todo with the given id from the list of todos.
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  // toggleComplete function takes an id as an argument.
  // It updates the completed status of the todo with the given id.
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
    )
  }

  // useEffect hook runs after the first render.
  // It retrieves todos from the local storage, parsing the JSON string, and updates the todos state.
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  // useEffect hook runs after the first render and each update.
  // It saves the todos state in the local storage, converting the array to a JSON string.
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  // Rendering the component with the TodoProvider, setting the value prop with todos and
  // functions for adding, updating, deleting, and toggling todos.
  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id}
              className='w-full'
              >
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App