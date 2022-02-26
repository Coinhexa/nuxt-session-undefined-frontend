import Vue from 'vue'
import Router from 'vue-router'

import { parseQuery } from './parse-query'
import routes from './routes'
import { stringifyQuery } from './stringify-query'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    stringifyQuery,
    parseQuery,
    routes,
  })
}
