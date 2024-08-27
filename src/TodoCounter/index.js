import React from 'react';
import './TodoCounter.css'
import { TodoContext } from '../TodoContex';
function TodoCounter() {
    const {
        complendTodos,
        totalTodos
    } = React.useContext(TodoContext)



    return (
        <h1 className='TodoCounter'>
            Has completado <span> {complendTodos} </span>
            de <span> {totalTodos} </span> TODOs
        </h1>
    )
}
export { TodoCounter };