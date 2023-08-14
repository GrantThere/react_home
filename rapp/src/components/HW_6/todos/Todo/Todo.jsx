import React from 'react';

const Todo = ({todo}) => {
    return (
        <div>
            <div>userId:{todo.userId}</div>
            <div>id:{todo.id}</div>
            <div>title:{todo.title}</div>
            <div>completed:{todo.completed}</div>
        </div>
    );
};

export default Todo;