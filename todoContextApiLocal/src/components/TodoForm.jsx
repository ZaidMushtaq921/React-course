import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'

/**
 * A functional component representing a form for adding a new todo item.
 */
function TodoForm() {
    // Initialize the local state with an empty todo string.
    const [todo, setTodo] = useState("")
    // Use the `useTodo` hook to access the `addTodo` function from the TodoContext.
    const { addTodo } = useTodo()

    /**
     * A function called when the user submits the form.
     * It prevents the default form submission behavior and adds the new todo if the todo text is not empty.
     * @param {React.FormEvent<HTMLFormElement>} e - The form submission event.
     */
    const add = (e) => {
        e.preventDefault()

        if (!todo) return

        addTodo({ todo, completed: false })
        setTodo("")
    }

    // The form for adding a new todo item.
    // The `onSubmit` prop is set to the `add` function.
    return (
        <form onSubmit={add}  className="flex">
            {/* The input field for entering the todo text. */}
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            {/* The button to submit the new todo. */}
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    )
}

// Export the TodoForm component.
export default TodoForm;