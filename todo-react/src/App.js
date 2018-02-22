import React, { Component } from 'react';
import './App.css';

import TodoHeader from './components/TodoHeader/TodoHeader';
import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';

class App extends Component {
  constructor (props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);

    var todoItems = [];
    todoItems.push({index: 1, value: "learn react", done: false});
    todoItems.push({index: 2, value: "Go shopping", done: true});
    todoItems.push({index: 3, value: "buy flowers", done: true});

    this.state = {todoItems: todoItems};
  }
  addItem = (todoItem) => {
    // todoItems.unshift();

    let todoItems = [{
      index: this.state.todoItems.length+1, 
      value: todoItem.newItemValue, 
      done: false
    }].concat(this.state.todoItems)

    this.setState({todoItems: todoItems});
  }
  removeItem (itemIndex) {
    let todoItems = this.state.todoItems.slice(0);
    todoItems.splice(itemIndex, 1);
    this.setState({todoItems: todoItems});
  }
  markTodoDone(itemIndex) {
    let todoItems = this.state.todoItems.slice(0);
    var todo = todoItems[itemIndex];
    todoItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
    this.setState({todoItems: todoItems});  
  }
  render() {
    return (
      <div id="main">
        <TodoHeader />
        <TodoList items={this.state.todoItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone}/>
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
