import { createStore } from 'vuex'
import axios from 'axios';

// Create a new store instance.
    const store = createStore({
    state() {
        return {
          token: null, 
          isAuthenticated: false,
          comercios: null,
          comercioId: null,
        };
      },
      mutations: {
        setToken(state, payload) {
            state.token = payload;
            state.isAuthenticated = true;
          },
        setComercios(state, payload) {
            state.comercios = payload;
          },
          setComercioId(state, payload) {
            state.comercioId = payload;
          },
          clearToken(state) {
            state.token = null;
            state.isAuthenticated = false;
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
            const token = state.token;
            axios.get('https://backend.dev.woowbe.com/api/v1/offers/public/', {
              headers: {
                Authorization: `Bearer ${token}`
              }
            })
              .then(response => {
                commit('setComercios', response.data.results);
              })
              .catch(error => {
                console.error(error);
              });
          },
          fetchComercioID({ commit, state }, id) {
            const token = state.token;
            console.log('token ID', token)
            axios.get(`https://backend.dev.woowbe.com/api/v1/offers/public/${id}/`, {
              headers: {
                Authorization: `Bearer ${token}`
              }
            })
              .then(response => {
                commit('setComercioId', response.data);
              })
              .catch(error => {
                console.error(error);
              });
          }
      }
})


export default store;