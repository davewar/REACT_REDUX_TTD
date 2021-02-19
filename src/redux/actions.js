export const ADD_TODO = "ADD_TODO"
export const DELETE_TODO = "DELETE_TODO"
export const UPDATE_TODO = "UPDATE_TODO"
export const UPDATE_COMPLETED_TODO = "UPDATE_COMPLETED_TODO"

export const addTodo = (todo) => ({
  type: 'ADD_TODO',
  payload: todo
});

export const deleteTodo = (todoId) => ({
  type: 'DELETE_TODO',
  payload: todoId
});

//change name of todo
export const updateTodo = (todoId) => ({
  type: 'UPDATE_TODO',
  payload: todoId
});

//change completed status
export const updateCompleted = (todoId) => ({
  type: 'UPDATE_COMPLETED_TODO',
  payload: todoId
});