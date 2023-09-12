"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FiHome, FiList, FiUser } from "react-icons/fi";

const Menu = () => {
  const router = useRouter();

  return (
    <div className="w-full pt-4 h-14 bg-blue-500 fixed bottom-0">
      <ul className="flex items-center justify-around">
        <li>
          <Link href="/">
            <FiHome
              className={`text-2xl ${
                router.pathname === "/" ? "text-white" : "text-white/50"
              }`}
            />
          </Link>
        </li>
        <li>
          <Link href="/historico">
            <FiList
              className={`text-2xl ${
                router.pathname === "/historico"
                  ? "text-white"
                  : "text-white/50"
              }`}
            />
          </Link>
        </li>
        <li>
          <Link href="/perfil">
            <FiUser
              className={`text-2xl ${
                router.pathname === "/perfil" ? "text-white" : "text-white/50"
              }`}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
