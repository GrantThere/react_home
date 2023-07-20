import React from 'react';

const Company = ({company}) => {
    const { name,catchPhrase,bs} = company;
    return (
        <div>
            <div>{name}</div>
            <div>{catchPhrase}</div>
            <div>{bs}</div>
        </div>
    );
};

export default Company;