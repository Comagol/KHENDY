import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./config"; // Asegúrate de importar `app` correctamente

// Inicializar autenticación
const auth = getAuth(app);

const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user; // Devuelve el usuario autenticado
  } catch (error) {
    throw error; // Manejo de errores
  }
};

export { auth, loginUser };
