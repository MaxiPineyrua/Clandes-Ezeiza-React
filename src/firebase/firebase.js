import { initializeApp } from "firebase/app";

const firebaseConfig = {
   apiKey: "AIzaSyDqfnH9Yjh1Gojj-6jURPkKeU21jdnUZ58",
   authDomain: "clandestinas-ezeiza.firebaseapp.com",
   projectId: "clandestinas-ezeiza",
   storageBucket: "clandestinas-ezeiza.appspot.com",
   messagingSenderId: "689026292159",
   appId: "1:689026292159:web:85064d9950cdbfc7d7e90a"
};

const app = initializeApp(firebaseConfig);

export const initFirebase = () => app

