import React from 'react';
import Link from 'next/link';

interface ShortSongProps {
    musicName: string;
    description: string;
    composer: string;
    artist: string;
    pageUrl: string;
  }

const ShortSong = ({musicName, description, composer, artist, pageUrl}: ShortSongProps) => {
  return (
    <div className="p-6 rounded-lg shadow-md max-w-xs w-full bg-palet-white">
      <Link href={`/lyrics/${pageUrl}`} className="text-2xl font-bold text-palet-blue1">
        {musicName}
      </Link>              
      <p className="text-palet-blue2 text-xs"> Artista: {artist}</p>
      <p className="text-palet-blue2 mb-4 text-xs" > Compositor: {composer}</p>
      <p className="text-palet-blue1">
        {description}
      </p>
    </div>
  );
};

export default ShortSong;