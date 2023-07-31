import React from 'react';

const Car = ({car,setUpdCar}) => {
    const update = () => {
        setUpdCar(car.id)
    }
    return (
        <div>
            <hr/>
            <div>id: {car.id}</div>
            <div>brand: {car.brand}</div>
            <div>price: {car.price}</div>
            <div>year: {car.year}</div>
            <button onSubmit={update}>update</button>
            <hr/>
        </div>
    );
};

export default Car;