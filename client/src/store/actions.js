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
