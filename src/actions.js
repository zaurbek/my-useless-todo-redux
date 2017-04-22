const uid = () => Math.random().toString(34).slice(2);

export function addTodo(text) {
    return {
        type: 'ADD_TODO',
        payload: {
            id: uid(),
            text,
            completed: false
        }
    }
}


export function deleteTodo(id) {
    return {
        type: 'DELETE_TODO',
        payload: id
    }
}

export function toggleTodo(id) {
    return {
        type: 'TOGGLE_TODO',
        payload: id
    }
}