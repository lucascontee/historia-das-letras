import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
    return(
    <footer className="bg-black text-white py-10 mt-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row justify-between">
      
      {/* Logo e descrição */}
      <div className="mb-8 md:mb-0">
        <h2 className="text-2xl font-bold mb-4">História das Letras</h2>
        <p className="text-gray-400">
          Descubra histórias fascinantes e curiosidades sobre suas músicas favoritas.
        </p>
      </div>

      {/* Links de Navegação */}
      <div className="mb-8 md:mb-0">
        <h3 className="text-xl font-semibold mb-4">Navegação</h3>
        <ul>
            <Link href="/">
            Home
            </Link>
        </ul>
      </div>

      {/* Redes Sociais */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Siga-nos</h3>
        <ul className="flex gap-4">
          <li className="hover:text-gray-300">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              TikTok
            </a>
          </li>
          <li className="hover:text-gray-300">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
          <li className="hover:text-gray-300">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              YouTube
            </a>
          </li>
        </ul>
      </div>
    </div>

    {/* Direitos Autorais */}
    <div className="border-t border-gray-700 mt-8 pt-4 text-center">
      <p className="text-gray-400">
        &copy; {new Date().getFullYear()} História das Letras. Todos os direitos reservados.
      </p>
    </div>
  </div>
</footer>
)}

export default Footer;