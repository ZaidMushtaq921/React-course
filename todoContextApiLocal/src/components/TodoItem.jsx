import React, { useState } from 'react'; // Importing React and useState hook
import { useTodo } from '../contexts/TodoContext'; // Importing useTodo from TodoContext

/**
 * TodoItem component receives a todo prop and displays a single todo item
 * @param {Object} todo - An object containing a todo's properties
 * @property {number} todo.id - The unique identifier of the todo
 * @property {string} todo.todo - The text content of the todo
 * @property {boolean} todo.completed - A boolean indicating if the todo is completed
 * @function toggleComplete - Dispatches the toggleComplete action from TodoContext
 * @function updateTodo - Dispatches the updateTodo action from TodoContext
 * @function deleteTodo - Dispatches the deleteTodo action from TodoContext
 */
function TodoItem({ todo }) {
  // Declaring isTodoEditable state to track whether the todo is currently being edited
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  // Declaring todoMsg state to store the updated text content of the todo
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  // Calling the useTodo hook to destructure relevant functions from TodoContext
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  // editTodo function to update the todo's text content and update its state
  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  // toggleCompleted function to update the todo's completed state
  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  // Rendering the todo item with appropriate styles and functionalities
  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Conditional buttons for editing and saving the todo, or deleting it */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else {
            setIsTodoEditable((prev) => !prev);
          }
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

// Exporting the TodoItem component for use in other files
export default TodoItem;