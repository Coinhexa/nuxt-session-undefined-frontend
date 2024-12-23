import SetCookieParser from 'set-cookie-parser'

export default ({ $axios, $cookies, store }) => {
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

  $axios.onResponse((response) => {
    const cookies = SetCookieParser.parse(response)

    cookies.forEach((cookie) => {
      const { name, value, ...options } = cookie
      $cookies.set(name, value, options)
    })
  })
}
