import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCjpqK9yPUqqXlpl-8XxFiFBiahxkMUPbA",
    authDomain: "svelte-users-ae8fa.firebaseapp.com",
    databaseURL: "https://svelte-users-ae8fa.firebaseio.com",
    projectId: "svelte-users-ae8fa",
    storageBucket: "svelte-users-ae8fa.appspot.com",
    messagingSenderId: "503513305269",
    appId: "1:503513305269:web:80fa69c9711ab5c196eefc",
    measurementId: "G-48P2VHDEEQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()