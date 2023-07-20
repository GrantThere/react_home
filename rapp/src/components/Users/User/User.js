import React from 'react';
import UserDetails from "../UserDetails/UserDetails";
import UserAddres from "../UserAddres/UserAddres";
import Company from "../Company/Company";

const User = ({user}) => {
    const {id,name,username,email,phone,website,address,company} = user;
    return (
        <div>
            <UserDetails dat={{id,name,username,email,phone,website}}/>
            <UserAddres addres={address}/>
            <Company company={company}/>
        </div>
    );
};

export default User;