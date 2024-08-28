import React from "react";
import './TodoForm.css'
import { TodoContext } from "../TodoContex";
function TodoForm() {
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)
    const [newTodoValue , setnewTodosValue] = React.useState('')

    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    const onCancel = () => {
        setOpenModal(false)
    }
    return (
        <>
<form action="" className="container" onSubmit={onSubmit}>
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
            <button>Ingresa</button>
            <button onClick={onCancel} >cancel</button>
        </div>
    </div>
</div>
</form>
        </>
    )
}
export { TodoForm }
