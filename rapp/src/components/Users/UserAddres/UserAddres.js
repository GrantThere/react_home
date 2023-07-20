import React from 'react';

const UserAddres = ({addres}) => {
    const {street, suite, city} = addres;
    return (
        <div>
            <div>{street}</div>
            <div>{suite}</div>
            <div>{city}</div>
        </div>
    );
};

export default UserAddres;