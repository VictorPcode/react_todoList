import React from "react";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { TodoButton } from "../components/TodoButton";


function App({
    loading,
    error,
    totalTodos,
    completedTodos,
     searchValue,
     setSearchValue,
     searchedTodos,
     completeTodo,
     deleteTodo

}){

   return (

    <div className="App">
    <React.Fragment>
    <TodoCounter 
    total={totalTodos}
    completed={completedTodos}
    />
    <TodoSearch 
      searchValue={searchValue} 
      setSearchValue={setSearchValue}
    />
    
    <TodoList>

        {error && <p>error!! Recargue la pagina.</p>}
        {loading && <p>cargando...</p>}
        {(!loading && !searchedTodos.lenght) && <p>!Crea tu primera TAREA.</p>}
        

      {searchedTodos.map(todo => (
        <TodoItem 
        key={todo.text} 
        text={todo.text}
        completed={todo.completed}
        onComplete={() => completeTodo(todo.text)}
        onDelete={() => deleteTodo(todo.text)}/>
      ))}
    </TodoList>


    <TodoButton />
    
    </React.Fragment>
  </div>

   ); 


}

export {App}