<template>
  <div>

    <h1>Todo app</h1>
    <hr>


    <input v-model="newTodoText">
    <button @click="createTodo">Create todo</button>
    <br>
    <select v-if="filterTodos.length"
            v-model="filter">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not Completed</option>
    </select>

    <ul v-if="filterTodos.length">
      <TodoItem
          v-for="(todo,index) in filterTodos"
          :key="todo.id"
          :todo="todo"
          :index="index"
          @remove="todos.splice(index, 1)"/>
    </ul>

    <div v-else>No todos</div>

  </div>
</template>

<script>

import TodoItem from "./TodoItem";
import {mapActions} from"vuex";
export default {
  components: {
    TodoItem
  },

  async created() {
    await this.getTodo();

  },

  data() {
    return {
      newTodoText: '',
      todos: [
        // {
        //   "userId": 1,
        //   "id": 1,
        //   "title": "delectus aut autem",
        //   "completed": false
        // },
        // {
        //   "userId": 1,
        //   "id": 2,
        //   "title": "quis ut nam facilis et officia qui",
        //   "completed": false
        // },
        // {
        //   "userId": 1,
        //   "id": 3,
        //   "title": "fugiat veniam minus",
        //   "completed": false
        // },
        // {
        //   "userId": 1,
        //   "id": 4,
        //   "title": "et porro tempora",
        //   "completed": true
        // },
        // {
        //   "userId": 1,
        //   "id": 5,
        //   "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        //   "completed": false
        // }
      ],
      filter: 'all'
    }
  },




  methods: {
    createTodo() {
      if (this.newTodoText.trim()) {
        this.todos.push({
              id: Date.now(),
              title: this.newTodoText,
              completed: false
            }
        )
        this.newTodoText = ''
      }
    },
    filterTodos() {
      switch (this.filter) {
        case "all":
          return this.todos;
        case "completed":
          return this.todos.filter(t => t.completed)
        case "not-completed":
          return this.todos.filter(t => !t.completed)
      }
    },
    ...mapActions('todo', {
      getTodo: 'fetchTodos'
    })
  }
}
</script>