import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import api from "@/api/api";

const authConfig = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      api.defaults.headers.authorization = `Bearer ${JSON.parse(token)}`;
      setIsAuthenticated(true);
    }

    setLoading(false);
  }, []);

  const register = async (user) => {
    try {
      const data = await api
        .post("/api/clientes/register", user)
        .then((response) => {
          return response.data;
        });

      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (user) => {
    try {
      const data = await api
        .post("/api/clientes/login", user)
        .then((response) => {
          return response.data;
        });

      await authUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  const authUser = async (data) => {
    setIsAuthenticated(true);
    localStorage.setItem("token", JSON.stringify(data.token));
    localStorage.setItem("userId", JSON.stringify(data.id));
    router.push("/");
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    api.defaults.headers.authorization = undefined;

    router.push("/login");
  };

  return { isAuthenticated, loading, register, login, logout };
};

export default authConfig;
