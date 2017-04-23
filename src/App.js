import React from 'react';
import { connect } from 'react-redux';
import TodoList from './components/todoList.jsx';
import { addTodo, toggleTodo, deleteTodo} from './actions.js'

export const App = connect(
    function mapStateToProps(state) {
        return {todos:state}
    },
    function mapDispatchToProps(dispatch) {
        return {
        addTodo: text=>dispatch(addTodo(text)),
        toggleTodo: id=>dispatch(toggleTodo(id)),
        deleteTodo: id=>dispatch(deleteTodo(id))
        }
    })(TodoList);