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
        console.log('entre al before', store.state.isAuthenticated);
        if (store.state.isAuthenticated) {
          console.log('aqui estoy en route', store.state.isAuthenticated);
          next(); 
          console.log('aqui estoy en route', store.state.token)
          next(); // Continuar navegando hacia la ruta /home
        } else {
          next({ name: 'login' }); // Redirigir a la página de inicio de sesión
        }
      }
    },
    {
      path: '/comercio/:id',
      name: 'comercio',
      component: DetailView
    }
    
  ]
})

export default router
