<template>
    <router-link :to="{ name: 'comercio', params: { id: comercio.id }}"  class="card">
        <img :src="comercio.business.widescreen_picture" :alt="comercio.name" class="card-image" />
      <h1 class="card-name">{{ comercio.name }}</h1>
      <p class="card-description">{{comercio.reward}}</p>
    </router-link>

  </template>
  
  <script>

  export default {
    props: {
      comercio: {
        type: Object,
        required: true
      }
    },
  };
  </script>
  
  <style>

.card {
  width: calc(25% - 10px);
  margin-bottom: 20px;
  background: linear-gradient(135deg, #ea52f8,  #1400ff69);
  padding: 20px 25px;
  box-sizing: border-box;
  margin: 25px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0px 10px 30px #ea52f854;
  border-radius: 15px;
  min-height: 300px;

}

.card:hover {
  background-color: #b133fba3;
  box-shadow: 0px 10px 50px #bb31eec7;
}
/* .card:hover h1, .card:hover p {
  color: azure;
} */

@media (max-width: 992px) {
  .card {
    width: calc(33.33% - 10px);
  }
}

@media (max-width: 768px) {
  .card {
    width: calc(50% - 10px);
  }
}

@media (max-width: 576px) {
  .card {
    width: 100%;
  }
}
  .card-image {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
  }
  
  .card-name {
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  .card-description {
    font-size: 14px;
    color: #4c0099;
  }
  </style>
  

  