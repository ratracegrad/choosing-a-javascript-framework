import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = props => {
  var items = props.items.map((item, index) => {
    return (
      <TodoListItem key={index} item={item} index={index} removeItem={props.removeItem} markTodoDone={props.markTodoDone} />
    );
  });
  return (
    <ul className="list-group"> {items} </ul>
  );
}
  
export default TodoList;