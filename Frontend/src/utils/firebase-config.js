import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCHYdaXYOyIkMJHU7Qr7avTrVZniu-udX8",
  authDomain: "netflixclone-8117d.firebaseapp.com",
  projectId: "netflixclone-8117d",
  storageBucket: "netflixclone-8117d.firebasestorage.app",
  messagingSenderId: "456373788921",
  appId: "1:456373788921:web:b950ea92ee1eb77cd10228",
  measurementId: "G-4J5R3YXM77"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
