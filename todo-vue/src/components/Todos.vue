<template>
  <div>
    <h1>Todo app</h1>
    <hr/>
    <Counter/>
    <br>
    <hr/>
    <input v-model="newTodoText"/>
    <button @click="createTodo">Create todo</button>
    <br/>
    <select v-model="filter" @change="filterTodo">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not Completed</option>
    </select>
    <Spinner v-if="stopSpinner"/>
    <ul>
      <TodoItem
          v-for="(todo, index) in todos"
          :key="todo.id"
          :todo="todo"
          :index="index"
          @remove="todos.splice(index, 1)"
          @completed="completedTodo"
      />
    </ul>

    <!--    <div v-else>No todos</div>-->
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
import {mapActions, mapGetters} from "vuex";
import Spinner from "./Spinner";
import Counter from "./Counter";


export default {
  components: {
    Spinner,
    TodoItem,
    Counter
  },

  created() {
    this.todos = this[this.$route.query.filter]

  },

  data() {
    return {
      newTodoText: "",
      todos: [],
      filter: this.$route.query.filter

    };
  },

  watch: {
    '$route.query'(query) {
      this.todos = this[query.filter];
    }
  },


  computed: {
    ...mapGetters({
      all: "todo/allTodos",
      stopSpinner: "todo/stopSpinner",
      completed: 'todo/completedTodos',
      'not-completed': 'todo/notCompletedTodos'
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
    filterTodo(value) {

      this.$router.push({query: {filter: value.target.value}})

    },
    completedTodo(todo) {
      this.changeCompleted(
          this.all.map(t =>
              t.id === todo.id ? todo : t
          ));
      this.todos = this[this.$route.query.filter];
    },
    ...mapActions('todo', {
      changeCompleted: "completedTodo",
    }),
  },
}

</script>
