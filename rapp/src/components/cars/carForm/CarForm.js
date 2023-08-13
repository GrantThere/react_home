import React, {useState} from 'react';

const CarForm = ({setChange, updCar}) => {
    const [car, setCar] = useState({
        brand: '',
        price: '',
        year: ''
    });

    const inputHandle = (e) => {
        setCar(prev => ({...prev, [e.target.name]: e.target.value}))
        console.log(car)
    };

    const add = (e) => {
        e.preventDefault()
        fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(car),
            method: 'POST'
        }).then(value => value.json())
            .then(setChange=>!setChange)
    };

    const update = (e) => {
        e.preventDefault()
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${updCar}`, {
            headers:{'content-type':'application/json'},
            method:'PUT',
            body:JSON.stringify(car)
        }).then(value => value.json())
            .then(setChange=>!setChange)}
    return (
        <div>
        <form onSubmit={()=>!updCar?add:update}>
            <label>BRAND:<input type={'text'} value={car.brand} name={'brand'}  onChange={inputHandle}/></label>
            <label>PRICE:<input type={'text'} value={car.price} name={'price'}  onChange={inputHandle}/></label>
            <label>YEAR:<input type={'text'} value={car.year} name={'year'}  onChange={inputHandle}/></label>
            <br/>
            <button>ADD</button>
            <br/>
        </form>
        </div>
    );
};

export default CarForm;