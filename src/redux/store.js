import { createStore, combineReducers } from 'redux'
import todosReducer from './reducer'


const reducers = combineReducers({todosReducer})

export let store = createStore(reducers)
