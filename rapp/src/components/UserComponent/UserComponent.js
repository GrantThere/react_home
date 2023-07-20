import React from 'react';
import {useEffect, useState} from "react";
import User from "./User/User";

const UserComponent = ({setUserId}) => {
    const [users, setUsers] = useState([]);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resp=>resp.json())
            .then(value => setUsers(value))
    },[]);

    return (
        <div>
            {users.map(user=> <User key={user.id} user={user} setUserId={setUserId}/>)}
        </div>
    );
};

export default UserComponent;