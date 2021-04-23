<template>
  <div>
    <span>Лічильник кліків — {{ count }}</span>
    <br>
    <button @click="count++">Kлік</button>
  </div>


</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  watch: {
    count(count) {
      return console.log('натиснуто на кнопку',count)
    },
  }
}
</script>
<style scoped>

</style>
