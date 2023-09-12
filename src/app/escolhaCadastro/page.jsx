import React from "react";

import Link from "next/link";

const Escolha = () => {
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
      <div className="w-full max-h-full items-center flex flex-col space-y-10">
        <h1 className="font-bold text-xl text-blue-500">Escolha o tipo de cadastro</h1>
        <div className="w-full flex flex-col space-y-5">
          <Link href="/cliente/cadastro" className="p-3 w-80 self-center bg-blue-500 rounded-2xl text-white font-medium text-center hover:bg-blue-500/70">Pessoa Física</Link>
          <Link href="/empresa/cadastro" className="p-3 w-80 self-center bg-blue-500 rounded-2xl text-white font-medium text-center hover:bg-blue-500/70">Pessoa Jurídica</Link>
        </div>
      </div>
    </div>
  );
};

export default Escolha;
