import Footer from "@/app/components/Footer";
import MusicPage from "../../../components/MusicPage";
import Nav from "../../../components/Nav";
import ShortSong from "@/app/components/ShortSong";

const Yestarday: React.FC = () => {

  
  return (
    <div>
        <Nav />
        <MusicPage
        title="BOHEMIAN RHAPSODY"
        description={
          <>
            <strong>Bohemian Rhapsody</strong>, icônica música do <strong>Queen</strong>, escrita por <strong>Freddie Mercury</strong>, é conhecida por sua estrutura única e por combinar diferentes estilos musicais, incluindo rock, ópera e balada. Lançada em <strong>1975</strong>, ela não segue a fórmula convencional de uma canção pop ou rock e, em vez disso, apresenta uma narrativa complexa e cheia de símbolos, inclusive, essas caracteristicas foram um impasse em seu lançamento, a gravadora achou a música grande demais para as rádios. A história da música envolve um jovem que confessa ter cometido um assassinato, mas luta com sua culpa e busca uma forma de redenção, tudo isso no meio de uma série de transições emocionais e intensas.

            <br />
            <br />

            Embora <strong>Mercury</strong> tenha dito que não existe uma história “real” por trás da letra, muitos acreditam que <strong>&quot;Bohemian Rhapsody&quot;</strong> trata de uma batalha interna, explorando temas de culpa, angústia e possível liberdade. A música gerou inúmeras interpretações, seja como um comentário sobre a vida de <strong>Mercury</strong> ou uma metáfora para a luta de uma alma em busca de consolo e salvação. A popularidade dessa obra-prima permanece até hoje, com sua mistura de musicalidade e complexidade lírica sendo aclamada por gerações.

            <br />
            <br />

            A música também conta por um solo genial de <strong>Brian May</strong>, que pode ser considerado um dos mais belos da história da música.
          </>
        }
        artist="Queen"
        composer="Freddie Mercury"
        imageUrlComposer="queen.jpg"
        imgDescription="Queen"
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