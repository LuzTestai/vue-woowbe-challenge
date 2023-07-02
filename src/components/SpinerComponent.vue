<template>
    <div class="spinner">
      <div class="spinner-circle"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SpinnerComponent'
  };
  </script>
  
  <style>
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
    border: 4px solid #ccc;
    border-top-color: #000;
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
  