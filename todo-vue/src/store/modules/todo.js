export default {
    namespaced:true,
    actions: {

            async fetchTodos({commit}) {
                 const url = 'https://jsonplaceholder.typicode.com/todos';

                 try {
                     const response = await fetch(url, {
                         method: 'GET',
                 });
                     const json = await response.json();
                     console.log('Успех', JSON.stringify(json));
                     commit('updateTodos', json)
                 } catch (error) {
                     console.error('Ошибка:', error);
                 }
        },
    },
        mutations:{
        updateTodos(state,todos){
           state.todos = todos;
}
        },
        state:{
        todos:[]
        },
        getters:{
allTodos(state){
    return state.todos
}
        }

}