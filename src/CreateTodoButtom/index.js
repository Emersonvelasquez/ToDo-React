import React from 'react';
import './CreateTodoButtom.css'
import { TodoContext } from '../TodoContex';
function CreateTodoButtom(){
    const {
        openModal,
        setOpenModal
    } = React.useContext(TodoContext)
    return(
        <button className='CreateTodoButtom' onClick={() =>{
            openModal ==true ?setOpenModal(false):setOpenModal(true)
            
            }}>
            +
        </button>
    )
}
export { CreateTodoButtom };