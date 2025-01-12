import React from 'react';
import Link from 'next/link';

interface ShortSongProps {
    musicName: string;
    description: string;
    composer: string;
    artist: string;
    genre: string;
    pageUrl: string;
  }

const ShortSongSearch = ({musicName, description, composer, artist, genre, pageUrl}: ShortSongProps) => {
  return (
    <div className="bg-white p-6 rounded-lg border-b w-9/12 ml-10 w-full">
        <Link href={`${pageUrl}`} className="text-2xl font-bold">
          {musicName}
        </Link>              
            <p className="text-gray-400 text-xs"> Artista: {artist}</p>
            <p className="text-gray-400 text-xs" > Compositor: {composer}</p>
            <p className="text-gray-400 mb-4 text-xs" > Gênero: {genre}</p>
            <p className="text-gray-600">
            {description}
            </p>
          </div>
  );
};

export default ShortSongSearch;