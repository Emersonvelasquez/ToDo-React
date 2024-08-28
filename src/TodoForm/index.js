import React from "react";
import './TodoForm.css'
import { TodoContext } from "../TodoContex";
function TodoForm() {
    const {
        addTodo,
        setOpenModal,
        newTodoValue,
        setnewTodosValue,
        setId,
        id,
        Update,
    } = React.useContext(TodoContext)
    console.log(newTodoValue)
console.log(id)

    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
        setnewTodosValue('')
    }

    const update = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        Update(id, newTodoValue)
        setOpenModal(false)
        setnewTodosValue('')
        setId(false)
    }

    const onCancel = () => {
        setOpenModal(false)
        setnewTodosValue('')
        setId(false)
    }
    return (
        <>
<form action="" className="container" onSubmit={id ? update :onSubmit}>
<div className="input-container">
    <div className="input-content">
        <div className="input-dist">
            <span id="SubscribeTXT">Crea tu </span>
            <div className="input-type">
                <textarea placeholder="Tarea"  type="text" className="input-is" onChange={(event) =>{
                    setnewTodosValue(event.target.value)
                }}
                value={newTodoValue}/>
            </div>
            <button>{ id ? 'Actualizar' : 'Agregar'}</button>
            <button onClick={onCancel} >cancel</button>
        </div>
    </div>
</div>
</form>
        </>
    )
}
export { TodoForm }
