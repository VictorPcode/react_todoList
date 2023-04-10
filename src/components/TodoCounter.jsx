import React from "react";
import '../components/css/TodoCounter.css'

function TodoCounter({total, completed}){
    
    return (
        <h2 className='TodoCounter'>Has completado {completed} de {total} Tareas</h2>
    )
}

export {TodoCounter};