<template>
  <li class="item-todo">
    <span :class="{ done: todo.completed }">
      <input
        type="checkbox"
        :checked="todo.completed"
        @change="todo.completed = !todo.completed"
      />

      <strong>{{ index + 1 }}</strong>

      {{ todo.title }}
    </span>

    <button @click="$emit('remove')">&times;</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      id: Number,
      title: String,
      completed: Boolean,
    },
    index: Number,
  },
  // beforeDestroy() {
  //   console.log('3253252');
  // }
};
</script>
<style scoped>
.item-todo {
  list-style: none;
  margin: 10px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
}

.done {
  text-decoration: line-through;
}
</style>
