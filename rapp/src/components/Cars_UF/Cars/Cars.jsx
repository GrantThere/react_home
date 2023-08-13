import React, {useEffect, useState} from 'react';
import {APIservice} from "../../../services/APIservice";
import Car from "./Car/Car";

const Cars = ({init,setInit,setCarForUpdate}) => {
    const [cars,setCars] = useState([]);

    useEffect(()=> {
        APIservice.getAllCars()
            .then(({data})=>setCars(data))
    }, [init])
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setInit={setInit} setCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
};

export default Cars;