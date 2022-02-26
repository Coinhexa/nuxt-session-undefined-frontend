import qs from 'qs'

// https://github.com/vuejs/vue-router/issues/1259
export function stringifyQuery(query) {
  const result = qs
    .stringify(query, { format: qs.formats.RFC1738 })
    .toLowerCase()
  return result ? '?' + result : ''
}
