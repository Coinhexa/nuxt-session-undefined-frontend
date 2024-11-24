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
  LOGOUT({ commit }) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post('/logout')
        .then((response) => {
          commit('RESET_USER')
          resolve(true)
        })
        .catch((error) => {
          commit('RESET_USER')
          reject(error)
        })
    })
  },
}
