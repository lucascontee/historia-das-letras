import Footer from "@/app/components/Footer";
import MusicPage from "../../../components/MusicPage";
import Nav from "../../../components/Nav";
import ShortSong from "@/app/components/ShortSong";

const Anotherbrickinthewall: React.FC = () => {

  
  return (
    <div>
        <Nav />
        <MusicPage
        title="WISH YOU WERE HERE"
        description={
          <>
            <strong>&quot;Wish You Were Here&quot;</strong> é uma das músicas mais icônicas do <strong>Pink Floyd</strong>, lançada em <strong>1975</strong> no álbum de mesmo nome. A canção foi composta por <strong>Roger Waters</strong> e <strong>David Gilmour</strong>, e carrega uma profunda carga emocional.
            <br />
            <br />

      
            A música foi escrita como um <strong>tributo a Syd Barrett</strong>, ex-integrante e fundador da banda, que deixou o grupo devido a problemas mentais agravados pelo uso excessivo de drogas. A letra expressa o sentimento de ausência e desconexão, refletindo a dor que a banda sentia pela perda de Barrett.
            <br />
            <br />

          
            O início da gravação é marcado pelo som de um rádio sendo ajustado, criando uma sensação de distância e isolamento. A icônica introdução de violão foi criada por <strong>David Gilmour</strong>, e sua melodia melancólica reforça a emoção transmitida pela letra.
            <br />
            <br />

          
            O verso <strong>&quot;How I wish, how I wish you were here&quot;</strong> representa o desejo de reencontrar alguém que se perdeu ao longo do tempo. Essa mensagem tornou a música um hino para aqueles que sentem saudade de alguém, seja por separação ou perda definitiva.
            <br />
            <br />

          
            <strong>&quot;Wish You Were Here&quot;</strong> continua sendo uma das músicas mais amadas do <strong>Pink Floyd</strong>, com sua melodia inesquecível e sua temática atemporal sobre ausência e nostalgia. Até hoje, é lembrada como uma das maiores obras do rock progressivo.
      
          </>
        }
        artist="Pink Floyd"
        composer="Roger Waters e David Gilmour"
        imageUrlComposer="pinkfloyd.jpg"
        imgDescription="Pink Floyd"
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

export default Anotherbrickinthewall;