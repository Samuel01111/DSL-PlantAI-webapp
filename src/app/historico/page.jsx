"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import api from "@/api/api";
import PrivateRoute from "@/routes/privateRoutes";
import Menu from "@/components/menu";

const Historico = () => {
  const [avaliacoes, setAvaliacoes] = useState([]);

  useEffect(() => {
    api.get("/api/avaliacoes").then((response) => {
      setAvaliacoes(response.data);
    });
  }, []);

  return (
    <PrivateRoute>
      <div className="w-full h-screen">
        <div className="w-full max-h-full flex items-center space-x-5 py-2 px-2">
          <img src="/plantai-logo.svg" alt="Plant AI logo" className="w-10" />
          <h1 className="font-bold text-lg text-blue-500">
            Histórico de Avaliações
          </h1>
        </div>
        {avaliacoes.map((avaliacao) => (
          <Link
            href={{
              pathname: "/avaliacao/avaliacaoDetalhada/[id]",
              query: { id: avaliacao.id },
            }}
            as={`/avaliacao/avaliacaoDetalhada/${avaliacao.id}`}
            key={avaliacao.id}
          >
            <div className="w-full max-h-full grid grid-cols-1 m-auto lg:w-1/3 items-center mt-10 px-5 space-y-5">
              <div className="flex w-full h-60 rounded-xl bg-blue-500">
                <div className="w-60 h-full rounded-tl-xl rounded-bl-xl bg-blue-300">
                  <img
                    src="alcachofa.jpg"
                    alt={avaliacao.solucao}
                    className="w-full h-full rounded-tl-xl rounded-bl-xl object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="py-2 text-white/70 font-bold pl-2">
                    Data: {avaliacao.dataAvaliacao}
                  </span>
                  <span className="py-2 text-white/70 font-bold pl-2">
                    Status: {avaliacao.status}
                  </span>
                  <span className="py-2 text-white/70 font-bold pl-2">
                    Remédio: {avaliacao.solucao}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}

        <Menu />
      </div>
    </PrivateRoute>
  );
};

export default Historico;
