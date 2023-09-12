"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import PrivateRoute from "@/routes/privateRoutes";
import api from "@/api/api";
import Input from "@/components/formulario/input/input";
import Botao from "@/components/formulario/botao/botao";
import Menu from "@/components/menu";

const Perfil = () => {
  const currentDate = new Date().toISOString().split("T")[0];
  const [user, setUser] = useState({
    name: "",
    email: "",
    dataNascimento: "",
    dataCadastro: currentDate,
    imagem: "",
    status: "C",
    solucao: "",
    problema: [
      {
        nome: "Problema X",
        descricao: "Descrição do problema X",
      },
    ],
  });
  const [prevUser, setPrevUser] = useState({});
  const id = localStorage.getItem("userId");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    api
      .get(`/api/clientes/${id}`)
      .then((response) => {
        setPrevUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = {};

    if (!user.name) {
      newErrors.name = "Preencha o campo de Nome.";
    }

    if (!user.email) {
      newErrors.email = "Preencha o campo de E-mail.";
    } else if (!validateEmail(user.email)) {
      newErrors.email = "Insira um email válido.";
    }

    if (!user.dataNascimento) {
      newErrors.dataNascimento = "Preencha o campo de Data de Nascimento.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        await api.put(`/api/clientes/${id}`, user);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <PrivateRoute>
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <div className="w-full h-full flex flex-col justify-center px-4 space-y-10 md:space-y-10 md:w-96">
          <div className="max-w-full max-h-full flex flex-col">
            <label className="text-blue-500 font-bold text-lg">Nome</label>
            <Input
              type="text"
              name="name"
              onChange={handleChange}
              placeholder={prevUser.name || ""}
              className="p-2 border-4 rounded-2xl bg-blue-300 border-blue-500 text-white outline-none placeholder:text-white/50"
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>
          <div className="max-w-full max-h-full flex flex-col">
            <label className="text-blue-500 font-bold text-lg">E-mail</label>
            <Input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder={prevUser.email || ""}
              className="p-2 border-4 rounded-2xl bg-blue-300 border-blue-500 text-white outline-none placeholder:text-white/50"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div className="max-w-full max-h-full flex flex-col">
            <label className="text-blue-500 font-bold text-lg">
              Data de Nascimento
            </label>
            <Input
              type="date"
              name="dataNascimento"
              onChange={handleChange}
              className="p-2 border-4 rounded-2xl bg-blue-300 border-blue-500 text-white/50 outline-none"
            />
            {errors.dataNascimento && (
              <p className="text-red-500">{errors.dataNascimento}</p>
            )}
          </div>
          <Botao
            onClick={handleSubmit}
            className="w-full max-h-full bg-blue-500 p-2 rounded-xl text-lg text-blue-100 font-medium hover:bg-blue-500/70"
          >
            Salvar Alterações
          </Botao>
        </div>
        <Menu />
      </div>
    </PrivateRoute>
  );
};

export default Perfil;
