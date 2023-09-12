"use client"

import React from "react";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import PrivateRoute from "@/routes/privateRoutes";
import Botao from "@/components/formulario/botao/botao";

const Foto = () => {
  return (
    <PrivateRoute>
      <div className="w-full h-screen">
        <div className="flex flex-col px-5 mt-5 space-x-5">
          <Link href="/" className="flex items-center space-x-2">
            <FiArrowLeft className="text-white text-xl" />
            <span className="text-white">Voltar</span>
          </Link>
          <h1 className="text-center mt-10 text-blue-500 font-bold text-2xl">
            Nova Avaliação
          </h1>
        </div>
        <div className="w-full max-h-full flex flex-col px-10">
          <span className="w-full h-full text-center mt-40 text-blue-500 text-2xl font-bold">
            De onde quer analisar?
          </span>
          <div className="w-full max-h-full mt-10 flex flex-col items-center space-y-5">
            <Botao className="w-full rounded-xl text-white font-bold p-3 bg-blue-500 hover:bg-blue-500/70">
              Câmera
            </Botao>
            <Botao className="w-full rounded-xl text-white font-bold p-3 bg-blue-500 hover:bg-blue-500/70">
              Galeria
            </Botao>
          </div>
        </div>
      </div>
    </PrivateRoute>
  );
};

export default Foto;
