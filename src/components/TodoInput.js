import React, {useState} from 'react'
import { addTodo } from '../redux/actions'
import {v1 as uuid} from 'uuid'
import { useDispatch } from 'react-redux'


const TodoInput = () => {

     const [name,setName]= useState("")
     let dispatch = useDispatch()
     let id = uuid().slice(0,3)

     

    return (
        < >

            <div className="container border border-5 rounded ">
                <div className="row  my-row-1 justify-content-center align-items-center ">
                    <h1 className="text-center text-primary text-uppercase text-spacing">Todo list</h1>
                
                </div>
        
            </div>
            

            <div className="row mt-4 mb-3 mx-2 fs-1 ">
                    <input type="text"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    className="col form-control-lg"
                    />
                    <button className="btn btn-primary mx-2" onClick={ ()=>{
                        
                                //no todo-exit
                                if(!name){
                                    return
                                }
                                dispatch(
                                    addTodo({id:id,name: name, completed: false})
                                );
                            
                            setName("");
                        }
                        }>Add</button>

            </div>
        </>
    )
}

export default TodoInput
