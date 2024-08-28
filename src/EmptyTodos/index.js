import { TodoContext } from '../TodoContex';
import './Em.css'
import React from "react";
function EmptyTodos() {
    const { searchValue, searchedTodos } = React.useContext(TodoContext)
    return (
        <>
            {
                searchValue != searchedTodos ?
                    <p>No hay coincidencias</p>
                    : <div className="loader">
                        <p className='loade'>Crea tu TODO</p>
                    </div>
            }
        </>
    )
}
export { EmptyTodos }