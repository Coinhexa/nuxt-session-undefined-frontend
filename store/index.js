export const state = () => ({
  redirect: null,
})

export const mutations = {
  SET_REDIRECT(state, redirect) {
    state.redirect = redirect
  },
}

export const actions = {
  nuxtServerInit({ commit, dispatch }, { $dayjs, req }) {
    console.log('req.user is', req.user);
    console.log('req.session is', req.session);
    console.log('req.headers are', req.headers);
    console.log('req.headers.cookie is ', req.headers.cookie);
    commit('me/SET_USER', req.user)
  },
}
