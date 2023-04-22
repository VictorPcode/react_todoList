import React from 'react'
import '../components/css/TodoButton.css'
import { AiOutlinePlusCircle } from "react-icons/ai";

const TodoButton = (props) => {

  const onClickButton = () => {
    
    props.setOpenModal(prevState => !prevState);

  }

 

  return (
    <button 
      className='TodoButton'
      onClick={onClickButton}
    >
      < AiOutlinePlusCircle/>

    </button>
  )
}

export {TodoButton}