"use client";

import React, { useState, useContext } from "react";
import Link from "next/link";
import { Context } from "../../../context/Context";
import Input from "@/components/formulario/input/input";
import InputMask from "react-input-mask";
import Botao from "@/components/formulario/botao/botao";

const Cadastro = () => {
  const currentDate = new Date().toISOString().split("T")[0];
  const { register } = useContext(Context);

  const [user, setUser] = useState({
    name: "",
    genero: null,
    email: "",
    cpf: null,
    cnpj: "",
    dataNascimento: "",
    dataCadastro: currentDate,
    status: "A",
    problema: [
      {
        nome: "nome do problema",
        descricao: "descricao do problema",
        cliente: null,
        avaliacao: null,
      },
    ],
    telefone: {
      ddi: "",
      ddd: "",
      telefone: "",
    },
    password: "",
  });
  const [errors, setErrors] = useState({});

  const cleanPhoneNumber = (value) => {
    return value.replace(/[^\d]/g, "");
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "telefone") {
      const cleanedValue = cleanPhoneNumber(value);
      setUser((prevUser) => ({
        ...prevUser,
        telefone: {
          ...prevUser.telefone,
          telefone: cleanedValue,
        },
      }));
      if (value.includes(" ")) {
        const [ddi, ddd, telefone] = value.split(" ");
        setUser((prevUser) => ({
          ...prevUser,
          telefone: {
            ddi: ddi,
            ddd: ddd.replace("(", "").replace(")", ""),
            telefone: cleanPhoneNumber(telefone),
          },
        }));
      }
    } else if (name === "cnpj") {
      const numericValue = value.replace(/\D/g, "");
      setUser((prevUser) => ({
        ...prevUser,
        [name]: numericValue,
      }));
    } else {
      setUser((prevUser) => ({
        ...prevUser,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    if (!user.name) {
      newErrors.name = "Preencha o campo de Nome da Empresa.";
    }

    if (!user.email) {
      newErrors.email = "Preencha o campo de E-mail Corporativo.";
    } else if (!validateEmail(user.email)) {
      newErrors.email = "Insira um email válido.";
    }

    if (!user.telefone.ddi || !user.telefone.ddd || !user.telefone.telefone) {
      newErrors.telefone = "Preencha o campo de Telefone.";
    }

    if (!user.cnpj) {
      newErrors.cnpj = "Preencha o campo de CNPJ.";
    }

    if (!user.dataNascimento) {
      newErrors.dataNascimento = "Preencha o campo de Data de Abertura.";
    }

    if (!user.password) {
      newErrors.password = "Por favor, preencha o campo de Senha.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      register(user);
    }
  };

  return (
    <div className="w-full h-full py-10 flex flex-col items-center justify-center space-y-20">
      <div className="w-full max-h-full flex flex-col items-center justify-center">
        <img
          src="plantai-logo.svg"
          alt="Planta AI logo"
          className="max-w-full mb-3"
        />
        <h1 className="text-3xl text-blue-500 font-bold">Plant AI</h1>
      </div>
      <div className="w-full max-h-full flex flex-col px-4 space-y-5 md:w-96">
        <div className="max-w-full max-h-full flex flex-col">
          <label className="text-blue-500 font-bold text-lg">
            Nome da Empresa
          </label>
          <Input
            type="text"
            name="name"
            onChange={handleChange}
            className="p-2 border-4 rounded-2xl bg-blue-300 border-blue-500 text-white outline-none"
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>
        <div className="max-w-full max-h-full flex flex-col">
          <label className="text-blue-500 font-bold text-lg">
            E-mail Corporativo
          </label>
          <Input
            type="email"
            name="email"
            onChange={handleChange}
            className="p-2 border-4 rounded-2xl bg-blue-300 border-blue-500 text-white outline-none"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div className="max-w-full max-h-full flex flex-col">
          <label className="text-blue-500 font-bold text-lg">Telefone</label>
          <InputMask
            mask="+99 (99) 99999-9999"
            type="tel"
            name="telefone"
            onChange={handleChange}
            className="p-2 border-4 rounded-2xl bg-blue-300 border-blue-500 text-white outline-none"
          >
            {(inputProps) => <input {...inputProps} />}
          </InputMask>
          {errors.telefone && <p className="text-red-500">{errors.telefone}</p>}
        </div>
        <div className="max-w-full max-h-full flex flex-col">
          <label className="text-blue-500 font-bold text-lg">CNPJ</label>
          <InputMask
            mask="99.999.999/9999-99"
            type="text"
            name="cnpj"
            onChange={handleChange}
            value={user.cnpj}
            className="p-2 border-4 rounded-2xl bg-blue-300 border-blue-500 text-white outline-none"
          >
            {(inputProps) => <input {...inputProps} />}
          </InputMask>
          {errors.cnpj && <p className="text-red-500">{errors.cnpj}</p>}
        </div>
        <div className="max-w-full max-h-full flex flex-col">
          <label className="text-blue-500 font-bold text-lg">
            Data de Abertura
          </label>
          <Input
            type="date"
            name="dataNascimento"
            onChange={handleChange}
            className="p-2 border-4 rounded-2xl bg-blue-300 border-blue-500 text-white outline-none"
          />
          {errors.dataNascimento && (
            <p className="text-red-500">{errors.dataNascimento}</p>
          )}
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
        <div className="max-w-full max-h-full flex flex-col">
          <label className="text-blue-500 font-bold text-lg">
            Confirmar Senha
          </label>
          <Input
            type="password"
            name="cfPassword"
            onChange={handleChange}
            className="p-2 border-4 rounded-2xl bg-blue-300 border-blue-500 text-white outline-none"
          />
          {errors.cfPassword && (
            <p className="text-red-500">{errors.cfPassword}</p>
          )}
        </div>
        <Botao
          onClick={handleSubmit}
          className="w-full max-h-full bg-blue-500 p-2 rounded-xl text-lg text-blue-100 font-medium hover:bg-blue-500/70"
        >
          Cadastre-se
        </Botao>
        <span className="text-blue-500 self-center">
          Já tem uma conta?{" "}
          <Link href="/login" className="font-bold underline">
            Entrar
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Cadastro;
