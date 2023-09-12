"use client";

import React from "react";
import Menu from "@/components/menu";
import PrivateRoute from "@/routes/privateRoutes";
import Link from "next/link";
import Botao from "@/components/formulario/botao/botao";

const App = () => {
  return (
    <PrivateRoute>
      <div className="w-full h-full">
        <div className="w-full max-h-full flex items-center space-x-5 py-2 px-2">
          <img src="plantai-logo.svg" alt="Plant AI logo" className="w-10" />
          <h1 className="font-bold text-lg text-blue-500">Plant AI</h1>
        </div>
        <div className="w-full h-full flex flex-col items-center mt-20 px-5">
          <div className="w-full lg:w-1/2 h-60 flex flex-col rounded-xl bg-blue-500">
            <span className="text-center py-5 text-white font-bold text-lg">
              Consolidação
            </span>
            <div className="flex flex-col px-5 space-y-3">
              <span className="text-white/60 font-medium ">
                Avaliações Curadas: 28
              </span>
              <span className="text-white/60 font-medium ">
                Em andamento de analise: 3
              </span>
              <span className="text-white/60 font-medium ">
                Remédio mais usado: Dipirona
              </span>
              <span className="text-white/60 font-medium ">
                Total de análises: 128
              </span>
            </div>
          </div>
          <div className="w-full h-full lg:w-1/2 flex flex-col mt-10 rounded-xl bg-blue-300">
            <span className="text-center py-5 text-white font-bold text-lg">
              Ultimas Avaliações
            </span>
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 w-full max-h-screen py-2 px-2 items-center">
              <div className="w-40 h-40 rounded-xl p-1 bg-blue-500">
                <img
                  src="alcachofa.jpg"
                  alt=""
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
              <div className="w-40 h-40 rounded-xl p-1 bg-blue-500">
                <img
                  src="alcachofa.jpg"
                  alt=""
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
          <Link
            href="/avaliacao/foto"
            className="w-full lg:w-60 max-h-full p-3 mt-5 text-center rounded-2xl text-white font-bold bg-blue-500 hover:bg-blue-500/70"
          >
            Nova Avaliação
          </Link>
        </div>
        <Menu />
      </div>
    </PrivateRoute>
  );
};

export default App;
