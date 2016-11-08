<template lang="html">
  <section class="main" v-if="todos.length">
    <input class="toggle-all" type="checkbox" />
    <ul class="todo-list">
      <li
        class="todo"
        v-for="todo in todos"
        v-bind:class="{completed: todo.completed}"
        >
        <div class="view">
          <input v-on:click="toggleTodo(todo)" type="checkbox" class="toggle" />
          <label>{{ todo.content }}</label>
          <button class="destroy"></button>
        </div>
        <input class="edit" type="text" v-model="todo.title" v-todo-focus="todo == editedTodo" @blur="doneEdit(todo)" @keyup.enter="doneEdit(todo)" @keyup.esc="cancelEdit(todo)">
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ['todos', 'editTodo'],
  methods: {
    toggleTodo (todo) {
      todo.status = !todo.status;
      this.editTodo(todo);
    }
  }
}
</script>

<style lang="css">
</style>
