import {ADD_TODO, DELETE_TODO,UPDATE_TODO } from './actions'
import {todos} from './states'

const todosReducer = (state = todos, action) => {

        switch (action.type) {
                case 'ADD_TODO':
                return {
                    ...state,
                    todos: [...state.todos, action.payload]
                };

                case 'DELETE_TODO':
                return {
                    ...state,
                 todos: state.todos.filter((todo) => todo.id !== action.payload)
                };

                case 'UPDATE_COMPLETED_TODO':                        
                return {
                    ...state,
                    todos: state.todos.map((todo) => todo.id === action.payload ? { ...todo, completed: !todo.completed } 
                        : todo
                    )
                };

                case 'UPDATE_TODO':
                             
                return {
                    ...state,
                    todos: state.todos.map((todo) => todo.id === action.payload.id ? { ...todo, name: action.payload.name } 
                        : todo
                    )
                };
             
                // case 'UPDATE_TODO':
                                 
                //     return {
                //     ...state,
                //         todos: state.todos.map((todo) => {
                //             if(todo.id === action.payload.id){
                //                
                //                return  { ...todo, name: action.payload.name }
                //             }
                //              return todo
                //         })
                                 
                //     };

                default:
                return state;

            }



}

export default todosReducer