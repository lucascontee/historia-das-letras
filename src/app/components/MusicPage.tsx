import React from 'react';
import Image from 'next/image';

interface MusicPageProps {
    title: string;
    description: React.ReactNode;
    composer: string;
    artist: string;
    imageUrlComposer: string;
    imgDescription: string;
  }

const MusicPage = ({title, description, composer, artist, imageUrlComposer, imgDescription}: MusicPageProps) => {
  return (
    <div className="flex justify-center mt-10">
      <div className="p-6 w-full bg-palet-white2 rounded-xl border border-gray-300 max-w-4xl px-4 mt-5">

        <h1 className="text-8xl text-black mb-5">{title}</h1>
        <p className="rounded-xl text-xl"> Artista: {artist}</p>
        <p className="rounded-xl text-xl mb-10"> Compositor: {composer}</p>

        <div className="relative w-128 h-96" style={{ height: '70vh'}}>
          < Image fill={true} src={`/img/${imageUrlComposer}`} alt={`Foto ${artist}`} className="rounded-lg object-contain" />
        </div>
        <p className="text-xs	text-gray-500 mb-6 ml-2">&copy; {imgDescription}</p>

        <p className="text-black700 text-lg">{description}</p>
      </div>
    </div>
  );
};

export default MusicPage;