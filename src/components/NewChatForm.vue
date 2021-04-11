<template>
  <form>
      <textarea 
      placeholder="Type a message and hit enter to send..." 
      v-model="message"
      @keypress.enter.prevent="handleSubmit">
      </textarea>
      <div class="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import getUser from '../composables/getUser'
import useCollection from '../composables/useCollection'
import { timestamp } from '../firebase/config'

export default {
    setup() {
        // refs
        const message = ref('')

        // va chercher le user
        const { user } = getUser()

        //
        const { addDoc, error } = useCollection('messages')
        
        // prend le message et met le dans un objet chat
        // plus le timestamp et l'usager.
        // re-initialise le message a vide
        const handleSubmit = async () => {
            const chat = {
                name: user.value.displayName,
                message: message.value,
                createdAt: timestamp()
            }

            // envoie le chat dans la collection 'messages' dans firebase
            await addDoc(chat)


            console.log(chat)
            message.value = ''
        }
        
        return { message, handleSubmit, error }
    }
}
</script>

<style scoped>
    form {
        margin: 10px;
    }

    textarea {
        width: 100%;
        margin-bottom: 6px;
        padding: 10px;
        box-sizing: border-box;
        border: 0;
        border-radius: 20px;
        font-family: inherit;
        outline: none;
    }
</style>