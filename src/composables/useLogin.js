import { ref } from 'vue'
import { projectAuth }  from '../firebase/config'

const error = ref(null)

const login = async (email, password) => {
    error.value = null

    try {
        const res = await projectAuth.signInWithEmailAndPassword(email, password)
        console.log(res) 
        return res
    } catch(err) {
        console.log(err.message)
        error.value = 'Incorrect login credentials'
    }
}

const useLogin = () => {
    return { login, error }
}

export default useLogin