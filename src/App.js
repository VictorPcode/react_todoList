// import './App.css';
import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { TodoButton } from "./components/TodoButton";



const todos = [{
  text: 'Ir de compra', completed: true,
}, {
  text: 'Ir a comprar comida a los gatos', completed: false,
}, {
  text: 'Ir a buscar a cocoa', completed: false,
}]

function App(props) {
  return (
    <div className="App">
      <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text}/>
        ))}
        
      </TodoList>


      <TodoButton />
      
      </React.Fragment>
    </div>
  );
}

export default App;
