import React from "react";
import { useLocalStorage } from "./useLocalStorage";
const TodoContext = React.createContext();


function TodoProvider({ children }) {

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage("TODOS_V1", [])

    const {
        item: contador,
        saveItem: saveContador,
    } = useLocalStorage("CONTADOR_V1", 0)




    const [searchValue, setsearValue] = React.useState('');

    const [openModal, setOpenModal] = React.useState(false);

    const complendTodos = todos.filter(
        todos => !!todos.completed
    ).length

    const totalTodos = todos.length

    const searchedTodos = todos.filter(
        (todo) => {
            return todo.text.toLowerCase().includes
                (searchValue.toLocaleLowerCase())
        }
    )

    const addTodo = (text) =>{
        const newTodos = [...todos]
            newTodos.push({
                id : contador + 1,
                text,
                completed : false,
                likes : 0
            })
            saveContador(contador + 1)
            saveTodos(newTodos)
    }




    const completeTodo = (id) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.id === id
        );
        if (newTodos[todoIndex].completed === true) {
            newTodos[todoIndex].completed = false;
        } else {
            newTodos[todoIndex].completed = true;
        }
        saveTodos(newTodos);
    }

    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos);
    }

    const like = (id) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.id === id
        );
        newTodos[todoIndex].likes += 1
        saveTodos(newTodos);
    }
    const nolikes = (id) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.id === id
        );
        if (newTodos[todoIndex].likes > 0) {
            newTodos[todoIndex].likes -= 1
            saveTodos(newTodos);
        } else {
            return 0
        }
    }



    return (
        <TodoContext.Provider value={{
            loading,
            error,
            complendTodos,
            totalTodos,
            searchValue,
            setsearValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            like,
            nolikes,
            openModal,
            setOpenModal,
            addTodo,
        }} >
            {children}
        </TodoContext.Provider>
    )

}

export { TodoContext, TodoProvider };