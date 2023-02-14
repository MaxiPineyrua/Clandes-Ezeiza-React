import { getFirestore, collection, getDocs, getDoc, doc, where, query } from "firebase/firestore"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDqfnH9Yjh1Gojj-6jURPkKeU21jdnUZ58",
  authDomain: "clandestinas-ezeiza.firebaseapp.com",
  projectId: "clandestinas-ezeiza",
  storageBucket: "clandestinas-ezeiza.appspot.com",
  messagingSenderId: "689026292159",
  appId: "1:689026292159:web:85064d9950cdbfc7d7e90a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


export async function getItems() {
    const productsCollectionRef = collection(db, "productos")
    const snapshot = await getDocs(productsCollectionRef);
    const docsData = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id }
    })

    return docsData;
}


export async function getSingleitem(itemid) {
    const productsCollectionRef = collection(db, "productos");
    const productRef = doc(productsCollectionRef, itemid)
    const snapshot = await getDoc(productRef);

    return {
        ...snapshot.data(), id: snapshot.id
    }

}


export async function getItemsByCategory(categoria) {
    const productsCollectionRef = collection(db, "productos")
    const q = query(productsCollectionRef, where("categoria", "==", categoria));
    const snapshot = await getDocs(q);
    const docsData = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id }
    })

    return docsData;
}