import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

// l'objet error
const error = ref(null)

// va servir a logout
const logout = async () => {

    try{
        // appel la fonction signOut de firebase auth
        const res = await projectAuth.signOut()
    } catch(err) {
        console.log(err.message)
        error.value = err.message
    }
    
}

// retourne une fonction qui retourne la fonction et l'erreur
const useLogout = () => {
    return { logout, error }
}

// export useLogout
export default useLogout
