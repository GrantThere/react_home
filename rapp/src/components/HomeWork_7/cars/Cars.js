import {Component} from "react";
import {Car} from "./car/Car";
import axios from "axios";

class Cars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: []
        }
    }

    getAllCars() {
        const carS = axios.create({baseURL:'http://owu.linkpc.net/carsAPI/v1'});
        return carS.get('/cars')
    }

    componentDidMount() {
        this.getAllCars().then(({data}) => this.setState({cars: data}))
    }

    render() {
        return (
            <div>
                {this.state.cars.map(car => <Car key={car.id} car={car}/>)}
            </div>
        )
    }
}

export {Cars};