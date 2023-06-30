import { createStore } from 'vuex'
import axios from 'axios';

// Create a new store instance.
    const store = createStore({
    state() {
        return {
          token: null, 
          comercios: null,
        };
      },
      mutations: {
        setToken(state, payload) {
            state.token = payload;
          },
        setComercios(state, payload) {
            state.comercios = payload;
          }
      },
      actions: {
        fetchToken({ commit }, { email, password } ) {
            axios.post('https://backend.dev.woowbe.com/api/v1/auth/jwt/token/', {
                    email,
                    password
            })
              .then(response => {
                commit('setToken', response.data.token);
              })
              .catch(error => {
                console.error(error);
              });
          },
          fetchComercios({ commit, state }) {
            const token = state.token; // Suponiendo que tienes el token almacenado en el estado de Vuex
          
            axios.get('https://backend.dev.woowbe.com/api/v1/offers/public/', {
              headers: {
                Authorization: `Bearer ${token}` // Agrega el token en los encabezados
              }
            })
              .then(response => {
                commit('setComercios', response.data.results);
              })
              .catch(error => {
                console.error(error);
              });
          }
      }
})


export default store;