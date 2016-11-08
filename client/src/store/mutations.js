import * as types from './types';
export default {
  [types.ADD_TODO] (state, todo) {
    todo.id = state.todos.length || 0;
    todo.id++;
    state.inputVal = '';
    return state.todos.push(todo);
  },
  [types.EDIT_TODO] (state, newVersion) {
    const oldVersion = state.todos.filter(todo => {
      return todo.id === newVersion.id;
    });
    return Object.assign({}, oldVersion, newVersion);
  },
  [types.TOGGLE_TODOS] (state, bool) {
    return state.todos.map(todo => {
      todo.status = bool;
      return todo;
    });
    // return state.todos.map()
  },
  [types.TOGGLE_COMPLETE] (state) {
    state.isComplete = !state.isComplete;
    return;
  },
  [types.DELETE_TODO] (state, completedTodos) {
    let { todos } = state;
    completedTodos.map(ct => {
      const index = todos.indexOf(ct);
      if (index > -1) {
        return todos.splice(index, 1);
      }
    });
    // Reset since list is completed
    if (!todos.length) {
      state.isComplete = false;
    }
  }
}
