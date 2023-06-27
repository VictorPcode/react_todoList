import React from 'react'
import '../exoEsqueleto/TodoExo.css'

function TodoError({error}){
    return {error}
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
