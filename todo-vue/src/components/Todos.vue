<template>
<div>
  <h1>Todo app</h1>
  <hr>
  <form @submit.prevent="createTodo">
    <input v-model="newTodoText">
    <button>Create todo</button>
  </form>
    <ul>
<TodoItem
    v-for="(todo,index) of todos"
    :todo="todo"
    :index="index"
    @remove="todos.splice(index, 1)"/>
  </ul>
</div>
</template>

<script>
import Vue from "vue";
import TodoItem from "./TodoItem";
export default {
  components: {
    TodoItem
  },
  methods:{
    createTodo: function () {
      if (this.newTodoText.trim()) {
        this.todos.push({
              id: Date.now(),
              title: this.newTodoText,
              completed: false
            }
        )
        this.newTodoText = ''

      }
    }

  },

    data(){
    return{
      newTodoText: '',
      todos: [
        {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": false
        },
        {
          "userId": 1,
          "id": 2,
          "title": "quis ut nam facilis et officia qui",
          "completed": false
        },
        {
          "userId": 1,
          "id": 3,
          "title": "fugiat veniam minus",
          "completed": false
        },
        {
          "userId": 1,
          "id": 4,
          "title": "et porro tempora",
          "completed": true
        },
        {
          "userId": 1,
          "id": 5,
          "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
          "completed": false
        }
        ]
    }
}
}
</script>


<style scoped>
.list-todo{

}

</style>