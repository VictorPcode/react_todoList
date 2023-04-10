import React from 'react'
import '../components/css/TodoButton.css'
const msg = 'hola'
const onClickButton = (msg) => {
  alert(msg);
}
const TodoButton = () => {
  return (
    <button 
      className='TodoButton'
      onClick={() => onClickButton(msg)}
    >
      +
    </button>
  )
}

export {TodoButton}