<template>
  <nav v-if="user">
      <div>
          <p>Hey there... {{ user.displayName }}</p>
          <p class="email">Currently loggin as... {{  user.email }}</p>
      </div>
      <button @click="handleLogout">Logout</button>
  </nav>
</template>

<script>
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'
import { useRouter } from 'vue-router'

export default {
    setup() {
        // obtient le router
        //const router = useRouter()

        // option les infos du user actuel
        const { user } = getUser()
        
        // obtient la fonction logout et l'erreur possible
        const { logout, error } = useLogout()

        

        // logout et redirect vers welcome
        const handleLogout = async () => {
            await logout()
            //router.push({ name: 'Welcome' })
        }

        return { handleLogout, user }
    }
}
</script>

<style scoped>
    nav {
        padding: 20px;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    nav p {
        margin: 2px auto;
        font-size: 16px;
        color: #444;
    }

    nav p.email {
        font-size: 14px;
        color: #999;
    }
</style>