import jwt from "jsonwebtoken";
import {useState, useEffect} from "react";
import {useRouter} from "next/router";
import axios from "axios";

interface User {
  "username": string,
  "firstName": string,
  "lastName": string,
  "fullName": string,
  "email": string,
  "iat": number,
  "exp": number
}


const getTokenFromCookie = (): string | null => {
  const token = document.cookie
    .split(";")
    .find((c) => c.trim().startsWith("token="));

  if (!token) {
    console.log('No token found in COOKIE!');
    return null;
  }

  console.log('TOKEN FOUND IN COOKIE: ', token.split("=")[1]);
  return token.split("=")[1];
};

const getTokenFromLocalStorage = (): string | null => {
  const token = localStorage.getItem("token");

  if (!token) {
    console.log('No token found in LOCAL STORAGE!');
    return null;
  }

  console.log('TOKEN FOUND IN LOCAL STORAGE: ', token);
  return token;
};

// const handleLogin = (token: string) => {
//   document.cookie = `token=${token};path=/;max-age=3600`;
//   localStorage.setItem("token", token);
// };

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = getTokenFromCookie() || getTokenFromLocalStorage();
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const decoded = jwt.decode(token) as User;
      setUser(decoded);
    } catch (error) {
      !router.pathname.includes("Login") ?? router.replace("/Login");
    }
    setLoading(false);
  }, [router]);

  const handleLogin = async (email: string, password: string) => {
    try {
      // const response = await axios.post("http://localhost:3000/login", {
      //   email,
      //   password,
      // });
      const response = await axios.post("/api/hello", {
        email,
        password,
      });
      const token = response.data.token;

      // Save the token to cookies or local storage
      // ...
      document.cookie = `token=${token};path=/;`;
      localStorage.setItem("token", token);

      if (token) {
        const decoded = jwt.decode(token) as User;
        setUser(decoded);
        router.replace("/home");
        return decoded;
      }

      throw new Error("No token found");
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  // export user loading and handleLogin
  return {user, loading, handleLogin};
};

export default useAuth;
