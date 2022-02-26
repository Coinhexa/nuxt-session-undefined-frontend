/**
 * https://stackoverflow.com/questions/51385651/custom-directive-in-nuxt-js
 */

import Vue from 'vue'

Vue.directive('focusoncreate', {
  inserted(el) {
    el.getElementsByTagName('input')[0].focus()
  },
})
