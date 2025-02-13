import Footer from "@/app/components/Footer";
import MusicPage from "../../../components/MusicPage";
import Nav from "../../../components/Nav";
import ShortSong from "@/app/components/ShortSong";

const Yestarday: React.FC = () => {

  
  return (
    <div>
        <Nav />
        <MusicPage
        title="YESTERDAY"
        description={
          <>
            &quot;<strong>Yesterday</strong>&quot; é uma das canções mais emblemáticas dos Beatles, composta por <strong> <a href="../author/paulmaccartney">Paul McCartney</a></strong> e lançada no álbum <strong>Help! (1965)</strong>. A melodia veio a <strong>McCartney</strong> em um sonho enquanto dormia na casa de sua namorada na época, Jane Asher, em Londres. Quando acordou, ele correu para o piano para tocar a sequência de acordes e confirmar que era uma melodia original.
            <br />
            <br />
            <strong>Paul</strong> passou semanas perguntando a colegas e amigos se reconheciam a música, com medo de ter a roubado inconscientemente de outro compositor. Depois de concluir que era realmente original, ele começou a trabalhar na letra. Curiosamente, a versão inicial da música tinha uma letra provisória que começava com &quot;<strong>Scrambled eggs, oh, my baby, how I love your legs</strong>&quot; (&quot;Ovos mexidos, oh meu amor, como eu amo suas pernas&quot;).
            <br />
            <br />
            A canção finalizada é uma balada melancólica sobre arrependimento e saudade, e se destaca por ser a primeira gravação dos Beatles que contou apenas com um dos membros (<strong>Paul McCartney</strong> acompanhado por um quarteto de cordas, em um arranjo de George Martin).
            <br />
            <br />
            &quot;<strong>Yesterday</strong>&quot; entrou para o Guinness Book como a música mais regravada na história da música popular, com mais de <strong>1.600 versões cover oficialmente registradas.</strong>
          </>
        }
        artist="The Beatles"
        composer="Lennon/Mccartney"
        imageUrlComposer="beatles.jpg"
        imgDescription="The Beatles"
        />
        <hr className="w-4/5 m-auto mt-10"/>

        <h1 className="text-center text-4xl font-bold text-palet-brown1 mt-20 mb-4">MÚSICAS RELACIONADAS</h1>

        <div className="flex flex-wrap justify-center gap-8 p-6">
          
          <ShortSong
            musicName="Bohemian Rhapsody"
            description="Uma das mais emblemáticas do rock, tem uma narrativa complexa, com várias mudanças de estilo musical, e a história da letra é misteriosa."
            artist="Queen"
            composer="Freddie Mercury"
            pageUrl="queen/bohemianrhapsody"
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
        <Footer />
    </div>

    
  );
};

export default Yestarday;