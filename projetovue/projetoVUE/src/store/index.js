import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: []
  },
  getters: {
  },
  mutations: {
    storeTodos(state, payload) {
      state.todos = payload
    },
    storeTodo(state, payload) {
      state.todos.unshift(payload) 
    },
  },
  actions: {
    getTodos({ commit }) {
      return new Promise((resolve) => {
      setTimeout(() => {
        return axios.get('http://localhost:3000/todos')
        .then((response)  => {
          commit('storeTodos',response.data )
          resolve()
        })
      }, 3000)
    })
      
        
    },
    addTodos({ commit }, data) {
      axios.post('http://localhost:3000/todos',data).then(() => {
        commit('storeTodo', response.data);
      })
    }
  },
  modules: {
  }
})
