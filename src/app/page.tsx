import React from "react";
import Nav from "./components/Nav";
import ShortSong from "./components/ShortSong";
import Head from "next/head";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <div>
      <Head> 
        <title>História das Letras</title>
      </Head>
      <Nav /> 
      <div className="flex flex-col w-screen">

        <div className="text-center justify-center mb-10 h-screen w-screen bg-palet-white"	  style={{
          backgroundImage: 'url(/img/background.jpg)',
          backgroundSize: 'cover',   
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat',  
          height: '55vh'
        }}>

          <div className="justify-self-start	mt-20 ml-10">
            <h1 className="text-5xl font-bold font-script text-white mb-4 text-5xl xs:text-9xl">História das Letras</h1>
            <p className="text-base text-white max-w-3xl mx-auto xs:text-sm">
            Aqui nós vamos te contar como que a sua música preferida foi composta, de onde surgiu a inspiração para escrever.
            </p>
          </div>
      
          
        </div>

        <h1 className="text-center text-palet-blue1 text-4xl font-bold mt-20 mb-4">HISTÓRIAS RECOMENDADAS</h1>

        <div className="flex flex-wrap justify-center gap-8 p-6">
          
          <ShortSong
          musicName="Yesterday"
          description="Escrita por Paul Mccartney, Yestardey é a música com mais covers da história, e seu primeiro nome foi Ovos Mexidos"
          artist="The Beatles"
          composer="Lennon/Mccartney"
          pageUrl="thebeatles/yesterday"
          />

          <ShortSong
          musicName="Stairway to Heaven"
          description="Stairway to Heaven é considerada um hino do rock, marcada pelo icônico solo de guitarra e uma narrativa mística sobre a busca espiritual."
          artist="Led Zeppelin"
          composer="Jimmy Page / Robert Plant"
          pageUrl="ledzeppelin/stairwaytoheaven"
          />

          
          <ShortSong
          musicName="Hotel California"
          description="Hotel California é uma metáfora para o estilo de vida glamouroso e perigoso de Los Angeles nos anos 70."
          artist="Eagles"
          composer="Glenn Lewis Frey / Don Felder / Donald Hugh Henley"
          pageUrl="eagles/hotelcalifornia"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-8 p-6">
          
          <ShortSong
          musicName="Cálice"
          description="Escrita por Paul Mccartney, Yestardey é a música com mais covers da história, e seu primeiro nome foi Ovos Mexidos"
          artist="The Beatles"
          composer="Lennon/Mccartney"
          pageUrl="yesterday"
          />

          <ShortSong
          musicName="Yestarday"
          description="Escrita por Paul Mccartney, Yestardey é a música com mais covers da história, e seu primeiro nome foi Ovos Mexidos"
          artist="The Beatles"
          composer="Lennon/Mccartney"
          pageUrl="yesterday"
          />

          
          <ShortSong
          musicName="Bohemian Rhapsody"
          description="Uma das mais emblemáticas do rock, tem uma narrativa complexa, com várias mudanças de estilo musical, e a história da letra é misteriosa."
          artist="Queen"
          composer="Freddie Mercury"
          pageUrl="queen/bohemianrhapsody"
          />
        </div>


        <div className="flex flex-wrap justify-center gap-8 p-6">
          
          <ShortSong
          musicName="Yestarday"
          description="Escrita por Paul Mccartney, Yestardey é a música com mais covers da história, e seu primeiro nome foi Ovos Mexidos"
          artist="The Beatles"
          composer="Lennon/Mccartney"
          pageUrl="yesterday"
          />

          <ShortSong
          musicName="Yestarday"
          description="Escrita por Paul Mccartney, Yestardey é a música com mais covers da história, e seu primeiro nome foi Ovos Mexidos"
          artist="The Beatles"
          composer="Lennon/Mccartney"
          pageUrl="yesterday"
          />

          
          <ShortSong
          musicName="Yestarday"
          description="Escrita por Paul Mccartney, Yestardey é a música com mais covers da história, e seu primeiro nome foi Ovos Mexidos"
          artist="The Beatles"
          composer="Lennon/Mccartney"
          pageUrl="yesterday"
          />
        </div>


        <div className="flex flex-wrap justify-center gap-8 p-6">
          
          <ShortSong
          musicName="Yestarday"
          description="Escrita por Paul Mccartney, Yestardey é a música com mais covers da história, e seu primeiro nome foi Ovos Mexidos"
          artist="The Beatles"
          composer="Lennon/Mccartney"
          pageUrl="yesterday"
          />

          <ShortSong
          musicName="Yestarday"
          description="Escrita por Paul Mccartney, Yestardey é a música com mais covers da história, e seu primeiro nome foi Ovos Mexidos"
          artist="The Beatles"
          composer="Lennon/Mccartney"
          pageUrl="yesterday"
          />

          
          <ShortSong
          musicName="Yestarday"
          description="Escrita por Paul Mccartney, Yestardey é a música com mais covers da história, e seu primeiro nome foi Ovos Mexidos"
          artist="The Beatles"
          composer="Lennon/Mccartney"
          pageUrl="yesterday"
          />
        </div>


        <div className="flex flex-wrap justify-center gap-8 p-6">
          
          <ShortSong
          musicName="Yestarday"
          description="Escrita por Paul Mccartney, Yestardey é a música com mais covers da história, e seu primeiro nome foi Ovos Mexidos"
          artist="The Beatles"
          composer="Lennon/Mccartney"
          pageUrl="yesterday"
          />

          <ShortSong
          musicName="Yestarday"
          description="Escrita por Paul Mccartney, Yestardey é a música com mais covers da história, e seu primeiro nome foi Ovos Mexidos"
          artist="The Beatles"
          composer="Lennon/Mccartney"
          pageUrl="yesterday"
          />

          
          <ShortSong
          musicName="Yestarday"
          description="Escrita por Paul Mccartney, Yestardey é a música com mais covers da história, e seu primeiro nome foi Ovos Mexidos"
          artist="The Beatles"
          composer="Lennon/Mccartney"
          pageUrl="yesterday"
          />
        </div>
        <Footer />
      </div>
      
    </div>
      
  );
}
