"use client";

import React from 'react';
import Link from 'next/link';

import { useState } from "react";
import { useRouter } from "next/navigation";


const Nav: React.FC = () => {

  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key == "Enter"){
      router.push(`../search?q=${query.toLowerCase()}`)
    }
  }

  return (
    <nav className="bg-white p-4 border">
      <div className="max-w-7xl mx-auto flex justify-between items-center">


        <div>
          <ul  className="list-style-type: none; flex flex-row gap-10 ">
            <li>
              <Link href="/">
                Home
              </Link>
            </li>
            <li>Sugerir Composição</li>
          </ul>
        </div>

        {/* Logo ou nome do site */}
        <div className="text-pink-900 text-4xl font-bold ">
          HISTÓRIA DAS LETRAS
        </div>

        {/* Barra de pesquisa */}
        <div className="relative">
          <input
            type="text"
            placeholder="Pesquisar músicas..."
            className="p-2 pl-10 pr-4 rounded-lg text-gray-700 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleSearch}

          />
        </div>

        
      </div>
    </nav>
  );
};

export default Nav;
