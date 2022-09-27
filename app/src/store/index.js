import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      first_name: 'Lorem',
      last_name: 'Ipsum',
      email: 'lorem@ipsum.com'
    },
    products: [
      {
        id: 1,
        name: 'Lorem',
        price: 100
      },
      {
        id: 2,
        name: 'Ipsum',
        price:200
      },
      {
        id:3,
        name: 'Dolor',
        price: 50
      }
    ],
    cart: []
  },
  
  mutations: {
    storeUser(state, data) {
      state.user = data 
    },

    addProduct(state, data) {
      state.cart.push(data)
    },

    removeProduct(state, id) {
       const idx = state.cart.findIndex(o => o.id === id)
       state.cart.splice(idx,1);
    }
  },
  getters: {
    total(state) {

      return state.cart.reduce((total, item) => total += item.price, 0)
    },
  },
  actions: {
    storeUser({commit}, data) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('storeUser',data);
          resolve()
        },3000)
      })
      
    }
  },
/*   modules: {
  } */
})
