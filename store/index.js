export const state = () => ({
  csrfToken: null,
  redirect: null,
})

export const mutations = {
  SET_CSRF_TOKEN(state, csrfToken) {
    state.csrfToken = csrfToken
  },
  SET_REDIRECT(state, redirect) {
    state.redirect = redirect
  },
}

export const actions = {
  async fetchCsrfToken({ commit }) {
    try {
      const { data } = await this.$axios.get('/csrf/token')
      commit('SET_CSRF_TOKEN', data.token)
      console.log('FETCH CSRF TOKEN', data.token)
    } catch (error) {
      console.error(error)
    }
  },
  async nuxtServerInit({ commit, dispatch }, { $dayjs, req }) {
    await dispatch('fetchCsrfToken')
  },
}
