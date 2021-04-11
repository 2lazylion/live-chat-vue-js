import { ref, watchEffect } from 'vue'
import { projectFirestore } from '../firebase/config'

const getCollection = (collection) => {
    const documents = ref(null)
    const error = ref(null)

    // va contenir la collection classee dans l'ordre qu'ils ont ete cree
    let collectionRef = projectFirestore.collection(collection)
        .orderBy('createdAt')

    // real time listener sur la collection
    // snap contient les collections au moment pris
    //
    const unsub = collectionRef.onSnapshot((snap) => {
        // va contenir les resultats du snap
        let results = []

        snap.docs.forEach(doc => {
            // doc.data().createdAt && est rajouter afin d'etre sur qu'il
            // va prendre un doc qui a ete mis sur le serveur de firebase... 
            doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
        })

        // mets les resultats dans le ref documents
        documents.value = results
        error.value = null
    }, (err) => {
        console.log(err.message)
        documents.value = null
        error.value = 'could not fetch data'
    })

    // onInvalidate va run quand le component va unmount
    watchEffect((onInvalidate) => {
        // unsubscribe de la collection lorsque le component va unmount
        onInvalidate(() => unsub())
    })

    return { documents, error }
}

export default getCollection