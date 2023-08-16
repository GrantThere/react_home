import axios from "axios";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const lincsAPIcall = {
    todos: '/todos',
    albums: '/albums',
    comments: '/comments',
    postIdd: (id) =>`/${id}`
}

export const JSNapiService = {
    getTodos: () => instance.get(lincsAPIcall.todos),
    getalbums: () => instance.get(lincsAPIcall.albums),
    getComments: () => instance.get(lincsAPIcall.comments),
    getPost: (id) => instance.get(lincsAPIcall.postIdd(id))
}