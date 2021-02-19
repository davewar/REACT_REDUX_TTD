import React from 'react'
import TodoItem from './TodoItem'
import {useSelector} from 'react-redux'

const TodoList = () => {

    let todos = useSelector(state => state.todosReducer.todos)
    // let todos = useSelector(state => state.todos)

        // console.log(todos);

    return (
        <div className="container">
            
            {
               todos.map(todo=>{
                   
                   return <TodoItem key={todo.id} todo={todo} />
               }) 
            }
            

         </div>
        
    )
}

export default TodoList
