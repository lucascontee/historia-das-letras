import React from 'react';

interface MusicPageProps {
    title: string;
    description: React.ReactNode;
    composer: string;
    artist: string;
  }

const MusicPage = ({title, description, composer, artist}: MusicPageProps) => {
  return (
    <div className="flex justify-center">
      <div className="bg-white p-6 rounded-lg w-2/4 mt-5">
        <h1 className="text-8xl text-gray-800 mb-5">{title}</h1>
        <p className="text-pink-800 text-xl"> Artista: {artist}</p>
        <p className="text-pink-800 mb-5 text-xl" > Compositor: {composer}</p>
        <p className="text-gray-700 text-xl">{description}</p>
      </div>
    </div>
  );
};

export default MusicPage;