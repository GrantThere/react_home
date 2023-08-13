import React from 'react';
import {useForm} from "react-hook-form";
import {APIservice} from "../../../services/APIservice";

const CarForm = ({init,setInit,carForUpdate, setCarForUpdate}) => {
    const {reset, register, handleSubmit, setValue} =useForm();
    if (carForUpdate) {
        setValue('brand', carForUpdate.brand)
        setValue('price', carForUpdate.price)
        setValue('year', carForUpdate.year)
    }
    const save = async (car) => {
        try {
            await APIservice.createCar(car);
            reset()
            setInit(prev=>!prev)
        } catch (e) {

        }
    }
    const update = async (car)=> {
        try {
            await APIservice.updateCarById(carForUpdate.id, car)
            reset()
        } catch (e) {

        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(!carForUpdate ? save : update)}>
                <label>brand: <input type="text" placeholder={'brand'} {...register('brand')}/></label>
                <label>price: <input type="text" placeholder={'price'} {...register('price')}/></label>
                <label>year: <input type="text" placeholder={'year'} {...register('year')}/></label>
                <button>{!carForUpdate?'save':'update'}</button>
            </form>
        </div>
    );
};

export default CarForm;