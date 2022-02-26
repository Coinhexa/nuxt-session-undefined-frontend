<template lang="pug">
    section.section.is-flex.is-flex-direction-column.is-justify-content-center.is-align-items-center
        n-link(to='/') Back Home
        form(method='POST' @submit.prevent='onFormSubmit')
            div(class="container")
                div(class="is-max-w-md mx-auto")
                    div(class="has-text-centered")
                        div(class="mb-6")
                            b-field.has-text-left(:label='formData.emailLabel')
                                b-input(
                                    type='email',
                                    :placeholder='formData.emailPlaceholder',
                                    :minlength='formData.emailMinLength',
                                    :maxlength='formData.emailMaxLength',
                                    v-model='formData.email',
                                    key='email',
                                    :has-counter='false',
                                    :use-html5-validation='false',
                                    v-focusoncreate,
                                    required
                                )
                            b-field.has-text-left(:label='formData.paswordLabel')
                                b-input(
                                    type='password',
                                    :placeholder='formData.passwordPlaceholder',
                                    password-reveal='',
                                    :minlength='formData.passwordMinlength',
                                    :maxlength='formData.passwordMaxlength',
                                    v-model='formData.password',
                                    key='password',
                                    :has-counter='false',
                                    :use-html5-validation='false',
                                    required
                                )
                            .field
                                .control
                                    b-button(
                                    :class='{ "is-loading": formData.isLoading }',
                                    :type='formData.isLoading ? "is-warning" : "is-primary"',
                                    native-type='submit',
                                    expanded
                                    ) Sign In
</template>

<script>
export default {
  name: 'AppLogin',
  data() {
    return {
      formData: this.getDefaultFormData(),
    }
  },
  methods: {
    getDefaultFormData() {
      return {
        email: 'test@example.com',
        emailLabel: '',
        emailMaxLength: 320,
        emailMinLength: 3,
        emailPlaceholder: 'test@example.com',
        isLoading: false,
        password: '123456789',
        passwordLabel: '',
        passwordMaxlength: 255,
        passwordMinlength: 8,
        passwordPlaceholder: '123456789',
      }
    },
    /**
     * https://github.com/axios/axios/issues/383
     * https://github.com/axios/axios/issues/427
     * https://github.com/axios/axios/issues/634
     */
    onFormSubmit(token) {
      this.formData.isLoading = true
      this.$store
        .dispatch('me/LOGIN', {
          email: this.formData.email,
          password: this.formData.password,
        })
        .then((response) => {
          this.reset()
          this.$router.replace(this.$store.state.redirect || '/')
        })
        .catch((error) => {
          this.formData.isLoading = false
          console.error(error);
        })
    },
    reset() {
      this.formData = this.getDefaultFormData()
    },
  },
}
</script>

<style lang="scss" scoped>
.section {
  height: 100%;
}
</style>