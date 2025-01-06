import React from 'react';

interface ShortSongProps {
    musicName: string;
    description: string;
    composer: string;
    artist: string;
  }

const ShortSong = ({musicName, description, composer, artist}: ShortSongProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-xs w-full">
            <h2 className="text-xl font-bold text-pink-800">{musicName}</h2>
            <p className="text-gray-400 text-xs"> Artista: {artist}</p>
            <p className="text-gray-400 mb-4 text-xs" > Compositor: {composer}</p>
            <p className="text-gray-600">
            {description}
            </p>
          </div>
  );
};

export default ShortSong;