import React from "react";
import { TodoContext } from "../TodoContext";
import {TodoCounter} from '../components/TodoCounter'
import { TodoSearch } from "../components/TodoSearch";
import {TodoList} from '../components/TodoList'
import { TodoItem } from "../components/TodoItem";
import {TodoForm} from "../components/todoForm";
import { TodoButton } from "../components/TodoButton";
import { Modal } from "../components/modal";
import { TodoError, TodoLoading } from "../components/exoEsqueleto";

function App() {

  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
} = React.useContext(TodoContext)

  return (

      <React.Fragment>

        {!!openModal && (
           <Modal><TodoForm/></Modal>
        )}


        <TodoCounter />
        <TodoSearch />
      
             <TodoList>
             {error && <TodoError error={error}/>}
             {loading && <TodoLoading/>}
             {/* {!loading && !searchedTodos.lenght && <TodoEmpty/>} */}

             {searchedTodos.map((todo) => (
               <TodoItem
                 key={todo.text}
                 text={todo.text}
                 completed={todo.completed}
                 onComplete={() => completeTodo(todo.text)}
                 onDelete={() => deleteTodo(todo.text)}
               />
             ))}
           </TodoList>


          

        <TodoButton setOpenModal={setOpenModal}/>

       
      </React.Fragment>
 
  );
}

export { App };
