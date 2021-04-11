<template>
  <div class="chat-window">
      <div class="error">{{ error }}</div>
      <div v-if="formattedDocuments" ref="messages" class="messages">
          <div v-for="document in formattedDocuments" :key="document.id" class="single">
            <span class="created-at">{{ document.createdAt}} </span>
            <span class="name">{{ document.name }}:</span>
            <span class="message">{{ document.message }}</span>
          </div>
      </div>
  </div>
</template>

<script>
import getCollection from '../composables/getCollection'
import { formatDistanceToNow } from 'date-fns'
import { computed, onUpdated } from '@vue/runtime-core'
import { ref } from 'vue'

export default {
    setup() {
        // refs
        const messages = ref(null) 

        const { error, documents } = getCollection('messages')

        // reformate la propiete createdAt en quelque chose de lisible
        const formattedDocuments = computed(() => {
            if (documents.value) {
                return documents.value.map(doc => {
                    let time = formatDistanceToNow(doc.createdAt.toDate())
                    return { ...doc, createdAt: time }
                })
            }
        })

        onUpdated(() => {
            // auto-scroll au dernier message
            messages.value.scrollTo(0, 400)
        })

        return { error, formattedDocuments, messages }
    }
}
</script>

<style scoped>
.chat-window {
    background: #fafafa;
    padding: 30px 20px;
  }
  .single {
    margin: 18px 0;
  }
  .created-at {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
  }
  .name {
    font-weight: bold;
    margin-right: 6px;
  }
  .messages {
    max-height: 400px;
    overflow: auto;
  }
</style>