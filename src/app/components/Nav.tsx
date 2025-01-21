"use client";

import React from 'react';
import Link from 'next/link';

import { useState } from "react";
import { useRouter } from "next/navigation";


const Nav: React.FC = () => {

  const [query, setQuery] = useState("");
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    suggestion: "",
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    if(e.key === "Enter"){
      router.push(`../search?q=${query.toLowerCase()}`)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/sendSuggestion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Sugestão enviada com sucesso!");
        setFormData({ name: "", email: "", suggestion: "" });
        setIsModalOpen(false);
      } else {
        alert("Erro ao enviar a sugestão. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao enviar sugestão:", error);
      alert("Erro ao enviar a sugestão. Tente novamente.");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
    <nav className="bg-black p-4 border-b border-gray-900">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        

        <div className="relative flex gap-4 items-center text-white">
          <div>
            <ul  className="list-style-type: none; flex flex-row gap-10 ">
              <li  className="hover:text-slate-300 p-2">
                <Link href="/">
                  Home
                </Link>
              </li>
              <li  className="hover:text-slate-300 p-2" onClick={() => setIsModalOpen(true)}>Sugerir Composição</li>
            </ul>
          </div>
        </div>

        <div className="text-white text-4xl font-bold ">
          <Link href="/">História das Letras</Link>
        </div>
        
          <input
            type="text"
            placeholder="Pesquisar músicas..."
            className="p-2 pl-10 pr-4 rounded-lg text-gray-700 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault(); // Previne a ação padrão (que pode ser o envio de formulário)
                router.push(`../search?q=${query.toLowerCase()}`); // Executa a busca
              }
            }}
          />
      </div>
    </nav>

    {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className=" font-script text-6xl font-bold mb-4">Sugerir Composição</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Seu nome"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Seu e-mail"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
              <textarea
                name="suggestion"
                placeholder="Escreva sua sugestão"
                value={formData.suggestion}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                rows={4}
                required
              ></textarea>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-orange-950 text-white rounded-md hover:bg-orange-900"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
