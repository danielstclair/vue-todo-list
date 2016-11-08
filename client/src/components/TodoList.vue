<template lang="html">
  <section class="main" v-if="todos.length">
    <input class="toggle-all" type="checkbox" />
    <ul class="todo-list">
      <li
        class="todo"
        v-for="todo in todos"
        :key="todo.id"
        v-bind:class="{completed: todo.status}"
        >
        <div class="view">
          <input @click="toggleTodo(todo)" type="checkbox" class="toggle" />
          <label>{{ todo.content }}</label>
          <button @click="deleteTodo(todo)" class="destroy"></button>
        </div>
        <!-- This is the input for editing Todo Content. Will implement later. -->
        <!-- <input class="edit" type="text" v-model="todo.title" @blur="doneEdit(todo)" @keyup.enter="doneEdit(todo)" @keyup.esc="cancelEdit(todo)"> -->
      </li>
    </ul>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: ['todos', 'editTodo'],
  methods: {
    toggleTodo (todo) {
      todo.status = !todo.status;
      this.editTodo(todo);
    },
    ...mapActions(['deleteTodo'])
  }
}
</script>

<style lang="css">
</style>
