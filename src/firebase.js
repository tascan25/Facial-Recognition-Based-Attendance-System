import firebase from "firebase/compat/app";
import "firebase/compat/storage"; // Explicitly import the storage compatibility module

const firebaseConfig = {
    apiKey: "71e71b2dfd1e249ba31f13dcec24830f6d977fcf",
    projectId: "facial-attendance-system-75cbe",
    storageBucket: "facial-attendance-system-75cbe.appspot.com"
};

firebase.initializeApp(firebaseConfig);
let storage = firebase.storage(); // This should now work correctly

export default storage;
