"use client";

import React, { useState, useContext } from "react";
import Link from "next/link";
import { Context } from "../../context/Context";
import Input from "@/components/formulario/input/input";
import Botao from "@/components/formulario/botao/botao";

const Login = () => {
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState({});
  const { login } = useContext(Context)

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!user.email) {
      newErrors.email = "Preencha o campo de E-mail.";
    } else if (!validateEmail(user.email)) {
      newErrors.email = "Insira um email válido.";
    }

    if (!user.password) {
      newErrors.password = "Por favor, preencha o campo de Senha.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      login(user);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center space-y-20">
      <div className="w-full max-h-full flex flex-col items-center justify-center">
        <img
          src="plantai-logo.svg"
          alt="Planta AI logo"
          className="max-w-full mb-3"
        />
        <h1 className="text-3xl text-blue-500 font-bold">Plant AI</h1>
      </div>
      <div className="w-full max-h-full flex flex-col px-4 space-y-10 md:w-96">
        <div className="max-w-full max-h-full flex flex-col">
          <label className="text-blue-500 font-bold text-lg">Nome</label>
          <Input
            type="text"
            name="email"
            onChange={handleChange}
            className="p-2 border-4 rounded-2xl bg-blue-300 border-blue-500 text-white outline-none"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div className="max-w-full max-h-full flex flex-col">
          <label className="text-blue-500 font-bold text-lg">Senha</label>
          <Input
            type="password"
            name="password"
            onChange={handleChange}
            className="p-2 border-4 rounded-2xl bg-blue-300 border-blue-500 text-white outline-none"
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>
        <Botao
          onClick={handleSubmit}
          className="w-full max-h-full bg-blue-500 p-2 rounded-xl text-lg text-blue-100 font-medium hover:bg-blue-500/70"
        >
          Login
        </Botao>
        <span className="text-blue-500 self-center">
          Não tem conta?{" "}
          <Link href="/escolhaCadastro" className="font-bold underline">
            Cadastre-se
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
