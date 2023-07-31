import React, {useState} from 'react';
import UserForm from "./UserForm/UserForm";
import Users from "./Users/Users";
import {useEffect} from "react";

const UserAd = () => {
    const [users, serUsers] = useState([]);

    useEffect(()=>{
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(responce=> responce.json())
            .then(value => serUsers(value))
    }, [])
    return (
        <div>
            <UserForm serUsers={serUsers}/>
            <div></div>
            <Users users={users}/>
        </div>
    );
};

export default UserAd;