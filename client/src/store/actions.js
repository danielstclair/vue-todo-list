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

export function toggleTodos ({ commit }, bool) {
  return commit(types.TOGGLE_TODOS, bool);
}

export function toggleComplete ({ commit }) {
  return commit(types.TOGGLE_COMPLETE);
}

// This is our function for deleting items. It accepts two arguments:
// 1. Our commit function.
// 2. An array of todo items.
export function deleteTodo ({ state, commit }, todos) {
  return commit(types.DELETE_TODO, todos);
}
