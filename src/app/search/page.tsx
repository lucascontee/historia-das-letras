"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

import ShortSongSearch from "../components/ShortSongSearch";
import Nav from "../components/Nav";

interface Song {
  id: string;
  songName: string;
  songUrl: string;
  artist: string;
  genre: string;
  releaseDate: string;
  songDescription: string;
  songLanguage: string;
  songWriter: string;
}

export default function SearchPage() {
  const searchParams = useSearchParams();
  const q = searchParams?.get("q");

  const [results, setResults] = useState<Song[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (q) {
      fetch(`/api/search?q=${encodeURIComponent(q)}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          setResults(data);
          setIsLoading(false);
        })
        .catch((err) => console.error("Erro ao buscar músicas: ", err));
    }
  }, [q]);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <Nav /> 
      <h1>Exibindo esultados para: {q?.toUpperCase()}</h1>
      {results.length === 0 ? (
        <p>Nenhuma música encontrada.</p>
      ) : (
        <ul>
          {results.map((result) => (
            <li key={result.id}>
              <ShortSongSearch 
                musicName={`${result.songName.toLocaleUpperCase()}`}
                description={`${result.songDescription}`}
                artist={`${result.artist}`}
                composer={`${result.songWriter}`}
                genre={`${result.genre}`}
                pageUrl={`${result.songUrl}`}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}