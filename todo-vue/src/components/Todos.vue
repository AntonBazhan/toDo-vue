<template>
  <div>
    <h1>Todo app</h1>
    <hr />

    <input v-model="newTodoText" />
    <button @click="createTodo">Create todo</button>
    <br />
    <select v-if="filterTodos.length" v-model="filter">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not Completed</option>
    </select>
    <Spinner v-if="stopSpinner" />
    <ul v-if="filterTodos.length">
      <TodoItem
        v-for="(todo, index) in filterTodos"
        :key="todo.id"
        :todo="todo"
        :index="index"
        @remove="todos.splice(index, 1)"
      />
    </ul>

    <div v-else>No todos</div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
import { mapActions, mapGetters } from "vuex";
import Spinner from "./Spinner";

export default {
  components: {
    Spinner,
    TodoItem,
  },

  async created() {
    await this.getTodo();
  },

  data() {
    return {
      newTodoText: "",
      filter: "all",
    };
  },
  computed: {
    filterTodos() {
      switch (this.filter) {
        case "all":
          return this.todos;

        case "completed":
          return this.todos.filter((t) => t.completed);

        case "not-completed":
          return this.todos.filter((t) => !t.completed);
      }
    },
    ...mapGetters({
      todos: "todo/allTodos",
      stopSpinner: "todo/stopSpinner",
    }),
  },

  methods: {
    createTodo() {
      if (this.newTodoText.trim()) {
        this.todos.push({
          id: Date.now(),
          title: this.newTodoText,
          completed: false,
        });
        this.newTodoText = "";
      }
    },
    ...mapActions("todo", {
      getTodo: "fetchTodos",
    }),
  },
};
</script>
