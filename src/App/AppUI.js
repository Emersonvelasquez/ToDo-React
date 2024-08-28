import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../Todoitem';
import { CreateTodoButtom } from '../CreateTodoButtom';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from '../TodoContex';
import React from 'react';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        like,
        nolikes,
        openModal,
        Edit,
        searchValue
    } = React.useContext(TodoContext)
    return (
        <>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {loading && <TodosLoading />}
                {error && <TodosError />}
                {(!loading && searchedTodos.length === 0 && searchValue.length ===0 ) && <EmptyTodos />}
                {(searchValue.length > 0 && searchedTodos.length === 0) && <p>no hay coincidencias</p>}
                {(loading && searchedTodos)}
                {searchedTodos.map(todo => (
                    <TodoItem key={todo.id}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.id)}
                        onDelete={() => deleteTodo(todo.text)}
                        likes={todo.likes}//estamos pasando la funcion
                        like={() => like(todo.id)}//estamos esperado aque se ejecute la funcion
                        nolikes={() => nolikes(todo.id)}
                        onEdit = {()=> Edit(todo.id)}
                    />
                ))}
            </TodoList>
            <CreateTodoButtom />
            {openModal && (
                <Modal className="modal">
                    <TodoForm/>
                </Modal>
            )}



        </>
    )
}

export { AppUI }




