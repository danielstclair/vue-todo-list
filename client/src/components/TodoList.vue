<template lang="html">
  <section class="main" v-if="todos.length">
    <input class="toggle-all" type="checkbox" @click="toggleAll" />
    <ul class="todo-list">
      <li
        class="todo"
        v-for="todo in todoList"
        :key="todo.id"
        v-bind:class="{completed: todo.status, editing: todo.isEditing}">
        <div class="view" v-if="!todo.isEditing">
          <input v-model="todo.status"
            @click="toggleTodo(todo)"
            type="checkbox"
            class="toggle" />
          <label @dblclick="startEdit(todo)">{{ todo.content }}</label>
          <button @click="deleteTodo([todo])" class="destroy"></button>
        </div>
        <!-- This is the input for editing Todo Content. Will implement later. -->
        <input class="edit"
          type="text"
          v-if="todo.isEditing"
          v-model="todo.content"
          @blur="doneEdit(todo)"
          @keyup.enter="doneEdit(todo)"
          @keyup.esc="cancelEdit(todo)">
      </li>
    </ul>
    <footer class="footer">
      <span class="todo-count">
        <strong>{{ itemsLeft }}</strong> items left
      </span>
      <ul class="filters">
        <li
          v-for="filter in filters"
          @click="selectFilter(filter)">
          <a href="#"
            :class="{ selected : filter.isSelected }">
            {{ filter.title }}
          </a>
        </li>
      </ul>
      <button v-if="!itemsLeft"
        @click="deleteTodo(completedTodos)"
        class="clear-completed">
        Clear completed
      </button>
    </footer>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  props: ['todos'],
  data () {
    return {
      currentTodo: null,
      isEditing: false,
      filters: [
        { title: 'All', isSelected: true },
        { title: 'Active', isSelected: false },
        { title: 'Completed', isSelected: false }
      ]
    };
  },
  methods: {
    startEdit (todo) {
      todo.isEditing = true;
      this.currentTodo = todo.content;
    },
    doneEdit (todo) {
      todo.isEditing = false;
      this.currentTodo = null;
      return this.editTodo(todo);
    },
    cancelEdit (todo) {
      todo.isEditing = false;
      todo.content = this.currentTodo;
      this.currentTodo = null;
    },
    toggleTodo (todo) {
      todo.status = !todo.status;
      this.editTodo(todo);
    },
    selectFilter (filter) {
      this.filters.map(filter => {
        filter.isSelected = false
        return filter;
      });
      filter.isSelected = true;
    },
    deleteTodo (todos) {
      return this.deleteTodo(todos);
    },
    toggleAll () {
      this.toggleComplete();
      const status = this.todos.map(todo => {
        return todo.status;
      });
      if (status.indexOf(false) > -1) {
        return this.toggleTodos(true);
      }
      return this.toggleTodos(false);
    },
    ...mapActions(['deleteTodo', 'editTodo', 'toggleComplete', 'toggleTodos'])
  },
  computed: {
    todoList () {
      const f = this.filters.filter(f => f.isSelected === true)[0];
      switch (f.title) {
        case 'All':
        return this.todos.map(todo => todo);
        case 'Active':
        return this.todos.filter(todo => todo.status === false);
        case 'Completed':
        return this.completedTodos;
      }
      return [];
    },
    completedTodos () {
      return this.todos.filter(todo => todo.status === true);
    },
    itemsLeft () {
      return this.todoList.filter(todo => {
        return todo.status === false;
      }).length;
    },
    ...mapGetters(['todos', 'isComplete'])
  }
}
</script>
