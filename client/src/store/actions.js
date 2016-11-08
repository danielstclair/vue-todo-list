import * as types from './types';

export function addTodo ({ commit }, { target: { value: content } }) {
  const todo = {
    content,
    status: false
  }
  return commit(types.ADD_TODO, todo);
}

export function editTodo ({ commit }, todo) {
  return commit(types.EDIT_TODO, todo)
}

// This is our function for deleting items. It accepts two arguments:
// 1. Our commit function.
// 2.
export function deleteTodo ({ state, commit }, todos) {
  return commit(types.DELETE_TODO, todos);
}
