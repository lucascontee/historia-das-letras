/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const SearchPage = () => {
    const searchParams = useSearchParams();
    const q = searchParams.get('q');  // Pegando o parâmetro 'q' da URL
  
    const [results, setResults] = useState([]);

  useEffect(() => {
    if (q && typeof q === 'string' && q.trim() !== '') {
      fetch(`/api/search?q=${encodeURIComponent(q)}`)
        .then((res) => res.json())
        .then((data) => setResults(data))
        .catch((err) => console.error("Erro ao buscar músicas: ", err));
    }
  }, [q]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Resultados para: {q}</h1>
      <ul>
        {results.length === 0 && <p>Nenhuma música encontrada.</p>}
        {results.map((result: any) => (
          <li key={result.songUrl}>
            <a href={`/lyrics/${result.songName}`} className="text-blue-500">
              {result.songName} - {result.artist}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;
