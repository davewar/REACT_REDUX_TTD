import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { deleteTodo, updateTodo, updateCompleted } from '../redux/actions'

const TodoItem = ({todo}) => {

    const [edit, setEdit] = useState(false)
    const [name, setName] = useState(todo.name)

    let dispatch = useDispatch()

        
    return (
        <>
       
            <div className="row m-3 mt-1 border justify-content-center align-items-center rounded bg-light fs-3">
                            
                                   
                <div className="col-xs-6 col-md-2 " >

                    <div className="p-2 "># {todo.id}</div>
                    <label className="p-1">Completed</label>

                    <input className="" type="checkbox"
                        onClick={()=>dispatch(updateCompleted(todo.id))}
                    /> 


                </div>
            
                <div className="col-xs-8  col-md-7 pb-2 mb-3 " >
                    {
                    edit ?  
                    <input type="text"
                    value={name}
                        onChange={(e)=>setName(e.target.value)}
                    className="form-control-lg col-12"
                    />                           
                    
                    : <h4 className={todo.completed ? "todo-complete overflow-hidden p-2 mt-2 mb-2": "overflow-hidden p-2 mt-2 mb-2" }>{todo.name}</h4>

                    }
                    
                    </div>

                    <div className="col-xs-6 col-md-2 col-lg-3 "  >
                
                        <button className="btn btn-primary m-1 " onClick={()=>{ dispatch(updateTodo({...todo, name: name }))

                            if(edit){
                                setName(todo.name)
                            }
                            setEdit(!edit)

                        }}>{edit ? "Update" :"Edit"}</button>
                        
                        <button className="btn btn-danger m-1 " onClick={()=> dispatch(deleteTodo(todo.id))}>Delete</button>
                </div>
            </div>                      
               
        </>
        
    )
}

export default TodoItem
