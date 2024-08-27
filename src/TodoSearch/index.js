import React from 'react';
import './TodoSearch.css'
import { TodoContext } from '../TodoContex';



function TodoSearch() {
    const {
        searchValue,
        setsearValue
    } = React.useContext(TodoContext)
    
    return (
        <input
            placeholder="cortar cebolla"
            className="TodoSearch"
            value={searchValue}
            onChange={(event) => {
                setsearValue(event.target.value)
            }}></input>
    )
}

export { TodoSearch };
