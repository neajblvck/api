import axios from "axios"
import { accountService } from "./account.service"
import router from "@/router"

// URL d'accès à mon serveur
const Axios = axios.create({
    baseURL: 'http://localhost:3000'
})

// intercepte la requête et ajoute le token dans l'entête Authorization
Axios.interceptors.request.use(req => {

    if(accountService.isLogged){
        req.headers.Authorization = 'Bearer '+accountService.getToken()
    }
    return req
} )

// intercepte le token dans la réponse
Axios.interceptors.response.use(res => {
    return res
    }, error =>{
        if(error.response.status == 401 && error.response.message == "Non autorisé"){
            accountService.logout()
            router.push('/')
        }
})

export default Axios