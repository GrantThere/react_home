import axios from "axios";

const baseURL = 'http://owu.linkpc.net/carsAPI/v1'
const carsUrl = {
    base: '/cars',
    byId: (id) =>`/${id}`
}

const APIservice = {
    getAllCars: () => axios.get(baseURL+carsUrl.base),
    createCar: (car) => axios.post(baseURL+carsUrl.base, car),
    updateCarById: (id, car) => axios.put(baseURL+carsUrl.base+carsUrl.byId(id), car),
    deleteCarById: (id) => axios.delete(baseURL+carsUrl.base+carsUrl.byId(id))
}

export {APIservice}
