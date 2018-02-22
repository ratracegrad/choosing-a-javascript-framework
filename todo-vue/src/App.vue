<template>
    <div id="app">
        <h1>Todo List</h1>
        <todos v-bind:todos="todos"></todos>
        <todo-form v-bind:todos="todos"></todo-form>
    </div>
</template>

<script>
import Todos from './components/Todos';
import TodoForm from './components/TodoForm';

export default {
    name: 'app',
    data() {
        return {
            todos: [
                { id: 1, title: 'learn vue', completed: false },
                { id: 2, title: 'Go shopping', completed: true },
                { id: 3, title: 'buy flowers', completed: true },
            ],
        };
    },
    computed: {
        todoCount() {
            return this.todos.length;
        },
    },
    components: {
        Todos, TodoForm,
    },
};
</script>

<style>
  body {
      background: #2e4053;
      margin: 0;
  }
  #app {
      font-family: sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      width: 600px;
      margin: 0 auto;
  }
    h1 {
        text-align: center;
        color: #39af78;
        margin: 20px 0;
    }
</style>
