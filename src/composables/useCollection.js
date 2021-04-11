import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

// arugment: la collection qu'on veut modifier
const useCollection = (collection) => {
    const error = ref(null)

    // va rajouter un document a la collection
    // argument: le document qu'on veut sauvegarder dans firebase
    const addDoc = async (doc) => {
        error.value = null

        try {
            await projectFirestore.collection(collection).add(doc)
        }
        catch(err) {
            console.log(err.message)
            error.value = 'could not send the message'
        }
    }

    return { addDoc, error }
}

export default useCollection