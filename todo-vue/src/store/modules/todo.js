export default {
  namespaced: true,
  actions: {
    // async fetchTodos({commit}) {
    //   const url = "https://jsonplaceholder.typicode.com/todos?userId=1";
    //
    //   try {
    //     commit('startLoading')
    //     const response = await fetch(url, {
    //       method: "GET",
    //     });
    //     const json = await response.json();
    //     setTimeout(() => {
    //       // commit("updateTodos", json);
    //       commit('stopLoading')
    //     }, 1000);
    //   } catch (error) {
    //     console.error("Ошибка:", error);
    //     commit('stopLoading')
    //   }
    // },
      completedTodo({commit},todos){
        commit('updateTodos',todos)
    },
     },
    mutations: {
      updateTodos(state, todos) {
        state.todos = todos;
      },
      // startLoading(state) {
      //   state.loading = true;
      // },
      // stopLoading(state) {
      //   state.loading = false;
      // },
    },
    state: {
      todos: [{
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
        },
        {
          "userId": 1,
          "id": 6,
          "title": "qui ullam ratione quibusdam voluptatem quia omnis",
          "completed": false
        },
        {
          "userId": 1,
          "id": 7,
          "title": "illo expedita consequatur quia in",
          "completed": false
        },
        {
          "userId": 1,
          "id": 8,
          "title": "quo adipisci enim quam ut ab",
          "completed": true
        },
        {
          "userId": 1,
          "id": 9,
          "title": "molestiae perspiciatis ipsa",
          "completed": false
        },
        {
          "userId": 1,
          "id": 10,
          "title": "illo est ratione doloremque quia maiores aut",
          "completed": true
        },],
      loading: false,
    },
    getters: {
      allTodos(state) {
        return state.todos;
      },
      completedTodos(state) {
        return state.todos.filter((t) => t.completed);
      },
      notCompletedTodos(state) {
        return state.todos.filter((t) => !t.completed);
      },
      stopSpinner(state) {
        return state.loading;
      }
    }
}
