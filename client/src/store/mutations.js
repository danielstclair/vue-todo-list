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
  },
  [types.DELETE_TODO] (state, todoId) {
    let { todos } = state;
    const oldTodo = todos.filter((todo, i) => {
      return todo.id === todoId;
    })[0];
    const index = todos.indexOf(oldTodo);
    return todos.splice(index, 1);
  }
}
