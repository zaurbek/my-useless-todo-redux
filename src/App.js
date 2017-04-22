import React from 'react';
import { connect } from 'react-redux';
import todoList from './components/todoList';
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
    }
    
    )(todoList);