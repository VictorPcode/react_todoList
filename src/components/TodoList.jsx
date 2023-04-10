import React from 'react'
import '../components/css/TodoList.css'
const TodoList = (props) => {
  return (
    <section>
            <ul>
                {props.children}
            </ul>
    </section>
    );
}

export {TodoList}