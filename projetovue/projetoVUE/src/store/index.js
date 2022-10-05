import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: []
  },
  getters: {
  },
  mutations: {
    storeTodos(state, data) {
      state.todos = payload
    },
  },
  actions: {
    getTodos({ commit }) {
      return new Promise((resolve) => {
      setTimeout(() => {
        return axios.get('http://localhost:3000/todos')
        .then((response)  => {
          commit('storeTodos',response.data )
          
        })
      }, 3000)
    })
      
        
    },
    addTodos(context, data) {
      axios.post('http://localhost:3000/todos',data)
    }
  },
  modules: {
  }
})
