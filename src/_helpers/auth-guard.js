// authGuard permet de vérifier le token et renvoit la valeur true ou redirige vers la page login

import router from '@/router'
export function authGuard(to){
    let token = sessionStorage.getItem('token')
    if(token){
        return true
    }
    router.push('/login')
}