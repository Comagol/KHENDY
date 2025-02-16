import { useState } from "react";
import { loginUser, loginWithGoogle, resetPassword } from "../firebase/auth";
import { Input, Button, VStack, Text, Divider } from "@chakra-ui/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    setError(""); // Limpiar errores previos
    try {
      await loginUser(email, password);
    } catch (err) {
      setError("Error al iniciar sesión. Verifica tus datos.");
    }
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
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
      <Text fontSize="2xl" fontWeight="bold">Iniciar Sesión</Text>
      {error && <Text color="red.500">{error}</Text>}
      <Input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input placeholder="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button colorScheme="teal" onClick={handleLogin} isLoading={loading}>Iniciar Sesión</Button>
      <Button variant="link" colorScheme="blue" onClick={handleResetPassword}>¿Olvidaste tu contraseña?</Button>
      <Divider />
      <Button colorScheme="red" onClick={handleGoogleLogin}>Iniciar con Google</Button>
      <Text>
        ¿No tienes cuenta? <Button variant="link" colorScheme="blue">Regístrate</Button>
      </Text>
    </VStack>
  );
};

export default Login;
