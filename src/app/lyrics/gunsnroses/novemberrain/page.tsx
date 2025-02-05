import Footer from "@/app/components/Footer";
import MusicPage from "../../../components/MusicPage";
import Nav from "../../../components/Nav";
import ShortSong from "@/app/components/ShortSong";

const NovemberRain: React.FC = () => {

  
  return (
    <div>
        <Nav />
        <MusicPage
        title="NOVEMBER RAIN"
        description={
        <>
          &quot;November Rain&quot; é uma balada épica da banda Guns N&apos; Roses, lançada em
          <strong> 1991</strong> como parte do álbum <strong>Use Your Illusion I</strong>. A música é conhecida por sua longa duração, seu arranjo orquestral e pela <strong>expressividade emocional</strong> que transborda nas letras e na melodia.
          <br />
          <br />


          A canção foi composta por <strong>Axl Rose</strong>, o líder da banda, e fala sobre os altos e baixos de um relacionamento. Ela descreve como o tempo pode
          suavizar as dificuldades, mas também aborda temas como o <strong>sofrimento</strong> e a <strong>solidão</strong> que muitas vezes acompanham a perda e a separação.
          <br />
          <br />

          &quot;November Rain&quot; é uma das músicas mais conhecidas do Guns N&apos; Roses é <strong>um verdadeiro clássico do rock</strong>. A música foi lançada como single e se tornou um marco na história do rock, com seu famoso clipe, que apresenta cenas dramáticas de chuva e um casamento.
          <br />
          <br />

          A música dura impressionantes 8 minutos e 57 segundos, e foi um grande sucesso nas paradas, chegando a alcançar o 3º lugar na Billboard Hot 100. Seu <strong>clipe icônico</strong>, dirigido por Andy Morahan, também se destacou pela produção cinematográfica, com uma narrativa envolvente e visualmente marcante.
          <br />
          <br />

          A canção foi a primeira da banda a usar um arranjo orquestral completo, com uma <strong>orquestra de 50 músicos</strong> participando da gravação. Esse
          elemento foi uma inovação no som do Guns N&apos; Roses, que até então era mais conhecido por sua sonoridade de rock pesado. Tudo isso sem contar que a música tem, que para muitos é, o melhor solo de guitarra ja feito
          <br />
          <br />
        
        </>
        }
        artist="Guns N' Roses"
        composer="Darren A Reed / Duff McKagan / Izzy Stradlin / Matt Sorum / Saul Hudson / W. Axl Rose"
        imageUrlComposer="gunsnroses.jpg"
        imgDescription="Guns N' Roses"
        />

    <hr className="w-4/5 m-auto mt-10"/>

    <h1 className="text-center text-4xl font-bold text-palet-brown1 mt-20 mb-4">MÚSICAS RELACIONADAS</h1>

    <div className="flex flex-wrap justify-center gap-8 p-6">
      
    <ShortSong
      musicName="Yesterday"
      description="Escrita por Paul Mccartney, Yestardey é a música com mais covers da história, e seu primeiro nome foi Ovos Mexidos"
      artist="The Beatles"
      composer="Lennon/Mccartney"
      pageUrl="thebeatles/yesterday"
      />

      <ShortSong
        musicName="Bohemian Rhapsody"
        description="Uma das mais emblemáticas do rock, tem uma narrativa complexa, com várias mudanças de estilo musical, e a história da letra é misteriosa."
        artist="Queen"
        composer="Freddie Mercury"
        pageUrl="queen/bohemianrhapsody"
      />

      
      <ShortSong
        musicName="Hotel California"
        description="Hotel California é uma metáfora para o estilo de vida glamouroso e perigoso de Los Angeles nos anos 70."
        artist="Eagles"
        composer="Glenn Lewis Frey / Don Felder / Donald Hugh Henley"
        pageUrl="eagles/hotelcalifornia"
        />
    </div>
    <Footer/>
    </div>
    
  );
};

export default NovemberRain;