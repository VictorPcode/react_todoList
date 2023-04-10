import React,{useEffect} from "react";
import { App } from "./App";


// const defaultTodos = [{
//   text: 'Ir de compra', completed: true,
// }, {
//   text: 'Ir a comprar comida a los gatos', completed: false,
// }, {
//   text: 'Ir a buscar a cocoa', completed: true,
// }, {
//   text: 'hacer este proyecto', completed: false,
// }]

function useLocalStorage(itemName, inititalValue){
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(inititalValue);

  React.useEffect(
    () => {
      setTimeout(() => {
        try{
          const localStorageItem = localStorage.getItem('itemName');
        let parsedItem;
        
        if(!localStorageItem){
         localStorage.setItem('itemName', JSON.stringify(inititalValue));
         parsedItem = inititalValue;
        }else{
         parsedItem = JSON.parse(localStorageItem)
        }

        setItem(parsedItem);
        setLoading(false);
        }catch(error){
          setError(error)
        }
      }, 1000)
    }
  );
 

  ;

  const saveItem = (newItem) => {
    try{
      const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem('itemName', stringifiedItem);
    setItem(newItem)
    }catch(error){
      setError(error)
    }
  };

  return{
    item, 
    saveItem,
    loading,
    error,
  }  

}

function AppLogica(props) {

  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
   } = useLocalStorage('todosV1', []);
  
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
 
  let searchedTodos = [];
  if(!searchValue.length >= 1){
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText)
    })
   
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }



  return (
   <App
   error={error}
   loading={loading}
   totalTodos={totalTodos}
   completedTodos={completedTodos}
    searchValue={searchValue} 
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    
    />
  );
}

export default AppLogica;
