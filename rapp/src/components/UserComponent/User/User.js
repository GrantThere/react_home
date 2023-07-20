import React from 'react';


const User = ({user,setUserId}) => {
    const {id, name, username} = user;
    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{username}</div>
            <button onClick={()=>setUserId(id)}>Posts</button>
        </div>
    );
};

export default User;