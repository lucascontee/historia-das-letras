import React from 'react';
import Link from 'next/link';

const Nav: React.FC = () => {
  return (
    <nav className="bg-white p-4">
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
        <div className="text-pink-900 text-4xl font-bold">
          HISTÓRIA DAS LETRAS
        </div>

        {/* Barra de pesquisa */}
        <div className="relative">
          <input
            type="text"
            placeholder="Pesquisar músicas..."
            className="p-2 pl-10 pr-4 rounded-lg text-gray-700 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        
      </div>
    </nav>
  );
};

export default Nav;
