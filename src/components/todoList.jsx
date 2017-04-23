import React from 'react';
import {Button, List} from 'semantic-ui-react'

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //const { todos, addTodo, deleteTodo, toggleTodo }=props;
            addTodo: props.addTodo,
            deleteTodo: props.deleteTodo,
            toggleTodo: props.toggleTodo
        }
    }
    submitClick() {
        if (this.textInput.value.length > 0) {
            this
                .props
                .addTodo(this.textInput.value)
            this.textInput.value = '';
        } else {
            this
                .textInput
                .focus()
        }
    }
    render() {
        return (
            <div>
                <div className="ui input">
                <input size='small'
                    type='text'
                    ref={input => 
                    this.textInput = input
                }/></div>
                <Button primary onClick={() => this.submitClick()}>Submit Todo</Button>
                <List bulleted>
                    {this
                        .props
                        .todos
                        .map(item => {
                            const style = {
                                textDecoration: item.completed
                                    ? 'line-through'
                                    : ''
                            }
                            return (
                                <span className='list-item-inline' key={item.id}>
                                    <a href='#' style={style} onClick={() => this.props.toggleTodo(item.id)}>
                                        <List.Item >{item.text}</List.Item>
                                    </a> <Button negative onClick={() => this.props.deleteTodo(item.id)}>Delete</Button>
                                </span>
                            )
                        })}
                </List>
            </div>

        )
    }
}
