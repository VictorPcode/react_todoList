import React from 'react'
import './TodoExo.css'

function TodoError({error}){
    return <p>{error}</p>
}



function TodoLoading(){
    return(
        <div className='LoadingTodo-Container'>
            <span className='LoadingTodo-CompleteIcion'></span>
            <p className='LoadingTodo-Text'>Cargando ...</p>
            <span className='LoadingTodo-DeleteIcon'></span>
        </div>
    )
}

// function TodoEmpty(){
//     return <p>!Crea una TAREA!</p>
// }

export { TodoError, TodoLoading}
