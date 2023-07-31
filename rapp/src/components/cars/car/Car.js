import React from 'react';

const Car = ({car}) => {
    return (
        <div>
            <hr/>
            <div>id: {car.id}</div>
            <div>brand: {car.brand}</div>
            <div>price: {car.price}</div>
            <div>year: {car.year}</div>
            <hr/>
        </div>
    );
};

export default Car;