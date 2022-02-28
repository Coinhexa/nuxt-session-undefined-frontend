export const state = () => ({
  redirect: null,
})

export const mutations = {
  SET_REDIRECT(state, redirect) {
    state.redirect = redirect
  },
}

export const actions = {
  async nuxtServerInit({ $axios, commit, dispatch }, { $dayjs, req }) {
    console.log('req.user is', req.user)
    console.log('req.session is', req.session)
    console.log('req.headers are', req.headers)
    console.log('req.headers.cookie is ', req.headers.cookie)
    const { data } = await dispatch('me/FETCH_SESSION')
    console.log('server session is', data)
    commit('me/SET_USER', data)
  },
}
