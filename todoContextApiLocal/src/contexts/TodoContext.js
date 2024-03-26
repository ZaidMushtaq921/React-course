import { createContext, useContext } from "react";

// This is the TodoContext which is used to provide and consume todo-related data and functions.
export const TodoContext = createContext({
    // The 'todos' state holds an array of todo objects. Each todo object has an 'id', 'todo' (the task description), 'completed' (a boolean value indicating whether the task is completed or not).
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        },
    ],
    // The 'addTodo' function is used to add a new todo object to the 'todos' array.
    addTodo: (todo) => {},
    // The 'updateTodo' function is used to update a specific todo object in the 'todos' array based on its 'id'.
    updateTodo: (id, todo) => {},
    // The 'deleteTodo' function is used to remove a specific todo object from the 'todos' array based on its 'id'.
    deleteTodo: (id) => {},
    // The 'toggleComplete' function is used to update the 'completed' status of a specific todo object in the 'todos' array based on its 'id'.
    toggleComplete: (id) => {},
});

// This 'useTodo' custom hook allows easy access to the context's data and functions without having to manually call 'useContext' and provide the TodoContext.
export const useTodo = () => {
    return useContext(TodoContext);
};

// The 'TodoProvider' is a component that uses the TodoContext to wrap around other components that need access to the todo data and functions.
export const TodoProvider = TodoContext.Provider;