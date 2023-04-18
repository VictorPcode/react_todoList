import React from 'react'
import '../components/css/TodoButton.css'


const TodoButton = (props) => {

  const onClickButton = () => {
    
    props.setOpenModal(prevState => !prevState);

  }

  return (
    <button 
      className='TodoButton'
      onClick={onClickButton}
    >
      +
    </button>
  )
}

export {TodoButton}