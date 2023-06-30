<script setup>
import { computed } from 'vue';
import {useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { RouterLink, RouterView } from 'vue-router'

 const store = useStore();
const router = useRouter();

const hasToken = computed(() => {
  return store.state.token !== null;
});

// Intercepta la navegación
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  // Si la ruta requiere autenticación y no hay token, redirige a la página de inicio de sesión
  if (requiresAuth && !hasToken.value) {
    console.log('entre al if')
    next({ name: 'login' });
  } else {
    next();
  }
});
</script>

<template>
  <header>
    <div v-if="hasToken">
      <nav>
        <RouterLink to="/home">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}
nav a {
  color: white;
  text-decoration: none;
}
nav a.router-link-exact-active {
  color: white;
  font-weight: 600 ;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {

  nav {
    text-align: left;
    font-size: 1rem;
    padding: 1rem 0;
    background-color: var(--color-background-violett);
  }
}
</style>
