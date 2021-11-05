import {initializeApp} from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const firebaseApp = {
    apiKey: "AIzaSyDl-w1n0sLKdqaGuU7ujhMrEa_7WWys0Gs",
  authDomain: "facebook-messenger-clone-44a65.firebaseapp.com",
  projectId: "facebook-messenger-clone-44a65",
  storageBucket: "facebook-messenger-clone-44a65.appspot.com",
  messagingSenderId: "126161482844",
  appId: "1:126161482844:web:e1c68488773c87c6fca299",
  measurementId: "G-1XTM4L69L1"
}
const app = initializeApp(firebaseApp); 
const db = getFirestore(app);

export default db;
