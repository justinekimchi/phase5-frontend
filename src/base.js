import firebase from 'firebase'
import 'firebase/storage'

export const app = firebase.initializeApp({
  "projectId": "firebase-phase5-albums",
  "appId": "1:727712597440:web:316a2efec99e1100c33425",
  "databaseURL": "https://firebase-phase5-albums-default-rtdb.firebaseio.com",
  "storageBucket": "firebase-phase5-albums.appspot.com",
  "locationId": "us-central",
  "apiKey": "AIzaSyAILFC3blmDMNtmJyqpBm5Hqp9o9MsIDmU",
  "authDomain": "fir-phase5-albums.firebaseapp.com",
  "messagingSenderId": "727712597440"
});

