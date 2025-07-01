export default {
  namespaced: true,
  state () {
    return {
      cartList: []
    }
  },
  mutations: {
    getCartList (state, newitem) {
      const existingItem = state.cartList.find(item => item.name === newitem.name)
      if (existingItem) {
        existingItem.quantity++
      } else {
        state.cartList.push({
          ...newitem,
          quantity: 1,
          // 添加唯一标识
          id: newitem.name // 使用name作为临时ID，建议后期添加真实ID
        })
      }
    },
    // 增加商品数量
    incrementQuantity (state, productName) {
      const item = state.cartList.find(item => item.name === productName)
      if (item) item.quantity++
    },
    // 减少商品数量
    decrementQuantity (state, productName) {
      const item = state.cartList.find(item => item.name === productName)
      if (item) {
        if (item.quantity > 1) {
          item.quantity--
        } else {
          state.cartList = state.cartList.filter(i => i.name !== productName)
        }
      }
    },
    // 删除购物清单项目
    deleteGoods (state, productName) {
      state.cartList = state.cartList.filter(item => item.name !== productName)
    },
    // 清空购物车
    clearCart (state) {
      state.cartList = []
    }
  },
  actions: {
    getCartList ({ commit }, newitem) {
      commit('getCartList', newitem)
    },
    incrementQuantity ({ commit }, productName) {
      commit('incrementQuantity', productName)
    },
    decrementQuantity ({ commit }, productName) {
      commit('decrementQuantity', productName)
    },
    deleteGoods ({ commit }, productName) {
      commit('deleteGoods', productName)
    },
    clearCart ({ commit }) {
      commit('clearCart')
    }
  },
  getters: {
    totalPrice: (state) => {
      return state.cartList.reduce((total, item) => {
        return total + (item.price * item.quantity)
      }, 0).toFixed(2)
    },
    totalCount: (state) => {
      return state.cartList.reduce((total, item) => {
        return total + item.quantity
      }, 0)
    }
  }
}
