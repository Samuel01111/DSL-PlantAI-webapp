"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import api from "@/api/api";
import PrivateRoute from "@/routes/privateRoutes";
import Menu from "@/components/menu";

const Detalhes = () => {
  const { id } = useParams();
  //const { id } = router.query;
  const [detalhes, setDetalhes] = useState(null);

  useEffect(() => {
    if (id) {
      api.get(`/api/avaliacoes/${id}`).then((response) => {
        setDetalhes(response.data);
      });
    }
  }, [id]);

  console.log(detalhes);

  if (!detalhes) {
    return <div>Carregando...</div>;
  }

  return (
    <PrivateRoute>
      <div className="w-full h-screen flex flex-col">
        <div className="w-full max-h-full flex items-center space-x-5 py-2 px-2">
          <img src="/plantai-logo.svg" alt="Plant AI logo" className="w-10" />
          <h1 className="font-bold text-lg text-blue-500">
            Avaliação detalhada
          </h1>
        </div>
        <div className="w-full h-full p-5">
          <div className="w-full h-full">
            <div className="w-full max-h-full lg:w-1/2 lg:m-auto bg-blue-500 py-2 px-2 rounded-xl">
              <img
                src="/alcachofa.jpg"
                alt=""
                className="w-full h-40 lg:h-60 rounded-xl object-cover"
              />
              <div className="flex flex-col mt-5 space-y-2">
                <div className="w-max-full h-max-full flex items-center space-x-2">
                  <span className="text-white text-md font-bold">Nome:</span>
                  <span className="text-white text-sm"> Hortaliça</span>
                </div>
                <div className="w-max-full h-max-full flex items-center space-x-2">
                  <span className="text-white text-md font-bold">Status:</span>
                  <span className="text-white text-sm"> {detalhes.status}</span>
                </div>
                <div className="w-max-full h-max-full flex items-center space-x-2">
                  <span className="text-white text-md font-bold">Data:</span>
                  <span className="text-white text-sm"> {detalhes.dataAvaliacao}</span>
                </div>
                <div className="w-max-full h-max-full flex items-center space-x-2">
                  <span className="text-white text-md font-bold">Remedio:</span>
                  <span className="text-white text-sm"> {detalhes.solucao}</span>
                </div>
                <div className="w-max-full h-max-full flex flex-col space-y-2">
                  <span className="text-white text-md font-bold">Descrição:</span>
                  <p className="text-white/70 text-sm">
                    Uma hortaliça é uma planta comestível cultivada para consumo
                    humano. Existem vários tipos, incluindo folhas (como
                    alface), raízes (como cenouras), bulbos (como cebolas),
                    frutos (como tomates), flores (como brócolis) e caules (como
                    aipo). Hortaliças são ricas em nutrientes e são essenciais
                    em uma dieta saudável.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Menu />
      </div>
    </PrivateRoute>
  );
};

export default Detalhes;
