<template>
  <div class="welcome container">
      <p>Welcome</p>

      <!-- if the user is new, show the signup form --> 
      <div v-if="newHere">
          <h1>Sign up</h1>
          <SignupForm />

          <!--  show the option to go to Login -->
          <span @click="handleNewHere">you already have an account?</span>
      </div>

      <!-- else, show the login form -->
      <div v-else>
          <h1>Log in</h1>
          <LoginForm />

          <!-- show the option to go to signup -->
          <span @click="handleNewHere">New here?</span>
      </div>
  </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import { ref } from '@vue/reactivity'

export default {
    components: { SignupForm, LoginForm },
    setup() {
        const newHere = ref(false)

        const handleNewHere = () => {
            newHere.value = !newHere.value
        }

        return { newHere, handleNewHere }
    }
}
</script>

<style>
    .welcome {
        text-align: center;
        padding: 20px 0;
    }

    /* form styles */
    .welcome form {
        width: 300px;
        margin: 20px auto;
    }

    .welcome label {
        display: block;
        margin: 200px 0 10px;
    }

    .welcome input {
        width: 100%;
        padding: 10px;
        border-radius: 20px;
        border: 1px solid #eee;
        outline: none;
        color: #999;
        margin: 10px auto;
        box-shadow: 1px 2px 3px rgba(28, 6, 49, 0.1);
    }

    .welcome button {
        margin-top: 10px;
    }
    
    .welcome span {
        cursor: pointer;
        text-decoration: underline;
        color: #52ceb7;
    }

    .welcome span:hover {
        color: #3c9181;
    }
</style>