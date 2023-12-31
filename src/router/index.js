import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import DetailView from '../views/DetailView.vue'
import store from '../store';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: true
      },
      beforeEnter: (to, from, next) => {
        if (store.state.isAuthenticated) {
          next(); 
        } else {
          next({ name: 'login' });
        }
      }
    },
    {
      path: '/comercio/:id',
      name: 'comercio',
      component: DetailView,
      meta: {
        requiresAuth: true
      },
      beforeEnter: (to, from, next) => {
        if (store.state.isAuthenticated) {
          next(); 
        } else {
          next({ name: 'login' });
        }
      }
    }
    
  ]
})

export default router
