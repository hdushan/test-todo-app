<template>
  <div id="app">
    <div id="container" class="container">
      <div id="mainContent" class="col-md-6 offset-md-4">
        <create-todo></create-todo>
        <list-todo></list-todo>
      </div>
    </div>
  </div>
</template>

<script>
  import CreateTodo from './CreateTodo.vue';
  import ListTodo from './ListTodo.vue';

  export default {
    name: 'app',

    data() {
      return {}
    },
  
    components: {
      CreateTodo,
      ListTodo
  
    },
  
  
  
  }
</script>

<style>
  .fade-enter-active,
  
  .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter,
  
  .fade-leave-active {
    opacity: 0
  }
</style>