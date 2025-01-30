import { getAuth } from "firebase/auth";
import { app } from "./config"; // Asegúrate de importar `app` correctamente

// Inicializar autenticación
const auth = getAuth(app);

export { auth };