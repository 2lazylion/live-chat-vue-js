<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      required
      placeholder="display name"
      v-model="displayName"
    />
    <input type="text" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <div class="error">
      {{ error }}
    </div>
    <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useSignup from '../composables/useSignup'

export default {
  emits:['signedup'],
    setup(props, { emit }) {
        // refs
        const displayName = ref('')
        const email = ref('')
        const password = ref('')

        const { error, signup } = useSignup()

        const handleSubmit = async () => {
            await signup(email.value, password.value, displayName.value)
            console.log('user signed up')
            emit('signedup')
        }

        return { displayName, email, password, handleSubmit, error }
    }
}
</script>

<style>
</style>