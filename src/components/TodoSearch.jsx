import React from 'react'
import '../components/css/TodoSearch.css'
import { TodoContext } from '../TodoContext';



const TodoSearch = () => {

  const {searchValue, setSearchValue} = React.useContext(TodoContext)

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };
  return (
    <input 
    onChange={onSearchValueChange}
    value={searchValue}
    className='TodoSearch' 
    placeholder="Escribe tu tarea Aqui" />
  );

}

export {TodoSearch}