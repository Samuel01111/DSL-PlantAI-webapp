"use client";

import React from "react";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import PrivateRoute from "@/routes/privateRoutes";

const AvaliacaoConcluida = () => {
  return (
    <PrivateRoute>
      <div className="w-full h-screen">
        <div className="flex flex-col px-5 mt-5 space-x-5">
          <Link href="/" className="flex items-center space-x-2">
            <FiArrowLeft className="text-white text-xl" />
            <span className="text-white">Voltar</span>
          </Link>
          <h1 className="text-center mt-10 text-blue-500 font-bold text-2xl">
            Avaliação em Análise
          </h1>
        </div>
        <div className="w-full max-h-full flex flex-col px-4">
          <span className="w-full h-full text-center mt-40 text-blue-500 text-xl font-bold">
            Obrigado por enviar a foto. Estamos fazendo a análise e
            notificaremos quando terminar {":)"}
          </span>
          <Link
            href="/avaliacao/foto"
            className="w-full p-3 rounded-xl bg-blue-500 text-white text-center font-bold mt-10"
          >
            Nova Avaliação
          </Link>
        </div>
      </div>
    </PrivateRoute>
  );
};

export default AvaliacaoConcluida;
