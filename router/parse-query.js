import qs from 'qs'

export function parseQuery(query) {
  return qs.parse(query)
}
