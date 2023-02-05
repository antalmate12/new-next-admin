import { useState } from "react";
import useAuth from "@/hooks/useAuth";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { handleLogin } = useAuth();

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
    <form onSubmit={handleSubmit}>
      {error && <pre>{JSON.stringify(error)}</pre>}
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
