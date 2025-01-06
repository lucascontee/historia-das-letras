import React from 'react';

const Nav: React.FC = () => {
  return (
    <nav className="bg-white p-2">
      <div className="max-w-7xl mx-auto flex justify-around items-center">

        {/* Logo ou nome do site */}
        <div className="text-pink-950 text-2xl font-bold">
          História das Letras
        </div>

        {/* Barra de pesquisa */}
        <div className="relative">
          <input
            type="text"
            placeholder="Pesquisar músicas..."
            className="p-2 pl-10 pr-4 rounded-lg text-gray-700 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <i className="fas fa-search absolute left-3 text-white"></i> 
        </div>

        
      </div>
    </nav>
  );
};

export default Nav;
