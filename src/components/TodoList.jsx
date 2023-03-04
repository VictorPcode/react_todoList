import React from 'react'
import '../components/TodoList.css'
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