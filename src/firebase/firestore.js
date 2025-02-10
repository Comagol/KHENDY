import { getFirestore, collection, getDocs, addDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);

export const fetchProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error obteniendo productos:", error);
    return [];
  }
};

export const saveOrder = async (cart, total) => {
  try {
    if (!cart || cart.length === 0) {
      console.error("Error: el carrito está vacío.");
      return;
    }

    // Guardar la orden en Firestore
    const orderRef = await addDoc(collection(db, "sales"), {
      items: cart.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity
      })),
      total,
      createdAt: new Date()
    });

    console.log("Orden guardada con ID:", orderRef.id);

    // Actualizar stock
    for (const item of cart) {
      const productRef = doc(db, "products", item.id);
      const productSnap = await getDoc(productRef);

      if (productSnap.exists()) {
        const newStock = productSnap.data().stock - item.quantity;
        await updateDoc(productRef, { stock: newStock });
      } else {
      }
    }

    alert("Compra realizada con éxito!");
  } catch (error) {
  }
};