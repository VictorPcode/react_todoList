import React from 'react'
import '../components/css/TodoItem.css'
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";


const TodoItem = (props) => {

 

  return (
    <li className='TodoItem'>
    <span 
    className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
    onClick={props.onComplete}> <AiOutlineCheck/> </span>
    <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
    {props.text}</p>
    
    <span 
    onClick={props.onDelete}
    className="Icon Icon-delete">
    <AiOutlineClose/>
    </span>
    </li>
  )
}

export {TodoItem}