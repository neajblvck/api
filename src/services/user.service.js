import Axios from "./caller.service";

let getAllUsers = () => {
    return Axios.get('/api/users')
}

let getUser = (id) => {
    return Axios.get('/api/users/'+id)
}

let updateUser = (id, user) => {
    return Axios.patch('/api/users/'+id, user)
}

let createUser = (user) => {
    return Axios.post('/api/users/', user)
}

let deleteUser = (id) => {
    return Axios.delete('/api/users/'+id)
}

export const userService = {
    deleteUser,
    createUser,
    getAllUsers,
    getUser,
    updateUser
}