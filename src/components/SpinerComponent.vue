<template>
  <div class="container-spinner">
    <div class="spinner">
      <div class="spinner-circle"></div>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    name: 'SpinnerComponent'
  };
  </script>
  
  <style>
  .container-spinner {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
  }
  
  .spinner-circle {
    width: 40px;
    height: 40px;
    border: 4px solid #ffffff;
    border-top-color: #d202fc;
    border-radius: 50%;
    animation: spin 1s infinite linear;
  }
  
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  </style>
  