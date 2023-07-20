import React from 'react';

const UserDetails = ({dat}) => {
    const {id,name,username,email,phone,website} = dat;
    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{username}</div>
            <div>{email}</div>
            <div>{phone}</div>
            <div>{website}</div>
        </div>
    );
};

export default UserDetails;