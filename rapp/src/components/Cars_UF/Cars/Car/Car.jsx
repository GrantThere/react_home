import React from 'react';
import {APIservice} from "../../../../services/APIservice";

const Car = ({car,setInit,setCarForUpdate}) => {
    const {id, brand, price, year} = car;
    const deleteCar = async () => {
        try {
            await APIservice.deleteCarById(id)
        }catch (e) {

        }finally {
            setInit(prev=>!prev)
        }
    }
    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=>setCarForUpdate(car)}>update</button>
            <button onClick={deleteCar}>delete</button>
        </div>
    );
};

export default Car;