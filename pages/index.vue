<template lang="pug">
  .container.is-flex.is-flex-direction-column.is-justify-content-center.is-align-items-center
    template(v-if='user')
      b-button(@click='logout') Logout
    template(v-else)
      n-link(to='/login') Login
    div Current User is {{$store.state.me.user ? $store.state.me.user : 'still undefined'}} Check the console to see the connect.sid being retrieved but nuxtServerInit inside store/index.js is not able to retrieve req.session or req.user
    b-button(@click='fetchSessionToken') Fetch Session Token
    p {{ csrfToken ? `Yay! here is our token: ${csrfToken}` : 'Haven\'t fetched any CSRF tokens yet 😫' }}
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      csrfToken: null,
    }
  },
  computed: {
    ...mapGetters({ user: 'me/GET_USER' }),
  },
  methods: {
    logout() {
      return this.$store.dispatch('me/LOGOUT')
    },
    async fetchSessionToken() {
      const { data } = await this.$axios.get('/session/token')
      console.log('FETCH SESSION TOKEN', data.token)
      this.csrfToken = data.token
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
}
p {
  max-width: 100%;
  word-wrap: break-word;
}
</style>
