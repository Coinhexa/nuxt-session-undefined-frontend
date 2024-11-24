<template lang="pug">
  .container.is-flex.is-flex-direction-column.is-justify-content-center.is-align-items-center
    n-link(to='/login') Login
    div Current User is {{$store.state.me.user ? $store.state.me.user : 'still undefined'}} Check the console to see the connect.sid being retrieved but nuxtServerInit inside store/index.js is not able to retrieve req.session or req.user
    b-button(@click='fetchSessionToken') Get Session Token
</template>

<script>
export default {
  methods: {
    async fetchSessionToken() {
      const { data } = await this.$axios.get('/session/token')
      console.log('FETCH SESSION TOKEN', data);
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
}
</style>
