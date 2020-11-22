import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDK-qvSmCgiKmX37BRz8c0_DFBUHfQQ_Ng",
    authDomain: "recettes-ecd62.firebaseapp.com",
    databaseURL: "https://recettes-ecd62.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
