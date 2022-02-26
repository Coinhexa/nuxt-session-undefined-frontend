import Index from '~/pages/index'
import AppLogin from '~/pages/AppLogin'

export default [
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
  {
    path: '/login',
    name: 'Login',
    component: AppLogin,
  },
]
