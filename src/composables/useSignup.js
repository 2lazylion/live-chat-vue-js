import { ref } from 'vue'
import { projectAuth }  from '../firebase/config'


const error = ref(null)

const signup = async (email, password, displayName) => {
    error.value = null

    try {

        // creer un user avec le email et le password
        // avec la methode de firebase/Auth, conserve la reponse
        const res = await projectAuth.createUserWithEmailAndPassword(email, password)
        
        // si il n'y a pas de response, throw une erreur 
        if(!res) {
            throw new Error('Could not complete the signup')
        }

        // assigne lui son displayName
        await res.user.updateProfile({ displayName })
        console.log(res.user)
    } catch(err) {
        console.log(err.message)
        error.value = err
    }
}

const useSignup = () => {

    return { error, signup }
}

export default useSignup