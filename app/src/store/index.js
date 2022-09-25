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
  getters: {
  },
  mutations: {
    storeUser(state, data) {
      state.user = data 
    },
  },
  actions: {
  },
/*   modules: {
  } */
})
