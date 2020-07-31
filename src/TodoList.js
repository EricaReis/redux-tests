import React, { Component } from 'react';

class TodoList extends Component{
    render(){
        return(
            <>
            <ul>
                <li>Item de todo</li>
            </ul>
            <input type="text"/>
            <button>Novo todo</button>
            </>
        );
    }
}
export default TodoList;