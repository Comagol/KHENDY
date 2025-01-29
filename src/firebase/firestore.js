import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);

export const addProduct = async (product) => {
  return await addDoc(collection(db, "products"), product);
};

export const getProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
