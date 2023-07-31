import React, {useEffect, useState} from 'react';
import CarForm from "./carForm/CarForm";
import Car from "./car/Car";

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [change, setChange] = useState(false);
    const [updCar, setUpdCar] = useState(null);

    useEffect(()=> {
        fetch('http://owu.linkpc.net/carsAPI/v1/cars')
            .then(resp=>resp.json())
            .then(value => setCars(value))
        },[change])
    return (
        <div>
            <CarForm setChange={setChange} updCar={updCar}/>
            {cars.map(car=><Car key={car.id} car={car} setUpdCar={setUpdCar}/>)}

        </div>
    );
};

export default Cars;