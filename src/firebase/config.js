import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDpvovNefURxQiuERef-hVeE2ggK27QNgY",
    authDomain: "udemy-vue-firebase-demo.firebaseapp.com",
    projectId: "udemy-vue-firebase-demo",
    storageBucket: "udemy-vue-firebase-demo.appspot.com",
    messagingSenderId: "872820764634",
    appId: "1:872820764634:web:dfde47347079b09b14dae3"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  // init firestore
  const projectFirestore = firebase.firestore()

  // export le type timestamp
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export default { projectFirestore, timestamp }