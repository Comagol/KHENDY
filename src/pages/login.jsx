import { useState } from "react";
import { loginUser, registerUser, loginWithGoogle, resetPassword } from "../firebase/auth";
import { Input, Button, VStack, Text, Divider } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    setError(""); // Limpiar errores previos
    try {
      await loginUser(email, password);
      navigate("/"); // Redirigir a la página de inicio después de login
    } catch (err) {
      setError("Error al iniciar sesión. Verifica tus datos.");
    }
    setLoading(false);
  };

  const handleRegister = async () => {
    setLoading(true);
    setError("");
    try {
      await registerUser(email, password);
    } catch (err) {
      setError("Error al registrarse. Puede que el email ya esté en uso.");
    }
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate("/"); 
    } catch (err) {
      setError("Error al iniciar sesión con Google.");
    }
  };

  const handleResetPassword = async () => {
    if (!email) {
      setError("Ingresa tu email para recuperar la contraseña.");
      return;
    }
    try {
      await resetPassword(email);
      setError("Revisa tu correo para recuperar la contraseña.");
    } catch (err) {
      setError("Error al enviar el correo de recuperación.");
    }
  };

  return (
    <VStack spacing={4} p={6} boxShadow="md" borderRadius="lg" w="sm" bg="white">
      <Text fontSize="2xl" fontWeight="bold">
        {isRegistering ? "Regístrate" : "Iniciar Sesión"}
      </Text>

      {error && <Text color="red.500">{error}</Text>}

      <Input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input placeholder="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      {isRegistering ? (
        <>
          <Button colorScheme="green" onClick={handleRegister} isLoading={loading}>Crear Cuenta</Button>
          <Text>
            ¿Ya tienes cuenta? <Button variant="link" colorScheme="blue" onClick={() => setIsRegistering(false)}>Inicia sesión</Button>
          </Text>
        </>
      ) : (
        <>
          <Button colorScheme="teal" onClick={handleLogin} isLoading={loading}>Iniciar Sesión</Button>
          <Button variant="link" colorScheme="blue" onClick={handleResetPassword}>¿Olvidaste tu contraseña?</Button>
          <Divider />
          <Button colorScheme="red" onClick={handleGoogleLogin}>Iniciar con Google</Button>
          <Text>
            ¿No tienes cuenta? <Button variant="link" colorScheme="blue" onClick={() => setIsRegistering(true)}>Regístrate</Button>
          </Text>
        </>
      )}
    </VStack>
  );
};

export default Login;
