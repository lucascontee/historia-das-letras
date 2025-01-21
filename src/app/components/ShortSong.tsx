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
    <Link href={`/lyrics/${pageUrl}`} className="">
      <div className="p-6 rounded-lg shadow-md h-56 max-w-xs w-full bg-white hover:bg-palet-white2 hover:shadow-xl hover:-translate-y-4 hover:-translate-x-2 transition-all duration-300 hover:border hover:border-black">

        <h1 className="text-2xl font-bold">{musicName}</h1>             
        <p className="text-slate-500 text-xs"> Artista: {artist}</p>
        <p className="text-slate-500 mb-4 text-xs" > Compositor: {composer}</p>
        <p className="text-palet-blue1"> {description}</p>

      </div>
    </Link> 
  );
};

export default ShortSong;