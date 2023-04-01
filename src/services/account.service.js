import Axios from "./caller.service";



let signup = (credentials) => {
    return Axios.post('api/auth/signup', credentials)
}


let login = (credentials) => {
    return Axios.post('api/auth/login', credentials)
}

let logout = () => {
    sessionStorage.removeItem('token')
}

let saveToken = (token) => {
    sessionStorage.setItem('token', token)
}

let getToken = () => {
    return sessionStorage.getItem('token')
}

let isLogged = () => {
    let token = sessionStorage.getItem(token)
    return !! token
}

export const accountService = { 
    signup,
    login,
    logout,
    saveToken,
    getToken,
    isLogged
}
