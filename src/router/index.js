import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Chatroom from '../views/Chatroom.vue'
import { projectAuth } from '../firebase/config'

// auth guard
// s'assure qu'il y a un user de connectee avant de rentrer dans le chatroom
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  
  // si il n'y a pas de user connectee, redirect vers le login
  if(!user) {
    next({ name: 'Welcome' })
  } else {
    next()
  }
}

const requireNoAuth =(to, from, next) => {
  let user = projectAuth.currentUser
  
  if(user) {
    next({ name: 'Chatroom' })
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: requireNoAuth
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter: requireAuth
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
