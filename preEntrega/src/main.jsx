import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhJtjSGcVn-aBAxNTioGDPXlu3e-KSBHw",
  authDomain: "coderhouse-react-53e7b.firebaseapp.com",
  projectId: "coderhouse-react-53e7b",
  storageBucket: "coderhouse-react-53e7b.appspot.com",
  messagingSenderId: "415273237119",
  appId: "1:415273237119:web:7652277df44ae1ecb5dd4a"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
