import Firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCXxrZi7YZIq32vNFm8OzpnHnmb_VttcQU",
    authDomain: "vu02-2e744.firebaseapp.com",
    databaseURL: "https://vu02-2e744.firebaseio.com",
    projectId: "vu02-2e744",
    storageBucket: "",
    messagingSenderId: "588201086030"
};
const firebaseApp = Firebase.initializeApp(config);
const db = firebaseApp.database()
export const dbMenuRef = db.ref('menu')
export const dbOrdersRef = db.ref('orders')
