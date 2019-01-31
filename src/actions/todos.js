import API from 'goals-todos-api'
export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

export function addTodo (todo) {
      return {
        type: ADD_TODO,
        todo,
      }
    }
export function removeTodo (id) {
      return {
        type: REMOVE_TODO,
        id,
      }
    }
export function toggleTodo (id) {
      return {
        type: TOGGLE_TODO,
        id,
      }
    }

export function handleAddTodo(name,cb) {
      return (dispatch) => {
                return API.saveTodo(name)
          .then((todo) => {
            dispatch(addTodo(todo))
            cb()
          })
          .catch(() => {
            alert('Oops !!, there was an error !!')
          })
      }
    }
export function handleDeleteTodo (todo) {
      return (dispatch) => {
        dispatch(removeTodo(todo.id))

        return API.deleteTodo(todo.id)
          .catch(() => {
          dispatch(addTodo(todo))
          alert('An error occurred')
          })
      }
    }

export function handleToggle(id){
      return (dispatch) => {
          dispatch(toggleTodo(id))

          return API.saveTodoToggle (id)
            .catch(() => {
              dispatch(toggleTodo(id))
              alert('An error occurred')
            })
      }
    }