<template>
  <div>
    <h1>Todo app</h1>
    <hr />
<Counter/>
    <br>
    <hr />
    <input v-model="newTodoText" />
    <button @click="createTodo">Create todo</button>
    <br />
    <select  @change="filterTodo">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not Completed</option>
    </select>
    <Spinner v-if="stopSpinner" />
    <ul >
      <TodoItem
        v-for="(todo, index) in todos"
        :key="todo.id"
        :todo="todo"
        :index="index"
        @remove="todos.splice(index, 1)"
      />
    </ul>

<!--    <div v-else>No todos</div>-->
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
import { mapActions, mapGetters } from "vuex";
import Spinner from "./Spinner";
import Counter from "./Counter";

// const router = new VueRouter({
//   routes: [
//     { path: '/',  props: (route) => ({ query: route.query.q }) }
//   ]
// })

export default {
  components: {
    Spinner,
    TodoItem,
    Counter
  },

  // async created() {
  //   await this.getTodo();
  // },



  data() {
    return {
      newTodoText: "",
      filter: "all",
    };
  },
  computed: {
//     filterTodos() {
//       // let b = {
//       //   all: this.allTodos,
//       //   completed: this.completedTodos,
//       //   notCompleted: this.notCompletedTodos
//       // }
// return this[this.filter];
    //
    //
    //
    // },


    ...mapGetters({
      todos: "todo/allTodos",
      stopSpinner: "todo/stopSpinner",
      // all: 'todo/allTodos',
      // completed: 'todo/completedTodos',
      // 'not-completed': 'todo/notCompletedTodos'
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
    filterTodo(value){
      console.log(value.target.value)
      if (value.target.value === 'completed'){
        // todos.filter((t) => t.completed
        console.log('5646567')
      }
      if(value.target.value === 'not-completed'){
        // todos.filter((t) => !t.completed
        console.log('11111')
      }
    },
    ...mapActions("todo", {
      getTodo: "fetchTodos",
    }),
  },
};
</script>
