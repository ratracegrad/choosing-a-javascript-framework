<template>
    <ul class="list-group">
        <li class="list-group-item"
            :class="{ 'completed' : todo.completed }"
            v-for="todo in todos"
            :key="todo.index">
            <span class="glyphicon glyphicon-ok icon"
                  :class="{ 'completed' : todo.completed }"
                  v-on:click="toggleCompletion(todo)"></span>
            {{ todo.title }}
            <button type="button"
                    class="close"
                    v-on:click="deleteToDo(index)">x</button>
        </li>
    </ul>
</template>
<style>
    .completed {
        color: #e51843;
        text-decoration:line-through
    }
    .list-group-item {
        text-align: left;
    }
    button.close {
        -webkit-appearance: none;
        padding: 0;
        cursor: pointer;
        background: 0 0;
        border: 0;
    }
    .close {
        float: right;
        font-size: 21px;
        font-weight: 700;
        line-height: 1;
        color: #000;
        text-shadow: 0 1px 0 #fff;
        opacity: .2;
    }
    .icon {
        margin: 6px 10px 6px 0;
    }
</style>
<script>
export default {
    props: ['todos'],
    methods: {
        deleteToDo(index) {
            this.todos.splice(index, 1);
        },
        toggleCompletion(todo) {
            todo.completed = !todo.completed;
        },
    },
};
</script>
