import React from "react";
import Nav from "./components/Nav";
import ShortSong from "./components/ShortSong";
import Head from "next/head";
import Footer from "./components/Footer";
import Link from "next/link";



export default function Home() {
  return (
    <div>
      <Head> 
        <title>História das Músicas</title>
      </Head>
      <Nav /> 
      <div className="flex flex-col">

        <div className="text-center justify-center mb-10 h-screen bg-palet-white"	  style={{
          backgroundImage: 'url(/img/background.jpg)',
          backgroundSize: 'cover',   
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat',  
          height: '55vh'
        }}>

          <div className="justify-self-start	mt-20 ml-10">
            <h1 className="text-5xl font-bold font-script text-white mb-4 text-5xl xs:text-9xl">História das Músicas</h1>
            <p className="text-base text-white max-w-3xl mx-auto xs:text-sm">
            Aqui nós vamos te contar como que a sua música preferida foi composta, de onde surgiu a inspiração para escrever.
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-center text-4xl font-bold mt-20 mb-8">MÚSICA DO DIA</h1>

          <Link href="/lyrics/thebeatles/yesterday" className="flex justify-center mb-20">
            <div className="p-6 rounded-lg shadow-md h-80 max-w-6xl w-xs bg-white hover:bg-palet-white2 hover:shadow-xl hover:-translate-y-4 transition-all duration-300 border border-black">

              <h1 className="text-8xl font-script font-bold text-center">Yesterday</h1>             
              <p> <strong>Artista</strong>: The Beatles</p>
              <p> <strong>Compositor:</strong> Lennon/Mccartney</p>
              <p> <strong>Data de Lançamento:</strong> 29/07/1965</p>
              <p className="mb-2"> <strong>Genêro:</strong> Rock</p>
              <p> Escrita por Paul Mccartney, Yestardey é a música com mais covers da história, e seu primeiro nome foi Ovos Mexidos. Foi a primeira música feita por único beatle</p>

            </div>
          </Link>
        </div>

        <hr className="mt-10 border-palet-brown1" />

        <h1 className="text-center text-4xl font-bold mt-20 mb-4">HISTÓRIAS RECOMENDADAS</h1>

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
          description="Reflete a resistência de Chico Buarque e Gilberto Gil contra a censura da ditadura militar "
          artist="Chico Buarque"
          composer="Chico Buarque / Gilberto Gil "
          pageUrl="chicobuarque/calice"
          />

          <ShortSong
          musicName="Eleanor Rigby"
          description="Reflete as inspirações de Paul McCartney em sua convivência com pessoas solitárias"
          artist="The Beatles"
          composer="Lennon/Mccartney"
          pageUrl="thebeatles/eleanorrigby"
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
          musicName="Another Brick In The Wall"
          description="Uma crítica ao sistema educacional rígido e opressor das escolas autoritárias que roger frequentou"
          artist="Pink Floyd"
          composer="Roger Waters"
          pageUrl="pinkfloyd/anotherbrickinthewall"
          />

          <ShortSong
          musicName="O Mundo É Um Moinho"
          description="Cartola escreveu uma música para sua enteada, relatando os quão perigoso pode ser o mundo."
          artist="Cartola"
          composer="Cartola"
          pageUrl="cartola/omundoeummoinho"
          />

          
          <ShortSong
          musicName="O Tempo Não Para"
          description="Uma música carregada de protestos e críticas, escrita por Cazuza, durante o período em que ele estava doente"
          artist="Cazuza"
          composer="Cazuza"
          pageUrl="cazuza/otemponaopara"
          />
        </div>


        <div className="flex flex-wrap justify-center gap-8 p-6">
          
          <ShortSong
          musicName="Hey Jude"
          description="Paul Mccartney escreveu Hey Jude para Julian Lennon, para confortar o filho de John Lennon."
          artist="The Beatles"
          composer="Lennon/Mccartney"
          pageUrl="thebeatles/heyjude"
          />

          <ShortSong
          musicName="Redemption Song"
          description="Escrita por Bob Marley, inspirada em Marcus Garvey, fala sobre liberdade, resistência e redenção, tornando-se um hino atemporal."
          artist="Bob Marley"
          composer="Bob Marley"
          pageUrl="bobmarley/redemptionsong"
          />

          
          <ShortSong
          musicName="Que País é Este"
          description="Uma crítica à corrupção e desigualdade no Brasil, Que País é Este reflete indignação e protesto"
          artist="Legião Urbana"
          composer="Renato Russo"
          pageUrl="legiaourbana/quepaiseeste"
          />
        </div>


        <div className="flex flex-wrap justify-center gap-8 p-6">
          
          <ShortSong
          musicName="November Rain"
          description="Uma balada melancólica e poderosa sobre o fim de um relacionamento e a dor que vem com a perda"
          artist="Guns n' Roses"
          composer=" Darren A Reed / Duff McKagan / Izzy Stradlin / Matt Sorum / Saul Hudson / W. Axl Rose"
          pageUrl="gunsnroses/novemberrain"
          />

          <ShortSong
          musicName="Garota de Ipanema"
          description="Uma das músicas brasileiras mais famosas do mundo, Garota de Ipanema celebra a beleza e o encanto de uma pessoa real"
          artist="Tom Jobim e Vinícius de Moraes"
          composer="Tom Jobim / Vinícius de Moraes"
          pageUrl="tomjobim/garotadeipanema"
          />

          
          <ShortSong
          musicName="Wish You Were Here"
          description="Wish You Were Here reflete sobre a ausência e a perda, sendo um tributo a Syd Barrett, ex-integrante da banda."
          artist="Pink Floyd"
          composer="Roger Waters / David Gilmour"
          pageUrl="pinkfloyd/wishyouwerehere"
          />
        </div>
        <Footer />
      </div>
      
    </div>
      
  );
}
