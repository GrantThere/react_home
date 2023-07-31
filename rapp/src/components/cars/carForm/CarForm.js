import React, {useState} from 'react';

const CarForm = ({setChange}) => {
    const [car, setCar] = useState({
        id:'',
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
    }

    const update = (car) => {
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${car.id}`, {
            headers:{'content-type':'application/json'},
            method:'PUT',
            body:JSON.stringify(car)
        }).then(value => value.json())
            .then(setChange=>!setChange)}
    return (
        <div>
        <form >
            <label>BRAND:<input type={'text'} value={car.brand} name={'brand'}  onChange={inputHandle}/></label>
            <label>PRICE:<input type={'text'} value={car.price} name={'price'}  onChange={inputHandle}/></label>
            <label>YEAR:<input type={'text'} value={car.year} name={'year'}  onChange={inputHandle}/></label>
            <br/>
            <button onClick={add}>ADD</button>
            <br/>
        </form>
        <form>
            <label>ID:<input type={'text'} value={car.id} name={'id'}  onChange={inputHandle}/></label>
            <button>DELETE</button>
            <button onClick={update}>UPDATE</button>
        </form>
        </div>
    );
};

export default CarForm;