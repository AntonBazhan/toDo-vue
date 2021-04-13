<template>
  <div>
    <li class="item-todo" >
<span :class="{done:todo.completed}">
      <input  type="checkbox" :checked="todo.completed">
      <strong >{{ index + 1}}</strong>
{{ todo.title }}
      </span>
      <button>&times;</button>
    </li>
  </div>

</template>

<script>
export default {
  props: {
    todo: {
      id: Number,
      title: String,
      completed: Boolean
    },
    index:Number
  }
}

</script>
<style scoped>
.item-todo{
  list-style: none;
  margin: 10px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
}

.done{
  text-decoration: line-through;
}
</style>
