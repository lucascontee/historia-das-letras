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
      <div className="bg-palet-white border-b border-black p-6 ml-10 w-3/4 hover:bg-palet-white2 transition-all duration-300">
        
          <h1 className='text-2xl font-bold'>{musicName}</h1>
                    
            <p className="text-gray-500 text-xs"> Artista: {artist}</p>
            <p className="text-gray-500 text-xs" > Compositor: {composer}</p>
            <p className="text-gray-500 mb-4 text-xs" > Gênero: {genre}</p>
            <p className="text-black">
            {description}
            </p>
          
        </div>
      </Link>  
  );
};

export default ShortSongSearch;