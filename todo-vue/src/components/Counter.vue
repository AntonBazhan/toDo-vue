<template>
  <div>
    <span>Лічильник кліків — {{ count }}</span>
    <br>
    <button v-on:click="count++">Kлік</button>
  </div>


</template>

<script>
export default {
  data: function () {
    return {
      count: 0
    }
  },
  watch: {
    count: function (count) {
      return console.log('натиснуто на кнопку',count)
    },
  }
}
</script>
<style scoped>

</style>
