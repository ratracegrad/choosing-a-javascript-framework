import React, { Component } from 'react';
import './TodoListItem.css';

class TodoListItem extends Component {
    onClickClose = () => {
        var index = parseInt(this.props.index, 10);
        this.props.removeItem(index);
    }
    onClickDone = () => {
        var index = parseInt(this.props.index, 10);
        this.props.markTodoDone(index);
    }
    render () {
        var todoClass = this.props.item.done ? 
            "done" : "undone";
        return(
        <li className="list-group-item TodoListItem">
            <div className={todoClass}>
                <span className="glyphicon glyphicon-ok icon" aria-hidden="true" onClick={this.onClickDone}></span>
                {this.props.item.value}
                <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
            </div>
        </li>     
        );
    }
}

export default TodoListItem;