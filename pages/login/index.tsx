import React, {useState} from "react";
import useAuth from "@/hooks/useAuth";
import {Button, Container, TextField} from "@mui/material";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const {handleLogin} = useAuth();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await handleLogin(
        "administrator@debugentity.hu",
        "020e107c5c8f5d88b0223f64a258ddc62a593a31"
      );
      console.log("LOGGED IN: ", res);
    } catch (err: any) {
      setError(err?.message || "Something went wrong.");
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        {error && <pre>{JSON.stringify(error)}</pre>}

        <TextField type={"email"} value={username} onChange={(e) => setUsername(e.target.value)} id="email"
                   label="E-mail" variant="filled"/>

        <TextField type={"password"} value={password} onChange={(e) => setPassword(e.target.value)} id="password"
                   label="Password" variant="filled"/>

        <Button type="submit" variant={"contained"}>Login</Button>
      </form>
    </Container>
  );
};

export default LoginPage;
