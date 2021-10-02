import { initializeApp } from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA4r5hUJA1GpuDf4b4tEKSbveRl5d1ghq4",
  authDomain: "app-ventas-c6a57.firebaseapp.com",
  projectId: "app-ventas-c6a57",
  storageBucket: "app-ventas-c6a57.appspot.com",
  messagingSenderId: "16368680090",
  appId: "1:16368680090:web:fa6b92ca8385983c8c3323",
  measurementId: "G-S5EYB6WE5G",
};

const fb = initializeApp(firebaseConfig);

export default fb;