export default {
  namespaced: true,
  actions: {
    async fetchTodos({ commit }) {
      const url = "https://jsonplaceholder.typicode.com/todos/?userId=1";

      try {
        commit('startLoading')
        const response = await fetch(url, {
          method: "GET",
        });
        const json = await response.json();
        setTimeout(() => {
          commit("updateTodos", json);
          commit('stopLoading')
        }, 1000);
      } catch (error) {
        console.error("Ошибка:", error);
        commit('stopLoading')
      }
    },
  },
  mutations: {
    updateTodos(state, todos) {
      state.todos = todos;
    },
    startLoading(state){
      state.loading= true;
    },
    stopLoading(state){
      state.loading= false;
    }
  },
  state: {
    todos: [],
    loading: false,
  },
  getters: {
    allTodos(state) {
      return state.todos;
    },

    completedTodos(state){
      return state.todos.filter((t) => t.completed);
    },

    notCompletedTodos(state){
      return state.todos.filter((t) => !t.completed);
    },

    stopSpinner(state) {
      return state.loading;
    }
  },
};
