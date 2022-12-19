export default function  useLoggedIn(){
    const userLogged = localStorage.getItem("_user_access_token")
    if(!userLogged){
        return false 
    }
    return true
}