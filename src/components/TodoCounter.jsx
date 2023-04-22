import React from "react";
import '../components/css/TodoCounter.css'
import { TodoContext } from "../TodoContext";

function TodoCounter(){

    const {totalTodos, completedTodos} = React.useContext(TodoContext);
    
    return (
        <h2 className='TodoCounter'>Se completo {completedTodos} de {totalTodos} Tarea (s)</h2>
    )
}

export {TodoCounter};