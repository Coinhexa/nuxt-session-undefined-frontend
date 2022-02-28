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
  FETCH_SESSION({ commit }) {
    return this.$axios.get('/session');
  },
  LOGIN({ commit }, { email, password, recaptchaToken }) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post('/login', { email, password, recaptchaToken })
        .then((response) => {
          const { data } = response
          commit('SET_USER', data)
          resolve(response)
        })
        .catch(reject)
    })
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
