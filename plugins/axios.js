export default ({ $axios, store }) => {
  // Inject $hello(msg) in Vue, context and store.
  $axios.defaults.timeout = 30000

  // https://github.com/axios/axios/issues/1543
  $axios.defaults.transitional.clarifyTimeoutError = true

  $axios.onRequest((config) => {
    const csrfToken = store.state.csrfToken
    if (
      csrfToken &&
      ['get', 'post', 'put', 'delete', 'patch'].includes(config.method)
    ) {
      config.headers['X-CSRF-Token'] = csrfToken
    }
    return config
  })
}
