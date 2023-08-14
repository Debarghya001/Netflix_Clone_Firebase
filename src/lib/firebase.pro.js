import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
//import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyCIKJcpEJLWHRhoY1ze9bV9NzqBxcZ7c6o",
  authDomain: "netflix-firebase-d.firebaseapp.com",
  projectId: "netflix-firebase-d",
  storageBucket: "netflix-firebase-d.appspot.com",
  messagingSenderId: "569284291740",
  appId: "1:569284291740:web:c6560116f89c64593a1159"
};

const firebaseApp = firebase.initializeApp(config);

//seedDatabase(firebaseApp);

export { firebaseApp };
