import React from 'react';
import Image from 'next/image';

interface MusicPageProps {
    title: string;
    description: React.ReactNode;
    composer: string;
    artist: string;
    imageUrlComposer: string;
  }

const MusicPage = ({title, description, composer, artist, imageUrlComposer}: MusicPageProps) => {
  return (
    <div className="flex justify-center mt-10">
      <div className="bg-white p-6 w-full max-w-4xl px-4 mt-5">
        <h1 className="text-8xl text-slate-800 mb-5">{title}</h1>
        <p className="text-slate-600 text-xl"> Artista: {artist}</p>
        <p className="text-slate-600 text-xl mb-10"> Compositor: {composer}</p>

        <div className="relative w-128 h-96 mb-10" style={{ height: '70vh'}}>
          < Image fill={true} src={`/img/${imageUrlComposer}`} alt={`Foto ${artist}`} className="rounded-lg object-contain" />
        </div>

        <p className="text-gray-700 text-lg	">{description}</p>
      </div>
    </div>
  );
};

export default MusicPage;