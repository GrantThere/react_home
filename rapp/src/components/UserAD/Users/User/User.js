import React from 'react';

const User = ({user}) => {
    return (
        <div>
            <hr/>
            <div>{user.id}</div>
            <div>{user.name}</div>
            <div>{user.username}</div>
            <div>{user.email}</div>
            <hr/>
        </div>
    );
};

export default User;