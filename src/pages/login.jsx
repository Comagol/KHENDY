import { useState } from "react";
import { loginUser } from "../firebase/auth";
import { Input, Button, VStack } from "@chakra-ui/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await loginUser(email, password);
  };

  return (
    <VStack spacing={4}>
      <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <Input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={handleLogin}>Iniciar Sesión</Button>
    </VStack>
  );
};

export default Login;
