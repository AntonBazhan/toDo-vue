export default {
    namespaced:true,
    actions: {

            async fetchTodos({commit}) {
                 const url = 'https://jsonplaceholder.typicode.com/todos/?userId=1';

                 try {
                     const response = await fetch(url, {
                         method: 'GET',
                 });
                     const json = await response.json();
                     setTimeout(()=>{
                         commit('updateTodos', json)},1000)


                 } catch (error) {
                     console.error('Ошибка:', error);
                 }
        },
    },
        mutations:{
            updateTodos(state,todos,loading){
                state.todos = todos;
                state.loading=false
            }
        },
        state:{
            todos:[],
            loading:true,
        },
        getters:{
            allTodos(state){
                return state.todos
        },
            stopSpinner(state){
                return state.loading
            }

    }

}

