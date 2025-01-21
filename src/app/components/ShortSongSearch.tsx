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
    <Link href={`${pageUrl}`}>
      <div className="bg-white p-6 border-b ml-10 w-3/4">
        
          <h1 className='text-2xl font-bold'>{musicName}</h1>
                    
            <p className="text-slate-500 text-xs"> Artista: {artist}</p>
            <p className="text-slate-500 text-xs" > Compositor: {composer}</p>
            <p className="text-slate-500 mb-4 text-xs" > Gênero: {genre}</p>
            <p className="text-black">
            {description}
            </p>
          
        </div>
      </Link>  
  );
};

export default ShortSongSearch;