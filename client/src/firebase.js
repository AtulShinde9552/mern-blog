// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-f67cf.firebaseapp.com",
  projectId: "mern-blog-f67cf",
  storageBucket: "mern-blog-f67cf.appspot.com",
  messagingSenderId: "148854503469",
  appId: "1:148854503469:web:049141513e151f398a60a4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

