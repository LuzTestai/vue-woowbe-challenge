<script setup>
import { useStore } from 'vuex';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

defineProps({
  msg: {
    type: String,
    required: true
  }
});

// const email = 'prueba@woowbe.com';
// const password = 'pruebatecnica2023!';
const email = ref('');
const password = ref('');


const router = useRouter();
const store = useStore();

const login = () => {
  store
    .dispatch('fetchToken', { email: email.value, password: password.value })
    .then(() => {
      router.push('/home');
    })
    .catch(error => {
      console.error(error);
    });
};

</script>

<template>
  <div class="content-login">
    <h1 >Iniciar Session</h1>
    <div class="login-container">
      <form @submit.prevent="login">
        <input type="email" v-model="email" placeholder="Correo electrónico" required>
        <input type="password" v-model="password" placeholder="Contraseña" required>
        <button type="submit">Entrar</button>
      </form>
    </div>
  </div>
</template>


<style scoped>
.content-login {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 0px;
}
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  margin-bottom: 30px;

}

.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.login-container img {
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
}

.login-container form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-container input {
  width: 300px;
  height: 40px;
  padding: 5px;
  margin-bottom: 10px;
}

.login-container button {
  width: 150px;
  height: 40px;
  background-color: var(--color-background-violett);
  color: var(--color-text);
  border: none;
  cursor: pointer;
  margin: 30px 0px;
  font-weight: 600;
}
</style>

