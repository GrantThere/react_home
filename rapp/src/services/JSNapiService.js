import axios from "axios";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

const lincsAPIcall = {
    todos: '/todos',
    albums: '/albums'
}

export const JSNapiService = {
    getTodos: () => instance.get(lincsAPIcall.todos),
    getalbums: () => instance.get(lincsAPIcall.albums)
}