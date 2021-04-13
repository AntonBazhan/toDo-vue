<template>
<div>
  <h1>Todo app</h1>
  <hr>
  <form @submit.prevent="">
    <input >
    <button>Create todo</button>
  </form>
    <ul>
<TodoItem
    v-for="(todo,index) of todos"
    :todo="todo"
:index="index"/>
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

    data(){
    return{
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