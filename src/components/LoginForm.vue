<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <div class="error">
      {{ error }}
    </div>
    <button>Log in</button>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import useLogin from '../composables/useLogin'
export default {
  emits: ['loggedIn'],
  setup(props, { emit }) {
    // refs
    const email = ref("");
    const password = ref("");

    // prend la fonction login et l'erreur de useLogin
    const { login, error } = useLogin()

    // gere le submit
    const handleSubmit = async () => {
      await login(email.value, password.value);

      if(!error.value) {
        console.log('user logged in')
        emit('loggedIn')
      }
    };

    return { email, password, handleSubmit, error };
  },
};
</script>

<style>

</style>