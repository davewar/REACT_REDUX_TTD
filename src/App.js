import React from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import 'bootstrap/dist/css/bootstrap.css'

const App = () => {

    return (
        <div className="container-fluid mt-5" >
                        
            <TodoInput />
            <TodoList />

        </div>
    )
}

export default App
