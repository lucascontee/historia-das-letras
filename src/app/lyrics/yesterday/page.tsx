import MusicPage from "../../components/MusicPage";
import Nav from "../../components/Nav";
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
        />
        <hr className="w-4/5 m-auto mt-10"/>

        <h1 className="text-center text-4xl font-bold text-slate-800 mt-20 mb-4">MÚSICAS RELACIONADAS</h1>

        <div className="flex flex-wrap justify-center gap-8 p-6 bg-palet-blue1">
          
          <ShortSong 
            musicName="In My Life"
            artist="The Beatles"
            composer="Lennon/McCartney"
            description="Uma música para lembrar a infância do John"
            pageUrl="inmylife"
          />

          <ShortSong
            musicName="Stairway to Heaven"
            description="Escrita por Paul Mccartney, Yestardey é a música com mais covers da história, e seu primeiro nome foi Ovos Mexidos"
            artist="Led Zeppelin"
            composer="Robbert Plant"
            pageUrl="stairwaytoheaven"
          />

          
          <ShortSong
            musicName="Hotel Califórnia"
            description="Escrita por Paul Mccartney, Yestardey é a música com mais covers da história, e seu primeiro nome foi Ovos Mexidos"
            artist="Eagles"
            composer="Lennon/Mccartney"
            pageUrl="hotelcalifornia"
          />
        </div>
    </div>

    
  );
};

export default Yestarday;