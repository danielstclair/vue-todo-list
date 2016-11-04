<template>
  <section class="todoapp">
  	<header class="header">
  		<h1>todos</h1>
			<input
        v-model="inputVal"
        @keyup.enter="onSubmit"
        type="text"
        class="new-todo"
        autofocus
        autocomplete="off"
        placeholder="What needs to be done?">
  	</header>
		<todo-list
      :todos="todos"
      :toggleTodo="toggleTodo"></todo-list>
  </section>
</template>

<script>
import TodoList from './TodoList'

export default {
  name: 'todoapp',
  components: {
    'todo-list': TodoList
  },
  data () {
    return {
      todos: [],
      inputVal: null
    };
  },
  methods: {
    onSubmit ({ target: { value: todo } }) {
      // e.preventDefualt();
      if (todo || todo.length) {
        this.todos.push({ content: todo, status: false });
        this.inputVal = null;
      } else {
        console.warn('You must enter a todo');
      }
    },
    toggleTodo (todo) {
      console.log(todo);
      todo.completed = !todo.completed
      console.log(todo);
    }
  }
}
</script>

<style>

</style>
