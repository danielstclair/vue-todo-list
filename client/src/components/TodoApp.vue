<template>
  <section class="todoapp">
  	<header class="header">
  		<h1>todos</h1>
			<input
        v-model="inputVal"
        @keyup.enter="addTodo"
        type="text"
        class="new-todo"
        autofocus
        autocomplete="off"
        placeholder="What needs to be done?">
  	</header>
		<todo-list
      :todos="todos"></todo-list>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TodoList from './TodoList'

export default {
  name: 'todoapp',
  components: {
    'todo-list': TodoList
  },
  methods: {
    ...mapActions(['addTodo'])
  },
  computed: {
    ...mapGetters(['inputVal', 'todos'])
  }
}
</script>

<style>

</style>
