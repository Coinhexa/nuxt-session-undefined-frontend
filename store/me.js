export const state = () => ({
  user: null,
})

export const getters = {
  GET_USER(state) {
    return state.user
  },
}

export const mutations = {
  RESET_USER(state) {
    state.user = null
  },
  SET_USER(state, user) {
    state.user = user
  },
}

export const actions = {
  async LOGIN({ commit }, { email, password }) {
    try {
      const { data } = await this.$axios.post('/login', { email, password })
      commit('SET_USER', data)
    } catch (error) {
      console.error('There was an error at the login action')
      console.error(error)
    }
  },
  async LOGOUT({ commit }) {
    try {
      await this.$axios.post('/logout')
      commit('RESET_USER')
    } catch (error) {
      console.error('There was an error at the logout action')
      console.error(error)
    }
  },
}
