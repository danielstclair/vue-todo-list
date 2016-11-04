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
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ['todos', 'toggleTodo'],
  data () {
    return {
      message: 'Todos will go here'
    };
  }
}
</script>

<style lang="css">
</style>
