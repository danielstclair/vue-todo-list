import * as types from './types';
export default {
  [types.ADD_TODO] (state, todo) {
    todo.id = state.todos.length || 0;
    todo.id++;
    state.todos.push(todo);
    state.inputVal = '';
  },
  [types.EDIT_TODO] (state, newVersion) {
    const oldVersion = state.todos.filter(todo => {
      return todo.id === newVersion.id;
    });
    return Object.assign({}, oldVersion, newVersion);
  }
}
