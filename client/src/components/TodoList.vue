<template lang="html">
  <section class="main" v-if="todos.length">
    <input class="toggle-all" type="checkbox" />
    <ul class="todo-list">
      <li
        class="todo"
        v-for="todo in todoList"
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
    <footer class="footer">
      <span class="todo-count">
        <strong>{{ itemsLeft }}</strong> items left
      </span>
      <ul class="filters">
        <li
          v-for="filter in filters"
          @click="selectFilter(filter)">
          <a href="#"
            v-bind:class="{ selected : filter.isSelected }">
            {{ filter.title }}
          </a>
        </li>
      </ul>
    </footer>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: ['todos', 'editTodo'],
  data () {
    return {
      filters: [
        { title: 'All', isSelected: true },
        { title: 'Active', isSelected: false },
        { title: 'Completed', isSelected: false }
      ]
    };
  },
  methods: {
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
    ...mapActions(['deleteTodo'])
  },
  computed: {
    itemsLeft () {
      return this.todoList.filter(todo => {
        return todo.status === false;
      }).length;
    },
    todoList () {
      const f = this.filters.filter(f => f.isSelected === true)[0];
      switch (f.title) {
        case 'All':
        return this.todos.map(todo => todo);
        case 'Active':
        return this.todos.filter(todo => todo.status === false);
        case 'Completed':
        return this.todos.filter(todo => todo.status === true)
      }
      return [];
    }
  }
}
</script>
