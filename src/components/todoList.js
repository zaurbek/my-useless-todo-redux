import React from 'react';


export default class todoList extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            //const { todos, addTodo, deleteTodo, toggleTodo }=props;
            todos: props.todos,
            addTodo: props.addTodo,
            deleteTodo: props.deleteTodo,
            toggleTodo: props.toggleTodo
        }
    }
    submitClick() {
        if (this.textInput.value.length>0) {
            this.state.addTodo(this.textInput.value)
        } else {
            this.textInput.focus()
        }
    }
    render() {
        return (
            <div>
            <input ref={(input) => { this.textInput = input; }} type='text'/>
            <button onClick={()=>this.submitClick()}>Submit Todo</button>
            <ul>
            {this.state.todos.map(item=>{
                return (
                <span key={item.id}>
                <li onClick={()=>this.state.toggleTodo(item.id)}>{item.text}</li> <button onClick={()=>this.state.deleteTodo(item.id)}>Delete</button>
                </span>
                )
            })}
            </ul>
            </div>
            
            
            )
    }
}

