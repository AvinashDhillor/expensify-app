import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// const notes = [
//   {
//     id: '12',
//     title: 'First note!',
//     body: 'This is my note'
//   },
//   {
//     id: '223',
//     title: 'Anoter note',
//     body: 'This is my note'
//   }
// ];

// // database
//   .ref()
//   .set({
//     name: 'Avinash',
//     age: 21,
//     isSingle: false,
//     location: {
//       city: 'Shahzadpur',
//       country: 'india'
//     }
//   })
//   .then(() => {
//     console.log('Data is saved');
//   })
//   .catch(err => {
//     console.log('This Failed : ', e);
//   });

// database
//   .ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('Data is removed');
//   })
//   .catch(e => {
//     console.log('This is error');
//   });
