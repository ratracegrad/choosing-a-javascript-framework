<template>
    <form v-on:submit.prevent="addTodo(newTodo)" class="form-inline">
        <input type="text"
               v-model="newTodo.title"
               class="form-control"
               placeholder="add a new todo...">
        <button type="submit" class="btn btn-default">Add</button>
    </form>
</template>
<style>
    .form-inline .form-control {
        width: 50%;
    }
</style>
<script>
export default {
    props: ['todos'],
    data() {
        return {
            newTodo: { id: null, title: '', completed: false },
        };
    },
    methods: {
        addTodo(newTodo) {
            this.todos.push(newTodo);
            this.newTodo = { id: null, title: '', completed: false };
        },
    },
};
</script>
