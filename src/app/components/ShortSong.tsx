import React from 'react';
import Link from 'next/link';

interface ShortSongProps {
    musicName: string;
    description: string;
    composer: string;
    artist: string;
  }

const ShortSong = ({musicName, description, composer, artist}: ShortSongProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-xs w-full">
        <Link href={`/lyrics/${musicName.trim().toLowerCase()}`} className="text-2xl font-bold text-pink-900">
          {musicName}
        </Link>              
            <p className="text-gray-400 text-xs"> Artista: {artist}</p>
            <p className="text-gray-400 mb-4 text-xs" > Compositor: {composer}</p>
            <p className="text-gray-600">
            {description}
            </p>
          </div>
  );
};

export default ShortSong;