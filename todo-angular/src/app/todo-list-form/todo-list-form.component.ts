import { Component, Output, EventEmitter } from '@angular/core';
import {Todo} from '../todo';

@Component({
  selector: 'app-todo-list-form',
  templateUrl: './todo-list-form.component.html',
  styleUrls: ['./todo-list-form.component.css']
})
export class TodoListFormComponent {
  newTodo: Todo = new Todo();

  @Output()
  add: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  addTodo() {
    this.add.emit(this.newTodo);
    this.newTodo = new Todo();
  }

}
